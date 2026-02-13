export const topicai2 = {
  id: 2,
  title: "List, Tuple, Dictionary və Set",
  duration: "100 dəq",
  isFree: false,
  
  content: `
    <h4>📚 Verilənlər Strukturlarına Giriş</h4>
    <p>Tək-tək dəyişənlər kifayət etmədikdə, çoxlu məlumatları saxlamaq üçün xüsusi konteynerlərə ehtiyacımız olur. Python-da 4 əsas konteyner tipi var: List, Tuple, Dictionary və Set. Hər birinin öz üstünlükləri və istifadə sahələri var.</p>

    <h4>📝 List (Siyahı) - Dəyişəbilən Ardıcıl</h4>
    <p>List, Python-un ən çox istifadə edilən verilənlər strukturudur. Məktəbdəki sinif siyahısını təsəvvür edin - tələbə adları yazılır, əlavə olunur, silinir, dəyişdirilir. List də eynilə belədir.</p>
    
    <pre><code># List yaratmaq
telebeler = ["Əli", "Leyla", "Səməd", "Nigar"]
qiymetler = [85, 92, 78, 95, 88]
qarisiq = ["Salam", 25, 3.14, True]  # Fərqli tiplər ola bilər

# Boş list
bos_list = []
bos_list = list()

# Elementlərə çatmaq (index 0-dan başlayır)
print(telebeler[0])      # Əli (birinci element)
print(telebeler[-1])     # Nigar (sonuncu element)
print(telebeler[1:3])    # ['Leyla', 'Səməd'] (kəsilmə)</code></pre>

    <p><strong>List Əməliyyatları:</strong></p>
    <pre><code>meyveler = ["alma", "armud"]

# Əlavə etmək
meyveler.append("banan")           # Sona əlavə: ["alma", "armud", "banan"]
meyveler.insert(1, "gilas")        # İndeksə əlavə: ["alma", "gilas", "armud", "banan"]

# Silmək
meyveler.remove("armud")           # Dəyərə görə sil (ilk tapılanı)
silinen = meyveler.pop()           # Sonuncunu sil və qaytar
silinen = meyveler.pop(0)          # İndekslə sil

# Axtarmaq
indeks = meyveler.index("alma")    # Hansı indeksdədir?
sayi = meyveler.count("alma")      # Neçə dəfə təkrarlanır?

# Sıralama
reqemler = [3, 1, 4, 1, 5]
reqemler.sort()                    # [1, 1, 3, 4, 5] (dəyişir)
reqemler.sort(reverse=True)        # [5, 4, 3, 1, 1] (azalan)
reqemler.reverse()                 # Tərsinə çevir

# Digər
uzunluq = len(reqemler)            # Element sayı
varmi = "alma" in meyveler         # True/False</code></pre>

    <h4>🔒 Tuple (Sıralı Dəyişməz) - Təhlükəsiz Saxlama</h4>
    <p>Tuple, List-in "qorumalı" versiyasıdır. Bir dəfə yaradıldıqdan sonra dəyişdirilə bilməz. Bu, məlumatın təsadüfən dəyişməsinin qarşısını alır.</p>
    
    <pre><code># Tuple yaratmaq (dairəvi mötərizələr)
koordinat = (10, 20)
rengler = ("qirmizi", "yasil", "goy")
tek_element = (5,)                 # Vergül vacibdir!

# List-dən fərqi - dəyişməzdir
koordinat[0] = 15                  # XƏTA! Dəyişmək olmaz

# Üstünlükləri
# 1. Sürətli işləyir (List-dən tez)
# 2. Yaddaşda az yer tutur
# 3. Dictionary açarı ola bilər (List ola bilməz!)

# İstifadə sahələri
# - GPS koordinatlar
# - RGB rəng kodları (255, 128, 0)
# - Verilənlər bazası qeydləri</code></pre>

    <h4>📖 Dictionary (Lüğət) - Açar-Dəyər Cütləri</h4>
    <p>Real lüğət kimi işləyir - söz (açar) verirsiniz, mənası (dəyər) alırsınız. Hər şeyi təşkil etmək üçün əladır.</p>
    
    <pre><code># Dictionary yaratmaq
telebe = {
    "ad": "Əli",
    "soyad": "Məmmədov",
    "yas": 20,
    "qiymetler": [85, 92, 78]
}

# Dəyərlərə çatmaq
print(telebe["ad"])                # Əli
print(telebe.get("yas"))           # 20 (təhlükəsiz üsul)
print(telebe.get("boy", "Yoxdur")) # Default dəyər

# Əlavə və dəyişmə
telebe["fakulte"] = "IT"           # Yeni açar əlavə
telebe["yas"] = 21                 # Mövcudunu dəyiş

# Silmək
del telebe["yas"]                  # Açarı sil
son = telebe.pop("soyad")          # Sil və qaytar

# Bütün açarlar, dəyərlər, cütlər
print(telebe.keys())               # dict_keys(['ad', 'qiymetler', 'fakulte'])
print(telebe.values())             # Bütün dəyərlər
print(telebe.items())              # (açar, dəyər) cütləri

# Yoxlama
varmi = "ad" in telebe             # True

# Dictionary içində Dictionary (Nested)
sinif = {
    "telebe1": {"ad": "Əli", "yas": 20},
    "telebe2": {"ad": "Leyla", "yas": 19}
}
print(sinif["telebe1"]["ad"])      # Əli</code></pre>

    <h4>🎯 Set (Cədvəl) - Unikal Elementlər</h4>
    <p>Set, təkrarlanan elementlərə icazə verməyən və riyazi cədvəl əməliyyatları dəstəkləyən strukturdur.</p>
    
    <pre><code># Set yaratmaq (susmaya görə sıralanmır)
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

# Təkrarlananlar avtomatik silinir
tekrar = {1, 2, 2, 3, 3, 3}        # {1, 2, 3}

# Əməliyyatlar
A.add(6)                           # Əlavə et
A.remove(6)                        # Sil (yoxdursa xəta)
A.discard(10)                      # Sil (yoxdursa sakit keç)

# Riyazi əməliyyatlar
print(A | B)                       # Birləşmə (Union): {1,2,3,4,5,6,7,8}
print(A & B)                       # Kəsişmə (Intersection): {4,5}
print(A - B)                       # Fərq (Difference): {1,2,3}
print(A ^ B)                       # Simmetrik fərq: {1,2,3,6,7,8}

# List-dən setə (təkrarlananları silmək üçün)
reqemler = [1, 2, 2, 3, 3, 3]
unikal = set(reqemler)             # {1, 2, 3}
yeniden_list = list(unikal)        # [1, 2, 3]</code></pre>

    <h4>🔄 Strukturlar Arası Çevirmə</h4>
    <pre><code># List ↔ Tuple
listem = [1, 2, 3]
tupleim = tuple(listem)            # (1, 2, 3)
yeniden_list = list(tupleim)       # [1, 2, 3]

# List ↔ Set
setim = set([1, 2, 2, 3])          # {1, 2, 3}
listem = list(setim)               # [1, 2, 3]

# String ↔ List
soz = "Python"
herfler = list(soz)                # ['P', 'y', 't', 'h', 'o', 'n']
cumle = "Salam dünya"
sozler = cumle.split()             # ['Salam', 'dünya']
birlesdir = "-".join(herfler)      # "P-y-t-h-o-n"</code></pre>

    <h4>📊 Hansı Strukturu Nə Vaxt İstifadə Etməli?</h4>
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 10px;">Struktur</th>
        <th style="padding: 10px;">İstifadə Edin Əgər...</th>
        <th style="padding: 10px;">Xüsusiyyət</th>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>List</strong></td>
        <td style="padding: 10px;">Elementlər dəyişəcək, sıra vacibdir</td>
        <td style="padding: 10px;">Dəyişən, indekslənmiş</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Tuple</strong></td>
        <td style="padding: 10px;">Məlumat sabit qalmalıdır</td>
        <td style="padding: 10px;">Dəyişməz, sürətli</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Dictionary</strong></td>
        <td style="padding: 10px;">Açar sözlə axtarmaq lazımdır</td>
        <td style="padding: 10px;">Açar-dəyər cütləri</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Set</strong></td>
        <td style="padding: 10px;">Təkrarlananlar silinməli, riyazi əməliyyatlar</td>
        <td style="padding: 10px;">Unikal, sırasız</td>
      </tr>
    </table>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li><strong>List comprehension:</strong> <code>[x*2 for x in range(5)]</code> → [0, 2, 4, 6, 8]</li>
      <li><strong>Dictionary comprehension:</strong> <code>{x: x**2 for x in range(5)}</code></li>
      <li><strong>Zip funksiyası:</strong> İki list-i birləşdirmək üçün</li>
      <li><strong>Enumerate:</strong> Həm indeks, həm dəyər almaq üçün</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="python-structures">
  <h2>🗂️ Python Data Structures Lab</h2>
  
  <section class="demo-section">
    <h3>1. List Əməliyyatları</h3>
    <div class="interactive-list">
      <div class="list-display" id="listDisplay">['alma', 'armud', 'banan']</div>
      <div class="controls">
        <input type="text" id="listInput" placeholder="Element daxil edin">
        <button onclick="listAppend()">append()</button>
        <button onclick="listInsert()">insert(0)</button>
        <button onclick="listRemove()">remove()</button>
        <button onclick="listPop()">pop()</button>
        <button onclick="listSort()">sort()</button>
        <button onclick="listReverse()">reverse()</button>
      </div>
      <div class="info" id="listInfo">Uzunluq: 3 | Son əməliyyat: -</div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Dictionary Explorer</h3>
    <div class="dict-explorer">
      <pre class="dict-code" id="dictCode">telebe = {
    "ad": "Əli",
    "soyad": "Məmmədov",
    "yas": 20,
    "fakulte": "IT"
}</pre>
      <div class="dict-controls">
        <input type="text" id="dictKey" placeholder="Açar (məs: yas)">
        <button onclick="dictGet()">get()</button>
        <button onclick="dictKeys()">keys()</button>
        <button onclick="dictValues()">values()</button>
        <button onclick="dictItems()">items()</button>
      </div>
      <div class="output" id="dictOutput">Dictionary məlumatları burada görünəcək...</div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Set Riyazi Əməliyyatları</h3>
    <div class="set-operations">
      <div class="sets-display">
        <div class="set-box">
          <h4>Set A</h4>
          <div id="setA">{1, 2, 3, 4, 5}</div>
          <input type="number" id="setAInput" placeholder="Əlavə et">
          <button onclick="addToA()">+</button>
        </div>
        <div class="set-box">
          <h4>Set B</h4>
          <div id="setB">{4, 5, 6, 7, 8}</div>
          <input type="number" id="setBInput" placeholder="Əlavə et">
          <button onclick="addToB()">+</button>
        </div>
      </div>
      <div class="set-buttons">
        <button onclick="setUnion()">A | B (Union)</button>
        <button onclick="setIntersection()">A & B (Intersection)</button>
        <button onclick="setDifference()">A - B (Difference)</button>
        <button onclick="setSymmetric()">A ^ B (Symmetric)</button>
      </div>
      <div class="output highlight" id="setResult">Nəticə burada görünəcək</div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Tuple vs List Müqayisəsi</h3>
    <div class="comparison-demo">
      <div class="comp-box">
        <h4>List (Dəyişən)</h4>
        <div id="mutableList">[10, 20, 30]</div>
        <button onclick="modifyList()">[0] = 99 (Dəyiş)</button>
        <div class="status success" id="listStatus">✅ Dəyişdirildi!</div>
      </div>
      <div class="comp-box">
        <h4>Tuple (Dəyişməz)</h4>
        <div id="immutableTuple">(10, 20, 30)</div>
        <button onclick="modifyTuple()">[0] = 99 (Cəhd et)</button>
        <div class="status error" id="tupleStatus">🔒 Dəyişməz!</div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Real-world Tətbiq: Telebe ID Sistemi</h3>
    <div class="student-system">
      <div class="input-group">
        <input type="text" id="stuName" placeholder="Ad">
        <input type="number" id="stuAge" placeholder="Yaş">
        <input type="text" id="stuMajor" placeholder="İxtisas">
        <button onclick="addStudent()">Tələbə Əlavə Et</button>
      </div>
      <div class="student-list" id="studentList"></div>
    </div>
  </section>
</div>`,

    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 40px;
  line-height: 1.6;
}

