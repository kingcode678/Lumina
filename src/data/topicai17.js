// topicai17.jsx - Pandas: Məlumat Təmizləmə (Data Cleaning)
export const topicai17 = {
  id: 17,
  title: "Pandas: Məlumat Təmizləmə (Data Cleaning)",
  duration: "140 dəq",
  isFree: false,
  
  content: `
    <h4>🧹 Data Təmizləmə Nədir?</h4>
    <p>Real dünya datası <strong>çox dağınıq olur</strong>: boş dəyərlər, təkrarlanan sətirlər, səhv formatlar, yanlış yazılmış məlumatlar. <strong>Data Cleaning</strong> - bu "çirkləri" təmizləmək prosesidir. Data Science layihələrinin <strong>60-80% vaxtı</strong> buna sərf olunur!</p>

    <h4>🚨 Ən Yaygın Data Problemləri</h4>
    <ul>
      <li><strong>Missing values (NaN/null)</strong> - Boş dəyərlər</li>
      <li><strong>Duplicates</strong> - Təkrarlanan sətirlər</li>
      <li><strong>Outliers</strong> - Normaldan çox uzaq dəyərlər</li>
      <li><strong>Wrong data types</strong> - Səhv formatlar (mətn əvəzinə ədəd)</li>
      <li><strong>Inconsistent formatting</strong> - "Baki" vs "Bakı" vs "BAKI"</li>
    </ul>

    <h4>🔍 Boş Dəyərlərlə İşləmə</h4>
    
    <p><strong>Boş dəyərləri aşkarlamaq:</strong></p>
    <pre><code>import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Ad': ['Ali', 'Leyla', None, 'Səməd'],
    'Yaş': [25, np.nan, 30, 22],
    'Maaş': [2000, 3000, None, 2500]
})

# Hər sütunda neçə null var?
print(df.isnull().sum())
# Ad      1
# Yaş     1
# Maaş    1

# Ümumi null sayı
print(df.isnull().sum().sum())  # 3

# Null olan sətirləri göstər
print(df[df.isnull().any(axis=1)])</code></pre>

    <p><strong>Boş dəyərləri silmək:</strong></p>
    <pre><code># Hər hansı null olan sətirləri sil (default)
df_clean = df.dropna()

# Bütün dəyərləri null olan sətirləri sil
df_clean = df.dropna(how='all')

# Minimum 2 null olmayan dəyər tələb et
df_clean = df.dropna(thresh=2)

# Yalnız konkret sütunlara bax
df_clean = df.dropna(subset=['Yaş', 'Maaş'])</code></pre>

    <p><strong>Boş dəyərləri doldurmaq (Fill):</strong></p>
    <pre><code># Sabit dəyərlə doldur
df['Yaş'] = df['Yaş'].fillna(0)
df['Ad'] = df['Ad'].fillna('Naməlum')

# Orta (mean) ilə doldur
ortalama_yas = df['Yaş'].mean()
df['Yaş'] = df['Yaş'].fillna(ortalama_yas)

# Median ilə doldur (outliers varsa daha yaxşı)
median_maas = df['Maaş'].median()
df['Maaş'] = df['Maaş'].fillna(median_maas)

# Moda (ən çox təkrarlanan) ilə doldur
moda_seher = df['Şəhər'].mode()[0]
df['Şəhər'] = df['Şəhər'].fillna(moda_seher)

# Əvvəlki dəyərlə doldur (forward fill)
df['Ad'] = df['Ad'].fillna(method='ffill')

# Sonrakı dəyərlə doldur (backward fill)
df['Ad'] = df['Ad'].fillna(method='bfill')

# Qruplaşdırılmış doldurma: Hər şəhərin orta maaşı ilə
df['Maaş'] = df.groupby('Şəhər')['Maaş'].transform(
    lambda x: x.fillna(x.mean())
)</code></pre>

    <h4>♻️ Təkrarlanan Sətirləri İdarə Etmə</h4>
    <pre><code># Təkrarlanan sətirləri yoxla
print(df.duplicated().sum())  # Neçə təkrar var?

# Təkrarlanan sətirləri göstər
print(df[df.duplicated()])

# Bütün təkrarlananları göstər (ilk daxil olmaqla)
print(df[df.duplicated(keep=False)])

# Təkrarlanan sətirləri sil (ilk saxla)
df_unique = df.drop_duplicates()

# Sonuncunu saxla
df_unique = df.drop_duplicates(keep='last')

# Heç birini saxlama (bütün təkrarları sil)
df_unique = df.drop_duplicates(keep=False)

# Yalnız konkret sütunlara görə yoxla
df_unique = df.drop_duplicates(subset=['Ad', 'Yaş'])

# Təkrarları say və sırala
print(df.groupby(df.columns.tolist()).size().reset_index(name='count'))</code></pre>

    <h4>🎯 Outlier (Kənar Dəyər) Təmizləmə</h4>
    <pre><code># IQR (Interquartile Range) metodu
Q1 = df['Maaş'].quantile(0.25)
Q3 = df['Maaş'].quantile(0.75)
IQR = Q3 - Q1

alt_hədd = Q1 - 1.5 * IQR
üst_hədd = Q3 + 1.5 * IQR

# Outlier-ları filtrlə
df_normal = df[(df['Maaş'] >= alt_hədd) & (df['Maaş'] <= üst_hədd)]

# Z-score metodu
from scipy import stats
z_scores = np.abs(stats.zscore(df['Maaş']))
df_normal = df[z_scores < 3]  # 3 standart meyl uzaqlıq

# Percentile metodu
alt_percentile = df['Maaş'].quantile(0.01)
üst_percentile = df['Maaş'].quantile(0.99)
df_normal = df[(df['Maaş'] >= alt_percentile) & (df['Maaş'] <= üst_percentile)]</code></pre>

    <h4>📝 Data Tip Dəyişiklikləri</h4>
    <pre><code># Tip yoxlamaq
print(df.dtypes)

# String-dən ədədə çevirmə
df['Yaş'] = pd.to_numeric(df['Yaş'], errors='coerce')
# errors='coerce' - çevrilə bilməyənləri NaN edir

# Tarixə çevirmə
df['Tarix'] = pd.to_datetime(df['Tarix'], errors='coerce')
df['Tarix'] = pd.to_datetime(df['Tarix'], format='%d/%m/%Y')

# Kategorik tip (yaddaş qənaəti)
df['Kateqoriya'] = df['Kateqoriya'].astype('category')

# Boolean çevirmə
df['Aktiv'] = df['Status'].map({'Bəli': True, 'Xeyr': False})

# Tarix komponentlərini çıxar
df['İl'] = df['Tarix'].dt.year
df['Ay'] = df['Tarix'].dt.month
df['Gün'] = df['Tarix'].dt.day
df['Həftə_günü'] = df['Tarix'].dt.day_name()</code></pre>

    <h4>✨ Mətn Təmizləmə və Standartlaşdırma</h4>
    <pre><code># Boşluqları təmizlə
df['Ad'] = df['Ad'].str.strip()
df['Ad'] = df['Ad'].str.replace('  ', ' ')  # Çift boşluq

# Kiçik/böyük hərfləri standartlaşdır
df['Email'] = df['Email'].str.lower()
df['Ad'] = df['Ad'].str.title()  # İlk hərf böyük: "ali" → "Ali"

# Xüsusi simvolları sil
df['Telefon'] = df['Telefon'].str.replace(r'[^0-9]', '', regex=True)

# String uzunluğunu məhdudlaşdır
df['Kod'] = df['Kod'].str[:5]

# Fuzzy matching (oxşar yazıları tap)
from fuzzywuzzy import process
def düzəlt_ad(ad, düzgün_adlar):
    match, score = process.extractOne(ad, düzgün_adlar)
    return match if score > 80 else ad

düzgün_adlar = ['Bakı', 'Gəncə', 'Sumqayıt']
df['Şəhər'] = df['Şəhər'].apply(lambda x: düzəlt_ad(x, düzgün_adlar))</code></pre>

    <h4>🔄 Data Reshaping (Formasını Dəyişmə)</h4>
    <pre><code># Melt - geniş formatdan uzun formatına
geniş_df = pd.DataFrame({
    'Ad': ['Ali', 'Leyla'],
    'Yanvar': [100, 200],
    'Fevral': [150, 250]
})

uzun_df = geniş_df.melt(
    id_vars=['Ad'],
    value_vars=['Yanvar', 'Fevral'],
    var_name='Ay',
    value_name='Satış'
)
# Nəticə: Ad, Ay, Satış sütunları

# Pivot - uzun formatdan geniş formatına
geniş_geri = uzun_df.pivot(
    index='Ad',
    columns='Ay',
    values='Satış'
)

# Stack/Unstack
stacked = df.stack()  # Sütunları indeksə çevir
unstacked = df.unstack()  # İndeksi sütuna çevir</code></pre>

    <h4>🎨 Qabaqcıl Təmizləmə Texnikaları</h4>
    <pre><code># Regex ilə güclü axtarış və əvəz etmə
df['Mətn'] = df['Mətn'].str.replace(r'\\d+', '', regex=True)  # Rəqəmləri sil
df['Email'] = df['Mətn'].str.extract(r'([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})')

# Şərtli doldurma
df['Bonus'] = np.where(df['Maaş'] > 3000, df['Maaş'] * 0.1, 0)

# Interpolasiya (aralıq dəyərləri hesabla)
df['Temp'] = df['Temp'].interpolate(method='linear')

# Qarışıq sütunları parse et
df[['Ad', 'Soyad']] = df['Tam_Ad'].str.split(' ', expand=True, n=1)

# MultiIndex təmizləmə
df.columns = [' '.join(col).strip() if col[1] not in ['nan', 'NaN'] else col[0] 
              for col in df.columns.values]</code></pre>

    <h4>💡 Real Proyekt Workflow</h4>
    <pre><code>def comprehensive_cleaning(df):
    # 1. İlkin yoxlama
    print(f"İlkin ölçü: {df.shape}")
    print(f"Null sayı: {df.isnull().sum().sum()}")
    
    # 2. Sütun adlarını təmizlə
    df.columns = df.columns.str.strip().str.lower().str.replace(' ', '_')
    
    # 3. Tipləri düzəlt
    for col in df.columns:
        if df[col].dtype == 'object':
            try:
                df[col] = pd.to_datetime(df[col])
            except:
                try:
                    df[col] = pd.to_numeric(df[col])
                except:
                    pass
    
    # 4. Təkrarları sil
    df = df.drop_duplicates()
    
    # 5. Null-ları doldur/qarışdır
    # (Sütun tipinə görə fərqli strategiyalar)
    
    # 6. Outlier-ları yoxla
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    for col in numeric_cols:
        Q1, Q3 = df[col].quantile([0.25, 0.75])
        IQR = Q3 - Q1
        outliers = df[(df[col] < Q1 - 1.5*IQR) | (df[col] > Q3 + 1.5*IQR)]
        print(f"{col}: {len(outliers)} outlier")
    
    # 7. Final yoxlama
    print(f"Son ölçü: {df.shape}")
    return df</code></pre>
  `,

  starterCode: {
    html: `<div class="pandas-cleaning-lab">
  <h2>🧹 Pandas Data Cleaning Lab</h2>
  
  <section class="demo-section">
    <h3>1. Data Health Monitor - Problemləri Aşkarla</h3>
    <div class="health-dashboard">
      <div class="data-source-tabs">
        <button class="tab-btn active" onclick="loadDataset('messy')">🔴 Dağınıq Data</button>
        <button class="tab-btn" onclick="loadDataset('clean')">🟢 Təmiz Data</button>
        <button class="tab-btn" onclick="loadDataset('real')">📊 Real Dataset</button>
      </div>
      
      <div class="health-metrics" id="healthMetrics">
        <div class="metric-card critical">
          <div class="metric-icon">⚠️</div>
          <div class="metric-value" id="nullCount">0</div>
          <div class="metric-label">Null Dəyərlər</div>
        </div>
        <div class="metric-card warning">
          <div class="metric-icon">♻️</div>
          <div class="metric-value" id="dupCount">0</div>
          <div class="metric-label">Təkrarlar</div>
        </div>
        <div class="metric-card info">
          <div class="metric-icon">📏</div>
          <div class="metric-value" id="outlierCount">0</div>
          <div class="metric-label">Outlier-lar</div>
        </div>
        <div class="metric-card success">
          <div class="metric-icon">✅</div>
          <div class="metric-value" id="qualityScore">0%</div>
          <div class="metric-label">Keyfiyyət Skoru</div>
        </div>
      </div>
      
      <div class="data-preview-container">
        <div class="preview-header">
          <h4>Data Preview</h4>
          <div class="view-toggles">
            <button onclick="showView('table')" class="toggle-btn active">📋 Cədvəl</button>
            <button onclick="showView('summary')" class="toggle-btn">📊 Xülasə</button>
            <button onclick="showView('missing')" class="toggle-btn">🕳️ Null Map</button>
          </div>
        </div>
        <div class="preview-content" id="dataPreview">
          <div class="data-table-wrapper" id="tableView"></div>
          <div class="summary-view" id="summaryView" style="display:none;">
            <div class="summary-grid" id="summaryGrid"></div>
          </div>
          <div class="missing-map" id="missingView" style="display:none;">
            <div class="heatmap-legend">
              <span class="legend-item"><span class="color-box null"></span> Null</span>
              <span class="legend-item"><span class="color-box valid"></span> Dolu</span>
            </div>
            <div class="missing-heatmap" id="missingHeatmap"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Null Dəyər Strateji Aləti</h3>
    <div class="null-strategy-lab">
      <div class="strategy-columns">
        <div class="source-column">
          <h4>🔍 Mənbə Sütunu</h4>
          <select id="nullSourceCol" onchange="analyzeNulls()">
            <option value="">Sütun seçin...</option>
          </select>
          <div class="null-stats" id="nullStats">
            <div class="stat-row">
              <span>Ümumi dəyərlər:</span>
              <span class="stat-val" id="totalVals">-</span>
            </div>
            <div class="stat-row">
              <span>Null sayı:</span>
              <span class="stat-val null-highlight" id="nullVals">-</span>
            </div>
            <div class="stat-row">
              <span>Faiz:</span>
              <span class="stat-val" id="nullPercent">-</span>
            </div>
            <div class="null-distribution" id="nullDistribution"></div>
          </div>
        </div>
        
        <div class="strategy-arrow">→</div>
        
        <div class="action-column">
          <h4>⚡ Təmizləmə Strategiyası</h4>
          <div class="strategy-options">
            <label class="strategy-radio">
              <input type="radio" name="nullStrategy" value="drop" onchange="previewStrategy()">
              <div class="strategy-card">
                <div class="strategy-title">🗑️ Sil (Drop)</div>
                <div class="strategy-desc">Null olan sətirləri sil</div>
              </div>
            </label>
            
            <label class="strategy-radio">
              <input type="radio" name="nullStrategy" value="mean" onchange="previewStrategy()">
              <div class="strategy-card">
                <div class="strategy-title">📊 Orta (Mean)</div>
                <div class="strategy-desc">Orta ədədlə doldur</div>
              </div>
            </label>
            
            <label class="strategy-radio">
              <input type="radio" name="nullStrategy" value="median" onchange="previewStrategy()">
              <div class="strategy-card">
                <div class="strategy-title">📏 Median</div>
                <div class="strategy-desc">Median ilə doldur</div>
              </div>
            </label>
            
            <label class="strategy-radio">
              <input type="radio" name="nullStrategy" value="mode" onchange="previewStrategy()">
              <div class="strategy-card">
                <div class="strategy-title">🎯 Moda</div>
                <div class="strategy-desc">Ən çox təkrarlanan</div>
              </div>
            </label>
            
            <label class="strategy-radio">
              <input type="radio" name="nullStrategy" value="ffill" onchange="previewStrategy()">
              <div class="strategy-card">
                <div class="strategy-title">⬆️ Forward Fill</div>
                <div class="strategy-desc">Əvvəlki dəyər ilə</div>
              </div>
            </label>
            
            <label class="strategy-radio">
              <input type="radio" name="nullStrategy" value="bfill" onchange="previewStrategy()">
              <div class="strategy-card">
                <div class="strategy-title">⬇️ Backward Fill</div>
                <div class="strategy-desc">Sonrakı dəyər ilə</div>
              </div>
            </label>
            
            <label class="strategy-radio">
              <input type="radio" name="nullStrategy" value="interpolate" onchange="previewStrategy()">
              <div class="strategy-card">
                <div class="strategy-title">📈 Interpolate</div>
                <div class="strategy-desc">Xətti interpolasiya</div>
              </div>
            </label>
            
            <label class="strategy-radio">
              <input type="radio" name="nullStrategy" value="custom" onchange="previewStrategy()">
              <div class="strategy-card">
                <div class="strategy-title">✏️ Xüsusi</div>
                <input type="text" id="customValue" placeholder="Dəyər daxil edin" oninput="previewStrategy()">
              </div>
            </label>
          </div>
          
          <button class="apply-btn" onclick="applyNullStrategy()">Strategiyanı Tətbiq Et</button>
        </div>
        
        <div class="strategy-arrow">→</div>
        
        <div class="preview-column">
          <h4>👁️ Önbaxış</h4>
          <div class="strategy-preview" id="strategyPreview">
            <div class="preview-placeholder">Strategiya seçin...</div>
          </div>
          <div class="impact-analysis" id="impactAnalysis"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Duplicate Detection & Removal</h3>
    <div class="duplicate-lab">
      <div class="dup-controls">
        <div class="dup-options">
          <h4>Təkrar Yoxlama Parametrləri</h4>
          <div class="checkbox-group" id="dupColumns">
            <label><input type="checkbox" checked onchange="findDuplicates()"> Bütün sütunlar</label>
          </div>
          
          <div class="dup-strategy">
            <label>Saxlamaq:</label>
            <select id="dupKeep" onchange="findDuplicates()">
              <option value="first">İlk dəyər</option>
              <option value="last">Son dəyər</option>
              <option value="false">Heç biri (hamısını sil)</option>
            </select>
          </div>
          
          <button onclick="removeDuplicates()" class="action-btn">Təkrarları Sil</button>
        </div>
        
        <div class="dup-visualization">
          <h4>Təkrarlanan Sətirlər</h4>
          <div class="dup-list" id="dupList"></div>
          <div class="dup-stats" id="dupStats"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Outlier Detection Aləti</h3>
    <div class="outlier-lab">
      <div class="outlier-methods">
        <div class="method-card active" onclick="setOutlierMethod('iqr')">
          <div class="method-name">IQR Metodu</div>
          <div class="method-formula">Q1 - 1.5×IQR və Q3 + 1.5×IQR</div>
          <div class="method-params">
            <label>Multiplier: <input type="number" id="iqrMult" value="1.5" step="0.1" onchange="detectOutliers()"></label>
          </div>
        </div>
        
        <div class="method-card" onclick="setOutlierMethod('zscore')">
          <div class="method-name">Z-Score</div>
          <div class="method-formula">|z| > threshold</div>
          <div class="method-params">
            <label>Threshold: <input type="number" id="zThreshold" value="3" step="0.5" onchange="detectOutliers()"></label>
          </div>
        </div>
        
        <div class="method-card" onclick="setOutlierMethod('percentile')">
          <div class="method-name">Percentile</div>
          <div class="method-formula">P1 və P99 kənarları</div>
          <div class="method-params">
            <label>Alt: <input type="number" id="pLow" value="1" min="0" max="100">%</label>
            <label>Üst: <input type="number" id="pHigh" value="99" min="0" max="100">%</label>
          </div>
        </div>
      </div>
      
      <div class="outlier-analysis">
        <div class="column-selector">
          <label>Analiz sütunu:</label>
          <select id="outlierCol" onchange="detectOutliers()"></select>
        </div>
        
        <div class="outlier-chart" id="outlierChart">
          <div class="boxplot-container" id="boxplotViz"></div>
          <div class="scatter-overlay" id="scatterViz"></div>
        </div>
        
        <div class="outlier-actions">
          <button onclick="capOutliers()">Outlier-ları Limitlə (Winsorize)</button>
          <button onclick="removeOutliers()">Outlier-ları Sil</button>
          <button onclick="transformOutliers()">Log Transform</button>
        </div>
        
        <div class="outlier-table" id="outlierTable"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Data Type Converter</h3>
    <div class="type-converter">
      <div class="type-grid" id="typeGrid"></div>
      
      <div class="conversion-preview">
        <h4>Çevirmə Önbaxışı</h4>
        <div class="before-after" id="beforeAfter">
          <div class="before">
            <div class="section-title">Əvvəlki</div>
            <div class="type-badge" id="beforeType">object</div>
            <div class="sample-values" id="beforeValues"></div>
          </div>
          <div class="arrow">→</div>
          <div class="after">
            <div class="section-title">Sonrakı</div>
            <div class="type-badge" id="afterType">int64</div>
            <div class="sample-values" id="afterValues"></div>
          </div>
        </div>
        
        <div class="conversion-errors" id="conversionErrors">
          <div class="error-header">⚠️ Çevrilə bilməyən dəyərlər:</div>
          <div class="error-list" id="errorList"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>6. Text Cleaning Pipeline</h3>
    <div class="text-cleaner">
      <div class="text-input-area">
        <h4>Mətn Sütunu Seçin</h4>
        <select id="textCol" onchange="loadTextData()"></select>
        
        <div class="text-operations">
          <div class="op-group">
            <h5>🧹 Standartlaşdırma</h5>
            <label><input type="checkbox" id="opLower" onchange="previewTextClean()"> lowercase</label>
            <label><input type="checkbox" id="opUpper" onchange="previewTextClean()"> UPPERCASE</label>
            <label><input type="checkbox" id="opTitle" onchange="previewTextClean()"> Title Case</label>
            <label><input type="checkbox" id="opStrip" checked onchange="previewTextClean()"> Boşluqları sil</label>
          </div>
          
          <div class="op-group">
            <h5>🔤 Simvollar</h5>
            <label><input type="checkbox" id="opDigits" onchange="previewTextClean()"> Rəqəmləri sil</label>
            <label><input type="checkbox" id="opSpecial" onchange="previewTextClean()"> Xüsusi simvolları sil</label>
            <label><input type="checkbox" id="opSpaces" onchange="previewTextClean()"> Çoxlu boşluqları tək et</label>
          </div>
          
          <div class="op-group">
            <h5>🔄 Əvəzetmələr</h5>
            <div class="replace-rule">
              <input type="text" id="findText" placeholder="Tap..." oninput="previewTextClean()">
              <span>→</span>
              <input type="text" id="replaceText" placeholder="Əvəz et..." oninput="previewTextClean()">
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-preview">
        <h4>Canlı Önbaxış</h4>
        <div class="text-comparison" id="textComparison"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>7. Cleaning Report & Export</h3>
    <div class="cleaning-report">
      <div class="report-timeline" id="reportTimeline"></div>
      
      <div class="final-stats">
        <div class="stat-box">
          <div class="stat-label">Başlanğıc sətir</div>
          <div class="stat-num" id="startRows">0</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Silinən sətir</div>
          <div class="stat-num removed" id="removedRows">0</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Dəyişdirilən dəyər</div>
          <div class="stat-num modified" id="modifiedCells">0</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Son sətir</div>
          <div class="stat-num final" id="finalRows">0</div>
        </div>
      </div>
      
      <div class="export-actions">
        <button onclick="downloadCleanData('csv')">📥 CSV Yüklə</button>
        <button onclick="downloadCleanData('excel')">📊 Excel Yüklə</button>
        <button onclick="downloadCleanData('json')">📄 JSON Yüklə</button>
        <button onclick="generateCleaningCode()">🐍 Python Kodu Yarat</button>
      </div>
      
      <div class="generated-code" id="generatedCode"></div>
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
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.pandas-cleaning-lab {
  max-width: 1400px;
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

h5 {
  color: #ff6b6b;
  margin: 15px 0 10px 0;
  font-size: 14px;
  text-transform: uppercase;
}

.demo-section {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Health Dashboard */
.data-source-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.tab-btn {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #8b949e;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
}

.tab-btn.active, .tab-btn:hover {
  background: #e94560;
  border-color: #e94560;
  color: #fff;
}

.health-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 25px;
}

.metric-card {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  border-top: 4px solid;
  transition: transform 0.3s;
}

.metric-card:hover {
  transform: translateY(-5px);
}

.metric-card.critical { border-top-color: #e94560; }
.metric-card.warning { border-top-color: #ffd700; }
.metric-card.info { border-top-color: #00d9ff; }
.metric-card.success { border-top-color: #00ff88; }

.metric-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.metric-value {
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  font-family: 'Fira Code', monospace;
}

.metric-label {
  color: #8b949e;
  font-size: 14px;
  margin-top: 5px;
}

.data-preview-container {
  background: #0d1117;
  border-radius: 12px;
  overflow: hidden;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #1a1a2e;
  border-bottom: 1px solid #30363d;
}

.view-toggles {
  display: flex;
  gap: 10px;
}

.toggle-btn {
  background: #30363d;
  border: none;
  color: #8b949e;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.toggle-btn.active, .toggle-btn:hover {
  background: #00d9ff;
  color: #000;
}

.preview-content {
  padding: 20px;
  max-height: 500px;
  overflow: auto;
}

.data-table-wrapper table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
}

.data-table-wrapper th {
  background: #1a1a2e;
  color: #00d9ff;
  padding: 12px;
  text-align: left;
  position: sticky;
  top: 0;
}

.data-table-wrapper td {
  padding: 10px 12px;
  border-bottom: 1px solid #30363d;
}

.data-table-wrapper tr:hover {
  background: rgba(0, 217, 255, 0.05);
}

.cell-null {
  background: rgba(233, 69, 96, 0.2) !important;
  color: #e94560;
  font-style: italic;
}

.cell-outlier {
  background: rgba(255, 215, 0, 0.2) !important;
  color: #ffd700;
}

.cell-duplicate {
  background: rgba(255, 107, 107, 0.2) !important;
  color: #ff6b6b;
}

/* Null Strategy Lab */
.null-strategy-lab {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.strategy-columns {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 20px;
  align-items: start;
}

.source-column, .action-column, .preview-column {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
}

.strategy-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #00ff88;
  padding: 20px;
}

.null-stats {
  margin-top: 20px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #30363d;
}

.stat-val {
  font-family: 'Fira Code', monospace;
  color: #00d9ff;
  font-weight: bold;
}

.null-highlight {
  color: #e94560;
}

.null-distribution {
  margin-top: 15px;
  height: 100px;
  background: #1a1a2e;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.null-bar {
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, #e94560, #ffd700);
  transition: all 0.3s;
}

.strategy-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.strategy-radio {
  cursor: pointer;
  display: block;
}

.strategy-radio input {
  display: none;
}

.strategy-card {
  background: #1a1a2e;
  border: 2px solid #30363d;
  padding: 15px;
  border-radius: 8px;
  transition: all 0.3s;
}

.strategy-radio input:checked + .strategy-card {
  border-color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
}

.strategy-title {
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
}

.strategy-desc {
  font-size: 13px;
  color: #8b949e;
}

.strategy-card input[type="text"] {
  width: 100%;
  margin-top: 10px;
  background: #0d1117;
  border: 1px solid #30363d;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
}

.apply-btn {
  width: 100%;
  margin-top: 20px;
  background: linear-gradient(135deg, #00ff88 0%, #00b359 100%);
  color: #000;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.apply-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 136, 0.4);
}

/* Duplicate Lab */
.dup-controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.dup-options {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #0d1117;
  border-radius: 6px;
  cursor: pointer;
}

.checkbox-group input {
  width: 18px;
  height: 18px;
  accent-color: #00ff88;
}

.dup-strategy {
  margin: 20px 0;
}

.dup-strategy select {
  width: 100%;
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-top: 8px;
}

.action-btn {
  width: 100%;
  background: #e94560;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.dup-visualization {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.dup-list {
  max-height: 300px;
  overflow: auto;
  background: #0d1117;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
}

.dup-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #30363d;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
}

.dup-count {
  background: #e94560;
  color: #fff;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
}

/* Outlier Lab */
.outlier-methods {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.method-card {
  flex: 1;
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #30363d;
  cursor: pointer;
  transition: all 0.3s;
}

.method-card.active {
  border-color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
}

.method-name {
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
}

.method-formula {
  font-size: 13px;
  color: #8b949e;
  font-family: 'Fira Code', monospace;
  margin-bottom: 15px;
}

.method-params {
  display: flex;
  gap: 10px;
}

.method-params input {
  width: 60px;
  background: #0d1117;
  border: 1px solid #30363d;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  text-align: center;
}

.outlier-analysis {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.column-selector {
  margin-bottom: 20px;
}

.column-selector select {
  background: #0d1117;
  border: 2px solid #00d9ff;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-left: 10px;
}

.outlier-chart {
  height: 300px;
  background: #0d1117;
  border-radius: 10px;
  margin: 20px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.outlier-actions {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.outlier-actions button {
  background: #30363d;
  border: 2px solid #ffd700;
  color: #ffd700;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.outlier-actions button:hover {
  background: #ffd700;
  color: #000;
}

/* Type Converter */
.type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.type-card {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #30363d;
  cursor: pointer;
  transition: all 0.3s;
}

.type-card:hover, .type-card.selected {
  border-color: #00d9ff;
  background: rgba(0, 217, 255, 0.1);
}

.type-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.type-name {
  font-weight: bold;
  color: #fff;
}

.current-type {
  background: #30363d;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-family: 'Fira Code', monospace;
}

.type-samples {
  font-size: 13px;
  color: #8b949e;
  font-family: 'Fira Code', monospace;
}

.conversion-preview {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.before-after {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
}

.before, .after {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
}

.section-title {
  color: #8b949e;
  font-size: 14px;
  margin-bottom: 10px;
}

.type-badge {
  display: inline-block;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-family: 'Fira Code', monospace;
  margin-bottom: 15px;
}

.before .type-badge { background: #e94560; color: #fff; }
.after .type-badge { background: #00ff88; color: #000; }

.sample-values {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.8;
}

.arrow {
  font-size: 24px;
  color: #00d9ff;
}

.conversion-errors {
  background: rgba(233, 69, 96, 0.1);
  border: 1px solid #e94560;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

.error-header {
  color: #e94560;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Text Cleaner */
.text-cleaner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.text-input-area {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.text-input-area select {
  width: 100%;
  background: #0d1117;
  border: 2px solid #00d9ff;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 20px;
}

.text-operations {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.op-group {
  background: #0d1117;
  padding: 20px;
  border-radius: 8px;
}

.op-group label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px 0;
  cursor: pointer;
}

.op-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #00ff88;
}

.replace-rule {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
}

.replace-rule input {
  flex: 1;
  background: #1a1a2e;
  border: 1px solid #30363d;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
}

.text-preview {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.text-comparison {
  background: #0d1117;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #30363d;
}

.comparison-row.header {
  background: #1a1a2e;
  font-weight: bold;
  color: #00d9ff;
}

.comparison-row > div {
  padding: 12px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
}

.before-text { color: #e94560; }
.after-text { color: #00ff88; }

/* Cleaning Report */
.cleaning-report {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.report-timeline {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 20px 0;
  margin-bottom: 25px;
}

.timeline-item {
  min-width: 200px;
  background: #0d1117;
  padding: 15px;
  border-radius: 10px;
  border-left: 4px solid #00d9ff;
}

.timeline-action {
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
}

.timeline-detail {
  font-size: 13px;
  color: #8b949e;
}

.final-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 25px;
}

.stat-box {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.stat-box .stat-label {
  color: #8b949e;
  font-size: 14px;
  margin-bottom: 10px;
}

.stat-box .stat-num {
  font-size: 28px;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
}

.stat-num.removed { color: #e94560; }
.stat-num.modified { color: #ffd700; }
.stat-num.final { color: #00ff88; }

.export-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}

.export-actions button {
  background: #30363d;
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.export-actions button:hover {
  background: #00ff88;
  color: #000;
}

.generated-code {
  background: #0d1117;
  padding: 25px;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  overflow-x: auto;
  border-left: 4px solid #ffd700;
}

/* Heatmap */
.heatmap-legend {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
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

.color-box.null { background: #e94560; }
.color-box.valid { background: #00ff88; }

.missing-heatmap {
  display: grid;
  gap: 2px;
}

.heatmap-cell {
  aspect-ratio: 1;
  border-radius: 2px;
  transition: all 0.3s;
}

.heatmap-cell:hover {
  transform: scale(1.5);
  z-index: 10;
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
  .strategy-columns { grid-template-columns: 1fr; }
  .strategy-arrow { transform: rotate(90deg); }
  .dup-controls { grid-template-columns: 1fr; }
  .text-cleaner { grid-template-columns: 1fr; }
  .health-metrics { grid-template-columns: repeat(2, 1fr); }
  .final-stats { grid-template-columns: repeat(2, 1fr); }
  .outlier-methods { flex-direction: column; }
  .before-after { grid-template-columns: 1fr; }
  .arrow { transform: rotate(90deg); }
}`
  },

  exercise: {
    title: "🏥 Xəstəxana Data Təmizləmə - Real Healthcare Data",
    description: "Böyük xəstəxana datasetini (50,000+ qeyd) təmizləyin. Null dəyərlər, yanlış diagnoz kodları, təkrarlanan qeydlər və outlier-larla mübarizə aparın.",
    requirements: [
      "CSV fayldan xəstə data oxuyun: patient_id, name, age, gender, admission_date, diagnosis_code, blood_pressure, heart_rate, temperature, doctor_notes",
      "Age sütununda mənfi və 120-dən böyük dəyərləri outlier olaraq işarələyin və düzəldin",
      "Blood pressure formatını standartlaşdırın (120/80 → systolic/diastolic ayrı sütunlar)",
      "Temperature sütununu Fahrenheit-dən Celsius-a çevirin (yanlış formatları tutun)",
      "Doctor_notes sütununda boş və 'N/A' yazılmış dəyərləri null olaraq işarələyin",
      "Təkrarlanan patient_id-ləri tapın və sonuncunu saxlayaraq əvvəlkiləri silin",
      "Admission_date sütununu standart tarix formatına çevirin (müxtəlif formatlar ola bilər: DD/MM/YYYY, YYYY-MM-DD)",
      "Gender sütununu standartlaşdırın (M/F/Male/Female/m/f → Male/Female)",
      "Hər diagnoz kodu üçün orta yaş, temperatur və heart_rate hesablayın (groupby ilə)",
      "Təmizlənmiş datanı 3 fərqli strategiya ilə 3 faylda saxlayın: conservative (yalnız əmin düzəlişlər), aggressive (hər şeyi düzəlt), moderate (balans)"
    ],
    starterCode: `import pandas as pd
import numpy as np
from datetime import datetime
import re

class HospitalDataCleaner:
    def __init__(self, file_path):
        self.raw_df = None
        self.clean_df = None
        self.cleaning_log = []
        self.file_path = file_path
        
    def load_data(self):
        """Xəstə datasını yüklə"""
        print("🏥 Xəstəxana datası yüklənir...")
        self.raw_df = pd.read_csv(self.file_path)
        self.clean_df = self.raw_df.copy()
        
        print(f"📊 İlkin data: {len(self.raw_df):,} qeyd")
        print(f"🩺 Sütunlar: {list(self.raw_df.columns)}")
        
        # Data health check
        null_counts = self.raw_df.isnull().sum()
        print(f"\\n⚠️ Null dəyərlər:\\n{null_counts[null_counts > 0]}")
        
        return self
    
    def clean_age(self, strategy='clip'):
        """
        Yaş sütununu təmizlə
        strategy: 'clip' (0-120 limit), 'remove' (outlier-ları sil), 'median' (median ilə doldur)
        """
        print("\\n📅 Yaş sütunu təmizlənir...")
        
        initial_issues = len(self.clean_df[(self.clean_df['age'] < 0) | (self.clean_df['age'] > 120)])
        
        # Yaşı ədədə çevir (çevrilə bilməyənlər NaN olacaq)
        self.clean_df['age'] = pd.to_numeric(self.clean_df['age'], errors='coerce')
        
        if strategy == 'clip':
            # 0-120 arası limitlə
            self.clean_df['age'] = self.clean_df['age'].clip(0, 120)
            self.cleaning_log.append(f"Yaş limitləndi: 0-120 (Əvvəlki problem: {initial_issues})")
            
        elif strategy == 'remove':
            # Outlier-ları sil
            mask = (self.clean_df['age'] >= 0) & (self.clean_df['age'] <= 120)
            removed = (~mask).sum()
            self.clean_df = self.clean_df[mask]
            self.cleaning_log.append(f"Yaş outlier-ları silindi: {removed} qeyd")
            
        elif strategy == 'median':
            # Outlier-ları median ilə doldur
            median_age = self.clean_df[(self.clean_df['age'] >= 0) & 
                                      (self.clean_df['age'] <= 120)]['age'].median()
            outlier_mask = (self.clean_df['age'] < 0) | (self.clean_df['age'] > 120)
            self.clean_df.loc[outlier_mask, 'age'] = median_age
            self.cleaning_log.append(f"Yaş outlier-ları median ({median_age}) ilə dolduruldu")
        
        return self
    
    def parse_blood_pressure(self):
        """Blood pressure formatını parse et: '120/80' → systolic, diastolic"""
        print("\\n🩸 Təzyiq parse edilir...")
        
        def extract_bp(bp_str):
            if pd.isna(bp_str):
                return pd.Series([np.nan, np.nan])
            
            # Regex ilə rəqəmləri tap
            numbers = re.findall(r'\\d+', str(bp_str))
            if len(numbers) >= 2:
                return pd.Series([int(numbers[0]), int(numbers[1])])
            return pd.Series([np.nan, np.nan])
        
        # Yeni sütunlar yarat
        bp_parsed = self.clean_df['blood_pressure'].apply(extract_bp)
        self.clean_df['systolic'] = bp_parsed[0]
        self.clean_df['diastolic'] = bp_parsed[1]
        
        # Köhnə sütunu sil
        self.clean_df = self.clean_df.drop('blood_pressure', axis=1)
        
        # Outlier check (normal: sys 90-180, dia 60-120)
        sys_outliers = ((self.clean_df['systolic'] < 50) | 
                       (self.clean_df['systolic'] > 250)).sum()
        dia_outliers = ((self.clean_df['diastolic'] < 30) | 
                       (self.clean_df['diastolic'] > 150)).sum()
        
        self.cleaning_log.append(f"BP parse edildi. Outlier-lar: Systolic={sys_outliers}, Diastolic={dia_outliers}")
        
        return self
    
    def convert_temperature(self):
        """Temperaturu Fahrenheit-dən Celsius-a çevir"""
        print("\\n🌡️ Temperatur çevrilir...")
        
        def f_to_c(temp):
            if pd.isna(temp):
                return np.nan
            
            temp = float(temp)
            
            # Əgər 50-dən böyükdürsə, Fahrenheit hesab et
            if temp > 50:
                return (temp - 32) * 5/9
            return temp  # Artıq Celsius olabilər
        
        self.clean_df['temperature_c'] = self.clean_df['temperature'].apply(f_to_c)
        
        # Outlier-ları yoxla (normal: 35-42°C)
        outliers = ((self.clean_df['temperature_c'] < 30) | 
                   (self.clean_df['temperature_c'] > 45)).sum()
        
        self.cleaning_log.append(f"Temperatur çevrildi. Outlier-lar: {outliers}")
        
        return self
    
    def standardize_text_columns(self):
        """Mətn sütunlarını standartlaşdır"""
        print("\\n📝 Mətn sütunları standartlaşdırılır...")
        
        # Gender standartlaşdırma
        gender_mapping = {
            'm': 'Male', 'M': 'Male', 'male': 'Male', 'Male': 'Male',
            'f': 'Female', 'F': 'Female', 'female': 'Female', 'Female': 'Female'
        }
        self.clean_df['gender'] = self.clean_df['gender'].map(gender_mapping)
        
        # Null və 'N/A' dəyərləri doctor_notes-da
        self.clean_df['doctor_notes'] = self.clean_df['doctor_notes'].replace(
            ['N/A', 'n/a', 'NA', '', 'null', 'NULL'], np.nan
        )
        
        # Adları title case et
        self.clean_df['name'] = self.clean_df['name'].str.title()
        
        self.cleaning_log.append("Gender, doctor_notes və name standartlaşdırıldı")
        
        return self
    
    def parse_dates(self):
        """Müxtəlif formatlı tarixləri parse et"""
        print("\\n📅 Tarixlər parse edilir...")
        
        def parse_date(date_str):
            if pd.isna(date_str):
                return pd.NaT
            
            formats = ['%d/%m/%Y', '%Y-%m-%d', '%m/%d/%Y', '%d-%m-%Y', '%Y/%m/%d']
            
            for fmt in formats:
                try:
                    return pd.to_datetime(date_str, format=fmt)
                except:
                    continue
            
            # Heç biri uyğun gəlməsə, auto-parse et
            try:
                return pd.to_datetime(date_str)
            except:
                return pd.NaT
        
        self.clean_df['admission_date_parsed'] = self.clean_df['admission_date'].apply(parse_date)
        
        # Parse edilə bilməyənləri say
        unparsed = self.clean_df['admission_date_parsed'].isna().sum()
        self.cleaning_log.append(f"Tarix parse edildi. Parse edilə bilməyən: {unparsed}")
        
        return self
    
    def remove_duplicates(self, keep='last'):
        """Təkrarlanan patient-ləri sil"""
        print("\\n♻️ Təkrarlar silinir...")
        
        initial_count = len(self.clean_df)
        
        # patient_id-yə görə duplicate-ləri sil
        self.clean_df = self.clean_df.drop_duplicates(subset=['patient_id'], keep=keep)
        
        removed = initial_count - len(self.clean_df)
        self.cleaning_log.append(f"Təkrar patient-lər silindi: {removed} qeyd")
        
        return self
    
    def handle_missing_values(self, strategy='mixed'):
        """
        Null dəyərləri idarə et
        strategy: 'mixed' (yaş: orta, temperatur: median, notes: 'No notes')
        """
        print("\\n🕳️ Null dəyərlər idarə edilir...")
        
        if strategy == 'mixed':
            # Yaş: orta ilə
            self.clean_df['age'] = self.clean_df['age'].fillna(
                self.clean_df['age'].mean()
            )
            
            # Temperatur: median ilə
            self.clean_df['temperature_c'] = self.clean_df['temperature_c'].fillna(
                self.clean_df['temperature_c'].median()
            )
            
            # Doctor notes: xüsusi mətn
            self.clean_df['doctor_notes'] = self.clean_df['doctor_notes'].fillna(
                'No medical notes available'
            )
            
            # Gender: moda ilə
            mode_gender = self.clean_df['gender'].mode()[0] if not self.clean_df['gender'].mode().empty else 'Unknown'
            self.clean_df['gender'] = self.clean_df['gender'].fillna(mode_gender)
        
        remaining_nulls = self.clean_df.isnull().sum().sum()
        self.cleaning_log.append(f"Null dəyərlər dolduruldu. Qalan null: {remaining_nulls}")
        
        return self
    
    def generate_diagnosis_stats(self):
        """Diagnoz kodları üzrə statistika"""
        print("\\n📊 Diagnoz statistikası hesablanır...")
        
        stats = self.clean_df.groupby('diagnosis_code').agg({
            'age': ['mean', 'std', 'min', 'max'],
            'temperature_c': ['mean', 'std'],
            'heart_rate': ['mean', 'std', 'min', 'max'],
            'patient_id': 'count'
        }).round(2)
        
        stats.columns = ['_'.join(col).strip() for col in stats.columns]
        stats = stats.rename(columns={'patient_id_count': 'patient_count'})
        
        return stats
    
    def save_clean_versions(self, output_prefix='hospital_clean'):
        """3 fərqli strategiya ilə yadda saxla"""
        print("\\n💾 Təmiz data saxlanılır...")
        
        strategies = {
            'conservative': self.clean_df.copy(),  # Minimal dəyişiklik
            'moderate': self.clean_df.copy(),      # Orta səviyyəli
            'aggressive': self.clean_df.copy()     # Maksimum təmizlik
        }
        
        # Conservative: Yalnız kritik düzəlişlər
        # (Bu versiyada daha az silmə, daha çox doldurma)
        
        # Aggressive: Outlier-ları sil, null-ları interpolation ilə doldur
        aggressive = strategies['aggressive']
        for col in ['systolic', 'diastolic', 'heart_rate']:
            aggressive[col] = aggressive[col].interpolate(method='linear')
        
        # Saxla
        for name, df in strategies.items():
            filename = f"{output_prefix}_{name}.csv"
            df.to_csv(filename, index=False)
            print(f"  ✅ {filename}: {len(df):,} qeyd")
        
        # Cleaning log-u da saxla
        with open(f"{output_prefix}_log.txt", 'w') as f:
            f.write("\\n".join(self.cleaning_log))
        
        return self
    
    def full_cleaning_pipeline(self, age_strategy='clip', missing_strategy='mixed'):
        """Tam təmizləmə pipeline-ı"""
        return (self
                .load_data()
                .clean_age(strategy=age_strategy)
                .parse_blood_pressure()
                .convert_temperature()
                .standardize_text_columns()
                .parse_dates()
                .remove_duplicates(keep='last')
                .handle_missing_values(strategy=missing_strategy))

# İstifadə
if __name__ == "__main__":
    cleaner = HospitalDataCleaner('hospital_data.csv')
    
    # Tam pipeline işlət
    cleaner.full_cleaning_pipeline(age_strategy='clip', missing_strategy='mixed')
    
    # Statistikalar
    diagnosis_stats = cleaner.generate_diagnosis_stats()
    print("\\n📋 Ən çox rast gəlinən diagnozlar:")
    print(diagnosis_stats.sort_values('patient_count', ascending=False).head())
    
    # Saxla
    cleaner.save_clean_versions('hospital_2024')`,
  },

  quiz: [
    {
      question: "df.isnull().sum() nə edir?",
      options: ["Bütün dəyərləri toplayır", "Hər sütunda neçə null olduğunu göstərir", "DataFrame-in ölçüsünü verir", "Təkrarlanan sətirləri sayır"],
      correctAnswer: 1
    },
    {
      question: "Null dəyərləri median ilə doldurmaq üçün hansı metod istifadə olunur?",
      options: ["df.fillna(df.mean())", "df.fillna(df.median())", "df.dropna()", "df.replace()"],
      correctAnswer: 1
    },
    {
      question: "df.dropna(how='all') nə edir?",
      options: ["Bütün sətirləri silir", "Yalnız bütün dəyərləri null olan sətirləri silir", "Yalnız bir null olan sətirləri silir", "Sütunları silir"],
      correctAnswer: 1
    },
    {
      question: "IQR metodunda outlier-lar necə müəyyən edilir?",
      options: ["Q1 - 1.5×IQR və Q3 + 1.5×IQR kənarları", "Ortadan 2 standart meyl uzaq", "Median ± 10%", "Min və max dəyərlər"],
      correctAnswer: 0
    },
    {
      question: "Təkrarlanan sətirləri saxlamaq üçün hansı parameter istifadə olunur?",
      options: ["subset", "keep", "inplace", "ignore"],
      correctAnswer: 1
    },
    {
      question: "pd.to_numeric(errors='coerce') nə edir?",
      options: ["Rəqəmləri string-ə çevirir", "Çevrilə bilməyənləri NaN edir", "Xəta atır", "Otomatik tip seçir"],
      correctAnswer: 1
    },
    {
      question: "df['col'].interpolate() nə edir?",
      options: ["Null-ları silir", "Null-ları əvvəlki dəyərlə doldurur", "Xətti interpolasiya ilə doldurur", "Median ilə doldurur"],
      correctAnswer: 2
    },
    {
      question: "String sütununda boşluqları silmək üçün hansı metod istifadə olunur?",
      options: ["trim()", "strip()", "clean()", "remove()"],
      correctAnswer: 1
    },
    {
      question: "df.melt() funksiyası nə edir?",
      options: ["DataFrame-i genişdən uzun formatına çevirir", "Sətirləri sütunlara çevirir", "Təkrarları silir", "Null-ları doldurur"],
      correctAnswer: 0
    },
    {
      question: "Z-score metodunda ümumiyyətlə hansı threshold istifadə olunur?",
      options: ["1", "2", "3", "5"],
      correctAnswer: 2
    }
  ]
};

export default topicai17;