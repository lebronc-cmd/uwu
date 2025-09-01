<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Wallet Connect Demo — Training</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body { font-family: system-ui, sans-serif; background:#0b1220; color:#e8eefc; margin:0; display:grid; place-items:center; min-height:100vh; }
    .card { background:#121b2f; padding:28px; border-radius:14px; width: min(520px, 92vw); box-shadow: 0 10px 30px rgba(0,0,0,.35); }
    h1 { margin:0 0 8px; font-size:22px; }
    p { margin:0 0 16px; color:#a9b3c7; }
    .btn { display:inline-block; padding:12px 16px; background:#5b8cff; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:600; }
    .btn:active { transform: translateY(1px); }
    .hint { margin-top:14px; font-size:12px; color:#8fa3c8; }
    .banner { display:none; margin-top:16px; padding:12px; border:1px solid #3a5bd9; background:#0f1a3a; border-radius:10px; }
    .banner strong { color:#7fb3ff; }
    ul { margin:8px 0 0 18px; }
    li { margin:6px 0; }
    code { background:#0c1428; padding:2px 6px; border-radius:6px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Connect your wallet</h1>
    <p>Continue to proceed with a secure connection.</p>
    <button class="btn" id="connectBtn">Connect Wallet</button>
    <div class="hint">By continuing, you agree to the terms.</div>

    <div class="banner" id="trainingBanner" role="status" aria-live="polite">
      <p><strong>Training mode:</strong> This is a safe simulation. Nothing was connected or sent.</p>
      <ul>
        <li>Always verify the domain before clicking “Connect”.</li>
        <li>Your wallet prompt should show the exact site origin you expect.</li>
        <li>Never approve blind “setApprovalForAll” or unlimited spend requests.</li>
        <li>Use hardware wallets and review details on-device.</li>
      </ul>
      <p>Teach-back: name two things you’d check on a real site before connecting.</p>
    </div>
  </div>

  <script>
    const btn = document.getElementById('connectBtn');
    const banner = document.getElementById('trainingBanner');

    btn.addEventListener('click', () => {
      // Prevent any network calls or redirects; just reveal the lesson.
      banner.style.display = 'block';
      // Optional: log locally so trainers can demo without storing data.
      console.log('[TRAINING] Simulated connect clicked at', new Date().toISOString());
      // Disable the button to reinforce that no action occurs.
      btn.disabled = true;
      btn.textContent = 'Simulated';
    });
  </script>
</body>
</html>
