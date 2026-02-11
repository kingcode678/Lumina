export const topic11 = {
  id: 11,
  title: "Git və GitHub Əsasları",
  duration: "90 dəq",
  isFree: false,
  
  content: `
    <h4>Git Nədir?</h4>
    <p>Git distributed version control sistemidir. Kodun tarixçəsini izləməyə, versiyaları idarə etməyə və komanda işinə imkan verir.</p>
    
    <h4>Əsas Konseptlər</h4>
    <ul>
      <li><strong>Repository (Repo):</strong> Proyektin və tarixçəsinin saxlandığı yer</li>
      <li><strong>Commit:</strong> Dəyişikliklərin snapshot-ı</li>
      <li><strong>Branch:</strong> Ayrı iş xətti (main, feature, bugfix)</li>
      <li><strong>Merge:</strong> Branch-lərin birləşdirilməsi</li>
      <li><strong>Remote:</strong> Uzaq serverdəki repo (GitHub, GitLab)</li>
    </ul>

    <h4>Qurulum və Konfiqurasiya</h4>
    <pre><code># Quraşdırma
git --version

# İlk konfiqurasiya
git config --global user.name "Adınız"
git config --global user.email "email@example.com"
git config --global init.defaultBranch main</code></pre>

    <h4>Əsas Komandalar</h4>
    <pre><code># Yeni repo yaratmaq
git init

# Faylları stage etmək
git add filename.txt      # Tək fayl
git add .                 # Bütün fayllar

# Commit yaratmaq
git commit -m "Açıqlayıcı mesaj"

# Status yoxlamaq
git status
git log --oneline --graph

# Branch əməliyyatları
git branch feature-login     # Yeni branch
git checkout feature-login   # Branch-ə keçmək
git checkout -b feature-api  # Yarat və keç
git merge feature-login      # Main-ə birləşdir</code></pre>

    <h4>GitHub ilə İş</h4>
    <pre><code># Remote əlavə etmək
git remote add origin https://github.com/user/repo.git

# Push və Pull
git push -u origin main    # İlk push
git push origin feature    # Branch push
git pull origin main       # Yeniləmə çəkmək

# Clone
git clone https://github.com/user/repo.git</code></pre>

    <h4>.gitignore</h4>
    <pre><code>node_modules/
.env
.DS_Store
dist/
*.log
.vscode/</code></pre>
  `,

  starterCode: {
    html: `<div class="git-workflow">
  <h2>Git Workflow Visualizer</h2>
  
  <div class="workspace">
    <h3>Working Directory</h3>
    <div class="files" id="workingDir">
      <div class="file modified" data-file="app.js">app.js (modified)</div>
      <div class="file new" data-file="style.css">style.css (new)</div>
      <div class="file untracked" data-file="readme.md">readme.md (untracked)</div>
    </div>
    <button onclick="gitAdd()">git add .</button>
  </div>

  <div class="arrow">↓</div>

  <div class="staging">
    <h3>Staging Area (Index)</h3>
    <div class="files" id="stagingArea"></div>
    <button onclick="gitCommit()">git commit -m "updates"</button>
  </div>

  <div class="arrow">↓</div>

  <div class="repository">
    <h3>Local Repository</h3>
    <div class="commits" id="commitHistory">
      <div class="commit">abc1234 - Initial commit</div>
    </div>
  </div>

  <div class="arrow">↓ git push</div>

  <div class="remote">
    <h3>Remote Repository (GitHub)</h3>
    <div class="commits" id="remoteHistory">
      <div class="commit">abc1234 - Initial commit</div>
    </div>
  </div>

  <div class="branches">
    <h3>Branches</h3>
    <div class="branch-list" id="branchList">
      <div class="branch active">* main</div>
      <div class="branch">feature-login</div>
    </div>
    <button onclick="createBranch()">git checkout -b feature-api</button>
    <button onclick="switchBranch()">git checkout main</button>
    <button onclick="mergeBranch()">git merge feature-login</button>
  </div>

  <div class="commands">
    <h3>Command History</h3>
    <pre id="commandLog">$ git init</pre>
  </div>
</div>`,
    
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', monospace;
  background: #0d1117;
  color: #c9d1d9;
  padding: 40px;
  line-height: 1.6;
}

.git-workflow {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #58a6ff;
  margin-bottom: 30px;
  text-align: center;
  font-size: 28px;
}

h3 {
  color: #7ee787;
  margin-bottom: 15px;
  font-size: 18px;
}

.workspace, .staging, .repository, .remote, .branches {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 10px;
}

.arrow {
  text-align: center;
  color: #8b949e;
  font-size: 24px;
  margin: 10px 0;
}

.files {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 60px;
  padding: 10px;
  background: #0d1117;
  border-radius: 8px;
  margin-bottom: 15px;
}

.file {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-family: monospace;
  cursor: pointer;
  transition: transform 0.2s;
}

.file:hover {
  transform: translateY(-2px);
}

.modified { background: #f0883e; color: #000; }
.new { background: #3fb950; color: #000; }
.untracked { background: #8b949e; color: #000; }
.staged { background: #58a6ff; color: #000; }
.committed { background: #a371f7; color: #000; }

button {
  background: #238636;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  transition: background 0.2s;
}

button:hover {
  background: #2ea043;
}

.commits {
  background: #0d1117;
  border-radius: 8px;
  padding: 15px;
  min-height: 60px;
}

.commit {
  padding: 10px;
  margin-bottom: 8px;
  background: #21262d;
  border-radius: 6px;
  font-family: monospace;
  font-size: 13px;
  border-left: 3px solid #a371f7;
}

.branch-list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.branch {
  padding: 8px 16px;
  background: #21262d;
  border-radius: 20px;
  font-size: 14px;
  font-family: monospace;
}

.branch.active {
  background: #58a6ff;
  color: #000;
  font-weight: bold;
}

.commands {
  margin-top: 30px;
  background: #161b22;
  border-radius: 12px;
  padding: 20px;
}

.commands pre {
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.8;
  color: #7ee787;
}

.remote {
  border-color: #58a6ff;
  background: rgba(88, 166, 255, 0.1);
}`,

    js: `// Git Workflow Simulation
let stagedFiles = [];
let commits = [{ hash: 'abc1234', msg: 'Initial commit' }];
let branches = ['main', 'feature-login'];
let currentBranch = 'main';
let fileStates = {
  'app.js': 'modified',
  'style.css': 'new',
  'readme.md': 'untracked'
};

function logCommand(cmd) {
  const log = document.getElementById('commandLog');
  log.textContent += '\\n$ ' + cmd;
  log.scrollTop = log.scrollHeight;
}

function gitAdd() {
  const workingDir = document.getElementById('workingDir');
  const stagingArea = document.getElementById('stagingArea');
  
  // Move all files to staging
  const files = workingDir.querySelectorAll('.file');
  files.forEach(file => {
    file.className = 'file staged';
    stagingArea.appendChild(file);
  });
  
  stagedFiles = Object.keys(fileStates);
  logCommand('git add .');
  logCommand('git status\\nChanges to be committed:\\n  modified: app.js\\n  new file: style.css\\n  new file: readme.md');
}

function gitCommit() {
  if (stagedFiles.length === 0) {
    alert('Staging area boşdur! Əvvəlcə git add edin.');
    return;
  }
  
  const hash = Math.random().toString(16).substr(2, 7);
  const msg = 'Add new features and styles';
  commits.push({ hash, msg });
  
  // Add to local repo
  const history = document.getElementById('commitHistory');
  const commitDiv = document.createElement('div');
  commitDiv.className = 'commit';
  commitDiv.textContent = hash + ' - ' + msg;
  history.insertBefore(commitDiv, history.firstChild);
  
  // Clear staging
  document.getElementById('stagingArea').innerHTML = '';
  stagedFiles = [];
  
  logCommand('git commit -m "Add new features and styles"');
  logCommand('[main ' + hash + '] ' + msg);
}

function createBranch() {
  const newBranch = 'feature-api';
  if (!branches.includes(newBranch)) {
    branches.push(newBranch);
    updateBranchList();
    logCommand('git checkout -b ' + newBranch);
    logCommand('Switched to a new branch \\'' + newBranch + '\\'');
  }
}

function switchBranch() {
  currentBranch = currentBranch === 'main' ? 'feature-login' : 'main';
  updateBranchList();
  logCommand('git checkout ' + currentBranch);
  logCommand('Switched to branch \\'' + currentBranch + '\\'');
}

function mergeBranch() {
  logCommand('git merge feature-login');
  logCommand('Merge made by the \\'recursive\\' strategy.');
  logCommand(' app.js | 5 +++++');
  logCommand(' 1 file changed, 5 insertions(+)');
}

function updateBranchList() {
  const list = document.getElementById('branchList');
  list.innerHTML = branches.map(b => 
    '<div class="branch ' + (b === currentBranch ? 'active' : '') + '">' + 
    (b === currentBranch ? '* ' : '') + b + 
    '</div>'
  ).join('');
}

// Initialize
updateBranchList();

// Interactive file clicks
document.querySelectorAll('.file').forEach(file => {
  file.addEventListener('click', function() {
    console.log('File clicked:', this.dataset.file);
  });
});

// Simulate git push
setTimeout(() => {
  const remote = document.getElementById('remoteHistory');
  remote.innerHTML = document.getElementById('commitHistory').innerHTML;
  logCommand('git push origin main');
  logCommand('Enumerating objects: 5, done.\\nWriting objects: 100% (5/5), 450 bytes | 450.00 KiB/s, done.');
}, 3000);`,
  },

  exercise: {
    title: "Git Workflow Layihəsi",
    description: "Komanda işini simulyasiya edin: Feature branch yaradın, dəyişikliklər edin, pull request simulyasiyası edin və main branch-ə birləşdirin. Merge conflict scenario yaradın.",
    requirements: [
      "git init ilə local repo yaradın",
      "3 commit edin main branch-də",
      "feature-navbar branch-i yaradın",
      "Feature branch-də 2 commit edin",
      "Main-də dəyişiklik edin (conflict üçün)",
      "git merge ilə conflict yaradın və həll edin",
      "GitHub repo yaradın və remote əlavə edin",
      ".gitignore faylı əlavə edin (node_modules, .env)"
    ],
    starterCode: `# Terminal komandalarını burada yazın
# 1. Repo yaradın
git init my-project
cd my-project

# 2. İlk commit
echo "# My Project" > README.md
git add README.md
git commit -m "Initial commit"

# Davam edin...`,
  },

  quiz: [
    {
      question: "git init nə edir?",
      options: ["Yeni repo yaradır", "Repo klonlayır", "Commit edir", "Branch yaradır"],
      correctAnswer: 0
    },
    {
      question: "git add . nə edir?",
      options: ["Bütün faylları commit edir", "Bütün dəyişiklikləri stage edir", "Repo yeniləyir", "Branch dəyişir"],
      correctAnswer: 1
    },
    {
      question: "git status nə göstərir?",
      options: ["Commit tarixçəsi", "Cari branch və fayl statusları", "Remote URL", "User məlumatları"],
      correctAnswer: 1
    },
    {
      question: "git checkout -b feature nə edir?",
      options: ["Feature branch-inə keçir", "Feature yaradır və keçir", "Feature silir", "Feature merge edir"],
      correctAnswer: 1
    },
    {
      question: "git merge conflict nə vaxt baş verir?",
      options: ["Hər merge-də", "Eyni faylda fərqli dəyişiklik olduqda", "Branch silinəndə", "Remote əlavə ediləndə"],
      correctAnswer: 1
    },
    {
      question: "git pull nə edir?",
      options: ["Yalnız fetch", "Fetch + merge", "Yalnız push", "Yalnız clone"],
      correctAnswer: 1
    },
    {
      question: ".gitignore faylı nə üçündür?",
      options: ["Git-i silmək", "Faylları ignore etmək", "Config saxlamaq", "Branch idarə etmək"],
      correctAnswer: 1
    },
    {
      question: "git log --oneline nə göstərir?",
      options: ["Detallı log", "Qısa commit tarixçəsi", "Yalnız son commit", "Branch siyahısı"],
      correctAnswer: 1
    },
    {
      question: "git remote -v nə göstərir?",
      options: ["Local branch-lər", "Remote repository URL-ləri", "Commit mesajları", "User adı"],
      correctAnswer: 1
    },
    {
      question: "git stash nə edir?",
      options: ["Commit edir", "Dəyişiklikləri müvəqqəti saxlayır", "Branch silir", "Push edir"],
      correctAnswer: 1
    }
  ]
};

export default topic11;