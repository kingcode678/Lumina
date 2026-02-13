export const topicai11 = {
  id: 11,
  title: "NumPy: Massivlər (Arrays)",
  duration: "120 dəq",
  isFree: false,
  
  content: `
    <h4>🔢 NumPy Nədir və Nə Üçün Lazımdır?</h4>
    <p><strong>NumPy</strong> (Numerical Python) Python-un ən əsas elmi hesablama kitabxanasıdır. Data Science, Machine Learning və AI üçün <strong>fundamental</strong> əhəmiyyətə malikdir. Əsasən çoxölçülü massivlər (arrays) və matrislər üzərində sürətli əməliyyatlar aparmaq üçün yaradılıb.</p>

    <p><strong>Niyə adi Python list-ləri yetərli deyil?</strong></p>
    <ul>
      <li>Python list-ləri <strong>yavaşdır</strong> - hər element ayrı-ayrı obyektdir</li>
      <li>NumPy massivləri <strong>yaddaşda ardıcıl</strong> saxlanılır - daha sürətli</li>
      <li>NumPy <strong>vectorized əməliyyatlar</strong> edir - dövrlərə ehtiyac qalmır</li>
      <li>NumPy <strong>C dilində</strong> yazılıb - maşın koduna yaxın sürət</li>
    </ul>

    <h4>📦 Quraşdırma və İmport</h4>
    <pre><code># Quraşdırma (terminalda)
pip install numpy

# İmport - adətən np adı ilə
import numpy as np

# Versiyanı yoxlamaq
print(np.__version__)</code></pre>

    <h4>🎯 Massiv Yaratma Üsulları</h4>
    
    <p><strong>1. List-dən Massiv Yaratmaq</strong></p>
    <pre><code>import numpy as np

# Adi Python list-i
python_list = [1, 2, 3, 4, 5]

# NumPy massivinə çevirmək
arr = np.array(python_list)

print(arr)          # [1 2 3 4 5]
print(type(arr))    # <class 'numpy.ndarray'>
print(arr.dtype)    # int64 (element tipi)</code></pre>

    <p><strong>2. Hazır Funksiyalarla Massiv Yaratmaq</strong></p>
    <pre><code># Sıfırlardan ibarət massiv
zeros = np.zeros(5)           # [0. 0. 0. 0. 0.]
zeros_2d = np.zeros((3, 4))   # 3x2 ölçülü 2D massiv

# Bir-lərdən ibarət massiv
ones = np.ones((2, 3))        # 2 sətir, 3 sütun

# Boş massiv (yaddaşda olan zibil dəyərlər)
empty = np.empty((2, 2))

# Ardıcıl ədədlər (start, stop, step)
arange_arr = np.arange(0, 10, 2)   # [0 2 4 6 8]

# Bərabər aralıqlı ədədlər (start, stop, say)
linspace_arr = np.linspace(0, 1, 5)  # [0.   0.25 0.5  0.75 1.  ]</code></pre>

    <h4>📐 Massivin Ölçüsü və Forması</h4>
    <p>Massivin <strong>ndim</strong> (ölçü sayı), <strong>shape</strong> (forma) və <strong>size</strong> (element sayı) xüsusiyyətləri çox vacibdir:</p>

    <pre><code># 1D massiv (vektor)
arr_1d = np.array([1, 2, 3, 4, 5])
print(arr_1d.ndim)      # 1 (bir ölçülü)
print(arr_1d.shape)     # (5,) - 5 element
print(arr_1d.size)      # 5 (cəmi element sayı)

# 2D massiv (matris)
arr_2d = np.array([[1, 2, 3], 
                   [4, 5, 6]])
print(arr_2d.ndim)      # 2 (iki ölçülü)
print(arr_2d.shape)     # (2, 3) - 2 sətir, 3 sütun
print(arr_2d.size)      # 6

# 3D massiv (tensor)
arr_3d = np.array([[[1, 2], [3, 4]], 
                   [[5, 6], [7, 8]]])
print(arr_3d.ndim)      # 3
print(arr_3d.shape)     # (2, 2, 2) - 2 blok, hərəsində 2x2</code></pre>

    <h4>🔍 İndeksləmə və Kəsmə (Indexing & Slicing)</h4>
    <p>Python list-lərinə bənzəyir, amma daha güclüdür:</p>

    <pre><code>arr = np.array([10, 20, 30, 40, 50, 60, 70, 80])

# Tək element
print(arr[0])       # 10 (birinci element)
print(arr[-1])      # 80 (sonuncu)

# Kəsmə (slicing) - [start:stop:step]
print(arr[2:5])     # [30 40 50] (2,3,4-cü indekslər)
print(arr[:3])      # [10 20 30] (başlanğıcdan 3-ə qədər)
print(arr[4:])      # [50 60 70 80] (4-dən sona qədər)
print(arr[::2])     # [10 30 50 70] (hər 2-ci element)
print(arr[::-1])    # [80 70 60 50 40 30 20 10] (tersinə)

# 2D massivdə indeksləmə
matris = np.array([[1, 2, 3], 
                   [4, 5, 6], 
                   [7, 8, 9]])

print(matris[0, 0])     # 1 (birinci sətir, birinci sütun)
print(matris[1, 2])     # 6 (ikinci sətir, üçüncü sütun)
print(matris[0])        # [1 2 3] (birinci sətirin tamamı)
print(matris[:, 1])     # [2 5 8] (ikinci sütunun tamamı)
print(matris[1:, :2])   # [[4 5] [7 8]] (2-ci sətirdən sona, ilk 2 sütun)</code></pre>

    <h4>🎨 Massiv Formasını Dəyişmək (Reshape)</h4>
    <pre><code>arr = np.arange(12)  # [0 1 2 3 4 5 6 7 8 9 10 11]

# 3x4 matrisə çevirmək
reshaped = arr.reshape(3, 4)
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]

# Avtomatik ölçü hesablamaq (-1 istifadə edirik)
reshaped2 = arr.reshape(2, -1)  # 2 sətir, sütun avtomatik (6 olacaq)

# Çoxölçülü reshape
arr_3d = arr.reshape(2, 2, 3)   # 2 blok, hərəsində 2x3

# Açmaq (flatten) - 1D-ə çevirmək
flat = arr_3d.flatten()         # [0 1 2 3 4 5 6 7 8 9 10 11]
flat2 = arr_3d.ravel()          # Yenidən baxış (view), kopya yaratmır

# Transpose (sətir-sütun dəyişmək)
matris = np.array([[1, 2, 3], [4, 5, 6]])
print(matris.T)   # [[1 4] [2 5] [3 6]]</code></pre>

    <h4>➕ Riyazi Əməliyyatlar (Vectorized Operations)</h4>
    <p>NumPy-nin ən güclü tərəfi - <strong>dövr yazmadan</strong> bütün elementlərə əməliyyat tətbiq etmək:</p>

    <pre><code>arr = np.array([1, 2, 3, 4, 5])

# Əsas əməliyyatlar (hər elementə tətbiq olunur)
print(arr + 10)     # [11 12 13 14 15] (hər birinə 10 əlavə et)
print(arr * 2)      # [ 2  4  6  8 10] (hər birini 2-yə vur)
print(arr ** 2)     # [ 1  4  9 16 25] (kvadratı)
print(arr / 2)      # [0.5 1.  1.5 2.  2.5]
print(np.sqrt(arr)) # [1.         1.41421356 1.73205081 2.         2.23606798]

# İki massiv arasında əməliyyatlar
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a + b)        # [5 7 9] (element-wise toplama)
print(a * b)        # [ 4 10 18] (element-wise vurma)
print(a / b)        # [0.25 0.4  0.5 ]

# Müqayisə əməliyyatları (boolean massiv qaytarır)
print(arr > 3)      # [False False False  True  True]
print(arr == 3)     # [False False  True False False]
print(arr[arr > 3]) # [4 5] (filtrləmə - yalnız 3-dən böyüklər)</code></pre>

    <h4>📊 Statistik Funksiyalar</h4>
    <pre><code>data = np.array([12, 45, 23, 89, 34, 56, 78, 90, 11, 67])

print(np.sum(data))      # 505 (cəmi)
print(np.mean(data))     # 50.5 (ortalama)
print(np.median(data))   # 50.0 (median)
print(np.std(data))      # 27.1 (standart sapma)
print(np.var(data))      # 734.2 (dispersiya)
print(np.min(data))      # 11 (minimum)
print(np.max(data))      # 90 (maksimum)
print(np.argmin(data))   # 8 (minimumun indeksi)
print(np.argmax(data))   # 7 (maksimumun indeksi)

# 2D massivdə ox üzrə əməliyyatlar
matris = np.array([[1, 2, 3], 
                   [4, 5, 6]])

print(np.sum(matris))       # 21 (bütün elementlərin cəmi)
print(np.sum(matris, axis=0))  # [5 7 9] (sütunlar üzrə cəm)
print(np.sum(matris, axis=1))  # [ 6 15] (sətirlər üzrə cəm)
print(np.mean(matris, axis=1)) # [2. 5.] (hər sətirin ortalaması)</code></pre>

    <h4>🔀 Massivləri Birləşdirmək və Bölmək</h4>
    <pre><code>a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Birləşdirmə (concatenate)
birlesmis = np.concatenate([a, b])  # [1 2 3 4 5 6]

# Üst-üstə qoyma (stacking)
ustuste = np.vstack([a, b])   # [[1 2 3] [4 5 6]] (vertical)
yanbayan = np.hstack([a, b])  # [1 2 3 4 5 6] (horizontal)

# Bölmək (splitting)
arr = np.arange(10)  # [0 1 2 3 4 5 6 7 8 9]
bolunmus = np.split(arr, 2)  # [array([0,1,2,3,4]), array([5,6,7,8,9])]
bolunmus2 = np.split(arr, [3, 7])  # [0-2], [3-6], [7-9]</code></pre>

    <h4>🎲 Təsadüfi Ədədlər (Random)</h4>
    <pre><code># Təsadüfi massivlər (0-1 arası)
rand = np.random.rand(3, 3)      # 3x3, 0-1 arası

# Tam ədədlər
rand_int = np.random.randint(1, 10, size=(2, 3))  # 1-9 arası, 2x3

# Normal paylanma (Gaussian)
normal = np.random.randn(1000)   # Ortalama 0, standart sapma 1

# Sıralı massivi qarışdırmaq
arr = np.arange(10)
np.random.shuffle(arr)           # arr indi qarışıq sıralı

# Təsadüfi seçimlər
secim = np.random.choice([1, 2, 3, 4, 5], size=3, replace=False)</code></pre>

    <h4>🔎 Filtirləmə və Axtarış</h4>
    <pre><code>data = np.array([12, 45, 23, 89, 34, 56, 78, 90, 11, 67])

# Boolean indeksləmə (filtrləmə)
boyuk_50 = data[data > 50]       # [89 56 78 90 67]
cut_ededler = data[data % 2 == 0] # [12 34 56 78 90]

# Şərt birləşdirmə
araliq = data[(data > 20) & (data < 70)]  # Və (and)
araliq2 = data[(data < 20) | (data > 80)] # Və ya (or)

# where() - şərtə görə seçim
netice = np.where(data > 50, "Böyük", "Kiçik")
# ['Kiçik' 'Kiçik' 'Kiçik' 'Böyük' 'Kiçik' 'Böyük' 'Böyük' 'Böyük' 'Kiçik' 'Böyük']

# nonzero() - sıfırdan fərqli indekslər
arr = np.array([0, 2, 0, 4, 0])
indeksler = np.nonzero(arr)      # (array([1, 3]),)</code></pre>

    <h4>⚡ Sürət Müqayisəsi: NumPy vs Python List</h4>
    <pre><code>import time

# Python list
python_list = list(range(1000000))
start = time.time()
result = [x * 2 for x in python_list]
print("Python list:", time.time() - start)  # ~0.1 saniyə

# NumPy array
numpy_array = np.arange(1000000)
start = time.time()
result = numpy_array * 2
print("NumPy array:", time.time() - start)  # ~0.001 saniyə (100x sürətli!)</code></pre>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə <code>np.array()</code> əvəzinə <code>np.asarray()</code> istifadə edin (kopya yaratmaya bilər)</li>
      <li>Böyük massivlərdə <code>dtype</code> göstərin (float32 vs float64 yaddaş qənaəti)</li>
      <li><code>view()</code> istifadə edin əgər kopya yaratmaq istəmirsinizsə</li>
      <li>Boolean indeksləmə çox güclüdür, amma yaddaşda yeni massiv yaradır</li>
      <li><code>np.save()</code> və <code>np.load()</code> ilə massivləri diskdə saxlayın</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="numpy-lab">
  <h2>🔢 NumPy Massivlər Lab</h2>
  
  <section class="demo-section">
    <h3>1. Massiv Yaradıcı və Vizualizer</h3>
    <div class="array-creator">
      <div class="creator-controls">
        <label>Tip:</label>
        <select id="arrayType" onchange="updateArrayOptions()">
          <option value="arange">arange (ardıcıl)</option>
          <option value="linspace">linspace (bərabər aralıq)</option>
          <option value="random">random (təsadüfi)</option>
          <option value="zeros">zeros (sıfırlar)</option>
          <option value="ones">ones (bir-lər)</option>
        </select>
        
        <div id="arangeOptions" class="type-options">
          <input type="number" id="arStart" value="0" placeholder="Başlanğıc">
          <input type="number" id="arStop" value="10" placeholder="Son">
          <input type="number" id="arStep" value="1" placeholder="Addım">
        </div>
        
        <div id="linspaceOptions" class="type-options" style="display:none;">
          <input type="number" id="lsStart" value="0" placeholder="Başlanğıc">
          <input type="number" id="lsStop" value="1" placeholder="Son">
          <input type="number" id="lsCount" value="5" placeholder="Say">
        </div>
        
        <div id="randomOptions" class="type-options" style="display:none;">
          <input type="number" id="randMin" value="1" placeholder="Min">
          <input type="number" id="randMax" value="100" placeholder="Max">
          <input type="number" id="randCount" value="10" placeholder="Say">
        </div>
        
        <button onclick="createArray()">Massiv Yarat</button>
      </div>
      
      <div class="array-display" id="arrayDisplay">
        <div class="empty-array">Massiv yaradın...</div>
      </div>
      
      <div class="array-stats" id="arrayStats"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Reshape və Forma Dəyişmə</h3>
    <div class="reshape-demo">
      <div class="original-array" id="originalArray">
        <p>Orijinal: <code>np.arange(12)</code></p>
        <div class="array-flat">[0 1 2 3 4 5 6 7 8 9 10 11]</div>
      </div>
      
      <div class="reshape-controls">
        <label>Sətir:</label>
        <input type="number" id="reshapeRows" value="3" min="1" max="12" onchange="applyReshape()">
        <label>Sütun:</label>
        <input type="number" id="reshapeCols" value="4" min="1" max="12" onchange="applyReshape()">
        <button onclick="autoReshape()">Auto (-1)</button>
      </div>
      
      <div class="reshaped-array" id="reshapedArray"></div>
      
      <div class="visual-matrix" id="visualMatrix"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. İndeksləmə və Kəsmə (Slicing)</h3>
    <div class="indexing-demo">
      <div class="demo-array" id="demoArray"></div>
      
      <div class="slice-controls">
        <label>Start:</label>
        <input type="number" id="sliceStart" value="2" min="0" max="9">
        <label>Stop:</label>
        <input type="number" id="sliceStop" value="7" min="1" max="10">
        <label>Step:</label>
        <input type="number" id="sliceStep" value="1" min="1" max="5">
        <button onclick="applySlice()">Kəs</button>
      </div>
      
      <div class="slice-result" id="sliceResult"></div>
      
      <div class="2d-indexing">
        <h4>2D Matris İndeksləmə</h4>
        <div class="matrix-grid" id="matrixGrid"></div>
        <div class="matrix-selector">
          <button onclick="highlightRow(0)">Sətir 0</button>
          <button onclick="highlightRow(1)">Sətir 1</button>
          <button onclick="highlightCol(0)">Sütun 0</button>
          <button onclick="highlightCol(1)">Sütun 1</button>
          <button onclick="highlightDiag()">Diaqonal</button>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Riyazi Əməliyyatlar (Vectorized)</h3>
    <div class="math-operations">
      <div class="operation-array" id="mathArray"></div>
      
      <div class="operation-buttons">
        <button onclick="applyMath('add', 10)">+ 10</button>
        <button onclick="applyMath('mul', 2)">× 2</button>
        <button onclick="applyMath('pow', 2)">²</button>
        <button onclick="applyMath('sqrt')">√</button>
        <button onclick="applyMath('mod', 2)">% 2</button>
      </div>
      
      <div class="operation-result" id="mathResult"></div>
      
      <div class="stats-display" id="statsDisplay"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Boolean Filtrləmə</h3>
    <div class="filter-demo">
      <div class="filter-array" id="filterArray"></div>
      
      <div class="filter-conditions">
        <button onclick="applyFilter('gt', 50)">> 50</button>
        <button onclick="applyFilter('lt', 30)">< 30</button>
        <button onclick="applyFilter('even')">Cüt</button>
        <button onclick="applyFilter('odd')">Tək</button>
        <button onclick="applyFilter('range', 30, 70)">30-70 arası</button>
      </div>
      
      <div class="filter-result" id="filterResult"></div>
      
      <div class="filter-visual" id="filterVisual"></div>
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

.numpy-lab {
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
  margin: 20px 0 10px 0;
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

/* Array Creator */
.creator-controls {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.creator-controls label {
  color: #00d9ff;
  font-weight: 600;
}

.creator-controls select, .creator-controls input {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}

.type-options {
  display: flex;
  gap: 10px;
}

.type-options input {
  width: 100px;
}

.array-display {
  background: #0d1117;
  padding: 25px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 16px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #30363d;
  margin-bottom: 15px;
}

.empty-array {
  color: #8b949e;
  font-style: italic;
}

.array-content {
  color: #00ff88;
  word-break: break-all;
  text-align: center;
}

.array-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.stat-box {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border-left: 4px solid #e94560;
}

.stat-label {
  font-size: 12px;
  color: #8b949e;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 20px;
  color: #00d9ff;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
}

/* Reshape Demo */
.reshape-demo {
  text-align: center;
}

.original-array {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.array-flat {
  color: #00ff88;
  font-family: 'Fira Code', monospace;
  font-size: 18px;
  margin-top: 10px;
}

.reshape-controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.reshape-controls label {
  color: #ffd700;
  font-weight: 600;
}

.reshape-controls input {
  width: 80px;
  background: #1a1a2e;
  border: 2px solid #00d9ff;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}

.reshaped-array {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  color: #00ff88;
  margin-bottom: 20px;
  min-height: 60px;
}

.visual-matrix {
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
}

.matrix-row {
  display: flex;
  gap: 5px;
}

.matrix-cell {
  width: 50px;
  height: 50px;
  background: #1a1a2e;
  border: 2px solid #30363d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s;
}

.matrix-cell.highlighted {
  background: #00ff88;
  color: #000;
  border-color: #00ff88;
  transform: scale(1.1);
}

/* Indexing Demo */
.demo-array {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.array-element {
  width: 50px;
  height: 50px;
  background: #1a1a2e;
  border: 2px solid #30363d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  position: relative;
  transition: all 0.3s;
}

.array-element.selected {
  background: #e94560;
  border-color: #e94560;
  transform: translateY(-5px);
}

.array-element::after {
  content: attr(data-index);
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  color: #8b949e;
}

.slice-controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.slice-controls label {
  color: #ffd700;
}

.slice-controls input {
  width: 70px;
  background: #1a1a2e;
  border: 2px solid #ffd700;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  text-align: center;
}

.slice-result {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  color: #00ff88;
  min-height: 60px;
  border-left: 4px solid #00ff88;
}

.matrix-grid {
  display: inline-grid;
  grid-template-columns: repeat(3, 60px);
  gap: 5px;
  margin: 20px 0;
}

.matrix-selector {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.matrix-selector button {
  background: #30363d;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.matrix-selector button:hover {
  background: #00d9ff;
  color: #000;
}

/* Math Operations */
.operation-array, .operation-result {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  margin-bottom: 15px;
  text-align: center;
}

.operation-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.operation-buttons button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.operation-buttons button:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 20px rgba(233, 69, 96, 0.4);
}

.stats-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}

.stat-item {
  background: #1a1a2e;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
}

.stat-name {
  color: #8b949e;
  margin-bottom: 5px;
}

.stat-val {
  color: #00ff88;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
}

/* Filter Demo */
.filter-array, .filter-result {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  margin-bottom: 15px;
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-element {
  width: 45px;
  height: 45px;
  background: #1a1a2e;
  border: 2px solid #30363d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.3s;
}

.filter-element.filtered {
  background: #00ff88;
  color: #000;
  border-color: #00ff88;
  transform: scale(1.1);
}

.filter-element.dimmed {
  opacity: 0.3;
}

.filter-conditions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-conditions button {
  background: #30363d;
  border: 2px solid #ffd700;
  color: #ffd700;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-conditions button:hover {
  background: #ffd700;
  color: #000;
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
  .creator-controls, .reshape-controls, .slice-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .type-options {
    flex-direction: column;
  }
}`,

    js: `// NumPy Arrays Lab
let currentArray = [];
let demoArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let matrix2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function updateArrayOptions() {
  const type = document.getElementById('arrayType').value;
  document.querySelectorAll('.type-options').forEach(el => el.style.display = 'none');
  document.getElementById(type + 'Options').style.display = 'flex';
}

function createArray() {
  const type = document.getElementById('arrayType').value;
  const display = document.getElementById('arrayDisplay');
  const stats = document.getElementById('arrayStats');
  
  let arr = [];
  let desc = '';
  
  switch(type) {
    case 'arange':
      const start = parseInt(document.getElementById('arStart').value) || 0;
      const stop = parseInt(document.getElementById('arStop').value) || 10;
      const step = parseInt(document.getElementById('arStep').value) || 1;
      for (let i = start; i < stop; i += step) arr.push(i);
      desc = 'np.arange(' + start + ', ' + stop + ', ' + step + ')';
      break;
    case 'linspace':
      const lsStart = parseFloat(document.getElementById('lsStart').value) || 0;
      const lsStop = parseFloat(document.getElementById('lsStop').value) || 1;
      const lsCount = parseInt(document.getElementById('lsCount').value) || 5;
      for (let i = 0; i < lsCount; i++) {
        arr.push((lsStart + (lsStop - lsStart) * i / (lsCount - 1)).toFixed(2));
      }
      desc = 'np.linspace(' + lsStart + ', ' + lsStop + ', ' + lsCount + ')';
      break;
    case 'random':
      const rMin = parseInt(document.getElementById('randMin').value) || 1;
      const rMax = parseInt(document.getElementById('randMax').value) || 100;
      const rCount = parseInt(document.getElementById('randCount').value) || 10;
      for (let i = 0; i < rCount; i++) {
        arr.push(Math.floor(Math.random() * (rMax - rMin + 1)) + rMin);
      }
      desc = 'np.random.randint(' + rMin + ', ' + rMax + ', ' + rCount + ')';
      break;
    case 'zeros':
      const zCount = 8;
      arr = new Array(zCount).fill(0);
      desc = 'np.zeros(' + zCount + ')';
      break;
    case 'ones':
      const oCount = 8;
      arr = new Array(oCount).fill(1);
      desc = 'np.ones(' + oCount + ')';
      break;
  }
  
  currentArray = arr;
  
  display.innerHTML = '<div class="array-content">' +
    '<div style="color: #8b949e; margin-bottom: 10px;">' + desc + '</div>' +
    '[' + arr.join(' ') + ']' +
  '</div>';
  
  // Stats
  const sum = arr.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
  const mean = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  stats.innerHTML = 
    '<div class="stat-box"><div class="stat-label">Shape</div><div class="stat-value">(' + arr.length + ',)</div></div>' +
    '<div class="stat-box"><div class="stat-label">Sum</div><div class="stat-value">' + sum.toFixed(1) + '</div></div>' +
    '<div class="stat-box"><div class="stat-label">Mean</div><div class="stat-value">' + mean.toFixed(1) + '</div></div>' +
    '<div class="stat-box"><div class="stat-label">Min/Max</div><div class="stat-value">' + min + '/' + max + '</div></div>';
}

function applyReshape() {
  const rows = parseInt(document.getElementById('reshapeRows').value) || 3;
  const cols = parseInt(document.getElementById('reshapeCols').value) || 4;
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
  if (rows * cols !== 12) {
    document.getElementById('reshapedArray').innerHTML = '<span style="color: #ff6b6b;">Xəta: ' + rows + '×' + cols + ' = ' + (rows*cols) + ' ≠ 12</span>';
    document.getElementById('visualMatrix').innerHTML = '';
    return;
  }
  
  let result = [];
  let visualHTML = '<div class="visual-matrix">';
  
  for (let i = 0; i < rows; i++) {
    let row = [];
    visualHTML += '<div class="matrix-row">';
    for (let j = 0; j < cols; j++) {
      const val = arr[i * cols + j];
      row.push(val);
      visualHTML += '<div class="matrix-cell">' + val + '</div>';
    }
    result.push(row);
    visualHTML += '</div>';
  }
  visualHTML += '</div>';
  
  document.getElementById('reshapedArray').innerHTML = '<pre style="margin:0;">' + JSON.stringify(result).replace(/\\[\\[/g, '[\\n [').replace(/\\]\\]/g, ']\\n]').replace(/\\],/g, '],\\n') + '</pre>';
  document.getElementById('visualMatrix').innerHTML = visualHTML;
}

function autoReshape() {
  document.getElementById('reshapeRows').value = 2;
  document.getElementById('reshapeCols').value = 6;
  applyReshape();
}

function renderDemoArray() {
  const container = document.getElementById('demoArray');
  container.innerHTML = demoArray.map((val, idx) => 
    '<div class="array-element" data-index="' + idx + '">' + val + '</div>'
  ).join('');
  
  // Math array
  document.getElementById('mathArray').innerHTML = 'Original: [' + demoArray.join(', ') + ']';
  
  // Filter array
  const filterContainer = document.querySelector('.filter-array');
  if (filterContainer) {
    filterContainer.innerHTML = demoArray.map((val, idx) => 
      '<div class="filter-element" data-index="' + idx + '">' + val + '</div>'
    ).join('');
  }
}

function applySlice() {
  const start = parseInt(document.getElementById('sliceStart').value) || 0;
  const stop = parseInt(document.getElementById('sliceStop').value) || demoArray.length;
  const step = parseInt(document.getElementById('sliceStep').value) || 1;
  
  const result = [];
  const elements = document.querySelectorAll('.array-element');
  
  elements.forEach(el => el.classList.remove('selected'));
  
  for (let i = start; i < stop && i < demoArray.length; i += step) {
    result.push(demoArray[i]);
    if (elements[i]) elements[i].classList.add('selected');
  }
  
  document.getElementById('sliceResult').innerHTML = 
    'arr[' + start + ':' + stop + ':' + step + '] = [' + result.join(', ') + ']';
}

function renderMatrix() {
  const grid = document.getElementById('matrixGrid');
  grid.innerHTML = '';
  
  matrix2D.forEach((row, i) => {
    row.forEach((val, j) => {
      const cell = document.createElement('div');
      cell.className = 'matrix-cell';
      cell.textContent = val;
      cell.dataset.row = i;
      cell.dataset.col = j;
      grid.appendChild(cell);
    });
  });
}

function highlightRow(rowIdx) {
  document.querySelectorAll('.matrix-cell').forEach(cell => {
    cell.classList.remove('highlighted');
    if (parseInt(cell.dataset.row) === rowIdx) {
      cell.classList.add('highlighted');
    }
  });
}

function highlightCol(colIdx) {
  document.querySelectorAll('.matrix-cell').forEach(cell => {
    cell.classList.remove('highlighted');
    if (parseInt(cell.dataset.col) === colIdx) {
      cell.classList.add('highlighted');
    }
  });
}

function highlightDiag() {
  document.querySelectorAll('.matrix-cell').forEach(cell => {
    cell.classList.remove('highlighted');
    if (cell.dataset.row === cell.dataset.col) {
      cell.classList.add('highlighted');
    }
  });
}

function applyMath(operation, value) {
  let result = [];
  let desc = '';
  
  switch(operation) {
    case 'add':
      result = demoArray.map(x => x + value);
      desc = 'arr + ' + value;
      break;
    case 'mul':
      result = demoArray.map(x => x * value);
      desc = 'arr * ' + value;
      break;
    case 'pow':
      result = demoArray.map(x => Math.pow(x, value));
      desc = 'arr ** ' + value;
      break;
    case 'sqrt':
      result = demoArray.map(x => Math.sqrt(x).toFixed(2));
      desc = 'np.sqrt(arr)';
      break;
    case 'mod':
      result = demoArray.map(x => x % value);
      desc = 'arr % ' + value;
      break;
  }
  
  document.getElementById('mathResult').innerHTML = 
    '<div style="color: #8b949e; margin-bottom: 10px;">' + desc + '</div>' +
    '[' + result.join(', ') + ']';
  
  // Stats
  const sum = result.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
  const mean = sum / result.length;
  const min = Math.min(...result);
  const max = Math.max(...result);
  
  document.getElementById('statsDisplay').innerHTML = 
    '<div class="stat-item"><div class="stat-name">Sum</div><div class="stat-val">' + sum.toFixed(1) + '</div></div>' +
    '<div class="stat-item"><div class="stat-name">Mean</div><div class="stat-val">' + mean.toFixed(1) + '</div></div>' +
    '<div class="stat-item"><div class="stat-name">Min</div><div class="stat-val">' + min.toFixed(1) + '</div></div>' +
    '<div class="stat-item"><div class="stat-name">Max</div><div class="stat-val">' + max.toFixed(1) + '</div></div>';
}

function applyFilter(condition, val1, val2) {
  const elements = document.querySelectorAll('.filter-element');
  const result = [];
  
  elements.forEach((el, idx) => {
    const value = demoArray[idx];
    let match = false;
    
    switch(condition) {
      case 'gt':
        match = value > val1;
        break;
      case 'lt':
        match = value < val1;
        break;
      case 'even':
        match = value % 2 === 0;
        break;
      case 'odd':
        match = value % 2 !== 0;
        break;
      case 'range':
        match = value > val1 && value < val2;
        break;
    }
    
    if (match) {
      el.classList.add('filtered');
      el.classList.remove('dimmed');
      result.push(value);
    } else {
      el.classList.remove('filtered');
      el.classList.add('dimmed');
    }
  });
  
  document.getElementById('filterResult').innerHTML = 
    'Nəticə: [' + result.join(', ') + '] (' + result.length + ' element)';
}

// Initialize
renderDemoArray();
renderMatrix();
applyReshape();
console.log('NumPy Arrays Lab loaded!');`
  },

  exercise: {
    title: "📊 Data Analysis with NumPy - Satış Analizi",
    description: "NumPy istifadə edərək böyük satış datasını analiz edin. Statistik hesablamalar, filtrləmə və data transformasiyası aparın.",
    requirements: [
      "3 ay (90 gün) üçün təsadüfi satış datası yaradın (gündəlik 100-1000 AZN arası)",
      "Həftəlik və aylıq ümumi satışları hesablayın (reshape istifadə edin)",
      "Ən yüksək və ən aşağı satış günlərini tapın (argmax, argmin)",
      "Ortalama satışdan yüksək olan günləri seçin (boolean indexing)",
      "Hər ayın son 10 günündəki satışları ayrı massivdə saxlayın (slicing)",
      "Satışları 3 kateqoriyaya bölün: Zəif (<400), Orta (400-700), Yaxşı (>700) (where)",
      "Hər kateqoriyanın faiz nisbətini hesablayın",
      "Kumulativ (yığılmış) satışları hesablayın (cumsum)",
      "Data normalization aparın (0-1 arasına gətirin)",
      "Nəticələri JSON formatında saxlayın"
    ],
    starterCode: `import numpy as np
import json

# Təsadüfi satış datası yaradın (90 gün)
np.random.seed(42)  # Bərpaolunan nəticələr üçün
gunluk_satislar = np.random.randint(100, 1000, size=90)

print("=== SATIŞ ANALIZI ===")
print(f"Ümumi gün sayı: {len(gunluk_satislar)}")
print(f"İlk 10 gün: {gunluk_satislar[:10]}")

# 1. Həftəlik analiz (90 gün = 12 həftə + 6 gün)
# reshape() istifadə edərək 2D massivə çevirin (son 6 günü atın və ya ayrı saxlayın)
# Kodunuzu bura yazın

# 2. Aylıq analiz (30 gün = 1 ay)
# 3 aylıq periodları ayırın
# Kodunuzu bura yazın

# 3. Statistik göstəricilər
# Ortalama, median, standart sapma, min, max
# Kodunuzu bura yazın

# 4. Ən yaxşı və ən zəif günlər
# argmax() və argmin() istifadə edin
# Kodunuzu bura yazın

# 5. Ortalamaadan yüksək satış günləri
# Boolean indexing istifadə edin
# Kodunuzu bura yazın

# 6. Aylıq son 10 gün analizi
# Slicing: [20:30], [50:60], [80:90]
# Kodunuzu bura yazın

# 7. Kateqoriyalara bölünmə (Zəif, Orta, Yaxşı)
# np.where() istifadə edin
# Kodunuzu bura yazın

# 8. Kumulativ satışlar
# np.cumsum() istifadə edin
# Kodunuzu bura yazın

# 9. Normalizasiya (Min-Max scaling)
# Formula: (x - min) / (max - min)
# Kodunuzu bura yazın

# 10. Nəticələri JSON-a yazın
neticeler = {
    "umumi_statistikalar": {
        # Kodunuzu bura yazın
    },
    "ayliq_xulase": {
        # Kodunuzu bura yazın
    },
    "kateqoriyalar": {
        # Kodunuzu bura yazın
    }
}

with open('satis_analizi.json', 'w', encoding='utf-8') as f:
    json.dump(neticeler, f, ensure_ascii=False, indent=2)

print("\\n✅ Analiz tamamlandı! 'satis_analizi.json' faylı yaradıldı.")`,
  },

  quiz: [
    {
      question: "NumPy massivləri adi Python list-lərindən niyə sürətlidir?",
      options: ["Daha az yaddaş işlədir", "C dilində yazılıb və yaddaşda ardıcıl saxlanılır", "Daha az element saxlayır", "Avtomatik optimallaşdırır"],
      correctAnswer: 1
    },
    {
      question: "np.array([1, 2, 3]).shape nə qaytarır?",
      options: ["(3)", "(3,)", "3", "[3]"],
      correctAnswer: 1
    },
    {
      question: "2D massivdə arr[0, :] nə seçir?",
      options: ["Birinci sütunu", "Birinci sətri", "Bütün elementləri", "Xəta verir"],
      correctAnswer: 1
    },
    {
      question: "np.arange(0, 10, 2) nə verir?",
      options: ["[0, 2, 4, 6, 8, 10]", "[0, 2, 4, 6, 8]", "[1, 3, 5, 7, 9]", "[0, 1, 2, 3, 4]"],
      correctAnswer: 1
    },
    {
      question: "arr.reshape(2, -1) nə edir?",
      options: ["Xəta verir", "2 sətir, sütun avtomatik hesablayır", "Massivi 2 dəfə böyüdür", "2 element seçir"],
      correctAnswer: 1
    },
    {
      question: "Vectorized əməliyyat nə deməkdir?",
      options: ["Dövr ilə hər elementə əməliyyat", "Bütün elementlərə eyni anda əməliyyat", "Yalnız vektorla işləmə", "Şərtli əməliyyat"],
      correctAnswer: 1
    },
    {
      question: "arr[arr > 5] nə edir?",
      options: ["5-dən böyük indeksləri seçir", "5-dən böyük elementləri seçir (filtrləmə)", "5-ci elementdən sonrasını kəsir", "Massivi 5-ə bölür"],
      correctAnswer: 1
    },
    {
      question: "np.linspace(0, 1, 5) nə verir?",
      options: ["[0, 0.2, 0.4, 0.6, 0.8, 1.0]", "[0, 0.25, 0.5, 0.75, 1.0]", "[0, 1, 2, 3, 4]", "[0.0, 0.1, 0.2, 0.3, 0.4]"],
      correctAnswer: 1
    },
    {
      question: "axis=0 parametri nə deməkdir?",
      options: ["Sətirlər üzrə", "Sütunlar üzrə", "3D ox", "Transpoz"],
      correctAnswer: 1
    },
    {
      question: "np.where(arr > 0, 'müsbət', 'mənfi') nə edir?",
      options: ["0-dan böyük elementləri seçir", "Şərtə görə dəyər dəyişir (müsbət/mənfi)", "Massivi sıralayır", "Unikal dəyərləri tapır"],
      correctAnswer: 1
    }
  ]
};

export default topicai11;