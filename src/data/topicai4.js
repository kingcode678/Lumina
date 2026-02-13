export const topicai4 = {
  id: 4,
  title: "Dövrlər (For/While)",
  duration: "110 dəq",
  isFree: false,
  
  content: `
    <h4>🔄 Təkrarlanan Əməliyyatlar</h4>
    <p>Proqramlaşdırmada eyni işi 100 dəfə yazmaq əvəzinə, dövrlər (loops) istifadə edirik. Dövrlər bizə "bu əməliyyatı 100 dəfə təkrarla" deməyə imkan verir. Python-da iki əsas dövr var: <code>for</code> (məlum sayda təkrar) və <code>while</code> (şərt ödənənə qədər).</p>

    <h4>🎯 for Dövrü - Ardıcıllıqla İşləmək</h4>
    <p><code>for</code> dövrü list, tuple, string və ya range üzərində gəzmək üçün istifadə olunur. Hər element üçün dövrün içindəki kod işləyir.</p>
    
    <pre><code># Əsas sintaksis
meyveler = ["alma", "armud", "banan"]

for meyve in meyveler:
    print(meyve)

# Nəticə:
# alma
# armud
# banan

# String üzərində gəzmək
for herf in "Python":
    print(herf)  # P, y, t, h, o, n (hər sətirdə bir hərf)</code></pre>

    <p><strong>range() Funksiyası - Ədədlər Üzərində</strong></p>
    <p>Əgər sadəcə ədədlər üzərində dövr etmək istəyiriksə, <code>range()</code> istifadə edirik:</p>
    
    <pre><code># range(stop) - 0-dan başlayır
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# range(start, stop) - start daxildir, stop deyil
for i in range(2, 6):
    print(i)  # 2, 3, 4, 5

# range(start, stop, step) - addım ölçüsü
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8 (cüt ədədlər)

for i in range(10, 0, -1):
    print(i)  # 10-dan 1-ə kimi azalaraq</code></pre>

    <h4>⚡ while Dövrü - Şərtə Qədər</h4>
    <p><code>while</code> müəyyən şərt ödənənə qədər davam edir. Şərt False olduqda dövr dayanır.</p>
    
    <pre><code># Əsas while dövrü
sayac = 0

while sayac < 5:
    print(sayac)
    sayac += 1  # Əhəmiyyətli! Yoxsa sonsuz dövr olar

# İstifadəçi düzgün daxil edənə qədər
parol = ""
while parol != "gizli":
    parol = input("Parolu daxil edin: ")
    if parol != "gizli":
        print("Yanlış! Yenidən cəhd edin.")

print("Xoş gəldiniz!")</code></pre>

    <p><strong>⚠️ Sonsuz Dövr Təhlükəsi!</strong></p>
    <p>Əgər while şərti heç vaxt False olmazsa, proqram donar:</p>
    <pre><code># ❌ YANLIŞ - Sonsuz dövr!
while True:
    print("Bu heç vaxt dayanmayacaq!")

# ✅ DÜZGÜN - Çıxış yolu var
while True:
    cavab = input("Çıxmaq üçün 'q' yazın: ")
    if cavab == "q":
        break  # Dövrü dayandır</code></pre>

    <h4>🎮 Dövr İdarəetmə Əmrləri</h4>
    
    <p><strong>break - Dövrü Tam Dayandır</strong></p>
    <pre><code># 7-yə qədər say, sonra dayan
for i in range(1, 20):
    if i == 7:
        print("7 tapıldı, dövr dayanır!")
        break
    print(i)
# Nəticə: 1, 2, 3, 4, 5, 6, 7 tapıldı...</code></pre>

    <p><strong>continue - Növbəti Təkrara Keç</strong></p>
    <pre><code># Tək ədədləri atla, cütləri çap et
for i in range(10):
    if i % 2 != 0:  # Əgər təkdirsə
        continue    # Bu təkrarı ötür, növbətiyə keç
    print(i)        # 0, 2, 4, 6, 8</code></pre>

    <p><strong>else - Dövr Normal Bitəndə</strong></p>
    <p>Python-un unikal xüsusiyyəti: dövr <code>break</code> olmadan bitərsə, <code>else</code> işləyir.</p>
    <pre><code># Sadə ədəd yoxlayıcısı
eded = 17

for i in range(2, eded):
    if eded % i == 0:
        print(f"{eded} mürəkkəb ədəddir")
        break
else:
    # break işləmədiyi üçün buraya gəlir
    print(f"{eded} sadə ədəddir")</code></pre>

    <h4>🔄 İç-içə Dövrlər (Nested Loops)</h4>
    <p>Bir dövrün içində başqa dövr ola bilər:</p>
    
    <pre><code># Vurma cədvəli
for i in range(1, 4):        # Xarici dövr (sətir)
    for j in range(1, 4):    # Daxili dövr (sütun)
        print(f"{i}x{j}={i*j}", end="\t")
    print()  # Yeni sətir

# Nəticə:
# 1x1=1   1x2=2   1x3=3
# 2x1=2   2x2=4   2x3=6
# 3x1=3   3x2=6   3x3=9

# Şəkil çəkmək
for i in range(5):
    for j in range(i + 1):
        print("*", end="")
    print()
# *
# **
# ***
# ****
# *****</code></pre>

    <h4>📊 enumerate() və zip() - Güclü Alətlər</h4>
    
    <pre><code># enumerate() - Həm indeks, həm dəyər
telebeler = ["Əli", "Leyla", "Səməd"]

for indeks, ad in enumerate(telebeler):
    print(f"{indeks + 1}. {ad}")
# 1. Əli
# 2. Leyla
# 3. Səməd

# Başlanğıc indeksi dəyişmək
for indeks, ad in enumerate(telebeler, start=100):
    print(f"ID: {indeks}, Ad: {ad}")

# zip() - Bir neçə list-i birləşdirmək
adlar = ["Əli", "Leyla"]
ballar = [85, 92]

for ad, bal in zip(adlar, ballar):
    print(f"{ad}: {bal} bal")
# Əli: 85 bal
# Leyla: 92 bal</code></pre>

    <h4>🎯 List Comprehension - Qısa Yazılış</h4>
    <p>Dövr ilə list yaratmağın qısa yolu:</p>
    
    <pre><code># Normal yol
kvadratlar = []
for x in range(10):
    kvadratlar.append(x ** 2)

# List comprehension
kvadratlar = [x ** 2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Şərt ilə
cütler = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Dictionary comprehension
kvadrat_dict = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}</code></pre>

    <h4>⚖️ for vs while - Hansını İstifadə Etməli?</h4>
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">for</th>
        <th style="padding: 12px;">while</th>
      </tr>
      <tr>
        <td style="padding: 10px;">Təkrar sayı məlumdur</td>
        <td style="padding: 10px;">Təkrar sayı naməlumdur</td>
      </tr>
      <tr>
        <td style="padding: 10px;">List, range üzərində</td>
        <td style="padding: 10px;">Şərtə qədər davam edir</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Avtomatik artır/azaldır</td>
        <td style="padding: 10px;">Manual idarə tələb edir</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Daha az xəta riski</td>
        <td style="padding: 10px;">Sonsuz dövr riski var</td>
      </tr>
    </table>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Dövr dəyişənini (i, j) mənalı adlandırın: <code>for telebe in telebeler:</code></li>
      <li>Çox dərin iç-içə dövrlərdən qaçın (maksimum 2-3 səviyyə)</li>
      <li>Ağır əməliyyatlar üçün generator istifadə edin: <code>(x**2 for x in range(1000000))</code></li>
      <li><code>while True:</code> yazdıqsa, əmin olun ki, <code>break</code> var</li>
      <li>Dövrün neçə dəfə işlədiyini saymaq üçün <code>enumerate</code> istifadə edin</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="python-loops">
  <h2>🔄 Python Dövrlər Lab</h2>
  
  <section class="demo-section">
    <h3>1. For Dövrü Visualizer</h3>
    <div class="loop-visualizer">
      <div class="controls">
        <label>Range:</label>
        <input type="number" id="forStart" value="1" min="0" max="20" placeholder="Başlanğıc">
        <input type="number" id="forEnd" value="10" min="1" max="50" placeholder="Son">
        <input type="number" id="forStep" value="1" min="1" max="10" placeholder="Addım">
        <button onclick="runForLoop()">İşlət</button>
      </div>
      <div class="loop-display" id="forDisplay">
        <div class="iteration">for i in range(1, 10):</div>
      </div>
      <div class="code-output" id="forOutput"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. While Dövrü Simulyatoru</h3>
    <div class="while-simulator">
      <div class="scenario-selector">
        <button onclick="setWhileScenario('count')">Sayğac</button>
        <button onclick="setWhileScenario('guess')">Təxmin Oyunu</button>
        <button onclick="setWhileScenario('password')">Parol Yoxlayıcı</button>
      </div>
      <div class="while-display" id="whileDisplay">
        <div class="while-code" id="whileCode">sayac = 0<br>while sayac < 5:<br>    print(sayac)<br>    sayac += 1</div>
        <button onclick="runWhileLoop()">Adım-Adım İşlət</button>
        <div class="while-steps" id="whileSteps"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Break vs Continue</h3>
    <div class="control-flow-demo">
      <div class="flow-options">
        <label>Əməliyyat:</label>
        <select id="flowType">
          <option value="break">break (Dayandır)</option>
          <option value="continue">continue (Ötür)</option>
          <option value="normal">Normal (Heç biri)</option>
        </select>
        <label>Şərt (i == ?):</label>
        <input type="number" id="flowCondition" value="5" min="1" max="10">
        <button onclick="runFlowDemo()">Göstər</button>
      </div>
      <div class="flow-visualization" id="flowViz"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. İç-içə Dövrlər - Pattern Generator</h3>
    <div class="pattern-generator">
      <div class="pattern-controls">
        <label>Sətir sayı:</label>
        <input type="range" id="patternRows" min="1" max="10" value="5" oninput="updatePattern()">
        <span id="rowValue">5</span>
        <label>Simvol:</label>
        <select id="patternChar" onchange="updatePattern()">
          <option value="*">*</option>
          <option value="#">#</option>
          <option value="★">★</option>
          <option value="♦">♦</option>
        </select>
        <label>Tip:</label>
        <select id="patternType" onchange="updatePattern()">
          <option value="triangle">Üçbucaq</option>
          <option value="square">Kvadrat</option>
          <option value="pyramid">Piramida</option>
          <option value="diamond">Almaz</option>
        </select>
      </div>
      <pre class="pattern-output" id="patternOutput"></pre>
      <div class="pattern-code" id="patternCode"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. List Comprehension Builder</h3>
    <div class="comprehension-builder">
      <div class="builder-formula">
        <span class="bracket">[</span>
        <input type="text" id="compExpr" value="x**2" placeholder="İfadə">
        <span class="keyword">for</span>
        <input type="text" id="compVar" value="x" placeholder="Dəyişən">
        <span class="keyword">in</span>
        <input type="text" id="compRange" value="range(10)" placeholder="Aralıq">
        <span class="bracket">]</span>
        <button onclick="runComprehension()">Yarat</button>
      </div>
      <div class="comp-result" id="compResult"></div>
      <div class="comp-equivalent" id="compEquivalent"></div>
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
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.python-loops {
  max-width: 1100px;
  margin: 0 auto;
}

h2 {
  color: #00ff88;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}

h3 {
  color: #ff6b6b;
  margin-bottom: 20px;
  font-size: 22px;
  border-left: 4px solid #ff6b6b;
  padding-left: 15px;
}

.demo-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Loop Visualizer */
.loop-visualizer .controls {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.loop-visualizer label {
  color: #00ff88;
  font-weight: 600;
}

.loop-visualizer input {
  width: 80px;
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}

.loop-display {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  font-family: 'Fira Code', monospace;
  border-left: 4px solid #ffd700;
}

.iteration {
  display: inline-block;
  background: #00ff88;
  color: #000;
  padding: 5px 15px;
  border-radius: 20px;
  margin: 5px;
  font-weight: bold;
  animation: popIn 0.3s ease;
}

@keyframes popIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.code-output {
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  color: #7ee787;
  min-height: 100px;
  white-space: pre-wrap;
}

/* While Simulator */
.scenario-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.scenario-selector button {
  background: #30363d;
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.scenario-selector button:hover, .scenario-selector button.active {
  background: #00ff88;
  color: #000;
}

.while-display {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.while-code {
  background: #0d1117;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: #ff6b6b;
  margin-bottom: 20px;
  border-left: 4px solid #ff6b6b;
  line-height: 1.8;
}

.while-steps {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.step {
  background: rgba(0, 255, 136, 0.1);
  border-left: 4px solid #00ff88;
  padding: 15px;
  border-radius: 0 8px 8px 0;
  animation: slideRight 0.3s ease;
}

@keyframes slideRight {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.step-header {
  color: #00ff88;
  font-weight: bold;
  margin-bottom: 5px;
}

.step-detail {
  color: #8b949e;
  font-family: monospace;
  font-size: 14px;
}

/* Control Flow */
.flow-options {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.flow-options label {
  color: #ffd700;
  font-weight: 600;
}

.flow-options select, .flow-options input {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}

.flow-visualization {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  background: #0d1117;
  border-radius: 10px;
  min-height: 100px;
}

.flow-item {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s;
}

.flow-item.normal {
  background: #00ff88;
  color: #000;
}

.flow-item.break {
  background: #ff6b6b;
  color: #fff;
  animation: shake 0.5s;
}

.flow-item.continue {
  background: #ffd700;
  color: #000;
  opacity: 0.3;
}

.flow-item.stopped {
  background: #ff6b6b;
  color: #fff;
  position: relative;
}

.flow-item.stopped::after {
  content: 'STOP';
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ff6b6b;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Pattern Generator */
.pattern-controls {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.pattern-controls label {
  color: #00d9ff;
  font-weight: 600;
}

.pattern-controls input[type="range"] {
  width: 100%;
}

.pattern-controls select {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
}

.pattern-output {
  background: #0d1117;
  padding: 30px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: #00ff88;
  letter-spacing: 5px;
  margin-bottom: 15px;
  min-height: 200px;
}

.pattern-code {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #ff6b6b;
  border-left: 4px solid #ff6b6b;
}

/* Comprehension Builder */
.comprehension-builder {
  text-align: center;
}

.builder-formula {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  font-size: 20px;
}

.builder-formula input {
  width: 120px;
  background: #1a1a2e;
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-family: 'Fira Code', monospace;
}

.builder-formula .bracket {
  color: #ffd700;
  font-size: 28px;
  font-weight: bold;
}

.builder-formula .keyword {
  color: #ff6b6b;
  font-weight: bold;
}

.comp-result {
  background: #0d1117;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-family: 'Fira Code', monospace;
  color: #00ff88;
  font-size: 16px;
  word-break: break-all;
}

.comp-equivalent {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: #8b949e;
  font-size: 14px;
  text-align: left;
  white-space: pre-wrap;
}

button {
  background: linear-gradient(135deg, #00ff88 0%, #00b359 100%);
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 136, 0.4);
}

@media (max-width: 768px) {
  body { padding: 20px; }
  .pattern-controls { grid-template-columns: 1fr; }
  .builder-formula { flex-direction: column; }
}`,

    js: `// Python Loops Lab
let currentWhileScenario = 'count';

function runForLoop() {
  const start = parseInt(document.getElementById('forStart').value) || 0;
  const end = parseInt(document.getElementById('forEnd').value) || 10;
  const step = parseInt(document.getElementById('forStep').value) || 1;
  
  const display = document.getElementById('forDisplay');
  const output = document.getElementById('forOutput');
  
  display.innerHTML = '<div class="iteration">for i in range(' + start + ', ' + end + ', ' + step + '):</div>';
  output.textContent = '';
  
  let iterations = [];
  for (let i = start; i < end; i += step) {
    iterations.push(i);
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'iteration';
      div.textContent = 'i = ' + i;
      display.appendChild(div);
      output.textContent += 'print(' + i + ')  # ' + i + '\n';
    }, (i - start) / step * 200);
  }
}

function setWhileScenario(type) {
  currentWhileScenario = type;
  const codeDiv = document.getElementById('whileCode');
  const stepsDiv = document.getElementById('whileSteps');
  
  document.querySelectorAll('.scenario-selector button').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  stepsDiv.innerHTML = '';
  
  switch(type) {
    case 'count':
      codeDiv.innerHTML = 'sayac = 0<br>while sayac < 5:<br>    print(sayac)<br>    sayac += 1';
      break;
    case 'guess':
      codeDiv.innerHTML = 'texmin = 0<br>hedef = 7<br>while texmin != hedef:<br>    texmin = int(input("Təxmin: "))<br>print("Doğru!")';
      break;
    case 'password':
      codeDiv.innerHTML = 'parol = ""<br>while parol != "gizli":<br>    parol = input("Parol: ")<br>print("Xoş gəldiniz!")';
      break;
  }
}

function runWhileLoop() {
  const stepsDiv = document.getElementById('whileSteps');
  stepsDiv.innerHTML = '';
  
  if (currentWhileScenario === 'count') {
    let sayac = 0;
    const interval = setInterval(() => {
      if (sayac >= 5) {
        clearInterval(interval);
        const finalStep = document.createElement('div');
        finalStep.className = 'step';
        finalStep.innerHTML = '<div class="step-header">✅ Dövr bitti!</div><div class="step-detail">sayac < 5 şərti False oldu (5 < 5 = False)</div>';
        stepsDiv.appendChild(finalStep);
        return;
      }
      
      const step = document.createElement('div');
      step.className = 'step';
      step.innerHTML = '<div class="step-header">Addım ' + (sayac + 1) + '</div><div class="step-detail">sayac = ' + sayac + ' (print) → sayac += 1 (indiki: ' + (sayac + 1) + ')</div>';
      stepsDiv.appendChild(step);
      sayac++;
    }, 800);
  } else if (currentWhileScenario === 'guess') {
    const texminler = [3, 5, 7];
    let index = 0;
    const interval = setInterval(() => {
      if (index >= texminler.length) {
        clearInterval(interval);
        return;
      }
      const texmin = texminler[index];
      const step = document.createElement('div');
      step.className = 'step';
      const correct = texmin === 7;
      step.innerHTML = '<div class="step-header">Təxmin: ' + texmin + '</div><div class="step-detail">' + (correct ? '✅ Doğru! Dövr dayandı.' : '❌ Yanlış! Dövr davam edir...') + '</div>';
      step.style.borderLeftColor = correct ? '#00ff88' : '#ff6b6b';
      stepsDiv.appendChild(step);
      index++;
    }, 1000);
  } else {
    const step = document.createElement('div');
    step.className = 'step';
    step.innerHTML = '<div class="step-header">Parol yoxlanışı</div><div class="step-detail">İstifadəçi "gizli" daxil edənə qədər dövr davam edir...</div>';
    stepsDiv.appendChild(step);
  }
}

function runFlowDemo() {
  const type = document.getElementById('flowType').value;
  const condition = parseInt(document.getElementById('flowCondition').value) || 5;
  const viz = document.getElementById('flowViz');
  viz.innerHTML = '';
  
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'flow-item';
      div.textContent = i;
      
      if (i === condition) {
        if (type === 'break') {
          div.classList.add('break');
          viz.appendChild(div);
          const stopDiv = document.createElement('div');
          stopDiv.className = 'flow-item stopped';
          stopDiv.textContent = '■';
          viz.appendChild(stopDiv);
          return; // Stop here
        } else if (type === 'continue') {
          div.classList.add('continue');
          div.textContent = i + ' (skip)';
        }
      } else {
        div.classList.add('normal');
      }
      
      if (!(type === 'break' && i === condition)) {
        viz.appendChild(div);
      }
    }, i * 200);
  }
}

function updatePattern() {
  const rows = parseInt(document.getElementById('patternRows').value);
  const char = document.getElementById('patternChar').value;
  const type = document.getElementById('patternType').value;
  
  document.getElementById('rowValue').textContent = rows;
  
  let pattern = '';
  let code = '';
  
  switch(type) {
    case 'triangle':
      for (let i = 1; i <= rows; i++) {
        pattern += char.repeat(i) + '\n';
      }
      code = 'for i in range(1, ' + (rows + 1) + '):\\n    print("' + char + '" * i)';
      break;
    case 'square':
      for (let i = 0; i < rows; i++) {
        pattern += (char + ' ').repeat(rows) + '\n';
      }
      code = 'for i in range(' + rows + '):\\n    print("' + char + ' " * ' + rows + ')';
      break;
    case 'pyramid':
      for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const chars = (char + ' ').repeat(i * 2 - 1);
        pattern += spaces + chars + '\n';
      }
      code = 'for i in range(1, ' + (rows + 1) + '):\\n    print(" " * (' + rows + ' - i) + "' + char + ' " * (i * 2 - 1))';
      break;
    case 'diamond':
      for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const chars = (char + ' ').repeat(i * 2 - 1);
        pattern += spaces + chars + '\n';
      }
      for (let i = rows - 1; i >= 1; i--) {
        const spaces = ' '.repeat(rows - i);
        const chars = (char + ' ').repeat(i * 2 - 1);
        pattern += spaces + chars + '\n';
      }
      code = '# Üst hissə\\nfor i in range(1, ' + (rows + 1) + '): ...\\n# Alt hissə\\nfor i in range(' + (rows - 1) + ', 0, -1): ...';
      break;
  }
  
  document.getElementById('patternOutput').textContent = pattern;
  document.getElementById('patternCode').textContent = code;
}

function runComprehension() {
  const expr = document.getElementById('compExpr').value || 'x**2';
  const variable = document.getElementById('compVar').value || 'x';
  const rangeStr = document.getElementById('compRange').value || 'range(10)';
  
  let rangeNums = [];
  if (rangeStr.includes('range')) {
    const match = rangeStr.match(/range\\((\\d+)(?:,\\s*(\\d+))?\\)/);
    if (match) {
      const start = match[2] ? parseInt(match[1]) : 0;
      const end = match[2] ? parseInt(match[2]) : parseInt(match[1]);
      for (let i = start; i < end; i++) rangeNums.push(i);
    }
  }
  
  let results = [];
  try {
    rangeNums.forEach(x => {
      let val;
      if (expr === 'x**2') val = x * x;
      else if (expr === 'x*2') val = x * 2;
      else if (expr === 'x+1') val = x + 1;
      else if (expr === 'str(x)') val = '"' + x + '"';
      else val = x;
      results.push(val);
    });
  } catch(e) {
    results = ['Xəta'];
  }
  
  document.getElementById('compResult').textContent = '[' + results.join(', ') + ']';
  
  const normalCode = '# Normal yolla:\\nnetice = []\\nfor ' + variable + ' in ' + rangeStr + ':\\n    netice.append(' + expr + ')';
  document.getElementById('compEquivalent').textContent = normalCode;
}

// Initialize
updatePattern();
console.log('Python Loops Lab loaded!');`
  },

  exercise: {
    title: "🔢 Sadə Ədəd Analizatoru və Oyun",
    description: "For və while dövrləri istifadə edərək ədədlər üzərində analiz aparan və oyunlar oynadan proqram yazın. Sistem sadə ədədləri tapsın, ədədi orta hesablasın və istifadəçi ilə əyləncəli oyun oynasın.",
    requirements: [
      "While dövrü ilə istifadəçi 'exit' yazana qədər ədəd qəbul edin",
      "Hər ədədi list-ə əlavə edin və sadə olub-olmadığını yoxlayın (for dövrü ilə)",
      "Sadə ədədləri ayrı list-də saxlayın",
      "Cüt və tək ədədlərin sayını hesablayın",
      "Bütün ədədlərin ədədi ortasını tapın",
      "Ən böyük və ən kiçik ədədi tapın (dövr ilə, max()/min() istifadə etməyin)",
      "İstifadəçiyə statistika göstərin: ümumi say, sadə ədədlər, orta, min/max",
      "Bonus: 1-100 arası ədəd təxmin oyunu əlavə edin (while + break)"
    ],
    starterCode: `# Sadə Ədəd Analizatoru

def sade_eded_mi(n):
    """Ədədin sadə olub-olmadığını yoxlayır"""
    if n < 2:
        return False
    # Kodunuzu bura yazın (for dövrü ilə 2-dən sqrt(n)-ə qədər yoxlayın)
    pass

def statistika_hesabla(ededler):
    """Ədədlər üzrə statistika qaytarır"""
    # Kodunuzu bura yazın
    pass

def texmin_oyunu():
    """1-100 arası ədəd təxmin oyunu"""
    import random
    hedef = random.randint(1, 100)
    cehd_sayisi = 0
    
    print("\\n=== Ədəd Təxmin Oyunu ===")
    print("1-100 arası ədəd tutdum. Təxmin et!")
    
    # While dövrü ilə oyun
    # Kodunuzu bura yazın

# Əsas proqram
ededler = []
sadeler = []

print("=== Sadə Ədəd Analizatoru ===")
print("Ədəd daxil edin (çıxmaq üçün 'exit'):")

# Əsas while dövrü
# Kodunuzu bura yazın

# Nəticələri göstər
# Kodunuzu bura yazın

# Oyunu başlat
texmin_oyunu()`,
  },

  quiz: [
    {
      question: "for i in range(5) dövrü neçə dəfə işləyir?",
      options: ["4", "5", "6", "Xəta"],
      correctAnswer: 1
    },
    {
      question: "while dövründə şərt nə vaxt yoxlanılır?",
      options: ["Hər təkrardan sonra", "Hər təkrardan əvvəl", "Yalnız bir dəfə", "Heç vaxt"],
      correctAnswer: 1
    },
    {
      question: "Dövrü tam dayandırmaq üçün hansı əmr istifadə olunur?",
      options: ["stop", "exit", "break", "continue"],
      correctAnswer: 2
    },
    {
      question: "Növbəti təkrara keçmək üçün (cari təkrarı ötmək)?",
      options: ["next", "skip", "continue", "pass"],
      correctAnswer: 2
    },
    {
      question: "for i in range(10, 0, -2) nə verir?",
      options: ["10, 8, 6, 4, 2, 0", "10, 8, 6, 4, 2", "0, 2, 4, 6, 8, 10", "Xəta"],
      correctAnswer: 1
    },
    {
      question: "İç-içə dövrlərdə xarici dövr 3 dəfə, daxili 4 dəfə işləsə, ümumi neçə təkrar olar?",
      options: ["7", "12", "4", "3"],
      correctAnswer: 1
    },
    {
      question: "enumerate([a, b, c]) nə qaytarır?",
      options: ["[0, 1, 2]", "[(0, a), (1, b), (2, c)]", "[a, b, c]", "Xəta"],
      correctAnswer: 1
    },
    {
      question: "[x*2 for x in range(3)] nəticəsi?",
      options: ["[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]", "[1, 2, 3]"],
      correctAnswer: 1
    },
    {
      question: "while True: dövründən çıxmaq üçün nə etməli?",
      options: ["Ctrl+C", "break", "return", "Hamısı düzgündür"],
      correctAnswer: 3
    },
    {
      question: "for dövründə else bloku nə vaxt işləyir?",
      options: ["Həmişə", "break olmadan bitəndə", "Xəta olduqda", "Heç vaxt"],
      correctAnswer: 1
    }
  ]
};

export default topicai4;