export const topic13 = {
  id: 13,
  title: "JavaScript Giriş və Variables",
  duration: "70 dəq",
  isFree: false,
  
  content: `
    <h4>JavaScript Nədir?</h4>
    <p>JavaScript veb səhifələrə interaktivlik qatan proqramlaşdırma dilidir. Client-side (browser) və server-side (Node.js) işləyə bilər.</p>
    
    <h4>JS Əlavə Etmə Yolları</h4>
    <pre><code>&lt;!-- Inline --&gt;
&lt;button onclick="alert('Hello')"&gt;Click&lt;/button&gt;

&lt;!-- Internal --&gt;
&lt;script&gt;
  console.log('Hello');
&lt;/script&gt;

&lt;!-- External (tövsiyə olunur) --&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;</code></pre>

    <h4>Variables (var, let, const)</h4>
    <pre><code>var name = 'John';      // Function scope, hoisting
let age = 30;           // Block scope, dəyişə bilər
const PI = 3.14;        // Block scope, dəyişməz

// Naming conventions
let firstName;          // camelCase
let last_name;          // snake_case
const MAX_SIZE = 100;   // SCREAMING_SNAKE_CASE</code></pre>

    <h4>Data Types</h4>
    <pre><code>// Primitive types
let str = 'Hello';      // String
let num = 42;           // Number (integer və float)
let bool = true;        // Boolean
let empty = null;       // Null
let notDefined;         // Undefined
let sym = Symbol();     // Symbol (ES6)
let big = 9007199254740991n; // BigInt

// Reference types
let arr = [1, 2, 3];    // Array
let obj = {name: 'John'}; // Object
let fn = function(){};  // Function</code></pre>

    <h4>Operators</h4>
    <pre><code>// Arithmetic: +, -, *, /, %, **
let sum = 10 + 5;       // 15
let mod = 10 % 3;       // 1

// Comparison: ==, ===, !=, !==, >, <, >=, <=
5 == '5'    // true (loose equality)
5 === '5'   // false (strict equality)

// Logical: &&, ||, !
true && false   // false
true || false   // true
!true           // false

// Assignment: =, +=, -=, *=, /=
let x = 10;
x += 5;         // x = 15</code></pre>

    <h4>Type Conversion</h4>
    <pre><code>// Explicit
Number('42');       // 42
String(42);         // '42'
Boolean(1);         // true

// Implicit
'42' + 2;           // '422' (string concatenation)
'42' - 2;           // 40 (number subtraction)
!!'hello';          // true</code></pre>
  `,

  starterCode: {
    html: `<div class="js-basics">
  <h2>🔮 JavaScript Variables Lab</h2>
  
  <section class="demo-section">
    <h3>Variable Declaration</h3>
    <div class="code-playground">
      <pre id="varDemo">let name = 'Alice';
const age = 25;
var isStudent = true;</pre>
      <button onclick="runVarDemo()">Run</button>
    </div>
    <div class="output" id="varOutput"></div>
  </section>

  <section class="demo-section">
    <h3>Type Checker</h3>
    <input type="text" id="typeInput" placeholder="Enter value (e.g., 42, 'hello', true)">
    <button onclick="checkType()">Check Type</button>
    <div class="output" id="typeOutput"></div>
  </section>

  <section class="demo-section">
    <h3>Type Conversion</h3>
    <div class="conversion-grid">
      <div>
        <input type="text" id="convInput" value="42">
        <button onclick="convertTypes()">Convert</button>
      </div>
      <div id="convResults"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>Operators Playground</h3>
    <div class="operator-demo">
      <input type="number" id="op1" value="10">
      <select id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
        <option value="**">**</option>
      </select>
      <input type="number" id="op2" value="5">
      <button onclick="calculate()">=</button>
      <span id="calcResult"></span>
    </div>
  </section>

  <section class="demo-section">
    <h3>Comparison Table</h3>
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Expression</th>
          <th>== (Loose)</th>
          <th>=== (Strict)</th>
        </tr>
      </thead>
      <tbody id="compTable"></tbody>
    </table>
    <button onclick="fillComparisonTable()">Fill Table</button>
  </section>

  <section class="demo-section">
    <h3>Variable Scope Demo</h3>
    <button onclick="scopeDemo()">Run Scope Test</button>
    <div class="output" id="scopeOutput"></div>
  </section>
</div>`,
    
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #0f0f23;
  color: #fff;
  padding: 40px;
  line-height: 1.6;
}

.js-basics {
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  color: #ff79c6;
  margin-bottom: 30px;
  font-size: 32px;
}

h3 {
  color: #8be9fd;
  margin-bottom: 15px;
  font-size: 20px;
}

.demo-section {
  background: #282a36;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid #44475a;
}

.code-playground {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

pre {
  background: #44475a;
  padding: 15px;
  border-radius: 8px;
  flex: 1;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  overflow-x: auto;
}

button {
  background: #50fa7b;
  color: #282a36;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

button:hover {
  background: #40c462;
  transform: translateY(-2px);
}

.output {
  background: #1e1f29;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  font-family: monospace;
  min-height: 50px;
  white-space: pre-wrap;
}

input, select {
  background: #44475a;
  border: 1px solid #6272a4;
  color: #f8f8f2;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 16px;
  margin-right: 10px;
}

.conversion-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

#convResults {
  background: #1e1f29;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
}

.operator-demo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.operator-demo input {
  width: 100px;
}

#calcResult {
  font-size: 24px;
  color: #50fa7b;
  font-weight: bold;
  min-width: 50px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.comparison-table th,
.comparison-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #44475a;
}

.comparison-table th {
  color: #bd93f9;
  font-weight: bold;
}

.comparison-table tr:hover {
  background: #44475a;
}

.true {
  color: #50fa7b;
}

.false {
  color: #ff5555;
}

.type-tag {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
}

.type-string { background: #f1fa8c; color: #282a36; }
.type-number { background: #bd93f9; color: #282a36; }
.type-boolean { background: #ff79c6; color: #282a36; }
.type-object { background: #8be9fd; color: #282a36; }
.type-undefined { background: #6272a4; color: #fff; }`,

    js: `// Variable Declaration Demo
function runVarDemo() {
  let name = 'Alice';
  const age = 25;
  var isStudent = true;
  
  let output = 'Variables declared:\\n';
  output += 'let name = ' + JSON.stringify(name) + ' (typeof: ' + typeof name + ')\\n';
  output += 'const age = ' + age + ' (typeof: ' + typeof age + ')\\n';
  output += 'var isStudent = ' + isStudent + ' (typeof: ' + typeof isStudent + ')\\n\\n';
  
  // Try to reassign const
  try {
    age = 30;
  } catch (e) {
    output += 'Error: Cannot reassign const variable\\n';
  }
  
  // Hoisting demo
  output += '\\nHoisting demo:\\n';
  output += 'var hoistedVar before declaration: ' + typeof hoistedVar + '\\n';
  var hoistedVar = 'I am hoisted';
  
  document.getElementById('varOutput').textContent = output;
  console.log(output);
}

// Type Checker
function checkType() {
  const input = document.getElementById('typeInput').value;
  const output = document.getElementById('typeOutput');
  
  // Try to evaluate as different types
  let value = input;
  let detectedType = typeof value;
  
  // Try number conversion
  if (!isNaN(input) && input !== '') {
    if (input.includes('.')) {
      value = parseFloat(input);
    } else {
      value = parseInt(input);
    }
    detectedType = typeof value;
  } else if (input === 'true' || input === 'false') {
    value = input === 'true';
    detectedType = typeof value;
  } else if (input === 'null') {
    value = null;
    detectedType = 'null (special primitive)';
  } else if (input === 'undefined') {
    value = undefined;
    detectedType = typeof value;
  }
  
  let html = 'Input: ' + JSON.stringify(input) + '\\n';
  html += 'Detected Value: ' + JSON.stringify(value) + '\\n';
  html += 'Type: ' + detectedType + '\\n';
  html += 'Constructor: ' + (value !== null && value !== undefined ? value.constructor.name : 'N/A');
  
  output.textContent = html;
  console.log('Type check:', value, typeof value);
}

// Type Conversion
function convertTypes() {
  const input = document.getElementById('convInput').value;
  const results = document.getElementById('convResults');
  
  const conversions = {
    'Original': input,
    'Number()': Number(input),
    'parseInt()': parseInt(input),
    'parseFloat()': parseFloat(input),
    'String()': String(input),
    'Boolean()': Boolean(input),
    '!! (Double NOT)': !!input,
    '+" (Unary plus)': +input
  };
  
  let html = '';
  for (let [method, result] of Object.entries(conversions)) {
    const type = typeof result;
    html += '<div style="margin-bottom:8px;">';
    html += '<strong>' + method + '</strong>: ';
    html += JSON.stringify(result);
    html += '<span class="type-tag type-' + type + '">' + type + '</span>';
    html += '</div>';
  }
  
  results.innerHTML = html;
}

// Calculator
function calculate() {
  const op1 = parseFloat(document.getElementById('op1').value);
  const op2 = parseFloat(document.getElementById('op2').value);
  const operator = document.getElementById('operator').value;
  
  let result;
  switch(operator) {
    case '+': result = op1 + op2; break;
    case '-': result = op1 - op2; break;
    case '*': result = op1 * op2; break;
    case '/': result = op2 !== 0 ? op1 / op2 : 'Error: Division by zero'; break;
    case '%': result = op1 % op2; break;
    case '**': result = op1 ** op2; break;
    default: result = 'Unknown operator';
  }
  
  document.getElementById('calcResult').textContent = result;
  console.log(op1, operator, op2, '=', result);
}

// Comparison Table
function fillComparisonTable() {
  const tbody = document.getElementById('compTable');
  const comparisons = [
    ["5 == '5'", 5 == '5', 5 === '5'],
    ["0 == false", 0 == false, 0 === false],
    ["null == undefined", null == undefined, null === undefined],
    ["'' == false", '' == false, '' === false],
    ["[] == false", [] == false, [] === false],
    ["NaN == NaN", NaN == NaN, NaN === NaN]
  ];
  
  tbody.innerHTML = comparisons.map(([expr, loose, strict]) => 
    '<tr>' +
      '<td>' + expr + '</td>' +
      '<td class="' + (loose ? 'true' : 'false') + '">' + loose + '</td>' +
      '<td class="' + (strict ? 'true' : 'false') + '">' + strict + '</td>' +
    '</tr>'
  ).join('');
}

// Scope Demo
function scopeDemo() {
  let output = '';
  
  // Global scope
  const globalVar = 'I am global';
  
  function outerFunction() {
    const outerVar = 'I am outer';
    
    if (true) {
      const blockVar = 'I am block-scoped';
      let alsoBlock = 'Me too';
      var functionScoped = 'I am function-scoped';
      
      output += 'Inside block:\\n';
      output += '  globalVar: ' + globalVar + '\\n';
      output += '  outerVar: ' + outerVar + '\\n';
      output += '  blockVar: ' + blockVar + '\\n';
      output += '  functionScoped: ' + functionScoped + '\\n';
    }
    
    output += '\\nOutside block:\\n';
    output += '  functionScoped: ' + functionScoped + '\\n';
    output += '  blockVar: ' + (typeof blockVar) + ' (not accessible)\\n';
    
    function innerFunction() {
      const innerVar = 'I am inner';
      output += '\\nInside inner function:\\n';
      output += '  Can access all parent scopes\\n';
    }
    
    innerFunction();
  }
  
  outerFunction();
  
  output += '\\nGlobal scope:\\n';
  output += '  globalVar: ' + globalVar + '\\n';
  output += '  outerVar: ' + (typeof outerVar) + ' (not accessible)';
  
  document.getElementById('scopeOutput').textContent = output;
  console.log(output);
}

// Initialize
console.log('JavaScript Basics loaded!');
console.log('Try: typeof undefined =', typeof undefined);
console.log('Try: typeof null =', typeof null); // Famous JS quirk!`,
  },

  exercise: {
    title: "Currency Converter App",
    description: "JavaScript variables və operators istifadə edərək valyuta konvertoru yaradın. İstifadəçi məbləğ və məzənnə daxil etsin, nəticə hesablansın.",
    requirements: [
      "3 dəyişən təyin edin: amount, rate, result",
      "const ilə sabit məzənnələr obyekti yaradın",
      "Prompt və ya input ilə istifadəçi məlumatı alın",
      "Arithmetic operators ilə hesablama aparın",
      "Template literals ilə formatlı nəticə göstərin",
      "Type checking əlavə edin (isNaN yoxlanışı)",
      "parseFloat istifadə edin dəqiqlik üçün"
    ],
    starterCode: `// Currency Converter
const rates = {
  USD: 1.7,    // 1 USD = 1.7 AZN
  EUR: 1.85,
  TRY: 0.05
};

function convertCurrency() {
  // Kodunuzu bura yazın
  
  let amount = // ...
  let currency = // ...
  
  // Hesablama və nəticə
}

convertCurrency();`,
  },

  quiz: [
    {
      question: "let və const arasındakı fərq nədir?",
      options: ["Scope fərqi", "const dəyişməz, let dəyişə bilər", "Tip fərqi", "Heç biri"],
      correctAnswer: 1
    },
    {
      question: "typeof null nə qaytarır?",
      options: ["'null'", "'undefined'", "'object'", "'number'"],
      correctAnswer: 2
    },
    {
      question: "=== və == arasındakı fərq?",
      options: ["Yoxdur", "=== tip yoxlayır, == yalnız dəyər", "== daha sürətlidir", "=== yalnız string üçün"],
      correctAnswer: 1
    },
    {
      question: "NaN nədir?",
      options: ["Null value", "Not a Number", "New array number", "Negative and null"],
      correctAnswer: 1
    },
    {
      question: "const obj = {}; obj.name = 'John'; - Bu işləyərmi?",
      options: ["Xəta verir", "İşləyir, obyektin property-si dəyişə bilər", "Yalnız browser-də", "Yalnız strict mode-da"],
      correctAnswer: 1
    },
    {
      question: "Template literal necə yazılır?",
      options: ["'Hello ${name}'", "\`Hello \${name}\`", '"Hello ${name}"', "Hello {{name}}"],
      correctAnswer: 1
    },
    {
      question: "parseInt('10px') nə qaytarır?",
      options: ["NaN", "10", "'10px'", "0"],
      correctAnswer: 1
    },
    {
      question: "Boolean('false') nə qaytarır?",
      options: ["false", "true", "undefined", "null"],
      correctAnswer: 1
    },
    {
      question: "var ilə elan edilən variable harada scope olur?",
      options: ["Block", "Function", "Global", "Module"],
      correctAnswer: 1
    },
    {
      question: "1 + '1' nəticəsi nədir?",
      options: ["2", "'11'", "11", "NaN"],
      correctAnswer: 1
    }
  ]
};

export default topic13;