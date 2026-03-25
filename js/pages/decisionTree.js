// ── Decision Tree Page ──

import { DecisionTree } from '../ml/decisionTree.js';

import { DATASETS } from '../ml/datasets.js';



export function renderDecisionTree(container) {

  let data = DATASETS.moons.data;

  let tree = new DecisionTree(4, 2);

  let trained = false;



  container.innerHTML = `

    <div class="page-header">

      <span class="lesson-number">Lesson 3 — Classification</span>

      <h2>Decision Trees</h2>

      <p>See how a decision tree splits data by asking yes/no questions about features, creating decision boundaries that carve up the feature space.</p>

    </div>



    <div class="explainer-callout">

      <div class="callout-title">💡 How Decision Trees Work</div>

      <p>A decision tree asks a series of questions like "Is Feature X â¤ 2.5?". At each step it picks the question that best separates the classes (lowest <strong>Gini impurity</strong>). The result is a tree of rules that can classify new data points.</p>

    </div>



    <div class="viz-layout">

      <div class="viz-controls">

        <div class="glass-card">

          <div class="glass-card-header"><h3>⚙️ Parameters</h3></div>

          <div class="slider-group">

            <div class="slider-label"><span>Max Depth</span><span class="slider-value" id="depth-val">4</span></div>

            <input type="range" id="depth-slider" min="1" max="10" step="1" value="4">

          </div>

          <div class="slider-group">

            <div class="slider-label"><span>Min Samples Split</span><span class="slider-value" id="minsamp-val">2</span></div>

            <input type="range" id="minsamp-slider" min="2" max="20" step="1" value="2">

          </div>

          <select id="dt-dataset" style="margin-bottom:12px;">

            <option value="moons">Two Moons</option>

            <option value="xor">XOR Pattern</option>

            <option value="iris">Iris (2D)</option>

          </select>

          <div class="btn-group" style="flex-wrap:wrap;">

            <button class="btn btn-primary" id="btn-build">🌳 Build Tree</button>

            <button class="btn btn-secondary" id="btn-dt-reset">↺ Reset</button>

          </div>

        </div>

        <div class="glass-card">

          <div class="glass-card-header"><h3>📊 Metrics</h3></div>

          <div class="metric-row"><span class="metric-label">Accuracy</span><span class="metric-value" id="dt-acc">—</span></div>

          <div class="metric-row"><span class="metric-label">Tree Depth</span><span class="metric-value" id="dt-depth">—</span></div>

          <div class="metric-row"><span class="metric-label">Nodes</span><span class="metric-value" id="dt-nodes">—</span></div>

        </div>

      </div>



      <div class="glass-card viz-canvas-wrapper">

        <canvas id="dt-canvas" width="700" height="500"></canvas>

      </div>



      <div class="viz-info-panel">

        <div class="glass-card">

          <div class="glass-card-header"><h3>🌳 Tree Structure</h3></div>

          <canvas id="tree-canvas" width="260" height="200"></canvas>

        </div>

        <div class="glass-card">

          <div class="glass-card-header"><h3>🐍 Python Equivalent</h3></div>

          <div class="code-block">

            <div class="code-block-header"><span>Python</span></div>

            <pre><span class="kw">from</span> sklearn.tree <span class="kw">import</span> <span class="fn">DecisionTreeClassifier</span>



model = <span class="fn">DecisionTreeClassifier</span>(

    max_depth=<span class="num">4</span>,

    min_samples_split=<span class="num">2</span>

)

model.<span class="fn">fit</span>(X_train, y_train)

accuracy = model.<span class="fn">score</span>(X_test, y_test)</pre>

          </div>

        </div>

        <div class="explainer-callout">

          <div class="callout-title">💡 What to Watch</div>

          <p>Increase <strong>max depth</strong> and watch the boundary get more complex. Too deep = overfitting (memorizing noise). Try the XOR dataset — it needs depth â¥ 2!</p>

        </div>

      </div>

    </div>



    <div class="steps-section">

      <div class="steps-header">

        <span class="steps-badge">📚 How It Works</span>

        <h3>Decision Trees — Step by Step</h3>

        <p>Understanding how a tree of yes/no questions learns to classify data</p>

      </div>

      <div class="steps-grid">

        <div class="step-card">

          <div class="step-number">1</div>

          <div class="step-icon">📦</div>

          <div class="step-title">Training vs Testing</div>

          <div class="step-body">The tree is <strong>trained</strong> on labeled data — it sees both features and correct labels. After training, we evaluate it on <strong>unseen test data</strong> to see if it learned general rules or just memorized training examples.</div>

          <div class="step-formula">Dataset → Train (learn rules) + Test (measure accuracy)</div>

        </div>

        <div class="step-card">

          <div class="step-number">2</div>

          <div class="step-icon">🌳</div>

          <div class="step-title">Initialize (Root Node)</div>

          <div class="step-body">Training starts at the <strong>root</strong> with all data. The algorithm asks: <em>"Which feature and threshold best splits this data into pure groups?"</em> — measured by Gini impurity or entropy.</div>

          <div class="step-formula">Gini = 1 − Σ pᵢ²</div>

        </div>

        <div class="step-card">

          <div class="step-number">3</div>

          <div class="step-icon">✂️</div>

          <div class="step-title">Split the Data</div>

          <div class="step-body">The best split is chosen (e.g. "Is Feature 1 â¤ 2.5?"). Data satisfying the condition goes <strong>left</strong>; data that doesn't goes <strong>right</strong>. Each branch becomes a new sub-problem.</div>

          <div class="step-formula">If x⏱¼ â¤ threshold → left branch, else → right branch</div>

        </div>

        <div class="step-card">

          <div class="step-number">4</div>

          <div class="step-icon">🔁</div>

          <div class="step-title">Recurse Until Pure or Max Depth</div>

          <div class="step-body">Each child node repeats the splitting process — finding the best question for its subset of data. <strong>Recursion stops</strong> when a node is pure (one class only), has too few samples, or hits the max depth limit.</div>

          <div class="step-formula">Repeat while impurity &gt; 0 AND depth &lt; maxDepth</div>

        </div>

        <div class="step-card">

          <div class="step-number">5</div>

          <div class="step-icon">🔮</div>

          <div class="step-title">Predict</div>

          <div class="step-body">To classify a new point, follow the tree from root to leaf by answering each question. The <strong>leaf node's majority class</strong> is the prediction. This is extremely fast — O(depth) time!</div>

          <div class="step-formula">Traverse root → leaf → return leaf.majority_class</div>

        </div>

        <div class="step-card">

          <div class="step-number">6</div>

          <div class="step-icon">⚠️</div>

          <div class="step-title">Overfitting vs Underfitting</div>

          <div class="step-body">Too deep = <strong>overfitting</strong> (memorizes training noise). Too shallow = <strong>underfitting</strong> (misses real patterns). <em>Max depth</em> and <em>min samples</em> are hyperparameters that control this tradeoff.</div>

          <div class="step-formula">Optimal depth balances bias â variance</div>

        </div>

      </div>

      <div class="steps-tip">

        💡 <strong>Try it:</strong> Build the tree, then increase <em>Max Depth</em> and rebuild. Watch the boundary get more complex. Try switching to XOR — it's impossible with depth 1!

      </div>

    </div>

  `;



  const canvas = document.getElementById('dt-canvas');

  const treeCanvas = document.getElementById('tree-canvas');

  const ctx = canvas.getContext('2d');

  const tctx = treeCanvas.getContext('2d');

  const colors = ['rgba(255,255,255,0.7)', 'rgba(244,63,94,0.7)', 'rgba(161,161,170,0.7)'];

  const bgColors = ['rgba(255,255,255,0.08)', 'rgba(244,63,94,0.08)', 'rgba(161,161,170,0.08)'];



  function resizeCanvas() {

    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = rect.width - 48;

    canvas.height = Math.max(400, rect.height - 48);

    drawScene();

  }



  function getRange() {

    let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;

    for (const p of data) {

      xMin = Math.min(xMin, p.features[0]); xMax = Math.max(xMax, p.features[0]);

      yMin = Math.min(yMin, p.features[1]); yMax = Math.max(yMax, p.features[1]);

    }

    const pad = 0.3;

    return { xMin: xMin - pad, xMax: xMax + pad, yMin: yMin - pad, yMax: yMax + pad };

  }



  function toScreen(x, y, range) {

    const W = canvas.width, H = canvas.height, pad = 40;

    return {

      sx: pad + (x - range.xMin) / (range.xMax - range.xMin) * (W - 2 * pad),

      sy: H - pad - (y - range.yMin) / (range.yMax - range.yMin) * (H - 2 * pad)

    };

  }



  function drawScene() {

    const W = canvas.width, H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    const range = getRange();



    // Decision boundary (if trained)

    if (trained) {

      const resolution = 4;

      for (let px = 40; px < W - 40; px += resolution) {

        for (let py = 40; py < H - 40; py += resolution) {

          const x = range.xMin + (px - 40) / (W - 80) * (range.xMax - range.xMin);

          const y = range.yMax - (py - 40) / (H - 80) * (range.yMax - range.yMin);

          const cls = tree.predictBoundary(x, y);

          ctx.fillStyle = bgColors[cls % bgColors.length];

          ctx.fillRect(px, py, resolution, resolution);

        }

      }

    }



    // Data points

    for (const p of data) {

      const { sx, sy } = toScreen(p.features[0], p.features[1], range);

      ctx.fillStyle = colors[p.label % colors.length];

      ctx.beginPath();

      ctx.arc(sx, sy, 5, 0, Math.PI * 2);

      ctx.fill();

    }

  }



  function drawTreeDiagram() {

    tctx.clearRect(0, 0, 260, 200);

    if (!tree.tree) return;

    const viz = tree.toVisualization(tree.tree, 130, 20, 0);

    // Draw edges

    tctx.strokeStyle = 'rgba(245,158,11,0.4)';

    tctx.lineWidth = 1;

    for (const edge of viz.edges) {

      const from = viz.nodes.find(n => n.id === edge.from);

      const to = viz.nodes.find(n => n.id === edge.to);

      if (from && to) {

        tctx.beginPath();

        tctx.moveTo(from.x, from.y);

        tctx.lineTo(to.x, to.y);

        tctx.stroke();

      }

    }

    // Draw nodes

    for (const node of viz.nodes) {

      const r = node.type === 'leaf' ? 6 : 8;

      tctx.fillStyle = node.type === 'leaf' ? 'rgba(161,161,170,0.7)' : 'rgba(245,158,11,0.7)';

      tctx.beginPath();

      tctx.arc(node.x, node.y, r, 0, Math.PI * 2);

      tctx.fill();

    }

  }



  function loadDataset(name) {

    if (name === 'iris') {

      data = DATASETS.iris.data.map(d => ({ features: [d.features[0], d.features[1]], label: d.label }));

    } else {

      data = DATASETS[name].data;

    }

  }



  document.getElementById('btn-build').addEventListener('click', () => {

    const maxDepth = parseInt(document.getElementById('depth-slider').value);

    const minSamples = parseInt(document.getElementById('minsamp-slider').value);

    tree = new DecisionTree(maxDepth, minSamples);

    tree.fit(data);

    trained = true;

    const acc = tree.getAccuracy(data);

    const viz = tree.toVisualization(tree.tree, 130, 20, 0);

    document.getElementById('dt-acc').textContent = (acc * 100).toFixed(1) + '%';

    document.getElementById('dt-acc').className = 'metric-value ' + (acc > 0.9 ? 'good' : acc > 0.7 ? 'warn' : 'bad');

    document.getElementById('dt-depth').textContent = maxDepth;

    document.getElementById('dt-nodes').textContent = viz.nodes.length;

    drawScene();

    drawTreeDiagram();

  });



  document.getElementById('btn-dt-reset').addEventListener('click', () => {

    tree = new DecisionTree(4, 2);

    trained = false;

    document.getElementById('dt-acc').textContent = '—';

    document.getElementById('dt-depth').textContent = '—';

    document.getElementById('dt-nodes').textContent = '—';

    drawScene();

    drawTreeDiagram();

  });



  document.getElementById('depth-slider').addEventListener('input', e => {

    document.getElementById('depth-val').textContent = e.target.value;

  });

  document.getElementById('minsamp-slider').addEventListener('input', e => {

    document.getElementById('minsamp-val').textContent = e.target.value;

  });

  document.getElementById('dt-dataset').addEventListener('change', e => {

    loadDataset(e.target.value);

    trained = false;

    tree = new DecisionTree(parseInt(document.getElementById('depth-slider').value), parseInt(document.getElementById('minsamp-slider').value));

    drawScene();

  });



  setTimeout(resizeCanvas, 50);

  window.addEventListener('resize', resizeCanvas);

  return () => window.removeEventListener('resize', resizeCanvas);

}

