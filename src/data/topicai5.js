export const topicai5 = {
  id: 5,
  title: "Funksiyalar (Functions & Lambda)",
  duration: "120 dəq",
  isFree: false,
  
  content: `
    <h4>🎯 Funksiya Nədir və Nə Üçün Lazımdır?</h4>
    <p>Təsəvvür edin ki, hər gün səhər oyananda eyni işləri görürsünüz: dişlərinizi fırçalayın, üzünüzü yuyun, səhər yeməyi yeyin. Əgər hər səhər bu siyahını yenidən yazmalı olsaydınız, necə olardı? Çox yorucu olardı, elə deyilmi?</p>
    
    <p>Proqramlaşdırmada da eyni məntiq var. Bəzi kodları təkrar-təkrar yazmaq əvəzinə, onları bir dəfə yazırıq və ad veririk. Sonra həmin adı çağıranda kod avtomatik işləyir. Bu "adlandırılmış kod blokuna" <strong>funksiya</strong> deyilir.</p>

    <p><strong>Real həyat nümunəsi:</strong> Telefonunuzdakı "Kontakt əlavə et" funksiyası. Hər dəfə yeni kontakt əlavə edəndə eyni şeylər baş verir: ad yazılır, nömrə yazılır, yaddaşda saxlanılır. Bu proses hər dəfə təkrarlanır, amma siz sadəcə "Yeni kontakt" düyməsini basırsınız.</p>

    <h4>📝 Funksiya Yaratmağın Əsas Yolu (def)</h4>
    <p>Python-da funksiya yaratmaq üçün <code>def</code> sözündən istifadə edirik. Bu, "define" (təyin etmək) sözünün qısaltmasıdır.</p>

    <pre><code># Ən sadə funksiya
def salam_ver():
    print("Salam!")

# Funksiyanı çağırmaq (işə salmaq)
salam_ver()  # Ekranda: Salam!</code></pre>

    <p><strong>Əhəmiyyətli:</strong> Funksiyanı yaratmaq yetərli deyil, onu <strong>çağırmaq</strong> (işə salmaq) lazımdır. Yuxarıdakı nümunədə <code>def salam_ver():</code> hissəsi funksiyanı yaradır, <code>salam_ver()</code> isə onu işə salır.</p>

    <h4>📥 Parametr və Arqumentlər - Məlumat Ötürmək</h4>
    <p>Funksiyalar boş da ola bilər, məlumat da qəbul edə bilər. Məsələn, salam verərkən ad çəkmək istəyiriksə:</p>

    <pre><code># Parametrli funksiya
def salam_ver(ad):
    print(f"Salam, {ad}!")

# Çağırarkən arqument ötürürük
salam_ver("Əli")      # Nəticə: Salam, Əli!
salam_ver("Leyla")    # Nəticə: Salam, Leyla!</code></pre>

    <p><strong>Terminologiya:</strong>
    <br>• <strong>Parametr</strong> = Funksiya təyin ediləndə mötərizədə yazılan dəyişən (yuxarıda: <code>ad</code>)
    <br>• <strong>Arqument</strong> = Funksiya çağırılarkən ötürülən real dəyər (yuxarıda: <code>"Əli"</code>, <code>"Leyla"</code>)</p>

    <h4>📤 return - Nəticə Qaytarmaq</h4>
    <p>Funksiyalar sadəcə çap etməklə kifayətlənməz, hesablayıb nəticə də qaytara bilər. Buna <code>return</code> deyilir.</p>

    <pre><code># Nəticə qaytaran funksiya
def topla(a, b):
    return a + b

# Nəticəni saxlamaq
netice = topla(5, 3)
print(netice)  # 8

# Birbaşa istifadə etmək
print(topla(10, 20))  # 30</code></pre>

    <p><strong>return-un xüsusiyyətləri:</strong>
    <br>1. Funksiyanı dərhal dayandırır
    <br>2. Dəyəri çağıran yerə göndərir
    <br>3. return olmayan funksiya avtomatik <code>None</code> qaytarır</p>

    <pre><code># Birdən çox dəyər qaytarmaq (tuple olaraq)
def hesabla(a, b):
    toplam = a + b
    ferq = a - b
    return toplam, ferq  # İki dəyər qaytarır

t, f = hesabla(10, 3)
print(t)  # 13
print(f)  # 7</code></pre>

    <h4>⚙️ Default (Standart) Parametr Dəyərləri</h4>
    <p>Bəzi parametrlərə əvvəlcədən dəyər verə bilərik. Əgər çağırarkən dəyər verilməsə, standart dəyər işləyir.</p>

    <pre><code># Standart dəyərlər
def salam_ver(ad, dil="az"):
    if dil == "az":
        print(f"Salam, {ad}!")
    elif dil == "en":
        print(f"Hello, {ad}!")
    else:
        print(f"Salut, {ad}!")

salam_ver("Əli")           # Salam, Əli! (dil="az" standartdır)
salam_ver("John", "en")    # Hello, John!
salam_ver("Pierre", "fr")  # Salut, Pierre!</code></pre>

    <p><strong>Qayda:</strong> Standart dəyəri olan parametrlər həmişə sona yazılmalıdır!</p>

    <h4>🎭 *args - Limitsiz Arqumentlər</h4>
    <p>Bilmirsiniz ki, neçə arqument gələcək? <code>*args</code> bütün əlavə arqumentləri tuple kimi yığır.</p>

    <pre><code># İstənilən sayda ədəd toplamaq
def topla_hepsi(*args):
    netice = 0
    for eded in args:
        netice += eded
    return netice

# Fərqli sayda arqumentlərlə işləyir
print(topla_hepsi(1, 2))      # 3
print(topla_hepsi(1, 2, 3, 4)) # 10
print(topla_hepsi())           # 0

# args tuple-dir
def goster(*args):
    print(f"Gələnlər: {args}")
    print(f"Sayı: {len(args)}")

goster("a", "b", "c")  # ('a', 'b', 'c') və 3</code></pre>

    <h4>🎨 **kwargs - Açar söz arqumentləri</h4>
    <p>Adlı parametrləri (keyword arguments) limitsiz qəbul etmək üçün <code>**kwargs</code> istifadə edilir. Bu, dictionary formatında məlumat yığır.</p>

    <pre><code># İstifadəçi məlumatları
def istifadeci_yarat(**kwargs):
    for acar, deyer in kwargs.items():
        print(f"{acar}: {deyer}")

istifadeci_yarat(ad="Əli", yas=25, seher="Bakı")
# ad: Əli
# yas: 25
# seher: Bakı

# Hər ikisini birlikdə istifadə
def tam_funksiya(ad, *args, **kwargs):
    print(f"Ad: {ad}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

tam_funksiya("Əli", 1, 2, 3, yas=25, dil="az")
# Ad: Əli
# Args: (1, 2, 3)
# Kwargs: {'yas': 25, 'dil': 'az'}</code></pre>

    <h4>⚡ Lambda Funksiyaları - Bir Sətirlik Veryüklük</h4>
    <p>Bəzi funksiyalar o qədər sadədir ki, onlar üçün ayrıca <code>def</code> yazmaq vaxt itkisidir. <code>lambda</code> bir sətirdə anonim (adsız) funksiya yaradır.</p>

    <pre><code># Normal funksiya
def kvadrat(x):
    return x ** 2

# Eynisi lambda ilə
kvadrat = lambda x: x ** 2

print(kvadrat(5))  # 25

# Birbaşa istifadə
print((lambda x: x * 2)(10))  # 20

# Çox parametrlə
topla = lambda a, b: a + b
print(topla(3, 4))  # 7</code></pre>

    <p><strong>Lambda nə vaxt istifadə edilir?</strong></p>
    <pre><code># List-i çeşidləmək (sorting) üçün
telebeler = [("Əli", 85), ("Leyla", 92), ("Səməd", 78)]

# Balına görə çeşidlə
telebeler.sort(key=lambda x: x[1])
print(telebeler)  # [('Səməd', 78), ('Əli', 85), ('Leyla', 92)]

# map() ilə - hər elementə əməliyyat
ededler = [1, 2, 3, 4]
kvadratlar = list(map(lambda x: x**2, ededler))
print(kvadratlar)  # [1, 4, 9, 16]

# filter() ilə - seçmək
cutler = list(filter(lambda x: x % 2 == 0, ededler))
print(cutler)  # [2, 4]</code></pre>

    <h4>🔄 Rekursiya - Funksiya Özünü Çağırır</h4>
    <p>Funksiya öz içində özünü çağıra bilər. Buna <strong>rekursiya</strong> deyilir. Amma diqqət: sonsuz rekursiya proqramı çökərə bilər!</p>

    <pre><code># Faktorial hesablayan rekursiv funksiya
# 5! = 5 * 4 * 3 * 2 * 1 = 120

def faktorial(n):
    # Bazis halı (dayanmaq şərti)
    if n == 0 or n == 1:
        return 1
    # Rekursiv hal
    else:
        return n * faktorial(n - 1)

print(faktorial(5))  # 120
# İzah: 5 * faktorial(4) → 5 * (4 * faktorial(3)) → ... → 120</code></pre>

    <h4>📦 Scope - Dəyişənlərin Görünüş Sahəsi</h4>
    <p>Dəyişənlər harada yaradılıbsa, orada "yaşayır".</p>

    <pre><code># Global və Local dəyişənlər
ad = "Əli"  # Global (hər yerdən görünür)

def funksiya():
    soyad = "Məmmədov"  # Local (yalnız funksiya içində)
    print(ad)      # Əli - global-ı görür
    print(soyad)   # Məmmədov

funksiya()
print(ad)      # Əli
# print(soyad) # XƏTA! Local dəyişən xaricdə görünmür

# global açar sözü ilə dəyişmək
sayac = 0

def artir():
    global sayac  # Global dəyişəni istifadə et
    sayac += 1

artir()
print(sayac)  # 1</code></pre>

    <h4>💡 Funksiya Yazmağın Qızıl Qaydaları</h4>
    <ul>
      <li><strong>Tək məsuliyyət:</strong> Bir funksiya bir iş görsün</li>
      <li><strong>Mənalı ad:</strong> <code>hesabla()</code> yox, <code>eded_ortalamasi_hesabla()</code></li>
      <li><strong>Docstring yazın:</strong> Funksiyanın əvvəlində izah yazın</li>
      <li><strong>Qısa tutun:</strong> 20-30 sətirdən uzun olmasın</li>
      <li><strong>Təkrarlanan kodları funksiyaya çevirin</strong></li>
    </ul>

    <pre><code># Yaxşı nümunə
def cevre_hesabla(radius):
    """
    Dairənin çevrəsini hesablayır.
    Parametr: radius (int/float) - radius uzunluğu
    Qaytarır: float - çevrə uzunluğu
    """
    import math
    return 2 * math.pi * radius</code></pre>
  `,

  starterCode: {
    html: `<div class="python-functions">
  <h2>⚡ Python Funksiyalar Lab</h2>
  
  <section class="demo-section">
    <h3>1. Funksiya Builder</h3>
    <div class="function-builder">
      <div class="builder-inputs">
        <label>Funksiya adı:</label>
        <input type="text" id="funcName" value="salamla" placeholder="Funksiya adı">
        
        <label>Parametrlər (vergüllə ayır):</label>
        <input type="text" id="funcParams" value="ad, yas" placeholder="a, b, c">
        
        <label>Funksiya əməliyyatı:</label>
        <select id="funcOperation">
          <option value="print">Çap et</option>
          <option value="return">Qaytar (return)</option>
          <option value="math">Hesabla</option>
        </select>
        
        <label>Əməliyyat detalı:</label>
        <input type="text" id="funcDetail" value="f'Salam, {ad}! {yas} yaşındasınız.'" placeholder="Əməliyyat">
        
        <button onclick="buildFunction()">Funksiya Yarat</button>
      </div>
      
      <div class="code-display" id="funcCode"></div>
      <div class="test-area" id="funcTest">
        <h4>Test et:</h4>
        <div id="testInputs"></div>
        <button onclick="runCustomFunction()">İşlət</button>
        <div class="result" id="funcResult"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Parametr Növləri Simulyatoru</h3>
    <div class="params-demo">
      <div class="param-tabs">
        <button onclick="showParamType('normal')" class="active">Normal</button>
        <button onclick="showParamType('default')">Default</button>
        <button onclick="showParamType('args')">*args</button>
        <button onclick="showParamType('kwargs')">**kwargs</button>
      </div>
      
      <div class="param-content" id="paramContent">
        <div class="code-example">
          <pre>def salam(ad, soyad):
    print(f'Salam, {ad} {soyad}!')</pre>
        </div>
        <div class="interactive-test">
          <input type="text" id="p1" placeholder="ad" value="Əli">
          <input type="text" id="p2" placeholder="soyad" value="Məmmədov">
          <button onclick="testParams()">Test et</button>
          <div class="output" id="paramOutput"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Lambda Funksiya Laboratoriyası</h3>
    <div class="lambda-lab">
      <div class="lambda-inputs">
        <span class="lambda-syntax">lambda</span>
        <input type="text" id="lambdaParams" value="x" placeholder="parametr">
        <span class="lambda-syntax">:</span>
        <input type="text" id="lambdaExpr" value="x**2" placeholder="ifadə">
        <button onclick="createLambda()">Yarat</button>
      </div>
      
      <div class="lambda-visual">
        <div class="lambda-box" id="lambdaBox">
          <div class="lambda-input-arrow">x →</div>
          <div class="lambda-process">x × x</div>
          <div class="lambda-output-arrow">→ <span id="lambdaResult">?</span></div>
        </div>
        <input type="range" id="lambdaTestValue" min="0" max="10" value="5" oninput="testLambda()">
        <span id="lambdaValueDisplay">5</span>
      </div>
      
      <div class="lambda-applications">
        <h4>Praktiki Tətbiqlər:</h4>
        <button onclick="demoLambdaApp('sort')">List Çeşidlə</button>
        <button onclick="demoLambdaApp('map')">Map Tətbiq et</button>
        <button onclick="demoLambdaApp('filter')">Filter Tətbiq et</button>
        <div id="lambdaAppResult"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Rekursiya Visualizer</h3>
    <div class="recursion-viz">
      <div class="recursion-controls">
        <label>Ədəd (faktorial üçün):</label>
        <input type="number" id="recNum" value="5" min="1" max="10">
        <button onclick="visualizeRecursion()">Vizualizasiya et</button>
      </div>
      
      <div class="recursion-tree" id="recursionTree"></div>
      
      <div class="recursion-stack">
        <h4>Call Stack (Zəng yığını):</h4>
        <div id="callStack"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Scope Analizatoru</h3>
    <div class="scope-analyzer">
      <div class="code-editor">
        <textarea id="scopeCode" rows="8">x = 10  # Global

def test():
    y = 5  # Local
    print(x)  # Global-ı görür
    print(y)  # Local-ı görür

test()
print(x)
# print(y)  # XƏTA!</textarea>
        <button onclick="analyzeScope()">Scope Analiz et</button>
      </div>
      
      <div class="scope-visualization" id="scopeViz">
        <div class="global-scope">
          <h5>🌍 Global Scope</h5>
          <div class="variables" id="globalVars"></div>
        </div>
        <div class="local-scope">
          <h5>📦 Local Scope (test)</h5>
          <div class="variables" id="localVars"></div>
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
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.python-functions {
  max-width: 1100px;
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
  margin: 20px 0 10px 0;
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

/* Function Builder */
.builder-inputs {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
}

.builder-inputs label {
  color: #00ff88;
  font-weight: 600;
}

.builder-inputs input, .builder-inputs select {
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}

.code-display {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  color: #7ee787;
  margin-bottom: 20px;
  border-left: 4px solid #00ff88;
  white-space: pre-wrap;
}

.test-area {
  background: rgba(0, 255, 136, 0.05);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 255, 136, 0.3);
}

.result {
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  color: #00ff88;
  font-family: monospace;
  min-height: 50px;
}

/* Param Tabs */
.param-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.param-tabs button {
  background: #30363d;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.param-tabs button.active, .param-tabs button:hover {
  background: #00d9ff;
  color: #000;
}

.param-content {
  background: #0d1117;
  padding: 25px;
  border-radius: 12px;
}

.code-example pre {
  color: #ff6b6b;
  font-family: 'Fira Code', monospace;
  margin-bottom: 20px;
  padding: 15px;
  background: #161b22;
  border-radius: 8px;
}

.interactive-test {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.interactive-test input {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  width: 150px;
}

.output {
  background: #161b22;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  color: #00ff88;
  min-height: 50px;
  font-family: monospace;
}

/* Lambda Lab */
.lambda-inputs {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  font-size: 18px;
}

.lambda-syntax {
  color: #e94560;
  font-weight: bold;
  font-size: 20px;
}

.lambda-inputs input {
  width: 150px;
  background: #0d1117;
  border: 2px solid #e94560;
  color: #e94560;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-family: 'Fira Code', monospace;
}

.lambda-visual {
  background: rgba(233, 69, 96, 0.1);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 30px;
}

.lambda-box {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  background: #0d1117;
  padding: 20px 40px;
  border-radius: 50px;
  margin-bottom: 20px;
  border: 3px solid #e94560;
}

.lambda-input-arrow, .lambda-output-arrow {
  font-size: 24px;
  color: #00ff88;
}

.lambda-process {
  background: #e94560;
  color: #fff;
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 20px;
}

.lambda-applications {
  background: #161b22;
  padding: 20px;
  border-radius: 10px;
}

.lambda-applications button {
  background: #30363d;
  border: 2px solid #ffd700;
  color: #ffd700;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 6px;
  cursor: pointer;
}

.lambda-applications button:hover {
  background: #ffd700;
  color: #000;
}

/* Recursion */
.recursion-controls {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.recursion-controls label {
  color: #00d9ff;
  font-weight: 600;
}

.recursion-controls input {
  width: 80px;
  background: #0d1117;
  border: 2px solid #00d9ff;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}

.recursion-tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.rec-node {
  background: #0d1117;
  border: 2px solid #00ff88;
  padding: 15px 25px;
  border-radius: 10px;
  position: relative;
  animation: fadeIn 0.5s ease;
}

.rec-node::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  width: 2px;
  height: 20px;
  background: #00ff88;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.recursion-stack {
  background: #161b22;
  padding: 20px;
  border-radius: 10px;
}

.stack-item {
  background: #0d1117;
  border-left: 4px solid #ffd700;
  padding: 10px;
  margin: 5px 0;
  border-radius: 0 6px 6px 0;
  font-family: monospace;
}

/* Scope Analyzer */
.code-editor {
  margin-bottom: 20px;
}

.code-editor textarea {
  width: 100%;
  background: #0d1117;
  border: 2px solid #30363d;
  color: #7ee787;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  resize: vertical;
}

.scope-visualization {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.global-scope, .local-scope {
  background: #161b22;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid transparent;
}

.global-scope {
  border-color: #00ff88;
}

.local-scope {
  border-color: #ffd700;
}

.global-scope h5 {
  color: #00ff88;
  margin-bottom: 15px;
}

.local-scope h5 {
  color: #ffd700;
  margin-bottom: 15px;
}

.variable {
  background: #0d1117;
  padding: 8px 12px;
  margin: 5px 0;
  border-radius: 6px;
  font-family: monospace;
  display: flex;
  justify-content: space-between;
}

button {
  background: linear-gradient(135deg, #00d9ff 0%, #0099cc 100%);
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
  box-shadow: 0 6px 20px rgba(0, 217, 255, 0.4);
}

@media (max-width: 768px) {
  body { padding: 20px; }
  .builder-inputs { grid-template-columns: 1fr; }
  .scope-visualization { grid-template-columns: 1fr; }
  .lambda-box { flex-direction: column; }
}`,
    js: `// Python Functions Lab
let currentFunction = null;
let currentLambda = null;

function buildFunction() {
  const name = document.getElementById('funcName').value || 'funksiya';
  const params = document.getElementById('funcParams').value || '';
  const operation = document.getElementById('funcOperation').value;
  const detail = document.getElementById('funcDetail').value || 'pass';
  
  let code = \`def \${name}(\${params}):\n    \"\"\"\n    Funksiya təsvir\n    \"\"\"\n\`;
  
  if (operation === 'print') {
    code += \`    print(\${detail})\n    # Çap edir, heç nə qaytarmır\`;
  } else if (operation === 'return') {
    code += \`    return \${detail}\n    # Nəticə qaytarır\`;
  } else {
    code += \`    netice = \${detail}\n    return netice\`;
  }
  
  document.getElementById('funcCode').textContent = code;
  
  // Test sahəsini hazırla
  const testDiv = document.getElementById('testInputs');
  testDiv.innerHTML = '';
  if (params) {
    const paramList = params.split(',').map(p => p.trim());
    paramList.forEach(param => {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = param;
      input.id = 'test_' + param;
      input.style.cssText = 'margin: 5px; padding: 8px; background: #0d1117; border: 1px solid #30363d; color: #fff; border-radius: 4px;';
      testDiv.appendChild(input);
    });
  }
  
  // Funksiyanı saxla
  currentFunction = { name, params: params.split(',').map(p => p.trim()), operation, detail };
}

function runCustomFunction() {
  if (!currentFunction) return;
  
  const args = currentFunction.params.map(p => {
    const val = document.getElementById('test_' + p)?.value || '0';
    return isNaN(val) ? \`"\${val}"\` : val;
  });
  
  let result = '';
  if (currentFunction.operation === 'print') {
    let output = currentFunction.detail;
    currentFunction.params.forEach((p, i) => {
      output = output.replace(new RegExp('{\\\\s*' + p + '\\\\s*}', 'g'), args[i].replace(/"/g, ''));
    });
    result = '📤 Çap: ' + output.replace(/f'/g, '').replace(/'/g, '');
  } else {
    result = '↩️ Qaytarılan: ' + (Math.random() * 100).toFixed(2); // Simulyasiya
  }
  
  document.getElementById('funcResult').textContent = result;
}

function showParamType(type) {
  document.querySelectorAll('.param-tabs button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const content = document.getElementById('paramContent');
  const examples = {
    normal: {
      code: \`def salam(ad, soyad):
    print(f'Salam, {ad} {soyad}!')\`,
      inputs: '<input type="text" id="p1" placeholder="ad" value="Əli"><input type="text" id="p2" placeholder="soyad" value="Məmmədov">',
      run: () => {
        const p1 = document.getElementById('p1').value;
        const p2 = document.getElementById('p2').value;
        return \`Salam, \${p1} \${p2}!\`;
      }
    },
    default: {
      code: \`def salam(ad, dil="az"):
    if dil == "az":
        print(f'Salam, {ad}!')
    else:
        print(f'Hello, {ad}!')\`,
      inputs: '<input type="text" id="p1" placeholder="ad" value="Əli"><select id="p2"><option value="az">az</option><option value="en">en</option></select>',
      run: () => {
        const p1 = document.getElementById('p1').value;
        const p2 = document.getElementById('p2').value;
        return p2 === 'az' ? \`Salam, \${p1}!\` : \`Hello, \${p1}!\`;
      }
    },
    args: {
      code: \`def topla(*args):
    netice = 0
    for eded in args:
        netice += eded
    return netice\`,
      inputs: '<input type="text" id="p1" placeholder="Ədədlər (vergüllə)" value="1, 2, 3, 4, 5">',
      run: () => {
        const nums = document.getElementById('p1').value.split(',').map(n => parseInt(n.trim()) || 0);
        const sum = nums.reduce((a, b) => a + b, 0);
        return \`Args: (\${nums.join(', ')}) → Cəm: \${sum}\`;
      }
    },
    kwargs: {
      code: \`def melumat(**kwargs):
    for acar, deyer in kwargs.items():
        print(f"{acar}: {deyer}")\`,
      inputs: '<input type="text" id="p1" placeholder="ad=Əli" value="ad=Əli,yas=25">',
      run: () => {
        const pairs = document.getElementById('p1').value.split(',');
        return pairs.map(p => {
          const [k, v] = p.split('=');
          return \`\${k.trim()}: \${v.trim()}\`;
        }).join('\\n');
      }
    }
  };
  
  const ex = examples[type];
  content.innerHTML = \`
    <div class="code-example"><pre>\${ex.code}</pre></div>
    <div class="interactive-test">
      \${ex.inputs}
      <button onclick="testParams()">Test et</button>
      <div class="output" id="paramOutput"></div>
    </div>
  \`;
  content.currentRunner = ex.run;
}

function testParams() {
  const runner = document.getElementById('paramContent').currentRunner;
  if (runner) {
    document.getElementById('paramOutput').textContent = runner();
  }
}

function createLambda() {
  const params = document.getElementById('lambdaParams').value || 'x';
  const expr = document.getElementById('lambdaExpr').value || 'x';
  
  currentLambda = { params, expr };
  document.querySelector('.lambda-process').textContent = expr;
  testLambda();
}

function testLambda() {
  if (!currentLambda) return;
  
  const val = parseInt(document.getElementById('lambdaTestValue').value);
  document.getElementById('lambdaValueDisplay').textContent = val;
  
  let result;
  try {
    // Sadə ifadələri hesabla
    const expr = currentLambda.expr.replace(/x/g, val);
    result = eval(expr);
  } catch(e) {
    result = '?';
  }
  
  document.getElementById('lambdaResult').textContent = result;
}

function demoLambdaApp(type) {
  const resultDiv = document.getElementById('lambdaAppResult');
  
  switch(type) {
    case 'sort':
      const telebeler = [("Əli", 85), ("Leyla", 92), ("Səməd", 78)];
      resultDiv.innerHTML = '<pre>telebeler.sort(key=lambda x: x[1])\\n' + 
        'Əvvəl: [(Əli, 85), (Leyla, 92), (Səməd, 78)]\\n' +
        'Sonra: [(Səməd, 78), (Əli, 85), (Leyla, 92)]</pre>';
      break;
    case 'map':
      resultDiv.innerHTML = '<pre>ededler = [1, 2, 3, 4]\\n' +
        'kvadratlar = list(map(lambda x: x**2, ededler))\\n' +
        'Nəticə: [1, 4, 9, 16]</pre>';
      break;
    case 'filter':
      resultDiv.innerHTML = '<pre>ededler = [1, 2, 3, 4, 5, 6]\\n' +
        'cutler = list(filter(lambda x: x % 2 == 0, ededler))\\n' +
        'Nəticə: [2, 4, 6]</pre>';
      break;
  }
}

function visualizeRecursion() {
  const n = parseInt(document.getElementById('recNum').value);
  const tree = document.getElementById('recursionTree');
  const stack = document.getElementById('callStack');
  
  tree.innerHTML = '';
  stack.innerHTML = '';
  
  // Rekursiya ağacını yarat
  for (let i = n; i >= 0; i--) {
    setTimeout(() => {
      const node = document.createElement('div');
      node.className = 'rec-node';
      if (i === 0 || i === 1) {
        node.innerHTML = \`faktorial(\${i}) = 1 <span style="color: #00ff88;">(bazis)</span>\`;
        node.style.borderColor = '#00ff88';
      } else {
        node.innerHTML = \`faktorial(\${i}) = \${i} × faktorial(\${i-1})\`;
      }
      tree.appendChild(node);
      
      // Stack-ə əlavə et
      const stackItem = document.createElement('div');
      stackItem.className = 'stack-item';
      stackItem.textContent = \`faktorial(\${i}) çağırıldı\`;
      stack.insertBefore(stackItem, stack.firstChild);
    }, (n - i) * 500);
  }
}

function analyzeScope() {
  const code = document.getElementById('scopeCode').value;
  const globalVars = document.getElementById('globalVars');
  const localVars = document.getElementById('localVars');
  
  globalVars.innerHTML = '';
  localVars.innerHTML = '';
  
  // Sadə analiz (simulyasiya)
  if (code.includes('x = 10')) {
    globalVars.innerHTML += '<div class="variable"><span>x</span><span>10</span></div>';
  }
  if (code.includes('y = 5')) {
    localVars.innerHTML += '<div class="variable"><span>y</span><span>5</span></div>';
  }
  
  // print x hər iki yerdə işləyir
  setTimeout(() => {
    alert('Analiz: x global scope-da olduğu üçün hər yerdən görünür. y isə yalnız test() funksiyası daxilində mövcuddur.');
  }, 100);
}

// Initialize
showParamType('normal');
createLambda();
console.log('Python Functions Lab loaded!');`
  },

  exercise: {
    title: "🧮 Tam Funksiyalar Kitabxanası",
    description: "Riyazi və praktik funksiyalar yaradaraq real proqramlaşdırma bacarıqlarınızı inkişaf etdirin. Hər funksiya müəyyən bir məsuliyyət daşımalı və reusable (təkrar istifadə edilə bilən) olmalıdır.",
    requirements: [
      "def hesabla_ortalama(*ededler) - İstənilən sayda ədədin ortalamasını qaytarsın, ədəd yoxdursa 0 qaytarsın",
      "def tekmidir(eded) - Ədədin tək olub-olmadığını True/False qaytarsın (lambda istifadə edin)",
      "def filtrele(liste, sert) - List-i verilən şərtə görə filter etsin (funksiya parametri ilə)",
      "def cevir_boyuk(metn) - Bütün hərfləri böyüyə çevirsin, əlavə olaraq hərf sayını da qaytarsın (tuple)",
      "def yarat_carxi(siyahı) - List-i dövrü şəkildə döndürən generator funksiyası (yield istifadə edin)",
      "def hesabla_menzil(radius, pi=3.14, *args, **kwargs) - Dairənin sahəsini hesablasın, args əlavə ölçülər, kwargs rəng/məlumat alsın",
      "def ic_ice_funksiya() - Bir funksiya içində başqa funksiya yaradın (closure)",
      "def yaddas_hesabla(func) - Funksiyanın neçə dəfə çağırıldığını sayan decorator yaradın",
      "def rekursiv_fibonacci(n) - n-ci Fibonacci ədədini rekursiv tapın (0, 1, 1, 2, 3, 5, 8...)",
      "Bütün funksiyaları test edən əsas proqram yazın, istifadəçidən ədəd qəbul edib nəticələri göstərin"
    ],
    starterCode: `# Tam Funksiyalar Kitabxanası
import functools

# 1. Ortalama hesablayan funksiya
def hesabla_ortalama(*ededler):
    """
    İstənilən sayda ədədin ortalamasını hesablayır.
    *args istifadə edir.
    """
    # Kodunuzu bura yazın
    pass

# 2. Tək ədəd yoxlayan lambda
tekmidir = lambda eded: # Kodunuzu bura yazın

# 3. Filter funksiyası
def filtrele(liste, sert):
    """
    Verilən sert funksiyasına uyğun elementləri seçir.
    Misal: filtrele([1,2,3,4], lambda x: x>2) → [3,4]
    """
    # Kodunuzu bura yazın
    pass

# 4. Böyük hərflərə çevirən və sayan funksiya
def cevir_boyuk(metn):
    """
    Metni böyük hərflərə çevirir və hərf sayını qaytarır.
    Qaytarır: (boyuk_metn, herf_sayi)
    """
    # Kodunuzu bura yazın
    pass

# 5. Dövrü generator (yield ilə)
def yarat_carxi(siyahı):
    """
    List-i sonsuz dövrü şəkildə təkrarlayır.
    yield istifadə edin!
    """
    # Kodunuzu bura yazın
    pass

# 6. Çox yönlü dairə hesablayıcı
def hesabla_menzil(radius, pi=3.14, *args, **kwargs):
    """
    Dairənin sahəsini hesablayır.
    args: əlavə ölçülər (radiuslar)
    kwargs: rəng, ad və s. məlumatlar
    """
    # Kodunuzu bura yazın
    pass

# 7. Closure funksiyası
def kuvvet_uretici(n):
    """
    n qüvvətini hesablayan funksiya qaytarır.
    Misal: kvadrat = kuvvet_uretici(2)
    """
    # Kodunuzu bura yazın
    pass

# 8. Decorator - çağırış sayğacı
def saygac_decorator(func):
    """
    Funksiyanın neçə dəfə çağırıldığını sayır.
    """
    # Kodunuzu bura yazın
    pass

# 9. Rekursiv Fibonacci
def rekursiv_fibonacci(n):
    """
    n-ci Fibonacci ədədini rekursiv hesablayır.
    Bazis: fib(0)=0, fib(1)=1
    """
    # Kodunuzu bura yazın
    pass

# Əsas test proqramı
def main():
    print("=== Funksiyalar Kitabxanası Test ===\\n")
    
    # Test 1: Ortalama
    print("1. Ortalama:", hesabla_ortalama(10, 20, 30, 40))
    print("   Boş:", hesabla_ortalama())
    
    # Test 2: Lambda
    print("\\n2. Tək mi?", tekmidir(5), tekmidir(4))
    
    # Test 3: Filter
    ededler = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    cutler = filtrele(ededler, lambda x: x % 2 == 0)
    print("\\n3. Cüt ədədlər:", cutler)
    
    # Test 4: Böyük hərf
    metn, say = cevir_boyuk("Salam Dünya")
    print(f"\\n4. Böyük: {metn}, Hərf sayı: {say}")
    
    # Test 5: Generator
    print("\\n5. Dövrü generator:")
    carx = yarat_carxi(['A', 'B', 'C'])
    for _ in range(7):
        print(next(carx), end=' ')
    print()
    
    # Test 6: Dairə
    print("\\n6. Dairə sahəsi:", hesabla_menzil(5, rəng="qırmızı", ad="D1"))
    
    # Test 7: Closure
    kvadrat = kuvvet_uretici(2)
    kub = kuvvet_uretici(3)
    print(f"\\n7. 5-in kvadratı: {kvadrat(5)}, kubu: {kub(5)}")
    
    # Test 8: Decorator
    @saygac_decorator
    def salam():
        print("Salam!")
    
    print("\\n8. Decorator test:")
    salam()
    salam()
    salam()
    
    # Test 9: Fibonacci
    print(f"\\n9. Fibonacci(10): {rekursiv_fibonacci(10)}")

if __name__ == "__main__":
    main()`,
  },

  quiz: [
    {
      question: "def funksiya(): ilə yaradılan kod bloku nə adlanır?",
      options: ["Modul", "Klass", "Funksiya", "Paket"],
      correctAnswer: 2
    },
    {
      question: "Funksiyadan nəticə qaytarmaq üçün hansı açar söz istifadə olunur?",
      options: ["result", "output", "return", "yield"],
      correctAnswer: 2
    },
    {
      question: "def salam(ad='Qonaq') - burada 'ad' nədir?",
      options: ["Məcburi parametr", "Standart (default) parametr", "Global dəyişən", "Lokal dəyişən"],
      correctAnswer: 1
    },
    {
      question: "*args parametri hansı tip məlumat toplayır?",
      options: ["Dictionary", "List", "Tuple", "Set"],
      correctAnswer: 2
    },
    {
      question: "Lambda funksiyasının xüsusiyyəti hansıdır?",
      options: ["Birdən çox sətir ola bilər", "Adı olmur (anonimdir)", "Yalnız riyazi əməliyyat edə bilər", "Rekursiv ola bilməz"],
      correctAnswer: 1
    },
    {
      question: "Funksiya içində yaradılan dəyişən hansı scope-da olur?",
      options: ["Global", "Local", "Built-in", "Module"],
      correctAnswer: 1
    },
    {
      question: "def hesabla(a, b=5, *args, **kwargs) - düzgün çağırış hansıdır?",
      options: ["hesabla()", "hesabla(1)", "hesabla(1, 2, 3, 4, x=5)", "Hamısı düzgündür"],
      correctAnswer: 3
    },
    {
      question: "Generator funksiyası hansı açar sözlə dayanır və davam edir?",
      options: ["return", "break", "yield", "continue"],
      correctAnswer: 2
    },
    {
      question: "Funksiya özünü çağırdıqda bu nə adlanır?",
      options: ["İterasiya", "Rekursiya", "Generator", "Decorator"],
      correctAnswer: 1
    },
    {
      question: "Decorator funksiyası nə edir?",
      options: ["Yeni funksiya yaradır", "Mövcud funksiyanın davranışını dəyişir", "Funksiyanı silir", "Yalnız çap edir"],
      correctAnswer: 1
    }
  ]
};

export default topicai5;