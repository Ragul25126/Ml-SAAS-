// ── ML Workflow Page — Chapter 6 ──

export function renderMLWorkflow(container) {
  container.innerHTML = `
    <div class="page-header">
      <span class="lesson-number">Chapter 6 — The ML Workflow</span>
      <h2>How Every ML Model Learns</h2>
      <p>Every ML model — no matter how complex — follows the same 5-step loop. Master this and you understand all of ML.</p>
    </div>

    <!-- The 5 Steps -->
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:28px;">
      ${[
        { n:'1', emoji:'🎲', color:'var(--accent-cyan)', title:'Initialize', desc:'Start with a random (bad) model' },
        { n:'2', emoji:'🔮', color:'#a78bfa', title:'Predict', desc:'Run the data through the model' },
        { n:'3', emoji:'📉', color:'var(--accent-amber)', title:'Calculate Loss', desc:'Measure how wrong we are' },
        { n:'4', emoji:'⚙️', color:'var(--accent-emerald)', title:'Update Weights', desc:'Nudge the model to be less wrong' },
        { n:'5', emoji:'🔁', color:'#f472b6', title:'Repeat', desc:'Do this thousands of times' }
      ].map(s => `
        <div class="workflow-step-card" id="step-card-${s.n}" style="glass-card;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:18px;text-align:center;transition:all 0.4s;">
          <div style="font-size:1.8rem;margin-bottom:8px;">${s.emoji}</div>
          <div style="font-size:0.65rem;color:${s.color};font-weight:800;letter-spacing:0.1em;margin-bottom:4px;">STEP ${s.n}</div>
          <div style="font-size:0.88rem;font-weight:700;margin-bottom:6px;">${s.title}</div>
          <div style="font-size:0.72rem;color:var(--text-muted);line-height:1.4;">${s.desc}</div>
        </div>
      `).join('')}
    </div>

    <!-- Theory: What is Loss? -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:28px;">
      <div class="glass-card">
        <h4 style="margin-bottom:12px;color:var(--accent-amber);">📉 What is Loss?</h4>
        <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;">
          <strong>Loss</strong> = how wrong the model is. It's the gap between what the model <em>predicted</em> and what the <em>actual answer</em> was.
          <br><br>
          Like a student who guessed 80 on a test but the answer was 95 — the error is 15. We want this number to reach <strong>zero</strong>.
        </p>
      </div>
      <div class="glass-card">
        <h4 style="margin-bottom:12px;color:var(--accent-emerald);">⚙️ What are Weights?</h4>
        <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;">
          <strong>Weights</strong> = the dials inside the model. Think of a radio dial — at first it's on the wrong station. Each training step turns the dial a tiny bit until you find the right station.
          <br><br>
          <strong>Gradient Descent</strong> is the method that figures out which direction to turn the dial.
        </p>
      </div>
    </div>

    <!-- The Big Interactive Visualization -->
    <div class="glass-card" style="border-top:4px solid var(--accent-emerald);">
      <div class="glass-card-header">
        <h3>🎬 Watch the Training Loop LIVE</h3>
        <p style="font-size:0.88rem;color:var(--text-secondary);">See the prediction line (green) move toward the data, and the error drop in real time.</p>
      </div>

      <div style="display:grid;grid-template-columns:2fr 1fr;gap:24px;margin-top:24px;align-items:start;">

        <!-- Canvas Area -->
        <div>
          <!-- Step Indicator -->
          <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;" id="step-indicators">
            ${['Initialize','Predict','Calculate Loss','Update Weights','Repeat'].map((s,i) => `
              <div id="ind-${i+1}" style="padding:5px 12px;border-radius:20px;font-size:0.7rem;font-weight:700;background:rgba(255,255,255,0.04);color:var(--text-muted);transition:all 0.3s;">${i+1}. ${s}</div>
            `).join('')}
          </div>
          <div style="position:relative;border-radius:12px;overflow:hidden;background:rgba(0,0,0,0.3);">
            <canvas id="workflow-canvas" style="width:100%;height:320px;display:block;"></canvas>
          </div>
          <div style="display:flex;gap:10px;margin-top:14px;">
            <button id="wf-btn-play" class="btn btn-primary btn-pill" style="font-size:0.82rem;">▶ Start Training</button>
            <button id="wf-btn-step" class="btn btn-secondary btn-pill" style="font-size:0.82rem;">⏭ Step Once</button>
            <button id="wf-btn-reset" class="btn btn-secondary" style="font-size:0.82rem;margin-left:auto;">🔄 Reset</button>
          </div>
        </div>

        <!-- Metrics Panel -->
        <div style="display:flex;flex-direction:column;gap:14px;">
          <!-- Current Step -->
          <div style="background:rgba(255,255,255,0.03);border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.08em;">Current Step</div>
            <div id="wf-step-name" style="font-size:1rem;font-weight:800;color:var(--accent-emerald);">—</div>
          </div>

          <!-- Epoch -->
          <div style="background:rgba(255,255,255,0.03);border-radius:12px;padding:16px;">
            <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:6px;">Training Epoch</div>
            <div style="display:flex;align-items:baseline;gap:6px;">
              <span id="wf-epoch" style="font-size:2rem;font-weight:900;color:var(--accent-cyan);">0</span>
              <span style="font-size:0.75rem;color:var(--text-muted);">/ 50</span>
            </div>
          </div>

          <!-- Loss -->
          <div style="background:rgba(255,255,255,0.03);border-radius:12px;padding:16px;">
            <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:6px;">Total Loss (Error)</div>
            <div id="wf-loss" style="font-size:1.8rem;font-weight:900;color:var(--accent-amber);">—</div>
            <div id="wf-loss-bar" style="height:4px;background:rgba(255,255,255,0.05);border-radius:2px;margin-top:10px;overflow:hidden;">
              <div id="wf-loss-fill" style="height:100%;width:100%;background:var(--accent-amber);transition:width 0.4s ease;"></div>
            </div>
          </div>

          <!-- Line equation -->
          <div style="background:rgba(255,255,255,0.03);border-radius:12px;padding:16px;">
            <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:6px;">Model Line (y = mx + b)</div>
            <div style="font-family:monospace;font-size:0.85rem;color:var(--accent-emerald);">
              m = <span id="wf-m">0.00</span><br>
              b = <span id="wf-b">0.00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  /* ── Canvas Setup ── */
  const canvas = document.getElementById('workflow-canvas');
  const ctx = canvas.getContext('2d');

  const resize = () => {
    const box = canvas.getBoundingClientRect();
    canvas.width = box.width;
    canvas.height = box.height;
  };
  resize();

  // Data points (house size vs price, normalized)
  const rawPoints = [
    [1,1.2],[2,1.8],[3,3.1],[4,3.9],[5,5.2],
    [6,5.8],[7,7.1],[8,7.8],[9,9.0],[10,10.2]
  ];

  const W = canvas.width, H = canvas.height;
  const pad = 40;

  function toCanvasX(x) { return pad + (x / 10) * (W - 2*pad); }
  function toCanvasY(y) { return H - pad - (y / 12) * (H - 2*pad); }

  function drawScene(m, b, highlightLoss = false) {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const x = toCanvasX(i);
      ctx.beginPath(); ctx.moveTo(x, pad); ctx.lineTo(x, H-pad); ctx.stroke();
      const y = toCanvasY(i);
      ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(W-pad, y); ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(pad, H-pad); ctx.lineTo(W-pad, H-pad); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pad, H-pad); ctx.lineTo(pad, pad); ctx.stroke();

    // Axis labels
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '10px Inter, sans-serif';
    ctx.fillText('House Size →', W/2 - 30, H - 10);
    ctx.save(); ctx.translate(12, H/2+30); ctx.rotate(-Math.PI/2);
    ctx.fillText('Price →', 0, 0); ctx.restore();

    // Data points with loss lines
    rawPoints.forEach(([x, y]) => {
      const cx = toCanvasX(x);
      const cy = toCanvasY(y);
      const predY = m * x + b;
      const predCY = toCanvasY(predY);

      if (highlightLoss) {
        ctx.strokeStyle = 'rgba(245,158,11,0.5)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, predCY); ctx.stroke();
        ctx.setLineDash([]);
      }

      // Data point
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.fill();
      ctx.strokeStyle = 'var(--accent-cyan)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Prediction line
    const x0 = 0, x1 = 10.5;
    const y0 = m * x0 + b, y1 = m * x1 + b;
    ctx.beginPath();
    ctx.moveTo(toCanvasX(x0), toCanvasY(y0));
    ctx.lineTo(toCanvasX(x1), toCanvasY(y1));
    ctx.strokeStyle = 'rgba(52,211,153,0.9)';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  /* ── Training State ── */
  let m = 0.1, b = 1.0; // Start close enough that convergence is visible
  let epoch = 0;
  const maxEpochs = 80;
  const lr = 0.025;
  let playing = false;
  let playInterval = null;
  let currentStep = 0; // 0=init,1=predict,2=loss,3=update,4=repeat

  const stepNames = ['Initialize', 'Predict', 'Calculate Loss', 'Update Weights', 'Training...'];
  const stepColors = ['var(--accent-cyan)','#a78bfa','var(--accent-amber)','var(--accent-emerald)','#f472b6'];

  function calcLoss(m, b) {
    return rawPoints.reduce((sum, [x, y]) => {
      const pred = m * x + b;
      return sum + (pred - y) ** 2;
    }, 0) / rawPoints.length;
  }

  function gradientStep(m, b) {
    let dm = 0, db = 0;
    rawPoints.forEach(([x, y]) => {
      const pred = m * x + b;
      const err = pred - y;
      dm += err * x;
      db += err;
    });
    const n = rawPoints.length;
    return [m - lr * (dm / n), b - lr * (db / n)];
  }

  function highlightStep(stepNum) {
    for (let i = 1; i <= 5; i++) {
      const card = document.getElementById(`step-card-${i}`);
      const ind = document.getElementById(`ind-${i}`);
      if (i === stepNum) {
        if (card) card.style.background = 'rgba(52,211,153,0.1)';
        if (card) card.style.borderColor = 'rgba(52,211,153,0.4)';
        if (ind) { ind.style.background = stepColors[i-1]; ind.style.color = '#000'; }
      } else {
        if (card) card.style.background = 'rgba(255,255,255,0.03)';
        if (card) card.style.borderColor = 'rgba(255,255,255,0.07)';
        if (ind) { ind.style.background = 'rgba(255,255,255,0.04)'; ind.style.color = 'var(--text-muted)'; }
      }
    }
  }

  function updateUI(showLoss = false) {
    const loss = calcLoss(m, b);
    const initialLoss = calcLoss(0.1, 1.0);
    document.getElementById('wf-epoch').textContent = epoch;
    document.getElementById('wf-loss').textContent = loss.toFixed(2);
    document.getElementById('wf-m').textContent = m.toFixed(3);
    document.getElementById('wf-b').textContent = b.toFixed(3);
    const pct = Math.max(0, 100 - (loss / initialLoss) * 100);
    document.getElementById('wf-loss-fill').style.width = `${Math.max(2, 100 - pct)}%`;
    drawScene(m, b, showLoss);
  }

  function doStep() {
    currentStep = currentStep % 5 + 1;
    document.getElementById('wf-step-name').textContent = stepNames[currentStep - 1];
    document.getElementById('wf-step-name').style.color = stepColors[currentStep - 1];
    highlightStep(currentStep);

    if (currentStep === 4) {
      [m, b] = gradientStep(m, b);
      epoch++;
      updateUI(false);
    } else {
      updateUI(currentStep === 3);
    }

    if (epoch >= maxEpochs && playing) {
      clearInterval(playInterval);
      playing = false;
      document.getElementById('wf-btn-play').textContent = '✅ Training Done!';
      document.getElementById('wf-step-name').textContent = 'Converged! 🎉';
      highlightStep(4);
    }
  }

  function resetTraining() {
    m = 0.1; b = 1.0; epoch = 0; currentStep = 0; playing = false;
    clearInterval(playInterval);
    document.getElementById('wf-btn-play').textContent = '▶ Start Training';
    document.getElementById('wf-step-name').textContent = '—';
    document.getElementById('wf-epoch').textContent = '0';
    document.getElementById('wf-loss').textContent = '—';
    document.getElementById('wf-loss-fill').style.width = '100%';
    document.getElementById('wf-m').textContent = '0.00';
    document.getElementById('wf-b').textContent = '0.00';
    document.querySelectorAll('[id^="step-card-"]').forEach(el => {
      el.style.background = 'rgba(255,255,255,0.03)';
      el.style.borderColor = 'rgba(255,255,255,0.07)';
    });
    document.querySelectorAll('[id^="ind-"]').forEach(el => {
      el.style.background = 'rgba(255,255,255,0.04)';
      el.style.color = 'var(--text-muted)';
    });
    resize();
    drawScene(m, b);
  }

  document.getElementById('wf-btn-play').onclick = () => {
    if (playing) {
      clearInterval(playInterval); playing = false;
      document.getElementById('wf-btn-play').textContent = '▶ Resume Training';
    } else {
      playing = true;
      document.getElementById('wf-btn-play').textContent = '⏸ Pause';
      playInterval = setInterval(doStep, 350);
    }
  };

  document.getElementById('wf-btn-step').onclick = () => {
    if (!playing) doStep();
  };

  document.getElementById('wf-btn-reset').onclick = resetTraining;


  // Update epoch label
  document.querySelector('#wf-epoch').closest('div').querySelector('span:last-child').textContent = `/ ${maxEpochs}`;

  // Initial draw with better starting position
  resize();
  drawScene(m, b);
}
