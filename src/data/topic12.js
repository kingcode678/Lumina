export const topic12 = {
  id: 12,
  title: "Chrome DevTools",
  duration: "65 dəq",
  isFree: false,
  
  content: `
    <h4>DevTools-a Giriş</h4>
    <p>Chrome DevTools veb developer-lərə səhifəni debug etmək, performance analizi etmək və SEO yoxlamağa imkan verir. Açmaq üçün F12 və ya Ctrl+Shift+I (Cmd+Option+I Mac).</p>
    
    <h4>Əsas Panellər</h4>
    <ul>
      <li><strong>Elements:</strong> DOM və CSS real-time edit</li>
      <li><strong>Console:</strong> JavaScript icra və log-lar</li>
      <li><strong>Sources:</strong> Debug breakpoint-ləri</li>
      <li><strong>Network:</strong> Request/response analizi</li>
      <li><strong>Performance:</strong> FPS və loading analizi</li>
      <li><strong>Application:</strong> LocalStorage, Cookies, Service Workers</li>
      <li><strong>Lighthouse:</strong> Performance, Accessibility, SEO audit</li>
    </ul>

    <h4>Elements Panel</h4>
    <pre><code>// DOM navigation
$h0 // Son seçilmiş element
$0  // Son seçilmiş element
$1  // Əvvəlki seçilmiş element
$$('div') // Bütün div-lər (querySelectorAll)

// Styles
element.style.background = 'red'
getComputedStyle(element)</code></pre>

    <h4>Console API</h4>
    <pre><code>console.log('Basic log');
console.warn('Xəbərdarlıq');
console.error('Xəta');
console.table([{name: 'John', age: 30}]);
console.group('Group'); console.log('Inside'); console.groupEnd();
console.time('timer'); /* code */ console.timeEnd('timer');

// Assert və trace
console.assert(false, 'Bu false olarsa göstərilər');
console.trace('Call stack');</code></pre>

    <h4>Network Panel</h4>
    <pre><code>// Throttling simulyasiya
// Fast 3G, Slow 3G, Offline

// Request filtering
domain:api.example.com
method:GET
status-code:200
mime-type:application/json</code></pre>

    <h4>Debugging</h4>
    <pre><code>// Breakpoint tipləri
debugger; // Kodda breakpoint
// XHR/fetch breakpoint
// DOM breakpoint (subtree modifications)
// Event listener breakpoint</code></pre>
  `,

  starterCode: {
    html: `<div class="devtools-demo">
  <h2>🔧 DevTools Practice Zone</h2>
  
  <section class="demo-section" id="domSection">
    <h3>1. DOM Manipulation</h3>
    <div class="box" id="targetBox">Target Element</div>
    <button onclick="changeColor()">Change Color</button>
    <button onclick="addElement()">Add Element</button>
    <button onclick="toggleClass()">Toggle Class</button>
  </section>

  <section class="demo-section">
    <h3>2. Console Methods</h3>
    <button onclick="demoConsole()">Run Console Demo</button>
    <button onclick="demoTable()">Show Table</button>
    <button onclick="demoTimer()">Start Timer</button>
  </section>

  <section class="demo-section">
    <h3>3. Network Requests</h3>
    <button onclick="fetchData()">Fetch API Data</button>
    <button onclick="fetchWithError()">Fetch with Error</button>
    <div id="apiResult"></div>
  </section>

  <section class="demo-section">
    <h3>4. Performance Test</h3>
    <button onclick="heavyCalculation()">Heavy Calculation</button>
    <button onclick="memoryLeak()">Memory Leak Demo</button>
    <div id="perfResult"></div>
  </section>

  <section class="demo-section">
    <h3>5. Storage</h3>
    <button onclick="saveToLocal()">Save to LocalStorage</button>
    <button onclick="readLocal()">Read LocalStorage</button>
    <button onclick="clearStorage()">Clear Storage</button>
  </section>

  <section class="demo-section">
    <h3>6. Breakpoint Demo</h3>
    <input type="number" id="num1" value="10">
    <input type="number" id="num2" value="0">
    <button onclick="divideNumbers()">Divide (Debug me!)</button>
  </section>
</div>`,
    
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #1a1a2e;
  color: #eee;
  padding: 40px;
  line-height: 1.6;
}

.devtools-demo {
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  color: #00d9ff;
  margin-bottom: 30px;
  font-size: 32px;
}

h3 {
  color: #ff6b6b;
  margin-bottom: 15px;
  font-size: 20px;
}

.demo-section {
  background: #16213e;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid #0f3460;
}

.box {
  width: 150px;
  height: 150px;
  background: #e94560;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: all 0.3s;
  font-weight: bold;
}

.box.highlight {
  background: #00d9ff;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}

button {
  background: #0f3460;
  color: #00d9ff;
  border: 1px solid #00d9ff;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  transition: all 0.2s;
  font-size: 14px;
}

button:hover {
  background: #00d9ff;
  color: #1a1a2e;
}

input {
  background: #0f3460;
  border: 1px solid #533483;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-right: 10px;
  width: 100px;
}

#apiResult, #perfResult {
  margin-top: 15px;
  padding: 15px;
  background: #0f3460;
  border-radius: 8px;
  min-height: 50px;
  font-family: monospace;
  font-size: 13px;
}

.error {
  color: #ff6b6b;
}

.success {
  color: #00d9ff;
}

.new-element {
  background: #533483;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hidden debug info */
.debug-info {
  display: none;
}

/* For element inspection */
.inspect-me {
  position: relative;
}

.inspect-me::after {
  content: '👆 Inspect me in DevTools!';
  position: absolute;
  top: -30px;
  left: 0;
  background: #ff6b6b;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s;
}

.inspect-me:hover::after {
  opacity: 1;
}`,

    js: `// DevTools Demo Functions

// 1. DOM Manipulation
function changeColor() {
  const box = document.getElementById('targetBox');
  const colors = ['#e94560', '#00d9ff', '#ff6b6b', '#51cf66', '#fcc419'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  box.style.background = randomColor;
  console.log('Color changed to:', randomColor);
  
  // Breakpoint üçün debugger
  debugger;
}

function addElement() {
  const section = document.getElementById('domSection');
  const newDiv = document.createElement('div');
  newDiv.className = 'new-element';
  newDiv.textContent = 'New Element ' + Date.now();
  section.appendChild(newDiv);
  
  console.log('Element added:', newDiv);
}

function toggleClass() {
  const box = document.getElementById('targetBox');
  box.classList.toggle('highlight');
  console.log('Class list:', box.classList.toString());
}

// 2. Console Methods
function demoConsole() {
  console.clear();
  
  console.log('%c Styled Log!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
  console.warn('This is a warning!');
  console.error('This is an error!');
  
  console.group('User Info');
  console.log('Name: John');
  console.log('Age: 30');
  console.groupEnd();
  
  console.log('%c Tip: Use $0 to access selected element', 'color: #51cf66');
}

function demoTable() {
  const users = [
    { name: 'Alice', role: 'Admin', active: true },
    { name: 'Bob', role: 'User', active: false },
    { name: 'Charlie', role: 'Editor', active: true }
  ];
  
  console.table(users);
  console.table(users, ['name', 'role']);
}

function demoTimer() {
  console.time('Operation');
  
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  
  console.timeEnd('Operation');
  console.log('Result:', sum);
}

// 3. Network
async function fetchData() {
  const resultDiv = document.getElementById('apiResult');
  resultDiv.innerHTML = 'Loading...';
  
  try {
    console.log('Fetching data...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('Headers:', [...response.headers]);
    
    const data = await response.json();
    console.log('Data:', data);
    
    resultDiv.innerHTML = '<span class="success">Success! Check Network tab</span>\\n' + 
                         JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Fetch error:', error);
    resultDiv.innerHTML = '<span class="error">Error: ' + error.message + '</span>';
  }
}

async function fetchWithError() {
  try {
    const response = await fetch('https://invalid-url.example.com');
  } catch (error) {
    console.error('Expected error:', error);
    console.trace('Error trace');
  }
}

// 4. Performance
function heavyCalculation() {
  console.time('Heavy Calculation');
  const resultDiv = document.getElementById('perfResult');
  
  // Performance API
  const start = performance.now();
  
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i);
  }
  
  const end = performance.now();
  const duration = (end - start).toFixed(2);
  
  console.timeEnd('Heavy Calculation');
  console.log('Duration:', duration + 'ms');
  
  resultDiv.innerHTML = 'Calculation took: ' + duration + 'ms\\nCheck Performance tab!';
  
  // Memory usage
  if (performance.memory) {
    console.log('Memory used:', (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB');
  }
}

// Memory leak demo
let leakyArray = [];
function memoryLeak() {
  console.log('Creating memory leak...');
  
  // Her çağrıldığında büyüyen array
  for (let i = 0; i < 10000; i++) {
    leakyArray.push(new Array(1000).fill('leak'));
  }
  
  console.log('Array size:', leakyArray.length);
  console.log('Take heap snapshot in Memory tab!');
}

// 5. Storage
function saveToLocal() {
  const data = {
    user: 'John Doe',
    theme: 'dark',
    timestamp: new Date().toISOString()
  };
  
  localStorage.setItem('appData', JSON.stringify(data));
  sessionStorage.setItem('sessionId', 'xyz123');
  
  console.log('Saved to localStorage:', data);
  console.log('Storage quota:', navigator.storage.estimate());
}

function readLocal() {
  const data = localStorage.getItem('appData');
  const session = sessionStorage.getItem('sessionId');
  
  console.log('localStorage:', JSON.parse(data));
  console.log('sessionStorage:', session);
  console.log('All keys:', Object.keys(localStorage));
}

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
  console.log('Storage cleared!');
}

// 6. Debug
function divideNumbers() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  
  console.log('Dividing:', num1, '/', num2);
  
  // Breakpoint burada işləyəcək
  debugger;
  
  if (num2 === 0) {
    console.error('Cannot divide by zero!');
    return;
  }
  
  const result = num1 / num2;
  console.log('Result:', result);
  return result;
}

// Global error handler
window.onerror = function(msg, url, line) {
  console.error('Global error:', msg, 'at', url + ':' + line);
  return false;
};

// Console shortcuts
console.log('DevTools shortcuts:');
console.log('$0 - Last selected element');
console.log('$_ - Last evaluation result');
console.log('$$(selector) - querySelectorAll');
console.log('inspect(element) - Inspect element');
console.log('copy(object) - Copy to clipboard');

// Monitor events
function monitorEventsDemo() {
  const box = document.getElementById('targetBox');
  // DevTools console-da yazın: monitorEvents($0)
  // Sonra: unmonitorEvents($0)
}

console.log('Try: monitorEvents($0) in console, then click the box');`,
  },

  exercise: {
    title: "Performance Optimization",
    description: "Verilmiş yavaş işləyən səhifəni DevTools istifadə edərək optimize edin. Lighthouse audit edin, Network waterfall analizi edin və render blocking resources tapın.",
    requirements: [
      "Lighthouse audit run edin (Performance, Accessibility, SEO)",
      "Network tab-da TTFB və resource loading vaxtlarını yoxlayın",
      "Performance tab-da FPS drops tapın",
      "Console-da error və warning-ləri fix edin",
      "Memory tab-da leak tapın",
      "Application tab-da cache strategiyası qurun",
      "Coverage tab-da unused CSS/JS tapın"
    ],
    starterCode: `<!-- Optimize edilməli olan səhifə -->
<!DOCTYPE html>
<html>
<head>
  <!-- Render blocking resources -->
  <link rel="stylesheet" href="https://slow-cdn.com/huge.css">
  <script src="https://slow-cdn.com/heavy.js"></script>
</head>
<body>
  <div id="app">
    <!-- Böyük DOM tree -->
  </div>
  
  <script>
    // Memory leak
    setInterval(() => {
      window.leakyArray = window.leakyArray || [];
      window.leakyArray.push(new Array(1000000));
    }, 1000);
    
    // Heavy calculation
    function slowFunction() {
      for(let i = 0; i < 999999999; i++) {}
    }
  </script>
</body>
</html>`,
  },

  quiz: [
    {
      question: "F12 hansı paneli açır?",
      options: ["Console", "Elements", "Son istifadə olunan panel", "Settings"],
      correctAnswer: 2
    },
    {
      question: "$0 console-da nəyi ifadə edir?",
      options: ["İlk element", "Son seçilmiş element", "Document", "Window"],
      correctAnswer: 1
    },
    {
      question: "console.table() nə edir?",
      options: ["HTML table yaradır", "Array/objəti table formatında göstərir", "CSS table yaradır", "Database table açır"],
      correctAnswer: 1
    },
    {
      question: "debugger; nə üçün istifadə olunur?",
      options: ["Kodu dayandırmaq", "Breakpoint yaratmaq", "Error atmaq", "Log yazmaq"],
      correctAnswer: 1
    },
    {
      question: "Network panel-də waterfall nəyi göstərir?",
      options: ["JavaScript error-ləri", "Request-lərin vaxt qrafiki", "DOM strukturu", "Cookie-ləri"],
      correctAnswer: 1
    },
    {
      question: "Lighthouse hansı metrikləri ölçür?",
      options: ["Yalnız Performance", "Performance, Accessibility, SEO, Best Practices", "Yalnız SEO", "Yalnız Security"],
      correctAnswer: 1
    },
    {
      question: "Application panel-də nəyi görə bilərik?",
      options: ["Yalnız LocalStorage", "LocalStorage, Cookies, Service Workers, Cache", "Yalnız Cookies", "Yalnız SessionStorage"],
      correctAnswer: 1
    },
    {
      question: "Performance tab-da FPS nəyi göstərir?",
      options: ["Frames per second", "Fetch processing speed", "File processing size", "Function performance score"],
      correctAnswer: 0
    },
    {
      question: "console.time() və console.timeEnd() nə üçündir?",
      options: ["Vaxt göstərmək", "Kodun icra vaxtını ölçmək", "Timer yaratmaq", "Date obyekti yaratmaq"],
      correctAnswer: 1
    },
    {
      question: "Coverage tab nəyi göstərir?",
      options: ["Test coverage", "CSS/JS istifadə olunmayan kodları", "Browser support", "Accessibility coverage"],
      correctAnswer: 1
    }
  ]
};

export default topic12;