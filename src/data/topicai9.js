// src/data/topicai9.js
export const topicai9 = {
  id: 9,
  title: "OOP: Class və Object",
  duration: "130 dəq",
  isFree: false,
  
  content: `
    <h4>🏗️ Obyekt Yönümlü Proqramlaşdırmaya Giriş</h4>
    <p>Proqramlaşdırmada iki əsas yanaşma var: <strong>Prosedur</strong> (funksiyalar ardıcıllığı) və <strong>Obyekt Yönümlü</strong> (OOP). OOP real dünyadakı obyektləri kodda modelləşdirməyə imkan verir.</p>

    <h4>🎯 Əsas Konsepsiyalar</h4>
    <ul>
      <li><strong>Class (Sinif):</strong> Obyektin şablonu, blueprint-i.</li>
      <li><strong>Object (Obyekt):</strong> Class-ın konkret nümunəsi.</li>
      <li><strong>Attribute (Xüsusiyyət):</strong> Obyektin məlumatları.</li>
      <li><strong>Method (Metod):</strong> Obyektin davranışları.</li>
    </ul>

    <h4>🚗 JavaScript Class Nümunəsi</h4>
    <pre><code>// Class yaratmaq
class Mashin {
  // Constructor - obyekt yaradılanda işləyir
  constructor(marka, model, il) {
    this.marka = marka;      // Atribut
    this.model = model;      // Atribut
    this.il = il;            // Atribut
    this.suret = 0;          // Default dəyər
  }
  
  // Metod - obyektin bacardığı iş
  sur(artim) {
    this.suret += artim;
    return this.marka + " " + artim + " km/s sürət artırdı. Cari: " + this.suret;
  }
  
  dayan() {
    this.suret = 0;
    return this.marka + " dayandı.";
  }
  
  melumat() {
    return this.il + " " + this.marka + " " + this.model;
  }
}

// Obyekt yaratmaq (Instance)
const bmw = new Mashin("BMW", "X5", 2023);
const mercedes = new Mashin("Mercedes", "C200", 2022);

// İstifadə
console.log(bmw.melumat());  // 2023 BMW X5
console.log(bmw.sur(50));    // BMW 50 km/s sürət artırdı...
console.log(bmw.dayan());    // BMW dayandı.</code></pre>

    <h4>🎓 Telebe Class-ı - Praktiki Nümunə</h4>
    <pre><code>class Telebe {
  // Class variable - bütün obyektlər üçün ortaq
  static universitet = "AzTU";
  static telebeSayi = 0;
  
  constructor(ad, soyad, ixtisas, bal) {
    // Instance variables - hər obyekt üçün fərqli
    this.ad = ad;
    this.soyad = soyad;
    this.ixtisas = ixtisas;
    this.bal = bal;
    this.qiymetler = [];
    Telebe.telebeSayi++;  // Class variable-ı artır
    this.id = "STU" + String(Telebe.telebeSayi).padStart(4, '0');
  }
  
  qiymetElaveEt(qiymet) {
    if (qiymet >= 0 && qiymet <= 100) {
      this.qiymetler.push(qiymet);
      return "✅ " + qiymet + " bal əlavə edildi.";
    }
    return "❌ Qiymət 0-100 arası olmalıdır!";
  }
  
  ortalamaHesabla() {
    if (this.qiymetler.length === 0) return 0;
    const sum = this.qiymetler.reduce((a, b) => a + b, 0);
    return sum / this.qiymetler.length;
  }
  
  haqqinda() {
    const orta = this.ortalamaHesabla();
    const status = orta >= 60 ? "✅ Keçdi" : "❌ Kəsildi";
    
    return \`
      ID: \${this.id}
      Ad: \${this.ad} \${this.soyad}
      İxtisas: \${this.ixtisas}
      Universitet: \${Telebe.universitet}
      Bal: \${this.bal}
      Orta: \${orta.toFixed(2)}
      Status: \${status}
    \`;
  }
}

// Obyektlər yaradaq
const ali = new Telebe("Əli", "Məmmədov", "Kompüter Elmləri", 650);
const leyla = new Telebe("Leyla", "Qasımova", "İnformasiya Texnologiyaları", 700);

// Metodları çağıraq
ali.qiymetElaveEt(85);
ali.qiymetElaveEt(90);
ali.qiymetElaveEt(78);

console.log(ali.haqqinda());
console.log("Ümumi tələbə sayı: " + Telebe.telebeSayi);</code></pre>

    <h4>🔒 Encapsulation (Məlumat Gizləmə)</h4>
    <p>JavaScript-da private field-lər # işarəsi ilə yaradılır (ES2022+).</p>
    <pre><code>class BankHesabi {
  // Private fields
  #balans;
  #pin;
  
  constructor(sahib, balans = 0) {
    this.sahib = sahib;
    this.#balans = balans;
    this.#pin = "0000";
    this.hesabNomresi = this.#hesabYarat();
  }
  
  #hesabYarat() {
    // Private metod
    return "AZ" + Math.floor(Math.random() * 90000000 + 10000000);
  }
  
  // Getter - məlumat oxumaq üçün
  get balans() {
    return "💰 Balans: " + this.#balans + " AZN";
  }
  
  // Public metodlar
  pulYatir(mebleg) {
    if (mebleg > 0) {
      this.#balans += mebleg;
      return "✅ " + mebleg + " AZN yatırıldı. Yeni: " + this.#balans;
    }
    return "❌ Məbləğ müsbət olmalıdır!";
  }
  
  pulCek(mebleg, pin) {
    if (pin !== this.#pin) return "🔒 Yanlış PIN kod!";
    if (mebleg > this.#balans) return "❌ Balans yetərsiz!";
    if (mebleg <= 0) return "❌ Yanlış məbləğ!";
    
    this.#balans -= mebleg;
    return "✅ " + mebleg + " AZN çıxarıldı. Qalıq: " + this.#balans;
  }
  
  pinDeyis(kohnePin, yeniPin) {
    if (kohnePin !== this.#pin) return "🔒 Yanlış köhnə PIN!";
    if (yeniPin.length !== 4 || !/^\d+$/.test(yeniPin)) {
      return "❌ PIN 4 rəqəmli olmalıdır!";
    }
    this.#pin = yeniPin;
    return "🔐 PIN kodu uğurla dəyişdirildi.";
  }
}

// İstifadə
const hesab = new BankHesabi("Əli Məmmədov", 1000);
console.log(hesab.balans);           // Getter ilə oxu
console.log(hesab.pulYatir(500));     // Metod ilə əlavə et
console.log(hesab.pulCek(200, "0000")); // PIN ilə çək

// Private field-ə birbaşa çatmaq olmur!
// console.log(hesab.#balans); // SINTAKSIS XƏTASI!</code></pre>

    <h4>🧮 Special Methods</h4>
    <pre><code>class Kitab {
  constructor(ad, muellif, sehifeSayi, qiymet) {
    this.ad = ad;
    this.muellif = muellif;
    this.sehifeSayi = sehifeSayi;
    this.qiymet = qiymet;
  }
  
  // String representation
  toString() {
    return "📚 " + this.ad + " - " + this.muellif;
  }
  
  // Comparison
  equals(diger) {
    return this.ad === diger.ad && this.muellif === diger.muellif;
  }
  
  // Arithmetic simulation
  static qiymetTopla(kitab1, kitab2) {
    return kitab1.qiymet + kitab2.qiymet;
  }
}

const kitab1 = new Kitab("Python Dərsləri", "Əli Məmmədov", 350, 25);
const kitab2 = new Kitab("AI Əsasları", "Leyla Qasımova", 420, 35);

console.log(kitab1.toString());                    // 📚 Python Dərsləri...
console.log(Kitab.qiymetTopla(kitab1, kitab2));    // 60</code></pre>

    <h4>📦 Static Method və Class Method</h4>
    <pre><code>class Tarix {
  // Class variable
  static format = "DD.MM.YYYY";
  
  constructor(gun, ay, il) {
    this.gun = gun;
    this.ay = ay;
    this.il = il;
  }
  
  goster() {
    return String(this.gun).padStart(2, '0') + "." + 
           String(this.ay).padStart(2, '0') + "." + this.il;
  }
  
  // Static method
  static bugun() {
    const indi = new Date();
    return new Tarix(indi.getDate(), indi.getMonth() + 1, indi.getFullYear());
  }
  
  static ilQosaMi(il) {
    return (il % 4 === 0 && il % 100 !== 0) || (il % 400 === 0);
  }
  
  static formatDeyis(yeniFormat) {
    Tarix.format = yeniFormat;
  }
}

// İstifadə
const t1 = new Tarix(15, 3, 2024);
console.log(t1.goster());           // 15.03.2024

const t2 = Tarix.bugun();           // Static method ilə yarat
console.log(t2.goster());           // Bugünkü tarix

console.log(Tarix.ilQosaMi(2024));  // true</code></pre>

    <h4>🔄 Inheritance (Varislik) - Sonrakı Mövzular Üçün</h4>
    <pre><code>// Base class
class Heyvan {
  constructor(ad, yas) {
    this.ad = ad;
    this.yas = yas;
  }
  
  sesCixar() {
    return "Bilinməyən səs";
  }
  
  melumat() {
    return this.ad + ", " + this.yas + " yaşında";
  }
}

// Derived class
class It extends Heyvan {
  constructor(ad, yas, cins) {
    super(ad, yas);  // Parent constructor çağırışı
    this.cins = cins;
  }
  
  sesCixar() {
    return "Hav! Hav!";  // Override
  }
  
  melumat() {
    return super.melumat() + ", " + this.cins;  // Parent metod + əlavə
  }
}

const karabas = new It("Karabaş", 3, "Alman Ovçarkası");
console.log(karabas.melumat());    // Karabaş, 3 yaşında, Alman Ovçarkası
console.log(karabas.sesCixar());   // Hav! Hav!</code></pre>

    <h4>💡 OOP Dizayn Prinsipləri</h4>
    <ul>
      <li><strong>DRY (Don't Repeat Yourself):</strong> Təkrar kod yazmayın.</li>
      <li><strong>Single Responsibility:</strong> Hər class bir iş görsün.</li>
      <li><strong>KISS (Keep It Simple):</strong> Sadə saxlayın.</li>
      <li><strong>Composition over Inheritance:</strong> Varlıq əvəzinə tərkib istifadə edin.</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="oop-basics-lab">
  <h2>🏗️ OOP Class və Object Laboratoriyası</h2>
  
  <section class="demo-section">
    <h3>1. 🚗 Class Constructor Visualizer</h3>
    <div class="constructor-demo">
      <div class="class-blueprint">
        <h4>Class Şablonu (Blueprint)</h4>
        <pre class="code-block">class Mashin {
  constructor(marka, model, il) {
    this.marka = marka;
    this.model = model;
    this.il = il;
    this.suret = 0;
  }
}</pre>
      </div>
      
      <div class="object-creation">
        <h4>Obyekt Yaratma</h4>
        <div class="input-group">
          <input type="text" id="carBrand" placeholder="Marka (BMW)" value="Mercedes">
          <input type="text" id="carModel" placeholder="Model (X5)" value="S500">
          <input type="number" id="carYear" placeholder="İl" value="2023">
          <button onclick="createCar()">🚗 Obyekt Yarat</button>
        </div>
      </div>
      
      <div class="object-display" id="objectDisplay">
        <div class="empty-state">Obyekt yaradın...</div>
      </div>
      
      <div class="object-actions" id="objectActions" style="display: none;">
        <button onclick="carAction('accelerate')">🚀 Sürətləndir (+20)</button>
        <button onclick="carAction('brake')">🛑 Əyləc</button>
        <button onclick="carAction('info')">ℹ️ Məlumat</button>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. 🎓 Telebe İdarəetmə Sistemi</h3>
    <div class="student-system">
      <div class="system-controls">
        <div class="form-group">
          <label>Ad:</label>
          <input type="text" id="stuName" placeholder="Əli">
        </div>
        <div class="form-group">
          <label>Soyad:</label>
          <input type="text" id="stuSurname" placeholder="Məmmədov">
        </div>
        <div class="form-group">
          <label>İxtisas:</label>
          <select id="stuMajor">
            <option value="Kompüter Elmləri">Kompüter Elmləri</option>
            <option value="İnformasiya Texnologiyaları">İnformasiya Texnologiyaları</option>
            <option value="Süni İntellekt">Süni İntellekt</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
        <div class="form-group">
          <label>Bal:</label>
          <input type="number" id="stuScore" value="650" min="0" max="700">
        </div>
        <button onclick="addStudent()">➕ Tələbə Əlavə Et</button>
      </div>
      
      <div class="students-list" id="studentsList"></div>
      
      <div class="student-detail-modal" id="studentModal" style="display: none;">
        <div class="modal-content">
          <span class="close-btn" onclick="closeStudentModal()">&times;</span>
          <div id="studentDetailContent"></div>
          <div class="grade-section">
            <h4>Qiymət Əlavə Et</h4>
            <input type="number" id="gradeInput" min="0" max="100" placeholder="0-100">
            <button onclick="addGrade()">Əlavə Et</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. 🏦 Bank Hesabı - Encapsulation Demo</h3>
    <div class="bank-demo">
      <div class="account-selector">
        <button onclick="selectAccount('checking')" class="acc-btn active">💳 Cari Hesab</button>
        <button onclick="selectAccount('savings')" class="acc-btn">💰 Yığım Hesabı</button>
      </div>
      
      <div class="atm-interface">
        <div class="screen">
          <div class="bank-header">
            <span class="bank-name">🏦 PyBank</span>
            <span class="bank-time" id="bankTime">12:00</span>
          </div>
          <div class="bank-content" id="bankContent">
            <div class="welcome-screen">
              <h4>Xoş gəlmisiniz!</h4>
              <p>Hesab seçin və əməliyyat aparın</p>
            </div>
          </div>
        </div>
        
        <div class="keypad">
          <div class="display-line" id="displayLine"></div>
          <div class="keypad-buttons">
            <button onclick="bankInput('1')">1</button>
            <button onclick="bankInput('2')">2</button>
            <button onclick="bankInput('3')">3</button>
            <button onclick="bankAction('balance')" class="action-btn">Balans</button>
            
            <button onclick="bankInput('4')">4</button>
            <button onclick="bankInput('5')">5</button>
            <button onclick="bankInput('6')">6</button>
            <button onclick="bankAction('deposit')" class="action-btn">Yatır</button>
            
            <button onclick="bankInput('7')">7</button>
            <button onclick="bankInput('8')">8</button>
            <button onclick="bankInput('9')">9</button>
            <button onclick="bankAction('withdraw')" class="action-btn">Çək</button>
            
            <button onclick="bankInput('C')" class="clear-btn">C</button>
            <button onclick="bankInput('0')">0</button>
            <button onclick="bankInput('.')">.</button>
            <button onclick="bankAction('enter')" class="enter-btn">↵</button>
          </div>
        </div>
      </div>
      
      <div class="transaction-log" id="transactionLog">
        <h4>Əməliyyat Tarixçəsi</h4>
        <div class="log-entries"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. 🧮 Static və Instance Methods</h3>
    <div class="methods-demo">
      <div class="method-comparison">
        <div class="method-box">
          <h4>Instance Method</h4>
          <p>obyekt.metod() - this istifadə edir</p>
          <button onclick="demoInstanceMethod()">Test Et</button>
          <div id="instanceResult"></div>
        </div>
        <div class="method-box">
          <h4>Static Method</h4>
          <p>Class.metod() - this istifadə etmir</p>
          <button onclick="demoStaticMethod()">Test Et</button>
          <div id="staticResult"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. 📊 Class vs Instance Variables</h3>
    <div class="variables-demo">
      <div class="variable-types">
        <div class="var-box class-var">
          <h4>Class Variable (static)</h4>
          <p class="var-desc">Bütün obyektlər üçün ortaq</p>
          <div class="var-value" id="classVarValue">Universitet: AzTU</div>
          <button onclick="changeClassVar()">Dəyiş (Hər kəsə təsir edəcək)</button>
        </div>
        
        <div class="var-box instance-var">
          <h4>Instance Variable</h4>
          <p class="var-desc">Hər obyekt üçün fərqli</p>
          <div class="instances" id="instancesContainer">
            <div class="instance-card" data-id="1">
              <span>Əli - Kompüter Elmləri</span>
              <button onclick="changeInstanceVar(1)">İxtisas Dəyiş</button>
            </div>
            <div class="instance-card" data-id="2">
              <span>Leyla - Data Science</span>
              <button onclick="changeInstanceVar(2)">İxtisas Dəyiş</button>
            </div>
          </div>
        </div>
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
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.oop-basics-lab {
  max-width: 1200px;
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
  color: #ffd700;
  margin-bottom: 20px;
  font-size: 22px;
  border-left: 4px solid #ffd700;
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

/* Constructor Demo */
.constructor-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.class-blueprint {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #00ff88;
}

.code-block {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #7ee787;
  overflow-x: auto;
  white-space: pre-wrap;
}

.object-creation {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-group input {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
}

.object-display {
  grid-column: 1 / -1;
  background: #0d1117;
  padding: 25px;
  border-radius: 10px;
  min-height: 200px;
}

.empty-state {
  text-align: center;
  color: #8b949e;
  padding: 50px;
  font-style: italic;
}

.object-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 12px;
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.object-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #fff;
}

.object-id {
  color: rgba(255,255,255,0.7);
  font-size: 12px;
  margin-bottom: 15px;
}

.object-attributes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.attr-box {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 6px;
}

.attr-name {
  font-size: 12px;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
}

.attr-value {
  font-size: 18px;
  font-weight: bold;
  color: #ffd700;
}

.object-actions {
  grid-column: 1 / -1;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

/* Student System */
.student-system {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.system-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  color: #00ff88;
  font-size: 14px;
  font-weight: 600;
}

.form-group input,
.form-group select {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
}

.students-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.student-card {
  background: #0d1117;
  border: 2px solid #30363d;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.student-card:hover {
  border-color: #00ff88;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.student-id {
  font-size: 12px;
  color: #8b949e;
  margin-bottom: 5px;
}

.student-name {
  font-size: 20px;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 5px;
}

.student-major {
  color: #00d9ff;
  font-size: 14px;
}

.student-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #30363d;
}

.stat {
  text-align: center;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #00ff88;
}

.stat-label {
  font-size: 12px;
  color: #8b949e;
}

.student-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #1a1a2e;
  padding: 30px;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  position: relative;
  border: 2px solid #00ff88;
  max-height: 80vh;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  color: #8b949e;
}

.close-btn:hover {
  color: #ff6b6b;
}

.grade-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #30363d;
}

.grade-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 0;
}

.grade-item {
  background: #00ff88;
  color: #000;
  padding: 5px 12px;
  border-radius: 20px;
  font-weight: bold;
}

/* Bank Demo */
.bank-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.account-selector {
  grid-column: 1 / -1;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
}

.acc-btn {
  background: #30363d;
  border: 2px solid #30363d;
  color: #fff;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.acc-btn.active {
  background: #00ff88;
  color: #000;
  border-color: #00ff88;
  font-weight: bold;
}

.atm-interface {
  background: #0d1117;
  padding: 20px;
  border-radius: 16px;
  border: 3px solid #30363d;
}

.screen {
  background: #000;
  border: 2px solid #00ff88;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  min-height: 200px;
}

.bank-header {
  display: flex;
  justify-content: space-between;
  color: #00ff88;
  font-size: 14px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #30363d;
}

.bank-content {
  color: #fff;
  text-align: center;
}

.balance-display {
  font-size: 48px;
  color: #ffd700;
  margin: 20px 0;
  font-weight: bold;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.keypad {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
}

.display-line {
  background: #000;
  color: #00ff88;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 24px;
  text-align: right;
  font-family: 'Fira Code', monospace;
  min-height: 50px;
  border: 2px solid #30363d;
}

.keypad-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.keypad-buttons button {
  padding: 20px;
  font-size: 20px;
  background: #30363d;
  border: none;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: bold;
}

.keypad-buttons button:hover {
  background: #00ff88;
  color: #000;
  transform: scale(1.05);
}

.keypad-buttons .action-btn {
  background: #ffd700;
  color: #000;
  font-size: 12px;
  font-weight: bold;
}

.keypad-buttons .clear-btn {
  background: #ff6b6b;
  color: #fff;
}

.keypad-buttons .enter-btn {
  background: #00ff88;
  color: #000;
}

.transaction-log {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  max-height: 400px;
  overflow-y: auto;
}

.log-entries {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.log-entry {
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid;
  font-size: 14px;
  background: rgba(255,255,255,0.05);
}

.log-entry.deposit { border-left-color: #00ff88; background: rgba(0, 255, 136, 0.1); }
.log-entry.withdraw { border-left-color: #ff6b6b; background: rgba(255, 107, 107, 0.1); }
.log-entry.error { border-left-color: #ffd700; background: rgba(255, 215, 0, 0.1); }

/* Methods Demo */
.methods-demo {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
}

.method-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.method-box {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #30363d;
}

.method-box h4 {
  color: #00ff88;
  margin-bottom: 10px;
}

.method-box p {
  color: #8b949e;
  font-size: 14px;
  margin-bottom: 15px;
}

/* Variables Demo */
.variables-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.variable-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.var-box {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid;
}

.var-box.class-var { border-color: #ffd700; }
.var-box.instance-var { border-color: #00d9ff; }

.var-box h4 {
  color: #fff;
  margin-bottom: 10px;
}

.var-desc {
  color: #8b949e;
  font-size: 14px;
  margin: 10px 0;
}

.var-value {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  font-family: 'Fira Code', monospace;
  color: #00ff88;
}

.instances {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.instance-card {
  background: #1a1a2e;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #30363d;
}

.instance-card span {
  color: #fff;
  font-size: 14px;
}

button {
  background: linear-gradient(135deg, #00ff88 0%, #00b359 100%);
  color: #000;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 136, 0.4);
}

@media (max-width: 768px) {
  .constructor-demo,
  .bank-demo,
  .method-comparison,
  .variable-types {
    grid-template-columns: 1fr;
  }
  .keypad-buttons button {
    padding: 15px;
    font-size: 16px;
  }
  body {
    padding: 20px;
  }
}`,

    js: `// OOP Basics Lab JavaScript

// Car Demo
let currentCar = null;

class Mashin {
  constructor(marka, model, il) {
    this.marka = marka;
    this.model = model;
    this.il = il;
    this.suret = 0;
    this.id = Math.random().toString(36).substr(2, 9);
  }
  
  sur(artim) {
    this.suret += artim;
    return this.marka + " " + artim + " km/s sürəti artırdı. Cari: " + this.suret;
  }

  dayan() {
    this.suret = 0;
    return this.marka + " dayandı.";
  }
  
  melumat() {
    return this.il + " " + this.marka + " " + this.model;
  }
}

function createCar() {
  const marka = document.getElementById('carBrand').value || 'Unknown';
  const model = document.getElementById('carModel').value || 'Unknown';
  const il = document.getElementById('carYear').value || 2024;
  
  currentCar = new Mashin(marka, model, parseInt(il));
  
  const display = document.getElementById('objectDisplay');
  display.innerHTML = '<div class="object-card">' +
    '<div class="object-header">🚗 ' + currentCar.melumat() + '</div>' +
    '<div class="object-id">ID: ' + currentCar.id + '</div>' +
    '<div class="object-attributes">' +
      '<div class="attr-box">' +
        '<div class="attr-name">Marka</div>' +
        '<div class="attr-value" id="attrMarka">' + currentCar.marka + '</div>' +
      '</div>' +
      '<div class="attr-box">' +
        '<div class="attr-name">Model</div>' +
        '<div class="attr-value" id="attrModel">' + currentCar.model + '</div>' +
      '</div>' +
      '<div class="attr-box">' +
        '<div class="attr-name">İl</div>' +
        '<div class="attr-value" id="attrIl">' + currentCar.il + '</div>' +
      '</div>' +
      '<div class="attr-box">' +
        '<div class="attr-name">Sürət</div>' +
        '<div class="attr-value" id="attrSuret">' + currentCar.suret + ' km/s</div>' +
      '</div>' +
    '</div>' +
    '<div class="object-methods" style="margin-top: 15px; color: #8b949e; font-size: 14px;">' +
      'Metodlar: sur(), dayan(), melumat()' +
    '</div>' +
  '</div>';
  
  document.getElementById('objectActions').style.display = 'flex';
}

function carAction(action) {
  if (!currentCar) return;
  
  let result = '';
  if (action === 'accelerate') {
    result = currentCar.sur(20);
  } else if (action === 'brake') {
    result = currentCar.dayan();
  } else if (action === 'info') {
    result = 'Melumat: ' + currentCar.melumat();
  }
  
  document.getElementById('attrSuret').textContent = currentCar.suret + ' km/s';
  
  const display = document.getElementById('objectDisplay');
  const resultDiv = document.createElement('div');
  resultDiv.style.cssText = 'margin-top: 15px; padding: 10px; background: rgba(0,255,136,0.1); border-radius: 6px; color: #00ff88;';
  resultDiv.textContent = '▶ ' + result;
  display.appendChild(resultDiv);
  
  setTimeout(() => resultDiv.remove(), 3000);
}

// Student System
class Telebe {
  static universitet = "AzTU";
  static telebeSayi = 0;
  
  constructor(ad, soyad, ixtisas, bal) {
    this.ad = ad;
    this.soyad = soyad;
    this.ixtisas = ixtisas;
    this.bal = bal;
    this.qiymetler = [];
    this.id = ++Telebe.telebeSayi;
  }
  
  qiymetElaveEt(qiymet) {
    if (qiymet >= 0 && qiymet <= 100) {
      this.qiymetler.push(qiymet);
      return true;
    }
    return false;
  }
  
  ortalama() {
    if (this.qiymetler.length === 0) return 0;
    return (this.qiymetler.reduce((a,b) => a+b, 0) / this.qiymetler.length).toFixed(2);
  }
  
  haqqinda() {
    return {
      ad: this.ad,
      soyad: this.soyad,
      ixtisas: this.ixtisas,
      bal: this.bal,
      ortalama: this.ortalama(),
      qiymetler: this.qiymetler,
      universitet: Telebe.universitet
    };
  }
}

let telebeler = [];
let selectedStudent = null;

function addStudent() {
  const ad = document.getElementById('stuName').value || 'Adsız';
  const soyad = document.getElementById('stuSurname').value || 'Soyadsız';
  const ixtisas = document.getElementById('stuMajor').value;
  const bal = parseInt(document.getElementById('stuScore').value) || 0;
  
  const telebe = new Telebe(ad, soyad, ixtisas, bal);
  telebeler.push(telebe);
  
  renderStudents();
  
  document.getElementById('stuName').value = '';
  document.getElementById('stuSurname').value = '';
}

function renderStudents() {
  const container = document.getElementById('studentsList');
  container.innerHTML = telebeler.map((t, idx) => 
    '<div class="student-card" onclick="showStudentDetail(' + idx + ')">' +
      '<div class="student-id">#STU' + String(t.id).padStart(4, '0') + '</div>' +
      '<div class="student-name">' + t.ad + ' ' + t.soyad + '</div>' +
      '<div class="student-major">' + t.ixtisas + '</div>' +
      '<div class="student-stats">' +
        '<div class="stat"><div class="stat-value">' + t.bal + '</div><div class="stat-label">Bal</div></div>' +
        '<div class="stat"><div class="stat-value">' + t.ortalama() + '</div><div class="stat-label">Orta</div></div>' +
        '<div class="stat"><div class="stat-value">' + t.qiymetler.length + '</div><div class="stat-label">Qiymət</div></div>' +
      '</div>' +
    '</div>'
  ).join('');
}

function showStudentDetail(idx) {
  selectedStudent = telebeler[idx];
  const info = selectedStudent.haqqinda();
  
  document.getElementById('studentDetailContent').innerHTML = 
    '<h3>' + info.ad + ' ' + info.soyad + '</h3>' +
    '<p><strong>ID:</strong> #STU' + String(selectedStudent.id).padStart(4, '0') + '</p>' +
    '<p><strong>İxtisas:</strong> ' + info.ixtisas + '</p>' +
    '<p><strong>Universitet:</strong> ' + info.universitet + '</p>' +
    '<p><strong>Bal:</strong> ' + info.bal + '</p>' +
    '<p><strong>Ortalama:</strong> ' + info.ortalama + '</p>' +
    '<div class="grade-list">' +
      (info.qiymetler.map(q => '<span class="grade-item">' + q + '</span>').join('') || 'Qiymət yoxdur') +
    '</div>';
  
  document.getElementById('studentModal').style.display = 'flex';
}

function closeStudentModal() {
  document.getElementById('studentModal').style.display = 'none';
}

function addGrade() {
  const grade = parseInt(document.getElementById('gradeInput').value);
  if (selectedStudent && selectedStudent.qiymetElaveEt(grade)) {
    showStudentDetail(telebeler.indexOf(selectedStudent));
    renderStudents();
    document.getElementById('gradeInput').value = '';
  } else {
    alert('Yanlış qiymət! 0-100 arası olmalıdır.');
  }
}

// Bank Demo
class BankHesabi {
  constructor(sahib, tip, balans = 0) {
    this.sahib = sahib;
    this.tip = tip;
    this._balans = balans;
    this.hesabNomresi = this._hesabYarat();
    this.tarixce = [];
  }
  
  _hesabYarat() {
    return 'AZ' + Math.random().toString().slice(2, 12);
  }
  
  get balans() {
    return this._balans;
  }
  
  pulYatir(mebleg) {
    if (mebleg > 0) {
      this._balans += mebleg;
      this.tarixce.push({tip: 'deposit', mebleg: mebleg, vaxt: new Date()});
      return {ugur: true, mesaj: mebleg + ' AZN yatırıldı'};
    }
    return {ugur: false, mesaj: 'Məbləğ müsbət olmalıdır'};
  }
  
  pulCek(mebleg) {
    if (mebleg > this._balans) {
      return {ugur: false, mesaj: 'Balans yetərsiz'};
    }
    if (mebleg <= 0) {
      return {ugur: false, mesaj: 'Yanlış məbləğ'};
    }
    this._balans -= mebleg;
    this.tarixce.push({tip: 'withdraw', mebleg: mebleg, vaxt: new Date()});
    return {ugur: true, mesaj: mebleg + ' AZN çıxarıldı'};
  }
}

let cariHesab = new BankHesabi('Əli Məmmədov', 'checking', 1000);
let yigimHesabi = new BankHesabi('Əli Məmmədov', 'savings', 5000);
let aktivHesab = cariHesab;
let bankInputValue = '';

function selectAccount(type) {
  aktivHesab = type === 'checking' ? cariHesab : yigimHesabi;
  document.querySelectorAll('.acc-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  updateBankDisplay();
}

function updateBankDisplay() {
  const content = document.getElementById('bankContent');
  content.innerHTML = 
    '<div class="balance-display">' + aktivHesab.balans + ' AZN</div>' +
    '<div style="color: #8b949e; margin-top: 10px;">' +
      (aktivHesab.tip === 'checking' ? '💳 Cari Hesab' : '💰 Yığım Hesabı') + '<br>' +
      '<small>' + aktivHesab.hesabNomresi + '</small>' +
    '</div>';
}

function bankInput(key) {
  const display = document.getElementById('displayLine');
  
  if (key === 'C') {
    bankInputValue = '';
  } else {
    bankInputValue += key;
  }
  
  display.textContent = bankInputValue;
}

function bankAction(action) {
  const mebleg = parseFloat(bankInputValue);
  
  if (action === 'balance') {
    updateBankDisplay();
    addLog('balance', 'Balans yoxlandı: ' + aktivHesab.balans + ' AZN');
  } else if (action === 'deposit' && bankInputValue) {
    const netice = aktivHesab.pulYatir(mebleg);
    if (netice.ugur) {
      updateBankDisplay();
      addLog('deposit', netice.mesaj);
    } else {
      addLog('error', netice.mesaj);
    }
    bankInputValue = '';
    document.getElementById('displayLine').textContent = '';
  } else if (action === 'withdraw' && bankInputValue) {
    const netice = aktivHesab.pulCek(mebleg);
    if (netice.ugur) {
      updateBankDisplay();
      addLog('withdraw', netice.mesaj);
    } else {
      addLog('error', netice.mesaj);
    }
    bankInputValue = '';
    document.getElementById('displayLine').textContent = '';
  }
}

function addLog(tip, mesaj) {
  const container = document.querySelector('.log-entries');
  const entry = document.createElement('div');
  entry.className = 'log-entry ' + tip;
  entry.innerHTML = '<strong>' + new Date().toLocaleTimeString() + '</strong><br>' + mesaj;
  container.insertBefore(entry, container.firstChild);
}

// Methods Demo
class TestClass {
  constructor(ad) {
    this.ad = ad;
  }
  
  instanceMethod() {
    return "Salam, mən " + this.ad + " obyektiyəm!";
  }
  
  static staticMethod() {
    return "Mən static metodam, obyekt yaratmadan çağırıla bilərəm!";
  }
}

function demoInstanceMethod() {
  const obj = new TestClass("Test");
  document.getElementById('instanceResult').innerHTML = 
    '<div style="margin-top: 10px; padding: 10px; background: rgba(0,255,136,0.1); border-radius: 6px; color: #00ff88;">' +
    obj.instanceMethod() + '</div>';
}

function demoStaticMethod() {
  document.getElementById('staticResult').innerHTML = 
    '<div style="margin-top: 10px; padding: 10px; background: rgba(255,215,0,0.1); border-radius: 6px; color: #ffd700;">' +
    TestClass.staticMethod() + '</div>';
}

// Variables Demo
function changeClassVar() {
  const yeni = prompt('Yeni universitet adı:', 'BDU');
  if (yeni) {
    Telebe.universitet = yeni;
    document.getElementById('classVarValue').textContent = 'Universitet: ' + yeni;
    renderStudents();
  }
}

function changeInstanceVar(id) {
  const yeni = prompt('Yeni ixtisas:', 'Kiber Təhlükəsizlik');
  if (yeni && telebeler[id-1]) {
    telebeler[id-1].ixtisas = yeni;
    renderStudents();
  }
}

// Initialize
updateBankDisplay();
setInterval(() => {
  const now = new Date();
  document.getElementById('bankTime').textContent = 
    String(now.getHours()).padStart(2,'0') + ':' + 
    String(now.getMinutes()).padStart(2,'0');
}, 1000);

console.log('OOP Basics Lab loaded!');`
  },

  exercise: {
    title: "🏪 Onlayn Mağaza İdarəetmə Sistemi",
    description: "Tam funksional onlayn mağaza sistemi yaradın. Məhsullar, sifarişlər, müştərilər və ödəniş sistemini OOP prinsipləri ilə implementasiya edin.",
    requirements: [
      "Məhsul (Product) class-ı: ad, qiymət, stok, kateqoriya",
      "Müştəri (Customer) class-ı: ad, email, ünvan, sifariş tarixi",
      "Sifariş (Order) class-ı: müştəri, məhsullar, ümumi məbləğ, status",
      "Ödəniş (Payment) class-ı: üsul, məbləğ, təsdiq (encapsulation ilə)",
      "Encapsulation: balans, endirim kodları private olsun",
      "Class methods: endirim kampaniyaları, statistikalar",
      "Magic methods: sifarişləri toplama, müqayisə",
      "İdarəetmə paneli: məhsul əlavə et, sifariş yarat, stok yenilə",
      "Xəta idarəetməsi: stok yoxluğu, yanlış ödəniş",
      "Hesabat: ən çox satılan məhsullar, gəlir statistikası"
    ],
    starterCode: `// Onlayn Mağaza İdarəetmə Sistemi

class Mehsul {
  // Class variable
  static idSayac = 0;
  static endirimKodu = "ENDIRIM10";
  
  constructor(ad, qiymet, stok, kateqoriya) {
    // Kodunuzu bura yazın
    // ID avtomatik yaradılmalı: Mehsul.idSayac++
    // Qiymət və stok yoxlanılmalı (mənfi ola bilməz)
    this.id = ++Mehsul.idSayac;
    this.ad = ad;
    this.qiymet = Math.max(0, qiymet);
    this.stok = Math.max(0, stok);
    this.kateqoriya = kateqoriya;
    this.satisSayi = 0;
  }
  
  stokArtir(miqdar) {
    // Stok artırmaq
    if (miqdar > 0) {
      this.stok += miqdar;
      return true;
    }
    return false;
  }
  
  stokAzalt(miqdar) {
    // Stok azaltmaq (yetərsizlik yoxlaması ilə)
    if (miqdar <= 0) return false;
    if (this.stok >= miqdar) {
      this.stok -= miqdar;
      this.satisSayi += miqdar;
      return true;
    }
    return false;
  }
  
  toString() {
    return this.ad + " - " + this.qiymet + " AZN (" + this.stok + " ədəd)";
  }
}


class Musteri {
  constructor(ad, email, telefon) {
    // Kodunuzu bura yazın
    // Email formatını yoxlayın (@ işarəsi olmalı)
    this.ad = ad;
    this.email = email;
    this.telefon = telefon;
    this._sifarisler = []; // Private convention
    this._balans = 0;       // Private convention
    this.qeydiyyatTarixi = new Date();
  }
  
  balansArtir(mebleg) {
    // Balans artırmaq
    if (mebleg > 0) {
      this._balans += mebleg;
      return true;
    }
    return false;
  }
  
  get balans() {
    return this._balans;
  }
  
  sifarisElaveEt(sifaris) {
    // Sifariş tarixçəsinə əlavə et
    this._sifarisler.push(sifaris);
  }
  
  get umumiXerc() {
    // Bütün sifarişlərdə xərclənən məbləğ
    return this._sifarisler.reduce((sum, s) => sum + s.umumiMebleg, 0);
  }
}


class Sifaris {
  // Class constant
  static STATUSLAR = ['gözləyir', 'təsdiqləndi', 'göndərildi', 'çatdırıldı', 'ləğv edildi'];
  
  constructor(musteri, mehsullar) {
    // Kodunuzu bura yazın
    this.id = 'ORD' + Date.now();
    this.musteri = musteri;
    this.mehsullar = [...mehsullar]; // Copy array
    this.status = 'gözləyir';
    this.yaradilmaTarixi = new Date();
    this.endirimFaizi = 0;
    this.umumiMebleg = this.hesablaMebleg();
  }
  
  hesablaMebleg() {
    // Ümumi məbləği hesabla (endirimlə birlikdə)
    const araliq = this.mehsullar.reduce((sum, m) => sum + m.qiymet, 0);
    return araliq * (1 - this.endirimFaizi / 100);
  }
  
  endirimTetbiqEt(kod) {
    // Endirim kodu tətbiq et
    // "ENDIRIM10" = 10%, "ENDIRIM20" = 20%
    if (kod === "ENDIRIM10") {
      this.endirimFaizi = 10;
    } else if (kod === "ENDIRIM20") {
      this.endirimFaizi = 20;
    }
    this.umumiMebleg = this.hesablaMebleg();
  }
  
  statusYenile(yeniStatus) {
    // Sifariş statusunu yenilə
    if (Sifaris.STATUSLAR.includes(yeniStatus)) {
      this.status = yeniStatus;
      return true;
    }
    return false;
  }
}


class Magaza {
  constructor(ad) {
    this.ad = ad;
    this.mehsullar = [];
    this.musteriler = [];
    this.sifarisler = [];
    this._gelir = 0; // Private
    this._xercler = [];
  }
  
  mehsulElaveEt(mehsul) {
    // Yeni məhsul əlavə et
    this.mehsullar.push(mehsul);
  }
  
  mehsulTap(idVeyaAd) {
    // Məhsul axtar (ID və ya ad ilə)
    return this.mehsullar.find(m => 
      m.id === parseInt(idVeyaAd) || 
      m.ad.toLowerCase().includes(idVeyaAd.toLowerCase())
    );
  }
  
  musteriQeydiyyati(musteri) {
    // Yeni müştəri əlavə et
    this.musteriler.push(musteri);
  }
  
  sifarisYarat(musteri, mehsulIdler) {
    // Yeni sifariş yarat
    const mehsullar = mehsulIdler.map(id => this.mehsulTap(id)).filter(m => m);
    if (mehsullar.length === 0) return null;
    
    const sifaris = new Sifaris(musteri, mehsullar);
    this.sifarisler.push(sifaris);
    musteri.sifarisElaveEt(sifaris);
    return sifaris;
  }
  
  satisStatistikasi() {
    // Satış statistikası qaytar
    const aktivSifarisler = this.sifarisler.filter(s => s.status !== 'ləğv edildi');
    const umumiGelir = aktivSifarisler.reduce((sum, s) => sum + s.umumiMebleg, 0);
    
    // Ən çox satılan məhsullar
    const siralama = [...this.mehsullar].sort((a, b) => b.satisSayi - a.satisSayi);
    
    return {
      umumiGelir: umumiGelir.toFixed(2),
      aktivSifarisSayi: aktivSifarisler.length,
      topMehsullar: siralama.slice(0, 5),
      musteriSayi: this.musteriler.length
    };
  }
  
  static endirimKampaniyasi(mehsullar, faiz) {
    // Bütün məhsullara endirim tətbiq et (static)
    mehsullar.forEach(m => {
      m.qiymet = m.qiymet * (1 - faiz / 100);
    });
  }
}


// İdarəetmə Paneli
function idareetmePaneli() {
  const magaza = new Magaza("TechStore");
  
  // Test məlumatları əlavə et
  magaza.mehsulElaveEt(new Mehsul("Laptop", 2500, 10, "Elektronika"));
  magaza.mehsulElaveEt(new Mehsul("Mouse", 50, 50, "Aksesuar"));
  magaza.mehsulElaveEt(new Mehsul("Klaviatura", 150, 30, "Aksesuar"));
  
  console.log("=== " + magaza.ad + " İdarəetmə Sistemi ===");
  console.log("Əmrlər: mehsullar, musteriler, sifarisYarat, statistika, cixis");
  
  // Burada interaktiv əmrlər əlavə edin
  // Məhsul əlavə et, sifariş yarat, statistika göstər və s.
  
  return magaza;
}

// Sistemi başlat
const sistem = idareetmePaneli();

// Test üçün nümunə istifadə:
// const musteri = new Musteri("Əli", "ali@email.com", "0501234567");
// sistem.musteriQeydiyyati(musteri);
// const sifaris = sistem.sifarisYarat(musteri, [1, 2]);
// console.log(sistem.satisStatistikasi());`,
  },

  quiz: [
    {
      question: "Class və obyekt arasındakı fərq nədir?",
      options: ["Fərq yoxdur", "Class şablondur, obyekt nümunədir", "Class nümunədir, obyekt şablondur", "Hər ikisi eynidir"],
      correctAnswer: 1
    },
    {
      question: "constructor metodu nə üçün istifadə olunur?",
      options: ["Obyekti silmək", "Obyekti ilkinləşdirmək", "Class-ı silmək", "Modul yükləmək"],
      correctAnswer: 1
    },
    {
      question: "this açar sözü nəyi ifadə edir?",
      options: ["Class-ın özünü", "Cari obyekti", "Funksiyanı", "Modulu"],
      correctAnswer: 1
    },
    {
      question: "JavaScript-də private field necə yaradılır?",
      options: ["_ad", "#ad", "private ad", "ad_"],
      correctAnswer: 1
    },
    {
      question: "getter metodu nə üçün istifadə olunur?",
      options: ["Funksiyanı çağırmaq", "Məlumat oxumaq", "Class yaratmaq", "Modul import etmək"],
      correctAnswer: 1
    },
    {
      question: "static property ilə instance property arasındakı fərq?",
      options: ["Fərq yoxdur", "static bütün obyektlər üçün ortaqdır", "instance bütün obyektlər üçün ortaqdır", "Hər ikisi eynidir"],
      correctAnswer: 1
    },
    {
      question: "toString() metodu nə zaman çağrılır?",
      options: ["Obyekt yaradılarkən", "String-ə çevrilərkən", "Obyekt silinərkən", "Hesablama edilərkən"],
      correctAnswer: 1
    },
    {
      question: "static metod hansı açar sözlə elan edilir?",
      options: ["this", "static", "class", "public"],
      correctAnswer: 1
    },
    {
      question: "extends açar sözü nə üçün istifadə olunur?",
      options: ["Class yaratmaq", "Varislik (inheritance)", "Modul import", "Interface"],
      correctAnswer: 1
    },
    {
      question: "super() funksiyası nəyi çağırır?",
      options: ["Cari obyekti", "Parent class constructor-ını", "Static metodu", "Global obyekti"],
      correctAnswer: 1
    }
  ]
};

export default topicai9;