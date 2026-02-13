export const topicai13 = {
  id: 13,
  title: "Xətti Cəbr: Vektorlar və Skalyarlar",
  duration: "140 dəq",
  isFree: false,
  
  content: `
    <h4>📐 Xətti Cəbr Nədir və Niyə Lazımdır?</h4>
    <p><strong>Xətti cəbr</strong> - vektorlar, matrislər və xətti transformasiyalar ilə məşğul olan riyaziyyat sahəsidir. <strong>Maşın öyrənməsi</strong>, <strong>kompyuter qrafikası</strong>, <strong>kvant hesablamaları</strong> və <strong>data science</strong> üçün fundamental əhəmiyyət daşıyır.</p>

    <p>Əgər riyaziyyatı binanın skeleti kimi təsəvvür etsək, xətti cəbr bu skeletin əsas dayaqlarıdır. Hər hansı bir ML alqoritmi (neural networks, SVM, PCA) xətti cəbrə əsaslanır.</p>

    <h4>🔢 Skalyarlar - Sadə Ədədlər</h4>
    <p><strong>Skalyar</strong> - yalnız <strong>miqdar</strong> (ölçü) bildirən, istiqaməti olmayan ədəddir. Məsələn: temperatur (25°C), məsafə (100 km), qiymət (50 AZN).</p>

    <pre><code># Python-da skalyar
temperatur = 25         # Tam ədəd (integer)
pi = 3.14159           # Kəsr ədəd (float)
kompleks = 3 + 4j      # Kompleks ədəd

# NumPy-da skalyar
import numpy as np
s = np.array(5)        # 0 ölçülü massiv (skalyar)
print(s.shape)         # () - boş tuple (ölçü yoxdur)
print(s.ndim)          # 0 - sıfır ölçülü</code></pre>

    <h4>➡️ Vektorlar - İstiqamətli Kəmiyyətlər</h4>
    <p><strong>Vektor</strong> - həm <strong>miqdar</strong>, həm də <strong>istiqamət</strong> bildirən kəmiyyətdir. Məsələn: sürət (100 km/saat şimala), qüvvə (10 N yuxarı).</p>

    <p>Riyazi olaraq vektor <strong>sıralanmış ədədlər siyahısıdır</strong>:</p>
    <pre><code># Vektor nümunələri
v = [3, 4]             # 2D vektor (2 ölçülü məkan)
u = [1, 2, 3]          # 3D vektor (3 ölçülü məkan)
r = [5, -2, 0, 7]      # 4D vektor (4 ölçülü - data science'da çox istifadə olunur)

# NumPy vektoru
import numpy as np

v = np.array([3, 4])           # Sətir vektoru (default)
v_sutun = np.array([[3], [4]]) # Sütun vektoru (2x1 matris)

print(v.shape)        # (2,)    - 1 ölçülü (sətir vektoru)
print(v_sutun.shape)  # (2, 1)  - 2 ölçülü (sütun vektoru)</code></pre>

    <h4>🎯 Vektor Əməliyyatları</h4>

    <p><strong>1. Toplama və Çıxma (Element-wise)</strong></p>
    <pre><code>a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Toplama: c = a + b = [1+4, 2+5, 3+6] = [5, 7, 9]
c = a + b

# Çıxma: d = a - b = [1-4, 2-5, 3-6] = [-3, -3, -3]
d = a - b

# Qrafik təsəvvür:
# a = → (sağa 1, yuxarı 2)
# b = → (sağa 4, yuxarı 5)
# a+b = → (sağa 5, yuxarı 7) - paraleloqram qaydası</code></pre>

    <p><strong>2. Skalyar ilə Vurma</strong></p>
    <pre><code>v = np.array([2, 3])
k = 3  # skalyar

# w = k * v = [3*2, 3*3] = [6, 9]
w = k * v

# Təsir: Vektorun uzunluğu 3 dəfə artır, istiqaməti dəyişməz</code></pre>

    <p><strong>3. Vektorun Uzunluğu (Norm)</strong></p>
    <pre><code>v = np.array([3, 4])

# Euclidean norm (L2 norm) - adi uzunluq
# ||v|| = √(3² + 4²) = √25 = 5
uzunluq = np.linalg.norm(v)  # 5.0

# L1 norm (Manhattan distance)
# ||v||₁ = |3| + |4| = 7
l1_norm = np.linalg.norm(v, ord=1)  # 7.0

# Maksimum norm
# ||v||∞ = max(|3|, |4|) = 4
max_norm = np.linalg.norm(v, ord=np.inf)  # 4.0</code></pre>

    <h4>🔍 Skalyar Hasil (Dot Product)</h4>
    <p>İki vektorun skalyar hasili <strong>skalyar</strong> (ədəd) verir. Bu, vektorlar arasındakı <strong>bənzərlik</strong> ölçüsüdür.</p>

    <pre><code>a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Skalyar hasil: a · b = 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32
dot_product = np.dot(a, b)        # 32
# və ya
dot_product = a @ b               # 32 (Python 3.5+)
# və ya
dot_product = np.sum(a * b)       # 32

# Həndəsi mənası: a · b = ||a|| * ||b|| * cos(θ)
# θ = vektorlar arası bucaq
# Əgər a · b = 0 → vektorlar perpendikulyardır (90°)

# Bucaq hesablamaq
cos_theta = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
bucaq = np.arccos(cos_theta)  # radian
bucaq_derece = np.degrees(bucaq)  # dərəcə</code></pre>

    <h4>✕ Xarici Hasil (Cross Product) - 3D üçün</h4>
    <p>Yalnız <strong>3 ölçülü vektorlar</strong> üçün müəyyən edilir. Nəticə yeni <strong>vektordur</strong>, başlanğıc vektorlara perpendikulyardır.</p>

    <pre><code>a = np.array([1, 0, 0])   # x-oxu boyunca
b = np.array([0, 1, 0])   # y-oxu boyunca

# a × b = [0, 0, 1] - z-oxu boyunca
cross = np.cross(a, b)    # [0, 0, 1]

# Tətbiqlər:
# - Fizikada moment qüvvə hesablamaq
# - Kompyuter qrafikasında normal vektor tapmaq
# - Sahə hesablamaq (paraleloqramın sahəsi = ||a × b||)</code></pre>

    <h4>📊 Vektor Proyeksiyası</h4>
    <p>Bir vektorun digəri üzərindəki <strong>kölgəsi</strong> (proyeksiyası).</p>

    <pre><code>a = np.array([3, 4])
b = np.array([1, 0])  # x-oxu

# a-nın b üzərindəki proyeksiyası:
# proy_b(a) = (a · b / ||b||²) * b
proyeksiya = (np.dot(a, b) / np.dot(b, b)) * b
# Nəticə: [3, 0] (a-nın x-oxundakı komponenti)

# Praktiki tətbiq: Data science'da vektorların əsas komponentlərə ayrılması (PCA)</code></pre>

    <h4>🧮 Vektor Məkanı (Vector Space) - Sadə İzah</h4>
    <p>Vektor məkanı - vektorların yaşaya biləcəyi "evdir". Məsələn:</p>
    <ul>
      <li><strong>R²</strong> - 2 ölçülü məkan (mərtəbə planı)</li>
      <li><strong>R³</strong> - 3 ölçülü məkan (odanız)</li>
      <li><strong>Rⁿ</strong> - n ölçülü məkan (data science'da 1000+ ölçü olur!)</li>
    </ul>

    <pre><code># Data science nümunəsi: Şəkil vektoru
# 28x28 piksel şəkil = 784 ölçülü vektor
sekil = np.random.rand(784)  # 784 ölçülü vektor (R^784)

# Söz vektoru (Word2Vec)
# "kral" sözü = 300 ölçülü vektor
kral = np.random.randn(300)  # R^300</code></pre>

    <h4>🎯 Xətti Kombinasiya və Asılılıq</h4>
    <pre><code>u = np.array([1, 0])
v = np.array([0, 1])

# Xətti kombinasiya: w = 2*u + 3*v
w = 2*u + 3*v  # [2, 3]

# Xətti asılılıq: Əgər w = a*u + b*v şəklində ifadə olunursa
# u, v, w xətti asılıdır (bir müstəvidədirlər)

# Yoxlamaq üçün determinant və ya rank istifadə edilir
matris = np.array([[1, 0, 2], 
                   [0, 1, 3]])
rank = np.linalg.matrix_rank(matris)  # 2 (tam sütun rankı deyil → asılıdır)</code></pre>

    <h4>🔧 Qram-Şmidt Ortogonalizasiyası</h4>
    <p>Asılı vektorları <strong>perpendikulyar</strong> vektorlara çevirmək üsulu.</p>

    <pre><code>def gram_schmidt(vektorlar):
    """Vektorları ortonormal bazisə çevir"""
    ortogonal = []
    
    for v in vektorlar:
        w = v.copy()
        for u in ortogonal:
            w = w - np.dot(v, u) / np.dot(u, u) * u  # Proyeksiyanı çıxart
        if np.linalg.norm(w) > 1e-10:  # Sıfır vektor deyilsə
            w = w / np.linalg.norm(w)  # Normalizasiya
            ortogonal.append(w)
    
    return np.array(ortalama)

# Nümunə
v1 = np.array([1, 1, 0])
v2 = np.array([1, 0, 1])
v3 = np.array([0, 1, 1])

bazis = gram_schmidt([v1, v2, v3])
# Nəticə: bir-birinə perpendikulyar 3 vektor</code></pre>

    <h4>🤖 Praktiki Tətbiq: Səmantic Similarity</h4>
    <pre><code># Sözləri vektorlara çevirmək (sadə nümunə)
# "kral" - "kişi" + "qadın" ≈ "kraliça"

kral = np.array([2, 0, 1])      # [səlahiyyət, kişi, soyad]
kisi = np.array([0, 2, 0])      # [0, kişi, 0]
qadin = np.array([0, -2, 0])    # [0, qadın, 0] (kişinin əksi)
kralica = np.array([2, -1, 1])  # [səlahiyyət, qadın, soyad]

# Hesablama
netice = kral - kisi + qadin
print(netice)  # [2, -2, 1]

# Oxşarlıq (cosine similarity)
cos_sim = np.dot(netice, kralica) / (np.linalg.norm(netice) * np.linalg.norm(kralica))
print(f"Oxşarlıq: {cos_sim:.2f}")  # Yüksək oxşarlıq gözlənilir</code></pre>

    <h4>⚡ NumPy ilə Sürətli Əməliyyatlar</h4>
    <pre><code># Birdən çox vektorla işləmək (batch operations)
vektorlar = np.random.rand(1000, 784)  # 1000 ədəd 784 ölçülü vektor

# Hər birinin uzunluğu
uzunluqlar = np.linalg.norm(vektorlar, axis=1)  # (1000,) ölçülü

# Normalizasiya (hər biri 1 uzunluqlu olsun)
normal_vektorlar = vektorlar / uzunluqlar[:, np.newaxis]

# Skalyar hasil matrisi (bütün cütlər arasında)
oxsarliq_matrisi = vektorlar @ vektorlar.T  # (1000, 1000)</code></pre>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə vektor ölçülərini yoxlayın (<code>.shape</code>)</li>
      <li>Sətir və sütun vektorlarını qarışdırmayın</li>
      <li>Skalyar hasil üçün <code>@</code> operatoru daha oxunaqlıdır</li>
      <li>Böyük vektorlarda <code>float32</code> istifadə edin (yaddaş qənaəti)</li>
      <li>Vektorları normalizasiya edin (uzunluğu 1 edin) müqayisə üçün</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="linear-algebra-lab">
  <h2>📐 Xətti Cəbr Lab: Vektorlar və Skalyarlar</h2>
  
  <section class="demo-section">
    <h3>1. Vektor Vizualizer (2D)</h3>
    <div class="vector-visualizer">
      <div class="canvas-container">
        <canvas id="vectorCanvas" width="500" height="400"></canvas>
        <div class="vector-legend">
          <div class="legend-item"><span class="color-box" style="background:#00ff88;"></span> Vektor A</div>
          <div class="legend-item"><span class="color-box" style="background:#e94560;"></span> Vektor B</div>
          <div class="legend-item"><span class="color-box" style="background:#ffd700;"></span> A + B</div>
        </div>
      </div>
      
      <div class="vector-controls">
        <div class="vector-input">
          <h4>Vektor A</h4>
          <label>X: <input type="range" id="ax" min="-5" max="5" value="3" step="0.5" oninput="updateVectors()"></label>
          <span id="axVal">3</span>
          <label>Y: <input type="range" id="ay" min="-5" max="5" value="2" step="0.5" oninput="updateVectors()"></label>
          <span id="ayVal">2</span>
          <div class="vector-info" id="infoA">||A|| = 3.61</div>
        </div>
        
        <div class="vector-input">
          <h4>Vektor B</h4>
          <label>X: <input type="range" id="bx" min="-5" max="5" value="1" step="0.5" oninput="updateVectors()"></label>
          <span id="bxVal">1</span>
          <label>Y: <input type="range" id="by" min="-5" max="5" value="4" step="0.5" oninput="updateVectors()"></label>
          <span id="byVal">4</span>
          <div class="vector-info" id="infoB">||B|| = 4.12</div>
        </div>
        
        <div class="operation-buttons">
          <button onclick="showSum()">A + B Göstər</button>
          <button onclick="showDiff()">A - B Göstər</button>
          <button onclick="showDot()">A · B Hesabla</button>
          <button onclick="showProj()">Proyeksiya Göstər</button>
          <button onclick="clearCanvas()">Təmizlə</button>
        </div>
        
        <div class="calculation-result" id="calcResult"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Vektor Əməliyyatları Kalkulyatoru</h3>
    <div class="vector-calculator">
      <div class="calc-inputs">
        <div class="vector-entry">
          <h4>Vektor A (3D)</h4>
          <input type="number" id="a3d_0" value="1" placeholder="x">
          <input type="number" id="a3d_1" value="2" placeholder="y">
          <input type="number" id="a3d_2" value="3" placeholder="z">
        </div>
        
        <div class="operation-select">
          <select id="vecOp">
            <option value="add">+ (Toplama)</option>
            <option value="sub">- (Çıxma)</option>
            <option value="dot">· (Skalyar hasil)</option>
            <option value="cross">× (Xarici hasil)</option>
          </select>
        </div>
        
        <div class="vector-entry">
          <h4>Vektor B (3D)</h4>
          <input type="number" id="b3d_0" value="4" placeholder="x">
          <input type="number" id="b3d_1" value="5" placeholder="y">
          <input type="number" id="b3d_2" value="6" placeholder="z">
        </div>
      </div>
      
      <button onclick="calculateVector()" class="calc-btn">Hesabla</button>
      
      <div class="calc-result" id="vectorCalcResult"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Bucaq və Oxşarlıq Analizi</h3>
    <div class="angle-analyzer">
      <div class="angle-vectors">
        <div class="angle-vector" id="angleVecA">
          <h4>Vektor A</h4>
          <div class="vec-preview" id="previewA"></div>
          <input type="range" id="angleA" min="0" max="360" value="45" oninput="updateAngle()">
          <span id="angleAVal">45°</span>
        </div>
        
        <div class="angle-display" id="angleDisplay">
          <div class="angle-circle">
            <div class="angle-arc" id="angleArc"></div>
            <div class="angle-value" id="angleValue">90°</div>
          </div>
          <div class="cosine-sim" id="cosineSim">cos(θ) = 0.00</div>
        </div>
        
        <div class="angle-vector" id="angleVecB">
          <h4>Vektor B</h4>
          <div class="vec-preview" id="previewB"></div>
          <input type="range" id="angleB" min="0" max="360" value="135" oninput="updateAngle()">
          <span id="angleBVal">135°</span>
        </div>
      </div>
      
      <div class="similarity-metrics" id="similarityMetrics"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Vektor Normalizasiya və Bazis</h3>
    <div class="basis-demo">
      <div class="original-vectors">
        <h4>İlkin Vektorlar</h4>
        <div class="vector-list" id="originalList">
          <div class="v-item">v₁ = [2, 1]</div>
          <div class="v-item">v₂ = [1, 3]</div>
        </div>
      </div>
      
      <div class="transform-arrow">→</div>
      
      <div class="orthonormal-basis">
        <h4>Ortogonal Bazis</h4>
        <div class="vector-list" id="basisList">
          <div class="v-item">e₁ = [0.89, 0.45]</div>
          <div class="v-item">e₂ = [-0.45, 0.89]</div>
        </div>
        <button onclick="performGramSchmidt()">Qram-Şmidt Tətbiq Et</button>
      </div>
      
      <div class="basis-visualization" id="basisViz">
        <canvas id="basisCanvas" width="300" height="300"></canvas>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Word Embedding Simulyasiyası</h3>
    <div class="word-embedding">
      <div class="word-vectors">
        <div class="word-card" data-word="kral">
          <h4>👑 Kral</h4>
          <div class="vec-dims">[2.0, 0.5, 1.0]</div>
          <div class="dim-labels">[səlahiyyət, kişi, soyad]</div>
        </div>
        
        <div class="word-card" data-word="kisi">
          <h4>👨 Kişi</h4>
          <div class="vec-dims">[0.0, 1.0, 0.0]</div>
        </div>
        
        <div class="word-card" data-word="qadin">
          <h4>👩 Qadın</h4>
          <div class="vec-dims">[0.0, -1.0, 0.0]</div>
        </div>
        
        <div class="word-card" data-word="kralica">
          <h4>👸 Kraliça</h4>
          <div class="vec-dims">[2.0, -0.5, 1.0]</div>
        </div>
      </div>
      
      <div class="analogy-calc">
        <h4>Analogiya: Kral - Kişi + Qadın = ?</h4>
        <button onclick="calculateAnalogy()">Hesabla</button>
        <div class="analogy-result" id="analogyResult"></div>
        <div class="similarity-check" id="similarityCheck"></div>
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
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.linear-algebra-lab {
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

h4 {
  color: #00d9ff;
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

/* Vector Visualizer */
.vector-visualizer {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
}

.canvas-container {
  position: relative;
}

#vectorCanvas {
  background: #0d1117;
  border-radius: 10px;
  border: 2px solid #30363d;
  width: 100%;
  max-width: 500px;
}

.vector-legend {
  display: flex;
  gap: 20px;
  margin-top: 15px;
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.color-box {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

.vector-controls {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
}

.vector-input {
  margin-bottom: 20px;
  padding: 15px;
  background: #0d1117;
  border-radius: 8px;
}

.vector-input label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  color: #8b949e;
}

.vector-input input[type="range"] {
  flex: 1;
}

.vector-input span {
  color: #00ff88;
  font-weight: bold;
  min-width: 30px;
}

.vector-info {
  margin-top: 10px;
  color: #ffd700;
  font-family: 'Fira Code', monospace;
}

.operation-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 15px;
}

.operation-buttons button {
  background: #30363d;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.operation-buttons button:hover {
  background: #00d9ff;
  color: #000;
}

.calculation-result {
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  min-height: 80px;
  border-left: 4px solid #00ff88;
  font-family: 'Fira Code', monospace;
  color: #00ff88;
}

/* Vector Calculator */
.vector-calculator {
  max-width: 800px;
  margin: 0 auto;
}

.calc-inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}

.vector-entry {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.vector-entry input {
  width: 70px;
  height: 50px;
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  text-align: center;
  font-size: 18px;
  border-radius: 8px;
  margin: 5px;
}

.operation-select select {
  background: #1a1a2e;
  border: 2px solid #e94560;
  color: #e94560;
  padding: 15px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
}

.calc-btn {
  width: 100%;
  background: linear-gradient(135deg, #00ff88 0%, #00b359 100%);
  color: #000;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
}

.calc-result {
  background: #0d1117;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  font-family: 'Fira Code', monospace;
  border-left: 4px solid #ffd700;
}

/* Angle Analyzer */
.angle-analyzer {
  text-align: center;
}

.angle-vectors {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.angle-vector {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  min-width: 150px;
}

.vec-preview {
  width: 80px;
  height: 80px;
  background: #0d1117;
  border-radius: 50%;
  margin: 15px auto;
  position: relative;
  border: 2px solid #30363d;
}

.vec-preview::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 35px;
  background: #00ff88;
  left: 50%;
  top: 10px;
  transform-origin: bottom;
  transform: translateX(-50%);
}

.angle-vector input[type="range"] {
  width: 100%;
  margin: 10px 0;
}

.angle-display {
  background: #0d1117;
  padding: 30px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid #e94560;
  position: relative;
}

.angle-circle {
  position: relative;
  width: 100%;
  height: 100%;
}

.angle-arc {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #ffd700;
  transform: rotate(45deg);
}

.angle-value {
  font-size: 36px;
  color: #ffd700;
  font-weight: bold;
  margin-top: 20px;
}

.cosine-sim {
  margin-top: 10px;
  color: #00d9ff;
  font-family: 'Fira Code', monospace;
}

.similarity-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.metric-box {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #00ff88;
}

/* Basis Demo */
.basis-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.original-vectors, .orthonormal-basis {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  min-width: 200px;
}

.vector-list {
  margin: 15px 0;
}

.v-item {
  background: #0d1117;
  padding: 12px;
  margin: 8px 0;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  color: #00ff88;
  border-left: 3px solid #00d9ff;
}

.transform-arrow {
  font-size: 40px;
  color: #e94560;
}

.orthonormal-basis button {
  width: 100%;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #000;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15px;
}

#basisCanvas {
  background: #0d1117;
  border-radius: 10px;
  border: 2px solid #30363d;
}

/* Word Embedding */
.word-vectors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.word-card {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.word-card:hover {
  transform: translateY(-5px);
  border-color: #00d9ff;
  box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
}

.word-card.selected {
  border-color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
}

.word-card h4 {
  font-size: 24px;
  margin-bottom: 10px;
}

.vec-dims {
  font-family: 'Fira Code', monospace;
  color: #00ff88;
  font-size: 14px;
  margin-bottom: 5px;
}

.dim-labels {
  font-size: 11px;
  color: #8b949e;
}

.analogy-calc {
  background: #0d1117;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 2px dashed #30363d;
}

.analogy-calc h4 {
  margin-bottom: 20px;
  color: #ffd700;
}

.analogy-result {
  margin-top: 20px;
  font-size: 24px;
  color: #00ff88;
  font-family: 'Fira Code', monospace;
}

.similarity-check {
  margin-top: 15px;
  color: #8b949e;
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
  .vector-visualizer { grid-template-columns: 1fr; }
  .calc-inputs { grid-template-columns: 1fr; }
  .basis-demo { flex-direction: column; }
  .angle-vectors { flex-direction: column; }
}`
  },

  exercise: {
    title: "🎯 K-Means Clustering - Vektorlarla Qruplaşdırma",
    description: "Vektor əməliyyatları və xətti cəbr istifadə edərək K-Means clustering alqoritmi implementasiya edin. Məlumat nöqtələrini vektorlar kimi qəbul edib qruplaşdırın.",
    requirements: [
      "2D məkan təsadüfi 100 nöqtə yaradın (x, y koordinatları)",
      "K=3 mərkəz (centroid) təsadüfi seçin",
      "Hər nöqtənin 3 mərkəzə olan Euclidean məsafəsini hesablayın",
      "Hər nöqtəni ən yaxın mərkəzə təyin edin (clustering)",
      "Yeni mərkəzləri hesablayın (hər cluster-in ortalaması)",
      "Mərkəzlər dəyişməyənə qədər təkrarlayın (convergence)",
      "Within-Cluster Sum of Squares (WCSS) hesablayın",
      "Nəticələri vizuallaşdırın (matplotlib ilə)",
      "Elbow metodu ilə optimal K seçin (K=1-dən 10-a qədər)",
      "Silhouette score hesablayın (clustering keyfiyyəti)"
    ],
    starterCode: `import numpy as np
import matplotlib.pyplot as plt

class KMeans:
    def __init__(self, k=3, max_iters=100, random_state=42):
        self.k = k
        self.max_iters = max_iters
        self.random_state = random_state
        self.centroids = None
        self.labels = None
        
    def fit(self, X):
        """
        K-Means alqoritmi
        X: (n_samples, n_features) ölçülü matris
        """
        np.random.seed(self.random_state)
        n_samples, n_features = X.shape
        
        # 1. Təsadüfi K mərkəz seç
        # Kodunuzu bura yazın: np.random.choice ilə indekslər seçin
        
        for iteration in range(self.max_iters):
            # 2. Hər nöqtənin mərkəzlərə məsafəsini hesabla
            # distances = (n_samples, k) ölçülü matris olmalıdır
            # Kodunuzu bura yazın: np.linalg.norm və ya np.sum((X[:, np.newaxis] - centroids)**2, axis=2)
            
            # 3. Hər nöqtəni ən yaxın mərkəzə təyin et
            # labels = np.argmin(distances, axis=1)
            
            # 4. Yeni mərkəzləri hesabla (hər cluster-in ortalaması)
            new_centroids = np.zeros((self.k, n_features))
            for i in range(self.k):
                # Kodunuzu bura yazın: cluster_points = X[labels == i]
                # new_centroids[i] = cluster_points.mean(axis=0)
                pass
            
            # 5. Yoxla: mərkəzlər dəyişdimi?
            # Əgər dəyişməzsə, break
            # Kodunuzu bura yazın: np.allclose()
            
            self.centroids = new_centroids
        
        self.labels = labels
        return self
    
    def predict(self, X):
        """Yeni nöqtələri cluster-lərə təyin et"""
        # Kodunuzu bura yazın: fit() metodundakı məsafə hesablaması
        pass
    
    def inertia(self, X):
        """WCSS (Within-Cluster Sum of Squares)"""
        # Kodunuzu bura yazın: Hər nöqtənin öz mərkəzinə məsafələrinin kvadratı cəmi
        pass

def generate_data():
    """3 cluster üçün təsadüfi data yaradın"""
    np.random.seed(42)
    
    # Cluster 1: mərkəz (2, 2)
    cluster1 = np.random.randn(30, 2) + np.array([2, 2])
    
    # Cluster 2: mərkəz (6, 6)
    cluster2 = np.random.randn(35, 2) + np.array([6, 6])
    
    # Cluster 3: mərkəz (2, 6)
    cluster3 = np.random.randn(35, 2) + np.array([2, 6])
    
    X = np.vstack([cluster1, cluster2, cluster3])
    return X

def elbow_method(X, k_range=range(1, 11)):
    """Optimal K seçimi üçün elbow metodu"""
    inertias = []
    
    for k in k_range:
        # Kodunuzu bura yazın: KMeans(k).fit(X) və inertia() saxla
        pass
    
    # Plot
    plt.figure(figsize=(10, 6))
    plt.plot(k_range, inertias, 'bo-')
    plt.xlabel('K (Cluster sayı)')
    plt.ylabel('Inertia (WCSS)')
    plt.title('Elbow Metodu')
    plt.grid(True)
    plt.savefig('elbow_plot.png')
    plt.close()
    
    return inertias

def silhouette_score(X, labels):
    """Silhouette score hesabla (clustering keyfiyyəti)"""
    n_samples = len(X)
    unique_labels = np.unique(labels)
    
    scores = []
    for i, label in enumerate(labels):
        # a: nöqtənin öz cluster-inə ortalama məsafəsi
        # b: nöqtənin ən yaxın digər cluster-ə ortalama məsafəsi
        # s = (b - a) / max(a, b)
        # Kodunuzu bura yazın
        pass
    
    return np.mean(scores)

def visualize_clusters(X, labels, centroids, title):
    """Cluster-ləri vizuallaşdır"""
    plt.figure(figsize=(10, 8))
    
    # Hər cluster-i fərqli rəngdə göstər
    colors = ['red', 'blue', 'green', 'purple', 'orange']
    for i in range(len(np.unique(labels))):
        mask = labels == i
        plt.scatter(X[mask, 0], X[mask, 1], c=colors[i], alpha=0.6, label=f'Cluster {i}')
    
    # Mərkəzləri göstər
    plt.scatter(centroids[:, 0], centroids[:, 1], c='black', marker='x', s=200, linewidths=3, label='Mərkəzlər')
    
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.title(title)
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.savefig('clusters.png')
    plt.close()

# Əsas proqram
if __name__ == "__main__":
    # Data yarat
    X = generate_data()
    print(f"Data forması: {X.shape}")
    
    # K-Means tətbiq et
    kmeans = KMeans(k=3)
    kmeans.fit(X)
    
    print(f"Mərkəzlər:\\n{kmeans.centroids}")
    print(f"Inertia (WCSS): {kmeans.inertia(X):.2f}")
    
    # Vizuallaşdır
    visualize_clusters(X, kmeans.labels, kmeans.centroids, "K-Means Clustering (K=3)")
    
    # Elbow metodu
    print("\\nElbow metodu tətbiq edilir...")
    inertias = elbow_method(X)
    
    # Silhouette score
    sil_score = silhouette_score(X, kmeans.labels)
    print(f"Silhouette Score: {sil_score:.3f}")
    
    print("\\n✅ Analiz tamamlandı! 'clusters.png' və 'elbow_plot.png' yaradıldı.")`,
  },

  quiz: [
    {
      question: "Skalyar ilə vektorun fərqi nədir?",
      options: ["Skalyar daha böyükdür", "Skalyarın istiqaməti yoxdur, vektorun var", "Vektor tam ədəddir", "Fərq yoxdur"],
      correctAnswer: 1
    },
    {
      question: "İki vektorun skalyar hasili nə verir?",
      options: ["Vektor", "Skalyar (ədəd)", "Matris", "Heç nə"],
      correctAnswer: 1
    },
    {
      question: "Vektorun uzunluğu (norm) necə hesablanır?",
      options: ["Elementlərin cəmi", "Kvadratlarının cəminin kökü", "Elementlərin hasili", "Maksimum element"],
      correctAnswer: 1
    },
    {
      question: "a · b = 0 olduqda vektorlar necədir?",
      options: ["Eyni istiqamətdə", "Perpendikulyar (90°)", "Eyni uzunluqda", "Paralel"],
      correctAnswer: 1
    },
    {
      question: "Xarici hasil (cross product) hansı ölçü üçün müəyyən edilir?",
      options: ["2D", "3D", "4D", "İstənilən ölçü"],
      correctAnswer: 1
    },
    {
      question: "v = [3, 4] vektorunun uzunluğu nədir?",
      options: ["5", "7", "12", "25"],
      correctAnswer: 0
    },
    {
      question: "Vektor proyeksiyası nə deməkdir?",
      options: ["Vektorun uzunluğu", "Vektorun digəri üzərindəki kölgəsi", "Vektorun istiqaməti", "İki vektorun cəmi"],
      correctAnswer: 1
    },
    {
      question: "Word embedding'də sözlər necə təmsil olunur?",
      options: ["Rəqəmlərlə", "Vektorlarla", "Hərflərlə", "Rənglərlə"],
      correctAnswer: 1
    },
    {
      question: "Cosine similarity nəyi ölçür?",
      options: ["Vektorların uzunluğu fərqini", "Vektorlar arası bucaq", "Vektorların cəmini", "Vektorların fərqini"],
      correctAnswer: 1
    },
    {
      question: "Xətti asılılıq nə deməkdir?",
      options: ["Vektorlar eyni uzunluqdadır", "Bir vektor digərlərinin kombinasiyasıdır", "Vektorlar perpendikulyardır", "Vektorlar paraleldir"],
      correctAnswer: 1
    }
  ]
};

export default topicai13;