<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Phantom-style Connect — Training Only</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- Strict CSP: no external calls, forms, or iframes -->
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'self';
                 img-src 'self' data:;
                 script-src 'self';
                 style-src 'self' 'unsafe-inline';
                 connect-src 'none';
                 frame-src 'none';
                 form-action 'none';
                 base-uri 'none'">
  <style>
    :root {
      --bg:#0b1220; --card:#121b2f; --text:#e8eefc; --muted:#9fb1d3;
      --accent:#7c5cff; --accent-2:#5b8cff; --border:#2a3657; --good:#34d399; --warn:#f59e0b;
    }
    html, body { height:100%; }
    body { margin:0; background:var(--bg); color:var(--text); font:15px/1.5 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; display:grid; place-items:center; }
    .wrap { width:min(720px, 92vw); display:grid; gap:16px; }
    .card { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:20px; box-shadow:0 12px 30px rgba(0,0,0,.35); }
    h1 { margin:0 0 6px; font-size:22px; }
    p { margin:0 0 12px; color:var(--muted); }
    .btn { display:inline-block; padding:12px 16px; border-radius:10px; border:1px solid transparent; cursor:pointer; font-weight:600; color:#fff; background:linear-gradient(90deg, var(--accent), var(--accent-2)); }
    .btn:active { transform: translateY(1px); }
    .hint { font-size:12px; color:var(--muted); }
    .banner { display:none; margin-top:10px; padding:12px; border:1px solid var(--border); background:#0e1731; border-radius:10px; }
    .banner strong { color:#a9c5ff; }
    /* Modal */
    .modal-backdrop { position:fixed; inset:0; background:rgba(6,10,22,.6); display:none; align-items:center; justify-content:center; }
    .modal { width:min(420px, 92vw); background:#0f1730; border:1px solid var(--border); border-radius:14px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,.6); }
    .modal-hd { padding:14px 16px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border); }
    .modal-ttl { font-weight:700; }
    .x { background:none; border:none; color:var(--muted); font-size:18px; cursor:pointer; }
    .modal-bd { padding:16px; display:grid; gap:12px; }
    .row { display:flex; align-items:flex-start; gap:10px; }
    .pill { font-size:12px; color:#cdd7f0; background:#0c1428; border:1px solid var(--border); padding:6px 8px; border-radius:999px; }
    .origin { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size:12px; }
    .perm { display:flex; align-items:center; gap:8px; color:#cdd7f0; }
    .dot { width:8px; height:8px; border-radius:50%; background:var(--warn); box-shadow:0 0 0 2px rgba(245,158,11,.15); }
    .modal-ft { padding:14px 16px; border-top:1px solid var(--border); display:flex; gap:10px; justify-content:flex-end; }
    .btn-secondary { background:#0c1428; border:1px solid var(--border); color:#cdd7f0; }
    .btn-primary { background:linear-gradient(90deg, var(--accent-2), var(--accent)); }
    .edu { font-size:12px; color:#a9b8d6; background:#0c1428; border:1px dashed var(--border); padding:10px; border-radius:10px; }
    .check { color:var(--good); font-weight:700; }
  </style>
</head>
<body>
  <main class="wrap">
    <div class="card">
      <h1>Connect wallet</h1>
      <p>This is a training-only demo of a Phantom-style connect flow. Nothing connects or leaves this page.</p>
      <button class="btn" id="openModal">Connect with Phantom</button>
      <div class="hint">On a real prompt, verify the site origin and requested permissions.</div>

      <div class="banner" id="trainingBanner" role="status" aria-live="polite">
        <p><strong>Training mode:</strong> No wallet APIs were called. No data was sent. This is a safe simulation.</p>
        <ul>
          <li><span class="check">Check:</span> Domain matches what you expect (no typos, correct TLD).</li>
          <li><span class="check">Check:</span> Wallet prompt shows the same origin you see in the address bar.</li>
          <li><span class="check">Check:</span> Be skeptical of unlimited spend approvals or broad permissions.</li>
        </ul>
      </div>
    </div>

    <div class="card edu">
      <strong>What to look for on real prompts:</strong>
      <div>- Origin should exactly match the site you intended: <span class="origin" id="eduOrigin"></span></div>
      <div>- Permissions should be minimal: read address only unless you intend to sign.</div>
      <div>- Hardware wallets add an extra review step on-device.</div>
    </div>
  </main>

  <!-- Modal -->
  <div class="modal-backdrop" id="backdrop" aria-hidden="true">
    <section class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle">
      <header class="modal-hd">
        <div class="modal-ttl" id="mTitle">Connect to site</div>
        <button class="x" id="closeModal" aria-label="Close">×</button>
      </header>
      <div class="modal-bd">
        <div class="row">
          <span class="pill">Phantom</span>
          <span class="pill">Simulation</span>
        </div>
        <div>
          <div class="hint">Site requesting connection</div>
          <div class="origin" id="reqOrigin"></div>
        </div>
        <div>
          <div class="hint">This site will be able to</div>
          <div class="perm"><span class="dot"></span> View your public wallet address</div>
          <div class="perm"><span class="dot"></span> See connected network</div>
          <div class="perm"><span class="dot"></span> Request a signature (you can decline)</div>
        </div>
        <div class="banner" style="display:none" id="simNote">
          <strong>Simulation only:</strong> Approve here does not connect. It reveals the training banner on the page.
        </div>
      </div>
      <footer class="modal-ft">
        <button class="btn btn-secondary" id="cancel">Cancel</button>
        <button class="btn btn-primary" id="approve">Approve (Simulated)</button>
      </footer>
    </section>
  </div>

  <script>
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancel');
    const approveBtn = document.getElementById('approve');
    const backdrop = document.getElementById('backdrop');
    const banner = document.getElementById('trainingBanner');
    const simNote = document.getElementById('simNote');
    const originTxt = location.protocol + '//' + location.host;
    const reqOrigin = document.getElementById('reqOrigin');
    const eduOrigin = document.getElementById('eduOrigin');

    reqOrigin.textContent = originTxt;
    eduOrigin.textContent = originTxt;

    function openModal() {
      backdrop.style.display = 'flex';
      backdrop.setAttribute('aria-hidden', 'false');
      simNote.style.display = 'block';
    }
    function closeModal() {
      backdrop.style.display = 'none';
      backdrop.setAttribute('aria-hidden', 'true');
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    approveBtn.addEventListener('click', () => {
      // Do NOT call any wallet APIs. Do NOT navigate. Reveal training only.
      console.log('[TRAINING] Phantom-style approve clicked at', new Date().toISOString());
      banner.style.display = 'block';
      openBtn.disabled = true;
      openBtn.textContent = 'Connected (Simulated)';
      closeModal();
    });
  </script>
</body>
</html>
