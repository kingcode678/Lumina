export const topic18 = {
  id: 18,
  title: "Objects və Destructuring",
  duration: "80 dəq",
  isFree: false,
  
  content: `
    <h4>Object Yaratma</h4>
    <pre><code>// Literal
const user = {
  name: 'Ali',
  age: 25,
  'email-address': 'ali@example.com', // quoted key
  [Symbol('id')]: 123                 // symbol key
};

// Constructor
const obj = new Object();
const user2 = Object.create(user);    // Prototype ilə

// Class (ES6)
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() { return 'Hello ' + this.name; }
}</code></pre>

    <h4>Property Access & Manipulation</h4>
    <pre><code>// Access
user.name;           // Dot notation
user['email-address']; // Bracket (dynamic keys)
const key = 'age'; user[key]; // Variable key

// Modify
user.age = 26;
user.city = 'Baku';  // Yeni property
delete user.city;    // Sil

// Check
'age' in user;       // true (including prototype)
user.hasOwnProperty('age'); // true (own property only)
user.age !== undefined;</code></pre>

    <h4>Destructuring (Çox İmportant!)</h4>
    <pre><code>// Object destructuring
const { name, age } = user;
const { name: firstName, age: userAge } = user; // Rename
const { city = 'Unknown' } = user;              // Default

// Nested
const user = {
  profile: {
    address: { city: 'Baku' }
  }
};
const { profile: { address: { city } } } = user;

// Array destructuring
const [first, second] = [1, 2, 3];
const [a, , c] = [1, 2, 3];        // Skip
const [head, ...tail] = [1, 2, 3]; // Rest

// Function params
function greet({ name, age }) {
  return 'Hello ' + name + ', you are ' + age;
}</code></pre>

    <h4>Spread & Rest Operators</h4>
    <pre><code>// Spread (copy/merge)
const userCopy = { ...user };
const merged = { ...defaults, ...user, role: 'admin' };

// Rest (gather)
const { password, ...safeUser } = user; // password xaric hər şey

// Array spread
const arr = [1, 2, ...[3, 4], 5];

// Object from entries
const entries = Object.entries(user); // [['name','Ali'],...]
const fromEntries = Object.fromEntries(entries); // {name:'Ali',...}</code></pre>

    <h4>Advanced Object Methods</h4>
    <pre><code>// Keys, Values, Entries
Object.keys(user);    // ['name', 'age']
Object.values(user);  // ['Ali', 25]
Object.entries(user); // [['name','Ali'], ['age',25]]

// Assign (shallow merge)
Object.assign(target, source1, source2);

// Freeze & Seal
Object.freeze(user);  // Dəyişdirilə bilməz
Object.seal(user);    // Property əlavə/silmə olmaz, modify olar

// Getters & Setters
const user = {
  firstName: 'Ali',
  lastName: 'Veli',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
};</code></pre>
  `,

  starterCode: {
    html: `<div class="objects-lab">
  <h2>🎯 Objects & Destructuring Lab</h2>
  
  <section class="demo-section">
    <h3>1. Object Explorer</h3>
    <div class="object-builder">
      <div class="input-group">
        <input type="text" id="propKey" placeholder="Property adı (məs: name)">
        <input type="text" id="propValue" placeholder="Dəyər (məs: Ali)">
        <button onclick="addProperty()">Əlavə Et</button>
      </div>
      <div class="object-display" id="objectDisplay">{}</div>
      <div class="object-actions">
        <button onclick="showKeys()">Object.keys()</button>
        <button onclick="showValues()">Object.values()</button>
        <button onclick="showEntries()">Object.entries()</button>
        <button onclick="freezeObject()">Freeze</button>
        <button onclick="cloneObject()">Clone (Spread)</button>
      </div>
      <div class="result-display" id="objectResult"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Destructuring Playground</h3>
    <div class="destructure-demo">
      <pre class="code-example">const user = {
  name: "Kamil",
  age: 28,
  email: "kamil@example.com",
  address: {
    city: "Baku",
    zip: "1000"
  },
  hobbies: ["coding", "gaming", "reading"]
};</pre>
      <div class="destructure-tests">
        <button onclick="testBasicDestructure()">Basic {name, age}</button>
        <button onclick="testNestedDestructure()">Nested {address{city}}</button>
        <button onclick="testArrayDestructure()">Array [hobbies]</button>
        <button onclick="testRenameDestructure()">Rename {name: firstName}</button>
        <button onclick="testDefaultDestructure()">Default {role = 'user'}</button>
        <button onclick="testRestDestructure()">Rest {...rest}</button>
      </div>
      <div class="destructure-result" id="destructureResult">Nəticə burada...</div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Real-world: User Profile Manager</h3>
    <div class="profile-manager">
      <div class="profile-form">
        <h4>Yeni Profil</h4>
        <input type="text" id="profileName" placeholder="Ad">
        <input type="email" id="profileEmail" placeholder="Email">
        <input type="number" id="profileAge" placeholder="Yaş">
        <select id="profileRole">
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
        <button onclick="createProfile()">Yarat</button>
      </div>
      <div class="profiles-list" id="profilesList"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Spread/Rest Operations</h3>
    <div class="spread-demo">
      <div class="box">
        <h4>Merge Objects</h4>
        <pre id="obj1Display">{ a: 1, b: 2 }</pre>
        <pre id="obj2Display">{ b: 3, c: 4 }</pre>
        <button onclick="mergeObjects()">Merge with Spread</button>
        <pre id="mergeResult"></pre>
      </div>
      <div class="box">
        <h4>Remove Property</h4>
        <button onclick="removePassword()">Remove password (Rest)</button>
        <pre id="removeResult"></pre>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Getter/Setter Demo</h3>
    <div class="getter-setter">
      <div class="person-card" id="personCard">
        <h4>Person</h4>
        <div>First: <span id="firstName">Ali</span></div>
        <div>Last: <span id="lastName">Veli</span></div>
        <div class="full-name">Full: <span id="fullName">Ali Veli</span></div>
        <input type="text" id="newFullName" placeholder="Yeni tam ad">
        <button onclick="updateFullName()">Update (Setter)</button>
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

.objects-lab {
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

/* Object Explorer */
.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.input-group input {
  flex: 1;
  min-width: 150px;
  padding: 10px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  color: #fff;
}

.object-display {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 14px;
  margin-bottom: 15px;
  border: 2px solid #6366f1;
  color: #34d399;
  min-height: 60px;
}

.object-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.object-actions button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}

.result-display {
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
  border-left: 4px solid #38bdf8;
  min-height: 50px;
}

/* Destructuring */
.code-example {
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  margin-bottom: 15px;
  color: #a78bfa;
  overflow-x: auto;
}

.destructure-tests {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.destructure-tests button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}

.destructure-result {
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  border: 2px dashed #34d399;
  min-height: 60px;
}

/* Profile Manager */
.profile-manager {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .profile-manager {
    grid-template-columns: 1fr;
  }
}

.profile-form {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
}

.profile-form input,
.profile-form select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 6px;
  color: #fff;
}

.profiles-list {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
  max-height: 400px;
  overflow-y: auto;
}

.profile-card {
  background: #1e293b;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-left: 4px solid #6366f1;
}

.profile-card.admin {
  border-left-color: #ef4444;
}

.profile-card.moderator {
  border-left-color: #f59e0b;
}

/* Spread Demo */
.spread-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .spread-demo {
    grid-template-columns: 1fr;
  }
}

.box {
  background: #0f172a;
  padding: 20px;
  border-radius: 12px;
}

.box pre {
  background: #1e293b;
  padding: 10px;
  border-radius: 6px;
  margin: 10px 0;
  font-family: monospace;
  font-size: 12px;
}

/* Getter/Setter */
.person-card {
  background: #0f172a;
  padding: 25px;
  border-radius: 12px;
  max-width: 400px;
}

.person-card div {
  margin-bottom: 10px;
  padding: 8px;
  background: #1e293b;
  border-radius: 6px;
}

.full-name {
  background: #6366f1 !important;
  color: white;
  font-weight: bold;
}

.person-card input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 6px;
  color: #fff;
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
    js: `// Global state
let demoObject = {};
let profiles = [];
let isFrozen = false;

// Sample user for destructuring
const sampleUser = {
  name: "Kamil",
  age: 28,
  email: "kamil@example.com",
  address: {
    city: "Baku",
    zip: "1000"
  },
  hobbies: ["coding", "gaming", "reading"],
  role: "user"
};

// Object Explorer
function addProperty() {
  if (isFrozen) {
    alert('Object dondurulub! Dəyişiklik olmaz.');
    return;
  }
  
  const key = document.getElementById('propKey').value;
  const value = document.getElementById('propValue').value;
  
  if (!key) return;
  
  // Try to parse number/boolean
  let parsedValue = value;
  if (value === 'true') parsedValue = true;
  else if (value === 'false') parsedValue = false;
  else if (!isNaN(value) && value !== '') parsedValue = Number(value);
  
  demoObject[key] = parsedValue;
  updateObjectDisplay();
  
  document.getElementById('propKey').value = '';
  document.getElementById('propValue').value = '';
}

function updateObjectDisplay() {
  document.getElementById('objectDisplay').textContent = JSON.stringify(demoObject, null, 2);
}

function showKeys() {
  const keys = Object.keys(demoObject);
  showResult('Keys: [' + keys.join(', ') + ']');
}

function showValues() {
  const values = Object.values(demoObject);
  showResult('Values: [' + values.join(', ') + ']');
}

function showEntries() {
  const entries = Object.entries(demoObject);
  showResult('Entries:\\n' + entries.map(e => '  [' + e[0] + ', ' + JSON.stringify(e[1]) + ']').join('\\n'));
}

function freezeObject() {
  Object.freeze(demoObject);
  isFrozen = true;
  showResult('Object.freeze() tətbiq edildi! Artıq dəyişdirilə bilməz.');
  document.getElementById('objectDisplay').style.borderColor = '#ef4444';
}

function cloneObject() {
  const clone = { ...demoObject };
  clone.cloned = true;
  showResult('Clone yaradıldı:\\n' + JSON.stringify(clone, null, 2));
}

function showResult(text) {
  document.getElementById('objectResult').textContent = text;
}

// Destructuring Tests
function testBasicDestructure() {
  const { name, age } = sampleUser;
  showDestructureResult('Basic:', 'name = ' + name + ', age = ' + age);
}

function testNestedDestructure() {
  const { address: { city } } = sampleUser;
  showDestructureResult('Nested:', 'city = ' + city);
}

function testArrayDestructure() {
  const { hobbies } = sampleUser;
  const [first, second] = hobbies;
  showDestructureResult('Array:', 'first = ' + first + ', second = ' + second);
}

function testRenameDestructure() {
  const { name: firstName, email: userEmail } = sampleUser;
  showDestructureResult('Rename:', 'firstName = ' + firstName + ', userEmail = ' + userEmail);
}

function testDefaultDestructure() {
  const { role = 'guest', country = 'Azerbaijan' } = sampleUser;
  showDestructureResult('Default:', 'role = ' + role + ' (exists), country = ' + country + ' (default)');
}

function testRestDestructure() {
  const { name, ...restInfo } = sampleUser;
  showDestructureResult('Rest:', 'name = ' + name + '\\nrest = ' + JSON.stringify(restInfo, null, 2));
}

function showDestructureResult(type, content) {
  document.getElementById('destructureResult').innerHTML = '<strong>' + type + '</strong>\\n' + content;
}

// Profile Manager
function createProfile() {
  const name = document.getElementById('profileName').value;
  const email = document.getElementById('profileEmail').value;
  const age = parseInt(document.getElementById('profileAge').value);
  const role = document.getElementById('profileRole').value;
  
  if (!name || !email) {
    alert('Ad və email vacibdir!');
    return;
  }
  
  // Create with shorthand properties
  const profile = {
    id: Date.now(),
    name,
    email,
    age: age || 0,
    role,
    createdAt: new Date().toLocaleDateString()
  };
  
  profiles.push(profile);
  renderProfiles();
  
  // Clear form
  document.getElementById('profileName').value = '';
  document.getElementById('profileEmail').value = '';
  document.getElementById('profileAge').value = '';
}

function renderProfiles() {
  const container = document.getElementById('profilesList');
  
  if (profiles.length === 0) {
    container.innerHTML = '<p>Profil yoxdur</p>';
    return;
  }
  
  container.innerHTML = profiles.map(p => '
    <div class="profile-card ' + p.role + '">
      <strong>' + p.name + '</strong> (' + p.role + ')<br>
      <small>' + p.email + '</small><br>
      <small>Yaş: ' + p.age + ' | Tarix: ' + p.createdAt + '</small>
    </div>
  ').join('');
}

// Spread/Rest Operations
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const userWithPassword = {
  username: 'admin',
  password: 'secret123',
  email: 'admin@site.com'
};

function mergeObjects() {
  const merged = { ...obj1, ...obj2 };
  document.getElementById('mergeResult').textContent = 
    'const merged = { ...obj1, ...obj2 };\\n' + 
    JSON.stringify(merged, null, 2) + 
    '\\n\\n(b sonuncu dəyəri götürdü: 3)';
}

function removePassword() {
  const { password, ...safeUser } = userWithPassword;
  document.getElementById('removeResult').textContent = 
    'const { password, ...safeUser } = user;\\n' +
    'password: ' + password + '\\n' +
    'safeUser: ' + JSON.stringify(safeUser, null, 2);
}

// Getter/Setter Person
const person = {
  firstName: 'Ali',
  lastName: 'Veli',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
};

function updateFullName() {
  const newName = document.getElementById('newFullName').value;
  if (!newName.includes(' ')) {
    alert('Ad və soyad arasında boşluq olmalıdır!');
    return;
  }
  
  person.fullName = newName; // Setter çağrılır
  
  document.getElementById('firstName').textContent = person.firstName;
  document.getElementById('lastName').textContent = person.lastName;
  document.getElementById('fullName').textContent = person.fullName;
  document.getElementById('newFullName').value = '';
}

// Initialize
updateObjectDisplay();
renderProfiles();

console.log('Objects module loaded!');
console.log('Try: destructuring, spread, getters/setters, Object methods');`,
  },

  exercise: {
    title: "E-commerce Product Manager",
    description: "Object destructuring və spread istifadə edərək məhsul idarəetmə sistemi yaradın. CRUD əməliyyatları, filter və sort funksionallığı olsun.",
    requirements: [
      "Product object strukturu: id, name, price, category, stock, ratings",
      "Object shorthand istifadə edin (addProduct)",
      "Destructuring ilə product info göstərin",
      "Spread operator ilə product update edin (immutable)",
      "Rest operator ilə bəzi field-ləri gizlədin (admin/public view)",
      "Object.entries() ilə category görə qruplaşdırın",
      "Deep clone funksiyası yazın (nested objects üçün)",
      "Getter ilə discounted price hesablayın"
    ],
    starterCode: `const products = [];

function addProduct({ name, price, category }) {
  // Shorthand properties istifadə edin
}

function updateProduct(id, updates) {
  // Immutable update with spread
}

function getProductPublicInfo(product) {
  // Rest operator ilə sensitive data xaric
}

function groupByCategory() {
  // Object.entries() və reduce ilə
}

// Deep clone utility
function deepClone(obj) {
  // JSON method və ya recursive həll
}`,
  },

  quiz: [
    {
      question: "const {a, b} = {a:1, b:2, c:3} - c nə oldu?",
      options: ["Error", "undefined", "3", "Global variable"],
      correctAnswer: 1
    },
    {
      question: "Object.assign() nə edir?",
      options: ["Object yaradır", "Shallow merge/copy", "Deep copy", "Object silir"],
      correctAnswer: 1
    },
    {
      question: "const {x:y} = {x:5} - y nədir?",
      options: ["x", "5", "undefined", "Error"],
      correctAnswer: 1
    },
    {
      question: "Object.freeze() vs Object.seal() fərqi?",
      options: ["Yoxdur", "freeze=hər şey block, seal=modify olar", "seal=daha güclü", "freeze yalnız array"],
      correctAnswer: 1
    },
    {
      question: "const obj = {a:1}; const copy = obj; copy.a=2; obj.a?",
      options: ["1", "2", "undefined", "Error"],
      correctAnswer: 1
    },
    {
      question: "const {a, ...rest} = {a:1, b:2, c:3}; rest?",
      options: ["{b:2, c:3}", "[2,3]", "{a:1}", "undefined"],
      correctAnswer: 0
    },
    {
      question: "'key' in obj vs obj.hasOwnProperty() fərqi?",
      options: ["Eyni", "in prototype-ı da yoxlayır", "hasOwnProperty daha sürətlidir", "in yalnız string keys"],
      correctAnswer: 1
    },
    {
      question: "const [a,,b] = [1,2,3]; nəticə?",
      options: ["a=1, b=2", "a=1, b=3", "Error", "a=undefined"],
      correctAnswer: 1
    },
    {
      question: "Object.entries({a:1, b:2}) nə qaytarır?",
      options: ["['a','b']", "[[a,1],[b,2]]", "[1,2]", "[{key:a,value:1}]"],
      correctAnswer: 1
    },
    {
      question: "Getter necə çağrılır?",
      options: ["obj.getName()", "obj.name", "obj.get('name')", "get obj.name"],
      correctAnswer: 1
    }
  ]
};

export default topic18;