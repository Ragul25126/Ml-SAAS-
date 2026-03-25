// ── Dashboard Page — Premium Redesign ──

export function renderDashboard(container) {

  container.innerHTML = `

    <!-- Hero header -->

    <div class="page-header" style="
      background: linear-gradient(135deg, rgba(0,255,157,0.08) 0%, rgba(212,212,216,0.04) 50%, transparent 100%);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px;
      padding: 36px 40px;
      margin-bottom: 28px;
      position: relative;
      overflow: hidden;
    ">
      <!-- decorative orbs -->
      <div style="
        position:absolute; top:-40px; right:-40px;
        width:240px; height:240px;
        background: radial-gradient(circle, rgba(0,255,157,0.15), transparent 70%);
        border-radius:50%; pointer-events:none;
      "></div>
      <div style="
        position:absolute; bottom:-30px; right:120px;
        width:160px; height:160px;
        background: radial-gradient(circle, rgba(0,255,157,0.1), transparent 70%);
        border-radius:50%; pointer-events:none;
      "></div>

      <div class="page-eyebrow" style="
        font-size:0.67rem; font-weight:700; color:var(--accent-emerald);
        text-transform:uppercase; letter-spacing:0.14em;
        display:flex; align-items:center; gap:8px; margin-bottom:12px;
      ">
        <span style="display:inline-block;width:24px;height:2px;background:var(--accent-emerald);border-radius:2px;"></span>
        Welcome back, Learner 👋
      </div>

      <h2 style="
        font-size:2.4rem; font-weight:800; letter-spacing:-0.04em;
        margin-bottom:12px; line-height:1.1;
        background: linear-gradient(120deg, #fff 30%, var(--accent-emerald) 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      ">ML Visualization Lab</h2>

      <p style="color:var(--text-secondary);font-size:0.98rem;line-height:1.7;max-width:540px;margin-bottom:26px;">
        Learn machine learning through interactive visualizations. Pick an algorithm, adjust parameters, and watch the magic happen in real-time.
      </p>

      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <button class="btn btn-primary btn-pill" onclick="window.__app.navigate('linear-regression')" style="padding: 10px 24px;">
          🚀 Start Learning
        </button>
        <button class="btn btn-secondary btn-pill" onclick="window.__app.navigate('data-playground')" style="padding: 10px 24px;">
          🔬 Open Playground
        </button>
      </div>
    </div>

    <!-- Stat Cards -->
    <div class="dashboard-grid" style="margin-bottom:32px;">
      <div class="glass-card stat-card">
        <div class="stat-icon blue">📊</div>
        <div class="stat-content">
        <h4 class="stat-num" data-target="16">0</h4>
          <p>Interactive Modules</p>
        </div>
        <div class="stat-trend up">+2 new</div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon emerald">🌎</div>
        <div class="stat-content">
          <h4 class="stat-num" data-target="9">0</h4>
          <p>Sample Datasets</p>
        </div>
        <div class="stat-trend up">+1 new</div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon amber">⚡</div>
        <div class="stat-content">
          <h4 style="font-size:1.4rem;font-weight:800;letter-spacing:-0.03em;margin-bottom:4px;">Real-Time</h4>
          <p>In-Browser Training</p>
        </div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon violet">💡</div>
        <div class="stat-content">
          <h4 style="font-size:1.4rem;font-weight:800;letter-spacing:-0.03em;margin-bottom:4px;">Visual</h4>
          <p>Step-by-Step Explanations</p>
        </div>
      </div>
    </div>



    <div class="glass-card" style="margin-bottom:28px;padding:24px 28px; border-left: 4px solid var(--accent-emerald);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
        <div>
          <div style="font-size:0.95rem;font-weight:800;letter-spacing:-0.02em;">Your Progress</div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;">0 of 16 modules completed</div>
        </div>
        <span class="tag tag-emerald" style="padding: 4px 12px; font-size: 0.75rem;">0%</span>
      </div>

      <div style="display:grid;grid-template-columns:repeat(16,1fr);gap:6px;">
        ${['L1','L2','L3','L4','L5','L6','L7','L8','L9','L10','L11','L12','L13','L14','L15','L16'].map((mod, i) => `
          <div title="${['Foundations','Data Basics','Preprocessing','Evaluation','Basic Math','ML Workflow','Loss','Gradient','Linear Reg','Logit Reg','KNN','Metrics','K-Means','Decision Trees','Neural Nets','SVM'][i]}">
            <div style="font-size:0.6rem;color:var(--text-secondary);font-weight:600;margin-bottom:4px;text-align:center;">${mod}</div>
            <div class="progress-bar" style="height: 5px; background: rgba(255,255,255,0.04); border-radius: 3px;">
              <div class="progress-fill" style="width:0%;background:${['var(--accent-cyan)','var(--accent-emerald)','var(--accent-emerald)','var(--gradient-success)','var(--gradient-success)','var(--gradient-success)','var(--gradient-success)','var(--accent-amber)','var(--accent-amber)','var(--accent-amber)','var(--accent-emerald)','var(--accent-emerald)','var(--gradient-warm)','var(--gradient-warm)','linear-gradient(135deg,#34d399,#d4d4d8)','var(--gradient-cool)'][i]}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>



    <div style="display:flex;align-items:center;justify-content:space-between;margin: 40px 0 20px;">
      <div>
        <h3 style="font-size:1.2rem;font-weight:800;letter-spacing:-0.02em;display:flex;align-items:center;gap:10px;">
          <span style="font-size:1.4rem;">📚</span> Course Modules
        </h3>
        <p style="font-size:0.82rem;color:var(--text-muted);margin-top:4px;">Start your ML journey from the basics and work your way up</p>
      </div>

      <div style="display:flex;gap:8px;">
        <button class="btn btn-secondary" style="font-size:0.75rem;padding:7px 16px;border-radius:20px;" id="filter-all">All</button>
        <button class="btn btn-secondary" style="font-size:0.75rem;padding:7px 16px;border-radius:20px;" id="filter-beginner">Beginner</button>
        <button class="btn btn-secondary" style="font-size:0.75rem;padding:7px 16px;border-radius:20px;" id="filter-advanced">Advanced</button>
      </div>
    </div>



    <!-- Lesson Cards -->

    <div class="lesson-grid">

      <div class="glass-card lesson-card" data-page="foundations" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(6,182,212,0.18), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">📖</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 1: Foundations</h4>
          <p>What is AI/ML? Learn the basics, types of machine learning, and how models think.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~10 min</span>
            <span class="btn btn-secondary lesson-cta">Start Here →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="data-basics" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(0,255,157,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">📊</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 2: Data Basics</h4>
          <p>Learn about features, targets, and how we split data for training and testing.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~12 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="data-preprocessing" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(236,72,153,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">📈</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 3: Data Preprocessing</h4>
          <p>Learn how to handle missing values, encode categories, and scale features.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~12 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="model-evaluation" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(6,182,212,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">🧪</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 4: Model Evaluation</h4>
          <p>Master the train/test split and learn to identify overfitting vs underfitting.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~15 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="basic-math" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(245,158,11,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">➕</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 5: Basic Mathematics</h4>
          <p>Mean, median, probability and linear equations — the simple math that powers ML models.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~12 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="ml-workflow" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(244,114,182,0.15), rgba(52,211,153,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">🔄</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 6: ML Workflow</h4>
          <p>Watch the training loop live — prediction line moves, error drops, model learns.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~12 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="loss-function" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(244,63,94,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">📉</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 7: Loss Functions</h4>
          <p>What is "Error"? Visualize distances and see how MSE/MAE measure model performance.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~8 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="gradient-descent" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(245,158,11,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">⛰️</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 8: Gradient Descent</h4>
          <p>The ball rolling down the hill. Watch optimization live and master the learning rate.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~10 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="linear-regression" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(255,255,255,0.18), rgba(212,212,216,0.12));">
          <canvas id="preview-lr" width="320" height="148"></canvas>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 9: Linear Regression</h4>
          <p>Learn how a line fits data points and watch gradient descent optimize step by step.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~10 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="logistic-regression" data-level="intermediate">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(6,182,212,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">📈</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag intermediate">Intermediate</span>
          <h4>Chapter 10: Logistic Regression</h4>
          <p>Moving from lines to S-curves. Learn classification and the Sigmoid function.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~12 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="knn" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(161,161,170,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">👥</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 11: K-Nearest Neighbors</h4>
          <p>Birds of a feather. Predict labels based on the closest neighbors in the data.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~10 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="model-metrics" data-level="intermediate">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(34,197,94,0.15), rgba(212,212,216,0.12));">
          <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:2.8rem;position:relative;z-index:1;">🎯</div>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag intermediate">Intermediate</span>
          <h4>Chapter 12: Model Evaluation</h4>
          <p>Accuracy, Precision, Recall, and the Confusion Matrix. Master the metrics.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~12 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="k-means" data-level="beginner">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(161,161,170,0.18), rgba(6,182,212,0.12));">
          <canvas id="preview-km" width="320" height="148"></canvas>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag beginner">Beginner</span>
          <h4>Chapter 13: K-Means Clustering</h4>
          <p>See how clusters form as centroids move iteration by iteration towards convergence.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~8 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="decision-tree" data-level="intermediate">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(245,158,11,0.18), rgba(244,63,94,0.12));">
          <canvas id="preview-dt" width="320" height="148"></canvas>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag intermediate">Intermediate</span>
          <h4>Chapter 14: Decision Trees</h4>
          <p>Visualize how trees split data and create human-readable decision boundaries.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~12 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="neural-network" data-level="advanced">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(236,72,153,0.18), rgba(212,212,216,0.12));">
          <canvas id="preview-nn" width="320" height="148"></canvas>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag advanced">Advanced</span>
          <h4>Chapter 15: Neural Networks</h4>
          <p>Watch activations flow through layers and weights update during backpropagation.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~15 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

      <div class="glass-card lesson-card" data-page="svm" data-level="intermediate">
        <div class="lesson-card-preview" style="background:linear-gradient(135deg, rgba(6,182,212,0.18), rgba(255,255,255,0.12));">
          <canvas id="preview-svm" width="320" height="148"></canvas>
        </div>
        <div class="lesson-card-body">
          <span class="lesson-tag intermediate">Intermediate</span>
          <h4>Chapter 16: Support Vector Machines</h4>
          <p>Find the optimal separating hyperplane and see support vectors in action.</p>
          <div class="lesson-card-footer">
            <span class="lesson-duration">⏱ ~10 min</span>
            <span class="btn btn-secondary lesson-cta">Start Lesson →</span>
          </div>
        </div>
      </div>

    </div>



    <!-- Info strip at bottom -->

    <div style="

      margin-top:28px;

      background: linear-gradient(135deg, rgba(161,161,170,0.06), rgba(6,182,212,0.04));

      border: 1px solid rgba(161,161,170,0.12);

      border-radius: var(--radius-lg);

      padding: 20px 24px;

      display: flex; align-items: center; gap: 16px;

    ">

      <div style="font-size:1.8rem;flex-shrink:0;">🎓</div>

      <div style="flex:1;">

        <div style="font-size:0.88rem;font-weight:700;color:var(--text-primary);margin-bottom:3px;">Pro tip: Hands-on beats reading every time</div>

        <div style="font-size:0.78rem;color:var(--text-muted);">Each module comes with live, editable visualizations. Change a parameter and see results instantly — no code required.</div>

      </div>

      <button class="btn btn-success btn-pill" onclick="window.__app.navigate('pricing')" style="flex-shrink:0;">

        💎 Unlock Pro

      </button>

    </div>

  `;



  // Card click navigation

  container.querySelectorAll('.lesson-card[data-page]').forEach(card => {

    card.addEventListener('click', () => {

      const { navigate } = window.__app;

      navigate(card.dataset.page);

    });

  });



  // Animated number counters

  container.querySelectorAll('.stat-num').forEach(el => {

    const target = parseInt(el.dataset.target, 10);

    let current = 0;

    const step = Math.ceil(target / 20);

    const timer = setInterval(() => {

      current = Math.min(current + step, target);

      el.textContent = current;

      if (current >= target) clearInterval(timer);

    }, 50);

  });



  // Filter buttons

  const cards = container.querySelectorAll('.lesson-card');

  ['filter-all','filter-beginner','filter-advanced'].forEach(id => {

    const btn = container.querySelector(`#${id}`);

    if (!btn) return;

    btn.addEventListener('click', () => {

      container.querySelectorAll('[id^="filter-"]').forEach(b => b.classList.remove('btn-primary'));

      container.querySelectorAll('[id^="filter-"]').forEach(b => { b.classList.remove('btn-primary'); b.classList.add('btn-secondary'); });

      btn.classList.remove('btn-secondary');

      btn.classList.add('btn-primary');

      const level = id.replace('filter-','');

      cards.forEach(c => {

        const lvl = c.dataset.level;

        if (level === 'all') {

          c.style.display = '';

        } else if (level === 'beginner') {

          c.style.display = lvl === 'beginner' ? '' : 'none';

        } else {

          // advanced: show intermediate + advanced

          c.style.display = (lvl === 'advanced' || lvl === 'intermediate') ? '' : 'none';

        }

      });

    });

  });



  // Draw preview canvases

  requestAnimationFrame(() => {

    drawPreviewLR();

    drawPreviewKM();

    drawPreviewDT();

    drawPreviewNN();

    drawPreviewSVM();

  });

}



function drawPreviewLR() {

  const canvas = document.getElementById('preview-lr');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const w = canvas.width, h = canvas.height;

  ctx.clearRect(0, 0, w, h);



  // Grid lines

  ctx.strokeStyle = 'rgba(255,255,255,0.07)';

  ctx.lineWidth = 1;

  for (let x = 40; x < w; x += 50) {

    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();

  }

  for (let y = 20; y < h; y += 30) {

    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();

  }



  // Gradient fill under line

  const grad = ctx.createLinearGradient(0, 0, 0, h);

  grad.addColorStop(0, 'rgba(255,255,255,0.12)');

  grad.addColorStop(1, 'rgba(255,255,255,0)');

  ctx.beginPath();

  ctx.moveTo(20, h - 25);

  ctx.lineTo(w - 20, 30);

  ctx.lineTo(w - 20, h);

  ctx.lineTo(20, h);

  ctx.closePath();

  ctx.fillStyle = grad;

  ctx.fill();



  // Scatter points

  const pts = [];

  const seed = 42;

  for (let i = 0; i < 22; i++) {

    const t = (seed * (i + 1) * 1637) % 1000 / 1000;

    const x = 24 + t * (w - 48);

    const noise = (((seed * i * 7919) % 1000) / 1000 - 0.5) * 38;

    const y = h - 28 - (x / w) * (h - 52) + noise;

    pts.push({ x, y });

  }



  pts.forEach(({ x, y }) => {

    ctx.beginPath();

    ctx.arc(x, y, 4, 0, Math.PI * 2);

    ctx.fillStyle = '#00ff9d'; // Emerald
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';

    ctx.lineWidth = 1;

    ctx.stroke();

  });



  // Regression line
  ctx.strokeStyle = '#00ff9d'; // Emerald
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(0, 255, 157, 0.4)';

  ctx.shadowBlur = 8;

  ctx.beginPath();

  ctx.moveTo(20, h - 28);

  ctx.lineTo(w - 20, 32);

  ctx.stroke();

  ctx.shadowBlur = 0;

}



function drawPreviewKM() {

  const canvas = document.getElementById('preview-km');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const w = canvas.width, h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  const colors = [

    { fill: 'rgba(0, 255, 157, 0.7)',  glow: 'rgba(0, 255, 157, 0.5)' },
    { fill: 'rgba(251, 191, 36, 0.7)',  glow: 'rgba(251, 191, 36, 0.5)' },
    { fill: 'rgba(244, 63, 94, 0.7)',  glow: 'rgba(244, 63, 94, 0.5)' },

  ];

  const centers = [[w * 0.22, h * 0.38], [w * 0.67, h * 0.28], [w * 0.5, h * 0.76]];

  const seeds = [17, 31, 53];



  centers.forEach((c, ci) => {

    for (let i = 0; i < 14; i++) {

      const angle = ((seeds[ci] * (i + 1) * 137) % 360) * Math.PI / 180;

      const r = ((seeds[ci] * (i + 3) * 89) % 1000) / 1000 * 52;

      const x = c[0] + Math.cos(angle) * r;

      const y = c[1] + Math.sin(angle) * r * 0.7;

      ctx.beginPath();

      ctx.arc(x, y, 3.5, 0, Math.PI * 2);

      ctx.fillStyle = colors[ci].fill;

      ctx.fill();

    }

    // centroid with glow

    ctx.shadowColor = colors[ci].glow;

    ctx.shadowBlur = 14;

    ctx.beginPath();

    ctx.arc(c[0], c[1], 8, 0, Math.PI * 2);

    ctx.fillStyle = colors[ci].fill.replace('0.7', '1');

    ctx.fill();

    ctx.shadowBlur = 0;

    ctx.strokeStyle = 'rgba(255,255,255,0.7)';

    ctx.lineWidth = 2;

    ctx.stroke();

    // cross lines

    ctx.strokeStyle = 'rgba(255,255,255,0.5)';

    ctx.lineWidth = 1.5;

    ctx.beginPath(); ctx.moveTo(c[0] - 4, c[1]); ctx.lineTo(c[0] + 4, c[1]); ctx.stroke();

    ctx.beginPath(); ctx.moveTo(c[0], c[1] - 4); ctx.lineTo(c[0], c[1] + 4); ctx.stroke();

  });

}



function drawPreviewDT() {

  const canvas = document.getElementById('preview-dt');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const w = canvas.width, h = canvas.height;

  ctx.clearRect(0, 0, w, h);



  const nodes = [

    [w / 2, 22],

    [w / 3.2, 60], [w * 0.68, 60],

    [w * 0.18, 105], [w * 0.38, 105],

    [w * 0.58, 105], [w * 0.82, 105],

  ];



  // Draw edges

  const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]];

  edges.forEach(([from, to]) => {

    const grad = ctx.createLinearGradient(nodes[from][0], nodes[from][1], nodes[to][0], nodes[to][1]);

    grad.addColorStop(0, 'rgba(245,158,11,0.55)');

    grad.addColorStop(1, 'rgba(161,161,170,0.45)');

    ctx.strokeStyle = grad;

    ctx.lineWidth = 1.5;

    ctx.beginPath();

    ctx.moveTo(nodes[from][0], nodes[from][1]);

    ctx.lineTo(nodes[to][0], nodes[to][1]);

    ctx.stroke();

  });



  // Draw nodes

  nodes.forEach(([x, y], i) => {

    const isLeaf = i > 2;

    const color = isLeaf ? 'rgba(161,161,170,0.85)' : 'rgba(245,158,11,0.85)';

    const radius = i === 0 ? 11 : 8;

    ctx.shadowColor = isLeaf ? 'rgba(161,161,170,0.5)' : 'rgba(245,158,11,0.5)';

    ctx.shadowBlur = 10;

    ctx.beginPath();

    ctx.arc(x, y, radius, 0, Math.PI * 2);

    ctx.fillStyle = color;

    ctx.fill();

    ctx.shadowBlur = 0;

    ctx.strokeStyle = 'rgba(255,255,255,0.3)';

    ctx.lineWidth = 1.5;

    ctx.stroke();

  });

}



