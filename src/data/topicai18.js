export const topicai18 = {
  id: 18,
  title: "Pandas: GroupBy və Pivot Tables",
  duration: "120 dəq",
  isFree: false,
  
  content: `
    <h4>📚 Qruplaşdırma Nədir və Nə Üçün Lazımdır?</h4>
    <p>Təsəvvür edin ki, sizdə 10,000 tələbənin imtahan nəticələri olan bir cədvəl var. Bu qədər məlumatı tək-tək analiz etmək çox çətindir. İşte buna görə <strong>GroupBy</strong> (Qruplaşdırma) mövcuddur. Bu funksiya bizə məlumatları kateqoriyalar üzrə birləşdirib, hər qrup haqqında ümumi statistika görməyə imkan verir.</p>
    
    <p>Misal üçün: Bütün tələbələr yox, <strong>hər sinifin orta balını</strong> görmək istəyirsinizsə, GroupBy istifadə edirsiniz.</p>

    <h4>🔄 GroupBy-un Əsas Prinsipi: Split-Apply-Combine</h4>
    <p>Pandas-da qruplaşdırma üç addımda baş verir:</p>
    <ol>
      <li><strong>Split (Bölmək):</strong> Məlumatları seçilmiş sütuna görə qruplara ayırır</li>
      <li><strong>Apply (Tətbiq etmək):</strong> Hər qrupa müəyyən əməliyyat tətbiq edir (ortalama, toplama, sayma və s.)</li>
      <li><strong>Combine (Birləşdirmək):</strong> Nəticələri yeni bir cədvəldə birləşdirir</li>
    </ol>

    <h4>🎯 Əsas GroupBy Sintaksisi</h4>
    <p>Ən sadə formada GroupBy belə işləyir:</p>
    
    <pre><code>import pandas as pd

# Məlumatları oxuyaq
df = pd.read_csv('telebeler.csv')

# Cinsiyyətə görə qruplaşdıraq
qruplar = df.groupby('cinsiyyet')

# Hər qrupun orta yaşını görək
print(qruplar['yas'].mean())</code></pre>

    <p>Burada baş verənlər:</p>
    <ul>
      <li><code>groupby('cinsiyyet')</code> - məlumatları 'cinsiyyet' sütununa görə qruplara ayırır</li>
      <li><code>['yas']</code> - yalnız 'yas' sütunu üzərində işləyəcəyik</li>
      <li><code>.mean()</code> - hər qrupun orta dəyərini hesablayır</li>
    </ul>

    <h4>📊 Əsas Aggregation (Yığım) Funksiyaları</h4>
    <p>GroupBy ilə istifadə edilə bilən əsas funksiyalar:</p>
    
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">Funksiya</th>
        <th style="padding: 12px;">Təsvir</th>
        <th style="padding: 12px;">Misal</th>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>.count()</code></td>
        <td style="padding: 10px;">Boş olmayan dəyərlərin sayı</td>
        <td style="padding: 10px;">Hər qrupla neçə tələbə var</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>.sum()</code></td>
        <td style="padding: 10px;">Toplama</td>
        <td style="padding: 10px;">Hər qrupun ümumi balı</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>.mean()</code></td>
        <td style="padding: 10px;">Ədədi orta</td>
        <td style="padding: 10px;">Orta bal</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>.median()</code></td>
        <td style="padding: 10px;">Median (orta nöqtə)</td>
        <td style="padding: 10px;">Balın orta dəyəri</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>.min()</code> / <code>.max()</code></td>
        <td style="padding: 10px;">Minimum / Maksimum</td>
        <td style="padding: 10px;">Ən yüksək və ən aşağı bal</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><code>.std()</code></td>
        <td style="padding: 10px;">Standart meyl</td>
        <td style="padding: 10px;">Balın yayılma dərəcəsi</td>
      </tr>
    </table>

    <h4>🔍 Praktiki Misallar</h4>
    
    <p><strong>1. Sadə Qruplaşdırma</strong></p>
    <pre><code># Tələbə məlumatları
data = {
    'ad': ['Əli', 'Leyla', 'Səməd', 'Aysel', 'Murad'],
    'sinif': ['10A', '10B', '10A', '10B', '10A'],
    'bal': [85, 92, 78, 88, 95]
}
df = pd.DataFrame(data)

# Siniflərə görə orta bal
sinif_ortalamasi = df.groupby('sinif')['bal'].mean()
print(sinif_ortalamasi)

# Nəticə:
# sinif
# 10A    86.0
# 10B    90.0</code></pre>

    <p><strong>2. Çoxlu Sütun Üzrə Qruplaşdırma</strong></p>
    <pre><code># Bir neçə sütuna görə qruplaşdırma
netice = df.groupby(['sinif', 'cinsiyyet'])['bal'].mean()

# Və ya birdən çox aggregation
netice = df.groupby('sinif').agg({
    'bal': ['mean', 'max', 'min'],
    'yas': 'mean'
})</code></pre>

    <p><strong>3. agg() ilə Çoxlu Əməliyyatlar</strong></p>
    <p>Bir qrupa eyni anda bir neçə hesablama əməliyyatı tətbiq etmək üçün <code>agg()</code> istifadə edirik:</p>
    
    <pre><code>statistika = df.groupby('sinif').agg({
    'bal': ['count', 'mean', 'max', 'min'],
    'davamiyyet': 'sum'
})

# Sütun adlarını sadələşdirmək
statistika.columns = ['say', 'orta_bal', 'max_bal', 'min_bal', 'umumi_davamiyyet']</code></pre>

    <h4>🔄 Pivot Table (Dönmə Cədvəli) Nədir?</h4>
    <p>Pivot Table - Excel-dən tanış olduğumuz, məlumatları sətir və sütunlar şəklində yenidən təşkil edən güclü alətdir. Bu, məlumatların müqayisəsini asanlaşdırır.</p>
    
    <p><strong>Fərq:</strong></p>
    <ul>
      <li><strong>GroupBy:</strong> Uzun formatda nəticə verir (sətirlər üzrə)</li>
      <li><strong>Pivot Table:</strong> Geniş formatda, matris şəklində nəticə verir</li>
    </ul>

    <h4>📐 Pivot Table Sintaksisi</h4>
    <pre><code># Əsas sintaksis
pivot = pd.pivot_table(
    df,                    # Məlumat çərçivəsi
    values='bal',          # Hansı sütunu hesablayacağıq
    index='sinif',         # Sətir olaraq nə olacaq
    columns='fenn',        # Sütun olaraq nə olacaq
    aggfunc='mean'         # Hansı əməliyyat (default: mean)
)</code></pre>

    <h4>🎨 Pivot Table Nümunələri</h4>
    
    <p><strong>1. Sadə Pivot Table</strong></p>
    <pre><code># Hər sinifdə hər fənnin orta balı
pivot = pd.pivot_table(
    df,
    values='bal',
    index='sinif',
    columns='fenn',
    aggfunc='mean'
)

# Nəticə:
# fenn     Riyaziyyat  Fizika  Kimya
# sinif
# 10A         85.5     82.0   88.0
# 10B         90.2     87.5   85.0</code></pre>

    <p><strong>2. Çoxlu Index və Aggregation</strong></p>
    <pre><code># Bir neçə sətir sütunu
pivot = pd.pivot_table(
    df,
    values='bal',
    index=['sinif', 'cinsiyyet'],  # İki səviyyəli sətir
    columns='fenn',
    aggfunc=['mean', 'max']         # İki fərqli hesablama
)</code></pre>

    <p><strong>3. Boş Dəyərləri Doldurmaq</strong></p>
    <pre><code># NaN dəyərləri 0 ilə əvəz et
pivot = pd.pivot_table(
    df,
    values='bal',
    index='sinif',
    columns='fenn',
    aggfunc='mean',
    fill_value=0       # Boş yerleri 0 ilə doldur
)</code></pre>

    <p><strong>4. Ümumi Cəmlər (Margins)</strong></p>
    <pre><code># Cəmi sətir və sütunlar əlavə et
pivot = pd.pivot_table(
    df,
    values='bal',
    index='sinif',
    columns='fenn',
    aggfunc='mean',
    margins=True,          # Ümumi cəmləri göstər
    margins_name='Ümumi'   # Başlıq adı
)</code></pre>

    <h4>⚡ GroupBy vs Pivot Table - Nə Vaxt Hansını İstifadə Etməli?</h4>
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">Vəziyyət</th>
        <th style="padding: 12px;">Tövsiyə</th>
        <th style="padding: 12px;">Səbəb</th>
      </tr>
      <tr>
        <td style="padding: 10px;">Sadə statistika lazımdırsa</td>
        <td style="padding: 10px;">GroupBy</td>
        <td style="padding: 10px;">Daha sürətli, az kod</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Matris formatında müqayisə</td>
        <td style="padding: 10px;">Pivot Table</td>
        <td style="padding: 10px;">Vizual olaraq aydın</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Bir neçə aggregation</td>
        <td style="padding: 10px;">GroupBy + agg()</td>
        <td style="padding: 10px;">Daha çevik</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Excelə export etmək</td>
        <td style="padding: 10px;">Pivot Table</td>
        <td style="padding: 10px;">Excel formatına uyğun</td>
      </tr>
    </table>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə <code>groupby()</code>-dan sonra aggregation funksiyası çağırın (yoxsa GroupBy obyekti qaytarar)</li>
      <li>Çox böyük məlumat dəstlərində <code>as_index=False</code> istifadə edin (DataFrame formatında saxlayır)</li>
      <li>Pivot Table-da <code>fill_value</code> istifadə edin ki, NaN dəyərlər çaşdırmasın</li>
      <li>Mürəkkəb analizlər üçün GroupBy və Pivot Table-ı birləşdirin</li>
      <li><code>reset_index()</code> ilə GroupBy nəticəsini adi DataFrame-ə çevirə bilərsiniz</li>
    </ul>

    <h4>🚀 İrəli Səviyyə Texnikalar</h4>
    <pre><code># Transform - qrup ortalamasını hər sətirə əlavə etmək
df['sinif_ort'] = df.groupby('sinif')['bal'].transform('mean')

# Filter - yalnız müəyyən şərti ödəyən qrupları saxlamaq
boyuk_qruplar = df.groupby('sinif').filter(lambda x: len(x) > 5)

# Apply - xüsusi funksiya tətbiq etmək
def normalize(x):
    return (x - x.min()) / (x.max() - x.min())

df['normal_bal'] = df.groupby('sinif')['bal'].apply(normalize)</code></pre>
  `,

  starterCode: {
    html: `<div class="pandas-groupby">
  <h2>📊 Pandas GroupBy & Pivot Table Lab</h2>
  
  <section class="demo-section">
    <h3>1. GroupBy Simulyatoru</h3>
    <div class="groupby-sim">
      <div class="data-preview">
        <h4>Məlumat Cədvəli:</h4>
        <table id="sourceTable">
          <thead>
            <tr>
              <th>Ad</th>
              <th>Sinif</th>
              <th>Fənn</th>
              <th>Bal</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            <tr><td>Əli</td><td>10A</td><td>Riyaz</td><td>85</td></tr>
            <tr><td>Leyla</td><td>10B</td><td>Riyaz</td><td>92</td></tr>
            <tr><td>Səməd</td><td>10A</td><td>Fizika</td><td>78</td></tr>
            <tr><td>Aysel</td><td>10B</td><td>Fizika</td><td>88</td></tr>
            <tr><td>Murad</td><td>10A</td><td>Riyaz</td><td>95</td></tr>
            <tr><td>Nigar</td><td>10B</td><td>Riyaz</td><td>82</td></tr>
          </tbody>
        </table>
      </div>
      
      <div class="controls">
        <label>GroupBy sütunu:</label>
        <select id="groupCol">
          <option value="sinif">Sinif</option>
          <option value="fenn">Fənn</option>
        </select>
        
        <label>Aggregation:</label>
        <select id="aggFunc">
          <option value="mean">Orta (mean)</option>
          <option value="sum">Toplam (sum)</option>
          <option value="count">Say (count)</option>
          <option value="max">Maksimum (max)</option>
          <option value="min">Minimum (min)</option>
        </select>
        
        <button onclick="runGroupBy()">Tətbiq Et</button>
      </div>
      
      <div class="result-area" id="groupbyResult">
        <div class="code-show">df.groupby('<span class="param">sinif</span>')['bal'].<span class="func">mean</span>()</div>
        <div class="output" id="groupbyOutput">Nəticə burada görünəcək...</div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Pivot Table Builder</h3>
    <div class="pivot-builder">
      <div class="pivot-controls">
        <div class="control-group">
          <label>Values (Dəyərlər):</label>
          <select id="pivotValues">
            <option value="bal">Bal</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Index (Sətir):</label>
          <select id="pivotIndex">
            <option value="sinif">Sinif</option>
            <option value="fenn">Fənn</option>
            <option value="ad">Ad</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Columns (Sütun):</label>
          <select id="pivotColumns">
            <option value="fenn">Fənn</option>
            <option value="sinif">Sinif</option>
            <option value="">(Yoxdur)</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>Aggregation:</label>
          <select id="pivotAgg">
            <option value="mean">mean</option>
            <option value="sum">sum</option>
            <option value="count">count</option>
          </select>
        </div>
        
        <button onclick="buildPivot()">Pivot Table Yarat</button>
      </div>
      
      <div class="pivot-result" id="pivotResult">
        <div class="python-code" id="pivotCode">pd.pivot_table(df, values='bal', index='sinif', columns='fenn', aggfunc='mean')</div>
        <div class="pivot-table-display" id="pivotDisplay"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Split-Apply-Combine Vizualizasiyası</h3>
    <div class="split-apply-combine">
      <div class="steps">
        <div class="step" id="step1">
          <h4>1. SPLIT (Bölmə)</h4>
          <div class="viz-area" id="splitViz"></div>
          <p>Məlumatlar qruplara ayrılır</p>
        </div>
        <div class="arrow">→</div>
        <div class="step" id="step2">
          <h4>2. APPLY (Tətbiq)</h4>
          <div class="viz-area" id="applyViz"></div>
          <p>Hər qrupa əməliyyat tətbiq edilir</p>
        </div>
        <div class="arrow">→</div>
        <div class="step" id="step3">
          <h4>3. COMBINE (Birləşdirmə)</h4>
          <div class="viz-area" id="combineViz"></div>
          <p>Nəticələr birləşdirilir</p>
        </div>
      </div>
      <button onclick="animateProcess()">Prosesi Göstər</button>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Real Data Analizi</h3>
    <div class="real-analysis">
      <p>Supermarket satış məlumatları üzərində praktika:</p>
      <div class="scenario-tabs">
        <button onclick="loadScenario('sales')" class="tab-btn active">Satış Analizi</button>
        <button onclick="loadScenario('category')" class="tab-btn">Kateqoriya</button>
        <button onclick="loadScenario('time')" class="tab-btn">Zaman</button>
      </div>
      <div class="scenario-content" id="scenarioContent">
        <div class="task" id="analysisTask">
          <h4>Vəzifə: Hər bölmənin ümumi satışını tapın</h4>
          <div class="hint">İpucu: df.groupby('bolme')['satish'].sum()</div>
        </div>
        <div class="interactive-data" id="salesData"></div>
        <div class="user-input-area">
          <input type="text" id="userCode" placeholder="Python kodunuzu yazın...">
          <button onclick="checkAnswer()">Yoxla</button>
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
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.pandas-groupby {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #ffd700;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

h3 {
  color: #00ff88;
  margin-bottom: 20px;
  font-size: 24px;
  border-left: 4px solid #00ff88;
  padding-left: 15px;
}

h4 {
  color: #ff6b6b;
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

/* Table Styles */
.data-preview table {
  width: 100%;
  border-collapse: collapse;
  background: #0d1117;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.data-preview th {
  background: #30363d;
  color: #00ff88;
  padding: 12px;
  text-align: left;
  font-weight: 600;
}

.data-preview td {
  padding: 10px 12px;
  border-bottom: 1px solid #30363d;
}

.data-preview tr:hover {
  background: rgba(0, 255, 136, 0.1);
}

/* Controls */
.controls, .pivot-controls {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  color: #ffd700;
  font-weight: 600;
  font-size: 14px;
}

select {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px 15px;
  border-radius: 6px;
  min-width: 150px;
  cursor: pointer;
}

select:hover {
  border-color: #00ff88;
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
  align-self: flex-end;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 136, 0.4);
}

/* Result Areas */
.result-area, .pivot-result {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  border-left: 4px solid #00ff88;
}

.code-show, .python-code {
  font-family: 'Fira Code', monospace;
  color: #ff6b6b;
  margin-bottom: 15px;
  padding: 10px;
  background: #1a1a2e;
  border-radius: 6px;
  font-size: 14px;
}

.param { color: #ffd700; }
.func { color: #00ff88; }

.output, .pivot-table-display {
  font-family: 'Fira Code', monospace;
  color: #7ee787;
  white-space: pre-wrap;
  line-height: 1.8;
}

/* Pivot Table Display */
.pivot-table-display table {
  width: 100%;
  margin-top: 15px;
  border-collapse: collapse;
}

.pivot-table-display th, .pivot-table-display td {
  border: 1px solid #30363d;
  padding: 10px;
  text-align: center;
}

.pivot-table-display th {
  background: #30363d;
  color: #ffd700;
}

.pivot-table-display td:first-child {
  background: #1a1a2e;
  color: #00ff88;
  font-weight: bold;
}

/* Split-Apply-Combine */
.split-apply-combine .steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 30px 0;
}

.step {
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s;
}

.step.active {
  border-color: #00ff88;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}

.arrow {
  font-size: 30px;
  color: #ffd700;
  font-weight: bold;
}

.viz-area {
  min-height: 150px;
  background: #0d1117;
  border-radius: 8px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}

.group-box {
  background: #30363d;
  padding: 8px 15px;
  border-radius: 6px;
  margin: 5px;
  display: inline-block;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Real Analysis */
.scenario-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tab-btn {
  background: #30363d;
  border: 2px solid transparent;
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-btn.active, .tab-btn:hover {
  border-color: #00ff88;
  color: #00ff88;
}

.task {
  background: rgba(255, 107, 107, 0.1);
  border-left: 4px solid #ff6b6b;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 20px;
}

.hint {
  color: #ffd700;
  font-style: italic;
  margin-top: 10px;
  font-size: 14px;
}

.user-input-area {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.user-input-area input {
  flex: 1;
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
}

.correct { border-color: #00ff88 !important; color: #00ff88 !important; }
.wrong { border-color: #ff6b6b !important; color: #ff6b6b !important; }

@media (max-width: 768px) {
  body { padding: 20px; }
  .split-apply-combine .steps { flex-direction: column; }
  .arrow { transform: rotate(90deg); }
  .controls, .pivot-controls { flex-direction: column; align-items: stretch; }
}`,

    js: `// GroupBy & Pivot Table Lab
const sampleData = [
  {ad: 'Əli', sinif: '10A', fenn: 'Riyaz', bal: 85},
  {ad: 'Leyla', sinif: '10B', fenn: 'Riyaz', bal: 92},
  {ad: 'Səməd', sinif: '10A', fenn: 'Fizika', bal: 78},
  {ad: 'Aysel', sinif: '10B', fenn: 'Fizika', bal: 88},
  {ad: 'Murad', sinif: '10A', fenn: 'Riyaz', bal: 95},
  {ad: 'Nigar', sinif: '10B', fenn: 'Riyaz', bal: 82}
];

function runGroupBy() {
  const groupCol = document.getElementById('groupCol').value;
  const aggFunc = document.getElementById('aggFunc').value;
  const output = document.getElementById('groupbyOutput');
  const codeShow = document.querySelector('.code-show');
  
  // Update code display
  codeShow.innerHTML = \`df.groupby('<span class="param">\${groupCol}</span>')['bal'].<span class="func">\${aggFunc}</span>()\`;
  
  // Perform calculation
  const groups = {};
  sampleData.forEach(row => {
    const key = row[groupCol];
    if (!groups[key]) groups[key] = [];
    groups[key].push(row.bal);
  });
  
  let result = '';
  for (const [group, values] of Object.entries(groups)) {
    let value;
    switch(aggFunc) {
      case 'mean':
        value = (values.reduce((a,b) => a+b, 0) / values.length).toFixed(1);
        break;
      case 'sum':
        value = values.reduce((a,b) => a+b, 0);
        break;
      case 'count':
        value = values.length;
        break;
      case 'max':
        value = Math.max(...values);
        break;
      case 'min':
        value = Math.min(...values);
        break;
    }
    result += \`\${group}: \${value}\\\\n\`;
  }
  
  output.textContent = result || 'Nəticə...';
  output.style.animation = 'fadeIn 0.5s ease';
}

function buildPivot() {
  const values = document.getElementById('pivotValues').value;
  const index = document.getElementById('pivotIndex').value;
  const columns = document.getElementById('pivotColumns').value;
  const agg = document.getElementById('pivotAgg').value;
  
  const codeDiv = document.getElementById('pivotCode');
  const display = document.getElementById('pivotDisplay');
  
  // Generate Python code
  let code = \`pd.pivot_table(df, values='\${values}', index='\${index}'\`;
  if (columns) code += \`, columns='\${columns}'\`;
  code += \`, aggfunc='\${agg}')\`;
  codeDiv.textContent = code;
  
  // Create pivot visualization
  // Group by index
  const indexGroups = {};
  sampleData.forEach(row => {
    const idx = row[index];
    if (!indexGroups[idx]) indexGroups[idx] = {};
    
    if (columns) {
      const col = row[columns];
      if (!indexGroups[idx][col]) indexGroups[idx][col] = [];
      indexGroups[idx][col].push(row[values]);
    } else {
      if (!indexGroups[idx]['values']) indexGroups[idx]['values'] = [];
      indexGroups[idx]['values'].push(row[values]);
    }
  });
  
  // Calculate aggregations
  const colNames = columns ? [...new Set(sampleData.map(r => r[columns]))] : ['values'];
  
  let html = '<table><thead><tr><th>' + index + '</th>';
  colNames.forEach(col => {
    html += '<th>' + col + '</th>';
  });
  html += '</tr></thead><tbody>';
  
  for (const [idx, cols] of Object.entries(indexGroups)) {
    html += '<tr><td>' + idx + '</td>';
    colNames.forEach(col => {
      const vals = cols[col] || [];
      let val;
      if (vals.length === 0) val = 'NaN';
      else {
        switch(agg) {
          case 'mean': val = (vals.reduce((a,b) => a+b,0)/vals.length).toFixed(1); break;
          case 'sum': val = vals.reduce((a,b) => a+b,0); break;
          case 'count': val = vals.length; break;
        }
      }
      html += '<td>' + val + '</td>';
    });
    html += '</tr>';
  }
  html += '</tbody></table>';
  
  display.innerHTML = html;
}

function animateProcess() {
  const steps = ['step1', 'step2', 'step3'];
  const vizAreas = ['splitViz', 'applyViz', 'combineViz'];
  
  // Reset
  steps.forEach(id => document.getElementById(id).classList.remove('active'));
  
  // Step 1: Split
  setTimeout(() => {
    document.getElementById('step1').classList.add('active');
    document.getElementById('splitViz').innerHTML = 
      '<div class="group-box">10A: [85, 78, 95]</div>' +
      '<div class="group-box">10B: [92, 88, 82]</div>';
  }, 500);
  
  // Step 2: Apply
  setTimeout(() => {
    document.getElementById('step2').classList.add('active');
    document.getElementById('applyViz').innerHTML = 
      '<div class="group-box">10A: mean = 86.0</div>' +
      '<div class="group-box">10B: mean = 87.3</div>';
  }, 1500);
  
  // Step 3: Combine
  setTimeout(() => {
    document.getElementById('step3').classList.add('active');
    document.getElementById('combineViz').innerHTML = 
      '<table style="width:80%">' +
      '<tr><th>Sinif</th><th>Orta Bal</th></tr>' +
      '<tr><td>10A</td><td>86.0</td></tr>' +
      '<tr><td>10B</td><td>87.3</td></tr>' +
      '</table>';
  }, 2500);
}

function loadScenario(type) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const task = document.getElementById('analysisTask');
  const data = document.getElementById('salesData');
  
  if (type === 'sales') {
    task.innerHTML = '<h4>Vəzifə: Hər bölmənin ümumi satışını tapın</h4><div class="hint">İpucu: df.groupby(\\'bolme\\')[\\'satish\\'].sum()</div>';
    data.innerHTML = '<pre>Bolme: Elektronika, Mebel, Geyim\\\\nSatish: 15000, 23000, 18000</pre>';
  } else if (type === 'category') {
    task.innerHTML = '<h4>Vəzifə: Hər kateqoriyanın orta qiymətini tapın</h4><div class="hint">İpucu: df.groupby(\\'kateqoriya\\')[\\'qiymet\\'].mean()</div>';
  } else {
    task.innerHTML = '<h4>Vəzifə: Aylara görə satışların cəmini Pivot Table ilə göstərin</h4><div class="hint">İpucu: pd.pivot_table(df, values=\\'satish\\', index=\\'ay\\', columns=\\'il\\')</div>';
  }
}

function checkAnswer() {
  const input = document.getElementById('userCode');
  const code = input.value.trim();
  
  // Simple validation
  if (code.includes('groupby') && (code.includes('sum') || code.includes('mean'))) {
    input.classList.remove('wrong');
    input.classList.add('correct');
    alert('✅ Düzgün! GroupBy istifadəsi doğrudur.');
  } else {
    input.classList.remove('correct');
    input.classList.add('wrong');
    alert('❌ Yenidən cəhd edin. GroupBy sintaksisini yoxlayın.');
  }
}

// Initialize
console.log('GroupBy Lab loaded!');`
  },

  exercise: {
    title: "🏪 Supermarket Satış Analizi Sistemi",
    description: "Böyük bir supermarket şəbəkəsinin satış məlumatlarını analiz edən tam funksional sistem yaradın. GroupBy və Pivot Table istifadə edərək müxtəlif bucaqlardan analiz aparın.",
    requirements: [
      "CSV fayldan supermarket məlumatlarını oxuyun (Bolme, Kateqoriya, Məhsul, SatışMəbləği, Tarix, MüştəriSayı)",
      "Hər bölmənin (Elektronika, Geyim, Ərzaq) aylıq ümumi satışını GroupBy ilə hesablayın",
      "Hər kateqoriyanın orta məhsul qiymətini və ümumi gəlirini tapın (agg() istifadə edin)",
      "Pivot Table yaradın: Sətirlərdə Bölmələr, Sütunlarda Aylar, Dəyərlərdə SatışMəbləği (cəmi)",
      "Ən çox satış olan 3 məhsulu tapın (groupby + sort_values)",
      "Hər bölmənin müştəri başına orta satışını hesablayın (transform istifadə edin)",
      "NaN dəyərləri olan Pivot Table-da fill_value=0 istifadə edin",
      "Nəticələri Excel faylına export edin (to_excel)"
    ],
    starterCode: `import pandas as pd
import numpy as np

# Supermarket satış məlumatları
data = {
    'Tarix': ['2024-01-15', '2024-01-16', '2024-02-10', '2024-02-15', 
              '2024-03-01', '2024-03-20', '2024-01-10', '2024-02-05'],
    'Bolme': ['Elektronika', 'Elektronika', 'Geyim', 'Geyim', 
              'Ərzaq', 'Ərzaq', 'Elektronika', 'Geyim'],
    'Kateqoriya': ['Telefon', 'Kompüter', 'Köynək', 'Şalvar', 
                   'Meyvə', 'Ət', 'Planşet', 'Ayaqqabı'],
    'Mehsul': ['iPhone', 'Asus', 'Nike', 'Levis', 
               'Alma', 'Dana', 'Samsung', 'Adidas'],
    'SatisMeblegi': [2500, 1800, 120, 85, 45, 120, 800, 150],
    'MusteriSayi': [5, 3, 12, 8, 20, 15, 2, 10]
}

df = pd.DataFrame(data)

# 1. Tarix sütununu datetime formatına çevirin və Ay adlı yeni sütun yaradın
# Kodunuzu bura yazın...

# 2. Hər bölmənin ümumi satışını hesablayın
# Kodunuzu bura yazın...

# 3. Hər kateqoriya üzrə orta satış və toplam müştəri sayı (agg istifadə edin)
# Kodunuzu bura yazın...

# 4. Pivot Table: Bölmələr x Aylar
# Kodunuzu bura yazın...

# 5. Ən çox satılan 3 məhsul
# Kodunuzu bura yazın...

# 6. Hər bölmənin müştəri başına orta satışı (transform)
# Kodunuzu bura yazın...

# 7. Nəticələri çap edin və Excel-ə yazın
# df.to_excel('analiz_netice.xlsx', index=False)`,
  },

  quiz: [
    {
      question: "df.groupby('sinif')['bal'].mean() nə edir?",
      options: ["Hər sinifin maksimum balını tapar", "Hər sinifin orta balını hesablayır", "Sinifləri sıralayır", "Xəta verir"],
      correctAnswer: 1
    },
    {
      question: "GroupBy-un üç əsas addımı hansılardır?",
      options: ["Filter-Sort-Group", "Split-Apply-Combine", "Map-Reduce-Filter", "Load-Transform-Save"],
      correctAnswer: 1
    },
    {
      question: "Bir neçə aggregation funksiyası eyni anda necə tətbiq edilir?",
      options: ["multiple()", "agg()", "combine()", "apply_all()"],
      correctAnswer: 1
    },
    {
      question: "Pivot Table-da hansı parametr sətirləri müəyyən edir?",
      options: ["columns", "values", "index", "rows"],
      correctAnswer: 2
    },
    {
      question: "pd.pivot_table() default olaraq hansı funksiyanı istifadə edir?",
      options: ["sum", "count", "mean", "max"],
      correctAnswer: 2
    },
    {
      question: "Boş dəyərləri Pivot Table-da 0 ilə əvəz etmək üçün hansı parametr istifadə olunur?",
      options: ["fillna", "replace", "fill_value", "default"],
      correctAnswer: 2
    },
    {
      question: "GroupBy nəticəsini DataFrame formatında saxlamaq üçün nə etməli?",
      options: ["as_index=False", "reset_index()", "Hər ikisi", "Bu mümkün deyil"],
      correctAnswer: 2
    },
    {
      question: "Ümumi cəmlər (totals) əlavə etmək üçün hansı parametr istifadə olunur?",
      options: ["totals=True", "margins=True", "sum=True", "all=True"],
      correctAnswer: 1
    },
    {
      question: "transform() funksiyası nə üçün istifadə olunur?",
      options: ["DataFrame-i dəyişmək üçün", "Qrup statistikasını orijinal formata tətbiq etmək üçün", "Sütunları yenidən adlandırmaq üçün", "Məlumatları filtrləmək üçün"],
      correctAnswer: 1
    },
    {
      question: "Aşağıdakılardan hansı GroupBy aggregation funksiyası DEYIL?",
      options: ["mean()", "sum()", "sort()", "count()"],
      correctAnswer: 2
    }
  ]
};

export default topicai18;