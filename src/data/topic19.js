export const topic19 = {
  id: 19,
  title: "ES6+ Features",
  duration: "90 dəq",
  isFree: false,
  
  content: `
    <h4>Template Literals</h4>
    <pre><code>const name = 'Ali';
const age = 25;

// Multi-line
const html = '
  <div>
    <h1>' + name + '</h1>
    <p>Age: ' + age + '</p>
  </div>
';

// Expression
const message = 'Hello ' + name + ', you are ' + age + ' years old';
const price = 100;
const total = 'Total: $' + (price * 1.2); // $120

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => 
    acc + str + (values[i] ? '<b>' + values[i] + '</b>' : ''), '');
}</code></pre>

    <h4>Arrow Functions</h4>
    <pre><code>// Traditional
function add(a, b) {
  return a + b;
}

// Arrow
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => console.log('Hello');

// This binding fərqi
const obj = {
  name: 'Ali',
  // Regular: this = obj
  regularFunc: function() {
    console.log(this.name);
  },
  // Arrow: this = outer scope
  arrowFunc: () => {
    console.log(this.name); // undefined
  }
};</code></pre>

    <h4>Modules (Import/Export)</h4>
    <pre><code>// Named exports
export const helper = () => {};
export const config = { api: 'url' };

// Default export
export default class MyClass {}

// Import
import MyClass, { helper, config } from './module.js';
import * as utils from './utils.js'; // Namespace

// Dynamic import
const module = await import('./heavy-module.js');</code></pre>

    <h4>Promises & Async/Await</h4>
    <pre><code>// Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve('Data') : reject('Error');
    }, 1000);
  });
};

// Async/Await
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Promise.all
const [users, posts] = await Promise.all([
  fetch('/users'),
  fetch('/posts')
]);</code></pre>

    <h4>Modern Features (ES2020+)</h4>
    <pre><code>// Optional Chaining
const city = user?.address?.city; // undefined if not exists

// Nullish Coalescing
const value = input ?? 'default'; // Only null/undefined, not falsy

// BigInt
const huge = 9007199254740991n;
const result = huge + 1n;

// Dynamic Import
const module = await import('./module.js');

// Class Fields & Private
class User {
  #password; // Private field
  static count = 0; // Static field
  
  constructor(name) {
    this.name = name;
    User.count++;
  }
}</code></pre>
  `,

  starterCode: {
    html: `<div class="es6-lab">
  <h2>🎯 ES6+ Features Lab</h2>
  
  <section class="demo-section">
    <h3>1. Template Literals & Expressions</h3>
    <div class="template-playground">
      <input type="text" id="userName" placeholder="Adınız" value="Kamil">
      <input type="number" id="userAge" placeholder="Yaşınız" value="25">
      <select id="userRole">
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
      </select>
      <button onclick="generateProfile()">Profil Yarat</button>
      <div class="output-box" id="templateOutput"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Arrow Functions vs Regular</h3>
    <div class="function-comparison">
      <div class="comparison-box">
        <h4>Regular Function</h4>
        <pre id="regularCode">function greet() {
  console.log(this.name);
}</pre>
        <button onclick="testRegular()">Test Regular</button>
        <div class="result" id="regularResult"></div>
      </div>
      <div class="comparison-box">
        <h4>Arrow Function</h4>
        <pre id="arrowCode">const greet = () => {
  console.log(this.name);
}</pre>
        <button onclick="testArrow()">Test Arrow</button>
        <div class="result" id="arrowResult"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Async/Await & Promises</h3>
    <div class="async-demo">
      <div class="promise-buttons">
        <button onclick="runPromise('success')">Promise (Success)</button>
        <button onclick="runPromise('error')">Promise (Error)</button>
        <button onclick="runAsyncAwait()">Async/Await Chain</button>
        <button onclick="runPromiseAll()">Promise.all</button>
      </div>
      <div class="loading" id="loadingIndicator" style="display:none">⏳ Yüklənir...</div>
      <div class="async-output" id="asyncOutput"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Optional Chaining & Nullish Coalescing</h3>
    <div class="modern-ops">
      <pre class="data-preview">const user = {
  name: "Ali",
  profile: {
    // address: { city: "Baku" } // Optional!
  },
  settings: {
    theme: null // Could be null
  }
};</pre>
      <div class="test-buttons">
        <button onclick="testOptionalChaining()">user?.profile?.address?.city</button>
        <button onclick="testNullish()">settings.theme ?? 'light'</button>
        <button onclick="testOldWay()">Köhnə yol (&& və ||)</button>
      </div>
      <div class="modern-result" id="modernResult"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Class Syntax & Private Fields</h3>
    <div class="class-demo">
      <div class="bank-app">
        <h4>Bank Account (Class)</h4>
        <input type="text" id="accountName" placeholder="Hesab sahibi">
        <input type="number" id="initialBalance" placeholder="Başlanğıc balans">
        <button onclick="createAccount()">Hesab Yarat</button>
        <div class="account-actions" id="accountActions" style="display:none">
          <input type="number" id="amount" placeholder="Məbləğ">
          <button onclick="deposit()">Depozit</button>
          <button onclick="withdraw()">Çıxarış</button>
          <button onclick="checkBalance()">Balans</button>
        </div>
        <div class="account-info" id="accountInfo"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>6. Array/Object Modern Methods</h3>
    <div class="methods-grid">
      <button onclick="testFromEntries()">Object.fromEntries()</button>
      <button onclick="testFlat()">Array.flat()</button>
      <button onclick="testFlatMap()">Array.flatMap()</button>
      <button onclick="testAt()">Array.at()</button>
      <button onclick="testReplaceAll()">String.replaceAll()</button>
    </div>
    <div class="methods-result" id="methodsResult"></div>
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

.es6-lab {
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
  margin-bottom: 15px;
}

.demo-section {
  background: #1e293b;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #334155;
}

/* Template Literals */
.template-playground {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.template-playground input,
.template-playground select {
  padding: 12px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #fff;
}

.output-box {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #34d399;
  font-family: monospace;
  white-space: pre-wrap;
}

/* Function Comparison */
.function-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .function-comparison {
    grid-template-columns: 1fr;
  }
}

.comparison-box {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
}

.comparison-box pre {
  background: #1e293b;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  margin-bottom: 15px;
  color: #a78bfa;
}

.result {
  margin-top: 15px;
  padding: 10px;
  background: #1e293b;
  border-radius: 6px;
  font-family: monospace;
  font-size: 13px;
  min-height: 40px;
}

/* Async Demo */
.promise-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.loading {
  text-align: center;
  padding: 20px;
  color: #fbbf24;
  font-size: 18px;
}

.async-output {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
  min-height: 100px;
  border: 2px solid #6366f1;
}

/* Modern Ops */
.data-preview {
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  margin-bottom: 15px;
  color: #34d399;
}

.test-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.modern-result {
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  border-left: 4px solid #f472b6;
}

/* Class Demo */
.bank-app {
  background: #0f172a;
  padding: 25px;
  border-radius: 12px;
  max-width: 500px;
}

.bank-app input {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 6px;
  color: #fff;
}

.account-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.account-actions input {
  flex: 1;
  min-width: 120px;
}

.account-info {
  margin-top: 20px;
  padding: 15px;
  background: #1e293b;
  border-radius: 8px;
  border: 2px solid #10b981;
}

/* Methods Grid */
.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-bottom: 15px;
}

.methods-result {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
  min-height: 60px;
}

button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

button:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

.promise-buttons button {
  background: #8b5cf6;
}

.test-buttons button {
  background: #10b981;
}

.methods-grid button {
  background: #f59e0b;
  color: #0f172a;
  font-weight: bold;
}`,
    js: `// Template Literals
function generateProfile() {
  const name = document.getElementById('userName').value || 'Guest';
  const age = document.getElementById('userAge').value || 0;
  const role = document.getElementById('userRole').value;
  
  const html = '
<div class="profile-card">
  <h3>' + name + '</h3>
  <p>Role: ' + role + '</p>
  <p>Experience: ' + (age > 18 ? 'Senior' : 'Junior') + '</p>
  <p>Salary estimate: $' + (role === 'manager' ? 8000 : 5000) + '</p>
</div>
  ';
  
  document.getElementById('templateOutput').innerHTML = html;
}

// Arrow vs Regular Functions
const testObject = {
  name: 'Test Object',
  
  regularMethod: function() {
    return 'Regular: this.name = ' + this.name;
  },
  
  arrowMethod: () => {
    return 'Arrow: this.name = ' + (this.name || 'undefined (window/global)');
  }
};

function testRegular() {
  const result = testObject.regularMethod();
  document.getElementById('regularResult').textContent = result;
  console.log(result);
}

function testArrow() {
  const result = testObject.arrowMethod();
  document.getElementById('arrowResult').textContent = result;
  console.log(result);
}

// Async/Await
function simulateAPI(delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject('❌ Xəta baş verdi!');
      } else {
        resolve('✅ Məlumat uğurla alındı!');
      }
    }, delay);
  });
}

async function runPromise(type) {
  const output = document.getElementById('asyncOutput');
  const loading = document.getElementById('loadingIndicator');
  
  loading.style.display = 'block';
  output.textContent = '';
  
  simulateAPI(1000, type === 'error')
    .then(data => {
      output.innerHTML = '<span style="color:#34d399">' + data + '</span>';
    })
    .catch(error => {
      output.innerHTML = '<span style="color:#ef4444">' + error + '</span>';
    })
    .finally(() => {
      loading.style.display = 'none';
    });
}

async function runAsyncAwait() {
  const output = document.getElementById('asyncOutput');
  const loading = document.getElementById('loadingIndicator');
  
  loading.style.display = 'block';
  output.textContent = '';
  
  try {
    const step1 = await simulateAPI(500);
    output.innerHTML += '1. ' + step1 + '\\n';
    
    const step2 = await simulateAPI(500);
    output.innerHTML += '2. ' + step2 + '\\n';
    
    const step3 = await simulateAPI(500);
    output.innerHTML += '3. ' + step3 + '\\n';
    
    output.innerHTML += '\\n✨ Bütün addımlar tamamlandı!';
  } catch (error) {
    output.innerHTML = 'Xəta: ' + error;
  } finally {
    loading.style.display = 'none';
  }
}

async function runPromiseAll() {
  const output = document.getElementById('asyncOutput');
  const loading = document.getElementById('loadingIndicator');
  
  loading.style.display = 'block';
  output.textContent = 'Bütün promise-lər gözlənilir...\\n';
  
  try {
    const start = Date.now();
    const [result1, result2, result3] = await Promise.all([
      simulateAPI(1000),
      simulateAPI(1500),
      simulateAPI(800)
    ]);
    
    const duration = Date.now() - start;
    output.innerHTML += 
      '✅ Hamısı hazır! (' + duration + 'ms)\\n' +
      '- ' + result1 + '\\n' +
      '- ' + result2 + '\\n' +
      '- ' + result3 + '\\n' +
      '\\n(Sequential olsaydı 3300ms çəkəcəkdi)';
  } catch (error) {
    output.innerHTML = 'Xəta: ' + error;
  } finally {
    loading.style.display = 'none';
  }
}

// Optional Chaining & Nullish
const sampleUser = {
  name: "Ali",
  profile: {
    // address intentionally missing
  },
  settings: {
    theme: null,
    fontSize: 0 // falsy but valid!
  }
};

function testOptionalChaining() {
  // Modern way
  const city = sampleUser?.profile?.address?.city;
  
  // Old way
  const cityOld = sampleUser && sampleUser.profile && 
                  sampleUser.profile.address && sampleUser.profile.address.city;
  
  document.getElementById('modernResult').innerHTML = 
    'Modern (?.): ' + city + ' (undefined)\\n' +
    'Köhnə (&&): ' + cityOld + ' (undefined)\\n' +
    'Fərq: Optional chaining qısa və təhlükəsizdir';
}

function testNullish() {
  const theme = sampleUser.settings.theme ?? 'light';
  const fontSize = sampleUser.settings.fontSize ?? 16;
  
  document.getElementById('modernResult').innerHTML = 
    'theme ?? "light": ' + theme + '\\n' +
    '(null olduğu üçün default "light" aldı)\\n\\n' +
    'fontSize ?? 16: ' + fontSize + '\\n' +
    '(0 falsy-dir ama ?? yalnız null/undefined yoxlayır, 0 qaldı!)';
}

function testOldWay() {
  const theme = sampleUser.settings.theme || 'light';
  const fontSize = sampleUser.settings.fontSize || 16;
  
  document.getElementById('modernResult').innerHTML = 
    'Köhnə yol (||):\\n' +
    'theme || "light": ' + theme + ' ✅\\n' +
    'fontSize || 16: ' + fontSize + ' ❌ (0 falsy sayıldı!)\\n\\n' +
    'Problem: || bütün falsy dəyərləri (0, "", false) yox sayır';
}

// Class with Private Fields
class BankAccount {
  #balance; // Private field
  static #accounts = 0; // Static private
  
  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
    this.transactions = [];
    BankAccount.#accounts++;
  }
  
  deposit(amount) {
    if (amount <= 0) throw new Error('Məbləğ müsbət olmalıdır');
    this.#balance += amount;
    this.transactions.push({ type: 'deposit', amount, date: new Date() });
    return this.#balance;
  }
  
  withdraw(amount) {
    if (amount > this.#balance) throw new Error('Kifayət qədər vəsait yoxdur');
    this.#balance -= amount;
    this  Kodun qalan hissəsini tamamlayıram:

 javascript
    this.transactions.push({ type: 'withdraw', amount, date: new Date() });
    return this.#balance;
  }
  
  get balance() {
    return this.#balance;
  }
  
  get formattedBalance() {
    return this.#balance.toLocaleString('az-AZ', { 
      style: 'currency', 
      currency: 'AZN' 
    });
  }
  
  static get totalAccounts() {
    return BankAccount.#accounts;
  }
}

let currentAccount = null;

function createAccount() {
  const name = document.getElementById('accountName').value;
  const balance = parseFloat(document.getElementById('initialBalance').value) || 0;
  
  if (!name) {
    alert('Hesab sahibinin adını daxil edin!');
    return;
  }
  
  currentAccount = new BankAccount(name, balance);
  document.getElementById('accountActions').style.display = 'block';
  updateAccountDisplay();
  
  console.log('Total accounts:', BankAccount.totalAccounts);
}

function deposit() {
  const amount = parseFloat(document.getElementById('amount').value);
  try {
    currentAccount.deposit(amount);
    updateAccountDisplay();
    document.getElementById('amount').value = '';
  } catch (error) {
    alert(error.message);
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById('amount').value);
  try {
    currentAccount.withdraw(amount);
    updateAccountDisplay();
    document.getElementById('amount').value = '';
  } catch (error) {
    alert(error.message);
  }
}

function checkBalance() {
  updateAccountDisplay();
}

function updateAccountDisplay() {
  const info = document.getElementById('accountInfo');
  info.innerHTML = '
    <strong>' + currentAccount.owner + '</strong><br>
    Balans: ' + currentAccount.formattedBalance + '<br>
    <small>Əməliyyat sayı: ' + currentAccount.transactions.length + '</small>
  ';
}

// Modern Methods
function testFromEntries() {
  const entries = [['name', 'Ali'], ['age', 25], ['city', 'Baku']];
  const obj = Object.fromEntries(entries);
  
  showMethodResult('Object.fromEntries()', 
    'Input: ' + JSON.stringify(entries) + '\n' +
    'Output: ' + JSON.stringify(obj));
}

function testFlat() {
  const nested = [1, [2, 3], [4, [5, 6]]];
  const flat1 = nested.flat();
  const flat2 = nested.flat(2);
  
  showMethodResult('Array.flat()', 
    'Original: ' + JSON.stringify(nested) + '\n' +
    'flat(): ' + JSON.stringify(flat1) + '\n' +
    'flat(2): ' + JSON.stringify(flat2));
}

function testFlatMap() {
  const sentences = ['Hello world', 'ES6 features'];
  const words = sentences.flatMap(s => s.split(' '));
  
  showMethodResult('Array.flatMap()', 
    'Input: ' + JSON.stringify(sentences) + '\n' +
    'flatMap(split): ' + JSON.stringify(words));
}

function testAt() {
  const arr = [10, 20, 30, 40, 50];
  
  showMethodResult('Array.at()', 
    'Array: ' + JSON.stringify(arr) + '\n' +
    'at(0): ' + arr.at(0) + '\n' +
    'at(-1): ' + arr.at(-1) + ' (son element!)\n' +
    'at(-2): ' + arr.at(-2) + ' (sondan ikinci)');
}

function testReplaceAll() {
  const text = 'foo bar foo baz foo';
  const newText = text.replaceAll('foo', 'qux');
  
  showMethodResult('String.replaceAll()', 
    'Original: "' + text + '"\n' +
    'replaceAll("foo", "qux"): "' + newText + '"\n' +
    '(Köhnə replace() yalnız birincini dəyişərdi)');
}

function showMethodResult(title, content) {
  document.getElementById('methodsResult').innerHTML = 
    '<strong>' + title + '</strong>\n' + content;
}

console.log('ES6+ module loaded!');
console.log('Features: Template literals, Arrow functions, Async/Await, Classes, Optional chaining, Nullish coalescing');`,
  },

  exercise: {
    title: "Modern API Client",
    description: "ES6+ features istifadə edərək REST API client yaradın. Async/await, destructuring, optional chaining, və class syntax istifadə edin.",
    requirements: [
      "APIClient class yaradın (private #apiKey)",
      "async/await ilə GET/POST metodları",
      "Template literals ilə dynamic URL construction",
      "Destructuring ilə response handling",
      "Optional chaining ilə nested data access",
      "Nullish coalescing ilə default config",
      "Static method ilə instance cache",
      "AbortController ilə request cancellation"
    ],
    starterCode: `class APIClient {
  #apiKey;
  #baseURL;
  static instances = new Map();
  
  constructor(config) {
    // Nullish coalescing ilə defaults
    this.#baseURL = config.baseURL ?? 'https://api.example.com';
    this.#apiKey = config.apiKey;
  }
  
  async get(endpoint, options = {}) {
    // Implementation
  }
  
  async post(endpoint, data) {
    // Implementation
  }
  
  static getInstance(key) {
    // Singleton pattern
  }
}

// Usage
const client = new APIClient({ apiKey: 'secret' });
const { data, error } = await client.get('/users');`,
  },

  quiz: [
    {
      question: "Template literal syntax hansıdır?",
      options: ["'text'", '"text"', '`text`', "<text>"],
      correctAnswer: 2
    },
    {
      question: "Arrow function-da this necə bağlanır?",
      options: ["Dinamik", "Lexical (outer scope)", "Global", "undefined"],
      correctAnswer: 1
    },
    {
      question: "async function nə qaytarır?",
      options: ["undefined", "Promise", "Function", "Object"],
      correctAnswer: 1
    },
    {
      question: "obj?.property?.value - ?. nədir?",
      options: ["Ternary", "Optional chaining", "Nullish coalescing", "Spread"],
      correctAnswer: 1
    },
    {
      question: "0 ?? 5 nəticə?",
      options: ["0", "5", "undefined", "Error"],
      correctAnswer: 0
    },
    {
      question: "class-da private field necə yazılır?",
      options: ["private x", "_x", "#x", "@x"],
      correctAnswer: 2
    },
    {
      question: "Promise.all() nə edir?",
      options: ["Birini gözləyir", "Hamısını paralel gözləyir", "Sırayla işləyir", "Xəta atır"],
      correctAnswer: 1
    },
    {
      question: "const [a, b] = [1, 2] - destructuring-də a nədir?",
      options: ["[1,2]", "1", "undefined", "Error"],
      correctAnswer: 1
    },
    {
      question: "Array.at(-1) nə edir?",
      options: ["İlk element", "Son element", "Error", "undefined"],
      correctAnswer: 1
    },
    {
      question: "import() vs import fərqi?",
      options: ["Yoxdur", "import() dynamic, import static", "import() yalnız node", "import deprecated"],
      correctAnswer: 1
    }
  ]
};

export default topic19;