function drawPreviewNN() {

  const canvas = document.getElementById('preview-nn');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const w = canvas.width, h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  const layers = [3, 4, 4, 2];

  const layerX = layers.map((_, i) => 44 + i * (w - 88) / (layers.length - 1));

  const nodePositions = layers.map((count, li) => {

    const totalH = (count - 1) * 26;

    const startY = (h - totalH) / 2;

    return Array.from({ length: count }, (_, n) => [layerX[li], startY + n * 26]);

  });



  // Connections with glow

  for (let l = 0; l < nodePositions.length - 1; l++) {

    for (const from of nodePositions[l]) {

      for (const to of nodePositions[l + 1]) {

        const alpha = Math.random() * 0.15 + 0.05;

        ctx.strokeStyle = `rgba(236,72,153,${alpha})`;

        ctx.lineWidth = 1;

        ctx.beginPath();

        ctx.moveTo(from[0], from[1]);

        ctx.lineTo(to[0], to[1]);

        ctx.stroke();

      }

    }

  }



  // Nodes

  nodePositions.forEach((layer, li) => {

    const hue = 270 + li * 28;

    layer.forEach(([x, y]) => {

      ctx.shadowColor = `hsla(${hue}, 70%, 65%, 0.6)`;

      ctx.shadowBlur = 10;

      ctx.beginPath();

      ctx.arc(x, y, 6, 0, Math.PI * 2);

      ctx.fillStyle = `hsla(${hue}, 70%, 68%, 0.9)`;

      ctx.fill();

      ctx.shadowBlur = 0;

      ctx.strokeStyle = 'rgba(255,255,255,0.3)';

      ctx.lineWidth = 1;

      ctx.stroke();

    });

  });

}



