export const topicai12 = {
  id: 12,
  title: "NumPy: Matris əməliyyatları",
  duration: "120 dəq",
  isFree: false,
  
  content: `
    <h4>🧮 Matrislər - 2D Massivlər</h4>
    <p><strong>Matris</strong> - ədədlərin sətir və sütunlar şəklində düzülmüş cədvəli. NumPy-da matrislər 2 ölçülü massivlər (2D arrays) şəklində təmsil olunur. Matrislər <strong>lineer cəbr</strong>, <strong>maşın öyrənməsi</strong> və <strong>kompyuter qrafikası</strong> üçün fundamental əhəmiyyət daşıyır.</p>

    <h4>📐 Matris Yaratma Üsulları</h4>
    <pre><code>import numpy as np

# 1. List-lərdən matris yaratmaq
A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])

print(A.shape)  # (3, 3) - 3 sətir, 3 sütun
print(A.ndim)   # 2 - iki ölçülü

# 2. Xüsusi matrislər
I = np.eye(3)           # 3x3 vahid matris (diagonalda 1-lər)
Z = np.zeros((2, 4))    # 2x4 sıfır matris
O = np.ones((3, 2))     # 3x2 bir-lər matrisi

# 3. Diaqonal matris
D = np.diag([1, 2, 3, 4])  # Diaqonalda 1,2,3,4 olan matris

# 4. Ardıcıl ədədlərdən matris
M = np.arange(1, 13).reshape(3, 4)  # 1-12 ədədləri 3x4 matrisdə</code></pre>

    <h4>➕➖ Matris Əməliyyatları: Toplama və Çıxma</h4>
    <p>Matrislərin toplanması və çıxılması <strong>element-wise</strong> (elementlər üzrə) aparılır. Yəni eyni mövqedəki elementlər bir-biri ilə əməliyyata daxil olur.</p>

    <pre><code>A = np.array([[1, 2], 
              [3, 4]])
B = np.array([[5, 6], 
              [7, 8]])

# Toplama
C = A + B
# [[1+5, 2+6],      [[6, 8],
#  [3+7, 4+8]]  =    [10, 12]]

# Çıxma
D = A - B
# [[1-5, 2-6],      [[-4, -4],
#  [3-7, 4-8]]  =    [-4, -4]]

# Skalyar ilə əməliyyat
E = A + 10    # Hər elementə 10 əlavə et
F = A * 2     # Hər elementi 2-yə vur</code></pre>

    <h4>✖️ Matris Vurulması (Matrix Multiplication)</h4>
    <p>Bu, adi element-wise vurmadan <strong>fərqlidir</strong>! Matris vurulmasında sətirlər sütunlarla vurulur.</p>

    <pre><code># Element-wise vurma (Hadamard product)
C = A * B
# [[1*5, 2*6],      [[5, 12],
#  [3*7, 4*8]]  =    [21, 32]]

# Matris vurulması (dot product)
# A (2x3) · B (3x2) = C (2x2)
A = np.array([[1, 2, 3], 
              [4, 5, 6]])      # 2 sətir, 3 sütun
B = np.array([[7, 8], 
              [9, 10], 
              [11, 12]])       # 3 sətir, 2 sütun

C = np.dot(A, B)   # və ya A @ B (Python 3.5+)
# C[0,0] = 1*7 + 2*9 + 3*11 = 58
# C[0,1] = 1*8 + 2*10 + 3*12 = 64
# C[1,0] = 4*7 + 5*9 + 6*11 = 139
# C[1,1] = 4*8 + 5*10 + 6*12 = 154

print(C)
# [[ 58  64]
#  [139 154]]

# Şərt: A-nın sütun sayı = B-nin sətir sayı</code></pre>

    <h4>🔄 Matrisin Transpozu (Transpose)</h4>
    <p>Transpoz - sətirlərin sütun, sütunların sətir olması deməkdir.</p>

    <pre><code>A = np.array([[1, 2, 3], 
              [4, 5, 6]])
# A.shape = (2, 3)

A_T = A.T   # və ya A.transpose()
# [[1, 4],
#  [2, 5],
#  [3, 6]]
# A_T.shape = (3, 2)

# Xüsusiyyətlər:
# (A.T).T = A
# (A + B).T = A.T + B.T
# (A @ B).T = B.T @ A.T</code></pre>

    <h4>🔢 Determinant və Tərs Matris</h4>
    <p>Yalnız <strong>kvadrat matrislər</strong> (sətir=sütun) üçün müəyyən edilir.</p>

    <pre><code>A = np.array([[4, 7], 
              [2, 6]])

# Determinant (det)
det_A = np.linalg.det(A)
# det(A) = 4*6 - 7*2 = 24 - 14 = 10

# Tərs matris (inverse) - yalnız det ≠ 0 olduqda mövcuddur
A_inv = np.linalg.inv(A)
# A @ A_inv = I (vahid matris)

# Yoxlama
I = np.dot(A, A_inv)
print(np.round(I))  # [[1. 0.] [0. 1.]]</code></pre>

    <h4>📊 Öz Dəyərlər və Öz Vektorlar (Eigenvalues & Eigenvectors)</h4>
    <p>Lineer cəbrin ən vacib konseptlərindən biri. Maşın öyrənməsində (PCA kimi) geniş istifadə olunur.</p>

    <pre><code>A = np.array([[4, 2], 
              [1, 3]])

# Öz dəyərlər və öz vektorlar
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Öz dəyərlər:", eigenvalues)       # [5. 2.]
print("Öz vektorlar:\\n", eigenvectors)

# A @ v = λ * v  (λ = öz dəyər, v = öz vektor)
# Yoxlama:
v = eigenvectors[:, 0]  # Birinci öz vektor
lambda_val = eigenvalues[0]
print(np.dot(A, v))     # λ * v ilə eyni olmalıdır</code></pre>

    <h4>📐 Matrisin Rankı və Normu</h4>
    <pre><code>A = np.array([[1, 2, 3], 
              [2, 4, 6], 
              [1, 1, 1]])

# Rank - xətti müstəqil sətir/sütun sayı
rank = np.linalg.matrix_rank(A)  # 2 (3-cü sətir 1-ci-nin 2 mislidir)

# Normlar (məsafə ölçüləri)
frobenius_norm = np.linalg.norm(A)        # Frobenius normu
l1_norm = np.linalg.norm(A, ord=1)        # Maksimum sütun cəmi
inf_norm = np.linalg.norm(A, ord=np.inf)  # Maksimum sətir cəmi</code></pre>

    <h4>🔧 Matris Dekomposisiyaları</h4>
    <p>Böyük matrisləri daha sadə komponentlərə ayırmaq.</p>

    <pre><code>A = np.array([[1, 2], 
              [3, 4], 
              [5, 6]])

# SVD (Singular Value Decomposition) - A = U @ S @ Vt
# Maşın öyrənməsində çox vacibdir (dimensionality reduction)
U, S, Vt = np.linalg.svd(A, full_matrices=False)
print("U shape:", U.shape)      # (3, 2)
print("S (singular values):", S) # [9.5, 0.5] təqribi
print("Vt shape:", Vt.shape)    # (2, 2)

# LU Dekomposisiya (Linear Equations üçün)
from scipy.linalg import lu
P, L, U = lu(A)  # A = P @ L @ U</code></pre>

    <h4>📈 Xətti Tənliklər Sisteminin Həlli</h4>
    <p>NumPy ilə Ax = b tipli sistemləri həll etmək çox asandır.</p>

    <pre><code># Sistem:
# 2x + y = 5
# x - y = 1

# Matris forması: A @ x = b
A = np.array([[2, 1], 
              [1, -1]])
b = np.array([5, 1])

# Həll
x = np.linalg.solve(A, b)
print(x)  # [2. 1.]  yəni x=2, y=1

# Yoxlama
print(np.dot(A, x))  # [5. 1.] = b ✓

# Əgər A kvadrat deyilsə və ya det=0-dırsa:
# np.linalg.lstsq() - ən kiçik kvadratlar metodu</code></pre>

    <h4>🎯 Praktiki Tətbiq: Şəkil Processing</h4>
    <pre><code># Şəkil = piksel matrisi (hündürlük x en x rəng kanalı)
# Qara-ağ şəkil = 2D matris (0-255 arası dəyərlər)

# NumPy ilə şəkil manipulyasiyası
from PIL import Image
import numpy as np

# Şəkili yüklə və matrisə çevir
img = Image.open('foto.jpg')
img_array = np.array(img)

print(img_array.shape)  # (800, 600, 3) - 800x600 piksel, 3 rəng kanalı (RGB)

# Şəkili çevirmək (transpose)
rotated = img_array.T

# Parlaqlığı artırmaq
brighter = np.clip(img_array + 50, 0, 255)

# Blur effekti (konvolyusiya matrisi ilə)
blur_kernel = np.ones((3, 3)) / 9
# ... konvolyusiya əməliyyatı ...</code></pre>

    <h4>⚡ Sürətli Əməliyyatlar - Broadcasting</h4>
    <p>Fərqli ölçülü matrislərlə əməliyyatlar.</p>

    <pre><code>A = np.array([[1, 2, 3], 
              [4, 5, 6]])      # (2, 3)

# Sətir vektoru ilə əməliyyat
row = np.array([10, 20, 30])    # (3,)
print(A + row)  # Hər sətirə [10,20,30] əlavə et
# [[11 22 33]
#  [14 25 36]]

# Sütun vektoru ilə əməliyyat
col = np.array([[10], 
                [20]])          # (2, 1)
print(A + col)  # Hər sütuna [10,20] əlavə et
# [[11 12 13]
#  [24 25 26]]</code></pre>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə <code>.shape</code> yoxlayın əməliyyatdan əvvəl</li>
      <li>Matris vurulmasında ölçülərə diqqət edin: (m×n) @ (n×p) = (m×p)</li>
      <li><code>@</code> operatoru (Python 3.5+) <code>np.dot()</code>-dan daha oxunaqlıdır</li>
      <li><code>np.linalg</code> modulunda daha çox lineer cəbr funksiyaları var</li>
      <li>Böyük matrislərdə <code>dtype</code> göstərin (float32 vs float64)</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="matrix-lab">
  <h2>🧮 NumPy Matris Lab</h2>
  
  <section class="demo-section">
    <h3>1. Matris Yaradıcı və Vizualizer</h3>
    <div class="matrix-creator">
      <div class="creator-controls">
        <label>Sətir:</label>
        <input type="number" id="matRows" value="3" min="2" max="5">
        <label>Sütun:</label>
        <input type="number" id="matCols" value="3" min="2" max="5">
        <select id="matType">
          <option value="random">Təsadüfi</option>
          <option value="identity">Vahid Matris</option>
          <option value="zeros">Sıfır Matris</option>
          <option value="sequential">Ardıcıl</option>
        </select>
        <button onclick="createMatrix()">Yarat</button>
      </div>
      
      <div class="matrix-display" id="matrixA">
        <div class="matrix-container">
          <h4>Matris A</h4>
          <div class="matrix-grid" id="gridA"></div>
          <div class="matrix-info" id="infoA"></div>
        </div>
        
        <div class="matrix-operations">
          <button onclick="transposeA()">A<sup>T</sup> (Transpoz)</button>
          <button onclick="inverseA()">A<sup>-1</sup> (Tərs)</button>
          <button onclick="determinantA()">det(A)</button>
          <button onclick="clearA()">Təmizlə</button>
        </div>
        
        <div class="matrix-result" id="resultA"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Matris Əməliyyatları (A + B, A × B)</h3>
    <div class="matrix-ops-demo">
      <div class="two-matrices">
        <div class="matrix-box" id="matrixBoxA">
          <h4>Matris A <span id="dimA">(3×3)</span></h4>
          <div class="small-grid" id="smallGridA"></div>
          <button onclick="randomizeA()">Təsadüfi A</button>
        </div>
        
        <div class="operation-selector">
          <select id="operation" onchange="performOperation()">
            <option value="add">A + B (Toplama)</option>
            <option value="subtract">A - B (Çıxma)</option>
            <option value="multiply">A × B (Vurma)</option>
            <option value="element">A ⊙ B (Element-wise)</option>
          </select>
          <div class="op-symbol" id="opSymbol">+</div>
        </div>
        
        <div class="matrix-box" id="matrixBoxB">
          <h4>Matris B <span id="dimB">(3×3)</span></h4>
          <div class="small-grid" id="smallGridB"></div>
          <button onclick="randomizeB()">Təsadüfi B</button>
        </div>
      </div>
      
      <div class="equals-sign">=</div>
      
      <div class="result-matrix" id="resultMatrix">
        <h4>Nəticə <span id="dimResult">(3×3)</span></h4>
        <div class="small-grid" id="resultGrid"></div>
      </div>
      
      <div class="calculation-steps" id="calcSteps"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Xətti Tənliklər Həll Edici</h3>
    <div class="equation-solver">
      <div class="system-input">
        <h4>Tənlik Sistemi: Ax = b</h4>
        <div class="matrix-input">
          <div class="input-section">
            <label>Matris A (2×2):</label>
            <div class="input-grid" id="inputA">
              <input type="number" value="2" id="a00">
              <input type="number" value="1" id="a01">
              <input type="number" value="1" id="a10">
              <input type="number" value="-1" id="a11">
            </div>
          </div>
          
          <div class="input-section">
            <label>Vektor b:</label>
            <div class="vector-input" id="inputB">
              <input type="number" value="5" id="b0">
              <input type="number" value="1" id="b1">
            </div>
          </div>
        </div>
        <button onclick="solveSystem()">Sistemi Həll Et</button>
      </div>
      
      <div class="solution-display" id="solutionDisplay">
        <div class="solution-steps" id="solutionSteps"></div>
        <div class="final-answer" id="finalAnswer"></div>
        <div class="verification" id="verification"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Öz Dəyərlər (Eigenvalues) Vizualizasiyası</h3>
    <div class="eigen-demo">
      <div class="eigen-matrix">
        <h4>Matris A (2×2)</h4>
        <div class="eigen-inputs">
          <input type="number" id="e00" value="4" onchange="updateEigen()">
          <input type="number" id="e01" value="2" onchange="updateEigen()">
          <input type="number" id="e10" value="1" onchange="updateEigen()">
          <input type="number" id="e11" value="3" onchange="updateEigen()">
        </div>
      </div>
      
      <div class="eigen-results" id="eigenResults">
        <div class="eigen-value">
          <span class="lambda">λ₁</span>
          <span class="value" id="lambda1">5.0</span>
        </div>
        <div class="eigen-value">
          <span class="lambda">λ₂</span>
          <span class="value" id="lambda2">2.0</span>
        </div>
      </div>
      
      <div class="eigen-vectors" id="eigenVectors">
        <div class="vector-display">
          <span class="label">v₁:</span>
          <span class="vector" id="v1">[0.89, 0.45]</span>
        </div>
        <div class="vector-display">
          <span class="label">v₂:</span>
          <span class="vector" id="v2">[-0.71, 0.71]</span>
        </div>
      </div>
      
      <div class="eigen-visualization" id="eigenViz">
        <canvas id="eigenCanvas" width="400" height="400"></canvas>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Matris Transformasiyaları (Qrafik)</h3>
    <div class="transform-demo">
      <div class="transform-controls">
        <label>Transformasiya:</label>
        <select id="transformType" onchange="applyTransform()">
          <option value="identity">Vahid (Identity)</option>
          <option value="scale">Miqyas (Scale)</option>
          <option value="rotate">Döndürmə (Rotate)</option>
          <option value="shear">Kəsər (Shear)</option>
          <option value="reflect">Əks etdirmə (Reflect)</option>
        </select>
        
        <div class="transform-params" id="transformParams">
          <label>Parametr:</label>
          <input type="range" id="transformVal" min="0" max="360" value="45" oninput="applyTransform()">
          <span id="paramValue">45°</span>
        </div>
      </div>
      
      <div class="transform-display">
        <div class="original-shape">
          <h4>Orijinal</h4>
          <canvas id="originalCanvas" width="300" height="300"></canvas>
        </div>
        
        <div class="arrow">→</div>
        
        <div class="transformed-shape">
          <h4>Transformasiya olunmuş</h4>
          <canvas id="transformedCanvas" width="300" height="300"></canvas>
        </div>
      </div>
      
      <div class="transform-matrix" id="transformMatrix"></div>
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

.matrix-lab {
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

/* Matrix Creator */
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

.creator-controls input, .creator-controls select {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  width: 100px;
}

.creator-controls select {
  width: 150px;
}

.matrix-container {
  text-align: center;
  margin-bottom: 20px;
}

.matrix-grid {
  display: inline-grid;
  gap: 5px;
  margin: 15px 0;
  padding: 20px;
  background: #0d1117;
  border-radius: 10px;
  border: 2px solid #30363d;
}

.matrix-cell {
  width: 60px;
  height: 60px;
  background: #1a1a2e;
  border: 2px solid #00d9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  color: #00ff88;
  font-family: 'Fira Code', monospace;
}

.matrix-info {
  color: #8b949e;
  font-size: 14px;
  margin-top: 10px;
}

.matrix-operations {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.matrix-operations button {
  background: #30363d;
  border: 2px solid #e94560;
  color: #e94560;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
}

.matrix-operations button:hover {
  background: #e94560;
  color: #fff;
}

.matrix-result {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  min-height: 100px;
  border-left: 4px solid #00ff88;
}

/* Matrix Operations Demo */
.two-matrices {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.matrix-box, .result-matrix {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  min-width: 150px;
}

.small-grid {
  display: grid;
  gap: 3px;
  margin: 15px 0;
  justify-content: center;
}

.small-cell {
  width: 45px;
  height: 45px;
  background: #0d1117;
  border: 2px solid #00d9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: bold;
  color: #00ff88;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
}

.operation-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.operation-selector select {
  background: #1a1a2e;
  border: 2px solid #ffd700;
  color: #ffd700;
  padding: 10px;
  border-radius: 6px;
  font-size: 16px;
}

.op-symbol {
  font-size: 40px;
  color: #e94560;
  font-weight: bold;
}

.equals-sign {
  font-size: 50px;
  color: #00ff88;
  text-align: center;
  margin: 20px 0;
}

.result-matrix .small-cell {
  border-color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
}

.calculation-steps {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #8b949e;
  max-height: 200px;
  overflow-y: auto;
}

/* Equation Solver */
.system-input {
  text-align: center;
  margin-bottom: 30px;
}

.matrix-input {
  display: flex;
  gap: 40px;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap;
}

.input-section {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
}

.input-section label {
  display: block;
  color: #00d9ff;
  margin-bottom: 10px;
  font-weight: 600;
}

.input-grid {
  display: grid;
  grid-template-columns: 60px 60px;
  gap: 10px;
}

.vector-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-grid input, .vector-input input {
  width: 60px;
  height: 60px;
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  text-align: center;
  font-size: 18px;
  border-radius: 8px;
}

.solution-display {
  background: #0d1117;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #00ff88;
}

.solution-steps {
  color: #8b949e;
  margin-bottom: 15px;
  line-height: 2;
}

.final-answer {
  font-size: 24px;
  color: #00ff88;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
}

.verification {
  color: #ffd700;
  text-align: center;
  font-style: italic;
}

/* Eigen Demo */
.eigen-demo {
  text-align: center;
}

.eigen-matrix {
  margin-bottom: 20px;
}

.eigen-inputs {
  display: inline-grid;
  grid-template-columns: 70px 70px;
  gap: 10px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 10px;
}

.eigen-inputs input {
  width: 70px;
  height: 70px;
  background: #0d1117;
  border: 2px solid #e94560;
  color: #fff;
  text-align: center;
  font-size: 20px;
  border-radius: 8px;
}

.eigen-results {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin: 20px 0;
}

.eigen-value {
  background: #1a1a2e;
  padding: 20px 40px;
  border-radius: 10px;
  border: 2px solid #00ff88;
}

.lambda {
  font-size: 24px;
  color: #e94560;
  font-weight: bold;
  margin-right: 10px;
}

.value {
  font-size: 28px;
  color: #00ff88;
  font-family: 'Fira Code', monospace;
}

.eigen-vectors {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
}

.vector-display {
  background: #0d1117;
  padding: 15px 30px;
  border-radius: 8px;
  border-left: 4px solid #ffd700;
}

.vector-display .label {
  color: #ffd700;
  font-weight: bold;
  margin-right: 10px;
}

.vector {
  color: #00d9ff;
  font-family: 'Fira Code', monospace;
}

#eigenCanvas {
  background: #0d1117;
  border-radius: 10px;
  margin-top: 20px;
}

/* Transform Demo */
.transform-controls {
  text-align: center;
  margin-bottom: 20px;
}

.transform-controls select {
  background: #1a1a2e;
  border: 2px solid #00d9ff;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 16px;
}

.transform-params {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.transform-params label {
  color: #ffd700;
}

.transform-params input[type="range"] {
  width: 200px;
}

#paramValue {
  color: #00ff88;
  font-weight: bold;
  min-width: 50px;
}

.transform-display {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
}

.original-shape, .transformed-shape {
  text-align: center;
}

.original-shape canvas, .transformed-shape canvas {
  background: #0d1117;
  border-radius: 10px;
  border: 2px solid #30363d;
}

.arrow {
  font-size: 40px;
  color: #e94560;
}

.transform-matrix {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-family: 'Fira Code', monospace;
  color: #00ff88;
  margin-top: 20px;
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
  .two-matrices { flex-direction: column; }
  .matrix-input { flex-direction: column; }
  .transform-display { flex-direction: column; }
  .eigen-results { flex-direction: column; align-items: center; }
}`,
    js: `// NumPy Matrix Lab
let matrixA = [];
let matrixB = [];
let rowsA = 3, colsA = 3;
let rowsB = 3, colsB = 3;

function createMatrix() {
  const rows = parseInt(document.getElementById('matRows').value) || 3;
  const cols = parseInt(document.getElementById('matCols').value) || 3;
  const type = document.getElementById('matType').value;
  
  rowsA = rows;
  colsA = cols;
  
  let mat = [];
  
  switch(type) {
    case 'random':
      for (let i = 0; i < rows; i++) {
        mat[i] = [];
        for (let j = 0; j < cols; j++) {
          mat[i][j] = Math.floor(Math.random() * 9) + 1;
        }
      }
      break;
    case 'identity':
      for (let i = 0; i < rows; i++) {
        mat[i] = [];
        for (let j = 0; j < cols; j++) {
          mat[i][j] = i === j ? 1 : 0;
        }
      }
      break;
    case 'zeros':
      for (let i = 0; i < rows; i++) {
        mat[i] = new Array(cols).fill(0);
      }
      break;
    case 'sequential':
      let num = 1;
      for (let i = 0; i < rows; i++) {
        mat[i] = [];
        for (let j = 0; j < cols; j++) {
          mat[i][j] = num++;
        }
      }
      break;
  }
  
  matrixA = mat;
  renderMatrixA();
}

function renderMatrixA() {
  const grid = document.getElementById('gridA');
  const info = document.getElementById('infoA');
  
  grid.style.gridTemplateColumns = 'repeat(' + colsA + ', 60px)';
  grid.innerHTML = '';
  
  matrixA.forEach(row => {
    row.forEach(val => {
      const cell = document.createElement('div');
      cell.className = 'matrix-cell';
      cell.textContent = val;
      grid.appendChild(cell);
    });
  });
  
  info.innerHTML = 'Shape: (' + rowsA + ', ' + colsA + ') | Size: ' + (rowsA * colsA);
}

function transposeA() {
  const result = [];
  for (let j = 0; j < colsA; j++) {
    result[j] = [];
    for (let i = 0; i < rowsA; i++) {
      result[j][i] = matrixA[i][j];
    }
  }
  
  showResult('A<sup>T</sup> (Transpoz)', result, colsA, rowsA);
}

function inverseA() {
  if (rowsA !== colsA) {
    showResult('Xəta: Yalnız kvadrat matrislərin tərsi var!', [], 0, 0);
    return;
  }
  
  // 2x2 matris üçün sadə formulu
  if (rowsA === 2) {
    const a = matrixA[0][0], b = matrixA[0][1];
    const c = matrixA[1][0], d = matrixA[1][1];
    const det = a * d - b * c;
    
    if (Math.abs(det) < 0.001) {
      showResult('Xəta: Determinant 0-dir, tərs matris yoxdur!', [], 0, 0);
      return;
    }
    
    const inv = [
      [d/det, -b/det],
      [-c/det, a/det]
    ];
    
    showResult('A<sup>-1</sup> (Tərs Matris)', inv, 2, 2);
  } else {
    showResult('Demo: Yalnız 2×2 matrislər üçün', [], 0, 0);
  }
}

function determinantA() {
  if (rowsA !== colsA) {
    showResult('Xəta: Yalnız kvadrat matrislərin determinantı var!', [], 0, 0);
    return;
  }
  
  let det;
  if (rowsA === 2) {
    det = matrixA[0][0] * matrixA[1][1] - matrixA[0][1] * matrixA[1][0];
  } else if (rowsA === 3) {
    // Sarrus qaydası
    const a = matrixA[0][0], b = matrixA[0][1], c = matrixA[0][2];
    const d = matrixA[1][0], e = matrixA[1][1], f = matrixA[1][2];
    const g = matrixA[2][0], h = matrixA[2][1], i = matrixA[2][2];
    det = a*(e*i - f*h) - b*(d*i - f*g) + c*(d*h - e*g);
  }
  
  document.getElementById('resultA').innerHTML = 
    '<div style="font-size: 24px; color: #ffd700;">det(A) = ' + det.toFixed(2) + '</div>';
}

function clearA() {
  matrixA = [];
  document.getElementById('gridA').innerHTML = '<div class="empty-array">Matris yaradın...</div>';
  document.getElementById('infoA').innerHTML = '';
  document.getElementById('resultA').innerHTML = '';
}

function showResult(title, mat, rows, cols) {
  let html = '<h4 style="color: #ffd700; margin-bottom: 15px;">' + title + '</h4>';
  
  if (mat.length === 0) {
    html += '<div style="color: #ff6b6b;">' + title.replace('Xəta:', '') + '</div>';
  } else {
    html += '<div style="display: inline-grid; grid-template-columns: repeat(' + cols + ', 50px); gap: 5px;">';
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        html += '<div style="background: #1a1a2e; padding: 10px; border-radius: 6px; border: 2px solid #00ff88; color: #00ff88; font-family: monospace;">' + 
          (mat[i][j] ? mat[i][j].toFixed(2) : 0) + '</div>';
      }
    }
    html += '</div>';
  }
  
  document.getElementById('resultA').innerHTML = html;
}

// Matrix Operations
function randomizeA() {
  matrixA = [];
  for (let i = 0; i < 3; i++) {
    matrixA[i] = [];
    for (let j = 0; j < 3; j++) {
      matrixA[i][j] = Math.floor(Math.random() * 5) + 1;
    }
  }
  renderSmallMatrix('smallGridA', matrixA, 3, 3);
  performOperation();
}

function randomizeB() {
  matrixB = [];
  for (let i = 0; i < 3; i++) {
    matrixB[i] = [];
    for (let j = 0; j < 3; j++) {
      matrixB[i][j] = Math.floor(Math.random() * 5) + 1;
    }
  }
  renderSmallMatrix('smallGridB', matrixB, 3, 3);
  performOperation();
}

function renderSmallMatrix(id, mat, rows, cols) {
  const grid = document.getElementById(id);
  grid.style.gridTemplateColumns = 'repeat(' + cols + ', 45px)';
  grid.innerHTML = '';
  
  mat.forEach(row => {
    row.forEach(val => {
      const cell = document.createElement('div');
      cell.className = 'small-cell';
      cell.textContent = val;
      grid.appendChild(cell);
    });
  });
}

function performOperation() {
  const op = document.getElementById('operation').value;
  const symbols = { 'add': '+', 'subtract': '-', 'multiply': '×', 'element': '⊙' };
  document.getElementById('opSymbol').textContent = symbols[op];
  
  if (matrixA.length === 0) randomizeA();
  if (matrixB.length === 0) randomizeB();
  
  let result = [];
  let steps = [];
  
  switch(op) {
    case 'add':
      for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
          result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
      }
      steps.push('Element-wise toplama: C[i,j] = A[i,j] + B[i,j]');
      break;
      
    case 'subtract':
      for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
          result[i][j] = matrixA[i][j] - matrixB[i][j];
        }
      }
      steps.push('Element-wise çıxma: C[i,j] = A[i,j] - B[i,j]');
      break;
      
    case 'multiply':
      // Matris vurulması
      for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
          let sum = 0;
          for (let k = 0; k < 3; k++) {
            sum += matrixA[i][k] * matrixB[k][j];
          }
          result[i][j] = sum;
        }
      }
      steps.push('Matris vurulması: C[i,j] = Σ(A[i,k] × B[k,j])');
      steps.push('Məsələn: C[0,0] = A[0,0]×B[0,0] + A[0,1]×B[1,0] + A[0,2]×B[2,0]');
      break;
      
    case 'element':
      for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
          result[i][j] = matrixA[i][j] * matrixB[i][j];
        }
      }
      steps.push('Hadamard product: C[i,j] = A[i,j] × B[i,j]');
      break;
  }
  
  renderSmallMatrix('resultGrid', result, 3, 3);
  document.getElementById('calcSteps').innerHTML = steps.join('<br>');
}

// Equation Solver
function solveSystem() {
  const a00 = parseFloat(document.getElementById('a00').value);
  const a01 = parseFloat(document.getElementById('a01').value);
  const a10 = parseFloat(document.getElementById('a10').value);
  const a11 = parseFloat(document.getElementById('a11').value);
  const b0 = parseFloat(document.getElementById('b0').value);
  const b1 = parseFloat(document.getElementById('b1').value);
  
  // Cramer qaydası ilə həll
  const detA = a00 * a11 - a01 * a10;
  
  if (Math.abs(detA) < 0.001) {
    document.getElementById('solutionSteps').innerHTML = 'Determinant 0-dir, sistemdə unikal həll yoxdur.';
    return;
  }
  
  const detX = b0 * a11 - a01 * b1;
  const detY = a00 * b1 - b0 * a10;
  
  const x = detX / detA;
  const y = detY / detA;
  
  document.getElementById('solutionSteps').innerHTML = 
    '1. det(A) = ' + a00 + '×' + a11 + ' - ' + a01 + '×' + a10 + ' = ' + detA.toFixed(2) + '<br>' +
    '2. det(Ax) = ' + b0 + '×' + a11 + ' - ' + a01 + '×' + b1 + ' = ' + detX.toFixed(2) + '<br>' +
    '3. det(Ay) = ' + a00 + '×' + b1 + ' - ' + b0 + '×' + a10 + ' = ' + detY.toFixed(2);
  
  document.getElementById('finalAnswer').innerHTML = 
    'x = ' + x.toFixed(2) + '<br>y = ' + y.toFixed(2);
  
  // Yoxlama
  const check1 = (a00 * x + a01 * y).toFixed(2);
  const check2 = (a10 * x + a11 * y).toFixed(2);
  
  document.getElementById('verification').innerHTML = 
    'Yoxlama:<br>' +
    a00 + '(' + x.toFixed(2) + ') + ' + a01 + '(' + y.toFixed(2) + ') = ' + check1 + ' (=' + b0 + ')<br>' +
    a10 + '(' + x.toFixed(2) + ') + ' + a11 + '(' + y.toFixed(2) + ') = ' + check2 + ' (=' + b1 + ')';
}

// Eigenvalues
function updateEigen() {
  const a = parseFloat(document.getElementById('e00').value) || 4;
  const b = parseFloat(document.getElementById('e01').value) || 2;
  const c = parseFloat(document.getElementById('e10').value) || 1;
  const d = parseFloat(document.getElementById('e11').value) || 3;
  
  // Öz dəyərlər: det(A - λI) = 0
  // λ² - (a+d)λ + (ad-bc) = 0
  const trace = a + d;
  const det = a * d - b * c;
  
  const discriminant = trace * trace - 4 * det;
  const lambda1 = (trace + Math.sqrt(discriminant)) / 2;
  const lambda2 = (trace - Math.sqrt(discriminant)) / 2;
  
  document.getElementById('lambda1').textContent = lambda1.toFixed(2);
  document.getElementById('lambda2').textContent = lambda2.toFixed(2);
  
  // Öz vektorlar (sadələşdirilmiş)
  const v1x = 1;
  const v1y = (lambda1 - a) / b;
  const norm1 = Math.sqrt(v1x*v1x + v1y*v1y);
  
  const v2x = 1;
  const v2y = (lambda2 - a) / b;
  const norm2 = Math.sqrt(v2x*v2x + v2y*v2y);
  
  document.getElementById('v1').textContent = '[' + (v1x/norm1).toFixed(2) + ', ' + (v1y/norm1).toFixed(2) + ']';
  document.getElementById('v2').textContent = '[' + (v2x/norm2).toFixed(2) + ', ' + (v2y/norm2).toFixed(2) + ']';
  
  drawEigenVectors(lambda1, lambda2);
}

function drawEigenVectors(l1, l2) {
  const canvas = document.getElementById('eigenCanvas');
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  ctx.fillStyle = '#0d1117';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Oxlar
  ctx.strokeStyle = '#30363d';
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, canvas.height);
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY);
  ctx.stroke();
  
  // Öz dəyərləri vizuallaşdır
  ctx.fillStyle = '#00ff88';
  ctx.font = '16px Arial';
  ctx.fillText('λ₁ = ' + l1.toFixed(1), 20, 30);
  ctx.fillStyle = '#e94560';
  ctx.fillText('λ₂ = ' + l2.toFixed(1), 20, 55);
}

// Transformations
function applyTransform() {
  const type = document.getElementById('transformType').value;
  const val = parseInt(document.getElementById('transformVal').value);
  
  document.getElementById('paramValue').textContent = val + (type === 'rotate' ? '°' : '');
  
  // Orijinal kvadrat
  drawShape('originalCanvas', [[50, 50], [150, 50], [150, 150], [50, 150]], '#00d9ff');
  
  // Transformasiya matrisi
  let matrix = [[1, 0], [0, 1]];
  let desc = '';
  
  switch(type) {
    case 'identity':
      matrix = [[1, 0], [0, 1]];
      desc = 'I = [[1, 0], [0, 1]]';
      break;
    case 'scale':
      const s = val / 100;
      matrix = [[s, 0], [0, s]];
      desc = 'Scale = [[' + s.toFixed(1) + ', 0], [0, ' + s.toFixed(1) + ']]';
      break;
    case 'rotate':
      const rad = val * Math.PI / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      matrix = [[cos, -sin], [sin, cos]];
      desc = 'Rotate(' + val + '°)';
      break;
    case 'shear':
      const sh = val / 100;
      matrix = [[1, sh], [0, 1]];
      desc = 'Shear = [[1, ' + sh.toFixed(1) + '], [0, 1]]';
      break;
    case 'reflect':
      matrix = [[-1, 0], [0, 1]];
      desc = 'Reflect = [[-1, 0], [0, 1]]';
      break;
  }
  
  // Tətbiq et
  const original = [[50, 50], [150, 50], [150, 150], [50, 150]];
  const transformed = original.map(p => [
    matrix[0][0] * p[0] + matrix[0][1] * p[1],
    matrix[1][0] * p[0] + matrix[1][1] * p[1]
  ]);
  
  drawShape('transformedCanvas', transformed, '#00ff88');
  document.getElementById('transformMatrix').innerHTML = '<strong>Transformasiya Matrisi:</strong><br>' + desc;
}

function drawShape(canvasId, points, color) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const offsetX = canvas.width / 2 - 100;
  const offsetY = canvas.height / 2 - 100;
  
  ctx.fillStyle = '#0d1117';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Oxlar
  ctx.strokeStyle = '#30363d';
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, 0);
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.moveTo(0, canvas.height/2);
  ctx.lineTo(canvas.width, canvas.height/2);
  ctx.stroke();
  
  // Forma
  ctx.fillStyle = color + '40';
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  
  ctx.beginPath();
  ctx.moveTo(points[0][0] + offsetX, points[0][1] + offsetY);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0] + offsetX, points[i][1] + offsetY);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// Initialize
createMatrix();
randomizeA();
randomizeB();
updateEigen();
applyTransform();
console.log('NumPy Matrix Lab loaded!');`
  },

  exercise: {
    title: "🤖 Şəkil Recognition (Sadə) - Matris Əməliyyatları",
    description: "NumPy matris əməliyyatları istifadə edərək sadə əl yazısı rəqəm recognition sistemi yaradın. 8x8 piksel matrislərdə rəqəmləri tanıyın.",
    requirements: [
      "5 ədəd 8x8 piksel matris yaradın (0-1 arası, 0=ağ, 1=qara) - 0, 1, 2, 3, 4 rəqəmləri üçün nümunələr",
      "Hər rəqəm üçün 'ideal' (template) matris yaradın",
      "Yeni (test) matris gəldikdə, hansı rəqəmə ən oxşar olduğunu tapın (matris fərqi ilə)",
      "Euclidean distance (Frobenius norm) istifadə edərək oxşarlıq ölçün",
      "Şəkil üzərində sadə transformasiyalar aparın (rotate 90°, flip horizontal)",
      "Blur effekti yaradın (3x3 ortalama filter matrisi ilə konvolyusiya)",
      "Edge detection aparın (gradient matrisləri ilə)",
      "Rəqəm tanıma dəqiqliyini hesablayın (accuracy)",
      "Confusion matrix yaradın (hansı rəqəm hansı ilə səhv salınır)",
      "Bonus: SVD ilə matrisləri sıxışdırın (compression) və keyfiyyət ölçün"
    ],
    starterCode: `import numpy as np
import json

# 8x8 piksel matrislər - əl yazısı rəqəmləri (0-1, 1=qara)
# 0 rəqəmi nümunəsi (ideal)
sifir = np.array([
    [0,0,1,1,1,0,0,0],
    [0,1,0,0,0,1,0,0],
    [1,0,0,0,0,0,1,0],
    [1,0,0,0,0,0,1,0],
    [1,0,0,0,0,0,1,0],
    [1,0,0,0,0,0,1,0],
    [0,1,0,0,0,1,0,0],
    [0,0,1,1,1,0,0,0]
])

# 1 rəqəmi nümunəsi (ideal)
bir = np.array([
    [0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,1,1,1,0,0,0]
])

# 2, 3, 4 rəqəmlərini özünüz yaradın
iki = np.zeros((8, 8))  # Kodunuzu bura yazın
uc = np.zeros((8, 8))   # Kodunuzu bura yazın
dord = np.zeros((8, 8)) # Kodunuzu bura yazın

# Templates dictionary
templates = {
    0: sifir,
    1: bir,
    2: iki,
    3: uc,
    4: dord
}

def euclidean_distance(A, B):
    """İki matris arasında Euclidean məsafə (Frobenius norm)"""
    # Kodunuzu bura yazın: np.sqrt(np.sum((A-B)**2))
    pass

def tanı_rəqəm(test_matris, templates):
    """
    Test matrisini hansı rəqəmə ən oxşar olduğunu tapır
    Qaytarır: (tanınan_rəqəm, məsafələr_dict)
    """
    # Kodunuzu bura yazın
    # Hər template ilə məsafə hesabla
    # Ən kiçik məsafəli rəqəmi qaytar
    pass

def rotate_90(matris):
    """Matrisi 90 dərəcə saat istiqamətində döndür"""
    # Kodunuzu bura yazın: .T və ya [::-1, :]
    pass

def flip_horizontal(matris):
    """Matrisi üfüqi əks etdir"""
    # Kodunuzu bura yazın: [:, ::-1]
    pass

def blur_filter(matris):
    """3x3 ortalama filter tətbiq et (konvolyusiya)"""
    blur_kernel = np.ones((3, 3)) / 9
    nəticə = np.zeros_like(matris)
    
    # Kodunuzu bura yazın
    # Hər piksel üçün 3x3 qonşuluq ortalaması
    # Sərhədləri nəzərə alın (padding)
    pass
    
    return nəticə

def edge_detection(matris):
    """Sadə gradient ilə kənarları tap"""
    # Horizontal gradient
    sobel_x = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]])
    # Vertikal gradient  
    sobel_y = np.array([[-1, -2, -1], [0, 0, 0], [1, 2, 1]])
    
    # Kodunuzu bura yazın
    # Konvolyusiya tətbiq et
    pass

def test_recognition():
    """Tanıma sistemini test et"""
    # Test nümunələri yaradın (bəzi pikselləri dəyişdirin)
    test_sifir = sifir.copy()
    test_sifir[2, 2] = 0  # Bir piksel səhv
    
    # Kodunuzu bura yazın
    # Digər test nümunələri yaradın
    # tanı_rəqəm funksiyasını test edin
    
    pass

def confusion_matrix(test_datası, templates):
    """Confusion matrix yaradın"""
    # Kodunuzu bura yazın
    # Hər rəqəm üçün neçə dəfə düzgün/səhv tanındığını hesabla
    pass

def svd_compression(matris, k):
    """SVD ilə matris sıxışdırma (k dəyər saxla)"""
    # Kodunuzu bura yazın
    # U, S, Vt = np.linalg.svd(matris)
    # Yalnız ilk k singular value saxla
    # Bərpa et və keyfiyyət ölç (MSE)
    pass

# Əsas proqram
if __name__ == "__main__":
    print("=== Şəkil Recognition Sistemi ===")
    
    # 1. Templates yoxla
    print("\\n1. Templates yoxlanılır...")
    for rəqəm, template in templates.items():
        print(f"Rəqəm {rəqəm}: shape={template.shape}, sum={np.sum(template)}")
    
    # 2. Test et
    print("\\n2. Tanıma testi...")
    test_recognition()
    
    # 3. Transformasiyalar
    print("\\n3. Transformasiyalar...")
    dönmüş = rotate_90(sifir)
    əks = flip_horizontal(sifir)
    
    # 4. Blur və Edge detection
    print("\\n4. Filterlər...")
    bulanıq = blur_filter(sifir)
    kənarlar = edge_detection(sifir)
    
    # 5. SVD Compression
    print("\\n5. SVD Compression...")
    for k in [2, 4, 6]:
        sıxışdırılmış, mse = svd_compression(sifir, k)
        print(f"k={k}: MSE={mse:.4f}")
    
    # Nəticələri saxla
    neticeler = {
        "templates": {str(k): v.tolist() for k, v in templates.items()},
        "test_neticeleri": "Kodunuzu bura yazın"
    }
    
    with open('recognition_neticeler.json', 'w') as f:
        json.dump(neticeler, f, indent=2)
    
    print("\\n✅ Analiz tamamlandı!")`,
  },

  quiz: [
    {
      question: "Matris toplaması necə aparılır?",
      options: ["Sətir-sütun vurulur", "Eyni mövqedəki elementlər toplanır (element-wise)", "Yalnız diaqonal elementlər toplanır", "Determinantlar toplanır"],
      correctAnswer: 1
    },
    {
      question: "A (2×3) və B (3×2) matrislərinin vurulması nəticəsində hansı ölçü alınar?",
      options: ["(2×2)", "(3×3)", "(2×3)", "(6×6)"],
      correctAnswer: 0
    },
    {
      question: "Matrisin transpozu nə deməkdir?",
      options: ["Determinantı hesablamaq", "Sətirləri sütun, sütunları sətir etmək", "Tərs matrisi tapmaq", "Diaqonal elementləri sıfırlamaq"],
      correctAnswer: 1
    },
    {
      question: "np.dot(A, B) ilə A * B arasındakı fərq nədir?",
      options: ["Fərq yoxdur", "np.dot matris vurulması, * element-wise vurmadır", "* matris vurulması, np.dot element-wisedir", "Hər ikisi xətadır"],
      correctAnswer: 1
    },
    {
      question: "Hansı matrisin tərsi (inverse) var?",
      options: ["Bütün matrislərin", "Yalnız kvadrat və determinantı sıfırdan fərqli olanların", "Yalnız diaqonal matrislərin", "Heç bir matrisin"],
      correctAnswer: 1
    },
    {
      question: "Eigenvalue (öz dəyər) nədir?",
      options: ["Matrisin determinantı", "λ ədədi ki, Av = λv şərtini ödəyir", "Matrisin izi (trace)", "Matrisin rankı"],
      correctAnswer: 1
    },
    {
      question: "A @ B ifadəsi nə deməkdir? (Python 3.5+)",
      options: ["Element-wise vurma", "Matris vurulması (dot product)", "Cross product", "Tensor product"],
      correctAnswer: 1
    },
    {
      question: "np.linalg.solve(A, b) nə edir?",
      options: ["A matrisinin tərsini tapır", "Ax = b tənlik sistemini həll edir", "A-nın öz dəyərlərini tapır", "A-nı diagonal formaya gətirir"],
      correctAnswer: 1
    },
    {
      question: "Broadcasting nədir?",
      options: ["Radio yayımı", "Fərqli ölçülü matrislərlə əməliyyat", "Matrisləri eyni ölçüdə etmək", "Şəbəkə yayımı"],
      correctAnswer: 1
    },
    {
      question: "SVD (Singular Value Decomposition) nə üçün istifadə olunur?",
      options: ["Matrisi 3 hissəyə ayırmaq (U, S, Vt)", "Yalnız determinant hesablamaq", "Yalnız tərs matris tapmaq", "Matrisi kvadrat etmək"],
      correctAnswer: 0
    }
  ]
};

export default topicai12;