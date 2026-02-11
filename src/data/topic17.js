export const topic17 = {
  id: 17,
  title: "Arrays və Array Methods",
  duration: "85 dəq",
  isFree: false,
  
  content: `
    <h4>Array Yaratma</h4>
    <pre><code>const arr1 = [1, 2, 3];
const arr2 = new Array(5);        // [empty ×5]
const arr3 = Array.from('hello'); // ['h','e','l','l','o']
const arr4 = [...arr1];           // Spread copy</code></pre>

    <h4>Əsas Array Methods</h4>
    <pre><code>// Add/Remove
arr.push(4);          // Sonuna əlavə
arr.pop();            // Sonunu sil
arr.unshift(0);       // Əvvəlinə əlavə
arr.shift();          // Əvvəlin sil
arr.splice(1, 2);     // Index 1-dən 2 element sil

// Access
arr.slice(1, 3);      // Kopya al (destructive deyil)
arr.indexOf(2);       // Index tap
arr.includes(2);      // Var/yox
arr.find(x => x > 2); // Şərtə uyğun ilk element
arr.findIndex(x => x > 2); // Index-ini tap</code></pre>

    <h4>Transform Methods (İmportant!)</h4>
    <pre><code>const nums = [1, 2, 3, 4, 5];

// map - Yeni array yarat
const doubled = nums.map(n => n * 2); // [2,4,6,8,10]

// filter - Şərtə uyğun filterlə
const evens = nums.filter(n => n % 2 === 0); // [2,4]

// reduce - Yekun dəyər hesabla
const sum = nums.reduce((acc, n) => acc + n, 0); // 15

// forEach - Hər element üçün (return yox)
nums.forEach(n => console.log(n));

// sort - Sırala (MUTATES!)
const sorted = [...nums].sort((a, b) => b - a); // [5,4,3,2,1]

// some/every - Test et
nums.some(n => n > 4);  // true (ən azı biri)
nums.every(n => n > 0); // true (hamısı)</code></pre>

    <h4>Modern Array Features</h4>
    <pre><code>// Flatten
const nested = [1, [2, 3], [4, [5]]];
nested.flat(2); // [1,2,3,4,5]

// Chaining
const result = users
  .filter(u => u.age > 18)
  .map(u => u.name)
  .sort();

// Destructuring with rest
const [first, second, ...rest] = arr;

// Array.isArray
Array.isArray([]); // true
Array.isArray({}); // false</code></pre>
  `,

  starterCode: {
    html: `<div class="arrays-lab">
  <h2>🎯 Arrays & Methods Lab</h2>
  
  <section class="demo-section">
    <h3>1. Array Explorer</h3>
    <div class="array-controls">
      <input type="text" id="arrayInput" placeholder="Rəqəmlər daxil edin (1,2,3,4,5)">
      <button onclick="createArray()">Array Yarat</button>
      <button onclick="clearArray()">Təmizlə</button>
    </div>
    <div class="array-display" id="arrayDisplay">[]</div>
    <div class="method-buttons">
      <button onclick="runMethod('map')">map (x2)</button>
      <button onclick="runMethod('filter')">filter (>5)</button>
      <button onclick="runMethod('reduce')">reduce (sum)</button>
      <button onclick="runMethod('sort')">sort (desc)</button>
      <button onclick="runMethod('slice')">slice (1-3)</button>
      <button onclick="runMethod('find')">find (>7)</button>
    </div>
    <div class="result-display" id="methodResult">Nəticə burada görünəcək...</div>
  </section>

  <section class="demo-section">
    <h3>2. Real-world: Shopping Cart</h3>
    <div class="cart-app">
      <div class="products">
        <h4>Məhsullar</h4>
        <div class="product-list" id="productList"></div>
      </div>
      <div class="cart">
        <h4>Səbət (<span id="cartCount">0</span> ədəd)</h4>
        <div class="cart-items" id="cartItems">Səbət boşdur</div>
        <div class="cart-summary">
          <div>Ümumi: <span id="cartTotal">0</span> AZN</div>
          <div>Endirim (10%): <span id="cartDiscount">0</span> AZN</div>
          <div class="final-total">Yekun: <span id="cartFinal">0</span> AZN</div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Data Processing Pipeline</h3>
    <div class="pipeline-controls">
      <button onclick="generateUsers()">İstifadəçi Yarat (10)</button>
      <button onclick="pipeline('adults')">Yalnız 18+</button>
      <button onclick="pipeline('names')">Adları Al</button>
      <button onclick="pipeline('sort')">Yaşa Görə Sırala</button>
      <button onclick="pipeline('group')">Qrupla</button>
    </div>
    <div class="data-display" id="userData">Məlumat yoxdur...</div>
  </section>

  <section class="demo-section">
    <h3>4. Method Chaining Challenge</h3>
    <div class="challenge-box">
      <p>Verilən: <code>[3, 1, 4, 1, 5, 9, 2, 6]</code></p>
      <p>Tapşırıq: Cüt ədədləri tap, 2-yə vur, azalan sırala</p>
      <button onclick="showChainSolution()">Həllə Bax</button>
      <pre id="chainSolution" style="display:none">
const result = numbers
  .filter(n => n % 2 === 0)  // [4, 2, 6]
  .map(n => n * 2)           // [8, 4, 12]
  .sort((a, b) => b - a);    // [12, 8, 4]
      </pre>
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

.arrays-lab {
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

/* Array Explorer */
.array-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

#arrayInput {
  flex: 1;
  min-width: 200px;
  padding: 12px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #fff;
}

.array-display {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 18px;
  margin-bottom: 15px;
  border: 2px solid #6366f1;
  color: #34d399;
}

.method-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.method-buttons button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}

.method-buttons button:hover {
  background: #4f46e5;
}

.result-display {
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  min-height: 50px;
  border-left: 4px solid #38bdf8;
}

/* Shopping Cart */
.cart-app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .cart-app {
    grid-template-columns: 1fr;
  }
}

.products, .cart {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #1e293b;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #334155;
}

.product-item button {
  background: #10b981;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #1e293b;
  margin-bottom: 8px;
  border-radius: 6px;
}

.cart-summary {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #334155;
}

.cart-summary div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.final-total {
  font-size: 18px;
  font-weight: bold;
  color: #34d399;
  border-top: 1px solid #334155;
  padding-top: 10px;
  margin-top: 10px;
}

/* Pipeline */
.pipeline-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.pipeline-controls button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.data-display {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
  max-height: 400px;
  overflow-y: auto;
  white-space: pre-wrap;
}

/* Challenge */
.challenge-box {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  border: 2px dashed #6366f1;
}

.challenge-box code {
  background: #334155;
  padding: 2px 6px;
  border-radius: 4px;
  color: #f472b6;
}

#chainSolution {
  margin-top: 15px;
  background: #1e293b;
  padding: 15px;
  border-radius: 8px;
  color: #34d399;
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

button:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}`,
    js: `// Global array state
let currentArray = [];
let cart = [];
let users = [];

// Array Explorer Functions
function createArray() {
  const input = document.getElementById('arrayInput').value;
  if (!input.trim()) {
    currentArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else {
    currentArray = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
  }
  updateArrayDisplay();
}

function clearArray() {
  currentArray = [];
  updateArrayDisplay();
  document.getElementById('methodResult').textContent = 'Nəticə burada görünəcək...';
}

function updateArrayDisplay() {
  document.getElementById('arrayDisplay').textContent = JSON.stringify(currentArray);
}

function runMethod(method) {
  if (currentArray.length === 0) {
    alert('Əvvəlcə array yaradın!');
    return;
  }

  let result;
  let explanation;

  switch(method) {
    case 'map':
      result = currentArray.map(n => n * 2);
      explanation = 'map(n => n * 2): Hər elementi 2-yə vurduq';
      break;
    case 'filter':
      result = currentArray.filter(n => n > 5);
      explanation = 'filter(n => n > 5): 5-dən böyük olanlar';
      break;
    case 'reduce':
      result = currentArray.reduce((acc, n) => acc + n, 0);
      explanation = 'reduce((acc, n) => acc + n, 0): Cəmi hesabladıq';
      break;
    case 'sort':
      result = [...currentArray].sort((a, b) => b - a);
      explanation = 'sort((a, b) => b - a): Azalan sıralama';
      break;
    case 'slice':
      result = currentArray.slice(1, 4);
      explanation = 'slice(1, 4): Index 1-dən 3-ə qədər';
      break;
    case 'find':
      result = currentArray.find(n => n > 7);
      explanation = 'find(n => n > 7): 7-dən böyük ilk element';
      break;
  }

  document.getElementById('methodResult').innerHTML = 
    '<strong>' + explanation + '</strong>\\nNəticə: ' + JSON.stringify(result);
}

// Shopping Cart
const products = [
  { id: 1, name: 'Laptop', price: 1500 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Monitor', price: 300 },
  { id: 5, name: 'Headphones', price: 150 }
];

function renderProducts() {
  const container = document.getElementById('productList');
  container.innerHTML = products.map(p => '
    <div class="product-item">
      <span>' + p.name + ' - ' + p.price + ' AZN</span>
      <button onclick="addToCart(' + p.id + ')">Səbətə Əlavə Et</button>
    </div>
  ').join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  // Update count
  document.getElementById('cartCount').textContent = cart.length;
  
  // Update items display
  const itemsContainer = document.getElementById('cartItems');
  if (cart.length === 0) {
    itemsContainer.innerHTML = 'Səbət boşdur';
  } else {
    itemsContainer.innerHTML = cart.map((item, index) => '
      <div class="cart-item">
        <span>' + item.name + '</span>
        <span>' + item.price + ' AZN</span>
      </div>
    ').join('');
  }
  
  // Calculate totals using reduce
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = total * 0.1;
  const final = total - discount;
  
  document.getElementById('cartTotal').textContent = total;
  document.getElementById('cartDiscount').textContent = discount.toFixed(2);
  document.getElementById('cartFinal').textContent = final.toFixed(2);
}

// Data Pipeline
function generateUsers() {
  const names = ['Ali', 'Veli', 'Hasan', 'Huseyn', 'Murad', 'Kamil', 'Samir', 'Nurlan', 'Orxan', 'Emin'];
  users = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: names[i],
    age: Math.floor(Math.random() * 40) + 15,
    city: ['Baku', 'Ganja', 'Sumqayit'][Math.floor(Math.random() * 3)]
  }));
  displayUsers(users);
}

function displayUsers(data) {
  document.getElementById('userData').textContent = JSON.stringify(data, null, 2);
}

function pipeline(type) {
  if (users.length === 0) {
    alert('Əvvəlcə istifadəçi yaradın!');
    return;
  }

  let result;
  switch(type) {
    case 'adults':
      result = users.filter(u => u.age >= 18);
      break;
    case 'names':
      result = users.map(u => u.name);
      break;
    case 'sort':
      result = [...users].sort((a, b) => a.age - b.age);
      break;
    case 'group':
      result = users.reduce((acc, u) => {
        acc[u.city] = acc[u.city] || [];
        acc[u.city].push(u);
        return acc;
      }, {});
      break;
  }
  displayUsers(result);
}

// Challenge
function showChainSolution() {
  document.getElementById('chainSolution').style.display = 'block';
}

// Initialize
renderProducts();
createArray(); // Default array

console.log('Arrays module loaded!');
console.log('Try: map, filter, reduce, find, some, every, flat, includes');`,
  },

  exercise: {
    title: "Todo List with Array Methods",
    description: "Array methods istifadə edərək tam funksional Todo List yaradın. Filter, map, reduce ilə statistika göstərin.",
    requirements: [
      "Todo array-i yaradın (text, completed, id, priority)",
      "map ilə todo siyahısını render edin",
      "filter ilə active/completed filterləmə",
      "reduce ilə statistika (ümumi, tamamlanan, faiz)",
      "find ilə todo axtarışı",
      "some/every ilə 'hamısı tamamlandı' yoxlaması",
      "sort ilə priority görə sıralama",
      "LocalStorage ilə saxlama"
    ],
    starterCode: `const todos = [];

function addTodo(text, priority = 'medium') {
  // Todo əlavə et
}

function toggleTodo(id) {
  // Completed status dəyiş
}

function filterTodos(status) {
  // 'all', 'active', 'completed'
}

function getStats() {
  // reduce ilə statistika
}

// UI render funksiyaları`,
  },

  quiz: [
    {
      question: "map() və forEach() fərqi nədir?",
      options: ["Yoxdur", "map yeni array qaytarır, forEach yox", "forEach daha sürətlidir", "map yalnız rəqəmlər üçün"],
      correctAnswer: 1
    },
    {
      question: "reduce() metodu nə edir?",
      options: ["Array-i azaldır", "Array-i tək dəyərə çevirir", "Element silir", "Array-i kopyalayır"],
      correctAnswer: 1
    },
    {
      question: "[1,2,3].filter(n => n > 5) nə qaytarır?",
      options: ["[1,2,3]", "[]", "undefined", "Error"],
      correctAnswer: 1
    },
    {
      question: "sort() metodu orijinal array-i dəyişir mi?",
      options: ["Yox", "Bəli (mutates)", "Yalnız rəqəmlərdə", "Kopya yaradır"],
      correctAnswer: 1
    },
    {
      question: "find() və filter() fərqi?",
      options: ["Yoxdur", "find ilk uyğunu, filter hamısını", "filter daha sürətlidir", "find yalnız string"],
      correctAnswer: 1
    },
    {
      question: "const arr = [1, [2, 3]]; arr.flat() nəticə?",
      options: ["[1, 2, 3]", "[[1], [2,3]]", "[1, [2,3]]", "Error"],
      correctAnswer: 0
    },
    {
      question: "some() və every() fərqi?",
      options: ["Eyni şey", "some=ən azı biri, every=hamısı", "every daha sürətlidir", "some yalnız array"],
      correctAnswer: 1
    },
    {
      question: "slice(1, 4) hansı index-ləri alır?",
      options: ["1,2,3,4", "1,2,3", "2,3,4", "1-dən 4-ə qədər"],
      correctAnswer: 1
    },
    {
      question: "includes() nə edir?",
      options: ["Index qaytarır", "Var/yox yoxlayır", "Element əlavə edir", "Array birləşdirir"],
      correctAnswer: 1
    },
    {
      question: "const [a, ...rest] = [1,2,3,4]; rest nədir?",
      options: ["[1]", "[2,3,4]", "[1,2,3,4]", "undefined"],
      correctAnswer: 1
    }
  ]
};

export default topic17;