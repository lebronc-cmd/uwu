import { ethers } from 'ethers';
import dotenv from 'dotenv';
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;
const TARGET_ADDRESS = process.env.TARGET_ADDRESS;

// Setup
const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Constants
const BOOST_GWEI = ethers.parseUnits("0.1", "gwei");
const REMAINING_ETH = ethers.parseEther("0.00002"); // leave this behind

let lastTx = null;

async function tryDrainETH() {
  if (lastTx) {
    const receipt = await provider.getTransactionReceipt(lastTx.hash);
    if (!receipt) {
      console.log("⏳ Waiting for previous tx to confirm...");
      return;
    }
    lastTx = null;
  }

  const balance = await provider.getBalance(wallet.address);
  const feeData = await provider.getFeeData();
  const latestBlock = await provider.getBlock("latest");

  const base = BigInt(latestBlock.baseFeePerGas.toString());
  const priority = BigInt(feeData.maxPriorityFeePerGas?.toString() ?? ethers.parseUnits("1", "gwei").toString());
  const boost = BigInt(BOOST_GWEI.toString());
  const maxFeePerGas = base + priority + boost;

  const txRequest = {
    to: TARGET_ADDRESS,
    value: ethers.parseEther("0.00001") // dummy value for estimation
  };

  let estimatedGasLimit;
  try {
    estimatedGasLimit = await wallet.estimateGas(txRequest);
  } catch (e) {
    console.error("❌ Gas estimation failed:", e.message || e.reason);
    return;
  }

  const gasLimit = estimatedGasLimit + (estimatedGasLimit / 20n); // +5%
  const gasCost = maxFeePerGas * gasLimit;

  if (balance <= gasCost + REMAINING_ETH) {
    console.log("⚠️ Balance too low to drain safely. Waiting...");
    return;
  }

  const amountToSend = balance - gasCost - REMAINING_ETH;

  if (amountToSend <= 0n) {
    console.log("⚠️ Nothing to send after gas + remainder. Waiting...");
    return;
  }

  console.log("\n=== ETH Drain ===");
  console.log("💰 Balance:       ", ethers.formatEther(balance), "ETH");
  console.log("⛽ Max FeePerGas: ", ethers.formatUnits(maxFeePerGas, "gwei"), "gwei");
  console.log("📦 Gas Cost:      ", ethers.formatEther(gasCost), "ETH");
  console.log("💸 Sending:       ", ethers.formatEther(amountToSend), "ETH");
  console.log("🪙 Leaving behind:", ethers.formatEther(REMAINING_ETH), "ETH");

  try {
    const tx = await wallet.sendTransaction({
      to: TARGET_ADDRESS,
      value: amountToSend,
      gasLimit,
      maxFeePerGas,
      maxPriorityFeePerGas: priority
    });

    lastTx = tx;
    console.log("✅ TX Sent:", tx.hash);
  } catch (err) {
    console.error("❌ TX Failed:", err.reason || err.message);
  }
}

// Run immediately once
tryDrainETH().catch(console.error);

// Then retry every 12 seconds
setInterval(() => {
  tryDrainETH().catch(console.error);
}, 12_000);