.python-structures {
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  color: #ffd700;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

h3 {
  color: #00d4ff;
  margin-bottom: 20px;
  font-size: 22px;
  border-bottom: 2px solid rgba(0, 212, 255, 0.3);
  padding-bottom: 10px;
}

h4 {
  color: #ff79c6;
  margin-bottom: 10px;
}

.demo-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* List Styles */
.list-display {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 18px;
  margin-bottom: 15px;
  border-left: 4px solid #ffd700;
  color: #7ee787;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.info {
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  color: #8b949e;
}

/* Dictionary Styles */
.dict-code {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  margin-bottom: 15px;
  color: #d4d4d4;
  border-left: 4px solid #ff79c6;
}

.dict-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

/* Set Operations */
.sets-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.set-box {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.set-box div {
  background: #1e1e1e;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  margin: 10px 0;
  color: #ffd700;
}

.set-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;
}

/* Comparison Demo */
.comparison-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.comp-box {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.comp-box div {
  background: #1e1e1e;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  margin: 10px 0;
  font-size: 16px;
}

.status {
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
  font-weight: bold;
}

.success {
  background: #238636;
  color: white;
}

.error {
  background: #da3633;
  color: white;
}

/* Student System */
.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.student-list {
  display: grid;
  gap: 10px;
}

.student-card {
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #58a6ff;
}

/* Common Elements */
input {
  background: #21262d;
  border: 1px solid #30363d;
  color: #c9d1d9;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  min-width: 120px;
}

input:focus {
  outline: none;
  border-color: #58a6ff;
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.output {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  min-height: 60px;
  border: 1px solid #30363d;
  color: #7ee787;
  white-space: pre-wrap;
}

.output.highlight {
  background: #238636;
  color: white;
  font-size: 16px;
}

@media (max-width: 768px) {
  .sets-display, .comparison-demo {
    grid-template-columns: 1fr;
  }
  body { padding: 20px; }
}`,

    js: `// Python Data Structures Lab
let currentList = ['alma', 'armud', 'banan'];
let setA = new Set([1, 2, 3, 4, 5]);
let setB = new Set([4, 5, 6, 7, 8]);
let students = [];
let mutableList = [10, 20, 30];
const immutableTuple = [10, 20, 30]; // Simulating tuple

function updateListDisplay() {
  document.getElementById('listDisplay').textContent = JSON.stringify(currentList).replace(/"/g, "'");
  document.getElementById('listInfo').textContent = \`Uzunluq: \${currentList.length} | Son əməliyyat: \${new Date().toLocaleTimeString()}\`;
}

function listAppend() {
  const val = document.getElementById('listInput').value;
  if (val) {
    currentList.push(val);
    updateListDisplay();
    document.getElementById('listInput').value = '';
  }
}

function listInsert() {
  const val = document.getElementById('listInput').value;
  if (val) {
    currentList.unshift(val);
    updateListDisplay();
    document.getElementById('listInput').value = '';
  }
}

function listRemove() {
  const val = document.getElementById('listInput').value;
  const idx = currentList.indexOf(val);
  if (idx > -1) {
    currentList.splice(idx, 1);
    updateListDisplay();
  } else {
    alert('Element tapılmadı!');
  }
}

function listPop() {
  if (currentList.length > 0) {
    const removed = currentList.pop();
    updateListDisplay();
    alert('Silindi: ' + removed);
  }
}

function listSort() {
  currentList.sort();
  updateListDisplay();
}

function listReverse() {
  currentList.reverse();
  updateListDisplay();
}

// Dictionary Functions
const sampleDict = {
  "ad": "Əli",
  "soyad": "Məmmədov",
  "yas": 20,
  "fakulte": "IT"
};

function dictGet() {
  const key = document.getElementById('dictKey').value;
  const output = document.getElementById('dictOutput');
  if (key in sampleDict) {
    output.textContent = \`telebe.get("\${key}") = \${JSON.stringify(sampleDict[key])} (tip: \${typeof sampleDict[key]})\`;
  } else {
    output.textContent = \`Açar tapılmadı: "\${key}"\`;
  }
}

function dictKeys() {
  document.getElementById('dictOutput').textContent = 'dict_keys(' + JSON.stringify(Object.keys(sampleDict)) + ')';
}

function dictValues() {
  document.getElementById('dictOutput').textContent = 'dict_values(' + JSON.stringify(Object.values(sampleDict)) + ')';
}

function dictItems() {
  const items = Object.entries(sampleDict).map(([k, v]) => [\k\, \v\]);
  document.getElementById('dictOutput').textContent = 'dict_items(' + JSON.stringify(items) + ')';
}

// Set Operations
function updateSets() {
  document.getElementById('setA').textContent = '{' + Array.from(setA).join(', ') + '}';
  document.getElementById('setB').textContent = '{' + Array.from(setB).join(', ') + '}';
}

function addToA() {
  const val = parseInt(document.getElementById('setAInput').value);
  if (!isNaN(val)) {
    setA.add(val);
    updateSets();
  }
}

function addToB() {
  const val = parseInt(document.getElementById('setBInput').value);
  if (!isNaN(val)) {
    setB.add(val);
    updateSets();
  }
}

function setUnion() {
  const union = new Set([...setA, ...setB]);
  document.getElementById('setResult').textContent = 'A | B = {' + Array.from(union).join(', ') + '}';
}

function setIntersection() {
  const inter = new Set([...setA].filter(x => setB.has(x)));
  document.getElementById('setResult').textContent = 'A & B = {' + Array.from(inter).join(', ') + '}';
}

function setDifference() {
  const diff = new Set([...setA].filter(x => !setB.has(x)));
  document.getElementById('setResult').textContent = 'A - B = {' + Array.from(diff).join(', ') + '}';
}

function setSymmetric() {
  const sym = new Set([...setA].filter(x => !setB.has(x)).concat([...setB].filter(x => !setA.has(x))));
  document.getElementById('setResult').textContent = 'A ^ B = {' + Array.from(sym).join(', ') + '}';
}

// Comparison
function modifyList() {
  mutableList[0] = 99;
  document.getElementById('mutableList').textContent = '[' + mutableList.join(', ') + ']';
  document.getElementById('listStatus').style.background = '#238636';
  document.getElementById('listStatus').textContent = '✅ Uğurla dəyişdirildi! List dəyişəndir.';
}

function modifyTuple() {
  document.getElementById('tupleStatus').style.background = '#da3633';
  document.getElementById('tupleStatus').textContent = '❌ Xəta: \\\'tuple\\\' object does not support item assignment';
  setTimeout(() => {
    document.getElementById('tupleStatus').textContent = '🔒 Tuple dəyişməzdir!';
    document.getElementById('tupleStatus').style.background = '#da3633';
  }, 2000);
}

// Student System
function addStudent() {
  const name = document.getElementById('stuName').value;
  const age = document.getElementById('stuAge').value;
  const major = document.getElementById('stuMajor').value;
  
  if (name && age && major) {
    const student = { ad: name, yas: parseInt(age), ixtisas: major };
    students.push(student);
    
    const listDiv = document.getElementById('studentList');
    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = \`
      <strong>\${name}</strong> (\${age} yaş)<br>
      İxtisas: \${major}<br>
      <small>ID: \${students.length} | Tip: dict</small>
    \`;
    listDiv.appendChild(card);
    
    // Clear inputs
    document.getElementById('stuName').value = '';
    document.getElementById('stuAge').value = '';
    document.getElementById('stuMajor').value = '';
  }
}

console.log('Python Data Structures Lab loaded!');`
  },

  exercise: {
    title: "🏫 Tələbə İdarəetmə Sistemi",
    description: "List, Dictionary və Tuple istifadə edərək tam funksional tələbə idarəetmə sistemi yaradın. Sistemdə tələbə əlavə etmək, silmək, axtarmaq və statistika göstərmək imkanları olsun.",
    requirements: [
      "Dictionary-lərdən ibarət List yaradın (hər tələbə bir dict)",
      "Hər tələbədə olmalı: id (tuple), ad, soyad, yas, qiymetler (list)",
      "Əsas funksiyalar: elave_et(), sil(), axtar(), statistika()",
      "ID tuple olmalı və dəyişməz qalmalıdır (fakulte_kodu, il, sira)",
      "Qiymətlər listində 3 fənndən qiymətlər saxlanmalıdır",
      "Orta bal hesablayan funksiya yazın",
      "Eyni ID-li tələbə əlavə olunmasın (Set istifadə edin)",
      "Ən yüksək və ən aşağı orta balı tapan funksiya yazın"
    ],
    starterCode: `# Tələbə İdarəetmə Sistemi

# Tələbə strukturu:
# {
#     "id": (fakulte, il, sira),  # Tuple - dəyişməz
#     "ad": "Əli",
#     "soyad": "Məmmədov", 
#     "yas": 20,
#     "qiymetler": [85, 90, 78]    # List - dəyişə bilər
# }

telebeler = []
idler = set()  # Unikal ID-ləri yoxlamaq üçün

def telebe_elave_et():
    # Kodunuzu bura yazın
    pass

def telebe_sil(telebe_id):
    # Kodunuzu bura yazın
    pass

def telebe_axtar(telebe_id):
    # Kodunuzu bura yazın
    pass

def orta_bal_hesabla(qiymetler):
    # Kodunuzu bura yazın
    pass

def statistika():
    # Ümumi tələbə sayı, orta yaş, ən yüksək/ən aşağı orta bal
    pass

# Test üçün nümunə tələbələr əlavə edin
# Sistemi sınayın`,
  },

  quiz: [
    {
      question: "List və Tuple arasındakı əsas fərq nədir?",
      options: ["List daha sürətlidir", "Tuple dəyişməzdir, List dəyişə bilər", "List yalnız rəqəm saxlayır", "Tuple-da indeks yoxdur"],
      correctAnswer: 1
    },
    {
      question: "my_list = [1, 2, 3] olduqda my_list[1] nədir?",
      options: ["1", "2", "3", "Xəta"],
      correctAnswer: 1
    },
    {
      question: "Dictionary-də elementlərə necə çatılır?",
      options: ["İndekslə [0]", "Açarla ['ad']", "Hər ikisi", "Heç biri"],
      correctAnswer: 1
    },
    {
      question: "my_dict = {'a': 1, 'b': 2} üçün my_dict.get('c', 0) nəticəsi nədir?",
      options: ["Xəta", "None", "0", "'c'"],
      correctAnswer: 2
    },
    {
      question: "Set-də hansı xüsusiyyət var?",
      options: ["Təkrarlanan elementlər olur", "Sıralanmışdır", "Təkrarlanan elementlər olmur", "İndekslə çatmaq olar"],
      correctAnswer: 2
    },
    {
      question: "A = {1,2,3}, B = {3,4,5} olduqda A & B nəticəsi nədir?",
      options: ["{1,2,3,4,5}", "{3}", "{1,2}", "{}"],
      correctAnswer: 1
    },
    {
      question: "List-dən element silmək üçün hansı metod istifadə olunur?",
      options: ["delete()", "remove()", "erase()", "pop() və remove()"],
      correctAnswer: 3
    },
    {
      question: "len([1, [2, 3], 4]) nəticəsi nədir?",
      options: ["3", "4", "5", "Xəta"],
      correctAnswer: 0
    },
    {
      question: "Tuple necə yaradılır?",
      options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
      correctAnswer: 2
    },
    {
      question: "Dictionary comprehension necə yazılır?",
      options: ["[x for x in range(5)]", "{x: x**2 for x in range(5)}", "(x for x in range(5))", "{x for x in range(5)}"],
      correctAnswer: 1
    }
  ]
};

export default topicai2;