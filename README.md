# 🛡️ APETHDrainer — ETH Drain Bot for Deployer Wallet

This repository contains the **exact logic** used to monitor and drain ETH from the first America Party deployer wallet in real time.  
It exists as part of a public and permanent commitment to transparency, trustlessness, and community safety.

---

## 🔍 Why This Exists

On Ethereum, **gas = power**.  
A wallet with ETH can always interact with smart contracts — even if ownership is renounced.  

To eliminate that risk, this bot:
- Monitors the deployer wallet
- Instantly drains any ETH it receives
- Prevents the wallet from ever calling a function again

This makes the deployer wallet a **lame duck** — harmless and incapable of interacting.

---

## ✅ Live Bot Details

- **Wallet Address:** 0xa87bbB047b4227be9fAfA45BF78AebF1eF42c98B
- **Runs 24/7** on a secure VPS
- **Drains ETH** every block if any is received
- **Tx Logs & Status** coming soon via dashboard or IPFS

---

## 💡 How It Works

- Script checks deployer wallet's ETH balance every few seconds
- If balance > threshold, it auto-sends the ETH to a cold wallet or burn address
- Written in Node.js using `ethers.js`
- Private key and live drain logic are excluded from this repo for security

---

## 🧾 This Repo

This is a **public reference copy** of the logic used in the live bot.

> No private key or `.env` secrets are included.

---

## 🧠 Ethereum = Trustless by Default

Intent isn’t enough — code and verifiability matter more.  
This ETH drain bot removes the need to trust the original deployer wallet ever again.

The token contract no longer depends on the dev.  
It’s on-chain. It’s community-driven. And now it’s safer.

---

## 📎 Links

- 🧠 Medium article: https://firstap.medium.com/first-america-party-on-ethereum-4cac936f72f8

---

## 🤝 Contributing

Feel free to fork and adapt this logic for your own token project.

PRs to improve code, monitoring tools, or dashboard integrations are welcome.

---

## ⚠️ Disclaimer

This repository is for **educational and transparency purposes only**.  
Do **not** upload any private keys here.  
The live version runs in a secure VPS environment.

