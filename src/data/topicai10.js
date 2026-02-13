export const topicai10 = {
  id: 10,
  title: "OOP: Inheritance və Polymorphism",
  duration: "130 dəq",
  isFree: false,
  
  content: `
    <h4>🏗️ OOP-nin İkinci Pilləri</h4>
    <p>Əvvəlki dərsdə Class və Object öyrəndik. İndi isə OOP-nin ən güclü iki xüsusiyyətini öyrənəcəyik: <strong>Inheritance (İrsiyyət)</strong> və <strong>Polymorphism (Çoxformalılıq)</strong>. Bu konseptlər kodumuzu daha az yazmağa, daha çox iş görməyə və daha asan idarə etməyə imkan verir.</p>

    <h4>👨‍👩‍👧‍👦 Inheritance (İrsiyyət) - Nədir?</h4>
    <p>Təsəvvür edin ki, bir <strong>Heyvan</strong> class-ı yaradırsınız. Bu heyvanların hamısının adı, yaşı və səs çıxarma qabiliyyəti var. İndi <strong>İt</strong> və <strong>Pişik</strong> class-ları yaratmaq istəyirsiniz. Hər ikisinin də adı və yaşı var, amma səsləri fərqlidir.</p>
    
    <p><strong>İrsiyyət</strong> deyir ki: "Heyvan class-ının bütün xüsusiyyətlərini İt və Pişik-ə ver, əlavə olaraq özünə məxsus şeylər əlavə et". Yəni təkrar kod yazmırsan, var olan kodu <strong>miras alırsan</strong>.</p>

    <pre><code># Əsas (Parent) Class
class Heyvan:
    def __init__(self, ad, yas):
        self.ad = ad
        self.yas = yas
        self.tip = "Heyvan"  # Ümumi xüsusiyyət
    
    def ses_cixar(self):
        return "Hansisa ses"  # Ümumi metod
    
    def melumat_goster(self):
        return f"{self.ad}, {self.yas} yasinda {self.tip}"

# İrsiyyət alan (Child) Class - İt
class It(Heyvan):  # Heyvan class-ından miras alırıq
    def __init__(self, ad, yas, cins):
        # Əvvəlcə ata class-ın __init__-ini çağırırıq
        super().__init__(ad, yas)  # super() = ata class
        self.cins = cins
        self.tip = "It"  # Üstünə yazırıq (override)
    
    # Metodu üstünə yazırıq (override)
    def ses_cixar(self):
        return "Hav! Hav!"
    
    # Yeni metod əlavə edirik
    def top_getir(self):
        return f"{self.ad} topu gətirdi!"

# İrsiyyət alan (Child) Class - Pişik
class Pisik(Heyvan):
    def __init__(self, ad, yas, reng):
        super().__init__(ad, yas)
        self.reng = reng
        self.tip = "Pisik"
    
    def ses_cixar(self):
        return "Miyav! Miyav!"
    
    def tirnaq_itile(self):
        return f"{self.ad} divarı tirnaqlayır"

# İstifadə
bobik = It("Bobik", 3, "Alabay")
mestan = Pisik("Mestan", 2, "Boz")

print(bobik.melumat_goster())  # Bobik, 3 yasinda It
print(bobik.ses_cixar())       # Hav! Hav!
print(bobik.top_getir())       # Bobik topu gətirdi!

print(mestan.melumat_goster()) # Mestan, 2 yasinda Pisik
print(mestan.ses_cixar())      # Miyav! Miyav!</code></pre>

    <h4>🔑 super() Funksiyası - Ata Class-a Zəng</h4>
    <p><code>super()</code> çox vacibdir. O, ata class-ın metodlarına çatmağa imkan verir. Məsələn, <code>super().__init__()</code> deyərək ata class-ın constructor-unu çağırırıq.</p>
    
    <pre><code>class Qus(Heyvan):
    def __init__(self, ad, yas, qanad_genisliyi):
        # Ata class-ın işini gör
        super().__init__(ad, yas)
        # Özümüzünkünü əlavə et
        self.qanad_genisliyi = qanad_genisliyi
    
    def ses_cixar(self):
        # Əvvəl ata class-ın metodunu çağır
        base_ses = super().ses_cixar()
        return f"{base_ses}... amma ciy ciy!"

# İstifadə
qaranqush = Qus("Qaranqush", 1, 25)
print(qaranqush.ses_cixar())  # Hansisa ses... amma ciy ciy!</code></pre>

    <h4>🎯 Polymorphism (Çoxformalılıq) - Eyni Əmr, Fərqli Nəticə</h4>
    <p>Polymorphism yunancadan "çox formalar" deməkdir. Proqramlaşdırmada bu o deməkdir ki, <strong>eyni metod adı</strong> fərli class-larda <strong>fərqli işlər</strong> görə bilər.</p>
    
    <p>Misal: <code>ses_cixar()</code> metodu hər heyvanda fərqli səs verir, amma çağırış eynidir.</p>

    <pre><code># Polymorphism nümunəsi
def heyvan_sesi_dinle(heyvan):
    """Bu funksiya hər hansı Heyvan class-ından olan obyekti qəbul edir"""
    print(f"{heyvan.ad} deyir: {heyvan.ses_cixar()}")

# Eyni funksiya, fərqli nəticələr
heyvan_sesi_dinle(bobik)    # Bobik deyir: Hav! Hav!
heyvan_sesi_dinle(mestan)   # Mestan deyir: Miyav! Miyav!
heyvan_sesi_dinle(qaranqush) # Qaranqush deyir: Hansisa ses... amma ciy ciy!

# List-də müxtəlif heyvanlar
heyvanlar = [It("Rex", 4, "Ovcharka"), Pisik("Tom", 3, "Sari"), Qus("Cik", 1, 15)]

for heyvan in heyvanlar:
    heyvan_sesi_dinle(heyvan)  # Hər biri öz səsini çıxarır!</code></pre>

    <h4>🏢 Real Hayat Nümunəsi: Şirkət İdarəetmə Sistemi</h4>
    <pre><code>class Isci:
    """Bütün işçilərin əsas class-ı"""
    def __init__(self, ad, maas):
        self.ad = ad
        self.maas = maas
        self.vezife = "Isci"
    
    def maas_hesabla(self):
        return self.maas
    
    def melumat(self):
        return f"{self.ad} - {self.vezife}: {self.maas} AZN"

class Muhendis(Isci):
    def __init__(self, ad, maas, sahe):
        super().__init__(ad, maas)
        self.vezife = "Muhendis"
        self.sahe = sahe
        self.bonus = 500  # Mühəndis bonusu
    
    def maas_hesabla(self):
        # Əsas maaş + bonus
        return super().maas_hesabla() + self.bonus
    
    def layihe_isle(self):
        return f"{self.ad} {self.sahe} sahəsində layihə işləyir"

class Menecer(Isci):
    def __init__(self, ad, maas, komanda_sayi):
        super().__init__(ad, maas)
        self.vezife = "Menecer"
        self.komanda_sayi = komanda_sayi
        self.bonus = 1000
    
    def maas_hesabla(self):
        # Hər işçi üçün əlavə 100 AZN
        return super().maas_hesabla() + self.bonus + (self.komanda_sayi * 100)
    
    def komanda_idare_et(self):
        return f"{self.ad} {self.komanda_sayi} nəfərlik komanda idarə edir"

# İstifadə
ali = Muhendis("Ali", 2000, "Backend")
veli = Menecer("Veli", 2500, 5)

print(ali.melumat())           # Ali - Muhendis: 2000 AZN
print(ali.maas_hesabla())      # 2500 (2000 + 500 bonus)
print(veli.maas_hesabla())     # 4000 (2500 + 1000 + 500)

# Polymorphism: Eyni metod, fərqli hesablatma
isciler = [ali, veli]
for isci in isciler:
    print(f"{isci.ad}: {isci.maas_hesabla()} AZN")</code></pre>

    <h4>🔒 Protected və Private - Giriş Nəzarəti</h4>
    <p>Bəzən class-ın daxili dəyişənlərini kənardan dəyişməmək istəyirik:</p>
    
    <pre><code>class BankHesab:
    def __init__(self, sahib, balans):
        self.sahib = sahib
        self._balans = balans        # Protected (_): Məsləhət görülür dəyişməyin
        self.__pin_kod = "1234"      # Private (__): Python adı dəyişir, çətin çatmaq olur
    
    def balans_goster(self):
        return self._balans
    
    def pul_cixart(self, mebleg, pin):
        if pin == self.__pin_kod and mebleg <= self._balans:
            self._balans -= mebleg
            return f"{mebleg} AZN çıxarıldı. Qalıq: {self._balans}"
        return "Əməliyyat uğursuz oldu"

hesab = BankHesab("Orxan", 1000)
print(hesab._balans)        # Olar, amma məsləhət deyil
# print(hesab.__pin_kod)    # XƏTA! Bu formada çatmaq olmaz
print(hesab._BankHesab__pin_kod)  # Amma bu formada olur (name mangling)</code></pre>

    <h4>🧬 Multiple Inheritance (Çoxlu İrsiyyət)</h4>
    <p>Python bir class-ın birdən çox class-dan irsiyyət almasına icazə verir:</p>
    
    <pre><code>class UzaqdanIdare:
    def __init__(self):
        self.uzagdan_idare = True
    
    def uzaqdan_idare_et(self):
        return "Uzaqdan idarə edilir"

class Sualti:
    def __init__(self):
        self.sualti_qabiliyyeti = True
    
    def dal(self):
        return "Sualtına endi"

# Hər ikisindən irsiyyət alır
class SualtiDrone(UzaqdanIdare, Sualti):
    def __init__(self):
        # Hər iki ata class-ın __init__-ini çağırmaq lazımdır
        UzaqdanIdare.__init__(self)
        Sualti.__init__(self)
        self.model = "AquaDrone-X1"
    
    def missiya(self):
        return f"{self.model} sualtı kəşfiyyat aparır"

drone = SualtiDrone()
print(drone.uzaqdan_idare_et())  # Uzaqdan idarə edilir
print(drone.dal())               # Sualtına endi
print(drone.missiya())           # AquaDrone-X1 sualtı kəşfiyyat aparır</code></pre>

    <h4>📊 isinstance() və issubclass() - Yoxlama Funksiyaları</h4>
    <pre><code># Obyektin hansı class-dan olduğunu yoxlamaq
print(isinstance(bobik, It))        # True
print(isinstance(bobik, Heyvan))    # True (çünki İt Heyvan-dandır)
print(isinstance(bobik, Pisik))     # False

# Class-ın başqa class-dan törəyib-törəmədiyini yoxlamaq
print(issubclass(It, Heyvan))       # True
print(issubclass(Heyvan, It))       # False

# Tip yoxlamağı polymorphism ilə əvəz etmək daha yaxşıdır:
def heyvan_yemek_ver(heyvan):
    # Yoxsa belə yazmaq olar (Pisilim):
    if isinstance(heyvan, It):
        print("Sümük verilir")
    elif isinstance(heyvan, Pisik):
        print("Balıq verilir")
    # Amma daha yaxşısı - polymorphism:
    # heyvan.yemek_ye() metodu hər class-da fərqli olsun</code></pre>

    <h4>🎓 Abstrakt Class-lar (məcburi metodlar)</h4>
    <p>Bəzən deyirik ki: "Bu class-dan irsiyyət alan hər kəs BU metodu yazmalıdır":</p>
    
    <pre><code>from abc import ABC, abstractmethod

class Sekil(ABC):  # Abstrakt Base Class
    @abstractmethod
    def sahe_hesabla(self):
        pass  # Heç nə yazmırıq, törəyən yazmalıdır
    
    @abstractmethod
    def perimetr_hesabla(self):
        pass

class Daire(Sekil):
    def __init__(self, radius):
        self.radius = radius
    
    def sahe_hesabla(self):
        return 3.14 * self.radius ** 2
    
    def perimetr_hesabla(self):
        return 2 * 3.14 * self.radius

class Duzbucaqli(Sekil):
    def __init__(self, en, uzunluq):
        self.en = en
        self.uzunluq = uzunluq
    
    def sahe_hesabla(self):
        return self.en * self.uzunluq
    
    def perimetr_hesabla(self):
        return 2 * (self.en + self.uzunluq)

# sekil = Sekil()  # XƏTA! Abstrakt class-dan obyekt yaratmaq olmaz
daire = Daire(5)
print(daire.sahe_hesabla())  # 78.5</code></pre>

    <h4>⚖️ Inheritance vs Composition</h4>
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">Inheritance (İrsiyyət)</th>
        <th style="padding: 12px;">Composition (Komposisiya)</th>
      </tr>
      <tr>
        <td style="padding: 10px;">"IS-A" əlaqəsi (İt Heyvandır)</td>
        <td style="padding: 10px;">"HAS-A" əlaqəsi (Maşın Müherrikə malikdir)</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Güclü bağlılıq</td>
        <td style="padding: 10px;">Zəif bağlılıq (daha çevik)</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Kod təkrarının qarşısını alır</td>
        <td style="padding: 10px;">Daha asan dəyişdirilir</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Dərin iyerarxiya qarışıq ola bilər</td>
        <td style="padding: 10px;">Daha aydın struktur</td>
      </tr>
    </table>

    <pre><code># Composition nümunəsi
class Muherrik:
    def ise_sal(self):
        return "Brrrmmm!"

class Teker:
    def firla(self):
        return "Təkərlər fırlanır"

class Masin:
    def __init__(self):
        self.muherrik = Muherrik()  # Komposisiya
        self.tekerler = [Teker() for _ in range(4)]  # 4 təkər
    
    def hereket_et(self):
        ses = self.muherrik.ise_sal()
        for teker in self.tekerler:
            teker.firla()
        return f"{ses} Maşın hərəkətə başladı!"

masin = Masin()
print(masin.hereket_et())</code></pre>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li><strong>Dry Principle:</strong> Don't Repeat Yourself - təkrar kod yazmayın, irsiyyət istifadə edin</li>
      <li><strong>Liskov Substitution:</strong> Ata class-ın obyekti olan yerdə, törəyən class-ın obyekti də işləməlidir</li>
      <li>Çox dərin irsiyyət zəncirlərindən (5+ səviyyə) qaçın</li>
      <li>super() həmişə ilk sətirdə çağrılmalıdır</li>
      <li>Polymorphism ilə tip yoxlamalarından (if isinstance) qaçın</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="oop-lab">
  <h2>🏗️ Inheritance & Polymorphism Lab</h2>
  
  <section class="demo-section">
    <h3>1. Heyvan İrsiyyət Ağacı</h3>
    <div class="inheritance-tree">
      <div class="class-box parent" onclick="showClass('Heyvan')">
        <span class="class-name">Heyvan</span>
        <div class="class-attrs">+ ad, yas<br>+ ses_cixar()</div>
      </div>
      <div class="tree-connections">
        <div class="connection-line"></div>
        <div class="branches">
          <div class="branch" onclick="showClass('It')">
            <div class="class-box child">
              <span class="class-name">It</span>
              <div class="class-attrs">+ cins<br>+ ses_cixar() override<br>+ top_getir()</div>
            </div>
          </div>
          <div class="branch" onclick="showClass('Pisik')">
            <div class="class-box child">
              <span class="class-name">Pisik</span>
              <div class="class-attrs">+ reng<br>+ ses_cixar() override<br>+ tirnaq_itile()</div>
            </div>
          </div>
          <div class="branch" onclick="showClass('Qus')">
            <div class="class-box child">
              <span class="class-name">Qus</span>
              <div class="class-attrs">+ qanad_genisliyi<br>+ ses_cixar() override<br>+ uç()</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="class-details" id="classDetails">
      <p>Class seçin ki, detalları görəsiniz...</p>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Polymorphism Demo - Virtual Zoopark</h3>
    <div class="zoo-simulator">
      <div class="animal-selector">
        <button onclick="addAnimal('it')">🐕 İt əlavə et</button>
        <button onclick="addAnimal('pisik')">🐱 Pişik əlavə et</button>
        <button onclick="addAnimal('qus')">🐦 Quş əlavə et</button>
        <button onclick="clearZoo()">🗑️ Təmizlə</button>
      </div>
      <div class="zoo-stage" id="zooStage">
        <div class="empty-state">Heyvan əlavə edin...</div>
      </div>
      <button class="action-btn" onclick="makeAllSounds()">🔊 Hamısına səs çıxart</button>
      <div class="sound-log" id="soundLog"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Şirkət İdarəetmə Sistemi</h3>
    <div class="company-system">
      <div class="employee-form">
        <h4>Yeni İşçi Əlavə Et</h4>
        <select id="empType">
          <option value="muhendis">Mühəndis</option>
          <option value="menecer">Menecer</option>
          <option value="isci">Sadə İşçi</option>
        </select>
        <input type="text" id="empName" placeholder="Ad Soyad">
        <input type="number" id="empSalary" placeholder="Əsas maaş">
        <input type="text" id="empExtra" placeholder="Əlavə məlumat (sahe/komanda)">
        <button onclick="addEmployee()">Əlavə et</button>
      </div>
      <div class="payroll-system">
        <h4>Əmək Haqqı Sistemi</h4>
        <div class="employee-list" id="employeeList"></div>
        <div class="payroll-summary" id="payrollSummary"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Method Resolution Order (MRO)</h3>
    <div class="mro-demo">
      <div class="diamond-inheritance">
        <div class="class-node a">A</div>
        <div class="level-2">
          <div class="class-node b">B</div>
          <div class="class-node c">C</div>
        </div>
        <div class="class-node d">D</div>
      </div>
      <div class="mro-result" id="mroResult">
        <button onclick="calculateMRO()">MRO Hesabla</button>
        <div class="mro-path" id="mroPath"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Abstrakt Class Simulyatoru</h3>
    <div class="abstract-demo">
      <div class="shape-creator">
        <button onclick="createShape('daire')">🔵 Dairə yarat</button>
        <button onclick="createShape('kvadrat')">🟦 Kvadrat yarat</button>
        <button onclick="createShape('duzbucaqli')">▭ Düzbucaqlı yarat</button>
      </div>
      <div class="shape-canvas" id="shapeCanvas"></div>
      <div class="shape-info" id="shapeInfo"></div>
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
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.oop-lab {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #e94560;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 20px rgba(233, 69, 96, 0.5);
}

h3 {
  color: #00d9ff;
  margin-bottom: 20px;
  font-size: 22px;
  border-left: 4px solid #00d9ff;
  padding-left: 15px;
}

h4 {
  color: #ffd700;
  margin-bottom: 15px;
  font-size: 18px;
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

/* Inheritance Tree */
.inheritance-tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.class-box {
  background: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%);
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 150px;
  text-align: center;
  position: relative;
  border: 2px solid transparent;
}

.class-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(233, 69, 96, 0.4);
  border-color: #ffd700;
}

.class-box.parent {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #000;
  font-size: 20px;
  font-weight: bold;
}

.class-box.child {
  background: linear-gradient(135deg, #00d9ff 0%, #00b4d8 100%);
  color: #000;
}

.class-name {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
}

.class-attrs {
  font-size: 12px;
  opacity: 0.9;
  text-align: left;
  font-family: 'Fira Code', monospace;
}

.tree-connections {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.connection-line {
  width: 2px;
  height: 40px;
  background: #00d9ff;
  position: relative;
}

.connection-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: -150px;
  width: 300px;
  height: 2px;
  background: #00d9ff;
}

.branches {
  display: flex;
  gap: 50px;
  margin-top: 20px;
}

.branch {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.branch::before {
  content: '';
  width: 2px;
  height: 20px;
  background: #00d9ff;
  margin-bottom: 10px;
}

.class-details {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  border-left: 4px solid #ffd700;
  font-family: 'Fira Code', monospace;
  min-height: 100px;
}

/* Zoo Simulator */
.zoo-simulator {
  text-align: center;
}

.animal-selector {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.animal-selector button {
  background: #30363d;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
}

.animal-selector button:hover {
  background: #00d9ff;
  color: #000;
}

.zoo-stage {
  background: #0d1117;
  border-radius: 15px;
  padding: 30px;
  min-height: 200px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border: 2px dashed #30363d;
}

.empty-state {
  color: #8b949e;
  font-style: italic;
}

.animal-card {
  background: linear-gradient(135deg, #2d3436 0%, #636e72 100%);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  animation: popIn 0.5s ease;
  border: 2px solid #00d9ff;
  min-width: 120px;
}

.animal-card.it { border-color: #e94560; background: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%); }
.animal-card.pisik { border-color: #ffd700; background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%); color: #000; }
.animal-card.qus { border-color: #00d9ff; background: linear-gradient(135deg, #00d9ff 0%, #00b4d8 100%); color: #000; }

.animal-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.animal-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.animal-sound {
  font-size: 12px;
  opacity: 0.8;
}

.action-btn {
  background: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s;
}

.action-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(233, 69, 96, 0.4);
}

.sound-log {
  margin-top: 20px;
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  font-family: 'Fira Code', monospace;
  max-height: 200px;
  overflow-y: auto;
}

.sound-entry {
  padding: 8px;
  margin: 5px 0;
  background: rgba(0, 217, 255, 0.1);
  border-radius: 5px;
  border-left: 3px solid #00d9ff;
  animation: slideRight 0.3s ease;
}

/* Company System */
.company-system {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.employee-form, .payroll-system {
  background: rgba(0, 0, 0, 0.2);
  padding: 25px;
  border-radius: 12px;
}

.employee-form input, .employee-form select {
  width: 100%;
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 15px;
}

.employee-form button {
  width: 100%;
  background: linear-gradient(135deg, #00d9ff 0%, #00b4d8 100%);
  color: #000;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.employee-list {
  max-height: 300px;
  overflow-y: auto;
}

.employee-item {
  background: #1a1a2e;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-left: 4px solid #ffd700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.employee-type {
  font-size: 12px;
  color: #00d9ff;
  text-transform: uppercase;
  font-weight: bold;
}

.employee-salary {
  color: #00ff88;
  font-weight: bold;
}

/* MRO Demo */
.diamond-inheritance {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.class-node {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
}

.class-node.a { background: #e94560; }
.class-node.b { background: #ffd700; color: #000; }
.class-node.c { background: #00d9ff; color: #000; }
.class-node.d { background: #00ff88; color: #000; }

.level-2 {
  display: flex;
  gap: 100px;
}

.mro-path {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
}

.mro-step {
  background: #1a1a2e;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid #00d9ff;
  animation: fadeIn 0.5s ease;
}

/* Shape Demo */
.shape-creator {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.shape-creator button {
  background: #30363d;
  border: 2px solid #ffd700;
  color: #ffd700;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.shape-creator button:hover {
  background: #ffd700;
  color: #000;
}

.shape-canvas {
  background: #0d1117;
  border-radius: 15px;
  min-height: 250px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.shape-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: popIn 0.5s ease;
}

.shape-visual {
  margin-bottom: 10px;
}

.shape-visual.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%);
}

.shape-visual.square {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #00d9ff 0%, #00b4d8 100%);
}

.shape-visual.rect {
  width: 140px;
  height: 80px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
}

.shape-data {
  text-align: center;
  font-size: 14px;
}

@keyframes popIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes slideRight {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  body { padding: 20px; }
  .company-system { grid-template-columns: 1fr; }
  .branches { flex-direction: column; gap: 20px; }
  .connection-line::before { display: none; }
}`,

    js: `// OOP Inheritance & Polymorphism Lab
let zoo = [];
let employees = [];

function showClass(className) {
  const details = document.getElementById('classDetails');
  const codes = {
    'Heyvan': \`class Heyvan:
    def __init__(self, ad, yas):
        self.ad = ad
        self.yas = yas
    
    def ses_cixar(self):
        return "Hansisa ses"\`,
    'It': \`class It(Heyvan):
    def __init__(self, ad, yas, cins):
        super().__init__(ad, yas)
        self.cins = cins
    
    def ses_cixar(self):
        return "Hav! Hav!"\`,
    'Pisik': \`class Pisik(Heyvan):
    def __init__(self, ad, yas, reng):
        super().__init__(ad, yas)
        self.reng = reng
    
    def ses_cixar(self):
        return "Miyav!"\`,
    'Qus': \`class Qus(Heyvan):
    def __init__(self, ad, yas, qanad):
        super().__init__(ad, yas)
        self.qanad_genisliyi = qanad
    
    def ses_cixar(self):
        return "Ciy ciy!"\`
  };
  
  details.innerHTML = '<pre style="color: #00ff88; margin: 0;">' + codes[className] + '</pre>';
}

function addAnimal(type) {
  const names = {
    'it': ['Rex', 'Bobik', 'Lucky', 'Kara'],
    'pisik': ['Mestan', 'Tom', 'Leyla', 'Pamuk'],
    'qus': ['Cik', 'Qaranqush', 'Tutu', 'Sari']
  };
  
  const name = names[type][Math.floor(Math.random() * names[type].length)];
  const id = Date.now();
  
  zoo.push({ type, name, id });
  renderZoo();
}

function renderZoo() {
  const stage = document.getElementById('zooStage');
  if (zoo.length === 0) {
    stage.innerHTML = '<div class="empty-state">Heyvan əlavə edin...</div>';
    return;
  }
  
  stage.innerHTML = zoo.map(animal => {
    const icons = { 'it': '🐕', 'pisik': '🐱', 'qus': '🐦' };
    const sounds = { 'it': 'Hav! Hav!', 'pisik': 'Miyav!', 'qus': 'Ciy ciy!' };
    
    return '<div class="animal-card ' + animal.type + '">' +
      '<div class="animal-icon">' + icons[animal.type] + '</div>' +
      '<div class="animal-name">' + animal.name + '</div>' +
      '<div class="animal-sound">' + sounds[animal.type] + '</div>' +
      '</div>';
  }).join('');
}

function clearZoo() {
  zoo = [];
  renderZoo();
  document.getElementById('soundLog').innerHTML = '';
}

function makeAllSounds() {
  if (zoo.length === 0) return;
  
  const log = document.getElementById('soundLog');
  const sounds = { 
    'it': (name) => name + ' deyir: Hav! Hav! 🐕',
    'pisik': (name) => name + ' deyir: Miyav! 🐱',
    'qus': (name) => name + ' deyir: Ciy ciy! 🐦'
  };
  
  zoo.forEach((animal, index) => {
    setTimeout(() => {
      const entry = document.createElement('div');
      entry.className = 'sound-entry';
      entry.textContent = sounds[animal.type](animal.name);
      log.appendChild(entry);
      log.scrollTop = log.scrollHeight;
    }, index * 500);
  });
}

function addEmployee() {
  const type = document.getElementById('empType').value;
  const name = document.getElementById('empName').value;
  const salary = parseInt(document.getElementById('empSalary').value) || 0;
  const extra = document.getElementById('empExtra').value;
  
  if (!name || !salary) {
    alert('Zəhmət olmasa bütün sahələri doldurun!');
    return;
  }
  
  let finalSalary = salary;
  let typeLabel = '';
  
  switch(type) {
    case 'muhendis':
      finalSalary += 500;
      typeLabel = 'Mühəndis';
      break;
    case 'menecer':
      const teamSize = parseInt(extra) || 0;
      finalSalary += 1000 + (teamSize * 100);
      typeLabel = 'Menecer';
      break;
    default:
      typeLabel = 'İşçi';
  }
  
  employees.push({ name, type: typeLabel, baseSalary: salary, finalSalary });
  renderEmployees();
  
  // Clear form
  document.getElementById('empName').value = '';
  document.getElementById('empSalary').value = '';
  document.getElementById('empExtra').value = '';
}

function renderEmployees() {
  const list = document.getElementById('employeeList');
  const summary = document.getElementById('payrollSummary');
  
  if (employees.length === 0) {
    list.innerHTML = '<p style="color: #8b949e; text-align: center;">İşçi yoxdur...</p>';
    summary.innerHTML = '';
    return;
  }
  
  list.innerHTML = employees.map(emp => 
    '<div class="employee-item">' +
      '<div>' +
        '<div style="font-weight: bold;">' + emp.name + '</div>' +
        '<div class="employee-type">' + emp.type + '</div>' +
      '</div>' +
      '<div class="employee-salary">' + emp.finalSalary + ' AZN</div>' +
    '</div>'
  ).join('');
  
  const total = employees.reduce((sum, emp) => sum + emp.finalSalary, 0);
  summary.innerHTML = '<div style="margin-top: 20px; padding: 20px; background: #0d1117; border-radius: 8px; text-align: center;">' +
    '<div style="color: #8b949e; margin-bottom: 10px;">Ümumi maaş fondü</div>' +
    '<div style="font-size: 28px; color: #00ff88; font-weight: bold;">' + total + ' AZN</div>' +
    '<div style="color: #8b949e; margin-top: 5px;">' + employees.length + ' işçi</div>' +
  '</div>';
}

function calculateMRO() {
  const path = document.getElementById('mroPath');
  path.innerHTML = '';
  
  const steps = ['D', 'B', 'C', 'A', 'object'];
  const colors = ['#00ff88', '#ffd700', '#00d9ff', '#e94560', '#8b949e'];
  
  steps.forEach((step, index) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'mro-step';
      div.textContent = step;
      div.style.borderColor = colors[index];
      div.style.color = colors[index];
      path.appendChild(div);
      
      if (index < steps.length - 1) {
        const arrow = document.createElement('span');
        arrow.textContent = '→';
        arrow.style.color = '#8b949e';
        arrow.style.fontSize = '20px';
        path.appendChild(arrow);
      }
    }, index * 600);
  });
}

function createShape(type) {
  const canvas = document.getElementById('shapeCanvas');
  const info = document.getElementById('shapeInfo');
  
  const shapeDiv = document.createElement('div');
  shapeDiv.className = 'shape-item';
  
  let visualClass = '';
  let shapeName = '';
  let area = 0;
  let perimeter = 0;
  
  switch(type) {
    case 'daire':
      visualClass = 'circle';
      shapeName = 'Dairə';
      const r = Math.floor(Math.random() * 5) + 3;
      area = (3.14 * r * r).toFixed(2);
      perimeter = (2 * 3.14 * r).toFixed(2);
      break;
    case 'kvadrat':
      visualClass = 'square';
      shapeName = 'Kvadrat';
      const side = Math.floor(Math.random() * 5) + 3;
      area = (side * side).toFixed(2);
      perimeter = (4 * side).toFixed(2);
      break;
    case 'duzbucaqli':
      visualClass = 'rect';
      shapeName = 'Düzbucaqlı';
      const w = Math.floor(Math.random() * 4) + 4;
      const h = Math.floor(Math.random() * 3) + 2;
      area = (w * h).toFixed(2);
      perimeter = (2 * (w + h)).toFixed(2);
      break;
  }
  
  shapeDiv.innerHTML = 
    '<div class="shape-visual ' + visualClass + '"></div>' +
    '<div class="shape-data">' +
      '<strong>' + shapeName + '</strong><br>' +
      'Sahə: ' + area + '<br>' +
      'Perimetr: ' + perimeter +
    '</div>';
  
  canvas.appendChild(shapeDiv);
  
  // Show polymorphism message
  info.innerHTML = '<div style="background: rgba(0, 217, 255, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #00d9ff; margin-top: 20px;">' +
    '<strong>Polymorphism işləyir!</strong><br>' +
    'Hər formanın <code>sahe_hesabla()</code> və <code>perimetr_hesabla()</code> metodu fərqli işləyir, ' +
    'amma eyni interfeysdən istifadə edirik.' +
  '</div>';
}

// Initialize
console.log('OOP Inheritance Lab loaded!');`
  },

  exercise: {
    title: "🏦 Bank İdarəetmə Sistemi - OOP Tətbiqi",
    description: "Inheritance və Polymorphism istifadə edərək tam funksional bank sistemi yaradın. Müxtəlif hesab tipləri (Adi, Premium, Business) fərqli qaydalarla işləməlidir.",
    requirements: [
      "Əsas BankHesab class-ı yaradın (sahib, balans, hesab_nomresi)",
      "AdiHesab class-ı yaradın (aylıq 5 AZN xidmət haqqı, 500 AZN limit)",
      "PremiumHesab class-ı yaradın (0 xidmət haqqı, 5000 AZN limit, 2% cashback)",
      "BusinessHesab class-ı yaradın (20 AZN xidmət haqqı, limitsiz, çox istifadəçi)",
      "Hər hesab tipində pul_cixart() metodu fərqli işləməlidir (polymorphism)",
      "Hesablar arası pul köçürmə funksiyası əlavə edin",
      "Aylıq hesabat generasiya edin (hər hesab tipi üçün fərqli format)",
      "JSON formatında hesab məlumatlarını saxlayın və oxuyun",
      "Bonus: ATM interfeysi simulyasiya edin (menu sistemi)",
      "İnput validasiyası əlavə edin (mənfi pul olmaz, limiti aşmamaq və s.)"
    ],
    starterCode: `from abc import ABC, abstractmethod
import json
from datetime import datetime

class BankHesab(ABC):
    """Əsas (Abstrakt) Bank Hesab Class-ı"""
    
    def __init__(self, sahib, hesab_nomresi, balans=0):
        self.sahib = sahib
        self.hesab_nomresi = hesab_nomresi
        self._balans = balans  # Protected
        self.__emilyyat_tarixcesi = []  # Private
        self.acilis_tarixi = datetime.now()
    
    @property
    def balans(self):
        """Balansı təhlükəsiz oxu"""
        return self._balans
    
    @abstractmethod
    def pul_cixart(self, mebleg):
        """Hər hesab tipində fərqli işləməlidir - Polymorphism"""
        pass
    
    @abstractmethod
    def ayliq_xidmet_haqqi(self):
        """Aylıq xidmət haqqı"""
        pass
    
    def pul_elave_et(self, mebleg):
        """Pul əlavə et (ümumi)"""
        # Kodunuzu bura yazın
        pass
    
    def _emilyyat_qeyd_et(self, emilyyat):
        """Private: Əməliyyat tarixçəsinə əlavə et"""
        # Kodunuzu bura yazın
        pass
    
    def hesabat_goster(self):
        """Ümumi hesabat"""
        # Kodunuzu bura yazın
        pass

class AdiHesab(BankHesab):
    """Adi Hesab - 5 AZN xidmət haqqı, 500 AZN limit"""
    
    def __init__(self, sahib, hesab_nomresi, balans=0):
        super().__init__(sahib, hesab_nomresi, balans)
        self.hesab_tipi = "Adi"
        self.gunluk_limit = 500
    
    def pul_cixart(self, mebleg):
        """Adi hesab üçün pul çıxartma qaydaları"""
        # Kodunuzu bura yazın
        # Yoxlama: balans yetərlidirmi? limit aşılıbmı?
        pass
    
    def ayliq_xidmet_haqqi(self):
        return 5

class PremiumHesab(BankHesab):
    """Premium Hesab - 0 xidmət haqqı, 5000 limit, 2% cashback"""
    
    def __init__(self, sahib, hesab_nomresi, balans=0):
        super().__init__(sahib, hesab_nomresi, balans)
        self.hesab_tipi = "Premium"
        self.gunluk_limit = 5000
        self.cashback_faizi = 0.02
        self.cashback_qazanci = 0
    
    def pul_cixart(self, mebleg):
        """Premium hesab üçün pul çıxartma + cashback"""
        # Kodunuzu bura yazın
        # Cashback hesabla (2%)
        pass
    
    def ayliq_xidmet_haqqi(self):
        return 0
    
    def cashback_goster(self):
        return self.cashback_qazanci

class BusinessHesab(BankHesab):
    """Business Hesab - 20 AZN xidmət, limitsiz, çox istifadəçi"""
    
    def __init__(self, sirket_adi, hesab_nomresi, balans=0):
        super().__init__(sirket_adi, hesab_nomresi, balans)
        self.hesab_tipi = "Business"
        self.gunluk_limit = float('inf')  # Limitsiz
        self.icazeli_istifadeciler = []
        self.xidmet_haqqi = 20
    
    def pul_cixart(self, mebleg, istifadeci=None):
        """Business hesab - istifadəçi yoxlaması ilə"""
        # Kodunuzu bura yazın
        # Yoxla: istifadeci icazelidirmi?
        pass
    
    def istifadeci_elave_et(self, istifadeci):
        # Kodunuzu bura yazın
        pass
    
    def ayliq_xidmet_haqqi(self):
        return self.xidmet_haqqi

def hesablar_arasi_kocurme(gonderen, alan, mebleg):
    """Hesablar arası pul köçürmə"""
    # Polymorphism: hər hesabın öz pul_cixart() metodu işləyir
    # Kodunuzu bura yazın
    pass

def atm_menyu(hesab):
    """ATM interfeysi"""
    while True:
        print("\\n=== ATM MENYU ===")
        print("1. Balans göstər")
        print("2. Pul çıxart")
        print("3. Pul əlavə et")
        print("4. Hesabat")
        print("5. Çıxış")
        
        # Kodunuzu bura yazın
        pass

# İstifadə nümunəsi
if __name__ == "__main__":
    # Hesablar yaradın
    adi = AdiHesab("Ali Valiyev", "AZ123456", 1000)
    premium = PremiumHesab("Veli Mammadov", "AZ789012", 5000)
    biznes = BusinessHesab("Tech LLC", "AZ999999", 50000)
    
    # Test edin
    # Kodunuzu bura yazın
    pass`,
  },

  quiz: [
    {
      question: "Inheritance nə deməkdir?",
      options: ["Kodu kopyalamaq", "Class-ın başqa class-dan xüsusiyyət alması", "Funksiya yaratmaq", "Dəyişən təyin etmək"],
      correctAnswer: 1
    },
    {
      question: "super().__init__() nə edir?",
      options: ["Proqramı dayandırır", "Ata class-ın constructor-unu çağırır", "Yeni obyekt yaradır", "Xəta verir"],
      correctAnswer: 1
    },
    {
      question: "Polymorphism nə deməkdir?",
      options: ["Bir class-dan çox obyekt yaratmaq", "Eyni metod adının fərqli işlər görməsi", "Kodu qısaltmaq", "Dəyişən adları"],
      correctAnswer: 1
    },
    {
      question: "Method Overriding nədir?",
      options: ["Yeni metod yazmaq", "Ata class-ın metodunu dəyişmək", "Metodu silmək", "Metodu çağırmaq"],
      correctAnswer: 1
    },
    {
      question: "isinstance(obj, Class) nə yoxlayır?",
      options: ["Obyektin tipini", "Obyektin həmin class-dan olub-olmamasını", "Class-ın boş olub-olmamasını", "Funksiyanın düzgünlüyünü"],
      correctAnswer: 1
    },
    {
      question: "Çoxlu irsiyyət (Multiple Inheritance) Python-da mümkündürmü?",
      options: ["Xeyr", "Bəli", "Yalnız 2 class-dan", "Yalnız 3 class-dan"],
      correctAnswer: 1
    },
    {
      question: "_variable (bir alt xətt) nə deməkdir?",
      options: ["Private dəyişən", "Protected dəyişən - məsləhət görülür dəyişməyin", "Public dəyişən", "Dəyişən silinib"],
      correctAnswer: 1
    },
    {
      question: "__variable (iki alt xətt) nə deməkdir?",
      options: ["Protected", "Private - adı dəyişilir", "Public", "Constant"],
      correctAnswer: 1
    },
    {
      question: "Abstrakt class-dan obyekt yaratmaq olarmı?",
      options: ["Bəli", "Xeyr", "Yalnız继承 olan class-larda", "Yalnız boşdursa"],
      correctAnswer: 1
    },
    {
      question: "issubclass(A, B) nə yoxlayır?",
      options: ["A-nın B-dən kiçik olub-olmamasını", "A class-ının B-dən törəyib-törəmədiyini", "A və B-nin eyni olub-olmamasını", "A-nın B-dən çox olub-olmamasını"],
      correctAnswer: 1
    }
  ]
};

export default topicai10;