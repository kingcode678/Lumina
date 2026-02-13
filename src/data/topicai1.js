export const topicai1 = {
  id: 1,
  title: "Python: Dəyişənlər və Məlumat Tipləri",
  duration: "90 dəq",
  isFree: true,
  
  content: `
    <h4>🐍 Python Nədir və Niyə Öyrənməliyik?</h4>
    <p>Python 1991-ci ildə Guido van Rossum tərəfindən yaradılmış yüksək səviyyəli proqramlaşdırma dilidir. "Salam Dünya" proqramını yazmaq üçün C++-da 5 sətir, Python-da isə yalnız 1 sətir kod yazmaq kifayətdir. Bu sadəlik onu süni intellekt, data elmi, veb inkişafı və avtomatlaşdırma üçün ən populyar dil edir.</p>
    
    <p><strong>Python-un Üstünlükləri:</strong></p>
    <ul>
      <li>🎯 <strong>Sadə sintaksis:</strong> İngilis dilinə yaxın, asan oxunur</li>
      <li>🚀 <strong>Çox yönlü:</strong> Həm veb, həm AI, həm də mobil tətbiqlər</li>
      <li>📦 <strong>Zəngin kitabxanalar:</strong> Hazır funksiyalar çoxdur</li>
      <li>👥 <strong>Böyük icma:</strong> Hər problemin həlli internetdə var</li>
    </ul>

    <h4>💻 İlk Python Proqramımız</h4>
    <p>Python kodunu yazmaq üçün iki yol var:</p>
    
    <p><strong>1. Python Shell (İnteraktiv rejim):</strong></p>
    <p>Komputerinizdə terminal/cmd açın və <code>python</code> yazın. Aşağıdakı kimi <code>>>></code> işarəsi görünəcək. Bu, Python sizin dediklərinizi dinləyir deməkdir.</p>
    
    <pre><code>>>> print("Salam Dünya!")
Salam Dünya!</code></pre>

    <p><strong>2. Fayl yazmaq:</strong></p>
    <p>Notepad və ya VS Code açın, kodu yazın və <code>salam.py</code> adı ilə yadda saxlayın. Sonra terminalda <code>python salam.py</code> yazaraq işlədin.</p>

    <h4>📦 Dəyişənlər (Variables) - Məlumatların Qutuları</h4>
    <p>Dəyişəni qutu kimi təsəvvür edin. Qutunun üstünə ad yazırsınız (məsələn, "yaş"), içərisinə isə dəyər qoyursunuz (məsələn, 25). Proqramda bu qutunun adını çağırdıqda, içindəki dəyəri görürsünüz.</p>
    
    <pre><code># Dəyişən yaratmaq çox asandır
ad = "Əli"           # Sətir (mətn) tipi
yas = 25             # Tam ədəd tipi
boy = 1.75           # Kəsr ədəd tipi
telebe_mi = True     # Məntiqi tip (True/False)

# Dəyərləri çap edək
print(ad)            # Əli
print(yas)           # 25
print(boy)           # 1.75
print(telebe_mi)     # True</code></pre>

    <p><strong>🔑 Vacib Qaydalar:</strong></p>
    <ul>
      <li>Dəyişən adı rəqəmlə başlaya <strong>bilməz</strong> (yas1 olar, 1yas olmaz)</li>
      <li>Boşluq olmaz (tam ad yox, tam_ad və ya tamAd)</li>
      <li>Python böyük-kiçik hərfə həssasdır (Yas və yas fərqlidir)</li>
      <li>Xüsusi sözlərdən istifadə etməyin (if, for, while, class və s.)</li>
    </ul>

    <h4>🎨 Məlumat Tipləri (Data Types)</h4>
    <p>Hər məlumatın öz tipi var. Bu, kompüterə məlumatın necə saxlanılacağını və işlənəcəyini deyir.</p>

    <p><strong>1. str (String - Sətir):</strong></p>
    <p>Mətnləri saxlayır. Dırnaq işarələri içində yazılır.</p>
    <pre><code>ad = "Səməd"
seher = 'Bakı'
metn = """Bu
çoxsətirli
mətndir"""</code></pre>

    <p><strong>2. int (Integer - Tam ədəd):</strong></p>
    <p>Onluq hissəsi olmayan ədədlər.</p>
    <pre><code>yas = 20
telebe_sayi = -150
il = 2024</code></pre>

    <p><strong>3. float (Kəsr ədəd):</strong></p>
    <p>Onluq hissəsi olan ədədlər.</p>
    <pre><code>qiymet = 19.99
pi = 3.14159
temperatur = -5.5</code></pre>

    <p><strong>4. bool (Boolean - Məntiqi):</strong></p>
    <p>Yalnız iki dəyəri ola bilər: True (Doğru) və ya False (Yanlış).</p>
    <pre><code>aktivdir = True
qebul_oldu = False</code></pre>

    <p><strong>5. NoneType (Boş dəyər):</strong></p>
    <p>Dəyər yoxdur deməkdir.</p>
    <pre><code>netice = None    # Hələ dəyər verməmişik</code></pre>

    <h4>🔍 Tip Yoxlama və Çevirmə</h4>
    <p>Bəzən məlumatın tipini bilmək və ya dəyişmək lazım olur.</p>
    
    <pre><code># Tipi öyrənmək
yas = 25
print(type(yas))        # <class 'int'>

ad = "25"
print(type(ad))         # <class 'str'>

# Tip çevirmə (Casting)
yas_str = "25"
yas_int = int(yas_str)      # 25 (rəqəm oldu)
yas_float = float(yas_str)  # 25.0 (kəsr oldu)

qiymet = 19.99
qiymet_int = int(qiymet)    # 19 (onluq hissə atılır!)

# String-ə çevirmə
yas = 25
yas_text = str(yas)         # "25" (mətn oldu)</code></pre>

    <h4>✏️ Əsas Əməliyyatlar</h4>
    
    <p><strong>Riyazi Əməliyyatlar:</strong></p>
    <pre><code>a = 10
b = 3

print(a + b)     # 13 (toplama)
print(a - b)     # 7 (çıxma)
print(a * b)     # 30 (vurma)
print(a / b)     # 3.333... (bölmə, həmişə float)
print(a // b)    # 3 (tam bölmə, onluqsuz)
print(a % b)     # 1 (qalıq)
print(a ** b)    # 1000 (qüvvət - 10-un 3-cü dərəcəsi)</code></pre>

    <p><strong>String Əməliyyatları:</strong></p>
    <pre><code>ad = "Səməd"
soyad = "Hüseynov"

# Birləşdirmə (Concatenation)
tam_ad = ad + " " + soyad    # "Səməd Hüseynov"

# Təkrarlama
print("Salam! " * 3)         # "Salam! Salam! Salam! "

# Uzunluq
print(len(tam_ad))           # 14 (simvol sayı)</code></pre>

    <h4>📝 İstifadəçidən Məlumat Alma (input)</h4>
    <p>Proqramımız istifadəçi ilə danışa bilsin.</p>
    <pre><code># input() həmişə string qaytarır!
ad = input("Adınızı daxil edin: ")
yas = input("Yaşınızı daxil edin: ")

print("Salam, " + ad + "! Siz " + yas + " yaşındasınız.")

# Yaşı rəqəmə çevirək
yas_int = int(yas)
gelen_il = 2024 - yas_int
print("Siz " + str(gelen_il) + "-ci ildə doğulmusunuz.")</code></pre>

    <h4>⚠️ Tez-tez Yaranan Səhvlər</h4>
    <ul>
      <li><code>yas = "25"</code> sonra <code>yas + 5</code> yazmaq (string + ədəd = xəta)</li>
      <li><code>int("25.5")</code> - əvvəlcə float-a çevirmək lazımdır</li>
      <li>Dəyişən adında boşluq qoymaq (<code>tam ad</code> yox, <code>tam_ad</code>)</li>
      <li><code>print = 5</code> yazıb sonra print funksiyasını sıradan çıxartmaq</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="python-lab">
  <h2>🐍 Python Variables Lab</h2>
  
  <section class="demo-section">
    <h3>1. Dəyişən Tipləri Demo</h3>
    <div class="code-playground">
      <pre id="varCode"># Dəyişənlər yaradaq
ad = "Leyla"
yas = 22
boy = 1.68
telebedir = True

# Tipləri göstərək
print(type(ad))
print(type(yas))
print(type(boy))
print(type(telebedir))</pre>
      <button onclick="runVarDemo()">Run Python</button>
    </div>
    <div class="output" id="varOutput">Nəticə burada görünəcək...</div>
  </section>

  <section class="demo-section">
    <h3>2. Tip Çevirmə Aləti</h3>
    <div class="converter-tool">
      <input type="text" id="convertInput" placeholder="Dəyər daxil edin (məs: 25 və ya 3.14)">
      <div class="button-group">
        <button onclick="convertToInt()">int()</button>
        <button onclick="convertToFloat()">float()</button>
        <button onclick="convertToStr()">str()</button>
        <button onclick="checkType()">type()</button>
      </div>
      <div class="output" id="convertOutput"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Riyazi Əməliyyatlar</h3>
    <div class="calculator">
      <input type="number" id="num1" value="15" placeholder="1-ci ədəd">
      <select id="operation">
        <option value="+">+ (toplama)</option>
        <option value="-">- (çıxma)</option>
        <option value="*">* (vurma)</option>
        <option value="/">/ (bölmə)</option>
        <option value="//">// (tam bölmə)</option>
        <option value="%">% (qalıq)</option>
        <option value="**">** (qüvvət)</option>
      </select>
      <input type="number" id="num2" value="4" placeholder="2-ci ədəd">
      <button onclick="calculate()">= Hesabla</button>
      <div class="result-box" id="calcResult"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. String Əməliyyatları</h3>
    <div class="string-ops">
      <input type="text" id="strInput" value="Python" placeholder="Mətn daxil edin">
      <div class="button-group">
        <button onclick="strUpper()">upper()</button>
        <button onclick="strLower()">lower()</button>
        <button onclick="strLen()">len()</button>
        <button onclick="strRepeat()">* 3 (təkrarla)</button>
      </div>
      <div class="output" id="strOutput"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. İnteraktiv Kalkulyator</h3>
    <div class="interactive-calc">
      <p class="info">Dəyərləri daxil edin və nəticəni görün:</p>
      <div class="input-row">
        <label>Adınız:</label>
        <input type="text" id="userName" placeholder="məs: Əli">
      </div>
      <div class="input-row">
        <label>Doğulduğunuz il:</label>
        <input type="number" id="birthYear" placeholder="məs: 2000">
      </div>
      <button onclick="calculateAge()">Yaşımı Hesabla</button>
      <div class="output highlight" id="ageOutput"></div>
    </div>
  </section>
</div>`,

    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #fff;
  padding: 40px;
  line-height: 1.6;
}