function drawPreviewSVM() {

  const canvas = document.getElementById('preview-svm');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const w = canvas.width, h = canvas.height;

  ctx.clearRect(0, 0, w, h);



  // Background zones

  const grad1 = ctx.createLinearGradient(0, 0, w / 2 - 20, 0);

  grad1.addColorStop(0, 'rgba(6,182,212,0.07)');

  grad1.addColorStop(1, 'transparent');

  ctx.fillStyle = grad1;

  ctx.fillRect(0, 0, w / 2 - 20, h);



  const grad2 = ctx.createLinearGradient(w / 2 + 20, 0, w, 0);

  grad2.addColorStop(0, 'transparent');

  grad2.addColorStop(1, 'rgba(244,63,94,0.07)');

  ctx.fillStyle = grad2;

  ctx.fillRect(w / 2 + 20, 0, w / 2, h);



  // Class A points (cyan)

  for (let i = 0; i < 14; i++) {

    const seed = (17 * (i + 1) * 1637) % 1000 / 1000;

    const seed2 = (31 * (i + 2) * 997) % 1000 / 1000;

    const x = 22 + seed * (w / 2 - 60);

    const y = 16 + seed2 * (h - 32);

    ctx.beginPath();

    ctx.arc(x, y, 4.5, 0, Math.PI * 2);

    ctx.fillStyle = 'rgba(6,182,212,0.8)';

    ctx.fill();

    ctx.strokeStyle = 'rgba(6,182,212,0.3)';

    ctx.lineWidth = 1;

    ctx.stroke();

  }



  // Class B points (rose)

  for (let i = 0; i < 14; i++) {

    const seed = (53 * (i + 1) * 1637) % 1000 / 1000;

    const seed2 = (79 * (i + 3) * 997) % 1000 / 1000;

    const x = w / 2 + 38 + seed * (w / 2 - 60);

    const y = 16 + seed2 * (h - 32);

    ctx.beginPath();

    ctx.arc(x, y, 4.5, 0, Math.PI * 2);

    ctx.fillStyle = 'rgba(244,63,94,0.8)';

    ctx.fill();

    ctx.strokeStyle = 'rgba(244,63,94,0.3)';

    ctx.lineWidth = 1;

    ctx.stroke();

  }



  // Decision boundary (glowing)

  ctx.shadowColor = 'rgba(114,227,173,0.7)';

  ctx.shadowBlur = 12;

  ctx.strokeStyle = 'rgba(114,227,173,0.95)';

  ctx.lineWidth = 2.5;

  ctx.beginPath();

  ctx.moveTo(w / 2, 8);

  ctx.lineTo(w / 2, h - 8);

  ctx.stroke();

  ctx.shadowBlur = 0;



  // Margin lines

  ctx.setLineDash([5, 4]);

  ctx.strokeStyle = 'rgba(114,227,173,0.32)';

  ctx.lineWidth = 1.2;

  ctx.beginPath(); ctx.moveTo(w / 2 - 30, 8); ctx.lineTo(w / 2 - 30, h - 8); ctx.stroke();

  ctx.beginPath(); ctx.moveTo(w / 2 + 30, 8); ctx.lineTo(w / 2 + 30, h - 8); ctx.stroke();

  ctx.setLineDash([]);

}

