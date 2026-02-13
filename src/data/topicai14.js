export const topicai14 = {
  id: 14,
  title: "Statistika: Orta qiymət, Median, Standart meyl",
  duration: "130 dəq",
  isFree: false,
  
  content: `
    <h4>📊 Statistika Nədir və Niyə Lazımdır?</h4>
    <p><strong>Statistika</strong> - məlumatların toplanması, təhlili, təqdimi və şərh edilməsi elmidir. <strong>Data Science</strong> və <strong>AI</strong> üçün fundamental əhəmiyyət daşıyır çünki:</p>
    <ul>
      <li>Məlumatların ümumi şəklini anlamağa imkan verir</li>
      <li>Proqnozlar və qərarlar üçün əsas yaradır</li>
      <li>Anomaliyaları (outliers) tapmağa kömək edir</li>
      <li>Modellərin performansını qiymətləndirir</li>
    </ul>

    <h4>📈 Mərkəzi Meyillilik Ölçüləri (Measures of Central Tendency)</h4>
    <p>Verilənlərin "mərkəzini" təsvir edən ədədlər.</p>

    <h4>1️⃣ Aritmetik Orta (Mean / Average)</h4>
    <p>Ən çox istifadə edilən orta növü. Bütün dəyərlərin cəmi bölünsün sayına.</p>

    <pre><code>import numpy as np

data = np.array([10, 20, 30, 40, 50])

# Əl ilə hesablama
cem = 10 + 20 + 30 + 40 + 50  # 150
say = 5
orta = cem / say               # 30

# NumPy ilə
mean = np.mean(data)           # 30.0
# və ya
mean = data.mean()             # 30.0

# Formula: x̄ = (Σxᵢ) / n</code></pre>

    <p><strong>Ortanın problemləri:</strong></p>
    <ul>
      <li><strong>Outlier-lara həssasdır</strong> (çox kiçik və ya çox böyük dəyərlər ortanı çəkir)</li>
      <li>Məsələn: [10, 20, 30, 40, 1000] → orta = 220 (real mərkəzi təmsil etmir)</li>
    </ul>

    <h4>2️⃣ Median (Orta Dəyər)</h4>
    <p>Dataları kiçikdən böyüyə sıralayıb <strong>ortadakı dəyər</strong>. Outlier-lardan təsirlənmir!</p>

    <pre><code>data = np.array([10, 20, 30, 40, 50])
median = np.median(data)       # 30 (ortada 30 durur)

# Tək sayda element
data2 = np.array([10, 20, 30, 40])  # 4 element (cüt say)
median2 = np.median(data2)     # (20 + 30) / 2 = 25 (orta iki dəyərin ortası)

# Outlier nümunəsi
data_outlier = np.array([10, 20, 30, 40, 1000])
print(np.mean(data_outlier))   # 220 (çəkilib)
print(np.median(data_outlier)) # 30 (real mərkəzi göstərir)</code></pre>

    <h4>3️⃣ Moda (Mode) - Ən çox təkrarlanan</h4>
    <pre><code>from scipy import stats

data = np.array([1, 2, 2, 3, 3, 3, 4, 4])
mode = stats.mode(data)
print(mode.mode[0])    # 3 (ən çox təkrarlanan)
print(mode.count[0])   # 3 (neçə dəfə təkrarlanıb)</code></pre>

    <h4>📏 Dispersiya Ölçüləri (Measures of Spread)</h4>
    <p>Dataların nə qədər <strong>dağıldığını</strong> göstərir.</p>

    <h4>4️⃣ Varyans (Variance)</h4>
    <p>Ortadan fərqlərin <strong>kvadratının</strong> ortalaması. Niyə kvadrat? Çünki müsbət/ mənfi fərqlər bir-birini sıfırlamasın.</p>

    <pre><code>data = np.array([10, 20, 30, 40, 50])
mean = 30

# Fərqlər
ferqler = data - mean          # [-20, -10, 0, 10, 20]

# Kvadratlar
kvadratlar = ferqler ** 2      # [400, 100, 0, 100, 400]

# Varyans (populyasiya)
variance = np.mean(kvadratlar) # 200

# NumPy ilə
var_pop = np.var(data)         # Populyasiya varyansı (n)
var_sample = np.var(data, ddof=1)  # Nümunə varyansı (n-1) - daha dəqiq

# Formula: σ² = Σ(xᵢ - x̄)² / n</code></pre>

    <h4>5️⃣ Standart Meyl (Standard Deviation)</h4>
    <p>Varyansın <strong>kökü</strong>. Əsas üstünlüyü: original data ilə eyni <strong>vahiddə</strong> olması.</p>

    <pre><code># Varyansın kökü
std = np.sqrt(variance)        # 14.14...

# Birbaşa hesablama
std = np.std(data)             # Populyasiya standart meyli
std_sample = np.std(data, ddof=1)  # Nümunə standart meyli (daha dəqiq)

# İnterpretasiya: data ortalama ± 1 std aralığında dəyişir
# [30 - 14.14, 30 + 14.14] = [15.86, 44.14] (təxminən 68% data)</code></pre>

    <h4>📊 Percentile və Quartile</h4>
    <pre><code>data = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])

# Percentile - dataların faizi hansı dəyərdən kiçikdir
q1 = np.percentile(data, 25)   # 27.5 (25% datalar 27.5-dən kiçikdir)
median = np.percentile(data, 50)  # 55 (median = 50th percentile)
q3 = np.percentile(data, 75)   # 77.5 (75% datalar 77.5-dən kiçikdir)

# IQR (Interquartile Range) - orta 50% data
iqr = q3 - q1                  # 50

# Outlier təyin etmək üçün
lower_bound = q1 - 1.5 * iqr   # -47.5
upper_bound = q3 + 1.5 * iqr   # 152.5
# Bu sərhədlərdən kənar dəyərlər outlier sayılır</code></pre>

    <h4>📉 Data Paylanması (Distribution)</h4>

    <p><strong>Normal Paylanma (Gaussian / Bell Curve)</strong></p>
    <pre><code># Normal paylanma: orta=0, std=1
normal_data = np.random.normal(loc=0, scale=1, size=1000)

# 68-95-99.7 qaydası:
# ~68% data [mean-std, mean+std] aralığında
# ~95% data [mean-2*std, mean+2*std] aralığında
# ~99.7% data [mean-3*std, mean+3*std] aralığında</code></pre>

    <p><strong>Çəkişkənlik (Skewness) - Asimmetriya</strong></p>
    <pre><code>from scipy.stats import skew

# skew = 0: simmetrik (normal)
# skew > 0: sağa çəkişkən (sağ quyruq uzun)
# skew < 0: sola çəkişkən (sol quyruq uzun)

data_right = np.random.exponential(scale=2, size=1000)  # Sağa çəkişkən
print(skew(data_right))  # Müsbət dəyər</code></pre>

    <h4>🔍 Z-Score (Standartlaşdırma)</h4>
    <p>Datanı <strong>standart normal paylanmaya</strong> çevirmək. Outlier axtarışında və müqayisədə çox faydalıdır.</p>

    <pre><code>data = np.array([10, 20, 30, 40, 50])
mean = np.mean(data)      # 30
std = np.std(data)        # 14.14

# Z-score: neçə standart meyl uzaqlıqda
z_scores = (data - mean) / std
# [-1.41, -0.71, 0, 0.71, 1.41]

# İnterpretasiya:
# |z| > 2: potensial outlier (95% intervaldan kənar)
# |z| > 3: güclü outlier (99.7% intervaldan kənar)

# Standartlaşdırılmış data (mean=0, std=1)
 standardized = z_scores</code></pre>

    <h4>📊 Korelyasiya və Kovariansiya</h4>
    <pre><code># İki dəyişənin birlikdə necə dəyişməsi
x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])  # Tam müsbət korelyasiya

# Kovariansiya
cov_matrix = np.cov(x, y)
print(cov_matrix[0, 1])  # Müsbət (birlikdə artırlar)

# Korelyasiya (-1 ilə 1 arası)
correlation = np.corrcoef(x, y)[0, 1]  # 1.0 (tam müsbət)
# 1: tam müsbət korelyasiya
# -1: tam mənfi korelyasiya
# 0: korelyasiya yoxdur</code></pre>

    <h4>🤖 Praktiki Tətbiq: Data Normalizasiyası</h4>
    <pre><code># Machine Learning üçün data hazırlama

def normalize_minmax(data):
    """Min-Max normalizasiya: [0, 1] aralığına"""
    return (data - np.min(data)) / (np.max(data) - np.min(data))

def standardize(data):
    """Z-score standardizasiya: mean=0, std=1"""
    return (data - np.mean(data)) / np.std(data)

def robust_scale(data):
    """Outlier-lara davamlı: median və IQR istifadə edir"""
    median = np.median(data)
    iqr = np.percentile(data, 75) - np.percentile(data, 25)
    return (data - median) / iqr

# Nümunə
data = np.array([10, 20, 30, 40, 1000])  # Outlier var

print("Original:", data)
print("Min-Max:", normalize_minmax(data))
print("Standard:", standardize(data))
print("Robust:", robust_scale(data))</code></pre>

    <h4>📈 Vizualizasiya: Box Plot və Histogram</h4>
    <pre><code>import matplotlib.pyplot as plt

data = np.random.normal(100, 15, 1000)  # Orta=100, std=15

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Histogram
axes[0].hist(data, bins=30, alpha=0.7, color='blue', edgecolor='black')
axes[0].axvline(np.mean(data), color='red', linestyle='--', label='Mean')
axes[0].axvline(np.median(data), color='green', linestyle='--', label='Median')
axes[0].legend()

# Box Plot
axes[1].boxplot(data, vert=True)
axes[1].set_ylabel('Dəyərlər')

plt.tight_layout()
plt.show()

# Box plot elementləri:
# - Qutu: Q1-dən Q3-ə (orta 50%)
# - Xətt qutuda: Median
# - Moustache'lar: 1.5*IQR qədər
# - Nöqtələr: Outlier-lar</code></pre>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə <strong>median</strong> yoxlayın, orta aldadıcı ola bilər (outlier varsa)</li>
      <li><strong>Standart meyl</strong> datanın nə qədər "sabit" olduğunu göstərir</li>
      <li><strong>IQR</strong> outlier təyin etmək üçün ən yaxşı üsuldur</li>
      <li>ML üçün data həmişə <strong>standardizasiya</strong> edilməlidir</li>
      <li><strong>Skewness</strong> yoxlayın, çəkişkən data log transformasiya tələb edə bilər</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="statistics-lab">
  <h2>📊 Statistika Lab: Mərkəzi Meyillilik və Dispersiya</h2>
  
  <section class="demo-section">
    <h3>1. Canlı Statistik Hesablama</h3>
    <div class="live-stats">
      <div class="data-input">
        <h4>Data Daxil Edin (vergüllə ayrılmış)</h4>
        <textarea id="dataInput" placeholder="Məsələn: 10, 20, 30, 40, 50, 1000">10, 20, 30, 40, 50, 1000</textarea>
        <button onclick="calculateStats()">Hesabla</button>
        <button onclick="generateRandom()">Təsadüfi Data</button>
      </div>
      
      <div class="stats-results" id="statsResults">
        <div class="stat-cards">
          <div class="stat-card">
            <div class="stat-name">Say (n)</div>
            <div class="stat-value" id="countVal">-</div>
          </div>
          <div class="stat-card highlight">
            <div class="stat-name">Orta (Mean)</div>
            <div class="stat-value" id="meanVal">-</div>
          </div>
          <div class="stat-card highlight">
            <div class="stat-name">Median</div>
            <div class="stat-value" id="medianVal">-</div>
          </div>
          <div class="stat-card">
            <div class="stat-name">Moda</div>
            <div class="stat-value" id="modeVal">-</div>
          </div>
          <div class="stat-card highlight">
            <div class="stat-name">Standart Meyl</div>
            <div class="stat-value" id="stdVal">-</div>
          </div>
          <div class="stat-card">
            <div class="stat-name">Varyans</div>
            <div class="stat-value" id="varVal">-</div>
          </div>
          <div class="stat-card">
            <div class="stat-name">Min / Max</div>
            <div class="stat-value" id="rangeVal">-</div>
          </div>
          <div class="stat-card">
            <div class="stat-name">IQR</div>
            <div class="stat-value" id="iqrVal">-</div>
          </div>
        </div>
        
        <div class="outlier-detection" id="outlierDetection"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Histogram və Paylanma</h3>
    <div class="distribution-demo">
      <div class="dist-controls">
        <label>Paylanma tipi:</label>
        <select id="distType" onchange="updateDistribution()">
          <option value="normal">Normal (Gaussian)</option>
          <option value="uniform">Bərabər (Uniform)</option>
          <option value="exponential">Eksponensial</option>
          <option value="bimodal">Bimodal</option>
        </select>
        
        <label>Ölçü:</label>
        <input type="range" id="sampleSize" min="100" max="5000" value="1000" oninput="updateDistribution()">
        <span id="sizeVal">1000</span>
        
        <label>Orta:</label>
        <input type="range" id="distMean" min="-50" max="50" value="0" oninput="updateDistribution()">
        <span id="meanSliderVal">0</span>
      </div>
      
      <div class="histogram-container">
        <canvas id="histCanvas" width="800" height="400"></canvas>
        <div class="hist-legend" id="histLegend"></div>
      </div>
      
      <div class="distribution-stats" id="distStats"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Box Plot (Qutu Diaqramı) Analizi</h3>
    <div class="boxplot-demo">
      <div class="boxplot-container">
        <div class="boxplot-visual" id="boxplotVisual">
          <div class="bp-axis">
            <div class="bp-tick" style="bottom: 0%">Min</div>
            <div class="bp-tick" style="bottom: 25%">Q1</div>
            <div class="bp-tick" style="bottom: 50%">Median</div>
            <div class="bp-tick" style="bottom: 75%">Q3</div>
            <div class="bp-tick" style="bottom: 100%">Max</div>
          </div>
          <div class="bp-box" id="bpBox">
            <div class="bp-whisker-bottom" id="whiskerBot"></div>
            <div class="bp-quartile-box" id="qBox">
              <div class="bp-median" id="bpMedian"></div>
            </div>
            <div class="bp-whisker-top" id="whiskerTop"></div>
            <div class="bp-outliers" id="bpOutliers"></div>
          </div>
        </div>
        
        <div class="boxplot-data">
          <h4>Data Nöqtələri</h4>
          <div class="data-points" id="dataPoints"></div>
          <button onclick="regenerateBoxData()">Yeni Data Yarat</button>
        </div>
      </div>
      
      <div class="boxplot-explanation" id="bpExplanation"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Z-Score və Outlier Axtarışı</h3>
    <div class="zscore-demo">
      <div class="zscore-controls">
        <label>Z-score həddi:</label>
        <input type="range" id="zThreshold" min="1" max="4" step="0.5" value="2" oninput="updateZScore()">
        <span id="zVal">2</span>
        <button onclick="markOutliers()">Outlier-ları İşarələ</button>
      </div>
      
      <div class="zscore-chart" id="zscoreChart">
        <canvas id="zCanvas" width="700" height="300"></canvas>
      </div>
      
      <div class="zscore-table" id="zscoreTable"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Korelyasiya Analizi</h3>
    <div class="correlation-demo">
      <div class="scatter-controls">
        <label>Korelyasiya gücü:</label>
        <input type="range" id="corrStrength" min="-100" max="100" value="80" oninput="updateCorrelation()">
        <span id="corrVal">0.8</span>
        
        <label>Nümunə sayı:</label>
        <input type="range" id="corrSample" min="50" max="500" value="200" oninput="updateCorrelation()">
      </div>
      
      <div class="scatter-plot">
        <canvas id="scatterCanvas" width="500" height="400"></canvas>
        <div class="corr-info" id="corrInfo"></div>
      </div>
      
      <div class="correlation-types">
        <button onclick="setCorrelation(1)">Tam Müsbət (+1)</button>
        <button onclick="setCorrelation(0)">Korelyasiya Yox (0)</button>
        <button onclick="setCorrelation(-1)">Tam Mənfi (-1)</button>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>6. Normalizasiya və Standardizasiya</h3>
    <div class="normalization-demo">
      <div class="original-data">
        <h4>Orijinal Data</h4>
        <div class="data-bar" id="originalBar"></div>
        <div class="data-values" id="originalValues"></div>
      </div>
      
      <div class="transform-buttons">
        <button onclick="applyTransform('minmax')">Min-Max [0,1]</button>
        <button onclick="applyTransform('zscore')">Z-Score (Standard)</button>
        <button onclick="applyTransform('robust')">Robust (Median/IQR)</button>
      </div>
      
      <div class="transformed-data" id="transformedData">
        <h4>Transformasiya Edilmiş</h4>
        <div class="data-bar" id="transformedBar"></div>
        <div class="transform-stats" id="transformStats"></div>
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

.statistics-lab {
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

/* Live Stats */
.live-stats {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

.data-input {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
}

.data-input textarea {
  width: 100%;
  height: 150px;
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  margin-bottom: 15px;
  resize: vertical;
}

.data-input button {
  width: 100%;
  margin-bottom: 10px;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.stat-card {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border-left: 4px solid #00d9ff;
  transition: all 0.3s;
}

.stat-card.highlight {
  border-left-color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
}

.stat-name {
  font-size: 12px;
  color: #8b949e;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 24px;
  color: #00ff88;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
}

.outlier-detection {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #e94560;
}

/* Distribution Demo */
.dist-controls {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 10px;
}

.dist-controls label {
  color: #ffd700;
  font-weight: 600;
}

.dist-controls select, .dist-controls input {
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}

.histogram-container {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

#histCanvas {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.hist-legend {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 15px;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

/* Box Plot */
.boxplot-demo {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
}

.boxplot-container {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.boxplot-visual {
  display: flex;
  gap: 20px;
  height: 400px;
}

.bp-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  color: #8b949e;
  font-size: 12px;
}

.bp-box {
  flex: 1;
  position: relative;
  background: #0d1117;
  border-radius: 8px;
  margin: 10px 0;
}

.bp-whisker-bottom, .bp-whisker-top {
  position: absolute;
  left: 50%;
  width: 2px;
  background: #00d9ff;
  transform: translateX(-50%);
}

.bp-whisker-bottom {
  bottom: 0;
  height: 25%;
}

.bp-whisker-top {
  top: 0;
  height: 25%;
}

.bp-quartile-box {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 25%;
  bottom: 25%;
  background: rgba(0, 217, 255, 0.3);
  border: 2px solid #00d9ff;
  border-radius: 4px;
}

.bp-median {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  background: #e94560;
  transform: translateY(-50%);
}

.bp-outliers {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.outlier-point {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ffd700;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.boxplot-data {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
}

.data-points {
  max-height: 300px;
  overflow-y: auto;
  margin: 15px 0;
}

.data-point {
  padding: 8px;
  margin: 4px 0;
  background: #1a1a2e;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  display: flex;
  justify-content: space-between;
}

.data-point.outlier {
  border-left: 3px solid #e94560;
  color: #e94560;
}

/* Z-Score */
.zscore-demo {
  text-align: center;
}

.zscore-controls {
  margin-bottom: 20px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 10px;
}

.zscore-controls label {
  color: #ffd700;
  margin-right: 10px;
}

#zCanvas {
  background: #0d1117;
  border-radius: 10px;
  max-width: 100%;
}

.zscore-table {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}

.z-item {
  background: #1a1a2e;
  padding: 10px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
}

.z-item.outlier {
  border: 2px solid #e94560;
  color: #e94560;
}

/* Correlation */
.correlation-demo {
  text-align: center;
}

.scatter-controls {
  margin-bottom: 20px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 10px;
}

.scatter-controls label {
  color: #00ff88;
  margin-right: 10px;
}

#scatterCanvas {
  background: #0d1117;
  border-radius: 10px;
  max-width: 100%;
}

.corr-info {
  margin-top: 15px;
  padding: 15px;
  background: #1a1a2e;
  border-radius: 8px;
  font-size: 18px;
}

.correlation-types {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.correlation-types button {
  background: #30363d;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

/* Normalization */
.normalization-demo {
  max-width: 800px;
  margin: 0 auto;
}

.original-data, .transformed-data {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.data-bar {
  display: flex;
  align-items: flex-end;
  height: 150px;
  gap: 5px;
  margin: 20px 0;
  padding: 20px;
  background: #0d1117;
  border-radius: 8px;
}

.bar-item {
  flex: 1;
  background: linear-gradient(to top, #00ff88, #00d9ff);
  border-radius: 4px 4px 0 0;
  transition: all 0.3s;
  position: relative;
}

.bar-item:hover {
  opacity: 0.8;
}

.bar-value {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #00ff88;
  font-family: 'Fira Code', monospace;
}

.transform-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
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
  .live-stats { grid-template-columns: 1fr; }
  .boxplot-demo { grid-template-columns: 1fr; }
  .dist-controls { flex-direction: column; align-items: stretch; }
}`
  },

  exercise: {
    title: "📈 A/B Test Analizi - Statistik Nəticə Çıxarma",
    description: "Statistik metodlar istifadə edərək iki versiyanın (A və B) performansını müqayisə edin. T-test, p-value və etibar intervalı hesablayın.",
    requirements: [
      "İki qrup üçün təsadüfi data yaradın: A (kontrol), B (treatment) - hər biri 1000 nümunə",
      "Hər qrup üçün deskriptiv statistika hesablayın (mean, median, std)",
      "Normal paylanma yoxlaması aparın (histogram vəya Shapiro-Wilk testi)",
      "İki qrup arasında t-test aparın (statistik fərq varmı?)",
      "P-value hesablayın və 0.05 ilə müqayisə edin",
      "95% etibar intervalı hesablayın",
      "Effect size (Cohen's d) hesablayın (praktiki əhəmiyyət)",
      "Visualizasiya edin: box plot, violin plot, histogram overlay",
      "Statistik güc (power) analizi aparın",
      "Nəticələri biznes dillə şərh edin (qərar tövsiyəsi)"
    ],
    starterCode: `import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

class ABTestAnalyzer:
    def __init__(self, group_a, group_b, alpha=0.05):
        """
        A/B Test Analizi
        group_a: Kontrol qrupu data
        group_b: Treatment qrupu data
        alpha: Significance level (default 0.05)
        """
        self.group_a = np.array(group_a)
        self.group_b = np.array(group_b)
        self.alpha = alpha
        self.results = {}
        
    def descriptive_stats(self):
        """Deskriptiv statistika"""
        stats_dict = {
            'A': {
                'count': len(self.group_a),
                'mean': np.mean(self.group_a),
                'median': np.median(self.group_a),
                'std': np.std(self.group_a, ddof=1),
                'min': np.min(self.group_a),
                'max': np.max(self.group_a),
                'q1': np.percentile(self.group_a, 25),
                'q3': np.percentile(self.group_a, 75)
            },
            'B': {
                'count': len(self.group_b),
                'mean': np.mean(self.group_b),
                'median': np.median(self.group_b),
                'std': np.std(self.group_b, ddof=1),
                'min': np.min(self.group_b),
                'max': np.max(self.group_b),
                'q1': np.percentile(self.group_b, 25),
                'q3': np.percentile(self.group_b, 75)
            }
        }
        self.results['descriptive'] = stats_dict
        return stats_dict
    
    def normality_test(self):
        """Normal paylanma yoxlaması (Shapiro-Wilk)"""
        # Kodunuzu bura yazın
        # stats.shapiro() istifadə edin
        # p-value > 0.05 → normal paylanma
        pass
    
    def t_test(self):
        """İki nümunəli t-test"""
        # Kodunuzu bura yazın
        # stats.ttest_ind() istifadə edin
        # equal_var=False (Welch's t-test) daha etibarlıdır
        pass
    
    def confidence_interval(self, confidence=0.95):
        """Etibar intervalı"""
        # Kodunuzu bura yazın
        # Formula: mean ± t * (std / sqrt(n))
        # t-stats.t.ppf() ilə tapılır
        pass
    
    def cohens_d(self):
        """Effect size - Cohen's d"""
        # Kodunuzu bura yazın
        # d = (mean_a - mean_b) / pooled_std
        # pooled_std = sqrt(((n1-1)*std1^2 + (n2-1)*std2^2) / (n1+n2-2))
        # |d| < 0.2: kiçik, 0.5: orta, > 0.8: böyük effekt
        pass
    
    def power_analysis(self):
        """Statistik güc analizi"""
        # Kodunuzu bura yazın
        # Effect size, alpha, sample size əsasən güc hesabla
        # Güc > 0.80 yaxşı sayılır
        pass
    
    def visualize(self):
        """Visualizasiya"""
        fig, axes = plt.subplots(2, 2, figsize=(14, 10))
        
        # 1. Box plot
        # Kodunuzu bura yazın
        
        # 2. Histogram overlay
        # Kodunuzu bura yazın
        
        # 3. Q-Q plot (normal yoxlama)
        # Kodunuzu bura yazın
        
        # 4. Violin plot
        # Kodunuzu bura yazın
        
        plt.tight_layout()
        plt.savefig('ab_test_analysis.png', dpi=150)
        plt.close()
    
    def interpret_results(self):
        """Nəticələri şərh et"""
        # Kodunuzu bura yazın
        # p-value < alpha?
        # Effect size nə göstərir?
        # Biznes qərarı nə olmalıdır?
        pass

def generate_data():
    """Təsadüfi A/B test datası yaradın"""
    np.random.seed(42)
    
    # A qrupu: ortalama dönüşüm 10%, std=2%
    group_a = np.random.normal(10, 2, 1000)
    group_a = np.clip(group_a, 0, 100)  # 0-100 arası
    
    # B qrupu: yeni dizayn, ortalama 11% (1% artım)
    group_b = np.random.normal(11, 2.2, 1000)
    group_b = np.clip(group_b, 0, 100)
    
    return group_a, group_b

# Əsas proqram
if __name__ == "__main__":
    # Data yarat
    group_a, group_b = generate_data()
    
    print("=== A/B TEST ANALIZI ===")
    print(f"A qrupu: {len(group_a)} nümunə")
    print(f"B qrupu: {len(group_b)} nümunə\\n")
    
    # Analizator yarat
    analyzer = ABTestAnalyzer(group_a, group_b)
    
    # 1. Deskriptiv statistika
    print("1. DESKRIPTIV STATISTIKA")
    desc = analyzer.descriptive_stats()
    for group, stats in desc.items():
        print(f"\\nQrup {group}:")
        for key, val in stats.items():
            print(f"  {key}: {val:.3f}")
    
    # 2. Normal yoxlama
    print("\\n2. NORMAL PAYLANMA YOXLAMASI")
    analyzer.normality_test()
    
    # 3. T-test
    print("\\n3. T-TEST NETICELERI")
    analyzer.t_test()
    
    # 4. Etibar intervalı
    print("\\n4. 95% ETIBAR INTERVALI")
    analyzer.confidence_interval()
    
    # 5. Effect size
    print("\\n5. EFFECT SIZE (Cohen's d)")
    analyzer.cohens_d()
    
    # 6. Güc analizi
    print("\\n6. STATISTIK GUC")
    analyzer.power_analysis()
    
    # 7. Visualizasiya
    print("\\n7. VISUALIZASIYA YARADILIR...")
    analyzer.visualize()
    
    # 8. Şərh
    print("\\n8. NETICELERIN SERHI")
    analyzer.interpret_results()
    
    print("\\n✅ Analiz tamamlandı! 'ab_test_analysis.png' yaradıldı.")`,
  },

  quiz: [
    {
      question: "Orta (mean) necə hesablanır?",
      options: ["Elementlərin hasili bölünsün sayına", "Elementlərin cəmi bölünsün sayına", "Ortadakı element", "Ən çox təkrarlanan element"],
      correctAnswer: 1
    },
    {
      question: "Median nədir?",
      options: ["Ortalama dəyər", "Sıralanmış datada ortadakı dəyər", "Ən böyük dəyər", "Standart meyl"],
      correctAnswer: 1
    },
    {
      question: "Outlier olan datada hansı ölçü daha etibarlıdır?",
      options: ["Orta (mean)", "Median", "Moda", "Range"],
      correctAnswer: 1
    },
    {
      question: "Standart meyl nəyi göstərir?",
      options: ["Datadakı elementlərin sayını", "Datanın ortadan nə qədər dağıldığını", "Datanın minimumunu", "Datanın maksimumunu"],
      correctAnswer: 1
    },
    {
      question: "Varyans ilə standart meyl arasındakı əlaqə nədir?",
      options: ["Varyans = std²", "Varyans = √std", "Std = varyans²", "Əlaqə yoxdur"],
      correctAnswer: 0
    },
    {
      question: "IQR (Interquartile Range) nədir?",
      options: ["Min - Max", "Q3 - Q1 (orta 50%)", "Orta - Median", "Std - Varyans"],
      correctAnswer: 1
    },
    {
      question: "Z-score nədir?",
      options: ["Datanın minimumu", "Standartlaşdırılmış dəyər (neçə std uzaqda)", "Datanın maksimumu", "Orta dəyər"],
      correctAnswer: 1
    },
    {
      question: "|Z| > 3 olan dəyər nə sayılır?",
      options: ["Normal", "Outlier", "Median", "Moda"],
      correctAnswer: 1
    },
    {
      question: "Normal paylanmada data neçə faizi [mean-std, mean+std] aralığındadır?",
      options: ["50%", "68%", "95%", "99.7%"],
      correctAnswer: 1
    },
    {
      question: "Korelyasiya 1.0 nə deməkdir?",
      options: ["Heç bir əlaqə yoxdur", "Tam müsbət əlaqə", "Tam mənfi əlaqə", "Təsadüfi əlaqə"],
      correctAnswer: 1
    }
  ]
};

export default topicai14;