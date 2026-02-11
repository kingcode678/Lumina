export const topic15 = {
  id: 15,
  title: "DOM Manipulation",
  duration: "80 dəq",
  isFree: false,
  
  content: `
    <h4>DOM Nədir?</h4>
    <p>Document Object Model - HTML sənədinin ağac strukturunda təsviri. JavaScript ilə elementləri seçməyə, dəyişdirməyə və əlavə etməyə imkan verir.</p>
    
    <h4>Element Seçmə</h4>
    <pre><code>// Single element
document.getElementById('id');
document.querySelector('.class');
document.querySelector('#id div');

// Multiple elements
document.getElementsByClassName('class');
document.getElementsByTagName('div');
document.querySelectorAll('.item');
document.querySelectorAll('div[data-active]');</code></pre>

    <h4>Element Məlumatları</h4>
    <pre><code>const el = document.querySelector('.box');

// Content
el.textContent;           // Mətn (HTML tagsiz)
el.innerHTML;             // HTML ilə
el.innerText;             // Görünən mətn

// Attributes
el.getAttribute('data-id');
el.setAttribute('data-id', '123');
el.removeAttribute('class');
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('visible');

// Styles
el.style.backgroundColor = 'red';
el.style.cssText = 'color: blue; font-size: 16px;';
window.getComputedStyle(el);</code></pre>

    <h4>Element Yaratmaq və Silmək</h4>
    <pre><code>// Yaratmaq
const div = document.createElement('div');
div.className = 'new-box';
div.textContent = 'Hello';

// Əlavə etmək
parent.appendChild(div);           // Sonuna
parent.prepend(div);               // Əvvəlinə
parent.insertBefore(div, ref);     // Referansdan əvvəl
ref.insertAdjacentElement('afterend', div);

// Silmək
element.remove();                  // Modern
parent.removeChild(element);       // Legacy

// Clone
const copy = element.cloneNode(true); // deep clone</code></pre>

    <h4>Traversing</h4>
    <pre><code>element.parentElement;
element.children;           // HTMLCollection
element.childNodes;         // NodeList (whitespace də)
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;
element.closest('.parent'); // Ən yaxın parent</code></pre>
  `,

  starterCode: {
    html: `<div class="dom-lab">
  <h2>🌳 DOM Manipulation Lab</h2>
  
  <section class="demo-section">
    <h3>Element Selectors</h3>
    <div class="selector-playground">
      <div id="unique-box" class="box" data-id="123">#unique-box</div>
      <div class="box highlight">.box.highlight</div>
      <div class="box" data-active="true">[data-active]</div>
      <div class="container">
        <span class="child">Child 1</span>
        <span class="child">Child 2</span>
      </div>
    </div>
    <div class="controls">
      <button onclick="demoSelectors()">Run Selectors</button>
      <button onclick="highlightAll()">Highlight All .box</button>
    </div>
    <pre class="output" id="selectorOutput"></pre>
  </section>

  <section class="demo-section">
    <h3>Content & Attributes</h3>
    <div id="content-target" class="content-box">
      <p>Original <strong>HTML</strong> content</p>
    </div>
    <div class="controls">
      <button onclick="changeText()">textContent</button>
      <button onclick="changeHTML()">innerHTML</button>
      <button onclick="toggleClass()">Toggle Class</button>
      <button onclick="changeDataAttr()">data-id: 999</button>
    </div>
  </section>

  <section class="demo-section">
    <h3>Dynamic Element Creation</h3>
    <div id="element-factory" class="factory"></div>
    <div class="controls">
      <button onclick="createCard()">Create Card</button>
      <button onclick="createList()">Create List</button>
      <button onclick="cloneElement()">Clone First</button>
      <button onclick="clearAll()">Clear All</button>
    </div>
  </section>

  <section class="demo-section">
    <h3>DOM Traversing</h3>
    <div class="tree" id="dom-tree">
      <div class="level-1" id="root">
        Root
        <div class="level-2">
          Child A
          <span class="level-3">Grandchild 1</span>
          <span class="level-3">Grandchild 2</span>
        </div>
        <div class="level-2">
          Child B
          <span class="level-3">Grandchild 3</span>
        </div>
      </div>
    </div>
    <button onclick="traverseDOM()">Traverse from Root</button>
    <pre class="output" id="traverseOutput"></pre>
  </section>

  <section class="demo-section">
    <h3>Live NodeList vs Static</h3>
    <div id="live-test">
      <div class="live-item">Item 1</div>
      <div class="live-item">Item 2</div>
    </div>
    <button onclick="demoLiveVsStatic()">Test Live vs Static</button>
    <pre class="output" id="liveOutput"></pre>
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

.dom-lab {
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  color: #38bdf8;
  margin-bottom: 30px;
  font-size: 32px;
}

h3 {
  color: #f472b6;
  margin-bottom: 20px;
  font-size: 20px;
}

.demo-section {
  background: #1e293b;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #334155;
}

.selector-playground {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.box {
  width: 120px;
  height: 80px;
  background: #334155;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-align: center;
  transition: all 0.3s;
}

.box.highlighted {
  background: #38bdf8;
  color: #0f172a;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
}

.container {
  width: 100%;
  padding: 15px;
  background: #0f172a;
  border-radius: 8px;
  margin-top: 10px;
}

.child {
  display: inline-block;
  padding: 8px 16px;
  background: #475569;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 14px;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
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
}

.output {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  white-space: pre-wrap;
  max-height: 200px;
  overflow-y: auto;
}

.content-box {
  background: #334155;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  min-height: 80px;
}

.content-box.modified {
  border: 2px solid #f472b6;
  background: #374151;
}

.factory {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
  min-height: 100px;
}

.card {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  padding: 20px;
  border-radius: 12px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.list {
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
}

.list-item {
  padding: 10px;
  border-bottom: 1px solid #334155;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-item button {
  padding: 4px 12px;
  font-size: 12px;
  background: #ef4444;
}

.tree {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
}

.level-1 { color: #f472b6; font-size: 18px; }
.level-2 { 
  color: #38bdf8; 
  margin-left: 20px; 
  margin-top: 10px;
  font-size: 16px;
}
.level-3 { 
  color: #34d399; 
  margin-left: 40px; 
  display: block;
  margin-top: 5px;
  font-size: 14px;
}

.traversed {
  background: rgba(56, 189, 248, 0.2) !important;
  border-radius: 4px;
}`,
    js: `// DOM Selectors Demo
function demoSelectors() {
  const output = document.getElementById('selectorOutput');
  let html = 'Selector Results:\\n\\n';
  
  // By ID
  const byId = document.getElementById('unique-box');
  html += 'getElementById: ' + (byId ? byId.outerHTML.slice(0, 50) + '...' : 'null') + '\\n\\n';
  
  // QuerySelector
  const firstBox = document.querySelector('.box');
  html += 'querySelector(".box"): ' + firstBox.textContent + '\\n';
  
  // QuerySelectorAll
  const allBoxes = document.querySelectorAll('.box');
  html += 'querySelectorAll(".box"): ' + allBoxes.length + ' elements\\n';
  
  // Attribute selector
  const withData = document.querySelector('[data-active]');
  html += '[data-active]: ' + (withData ? withData.textContent : 'none') + '\\n';
  
  // Parent/Child
  const container = document.querySelector('.container');
  html += '\\nParent/Child:\\n';
  html += 'container.children: ' + container.children.length + ' elements\\n';
  html += 'container.childNodes: ' + container.childNodes.length + ' nodes (inc. whitespace)\\n';
  
  output.textContent = html;
  console.log('Selector results:', { byId, firstBox, allBoxes, withData });
}

function highlightAll() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.toggle('highlighted');
      console.log('Toggled box #' + index);
    }, index * 100);
  });
}

// Content & Attributes
function changeText() {
  const target = document.getElementById('content-target');
  target.textContent = 'This is <b>plain text</b> content. No HTML parsing!';
  console.log('textContent set');
}

function changeHTML() {
  const target = document.getElementById('content-target');
  target.innerHTML = 'This is <b style="color: #f472b6;">HTML</b> content with <em>tags</em>!';
  console.log('innerHTML set');
}

function toggleClass() {
  const target = document.getElementById('content-target');
  target.classList.toggle('modified');
  console.log('Classes:', target.classList.toString());
}

function changeDataAttr() {
  const box = document.querySelector('[data-id]');
  const oldId = box.getAttribute('data-id');
  box.setAttribute('data-id', '999');
  box.textContent = 'data-id: ' + oldId + ' → 999';
  console.log('data-id changed from', oldId, 'to 999');
}

// Element Creation
let cardCount = 0;

function createCard() {
  cardCount++;
  const factory = document.getElementById('element-factory');
  
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = 
    '<h4>Card #' + cardCount + '</h4>' +
    '<p>Created: ' + new Date().toLocaleTimeString() + '</p>' +
    '<button onclick="this.parentElement.remove()">Remove</button>';
  
  // Add with animation
  card.style.opacity = '0';
  factory.appendChild(card);
  
  requestAnimationFrame(() => {
    card.style.transition = 'opacity 0.3s';
    card.style.opacity = '1';
  });
  
  console.log('Card created:', card);
}

function createList() {
  const factory = document.getElementById('element-factory');
  
  const list = document.createElement('ul');
  list.className = 'list';
  
  ['Apple', 'Banana', 'Cherry'].forEach((fruit, index) => {
    const item = document.createElement('li');
    item.className = 'list-item';
    item.innerHTML = 
      '<span>' + fruit + '</span>' +
      '<button onclick="removeItem(this)">Delete</button>';
    list.appendChild(item);
  });
  
  factory.appendChild(list);
  console.log('List created with', list.children.length, 'items');
}

function removeItem(btn) {
  btn.parentElement.remove();
}

function cloneElement() {
  const factory = document.getElementById('element-factory');
  const firstChild = factory.firstElementChild;
  
  if (firstChild) {
    const clone = firstChild.cloneNode(true);
    clone.style.border = '2px solid #f472b6';
    factory.appendChild(clone);
    console.log('Element cloned');
  }
}

function clearAll() {
  const factory = document.getElementById('element-factory');
  factory.innerHTML = '';
  cardCount = 0;
  console.log('All cleared');
}

// DOM Traversing
function traverseDOM() {
  const root = document.getElementById('root');
  const output = document.getElementById('traverseOutput');
  let result = 'Traversing from root:\\n\\n';
  
  function traverse(node, depth = 0) {
    const indent = '  '.repeat(depth);
    
    if (node.nodeType === Node.ELEMENT_NODE) {
      result += indent + node.tagName.toLowerCase();
      if (node.id) result += '#' + node.id;
      if (node.className) result += '.' + node.className.split(' ').join('.');
      result += '\\n';
      
      // Highlight visually
      node.classList.add('traversed');
      setTimeout(() => node.classList.remove('traversed'), 1000);
    }
    
    Array.from(node.children).forEach(child => traverse(child, depth + 1));
  }
  
  traverse(root);
  
  // Additional traversing methods demo
  result += '\\nTraversing Methods:\\n';
  result += 'root.parentElement: ' + (root.parentElement ? root.parentElement.id || 'tree' : 'null') + '\\n';
  result += 'root.firstElementChild: ' + root.firstElementChild.className + '\\n';
  result += 'root.lastElementChild: ' + root.lastElementChild.className + '\\n';
  result += 'root.children[0].nextElementSibling: ' + (root.children[0].nextElementSibling ? 'exists' : 'null') + '\\n';
  
  output.textContent = result;
  console.log('DOM traversed');
}

// Live vs Static NodeList
function demoLiveVsStatic() {
  const container = document.getElementById('live-test');
  const output = document.getElementById('liveOutput');
  
  // Live HTMLCollection
  const liveByClass = document.getElementsByClassName('live-item');
  
  // Static NodeList
  const staticByQuery = document.querySelectorAll('.live-item');
  
  let html = 'Before adding new element:\\n';
  html += 'Live (getElementsByClassName): ' + liveByClass.length + '\\n';
  html += 'Static (querySelectorAll): ' + staticByQuery.length + '\\n\\n';
  
  // Add new element
  const newItem = document.createElement('div');
  newItem.className = 'live-item';
  newItem.textContent = 'Item 3 (dynamic)';
  container.appendChild(newItem);
  
  html += 'After adding new element:\\n';
  html += 'Live (getElementsByClassName): ' + liveByClass.length + ' ← Updated!\\n';
  html += 'Static (querySelectorAll): ' + staticByQuery.length + ' ← Not updated!\\n\\n';
  
  html += 'Conclusion: getElementsBy* returns LIVE collection,\\n';
  html += 'querySelectorAll returns STATIC NodeList';
  
  output.textContent = html;
  console.log('Live vs Static demo complete');
}

// Performance tip
function efficientDOMUpdate() {
  // Bad - causes multiple reflows
  // element.style.width = '100px';
  // element.style.height = '100px';
  // element.style.margin = '10px';
  
  // Good - single reflow
  // element.style.cssText = 'width: 100px; height: 100px; margin: 10px;';
  
  // Better - use class
  // element.className = 'new-styles';
  
  // Best - use DocumentFragment
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);
  }
  document.body.appendChild(fragment);
}

console.log('DOM Manipulation module loaded!');
console.log('Try: document.querySelectorAll(".box")');`,
  },

  exercise: {
    title: "Dynamic Todo List",
    description: "DOM manipulation istifadə edərək Todo List yaradın. Add, toggle complete, delete, filter (all/active/completed) funksionallığı olsun.",
    requirements: [
      "Input və button ilə yeni todo əlavə edin",
      "Her todo-da checkbox (complete) və delete button olsun",
      "LocalStorage-da saxlayın (reload-da qalsın)",
      "Filter buttons: All, Active, Completed",
      "Todo count göstərin (5 items left)",
    "Clear completed button olsun",
      "Empty state göstərin (boş olanda)",
      "CSS transition ilə smooth animations"
    ],
    starterCode: `<div class="todo-app">
  <h1>Todo List</h1>
  
  <div class="input-group">
    <input type="text" id="todoInput" placeholder="What needs to be done?">
    <button onclick="addTodo()">Add</button>
  </div>
  
  <ul id="todoList"></ul>
  
  <div class="filters">
    <button onclick="filterTodos('all')">All</button>
    <button onclick="filterTodos('active')">Active</button>
    <button onclick="filterTodos('completed')">Completed</button>
  </div>
</div>

<script>
  // DOM element-ləri seçin
  // CRUD əməliyyatlarını yazın
  // LocalStorage integration
</script>`,
  },

  quiz: [
    {
      question: "getElementById nə qaytarır?",
      options: ["NodeList", "HTMLCollection", "Tək element və ya null", "Array"],
      correctAnswer: 2
    },
    {
      question: "querySelectorAll nə qaytarır?",
      options: ["Canlı HTMLCollection", "Statik NodeList", "Array", "Object"],
      correctAnswer: 1
    },
    {
      question: "textContent və innerHTML fərqi?",
      options: ["Yoxdur", "textContent HTML parse etmir", "innerHTML daha sürətlidir", "textContent yalnız input üçün"],
      correctAnswer: 1
    },
    {
      question: "element.classList.add('active') nə edir?",
      options: ["Class əvəz edir", "Class əlavə edir", "Class silir", "Class yoxlayır"],
      correctAnswer: 1
    },
    {
      question: "createElement sonra element hara əlavə olunmalıdır?",
      options: ["Avtomatik olur", "appendChild və ya insertBefore ilə", "innerHTML ilə", "setAttribute ilə"],
      correctAnswer: 1
    },
    {
      question: "element.closest('.parent') nə edir?",
      options: ["Child element tapır", "Ən yaxın parent-i tapır", "Sibling tapır", "Document root qaytarır"],
      correctAnswer: 1
    },
    {
      question: "DocumentFragment nə üçündür?",
      options: ["Fragment saxlamaq", "Batch DOM əməliyyatları üçün", "Cookie yaratmaq", "Ajax request"],
      correctAnswer: 1
    },
    {
      question: "getAttribute və setAttribute nə üçündür?",
      options: ["CSS tətbiq etmək", "HTML atributlarını oxumaq/yazmaq", "Event əlavə etmək", "Style dəyişmək"],
      correctAnswer: 1
    },
    {
      question: "element.remove() və parent.removeChild(element) fərqi?",
      options: ["Eyni şey", "remove() modern, removeChild() legacy", "removeChild() daha sürətlidir", "remove() yalnız child üçün"],
      correctAnswer: 1
    },
    {
      question: "children və childNodes fərqi?",
      options: ["Eyni şey", "children yalnız elementlər, childNodes hər şey", "childNodes daha sürətlidir", "children text node-ları da verir"],
      correctAnswer: 1
    }
  ]
};

export default topic15;