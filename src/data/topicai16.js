export const topicai16 = {
  id: 16,
  title: "Pandas: DataFrame strukturu",
  duration: "130 dəq",
  isFree: false,
  
  content: `
    <h4>🐼 Pandas Nədir?</h4>
    <p><strong>Pandas</strong> - Python-un ən güclü <strong>data manipulation</strong> və <strong>data analysis</strong> kitabxanasıdır. "Panel Data" sözündən yaranıb və strukturlaşdırılmış məlumatlarla işləmək üçün nəzərdə tutulub.</p>

    <p>Pandas ilə Excel cədvəlləri, SQL databazaları, CSV faylları və hətta vaxt seriyaları ilə asanlıqla işləyə bilərsiniz. Data Science-in <strong>fundamental alətidir</strong>.</p>

    <h4>📦 Quraşdırma və İmport</h4>
    <pre><code># Quraşdırma
pip install pandas

# İmport - adətən pd adı ilə
import pandas as pd
import numpy as np

# Versiya yoxlamaq
print(pd.__version__)</code></pre>

    <h4>🔢 Əsas Data Strukturları</h4>

    <p><strong>1. Series (Birsətirli Datalar)</strong></p>
    <p>NumPy massivinə bənzəyir, amma <strong>indeksləri</strong> var.</p>

    <pre><code># Series yaratmaq
s = pd.Series([10, 20, 30, 40, 50])
print(s)
# 0    10
# 1    20
# 2    30
# 3    40
# 4    50
# dtype: int64

# Özəl indeks
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s['b'])  # 20

# Dictionary-dən Series
mehsul_qiymetleri = pd.Series({
    'alma': 2.5,
    'armud': 3.0,
    'banan': 4.5
})</code></pre>

    <p><strong>2. DataFrame (Cədvəl Strukturu)</strong></p>
    <p>Pandas-in əsas data strukturu. Excel cədvəlinə bənzəyir - <strong>sətirlər və sütunlar</strong>.</p>

    <pre><code># DataFrame yaratmaq
data = {
    'Ad': ['Ali', 'Leyla', 'Səməd', 'Nigar'],
    'Yaş': [25, 30, 22, 28],
    'Şəhər': ['Bakı', 'Gəncə', 'Sumqayıt', 'Bakı'],
    'Maaş': [1500, 2200, 1800, 2500]
}

df = pd.DataFrame(data)

print(df)
#       Ad  Yaş      Şəhər  Maaş
# 0    Ali   25       Bakı  1500
# 1  Leyla   30      Gəncə  2200
# 2  Səməd   22  Sumqayıt  1800
# 3  Nigar   28       Bakı  2500

# İlk 5 sətir
print(df.head())

# Son 5 sətir
print(df.tail())

# Data haqqında məlumat
print(df.info())

# Statistik xülasə
print(df.describe())</code></pre>

    <h4>📊 DataFrame Atributları</h4>
    <pre><code># Forma (sətir, sütun)
print(df.shape)      # (4, 4)

# Sütun adları
print(df.columns)    # Index(['Ad', 'Yaş', 'Şəhər', 'Maaş'], dtype='object')

# İndekslər
print(df.index)      # RangeIndex(start=0, stop=4, step=1)

# Data tipləri
print(df.dtypes)
# Ad        object
# Yaş        int64
# Şəhər     object
# Maaş       int64
# dtype: object

# Yaddaş istifadəsi
print(df.memory_usage())</code></pre>

    <h4>🔍 Seçmə və Filtirləmə (Indexing)</h4>

    <p><strong>1. Sütun Seçmə</strong></p>
    <pre><code># Tək sütun (Series qaytarır)
adlar = df['Ad']           # və ya df.Ad

# Çoxlu sütun (DataFrame qaytarır)
secilmis = df[['Ad', 'Maaş']]

# Sütun əlavə etmə
df['Bonus'] = df['Maaş'] * 0.1

# Sütun silmə
df = df.drop('Bonus', axis=1)  # axis=1 sütun deməkdir</code></pre>

    <p><strong>2. Sətir Seçmə</strong></p>
    <pre><code># .loc - etiket (label) ilə
print(df.loc[0])           # Birinci sətir
print(df.loc[0:2])         # 0-dan 2-yə qədər (2 daxildir!)
print(df.loc[0, 'Ad'])     # 0-cı sətir, 'Ad' sütunu

# .iloc - indeks (position) ilə
print(df.iloc[0])          # Birinci sətir
print(df.iloc[0:2])        # 0 və 1 (2 daxil deyil!)
print(df.iloc[0, 0])       # 0-cı sətir, 0-cı sütun

# Şərt ilə seçmə (ƏN GÜCLÜ!)
bakililar = df[df['Şəhər'] == 'Bakı']
yuksek_maas = df[df['Maaş'] > 2000]
cavalar = df[(df['Yaş'] < 25) & (df['Maaş'] > 1500)]</code></pre>

    <h4>🛠️ Data Manipulyasiyası</h4>

    <p><strong>Sıralama</strong></p>
    <pre><code># Maaşa görə sırala (artan)
df_sorted = df.sort_values('Maaş')

# Yaşa görə azalan sıra
df_sorted = df.sort_values('Yaş', ascending=False)

# Çoxlu sütunla sıralama
df_sorted = df.sort_values(['Şəhər', 'Maaş'], ascending=[True, False])</code></pre>

    <p><strong>GroupBy - Qruplaşdırma</strong></p>
    <pre><code># Şəhərə görə qruplaşdır
seher_qruplari = df.groupby('Şəhər')

# Hər şəhərdə orta maaş
print(seher_qruplari['Maaş'].mean())

# Hər şəhərdə say
print(seher_qruplari.size())

# Çoxlu agreqasiya
stats = df.groupby('Şəhər').agg({
    'Maaş': ['mean', 'min', 'max', 'sum'],
    'Yaş': 'mean'
})</code></pre>

    <p><strong>Apply - Funksiya Tətbiqi</strong></p>
    <pre><code># Hər sətirə funksiya tətbiq et
def kateqoriya(row):
    if row['Maaş'] > 2000:
        return 'Yüksək'
    else:
        return 'Orta'

df['Kateqoriya'] = df.apply(kateqoriya, axis=1)

# Lambda ilə qısa yazılış
df['Yaş_Quvveti'] = df['Yaş'].apply(lambda x: x ** 2)</code></pre>

    <h4>📁 Data Oxuma və Yazma</h4>
    <pre><code># CSV oxumaq
df = pd.read_csv('data.csv')
df = pd.read_csv('data.csv', encoding='utf-8', sep=';')

# Excel oxumaq
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# JSON oxumaq
df = pd.read_json('data.json')

# SQL-dən oxumaq
import sqlite3
conn = sqlite3.connect('database.db')
df = pd.read_sql_query("SELECT * FROM users", conn)

# Yazma
df.to_csv('output.csv', index=False)
df.to_excel('output.xlsx', index=False)
df.to_json('output.json', orient='records')</code></pre>

    <h4>🔄 Data Birləşdirmə (Merge, Join, Concat)</h4>

    <pre><code># Concat - alt-alta və ya yan-yana
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

# Alt-alta (sətir)
birlesmis = pd.concat([df1, df2], axis=0)

# Yan-yana (sütun)
yanbayan = pd.concat([df1, df2], axis=1)

# Merge - SQL JOIN kimi
musteriler = pd.DataFrame({
    'ID': [1, 2, 3],
    'Ad': ['Ali', 'Leyla', 'Səməd']
})

satislar = pd.DataFrame({
    'Musteri_ID': [1, 1, 2, 4],
    'Mehsul': ['A', 'B', 'C', 'D'],
    'Qiymet': [100, 200, 150, 300]
})

# INNER JOIN
inner = pd.merge(musteriler, satislar, 
                 left_on='ID', right_on='Musteri_ID', 
                 how='inner')

# LEFT JOIN (bütün müştərilər)
left = pd.merge(musteriler, satislar, 
                left_on='ID', right_on='Musteri_ID', 
                how='left')

# RIGHT JOIN
right = pd.merge(musteriler, satislar, 
                 left_on='ID', right_on='Musteri_ID', 
                 how='right')

# OUTER JOIN (bütün ID-lər)
outer = pd.merge(musteriler, satislar, 
                 left_on='ID', right_on='Musteri_ID', 
                 how='outer')</code></pre>

    <h4>🧹 Data Təmizləməyə Başlanğıc</h4>
    <pre><code># Null dəyərlər
print(df.isnull().sum())        # Hər sütunda neçə null var
df_clean = df.dropna()          # Null olan sətirləri sil
df_filled = df.fillna(0)        # Null-ları 0 ilə doldur
df_filled = df['Maaş'].fillna(df['Maaş'].mean())  # Orta ilə doldur

# Təkrarlanan sətirlər
print(df.duplicated().sum())    # Neçə təkrar var
df_unique = df.drop_duplicates()

# Sütun adlarını dəyişmək
df.columns = ['Name', 'Age', 'City', 'Salary']
df.rename(columns={'Ad': 'Name', 'Yaş': 'Age'}, inplace=True)

# İndeksi dəyişmək
df.set_index('Ad', inplace=True)   # 'Ad' sütununu indeks et
df.reset_index(inplace=True)        # İndeksi sütuna çevir</code></pre>

    <h4>📊 Pivot Cədvəllər</h4>
    <pre><code># Pivot table
data = {
    'Tarix': ['2024-01', '2024-01', '2024-02', '2024-02'],
    'Kateqoriya': ['Elektronika', 'Geyim', 'Elektronika', 'Geyim'],
    'Satış': [1000, 500, 1200, 600]
}
df = pd.DataFrame(data)

pivot = df.pivot_table(values='Satış', 
                       index='Tarix', 
                       columns='Kateqoriya',
                       aggfunc='sum',
                       fill_value=0)

# Kateqoriya    Elektronika  Geyim
# Tarix                            
# 2024-01              1000    500
# 2024-02              1200    600</code></pre>

    <h4>⏰ Vaxt Seriyaları (Time Series)</h4>
    <pre><code># Tarix sütunu yaratmaq
df['Tarix'] = pd.to_datetime(df['Tarix'])

# Tarixə görə indeksləmək
df.set_index('Tarix', inplace=True)

# Vaxt aralığı seçmək
yanvar = df['2024-01-01':'2024-01-31']

# Resample - fərqli tezlikdə
ayliq = df.resample('M').sum()      # Aylıq cəm
heftelik = df.resample('W').mean()  # Həftəlik orta

# Rolling (sürüşən pəncərə)
df['MA_7'] = df['Satış'].rolling(window=7).mean()  # 7-günlük hərəkətli orta</code></pre>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Böyük datasetlərdə <code>df.head()</code> ilə əvvəlcə baxın</li>
      <li><code>.copy()</code> istifadə edin kopya yaratmaq üçün (chain indexing problemini önləyir)</li>
      <li><code>inplace=True</code> yaddaş qənaəti edir, amma zəncir əməliyyatlarında çətinlik yaradır</li>
      <li><code>category</code> tipi string sütunlarda yaddaş qənaəti edir</li>
      <li><code>vectorized operations</code> (apply əvəzinə) daha sürətlidir</li>
      <li><code>query()</code> metodu şərtli seçmədə daha oxunaqlıdır: <code>df.query('Maaş > 2000 & Yaş < 30')</code></li>
    </ul>
  `,

  starterCode: {
    html: `<div class="pandas-lab">
  <h2>🐼 Pandas Lab: DataFrame Strukturu</h2>
  
  <section class="demo-section">
    <h3>1. DataFrame Yaradıcı və Explorer</h3>
    <div class="dataframe-creator">
      <div class="creator-tabs">
        <button class="tab-btn active" onclick="switchTab('manual')">Əl ilə Yarat</button>
        <button class="tab-btn" onclick="switchTab('random')">Təsadüfi Data</button>
        <button class="tab-btn" onclick="switchTab('csv')">CSV Yüklə</button>
      </div>
      
      <div class="tab-content" id="manualTab">
        <div class="column-definer">
          <h4>Sütunları Təyin Edin</h4>
          <div id="columnInputs">
            <div class="col-input">
              <input type="text" placeholder="Sütun adı" value="Ad" class="col-name">
              <select class="col-type">
                <option value="str">Mətn</option>
                <option value="int">Tam ədəd</option>
                <option value="float">Kəsr ədəd</option>
              </select>
              <input type="text" placeholder="Dəyərlər (vergüllə)" value="Ali,Leyla,Səməd" class="col-values">
            </div>
          </div>
          <button onclick="addColumn()">+ Sütun Əlavə Et</button>
          <button onclick="createDataFrame()">DataFrame Yarat</button>
        </div>
      </div>
      
      <div class="tab-content" id="randomTab" style="display:none;">
        <div class="random-options">
          <label>Sətir sayı: <input type="number" id="randomRows" value="10" min="5" max="100"></label>
          <label>Sütun sayı: <input type="number" id="randomCols" value="4" min="2" max="8"></label>
          <button onclick="generateRandomData()">Təsadüfi Data Yarat</button>
        </div>
      </div>
      
      <div class="tab-content" id="csvTab" style="display:none;">
        <div class="csv-input">
          <textarea id="csvData" placeholder="Ad,Yas,Seher&#10;Ali,25,Baki&#10;Leyla,30,Gence"></textarea>
          <button onclick="parseCSV()">CSV Parse Et</button>
        </div>
      </div>
      
      <div class="dataframe-display" id="dfDisplay">
        <div class="df-toolbar">
          <button onclick="showHead()">Head (5)</button>
          <button onclick="showTail()">Tail (5)</button>
          <button onclick="showInfo()">Info</button>
          <button onclick="showDescribe()">Describe</button>
          <button onclick="downloadCSV()">CSV Yüklə</button>
        </div>
        <div class="df-table-container" id="dfTableContainer">
          <p class="empty-msg">DataFrame yaradın...</p>
        </div>
        <div class="df-stats" id="dfStats"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Seçmə və Filtirləmə Aləti</h3>
    <div class="selection-tool">
      <div class="query-builder">
        <h4>Sorğu Qurucu</h4>
        <div class="query-row">
          <select id="queryCol">
            <option value="">Sütun seçin...</option>
          </select>
          <select id="queryOp">
            <option value="==">=</option>
            <option value="!=">!=</option>
            <option value=">"></option>
            <option value="<"><</option>
            <option value=">=">>=</option>
            <option value="<="><=</option>
            <option value="contains">contains</option>
          </select>
          <input type="text" id="queryVal" placeholder="Dəyər">
          <button onclick="addQueryCondition()">Əlavə Et</button>
        </div>
        <div class="query-conditions" id="queryConditions"></div>
        <button onclick="executeQuery()">Sorğunu İşlət</button>
        <button onclick="resetQuery()">Sıfırla</button>
      </div>
      
      <div class="selection-result" id="selectionResult">
        <div class="result-info" id="resultInfo"></div>
        <div class="result-table" id="resultTable"></div>
      </div>
      
      <div class="column-selector">
        <h4>Sütun Seçimi</h4>
        <div class="column-checkboxes" id="colCheckboxes"></div>
        <button onclick="selectColumns()">Seçilmiş Sütunları Göstər</button>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. GroupBy və Agregasiya</h3>
    <div class="groupby-demo">
      <div class="groupby-controls">
        <div class="control-group">
          <label>Qruplaşdırma Sütunu:</label>
          <select id="groupCol"></select>
        </div>
        <div class="control-group">
          <label>Agregasiya Sütunu:</label>
          <select id="aggCol"></select>
        </div>
        <div class="control-group">
          <label>Funksiya:</label>
          <select id="aggFunc">
            <option value="mean">Orta (Mean)</option>
            <option value="sum">Cəm (Sum)</option>
            <option value="count">Say (Count)</option>
            <option value="min">Minimum</option>
            <option value="max">Maksimum</option>
            <option value="std">Standart Meyl</option>
          </select>
        </div>
        <button onclick="executeGroupBy()">GroupBy İşlət</button>
      </div>
      
      <div class="groupby-result" id="groupbyResult">
        <div class="pivot-preview" id="pivotPreview"></div>
        <div class="chart-container" id="groupChart"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Merge və Join Simulyatoru</h3>
    <div class="merge-simulator">
      <div class="tables-container">
        <div class="table-box">
          <h4>Cədvəl A (Sol)</h4>
          <div class="mini-table" id="tableA"></div>
          <div class="key-selector">
            <label>Açar sütun:</label>
            <select id="keyA"></select>
          </div>
        </div>
        
        <div class="join-controls">
          <select id="joinType">
            <option value="inner">INNER JOIN</option>
            <option value="left">LEFT JOIN</option>
            <option value="right">RIGHT JOIN</option>
            <option value="outer">OUTER JOIN</option>
          </select>
          <button onclick="executeMerge()">Birləşdir →</button>
        </div>
        
        <div class="table-box">
          <h4>Cədvəl B (Sağ)</h4>
          <div class="mini-table" id="tableB"></div>
          <div class="key-selector">
            <label>Açar sütun:</label>
            <select id="keyB"></select>
          </div>
        </div>
      </div>
      
      <div class="merge-result" id="mergeResult">
        <h4>Nəticə</h4>
        <div class="result-table" id="mergeTable"></div>
        <div class="merge-stats" id="mergeStats"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Data Təmizləmə Aləti</h3>
    <div class="cleaning-tool">
      <div class="data-issues" id="dataIssues">
        <h4>Aşkarlanan Problemlər</h4>
        <div class="issue-list" id="issueList">
          <div class="issue-item">
            <span class="issue-type">Null dəyərlər</span>
            <span class="issue-count" id="nullCount">0</span>
            <button onclick="fixNulls()">Düzəlt</button>
          </div>
          <div class="issue-item">
            <span class="issue-type">Təkrarlanan sətirlər</span>
            <span class="issue-count" id="dupCount">0</span>
            <button onclick="fixDuplicates()">Düzəlt</button>
          </div>
          <div class="issue-item">
            <span class="issue-type">Səhv data tipləri</span>
            <span class="issue-count" id="typeIssues">0</span>
            <button onclick="fixTypes()">Düzəlt</button>
          </div>
        </div>
      </div>
      
      <div class="cleaning-actions">
        <h4>Təmizləmə Əməliyyatları</h4>
        <button onclick="dropNA()">Null Sətirləri Sil</button>
        <button onclick="fillNA()">Null-ları Doldur (Orta)</button>
        <button onclick="dropDuplicates()">Təkrarları Sil</button>
        <button onclick="stripSpaces()">Boşluqları Təmizlə</button>
        <button onclick="renameColumns()">Sütunları Yenidən Adlandır</button>
      </div>
      
      <div class="cleaning-preview" id="cleaningPreview"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>6. Pivot Table Qurucu</h3>
    <div class="pivot-builder">
      <div class="pivot-controls">
        <div class="pivot-dimension">
          <label>İndeks (Sətir):</label>
          <select id="pivotIndex" multiple></select>
        </div>
        <div class="pivot-dimension">
          <label>Sütunlar:</label>
          <select id="pivotColumns"></select>
        </div>
        <div class="pivot-dimension">
          <label>Dəyərlər:</label>
          <select id="pivotValues"></select>
        </div>
        <div class="pivot-dimension">
          <label>Agregasiya:</label>
          <select id="pivotAgg">
            <option value="sum">Sum</option>
            <option value="mean">Mean</option>
            <option value="count">Count</option>
          </select>
        </div>
        <button onclick="createPivot()">Pivot Table Yarat</button>
      </div>
      
      <div class="pivot-result" id="pivotResult">
        <div class="pivot-table" id="pivotTable"></div>
        <div class="pivot-chart" id="pivotChart"></div>
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

.pandas-lab {
  max-width: 1300px;
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

/* DataFrame Creator */
.creator-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tab-btn {
  background: #30363d;
  border: 2px solid #30363d;
  color: #8b949e;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
}

.tab-btn.active, .tab-btn:hover {
  background: #00d9ff;
  border-color: #00d9ff;
  color: #000;
}

.tab-content {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.col-input {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.col-input input, .col-input select {
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}

.col-name { width: 150px; }
.col-values { flex: 1; min-width: 200px; }

.df-toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.df-toolbar button {
  background: #30363d;
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.df-toolbar button:hover {
  background: #00ff88;
  color: #000;
}

.df-table-container {
  background: #0d1117;
  border-radius: 10px;
  overflow: auto;
  max-height: 400px;
  border: 2px solid #30363d;
}

.dataframe-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
}

.dataframe-table th {
  background: #1a1a2e;
  color: #00d9ff;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #30363d;
  position: sticky;
  top: 0;
}

.dataframe-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #30363d;
}

.dataframe-table tr:hover {
  background: rgba(0, 217, 255, 0.1);
}

.df-index {
  color: #8b949e;
  font-weight: bold;
}

.empty-msg {
  text-align: center;
  padding: 60px;
  color: #8b949e;
  font-style: italic;
}

.df-stats {
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.stat-card {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border-left: 4px solid #ffd700;
}

.stat-label {
  font-size: 12px;
  color: #8b949e;
  text-transform: uppercase;
}

.stat-value {
  font-size: 20px;
  color: #00ff88;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
}

/* Selection Tool */
.query-builder {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.query-row {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.query-row select, .query-row input {
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}

.query-conditions {
  margin: 15px 0;
  padding: 15px;
  background: #0d1117;
  border-radius: 8px;
  min-height: 50px;
}

.condition-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #00d9ff;
  color: #000;
  padding: 8px 15px;
  border-radius: 20px;
  margin: 5px;
  font-size: 14px;
}

.condition-tag button {
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  font-weight: bold;
}

.selection-result {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.result-info {
  color: #00ff88;
  margin-bottom: 15px;
  font-family: 'Fira Code', monospace;
}

.column-selector {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
}

.column-checkboxes {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 15px 0;
}

.col-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #0d1117;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
}

.col-checkbox input {
  width: 18px;
  height: 18px;
  accent-color: #00ff88;
}

/* GroupBy */
.groupby-controls {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 12px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-group label {
  color: #8b949e;
  font-size: 14px;
}

.control-group select {
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  min-width: 150px;
}

.groupby-result {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.pivot-preview {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  overflow: auto;
}

.chart-container {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Merge Simulator */
.tables-container {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.table-box {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  flex: 1;
  min-width: 250px;
}

.mini-table {
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  max-height: 200px;
  overflow: auto;
}

.key-selector {
  margin-top: 15px;
}

.key-selector select {
  background: #0d1117;
  border: 2px solid #00d9ff;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  width: 100%;
}

.join-controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.join-controls select {
  background: #1a1a2e;
  border: 2px solid #e94560;
  color: #e94560;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
}

.merge-result {
  background: #0d1117;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #00ff88;
}

.merge-stats {
  margin-top: 15px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.merge-stat {
  background: #1a1a2e;
  padding: 15px 25px;
  border-radius: 8px;
  text-align: center;
}

/* Cleaning Tool */
.cleaning-tool {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.data-issues, .cleaning-actions {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.issue-list {
  margin-top: 15px;
}

.issue-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  background: #0d1117;
  border-radius: 8px;
  border-left: 4px solid;
}

.issue-item:nth-child(1) { border-left-color: #e94560; }
.issue-item:nth-child(2) { border-left-color: #ffd700; }
.issue-item:nth-child(3) { border-left-color: #00d9ff; }

.issue-type {
  font-weight: 600;
}

.issue-count {
  background: #1a1a2e;
  padding: 5px 15px;
  border-radius: 20px;
  font-family: 'Fira Code', monospace;
  color: #00ff88;
}

.cleaning-actions button {
  display: block;
  width: 100%;
  margin: 10px 0;
  background: #30363d;
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.cleaning-actions button:hover {
  background: #00ff88;
  color: #000;
}

.cleaning-preview {
  grid-column: 1 / -1;
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
}

/* Pivot Builder */
.pivot-builder {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.pivot-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.pivot-dimension {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pivot-dimension label {
  color: #8b949e;
  font-size: 14px;
}

.pivot-dimension select {
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}

.pivot-result {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.pivot-table {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  overflow: auto;
}

.pivot-chart {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  min-height: 300px;
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
  .creator-tabs { flex-direction: column; }
  .col-input { flex-direction: column; align-items: stretch; }
  .query-row { flex-direction: column; align-items: stretch; }
  .tables-container { flex-direction: column; }
  .cleaning-tool { grid-template-columns: 1fr; }
  .pivot-result { grid-template-columns: 1fr; }
  .groupby-result { grid-template-columns: 1fr; }
}`
  },

  exercise: {
    title: "📊 E-commerce Data Analysis - Real Biznes Problemi",
    description: "Pandas istifadə edərək böyük e-commerce datasetini təhlil edin. Müştəri segmentasiyası, satış trendləri və RFM (Recency, Frequency, Monetary) analizi aparın.",
    requirements: [
      "CSV fayldan 10,000+ sifariş datası oxuyun (order_id, customer_id, order_date, amount, category, city)",
      "Data təmizləyin: yanlış tarixləri düzəldin, mənfi məbləğləri filtrləyin, duplicate-ləri silin",
      "Yeni sütunlar yaradın: il, ay, gün, həftənin günü, fəsil",
      "Müştəri segmentasiyası: hər müştərinin ümumi xərcləmini, sifariş sayını, son sifariş tarixini tapın",
      "RFM analizi aparın: Recency (son sifarişdən bəri günlər), Frequency (sifariş sayı), Monetary (ümumi xərc)",
      "RFM skorlarına görə müştəriləri kateqoriyalara ayırın (Champions, Loyal Customers, At Risk, Lost)",
      "Aylıq satış trendini hesablayın və vizuallaşdırın (pivot table istifadə edin)",
      "Kateqoriya və şəhər üzrə cross-tabulation yaradın",
      "Cohort analizi aparın: müştəri saxlanması (retention) faizi",
      "Nəticələri Excel faylına müxtəlif sheet-lərdə saxlayın (summary, rfm_analysis, trends)"
    ],
    starterCode: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import matplotlib.pyplot as plt

class EcommerceAnalyzer:
    def __init__(self, file_path):
        self.df = None
        self.rfm = None
        self.file_path = file_path
        
    def load_data(self):
        """Data yüklə və ilkin yoxlama apar"""
        print("Data yüklənir...")
        self.df = pd.read_csv(self.file_path)
        
        print(f"Ümumi sətir: {len(self.df)}")
        print(f"Sütunlar: {list(self.df.columns)}")
        print(f"Data tipləri:\\n{self.df.dtypes}")
        print(f"Null dəyərlər:\\n{self.df.isnull().sum()}")
        
        return self
    
    def clean_data(self):
        """Data təmizləmə"""
        print("\\nData təmizlənir...")
        
        # 1. Sütun adlarını standartlaşdır
        self.df.columns = self.df.columns.str.lower().str.strip()
        
        # 2. Tarix sütununu datetime formatına çevir
        # Kodunuzu bura yazın: pd.to_datetime() istifadə edin, errors='coerce'
        
        # 3. Mənfi və sıfır məbləğləri filtrlə
        # Kodunuzu bura yazın: self.df['amount'] > 0
        
        # 4. Duplicate sifarişləri sil
        # Kodunuzu bura yazın: .drop_duplicates(subset=['order_id'])
        
        # 5. Yanlış tarixləri düzəlt (gələcək tarixlər)
        # Kodunuzu bura yazın: max_date = datetime.now()
        
        print(f"Təmizləndikdən sonra: {len(self.df)} sətir")
        return self
    
    def feature_engineering(self):
        """Yeni xüsusiyyətlər yaradın"""
        print("\\nYeni xüsusiyyətlər yaradılır...")
        
        # Tarix komponentləri
        # Kodunuzu bura yazın:
        # self.df['year'] = self.df['order_date'].dt.year
        # self.df['month'] = ...
        # self.df['day'] = ...
        # self.df['weekday'] = ... (0=Monday)
        # self.df['season'] = self.df['month'].map({12,1,2: 'Qış', ...})
        
        # Həftəsonu yoxlaması
        self.df['is_weekend'] = self.df['weekday'].isin([5, 6])
        
        return self
    
    def calculate_rfm(self, analysis_date=None):
        """
        RFM Analizi
        Recency: Son sifarişdən bəri günlər
        Frequency: Sifariş sayı
        Monetary: Ümumi xərc
        """
        if analysis_date is None:
            analysis_date = self.df['order_date'].max() + timedelta(days=1)
        
        print(f"\\nRFM analizi üçün tarix: {analysis_date}")
        
        # Hər müştəri üçün RFM metrikləri
        # Kodunuzu bura yazın:
        # self.rfm = self.df.groupby('customer_id').agg({
        #     'order_date': lambda x: (analysis_date - x.max()).days,  # Recency
        #     'order_id': 'count',  # Frequency
        #     'amount': 'sum'  # Monetary
        # })
        # self.rfm.columns = ['recency', 'frequency', 'monetary']
        
        # RFM skorları (1-5, 5 ən yaxşı)
        # Kodunuzu bura yazın: pd.qcut() istifadə edin
        # Recency: az = yaxşı (5), çox = pis (1) - tərs!
        # Frequency və Monetary: çox = yaxşı (5)
        
        # Ümumi RFM skoru
        # self.rfm['rfm_score'] = self.rfm['r_score'].astype(str) + ...
        
        # Segment təyin etmə
        def segment_mapping(row):
            # Kodunuzu bura yazın:
            # Champions: R=5, F=5, M=5
            # Loyal Customers: F>=4
            # At Risk: R<=2, F>=3
            # Lost: R=1
            # və s.
            pass
        
        self.rfm['segment'] = self.rfm.apply(segment_mapping, axis=1)
        
        print("Segment paylanması:")
        print(self.rfm['segment'].value_counts())
        
        return self
    
    def monthly_trends(self):
        """Aylıq satış trendləri"""
        print("\\nAylıq trendlər hesablanır...")
        
        # Pivot table: İllər sətir, aylar sütun
        # Kodunuzu bura yazın:
        # monthly = self.df.pivot_table(
        #     values='amount',
        #     index='year',
        #     columns='month',
        #     aggfunc='sum',
        #     fill_value=0
        # )
        
        # Vizuallaşdırma
        # Kodunuzu bura yazın: monthly.T.plot(kind='line')
        
        return monthly
    
    def category_city_analysis(self):
        """Kateqoriya və şəhər analizi"""
        print("\\nKateqoriya-Şəhər analizi...")
        
        # Cross-tabulation
        # Kodunuzu bura yazın:
        # cross_tab = pd.crosstab(self.df['category'], self.df['city'], 
        #                         values=self.df['amount'], aggfunc='sum')
        
        return cross_tab
    
    def cohort_analysis(self):
        """
        Cohort analizi: Müştəri saxlanması
        Hər müştərinin ilk alış tarixinə görə qrup (cohort) təyin et
        """
        print("\\nCohort analizi aparılır...")
        
        # 1. Hər müştərinin ilk sifariş tarixini tap (cohort month)
        # Kodunuzu bura yazın:
        # first_order = self.df.groupby('customer_id')['order_date'].min().reset_index()
        # first_order['cohort_month'] = first_order['order_date'].dt.to_period('M')
        
        # 2. Hər sifarişin cohort month və order month arasındakı fərq
        # Kodunuzu bura yazın:
        # self.df = self.df.merge(first_order[['customer_id', 'cohort_month']], on='customer_id')
        # self.df['order_month'] = self.df['order_date'].dt.to_period('M')
        # self.df['period_number'] = (self.df['order_month'] - self.df['cohort_month']).apply(attrgetter('n'))
        
        # 3. Cohort table yarat
        # Kodunuzu bura yazın:
        # cohort_data = self.df.groupby(['cohort_month', 'period_number'])['customer_id'].nunique().reset_index()
        # cohort_table = cohort_data.pivot(index='cohort_month', columns='period_number', values='customer_id')
        
        # 4. Retention faizi hesabla (birinci sütun = 100%)
        # Kodunuzu bura yazın: cohort_table.divide(cohort_table.iloc[:, 0], axis=0)
        
        return cohort_table
    
    def export_results(self, output_file='ecommerce_analysis.xlsx'):
        """Nəticələri Excel-ə ixrac et"""
        print(f"\\nNəticələr {output_file} faylına yazılır...")
        
        with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
            # 1. Summary sheet
            summary = pd.DataFrame({
                'Metric': ['Ümumi Satış', 'Ümumi Müştəri', 'Orta Sifariş Dəyəri', 
                          'Aylıq Orta Satış'],
                'Value': [
                    self.df['amount'].sum(),
                    self.df['customer_id'].nunique(),
                    self.df['amount'].mean(),
                    self.df.groupby(self.df['order_date'].dt.to_period('M'))['amount'].sum().mean()
                ]
            })
            summary.to_excel(writer, sheet_name='Summary', index=False)
            
            # 2. RFM Analysis
            self.rfm.to_excel(writer, sheet_name='RFM_Analysis')
            
            # 3. Monthly Trends
            self.monthly_trends().to_excel(writer, sheet_name='Monthly_Trends')
            
            # 4. Segment Analysis
            segment_summary = self.rfm.groupby('segment').agg({
                'recency': 'mean',
                'frequency': 'mean',
                'monetary': 'mean',
                'customer_id': 'count'
            }).rename(columns={'customer_id': 'count'})
            segment_summary.to_excel(writer, sheet_name='Segment_Summary')
        
        print("✅ İxrac tamamlandı!")
        return self

# Əsas proqram
if __name__ == "__main__":
    # Nümunə data yarat (real fayl əvəzinə)
    print("Nümunə data yaradılır...")
    np.random.seed(42)
    n_orders = 15000
    
    sample_data = {
        'order_id': range(1000, 1000 + n_orders),
        'customer_id': np.random.choice(range(1000, 6000), n_orders),
        'order_date': pd.date_range(start='2023-01-01', periods=n_orders, freq='H'),
        'amount': np.random.lognormal(4, 0.5, n_orders),  # Log-normal paylanma
        'category': np.random.choice(['Elektronika', 'Geyim', 'Ev', 'Kitab', 'İdman'], n_orders),
        'city': np.random.choice(['Bakı', 'Gəncə', 'Sumqayıt', 'Mingəçevir'], n_orders)
    }
    
    df_sample = pd.DataFrame(sample_data)
    df_sample.to_csv('sample_ecommerce.csv', index=False)
    print("sample_ecommerce.csv yaradıldı\\n")
    
    # Analiz başlat
    analyzer = EcommerceAnalyzer('sample_ecommerce.csv')
    
    (analyzer
     .load_data()
     .clean_data()
     .feature_engineering()
     .calculate_rfm()
     .monthly_trends()
     .category_city_analysis()
     .cohort_analysis()
     .export_results())
    
    print("\\n🎉 Bütün analizlər tamamlandı!")`,
  },

  quiz: [
    {
      question: "Pandas-in əsas data strukturu hansıdır?",
      options: ["Array", "DataFrame", "List", "Dictionary"],
      correctAnswer: 1
    },
    {
      question: "df.loc[0:2] nə qaytarır?",
      options: ["0 və 1-ci sətirləri", "0, 1 və 2-ci sətirləri", "Yalnız 2-ci sətri", "Xəta"],
      correctAnswer: 1
    },
    {
      question: "df.iloc[0:2] nə qaytarır?",
      options: ["0 və 1-ci sətirləri", "0, 1 və 2-ci sətirləri", "Yalnız 2-ci sətri", "Xəta"],
      correctAnswer: 0
    },
    {
      question: "GroupBy əməliyyatından sonra hansı metod agregasiya aparır?",
      options: ["apply()", "agg()", "map()", "filter()"],
      correctAnswer: 1
    },
    {
      question: "pd.merge() funksiyasında how='left' nə deməkdir?",
      options: ["Yalnız sol cədvəlin sətirləri saxlanılır", "Kəsişmə götürülür", "Sağ cədvəl üstünlük təşkil edir", "Bütün sətirlər saxlanılır"],
      correctAnswer: 0
    },
    {
      question: "Null dəyərləri orta ilə doldurmaq üçün hansı metod istifadə olunur?",
      options: ["dropna()", "fillna()", "replace()", "interpolate()"],
      correctAnswer: 1
    },
    {
      question: "df['Yeni'] = df['A'] + df['B'] nə edir?",
      options: ["Sətir silir", "Yeni sütun əlavə edir", "Sütun silir", "DataFrame birləşdirir"],
      correctAnswer: 1
    },
    {
      question: "pivot_table() funksiyasında values parametri nəyi göstərir?",
      options: ["Sətir indeksini", "Agregasiya ediləcək sütunu", "Sütun indeksini", "Filter şərtini"],
      correctAnswer: 1
    },
    {
      question: "df.to_csv('file.csv', index=False) index=False nə üçündür?",
      options: ["Sütun adlarını yazmamaq üçün", "İndeks sütununu yazmamaq üçün", "Data yazmamaq üçün", "Xəta yoxlamaq üçün"],
      correctAnswer: 1
    },
    {
      question: "Hansı metod DataFrame haqqında ümumi məlumat (data tipləri, null sayı) verir?",
      options: ["describe()", "info()", "head()", "summary()"],
      correctAnswer: 1
    }
  ]
};

export default topicai16;