.python-lab {
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  color: #ffd700;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
}

h3 {
  color: #00d4ff;
  margin-bottom: 15px;
  font-size: 22px;
  border-bottom: 2px solid #00d4ff;
  padding-bottom: 8px;
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

.code-playground {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

pre {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 14px;
  overflow-x: auto;
  border-left: 4px solid #ffd700;
  color: #d4d4d4;
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.button-group {
  display: flex;
  gap: 10px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.button-group button {
  padding: 8px 16px;
  font-size: 13px;
}

.output {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  margin-top: 15px;
  font-family: 'Fira Code', monospace;
  min-height: 60px;
  white-space: pre-wrap;
  border: 1px solid #30363d;
  color: #7ee787;
  font-size: 14px;
}

.output.highlight {
  background: #238636;
  color: white;
  font-size: 16px;
}

input, select {
  background: #21262d;
  border: 1px solid #30363d;
  color: #c9d1d9;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  margin-right: 10px;
  min-width: 150px;
}

input:focus, select:focus {
  outline: none;
  border-color: #58a6ff;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.3);
}

.calculator, .converter-tool, .string-ops {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.result-box {
  background: #ffd700;
  color: #000;
  padding: 15px 25px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  min-width: 100px;
  text-align: center;
}

.input-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 15px;
}

.input-row label {
  min-width: 150px;
  color: #00d4ff;
  font-weight: 600;
}

.info {
  color: #8b949e;
  margin-bottom: 15px;
  font-style: italic;
}

@media (max-width: 768px) {
  body { padding: 20px; }
  .calculator, .converter-tool { flex-direction: column; align-items: stretch; }
  input, select { width: 100%; margin-right: 0; margin-bottom: 10px; }
}`,

    js: `// Python Variables Lab JavaScript
function runVarDemo() {
  const code = document.getElementById('varCode').textContent;
  const output = document.getElementById('varOutput');
  
  // Simulating Python variable types
  let result = ">>> Python Interpreter\\n";
  result += ">>> ad = 'Leyla'\\n";
  result += ">>> yas = 22\\n";
  result += ">>> boy = 1.68\\n";
  result += ">>> telebedir = True\\n\\n";
  result += ">>> print(type(ad))\\n";
  result += "<class 'str'>\\n\\n";
  result += ">>> print(type(yas))\\n";
  result += "<class 'int'>\\n\\n";
  result += ">>> print(type(boy))\\n";
  result += "<class 'float'>\\n\\n";
  result += ">>> print(type(telebedir))\\n";
  result += "<class 'bool'>\\n";
  
  output.textContent = result;
  console.log("Variable types demo executed");
}

function convertToInt() {
  const input = document.getElementById('convertInput').value;
  const output = document.getElementById('convertOutput');
  
  if (input === '') {
    output.textContent = "Xəta: Dəyər daxil edin!";
    return;
  }
  
  const result = parseInt(input);
  if (isNaN(result)) {
    output.textContent = \`Xəta: "\${input}" tam ədədə çevrilə bilməz!\`;
  } else {
    output.textContent = \`int("\${input}") = \${result} (tip: int)\`;
  }
}

function convertToFloat() {
  const input = document.getElementById('convertInput').value;
  const output = document.getElementById('convertOutput');
  
  if (input === '') {
    output.textContent = "Xəta: Dəyər daxil edin!";
    return;
  }
  
  const result = parseFloat(input);
  if (isNaN(result)) {
    output.textContent = \`Xəta: "\${input}" kəsr ədədə çevrilə bilməz!\`;
  } else {
    output.textContent = \`float("\${input}") = \${result} (tip: float)\`;
  }
}

function convertToStr() {
  const input = document.getElementById('convertInput').value;
  const output = document.getElementById('convertOutput');
  const result = String(input);
  output.textContent = \`str(\${input === '' ? '""' : input}) = "\${result}" (tip: str, uzunluq: \${result.length})\`;
}

function checkType() {
  const input = document.getElementById('convertInput').value;
  const output = document.getElementById('convertOutput');
  
  let typeName;
  let pythonType;
  
  if (input === '') {
    typeName = 'empty';
    pythonType = 'str (boş sətir)';
  } else if (!isNaN(input) && input.includes('.')) {
    typeName = 'number';
    pythonType = 'float';
  } else if (!isNaN(input)) {
    typeName = 'number';
    pythonType = 'int';
  } else if (input === 'True' || input === 'False') {
    typeName = 'boolean';
    pythonType = 'bool';
  } else {
    typeName = 'string';
    pythonType = 'str';
  }
  
  output.innerHTML = \`Dəyər: "\${input}"<br>Python tipi: <strong>\${pythonType}</strong><br>JavaScript tipi: \${typeof input}\`;
}

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  const resultDiv = document.getElementById('calcResult');
  
  let result;
  let explanation = '';
  
  switch(operation) {
    case '+':
      result = num1 + num2;
      explanation = \`\${num1} + \${num2} = \${result}\`;
      break;
    case '-':
      result = num1 - num2;
      explanation = \`\${num1} - \${num2} = \${result}\`;
      break;
    case '*':
      result = num1 * num2;
      explanation = \`\${num1} * \${num2} = \${result}\`;
      break;
    case '/':
      result = num1 / num2;
      explanation = \`\${num1} / \${num2} = \${result} (həmişə float!)\`;
      break;
    case '//':
      result = Math.floor(num1 / num2);
      explanation = \`\${num1} // \${num2} = \${result} (tam hissə)\`;
      break;
    case '%':
      result = num1 % num2;
      explanation = \`\${num1} % \${num2} = \${result} (qalıq)\`;
      break;
    case '**':
      result = Math.pow(num1, num2);
      explanation = \`\${num1} ** \${num2} = \${result} (\${num1} üstü \${num2})\`;
      break;
  }
  
  resultDiv.innerHTML = \`<div style="font-size: 18px; margin-bottom: 10px;">\${explanation}</div><div style="font-size: 32px;">\${result}</div>\`;
}

function strUpper() {
  const input = document.getElementById('strInput').value;
  document.getElementById('strOutput').textContent = \`"\${input}".upper() = "\${input.toUpperCase()}"\`;
}

function strLower() {
  const input = document.getElementById('strInput').value;
  document.getElementById('strOutput').textContent = \`"\${input}".lower() = "\${input.toLowerCase()}"\`;
}

function strLen() {
  const input = document.getElementById('strInput').value;
  document.getElementById('strOutput').textContent = \`len("\${input}") = \${input.length} (simvol sayı)\`;
}

function strRepeat() {
  const input = document.getElementById('strInput').value;
  const repeated = input.repeat(3);
  document.getElementById('strOutput').textContent = \`"\${input}" * 3 = "\${repeated}"\`;
}

function calculateAge() {
  const name = document.getElementById('userName').value || "Dost";
  const birthYear = parseInt(document.getElementById('birthYear').value);
  const output = document.getElementById('ageOutput');
  
  if (!birthYear || isNaN(birthYear)) {
    output.textContent = "Zəhmət olmasa, doğulduğunuz ili düzgün daxil edin!";
    output.style.background = "#da3633";
    return;
  }
  
  const currentYear = 2024;
  const age = currentYear - birthYear;
  
  output.style.background = "#238636";
  output.innerHTML = \`Salam, \${name}!\\nSiz \${age} yaşındasınız.\\n\\nPython kodu:\\nadi = "\${name}"\\ndogum_ili = \${birthYear}\\nyas = \${currentYear} - dogum_ili\\nprint("Salam, " + adi + "!")\\nprint("Siz " + str(yas) + " yasindasiniz.")\`;
}

// Initialize
console.log('Python Variables Lab loaded successfully!');`
  },

  exercise: {
    title: "🏦 Bank Hesabı İdarəetmə Sistemi",
    description: "Python dəyişənlərindən istifadə edərək sadə bank hesabı sistemi yaradın. İstifadəçinin adı, hesab nömrəsi, balansı və valyutası olsun. Əməliyyatlar: balans göstərmək, pul yatırmaq, pul çəkmək.",
    requirements: [
      "5 dəyişən təyin edin: musteri_ad, hesab_nomre, balans, valyuta, aktivdir",
      "String, int, float, bool tiplərindən istifadə edin",
      "input() ilə istifadəçidən məlumat alın",
      "Pul yatırma və çəkmə əməliyyatları üçün riyazi operatorlar istifadə edin",
      "Tip çevirmələrini (str() və float()) düzgün tətbiq edin",
      "Əməliyyatların nəticəsini formatlı şəkildə göstərin",
      "Ən azı 2 fərqli valyuta dəstəkləyin (AZN, USD)",
      "Əməliyyat tarixini saxlayın (string formatında)"
    ],
    starterCode: `# Bank Hesabı İdarəetmə Sistemi
# Bu hissəni tamamlayın

# 1. Dəyişənləri elan edin
musteri_ad = 
hesab_nomre = 
balans = 
valyuta = 
aktivdir = 

# 2. İstifadəçidən məlumat alın
print("=== Bank Sistemine Xos Geldiniz ===")
# Kodunuzu bura yazin...

# 3. Əməliyyatlar
# Pul yatırma
# Pul çəkmə
# Balans göstərmə

# Nümunə çıxış:
# Ad: Əli Məmmədov
# Hesab: 1234567890
# Balans: 1500.50 AZN
# Status: Aktiv`,
  },

  quiz: [
    {
      question: "Python-da dəyişən elan etmək üçün hansı açar sözdən istifadə olunur?",
      options: ["var", "let", "Heç biri (birbaşa ad = dəyər)", "const"],
      correctAnswer: 2
    },
    {
      question: "a = 5, b = 2 olduqda a // b nəticəsi nədir?",
      options: ["2.5", "2", "3", "2.0"],
      correctAnswer: 1
    },
    {
      question: "input() funksiyası hansı tipdə dəyər qaytarır?",
      options: ["int", "float", "str (string)", "bool"],
      correctAnswer: 2
    },
    {
      question: "float('15.7') funksiyasının nəticəsi necə olacaq?",
      options: ["15", "15.7", "'15.7'", "Xəta"],
      correctAnswer: 1
    },
    {
      question: "len('Python') funksiyası nə qaytarır?",
      options: ["5", "6", "7", "'Python'"],
      correctAnswer: 1
    },
    {
      question: "Hansı dəyişən adı Python-da düzgündür?",
      options: ["2ad", "ad soyad", "ad_soyad", "if"],
      correctAnswer: 2
    },
    {
      question: "type(3.14) nəticəsi nədir?",
      options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
      correctAnswer: 1
    },
    {
      question: "a = '10' və b = 5 olduqda a + str(b) nəticəsi nədir?",
      options: ["15", "'105'", "Xəta", "'10 5'"],
      correctAnswer: 1
    },
    {
      question: "True və False hansı tipə aiddir?",
      options: ["str", "int", "bool", "logic"],
      correctAnswer: 2
    },
    {
      question: "10 % 3 əməliyyatının nəticəsi nədir?",
      options: ["3", "1", "0", "3.33"],
      correctAnswer: 1
    }
  ]
};

export default topicai1;