export const topic20 = {
  id: 20,
  title: "Final Layihə və Deployment",
  duration: "120 dəq",
  isFree: false,
  
  content: `
    <h4>Final Layihə Tələbləri</h4>
    <p>20 mövzunu tamamlayan tələbələr üçün tam funksional frontend tətbiqi:</p>
    <ul>
      <li>✅ HTML5 semantik struktur</li>
      <li>✅ CSS3 (Flexbox/Grid, Responsive)</li>
      <li>✅ JavaScript (ES6+, DOM, Events)</li>
      <li>✅ Git version control</li>
      <li>✅ Deploy edilmiş və işlək</li>
    </ul>

    <h4>Layihə İdeyaları</h4>
    <pre><code>// 1. Task Management App
- CRUD operations (Create, Read, Update, Delete)
- LocalStorage persistence
- Drag & drop (optional)
- Filter by status/priority

// 2. Weather Dashboard
- Fetch API ilə real data
- Geolocation API
- Chart.js ilə statistika
- Dark/Light mode

// 3. E-commerce Product Page
- Product catalog
- Shopping cart (Array methods)
- Filter/Sort functionality
- Responsive design

// 4. Portfolio Website
- Multi-page (or SPA)
- Contact form validation
- Smooth animations
- Mobile-first approach</code></pre>

    <h4>Build & Optimization</h4>
    <pre><code>// Build tools
npm run build        // Production build
npm run optimize     // Images, minification

// Performance
- Lazy loading: loading="lazy"
- Code splitting: dynamic imports
- Minification: HTML/CSS/JS
- Image optimization: WebP format</code></pre>

    <h4>Deployment Platforms</h4>
    <pre><code>// Static Hosting (FREE)
1. Netlify: Drag & drop, Git integration
2. Vercel: Optimized for frontend
3. GitHub Pages: Direct from repo
4. Firebase Hosting: Google infrastructure

// Steps
1. npm run build (if using framework)
2. Or just HTML/CSS/JS files
3. Connect Git repo or drag folder
4. Custom domain (optional)</code></pre>

    <h4>CI/CD Basics</h4>
    <pre><code>// GitHub Actions example
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Netlify
        run: npx netlify-cli deploy --prod</code></pre>
  `,

  starterCode: {
    html: `<div class="final-project-lab">
  <h2>🚀 Final Project & Deployment Lab</h2>
  
  <section class="demo-section">
    <h3>1. Layihə Siyahısı</h3>
    <div class="project-ideas">
      <div class="project-card" onclick="selectProject('task')">
        <div class="project-icon">✅</div>
        <h4>Task Manager</h4>
        <p>CRUD, LocalStorage, Filters</p>
        <span class="difficulty medium">Orta</span>
      </div>
      <div class="project-card" onclick="selectProject('weather')">
        <div class="project-icon">🌤️</div>
        <h4>Weather App</h4>
        <p>API, Geolocation, Charts</p>
        <span class="difficulty hard">Çətin</span>
      </div>
      <div class="project-card" onclick="selectProject('shop')">
        <div class="project-icon">🛒</div>
        <h4>Mini E-commerce</h4>
        <p>Cart, Filter, Responsive</p>
        <span class="difficulty medium">Orta</span>
      </div>
      <div class="project-card" onclick="selectProject('portfolio')">
        <div class="project-icon">💼</div>
        <h4>Portfolio</h4>
        <p>Multi-page, Animations</p>
        <span class="difficulty easy">Asan</span>
      </div>
    </div>
    <div class="selected-project" id="selectedProject">
      Layihə seçin və başlayın...
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Checklist Generator</h3>
    <div class="checklist-builder">
      <div class="tech-stack">
        <h4>Texnologiya Stack-i</h4>
        <label><input type="checkbox" checked disabled> HTML5 Semantik</label>
        <label><input type="checkbox" checked disabled> CSS3 (Flexbox/Grid)</label>
        <label><input type="checkbox" id="jsCheck"> Vanilla JavaScript</label>
        <label><input type="checkbox" id="frameworkCheck"> React/Vue/Angular</label>
        <label><input type="checkbox" id="apiCheck"> External API</label>
        <label><input type="checkbox" id="storageCheck"> LocalStorage/IndexedDB</label>
      </div>
      <button onclick="generateChecklist()">Checklist Yarat</button>
      <div class="checklist-output" id="checklistOutput"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Deployment Simulator</h3>
    <div class="deploy-simulator">
      <div class="deploy-steps">
        <div class="step" id="step1">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Build</h4>
            <button onclick="runBuild()">npm run build</button>
            <div class="step-status" id="buildStatus">⏳ Gözləyir</div>
          </div>
        </div>
        <div class="step" id="step2">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Optimize</h4>
            <button onclick="runOptimize()" disabled id="optBtn">Optimize Assets</button>
            <div class="step-status" id="optStatus">⏳ Gözləyir</div>
          </div>
        </div>
        <div class="step" id="step3">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Deploy</h4>
            <select id="platformSelect" disabled>
              <option value="">Platform seçin</option>
              <option value="netlify">Netlify</option>
              <option value="vercel">Vercel</option>
              <option value="github">GitHub Pages</option>
            </select>
            <button onclick="runDeploy()" disabled id="deployBtn">Deploy</button>
            <div class="step-status" id="deployStatus">⏳ Gözləyir</div>
          </div>
        </div>
      </div>
      <div class="deploy-result" id="deployResult"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Performance Audit</h3>
    <div class="performance-check">
      <div class="metric-cards">
        <div class="metric">
          <span class="metric-value" id="lighthouseScore">--</span>
          <span class="metric-label">Lighthouse Score</span>
          <button onclick="simulateAudit()">Simulate Audit</button>
        </div>
        <div class="metric">
          <span class="metric-value" id="bundleSize">--</span>
          <span class="metric-label">Bundle Size</span>
          <button onclick="calcBundleSize()">Calculate</button>
        </div>
        <div class="metric">
          <span class="metric-value" id="loadTime">--</span>
          <span class="metric-label">Load Time</span>
          <button onclick="measureLoadTime()">Measure</button>
        </div>
      </div>
      <div class="optimization-tips" id="optTips"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Git Workflow</h3>
    <div class="git-workflow">
      <div class="git-commands">
        <button onclick="runGitCommand('init')">git init</button>
        <button onclick="runGitCommand('add')">git add .</button>
        <button onclick="runGitCommand('commit')">git commit</button>
        <button onclick="runGitCommand('remote')">git remote add</button>
        <button onclick="runGitCommand('push')">git push</button>
      </div>
      <div class="terminal" id="gitTerminal">
        <div class="terminal-line">$ git status</div>
        <div class="terminal-line">On branch main</div>
        <div class="terminal-line">nothing to commit, working tree clean</div>
      </div>
    </div>
  </section>
</div>`,
    
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  padding: 40px;
  line-height: 1.6;
}

.final-project-lab {
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  color: #f472b6;
  margin-bottom: 30px;
  font-size: 32px;
}

h3 {
  color: #38bdf8;
  margin-bottom: 20px;
  font-size: 20px;
}

h4 {
  color: #a78bfa;
  margin-bottom: 10px;
}

.demo-section {
  background: #1e293b;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #334155;
}

/* Project Ideas */
.project-ideas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.project-card {
  background: #0f172a;
  padding: 25px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
  text-align: center;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #6366f1;
  box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
}

.project-card.selected {
  border-color: #34d399;
  background: #064e3b;
}

.project-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.difficulty {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  margin-top: 10px;
}

.difficulty.easy { background: #10b981; color: white; }
.difficulty.medium { background: #f59e0b; color: white; }
.difficulty.hard { background: #ef4444; color: white; }

.selected-project {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #6366f1;
  margin-top: 20px;
}

/* Checklist */
.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.tech-stack label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  background: #0f172a;
  border-radius: 6px;
}

.checklist-output {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  font-family: monospace;
  font-size: 13px;
  white-space: pre-wrap;
}

/* Deploy Simulator */
.deploy-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.step.active {
  opacity: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #6366f1;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
}

.step-status {
  margin-top: 10px;
  padding: 8px;
  background: #1e293b;
  border-radius: 6px;
  font-size: 13px;
}

.step-status.success { color: #34d399; }
.step-status.error { color: #ef4444; }

.deploy-result {
  margin-top: 30px;
  padding: 30px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 12px;
  text-align: center;
  display: none;
}

.deploy-result.show {
  display: block;
  animation: slideUp 0.5s ease;
}

/* Performance */
.metric-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.metric {
  background: #0f172a;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #34d399;
  margin-bottom: 5px;
}

.metric-label {
  display: block;
  color: #94a3b8;
  margin-bottom: 15px;
}

.optimization-tips {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
}

/* Git Workflow */
.git-commands {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.git-commands button {
  background: #f472b6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-family: monospace;
}

.terminal {
  background: #000;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.8;
  color: #34d399;
  min-height: 200px;
}

.terminal-line {
  margin-bottom: 5px;
}

.terminal-line.command {
  color: #fbbf24;
}

.terminal-line.error {
  color: #ef4444;
}

button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

button:hover:not(:disabled) {
  background: #4f46e5;
  transform: translateY(-2px);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

select {
  padding: 10px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  color: #fff;
  margin-right: 10px;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    js: `let selectedProjectType = null;
let buildComplete = false;
let optimizeComplete = false;

// Project Selection
function selectProject(type) {
  selectedProjectType = type;
  
  // UI update
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.remove('selected');
  });
  event.currentTarget.classList.add('selected');
  
  const details = {
    task: {
      title: 'Task Manager',
      features: ['CRUD operations', 'LocalStorage persistence', 'Filter by status', 'Priority levels'],
      tech: ['HTML5', 'CSS3', 'Vanilla JS', 'LocalStorage API']
    },
    weather: {
      title: 'Weather Dashboard',
      features: ['OpenWeatherMap API', 'Geolocation', '5-day forecast', 'Chart.js graphs'],
      tech: ['Fetch API', 'Async/Await', 'Canvas/SVG', 'Geolocation API']
    },
    shop: {
      title: 'Mini E-commerce',
      features: ['Product catalog', 'Shopping cart', 'Checkout form', 'Responsive grid'],
      tech: ['Array methods', 'Event delegation', 'CSS Grid', 'Form validation']
    },
    portfolio: {
      title: 'Portfolio Website',
      features: ['Multi-page/Sections', 'Smooth scroll', 'Contact form', 'Dark mode'],
      tech: ['Semantic HTML', 'CSS Animations', 'Intersection Observer', 'CSS Variables']
    }
  };
  
  const project = details[type];
  document.getElementById('selectedProject').innerHTML = '
    <h4>' + project.title + '</h4>
    <p><strong>Features:</strong> ' + project.features.join(', ') + '</p>
    <p><strong>Tech Stack:</strong> ' + project.tech.join(', ') + '</p>
    <button onclick="startProject()" style="margin-top:15px">Layihəyə Başla</button>
  ';
}

function startProject() {
  alert('Layihə başladı! Checklist generatorundan istifadə edin.');
  document.getElementById('step1').classList.add('active');
}

// Checklist Generator
function generateChecklist() {
  const hasJS = document.getElementById('jsCheck').checked;
  const hasFramework = document.getElementById('frameworkCheck').checked;
  const hasAPI = document.getElementById('apiCheck').checked;
  const hasStorage = document.getElementById('storageCheck').checked;
  
  let checklist = [];
  
  // Base
  checklist.push('☐ Semantic HTML5 structure');
  checklist.push('☐ Responsive design (mobile-first)');
  checklist.push('☐ CSS Flexbox/Grid layout');
  
  if (hasJS || hasFramework) {
    checklist.push('☐ ES6+ features (arrow functions, destructuring)');
    checklist.push('☐ Modular code structure');
    checklist.push('☐ Error handling (try/catch)');
  }
  
  if (hasFramework) {
    checklist.push('☐ Component architecture');
    checklist.push('☐ State management');
    checklist.push('☐ Build configuration');
  }
  
  if (hasAPI) {
    checklist.push('☐ API integration with fetch/axios');
    checklist.push('☐ Loading states');
    checklist.push('☐ Error boundaries');
  }
  
  if (hasStorage) {
    checklist.push('☐ Data persistence');
    checklist.push('☐ CRUD operations');
  }
  
  // Deployment
  checklist.push('');
  checklist.push('DEPLOYMENT:');
  checklist.push('☐ Git repository initialized');
  checklist.push('☐ README.md with setup instructions');
  checklist.push('☐ Optimized assets (images minified)');
  checklist.push('☐ Lighthouse score > 90');
  checklist.push('☐ Deployed to Netlify/Vercel');
  
  document.getElementById('checklistOutput').textContent = checklist.join('\n');
}

// Deployment Simulator
function runBuild() {
  const status = document.getElementById('buildStatus');
  status.textContent = '🔄 Building...';
  
  setTimeout(() => {
    status.textContent = '✅ Build successful! (dist/ folder created)';
    status.classList.add('success');
    buildComplete = true;
    document.getElementById('optBtn').disabled = false;
    document.getElementById('step2').classList.add('active');
  }, 2000);
}

function runOptimize() {
  if (!buildComplete) return;
  
  const status = document.getElementById('optStatus');
  status.textContent = '🔄 Optimizing...';
  
  setTimeout(() => {
    status.innerHTML = 
      '✅ Optimization complete!<br>' +
      '• Images compressed (WebP)<br>' +
      '• CSS minified<br>' +
      '• JS bundled & minified<br>' +
      '• Total savings: 67%';
    status.classList.add('success');
    optimizeComplete = true;
    document.getElementById('platformSelect').disabled = false;
    document.getElementById('deployBtn').disabled = false;
    document.getElementById('step3').classList.add('active');
  }, 2500);
}

function runDeploy() {
  if (!optimizeComplete) return;
  
  const platform = document.getElementById('platformSelect').value;
  if (!platform) {
    alert('Platform seçin!');
    return;
  }
  
  const status = document.getElementById('deployStatus');
  status.textContent = '🚀 Deploying to ' + platform + '...';
  
  setTimeout(() => {
    status.innerHTML = '✅ Deployed successfully!';
    status.classList.add('success');
    
    const urls = {
      netlify: 'https://your-project-123.netlify.app',
      vercel: 'https://your-project.vercel.app',
      github: 'https://username.github.io/repo'
    };
    
    document.getElementById('deployResult').innerHTML = '
      <h3>🎉 Congratulations!</h3>
      <p>Your project is live at:</p>
      <a href="#" style="color:white;font-size:18px">' + urls[platform] + '</a>
      <p style="margin-top:20px;font-size:14px;opacity:0.9">
        Share this link in your portfolio!
      </p>
    ';
    document.getElementById('deployResult').classList.add('show');
  }, 3000);
}

// Performance Audit
function simulateAudit() {
  const score = Math.floor(Math.random() * (100 - 85) + 85);
  document.getElementById('lighthouseScore').textContent = score;
  
  const tips = document.getElementById('optTips');
  if (score < 90) {
    tips.innerHTML = '
      <strong>Improvements needed:</strong><br>
      • Enable text compression (gzip)<br>
      • Reduce unused JavaScript<br>
      • Properly size images
    ';
  } else {
    tips.innerHTML = '<strong>Excellent!</strong> Your site is well optimized.';
  }
}

function calcBundleSize() {
  const size = (Math.random() * 500 + 100).toFixed(1);
  document.getElementById('bundleSize').textContent = size + ' KB';
}

function measureLoadTime() {
  const time = (Math.random() * 2 + 0.5).toFixed(2);
  document.getElementById('loadTime').textContent = time + 's';
}

// Git Workflow
const gitHistory = [];

function runGitCommand(cmd) {
  const terminal = document.getElementById('gitTerminal');
  let output = '';
  
  switch(cmd) {
    case 'init':
      output = 'Initialized empty Git repository in /project/.git/';
      break;
    case 'add':
      output = 'Changes to be committed:\n  new file:   index.html\n  new file:   style.css\n  new file:   app.js';
      break;
    case 'commit':
      output = '[main (root-commit) a1b2c3d] Initial commit\n 3 files changed, 150 insertions(+)';
      break;
    case 'remote':
      output = 'origin  https://github.com/username/project.git (fetch)\norigin  https://github.com/username/project.git (push)';
      break;
    case 'push':
      output = 'Enumerating objects: 5, done.\nWriting objects: 100% (5/5), 1.2 KiB | 1.2 MiB/s, done.\nTo https://github.com/username/project.git\n * [new branch]      main -> main';
      break;
  }
  
  const line = document.createElement('div');
  line.className = 'terminal-line command';
  line.textContent = '$ git ' + cmd;
  terminal.appendChild(line);
  
  output.split('\n').forEach(lineText => {
    const outLine = document.createElement('div');
    outLine.className = 'terminal-line';
    outLine.textContent = lineText;
    terminal.appendChild(outLine);
  });
  
  terminal.scrollTop = terminal.scrollHeight;
}

console.log('Final Project module loaded!');
console.log('Ready to build and deploy! 🚀');`,
  },

  exercise: {
    title: "Full-Stack Portfolio Deployment",
    description: "Bütün öyrəndiklərinizi birləşdirərək şəxsi portfolio saytı yaradın və deploy edin. Git, build optimization və CI/CD daxil olmaqla.",
    requirements: [
      "GitHub repo yaradın və struktur qurun",
      "HTML5 semantik struktur (header, main, section, footer)",
      "CSS Grid/Flexbox ilə responsive layout",
      "JavaScript ilə interaktiv komponentlər (modal, dark mode)",
      "LocalStorage ilə theme preference saxlayın",
      "Form validation ilə contact form",
      "Lighthouse audit 90+ score",
      "Netlify/Vercel/GitHub Pages deploy",
      "Custom domain (optional)",
      "README.md dokumentasiya"
    ],
    starterCode: `// Project Structure:
// portfolio/
//   index.html
//   css/
//     style.css
//   js/
//     app.js
//   assets/
//     images/
//   README.md

// Key features to implement:
// 1. Dark/Light mode toggle with localStorage
// 2. Smooth scroll navigation
// 3. Project filtering (Vanilla JS)
// 4. Contact form with validation
// 5. Mobile-responsive hamburger menu

// Deployment checklist:
// - Optimize images (WebP)
// - Minify CSS/JS
// - Add meta tags (SEO)
// - Test on real devices`,
  },

  quiz: [
    {
      question: "npm run build nə edir?",
      options: ["Server başladır", "Production files yaradır", "Test işlədir", "Package install"],
      correctAnswer: 1
    },
    {
      question: "LocalStorage maksimum həcmi?",
      options: ["1MB", "5-10MB", "100MB", "Limitsiz"],
      correctAnswer: 1
    },
    {
      question: "Lighthouse nə ölçür?",
      options: ["Yalnız sürət", "Performance, Accessibility, SEO, Best Practices", "Yalnız SEO", "Yalnız security"],
      correctAnswer: 1
    },
    {
      question: "GitHub Pages üçün branch adı?",
      options: ["main", "master", "gh-pages", "deploy"],
      correctAnswer: 2
    },
    {
      question: "Responsive design üçün hansı istifadə olunur?",
      options: ["Floats", "Media Queries", "Tables", "Frames"],
      correctAnswer: 1
    },
    {
      question: "WebP formatı nə üçün yaxşıdır?",
      options: ["Vektor qrafika", "Kiçik ölçülü şəkillər", "Animasiyalar", "Hər şey"],
      correctAnswer: 1
    },
    {
      question: "CI/CD nə deməkdir?",
      options: ["Code Integration/Code Deployment", "Continuous Integration/Continuous Deployment", "Create Issue/Delete Code", "Computer Interface/Cloud Data"],
      correctAnswer: 1
    },
    {
      question: "Meta viewport tag nə edir?",
      options: ["SEO optimize", "Mobile responsive", "Loading sürətləndirir", "Security artırır"],
      correctAnswer: 1
    },
    {
      question: "Service Worker nə üçündür?",
      options: ["Database", "Offline functionality", "Form validation", "CSS preprocessing"],
      correctAnswer: 1
    },
    {
      question: "Final layihədə hansı olmalıdır?",
      options: ["Yalnız HTML", "HTML+CSS+JS+Deploy", "Yalnız JavaScript", "Yalnız CSS"],
      correctAnswer: 1
    }
  ]
};

export default topic20;