export const topicai3 = {
  id: 3,
  title: "Şərt Operatorları (if/else/elif)",
  duration: "95 dəq",
  isFree: false,
  
  content: `
    <h4>🤔 Proqramlaşdırmada Qərar Vermə</h4>
    <p>Həyatımızda hər gün seçimlər edirik: "Əgər yağış yağırsa, çətir götür; yoxsa, götürmə". Proqramlar da eynilə belə işləyir - müəyyən şərtlərə görə fərqli əməliyyatlar yerinə yetirir. Python-da bunu <code>if</code>, <code>elif</code> və <code>else</code> ilə edirik.</p>

    <h4>🎯 if Operatoru - Əsas Şərt</h4>
    <p><code>if</code> "əgər" deməkdir. Əgər şərt doğrudursa (True), içindəki kod işləyir; yoxdursa, keçir.</p>
    
    <pre><code># Ən sadə if nümunəsi
yas = 18

if yas >= 18:
    print("Siz yetkinlik yaşına çatmısınız!")
    print("Səs verə bilərsiniz.")

print("Proqram davam edir...")  # Bu həmişə çap olunur

# Nəticə:
# Siz yetkinlik yaşına çatmısınız!
# Səs verəbilərsiniz.
# Proqram davam edir...</code></pre>

    <p><strong>🔑 Vacib Qayda: Indentation (Boşluq)</strong></p>
    <p>Python digər dillərdən fərqli olaraq <code>{}</code> işarələrindən istifadə etmir. Əvəzində, <code>if</code>-dən sonrakı kodlar 4 boşluq (1 Tab) içəridən yazılır. Bu Python-un ən böyük xüsusiyyətidir!</p>
    
    <pre><code># Düzgün
if yas > 18:
    print("Yetkin")
    print("Təbriklər!")

# Yanlış - IndentationError verər
if yas > 18:
print("Yetkin")      # ❌ Boşluq yoxdur!
    print("Təbriklər!")  # ❌ Fərqli boşluq!</code></pre>

    <h4>⚖️ Müqayisə Operatorları</h4>
    <p>Şərtlər yaratmaq üçün bu operatorlardan istifadə edirik:</p>
    
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">Operator</th>
        <th style="padding: 12px;">Mənası</th>
        <th style="padding: 12px;">Nümunə</th>
        <th style="padding: 12px;">Nəticə</th>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>==</code></td>
        <td style="padding: 10px;">Bərabərdir</td>
        <td style="padding: 10px;">5 == 5</td>
        <td style="padding: 10px;">True</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>!=</code></td>
        <td style="padding: 10px;">Bərabər deyil</td>
        <td style="padding: 10px;">5 != 3</td>
        <td style="padding: 10px;">True</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>></code></td>
        <td style="padding: 10px;">Böyükdür</td>
        <td style="padding: 10px;">10 > 5</td>
        <td style="padding: 10px;">True</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code><</code></td>
        <td style="padding: 10px;">Kiçikdir</td>
        <td style="padding: 10px;">3 < 8</td>
        <td style="padding: 10px;">True</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>>=</code></td>
        <td style="padding: 10px;">Böyük və ya bərabər</td>
        <td style="padding: 10px;">5 >= 5</td>
        <td style="padding: 10px;">True</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code><=</code></td>
        <td style="padding: 10px;">Kiçik və ya bərabər</td>
        <td style="padding: 10px;">4 <= 10</td>
        <td style="padding: 10px;">True</td>
      </tr>
    </table>

    <h4>🔄 else - Alternativ Yol</h4>
    <p>Əgər <code>if</code> şərti ödənməsə, <code>else</code> bloku işləyir. "Ya bu, ya da o" deməkdir.</p>
    
    <pre><code>istifadeci_adi = "admin"
daxil_edilen = input("İstifadəçi adı: ")

if daxil_edilen == istifadeci_adi:
    print("Xoş gəldiniz, Admin!")
    print("Sizə tam giriş icazəsi verildi.")
else:
    print("Xəta: Yanlış istifadəçi adı!")
    print("Zəhmət olmasa, yenidən cəhd edin.")</code></pre>

    <h4>🎚️ elif - Çoxlu Şərtlər</h4>
    <p>Bir neçə şərt yoxlamaq lazımdırsa, <code>elif</code> (else if) istifadə edirik. "Əgər bu deyilsə, buna bax" deməkdir.</p>
    
    <pre><code>bal = int(input("Balınızı daxil edin (0-100): "))

if bal >= 90:
    qiymet = "A (Əla)"
elif bal >= 80:
    qiymet = "B (Çox Yaxşı)"
elif bal >= 70:
    qiymet = "C (Yaxşı)"
elif bal >= 60:
    qiymet = "D (Kafi)"
elif bal >= 50:
    qiymet = "E (Qənaətbəxş)"
else:
    qiymet = "F (Kəsildiniz)"

print(f"Sizin qiymətiniz: {qiymet}")

# İşləmə qaydası:
# 1. İlk şərt yoxlanır (bal >= 90)
# 2. Əgər False-dursa, növbətiyə keçir (bal >= 80)
# 3. True tapılanda o blok işləyir, qalanları yoxlanmır!</code></pre>

    <h4>🔗 Məntiqi Operatorlar (and, or, not)</h4>
    <p>Bir neçə şərti birləşdirmək üçün:</p>
    
    <pre><code># and - Hər iki şərt də doğru olmalıdır
yas = 25
vesiqesi_var = True

if yas >= 18 and vesiqesi_var:
    print("Sürücülük vəsiqəsi ala bilərsiniz!")
# Hər iki şərt True olmalıdır

# or - Ən azı biri doğru olmalıdır
gun = "şənbə"
istirahet_gunudur = (gun == "şənbə") or (gun == "bazar")
print(istirahet_gunudur)  # True

# not - Əksinə çevirir
yagis_yagir = False
if not yagis_yagir:
    print("Hava yağmursuzdur, gəzintiyə çıxa bilərsiniz!")

# Qarışıq nümunə
istifadeci = "admin"
parol = "1234"

if (istifadeci == "admin" and parol == "1234") or (istifadeci == "superadmin"):
    print("Giriş uğurlu!")
else:
    print("Giriş uğursuz!")</code></pre>

    <h4>🎯 İç-içə if-lər (Nested Conditions)</h4>
    <p>Bir şərtin içində başqa şərt ola bilər:</p>
    
    <pre><code>cins = input("Cinsiniz (k/q): ")
yas = int(input("Yaşınız: "))

if cins == "k":
    if yas >= 65:
        print("Siz pensiya yaşına çatmısınız.")
    else:
        qalib_il = 65 - yas
        print(f"Pensiyaya {qalib_il} il qalıb.")
else:  # qadın
    if yas >= 60:
        print("Siz pensiya yaşına çatmısınız.")
    else:
        qalib_il = 60 - yas
        print(f"Pensiyaya {qalib_il} il qalıb.")</code></pre>

    <h4>🛡️ Ternary Operator (Qısa Yazılış)</h4>
    <p>Bir sətirdə sadə if-else yazmaq üçün:</p>
    
    <pre><code># Normal yazılış
yas = 20
if yas >= 18:
    status = "Yetkin"
else:
    status = "Yetkin deyil"

# Qısa yazılış (Ternary)
status = "Yetkin" if yas >= 18 else "Yetkin deyil"

# Nümunə
eded = 15
netice = "Cüt" if eded % 2 == 0 else "Tək"
print(netice)  # Tək</code></pre>

    <h4>⚠️ Tez-tez Yaranan Səhvlər</h4>
    <ul>
      <li><code>=</code> (təyin) əvəzinə <code>==</code> (müqayisə) yazmaq</li>
      <li><code>if yas > 18 and < 65</code> yazmaq (düzgün: <code>if 18 < yas < 65</code>)</li>
      <li>İndentation (boşluq) səhvləri - Python ən çox bu səbəbdən şikayət edir</li>
      <li><code>elif</code> yazıb <code>else</code> yazmamaq (son şərt üçün)</li>
      <li>Şərtləri düzgün sıralamamaq (əvvəl xüsusi, sonra ümumi olmalıdır)</li>
    </ul>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Şərtləri sadə saxlayın, çətinləşsə funksiyaya ayırın</li>
      <li><code>if x == True</code> əvəzinə sadəcə <code>if x:</code> yazın</li>
      <li>Bir neçə <code>elif</code> varsa, bəlkə <code>dictionary</code> istifadə edin?</li>
      <li>Şərhlər əlavə edin ki, gələcəkdə niyə bu şərti qoyduğunuzu xatırlayasınız</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="python-conditions">
  <h2>⚖️ Python Şərt Operatorları Lab</h2>
  
  <section class="demo-section">
    <h3>1. İlkin Qiymət Hesablayıcı</h3>
    <div class="grade-calculator">
      <div class="input-group">
        <label>Balınız (0-100):</label>
        <input type="number" id="examScore" min="0" max="100" value="75">
        <button onclick="calculateGrade()">Qiyməti Hesabla</button>
      </div>
      <div class="result-display" id="gradeResult">
        <div class="grade-letter">-</div>
        <div class="grade-desc">Bal daxil edin</div>
      </div>
      <div class="code-preview" id="gradeCode">if bal >= 90: ...</div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. BMI (Bədən Kütlə İndeksi) Kalkulyatoru</h3>
    <div class="bmi-calculator">
      <div class="inputs-row">
        <div>
          <label>Çəki (kg):</label>
          <input type="number" id="weight" value="70">
        </div>
        <div>
          <label>Boy (m):</label>
          <input type="number" id="height" step="0.01" value="1.75">
        </div>
        <button onclick="calculateBMI()">BMI Hesabla</button>
      </div>
      <div class="bmi-result" id="bmiResult">
        <div class="bmi-value">-</div>
        <div class="bmi-category">-</div>
        <div class="bmi-bar">
          <div class="bmi-indicator" id="bmiIndicator"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Məntiqi Operatorlar Visualizer</h3>
    <div class="logic-visualizer">
      <div class="logic-gates">
        <div class="gate-box">
          <h4>AND (və)</h4>
          <div class="checkboxes">
            <label><input type="checkbox" id="and1" onchange="updateLogic()"> Şərt 1</label>
            <label><input type="checkbox" id="and2" onchange="updateLogic()"> Şərt 2</label>
          </div>
          <div class="logic-result" id="andResult">False</div>
          <code>if sert1 and sert2:</code>
        </div>
        <div class="gate-box">
          <h4>OR (və ya)</h4>
          <div class="checkboxes">
            <label><input type="checkbox" id="or1" onchange="updateLogic()"> Şərt 1</label>
            <label><input type="checkbox" id="or2" onchange="updateLogic()"> Şərt 2</label>
          </div>
          <div class="logic-result" id="orResult">False</div>
          <code>if sert1 or sert2:</code>
        </div>
        <div class="gate-box">
          <h4>NOT (deyil)</h4>
          <div class="checkboxes">
            <label><input type="checkbox" id="not1" onchange="updateLogic()"> Şərt</label>
          </div>
          <div class="logic-result" id="notResult">True</div>
          <code>if not sert:</code>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Yaş Kateqoriyası Təyin edici</h3>
    <div class="age-categorizer">
      <input type="range" id="ageSlider" min="0" max="100" value="25" oninput="updateAgeCategory()">
      <div class="age-display">Yaş: <span id="ageValue">25</span></div>
      <div class="category-result" id="ageCategory">Gənc yetkin</div>
      <div class="nested-code" id="ageCode">if yas < 13: ...</div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Giriş Sistemi Simulyatoru</h3>
    <div class="login-simulator">
      <div class="login-form">
        <input type="text" id="loginUser" placeholder="İstifadəçi adı">
        <input type="password" id="loginPass" placeholder="Şifrə">
        <button onclick="checkLogin()">Daxil ol</button>
      </div>
      <div class="login-logs" id="loginLogs">
        <div class="log-entry info">Sistem hazırdır...</div>
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
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.python-conditions {
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  color: #00d9ff;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}

h3 {
  color: #ff6b6b;
  margin-bottom: 20px;
  font-size: 22px;
  border-left: 4px solid #ff6b6b;
  padding-left: 15px;
}

h4 {
  color: #4ecdc4;
  margin-bottom: 10px;
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

/* Grade Calculator */
.grade-calculator {
  text-align: center;
}

.input-group {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.input-group label {
  font-weight: 600;
  color: #4ecdc4;
}

input[type="number"], input[type="text"], input[type="password"] {
  background: #0f3460;
  border: 2px solid #1a1a2e;
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  width: 150px;
  transition: all 0.3s;
}

input:focus {
  outline: none;
  border-color: #00d9ff;
  box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.2);
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.result-display {
  background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
  padding: 30px;
  border-radius: 12px;
  margin: 20px 0;
  border: 2px solid #00d9ff;
}

.grade-letter {
  font-size: 72px;
  font-weight: bold;
  color: #00d9ff;
  text-shadow: 0 0 20px rgba(0, 217, 255, 0.8);
}

.grade-desc {
  font-size: 20px;
  color: #4ecdc4;
  margin-top: 10px;
}

.code-preview {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #7ee787;
  text-align: left;
  border-left: 4px solid #ffd700;
}

/* BMI Calculator */
.bmi-calculator {
  background: rgba(0, 0, 0, 0.2);
  padding: 25px;
  border-radius: 12px;
}

.inputs-row {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.inputs-row > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.inputs-row label {
  color: #4ecdc4;
  font-weight: 600;
  font-size: 14px;
}

.bmi-result {
  text-align: center;
  padding: 20px;
  background: #0f3460;
  border-radius: 12px;
}

.bmi-value {
  font-size: 48px;
  font-weight: bold;
  color: #00d9ff;
}

.bmi-category {
  font-size: 24px;
  color: #4ecdc4;
  margin: 10px 0;
}

.bmi-bar {
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, 
    #3498db 0%, #3498db 18.5%, 
    #2ecc71 18.5%, #2ecc71 25%, 
    #f1c40f 25%, #f1c40f 30%, 
    #e74c3c 30%, #e74c3c 100%);
  border-radius: 15px;
  position: relative;
  margin-top: 20px;
  overflow: hidden;
}

.bmi-indicator {
  position: absolute;
  width: 4px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
  transition: left 0.5s;
  left: 50%;
}

/* Logic Visualizer */
.logic-gates {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gate-box {
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s;
}

.gate-box:hover {
  border-color: #00d9ff;
}

.checkboxes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
  align-items: flex-start;
  padding-left: 20px;
}

.checkboxes label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #eaeaea;
}

.checkboxes input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #00d9ff;
}

.logic-result {
  font-size: 28px;
  font-weight: bold;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  background: #e74c3c;
  color: white;
  transition: all 0.3s;
}

.logic-result.true {
  background: #2ecc71;
}

.gate-box code {
  display: block;
  background: #1a1a2e;
  padding: 10px;
  border-radius: 6px;
  font-size: 13px;
  color: #ffd700;
  margin-top: 10px;
}

/* Age Categorizer */
.age-categorizer {
  text-align: center;
  padding: 20px;
}

input[type="range"] {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #0f3460;
  outline: none;
  -webkit-appearance: none;
  margin: 20px 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #00d9ff;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.8);
}

.age-display {
  font-size: 24px;
  color: #4ecdc4;
  margin-bottom: 15px;
}

.age-display span {
  color: #00d9ff;
  font-weight: bold;
  font-size: 32px;
}

.category-result {
  font-size: 28px;
  font-weight: bold;
  color: #ffd700;
  padding: 20px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 15px;
  border: 2px solid #ffd700;
}

.nested-code {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: #7ee787;
  text-align: left;
  white-space: pre-wrap;
}

/* Login Simulator */
.login-simulator {
  max-width: 400px;
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.login-form input {
  width: 100%;
}

.login-logs {
  background: #0f3460;
  padding: 15px;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
}

.log-entry {
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.log-entry.success {
  background: rgba(46, 204, 113, 0.2);
  border-left: 4px solid #2ecc71;
  color: #2ecc71;
}

.log-entry.error {
  background: rgba(231, 76, 60, 0.2);
  border-left: 4px solid #e74c3c;
  color: #e74c3c;
}

.log-entry.info {
  background: rgba(52, 152, 219, 0.2);
  border-left: 4px solid #3498db;
  color: #3498db;
}

@media (max-width: 768px) {
  body { padding: 20px; }
  .inputs-row { flex-direction: column; align-items: stretch; }
  .grade-letter { font-size: 48px; }
}`,

    js: `// Python Conditions Lab
function calculateGrade() {
  const score = parseInt(document.getElementById('examScore').value);
  const resultDiv = document.getElementById('gradeResult');
  const codeDiv = document.getElementById('gradeCode');
  
  if (isNaN(score) || score < 0 || score > 100) {
    resultDiv.innerHTML = '<div class="grade-letter">!</div><div class="grade-desc">Düzgün bal daxil edin (0-100)</div>';
    return;
  }
  
  let grade, desc, color;
  
  if (score >= 90) {
    grade = 'A';
    desc = 'Əla';
    color = '#00d9ff';
  } else if (score >= 80) {
    grade = 'B';
    desc = 'Çox Yaxşı';
    color = '#2ecc71';
  } else if (score >= 70) {
    grade = 'C';
    desc = 'Yaxşı';
    color = '#3498db';
  } else if (score >= 60) {
    grade = 'D';
    desc = 'Kafi';
    color = '#f1c40f';
  } else if (score >= 50) {
    grade = 'E';
    desc = 'Qənaətbəxş';
    color = '#e67e22';
  } else {
    grade = 'F';
    desc = 'Kəsildiniz';
    color = '#e74c3c';
  }
  
  resultDiv.innerHTML = \`
    <div class="grade-letter" style="color: \${color}; text-shadow: 0 0 20px \${color}80;">\${grade}</div>
    <div class="grade-desc" style="color: \${color}">\${desc} (\${score} bal)</div>
  \`;
  
  codeDiv.textContent = \`bal = \${score}

if bal >= 90:
    qiymet = "A (Əla)"
elif bal >= 80:
    qiymet = "B (Çox Yaxşı)"
elif bal >= 70:
    qiymet = "C (Yaxşı)"
elif bal >= 60:
    qiymet = "D (Kafi)"
elif bal >= 50:
    qiymet = "E (Qənaətbəxş)"
else:
    qiymet = "F (Kəsildiniz)"

print(f"Qiymətiniz: {qiymet}")\`;
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  if (!weight || !height) return;
  
  const bmi = weight / (height * height);
  const indicator = document.getElementById('bmiIndicator');
  const valueDiv = document.querySelector('.bmi-value');
  const categoryDiv = document.querySelector('.bmi-category');
  
  let category, color;
  
  if (bmi < 18.5) {
    category = 'Az çəki';
    color = '#3498db';
  } else if (bmi < 25) {
    category = 'Normal çəki';
    color = '#2ecc71';
  } else if (bmi < 30) {
    category = 'Artıq çəki';
    color = '#f1c40f';
  } else {
    category = 'Piylənmə';
    color = '#e74c3c';
  }
  
  valueDiv.textContent = bmi.toFixed(1);
  valueDiv.style.color = color;
  categoryDiv.textContent = category;
  categoryDiv.style.color = color;
  
  // Position indicator (0-40 BMI range mapped to 0-100%)
  const position = Math.min((bmi / 40) * 100, 100);
  indicator.style.left = position + '%';
  indicator.style.background = color;
}

function updateLogic() {
  // AND
  const and1 = document.getElementById('and1').checked;
  const and2 = document.getElementById('and2').checked;
  const andResult = and1 && and2;
  const andDiv = document.getElementById('andResult');
  andDiv.textContent = andResult;
  andDiv.className = 'logic-result ' + (andResult ? 'true' : '');
  
  // OR
  const or1 = document.getElementById('or1').checked;
  const or2 = document.getElementById('or2').checked;
  const orResult = or1 || or2;
  const orDiv = document.getElementById('orResult');
  orDiv.textContent = orResult;
  orDiv.className = 'logic-result ' + (orResult ? 'true' : '');
  
  // NOT
  const not1 = document.getElementById('not1').checked;
  const notResult = !not1;
  const notDiv = document.getElementById('notResult');
  notDiv.textContent = notResult;
  notDiv.className = 'logic-result ' + (notResult ? 'true' : '');
}

function updateAgeCategory() {
  const age = parseInt(document.getElementById('ageSlider').value);
  document.getElementById('ageValue').textContent = age;
  
  let category, code;
  
  if (age < 2) {
    category = 'Körpə 👶';
    code = 'if yas < 2:\\n    kateqoriya = "Körpə"';
  } else if (age < 13) {
    category = 'Uşaq 🧒';
    code = 'elif yas < 13:\\n    kateqoriya = "Uşaq"';
  } else if (age < 20) {
    category = 'Gənclik 👦';
    code = 'elif yas < 20:\\n    kateqoriya = "Gənclik"';
  } else if (age < 65) {
    category = 'Yetkin 👨';
    code = 'elif yas < 65:\\n    kateqoriya = "Yetkin"';
  } else {
    category = 'Yaşlılıq 👴';
    code = 'else:\\n    kateqoriya = "Yaşlılıq"';
  }
  
  document.getElementById('ageCategory').textContent = category;
  document.getElementById('ageCode').textContent = 'yas = ' + age + '\\n\\n' + code;
}

function checkLogin() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  const logs = document.getElementById('loginLogs');
  
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  
  if (!user || !pass) {
    entry.className += ' error';
    entry.textContent = '[XƏTA] Bütün sahələri doldurun!';
  } else if (user === 'admin' && pass === '1234') {
    entry.className += ' success';
    entry.textContent = '[UGUR] Xoş gəldiniz, Admin!';
  } else if (user === 'admin' || user === 'superadmin') {
    entry.className += ' error';
    entry.textContent = '[XƏTA] Yanlış şifrə!';
  } else {
    entry.className += ' error';
    entry.textContent = '[XƏTA] İstifadəçi tapılmadı!';
  }
  
  logs.insertBefore(entry, logs.firstChild);
  
  // Python kodunu göstər
  const codeEntry = document.createElement('div');
  codeEntry.className = 'log-entry info';
  codeEntry.textContent = \`[PYTHON] if istifadeci == "\${user}" and parol == "***": ...\`;
  logs.insertBefore(codeEntry, logs.firstChild);
}

// Initialize
updateLogic();
updateAgeCategory();
console.log('Python Conditions Lab loaded!');`
  },

  exercise: {
    title: "🎮 Oyun Personajı Status Sistemi",
    description: "if/elif/else və məntiqi operatorlar istifadə edərək RPG oyunu üçün personaj status sistemi yaradın. Can, mana, təcrübə xallarına görə personajın vəziyyəti, səviyyəsi və xüsusiyyətləri müəyyən edilsin.",
    requirements: [
      "Personajın can (0-100), mana (0-100), xp (0-1000) dəyişənləri olsun",
      "Can 70-dən yuxarıdırsa 'Səlamət', 30-70 arası 'Yaralı', 30-dan aşağı 'Təhlükədə'",
      "Mana 50-dən azdırsa sehr istifadə edə bilməsin",
      "XP-ə görə səviyyə: 0-100 (Level 1), 101-300 (Level 2), 301-600 (Level 3), 600+ (Level 4)",
      "Level 3+ və can > 50 olduqda 'Boss Döyüşünə Hazır' statusu versin",
      "Can < 20 və ya mana < 10 olduqda 'QAÇ!' xəbərdarlığı göstərin",
      "Bütün statusları dictionary-də saxlayın və formatlı çap edin",
      "Ternary operator istifadə edərək 'Aktiv'/'Passiv' statusu təyin edin (mana > 30)"
    ],
    starterCode: `# Oyun Personajı Status Sistemi

# Personaj məlumatları
personaj = {
    "ad": "Cengaver",
    "can": 45,
    "mana": 60,
    "xp": 450
}

def status_yoxla(p):
    # Kodunuzu bura yazın
    # 1. Can statusunu təyin edin
    # 2. Səviyyəni hesablayın
    # 3. Xüsusi statusları yoxlayın
    # 4. Nəticə dictionary-si qaytarın
    pass

def goster_status(p, status):
    # Formatlı çap funksiyası
    pass

# Test
netice = status_yoxla(personaj)
goster_status(personaj, netice)

# Nümunə çıxış:
# Ad: Cengaver
# Can: 45/100 (Yaralı)
# Mana: 60/100 (Aktiv)
# Səviyyə: 3 (Təcrübə: 450)
# Status: Boss Döyüşünə Hazır!
# Xəbərdarlıq: -`,
  },

  quiz: [
    {
      question: "Python-da şərt bloku hansı simvolla başlayır?",
      options: ["{ }", ": (iki nöqtə)", "; (nöqtə-vergül)", "->"],
      correctAnswer: 1
    },
    {
      question: "if-dən sonra gələn kodlar nə qədər içəridən yazılmalıdır?",
      options: ["2 boşluq", "4 boşluq (1 Tab)", "8 boşluq", "Fərqi yoxdur"],
      correctAnswer: 1
    },
    {
      question: "x = 5 olduqda 'if x:' şərti necə qiymətlənər?",
      options: ["False", "True", "Xəta", "5"],
      correctAnswer: 1
    },
    {
      question: "Hansı operator 'bərabər deyil' deməkdir?",
      options: ["!=", "==", "<>", "=/="],
      correctAnswer: 0
    },
    {
      question: "elif nə deməkdir?",
      options: ["else if", "else", "if", "else else"],
      correctAnswer: 0
    },
    {
      question: "a = 10, b = 20 olduqda (a > 5 and b < 30) nəticəsi?",
      options: ["True", "False", "None", "Xəta"],
      correctAnswer: 0
    },
    {
      question: "not(True and False) nəticəsi nədir?",
      options: ["True", "False", "None", "Xəta"],
      correctAnswer: 0
    },
    {
      question: "Ternary operator necə yazılır?",
      options: ["if x then y else z", "y if x else z", "x ? y : z", "if x: y else: z"],
      correctAnswer: 1
    },
    {
      question: "İç-içə if-lərdə hansı səhv yaygındır?",
      options: ["Indentation səhvləri", "Çox yaddaş istifadəsi", "Yavaş işləmə", "Heç biri"],
      correctAnswer: 0
    },
    {
      question: "if 18 < yas < 65 yazmaq olarmı?",
      options: ["Xeyr, xəta verər", "Bəli, Python icazə verir", "Yalnız 18 < yas and yas < 65 olar", "Yalnız C++-da olar"],
      correctAnswer: 1
    }
  ]
};

export default topicai3;