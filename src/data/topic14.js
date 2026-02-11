export const topic14 = {
  id: 14,
  title: "Functions və Scope",
  duration: "75 dəq",
  isFree: false,
  
  content: `
    <h4>Function Declaration vs Expression</h4>
    <pre><code>// Function Declaration - Hoisted
function greet(name) {
  return 'Hello, ' + name;
}

// Function Expression
const sayHi = function(name) {
  return 'Hi, ' + name;
};

// Arrow Function (ES6)
const add = (a, b) => a + b;
const square = x => x * x;</code></pre>

    <h4>Parameters və Arguments</h4>
    <pre><code>// Default parameters
function greet(name = 'Guest') {
  return 'Hello, ' + name;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Destructuring parameters
function printUser({ name, age }) {
  console.log(name, age);
}</code></pre>

    <h4>Scope Növləri</h4>
    <ul>
      <li><strong>Global Scope:</strong> Hər yerdən əlçatan</li>
      <li><strong>Function Scope:</strong> Function daxilində</li>
      <li><strong>Block Scope:</strong> {} daxilində (let, const)</li>
      <li><strong>Lexical Scope:</strong> Yazıldığı yerdən asılı</li>
    </ul>

    <h4>Closure</h4>
    <pre><code>function outer() {
  let count = 0;
  
  function inner() {
    count++;
    return count;
  }
  
  return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2</code></pre>

    <h4>Callback Functions</h4>
    <pre><code>function fetchData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}

fetchData((message) => {
  console.log(message);
});</code></pre>

    <h4>IIFE (Immediately Invoked Function Expression)</h4>
    <pre><code>(function() {
  const private = 'secret';
  console.log('IIFE executed');
})();

// Modern alternative
{
  const private = 'secret';
}</code></pre>
  `,

  starterCode: {
    html: `<div class="functions-lab">
  <h2>⚡ Functions & Scope Lab</h2>
  
  <section class="demo-section">
    <h3>Function Types Comparison</h3>
    <div class="function-types">
      <div class="func-box" onclick="runDeclaration()">
        <h4>Declaration</h4>
        <pre>function add(a, b) {
  return a + b;
}</pre>
        <div class="result" id="declResult"></div>
      </div>
      
      <div class="func-box" onclick="runExpression()">
        <h4>Expression</h4>
        <pre>const multiply = function(a, b) {
  return a * b;
};</pre>
        <div class="result" id="exprResult"></div>
      </div>
      
      <div class="func-box" onclick="runArrow()">
        <h4>Arrow</h4>
        <pre>const power = (base, exp) => 
  base ** exp;</pre>
        <div class="result" id="arrowResult"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>Closure Counter</h3>
    <div class="counter-demo">
      <button onclick="createCounter()">Create New Counter</button>
      <div id="counters"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>Scope Chain Visualization</h3>
    <button onclick="demonstrateScope()">Run Scope Chain</button>
    <div class="scope-output" id="scopeOutput"></div>
  </section>

  <section class="demo-section">
    <h3>Callback & Higher-Order Functions</h3>
    <button onclick="runCallbacks()">Run Callbacks</button>
    <button onclick="runMapFilter()">Map & Filter</button>
    <div class="output" id="callbackOutput"></div>
  </section>

  <section class="demo-section">
    <h3>Advanced: Memoization</h3>
    <button onclick="testMemoization()">Test Memoization</button>
    <div class="output" id="memoOutput"></div>
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
  color: #eaeaea;
  padding: 40px;
}

.functions-lab {
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  color: #00d9ff;
  margin-bottom: 30px;
  font-size: 32px;
}

h3 {
  color: #ff6b6b;
  margin-bottom: 20px;
}

h4 {
  color: #ffd93d;
  margin-bottom: 10px;
}

.demo-section {
  background: #16213e;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #0f3460;
}

.function-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.func-box {
  background: #1a1a2e;
  border: 2px solid #533483;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.func-box:hover {
  border-color: #00d9ff;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
}

.func-box pre {
  background: #0f0f23;
  padding: 15px;
  border-radius: 8px;
  font-size: 13px;
  overflow-x: auto;
  margin-bottom: 15px;
}

.result {
  min-height: 30px;
  padding: 10px;
  background: #0f3460;
  border-radius: 6px;
  font-family: monospace;
  color: #00d9ff;
}

.counter-demo {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.counter-instance {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e94560;
  display: flex;
  align-items: center;
  gap: 15px;
}

.counter-value {
  font-size: 32px;
  font-weight: bold;
  color: #e94560;
  min-width: 60px;
  text-align: center;
}

button {
  background: #e94560;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

button:hover {
  background: #ff6b6b;
  transform: scale(1.05);
}

.scope-output {
  background: #0f0f23;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  margin-top: 15px;
  white-space: pre-wrap;
  line-height: 1.8;
}

.scope-level-0 { color: #ff6b6b; }
.scope-level-1 { color: #ffd93d; margin-left: 20px; }
.scope-level-2 { color: #6bcb77; margin-left: 40px; }
.scope-level-3 { color: #4d96ff; margin-left: 60px; }

.output {
  background: #0f0f23;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
  font-family: monospace;
  white-space: pre-wrap;
  min-height: 100px;
}

.memo-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 15px;
}

.stat-box {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.stat-value {
  font-size: 36px;
  font-weight: bold;
  color: #00d9ff;
}

.stat-label {
  color: #888;
  margin-top: 5px;
}`,

    js: `// Function Types
function runDeclaration() {
  // Hoisted - can be called before declaration
  function add(a, b) {
    return a + b;
  }
  
  const result = add(5, 3);
  document.getElementById('declResult').textContent = 'add(5, 3) = ' + result;
  console.log('Function Declaration:', result);
}

function runExpression() {
  // Not hoisted
  const multiply = function(a, b) {
    return a * b;
  };
  
  const result = multiply(4, 7);
  document.getElementById('exprResult').textContent = 'multiply(4, 7) = ' + result;
  console.log('Function Expression:', result);
}

function runArrow() {
  // Arrow function
  const power = (base, exp) => base ** exp;
  
  // With block
  const divide = (a, b) => {
    if (b === 0) return 'Cannot divide by zero';
    return a / b;
  };
  
  const result1 = power(2, 8);
  const result2 = divide(10, 2);
  
  document.getElementById('arrowResult').textContent = 
    'power(2, 8) = ' + result1 + ', divide(10, 2) = ' + result2;
  console.log('Arrow Functions:', result1, result2);
}

// Closure Counter
let counterCount = 0;

function createCounter() {
  counterCount++;
  let count = 0;
  
  const counterDiv = document.createElement('div');
  counterDiv.className = 'counter-instance';
  counterDiv.innerHTML = 
    '<span>Counter #' + counterCount + '</span>' +
    '<span class="counter-value" id="counter' + counterCount + '">0</span>' +
    '<button onclick="increment' + counterCount + '()">+</button>' +
    '<button onclick="decrement' + counterCount + '()">-</button>';
  
  document.getElementById('counters').appendChild(counterDiv);
  
  // Create closure functions dynamically
  window['increment' + counterCount] = function() {
    count++;
    document.getElementById('counter' + counterCount).textContent = count;
    console.log('Counter #' + counterCount + ':', count);
  };
  
  window['decrement' + counterCount] = function() {
    count--;
    document.getElementById('counter' + counterCount).textContent = count;
    console.log('Counter #' + counterCount + ':', count);
  };
  
  console.log('Created counter #' + counterCount + ' with closure');
}

// Scope Chain Demonstration
function demonstrateScope() {
  let output = '';
  
  // Global scope
  const globalVar = 'Global';
  output += '<span class="scope-level-0">Global Scope: ' + globalVar + '</span>\\n';
  
  function outer() {
    const outerVar = 'Outer';
    output += '<span class="scope-level-1">Outer Function: ' + outerVar + ' (accesses ' + globalVar + ')</span>\\n';
    
    function middle() {
      const middleVar = 'Middle';
      output += '<span class="scope-level-2">Middle Function: ' + middleVar + ' (accesses ' + outerVar + ', ' + globalVar + ')</span>\\n';
      
      function inner() {
        const innerVar = 'Inner';
        output += '<span class="scope-level-3">Inner Function: ' + innerVar + ' (accesses all parent scopes)</span>\\n';
        
        // Access all scopes
        return {
          global: globalVar,
          outer: outerVar,
          middle: middleVar,
          inner: innerVar
        };
      }
      
      return inner();
    }
    
    return middle();
  }
  
  const result = outer();
  output += '\\n<span class="scope-level-0">Result: ' + JSON.stringify(result) + '</span>';
  
  document.getElementById('scopeOutput').innerHTML = output;
  console.log('Scope chain result:', result);
}

// Callbacks and Higher-Order Functions
function runCallbacks() {
  let output = '';
  
  // Higher-order function
  function createMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  output += 'Higher-Order Functions:\\n';
  output += 'double(5) = ' + double(5) + '\\n';
  output += 'triple(5) = ' + triple(5) + '\\n\\n';
  
  // Callback with setTimeout simulation
  function fetchData(callback) {
    output += 'Fetching data...\\n';
    setTimeout(() => {
      const data = { id: 1, name: 'User' };
      callback(data);
    }, 500);
  }
  
  fetchData((data) => {
    output += 'Received: ' + JSON.stringify(data) + '\\n';
    document.getElementById('callbackOutput').textContent = output;
  });
  
  document.getElementById('callbackOutput').textContent = output;
}

function runMapFilter() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Map
  const squared = numbers.map(n => n * n);
  
  // Filter
  const evens = numbers.filter(n => n % 2 === 0);
  
  // Reduce
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  
  // Chaining
  const result = numbers
    .filter(n => n > 5)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
  
  let output = 'Original: [' + numbers.join(', ') + ']\\n\\n';
  output += 'map(x²): [' + squared.join(', ') + ']\\n';
  output += 'filter(even): [' + evens.join(', ') + ']\\n';
  output += 'reduce(sum): ' + sum + '\\n\\n';
  output += 'Chain (n>5, x2, sum): ' + result;
  
  document.getElementById('callbackOutput').textContent = output;
  console.log('Map/Filter/Reduce results:', { squared, evens, sum, result });
}

// Memoization
function testMemoization() {
  // Simple memoization
  function memoize(fn) {
    const cache = {};
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (key in cache) {
        console.log('Cache hit for:', args);
        return { result: cache[key], fromCache: true };
      }
      
      console.log('Computing for:', args);
      const result = fn(...args);
      cache[key] = result;
      return { result, fromCache: false };
    };
  }
  
  // Expensive function
  function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const memoizedFib = memoize(fibonacci);
  
  let output = 'Fibonacci Memoization Test:\\n\\n';
  
  // First call
  console.time('First');
  const r1 = memoizedFib(35);
  console.timeEnd('First');
  output += 'fib(35) first call: ' + r1.result + ' (cached: ' + r1.fromCache + ')\\n';
  
  // Second call (should be instant)
  console.time('Second');
  const r2 = memoizedFib(35);
  console.timeEnd('Second');
  output += 'fib(35) second call: ' + r2.result + ' (cached: ' + r2.fromCache + ')\\n';
  
  document.getElementById('memoOutput').innerHTML = 
    '<div class="memo-stats">' +
      '<div class="stat-box">' +
        '<div class="stat-value">' + r1.result + '</div>' +
        '<div class="stat-label">Result</div>' +
      '</div>' +
      '<div class="stat-box">' +
        '<div class="stat-value">' + (r2.fromCache ? '⚡' : '✓') + '</div>' +
        '<div class="stat-label">' + (r2.fromCache ? 'From Cache' : 'Computed') + '</div>' +
      '</div>' +
    '</div>' +
    '<pre style="margin-top:20px;">' + output + '</pre>';
}

// IIFE Example
(function() {
  console.log('IIFE executed on load!');
})();

// Modern block scope alternative
{
  const private = 'This is block scoped';
  console.log(private);
}

console.log('Functions & Scope module loaded!');`,
  },

  exercise: {
    title: "Calculator Module",
    description: "IIFE istifadə edərək calculator modulu yaradın. Public API: add, subtract, multiply, divide, history (son əməliyyatlar). Private variable-lər ilə tarixçə saxlayın.",
    requirements: [
      "IIFE və ya Module pattern istifadə edin",
      "Private history array-i saxlayın",
      "Hər əməliyyat tarixçəyə əlavə olunsun",
      "getHistory() public metodu olsun",
      "clearHistory() metodu olsun",
      "Chain etmək mümkün olsun (calc.add(5).multiply(2))",
      "Error handling (divide by zero)"
    ],
    starterCode: `const calculator = (function() {
  // Private variables
  
  return {
    // Public API
    add(n) {
      // implementation
    },
    // digər metodlar...
  };
})();

// İstifadə:
console.log(calculator.add(5).multiply(2).getHistory());`,
  },

  quiz: [
    {
      question: "Function declaration və expression arasındakı əsas fərq?",
      options: ["Sintaksis", "Hoisting", "Performance", "Scope"],
      correctAnswer: 1
    },
    {
      question: "Arrow function-da this necə davranır?",
      options: ["Öz this-i var", "Lexical this (parent scope)", "Global this", "Undefined"],
      correctAnswer: 1
    },
    {
      question: "Closure nədir?",
      options: ["Function syntax", "Function + lexical environment", "Global variable", "Callback"],
      correctAnswer: 1
    },
    {
      question: "IIFE nə üçün istifadə olunur?",
      options: ["Loop yaratmaq", "Private scope yaratmaq", "Async əməliyyat", "Event handling"],
      correctAnswer: 1
    },
    {
      question: "Higher-order function nədir?",
      options: ["Yüksək performanslı", "Function qəbul edən/qaytaran", "Recursive", "Arrow function"],
      correctAnswer: 1
    },
    {
      question: "Rest parameter necə yazılır?",
      options: ["...args", "args...", "*args", "&args"],
      correctAnswer: 0
    },
    {
      question: "Callback function nədir?",
      options: ["Sinxron funksiya", "Başqa funksiyaya arqument kimi ötürülən", "Anonymous funksiya", "Named funksiya"],
      correctAnswer: 1
    },
    {
      question: "Function scope-dan kənarda elan olunan variable harada olur?",
      options: ["Local", "Block", "Global", "Closure"],
      correctAnswer: 2
    },
    {
      question: "Currying nədir?",
      options: ["Function-i çağırmaq", "Multi-argument funksiyanı chain-ə çevirmək", "Error handling", "Loop yaratmaq"],
      correctAnswer: 1
    },
    {
      question: "typeof function(){} nə qaytarır?",
      options: ["'object'", "'function'", "'undefined'", "'callable'"],
      correctAnswer: 1
    }
  ]
};

export default topic14;