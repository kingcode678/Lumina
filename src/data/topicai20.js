export const topicai20 = {
  id: 20,
  title: "Data Vizualizasiya: Seaborn",
  duration: "120 dəq",
  isFree: false,
  
  content: `
    <h4>🌊 Seaborn Nədir?</h4>
    <p><strong>Seaborn</strong> - Matplotlib əsasında qurulmuş, statistik vizualizasiyalar üçün nəzərdə tutulmuş yüksək səviyyəli kitabxanadır. Matplotlib-dən fərqli olaraq, Seaborn avtomatik olaraq gözəl rəng sxemləri, statistik hesablamalar və mürəkkəb qrafiklər yaradır.</p>
    
    <p><strong>Əsas fərqlər:</strong></p>
    <ul>
      <li>Avtomatik olaraq estetik və müasir görünüş</li>
      <li>Statistik qrafiklər üçün hazır funksiyalar (regression, distribution)</li>
      <li>Pandas DataFrame-ləri ilə birbaşa işləyir (sütun adları avtomatik tanınır)</li>
      <li>Çox dəyişənli analizlər üçün asan sintaksis</li>
    </ul>

    <h4>📦 Qurulum və İmport</h4>
    <pre><code>import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Default stil təyin etmək
sns.set_style('whitegrid')  # whitegrid, darkgrid, white, dark, ticks
sns.set_palette('husl')     # Rəng palitrası</code></pre>

    <h4>📊 Seaborn-un Əsas Qrafik Tipləri</h4>

    <h4>1️⃣ Distribusiya (Paylanma) Qrafikləri</h4>
    
    <p><strong>Histogram və KDE (Kernel Density Estimate)</strong></p>
    <pre><code># Sadə histogram
sns.histplot(data=df, x='bal', bins=20, kde=True, color='blue')

# KDE əyrisi (hamarlaşdırılmış paylanma)
sns.kdeplot(data=df, x='bal', fill=True, color='green')

# Bir neçə dəyişəni müqayisə etmək
sns.histplot(data=df, x='bal', hue='sinif', multiple='stack')</code></pre>

    <p><strong>Box Plot (Qutu Diaqramı)</strong></p>
    <p>Median, kvartillər və outlier-ləri göstərir:</p>
    <pre><code># Tək sütun üçün
sns.boxplot(data=df, y='bal')

# Kateqoriya üzrə müqayisə
sns.boxplot(data=df, x='sinif', y='bal', palette='Set2')

# Üstəlik cinsiyyətə görə fərqləndirmə (hue)
sns.boxplot(data=df, x='sinif', y='bal', hue='cinsiyyet')</code></pre>

    <p><strong>Violin Plot (Skripka Diaqramı)</strong></p>
    <p>Box plot + KDE birləşməsi - paylanmanın formasını göstərir:</p>
    <pre><code>sns.violinplot(data=df, x='sinif', y='bal', palette='muted')
# Daxili qutu ilə
sns.violinplot(data=df, x='sinif', y='bal', inner='box')</code></pre>

    <h4>2️⃣ Münasibət (Relationship) Qrafikləri</h4>
    
    <p><strong>Scatter Plot (Təkmilləşdirilmiş)</strong></p>
    <pre><code># Əsas saçılma diaqramı
sns.scatterplot(data=df, x='yas', y='bal', hue='sinif', size='davamiyyet',
                sizes=(20, 200), palette='deep', alpha=0.7)

# Regression xətti ilə
sns.regplot(data=df, x='yas', y='bal', scatter_kws={'alpha':0.5}, line_kws={'color':'red'})</code></pre>

    <p><strong>Line Plot (Xətt Qrafiki)</strong></p>
    <pre><code># Zaman seriyası üçün ideal
sns.lineplot(data=df, x='ay', y='satis', hue='bolme', marker='o', linewidth=2.5)

# Etibar intervalı ilə (ci - confidence interval)
sns.lineplot(data=df, x='ay', y='satis', ci=95)</code></pre>

    <p><strong>Joint Plot (Birgə Diaqram)</strong></p>
    <p>İki dəyişənin münasibətini və hər birinin paylanmasını göstərir:</p>
    <pre><code># Scatter + Histogram birləşməsi
sns.jointplot(data=df, x='yas', y='bal', kind='scatter', hue='sinif')

# Hexbin (sıxlıq əsaslı)
sns.jointplot(data=df, x='yas', y='bal', kind='hex', color='purple')

# KDE ilə
sns.jointplot(data=df, x='yas', y='bal', kind='kde', fill=True)</code></pre>

    <p><strong>Pair Plot (Cüt Diaqramlar)</strong></p>
    <p>Bütün ədədi sütunların bir-biri ilə münasibətini göstərir:</p>
    <pre><code># Bütün ədədi sütunlar üçün
sns.pairplot(df, hue='sinif', palette='bright', diag_kind='kde')

# Xüsusi sütunlar seçmək
sns.pairplot(df, vars=['yas', 'bal', 'davamiyyet'], hue='cinsiyyet')</code></pre>

    <h4>3️⃣ Kateqorik Qrafiklər</h4>
    
    <p><strong>Bar Plot (Statistik Sütun)</strong></p>
    <p>Avtomatik olaraq orta dəyər və etibar intervalı hesablayır:</p>
    <pre><code># Orta dəyər + standart səhv
sns.barplot(data=df, x='sinif', y='bal', palette='viridis')

# Qadın/kişi ayrılsın
sns.barplot(data=df, x='sinif', y='bal', hue='cinsiyyet')</code></pre>

    <p><strong>Count Plot (Say Diaqramı)</strong></p>
    <pre><code># Kateqoriya sayını göstərmək
sns.countplot(data=df, x='sinif', palette='pastel')

# Üfüqi
sns.countplot(data=df, y='fenn', order=df['fenn'].value_counts().index)</code></pre>

    <p><strong>Strip Plot və Swarm Plot</strong></p>
    <pre><code># Bütün nöqtələri göstərmək (jitter ilə)
sns.stripplot(data=df, x='sinif', y='bal', jitter=True, alpha=0.6)

# Nöqtələri sıxlaşdırmaq (dəqiq yerləşdirmə)
sns.swarmplot(data=df, x='sinif', y='bal', size=6)</code></pre>

    <h4>4️⃣ İstilik Xəritələri (Heatmaps)</h4>
    <pre><code># Korrelyasiya matriksi
corr = df.corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0, 
            square=True, linewidths=0.5, cbar_kws={"shrink": 0.8})

# Xüsusi məlumatlar üçün
data_pivot = df.pivot_table(values='bal', index='sinif', columns='fenn')
sns.heatmap(data_pivot, annot=True, fmt='.1f', cmap='YlOrRd')</code></pre>

    <h4>5️⃣ Facet Grid (Çoxlu Panellər)</h4>
    <p>Bir neçə qrafiki alt qruplara görə ayırmaq:</p>
    <pre><code># Hər sinif üçün ayrı qrafik
g = sns.FacetGrid(df, col='sinif', col_wrap=3, height=4, aspect=1.2)
g.map(sns.histplot, 'bal', kde=True)
g.add_legend()

# Daha mürəkkəb
g = sns.FacetGrid(df, col='sinif', row='cinsiyyet', margin_titles=True)
g.map_dataframe(sns.scatterplot, x='yas', y='bal')
g.set_axis_labels('Yaş', 'Bal')</code></pre>

    <h4>🎨 Stil və Estetika</h4>
    
    <p><strong>Mövzu (Theme) Tənzimləmələri</strong></p>
    <pre><code># Ümumi stil
sns.set_style('whitegrid')  # whitegrid, darkgrid, white, dark, ticks

# Kontekst (plot ölçüsü)
sns.set_context('talk')  # paper, notebook, talk, poster

# Palitra
sns.set_palette('husl')  # deep, muted, bright, pastel, dark, colorblind

# Xüsusi rənglər
custom_palette = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12']
sns.set_palette(custom_palette)</code></pre>

    <p><strong>Qrafik Parametrlərini Dəyişmək</strong></p>
    <pre><code>g = sns.barplot(data=df, x='sinif', y='bal')

# Başlıq və etiketlər
g.set_title('Siniflər üzrə nəticələr', fontsize=16, fontweight='bold')
g.set_xlabel('Sinif', fontsize=12)
g.set_ylabel('Orta Bal', fontsize=12)

# Limitlər
g.set_ylim(0, 100)

# Döndürmək
plt.xticks(rotation=45)</code></pre>

    <h4>🔥 İrəli Səviyyə Texnikalar</h4>
    
    <p><strong>Annotasiyalar</strong></p>
    <pre><code># Dəyərləri qrafik üzərinə yazmaq
ax = sns.barplot(data=df, x='sinif', y='bal')
for i in ax.containers:
    ax.bar_label(i, fmt='%.1f')</code></pre>

    <p><strong>Çoxlu Qrafik Birləşdirmə</strong></p>
    <pre><code>fig, axes = plt.subplots(2, 2, figsize=(14, 10))

sns.boxplot(data=df, x='sinif', y='bal', ax=axes[0,0])
sns.violinplot(data=df, x='sinif', y='bal', ax=axes[0,1])
sns.scatterplot(data=df, x='yas', y='bal', hue='sinif', ax=axes[1,0])
sns.heatmap(df.corr(), annot=True, ax=axes[1,1])

plt.tight_layout()</code></pre>

    <h4>⚡ Seaborn vs Matplotlib - Nə Vaxt Hansı?</h4>
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">Vəziyyət</th>
        <th style="padding: 12px;">Tövsiyə</th>
        <th style="padding: 12px;">Səbəb</th>
      </tr>
      <tr>
        <td style="padding: 10px;">Statistik analiz</td>
        <td style="padding: 10px;">Seaborn</td>
        <td style="padding: 10px;">Avtomatik statistik hesablamalar</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Kateqorik məlumatlar</td>
        <td style="padding: 10px;">Seaborn</td>
        <td style="padding: 10px;">hue parametri ilə asan fərqləndirmə</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Xüsusi dizayn</td>
        <td style="padding: 10px;">Matplotlib</td>
        <td style="padding: 10px;">Daha çox kontrol</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Sadə qrafiklər</td>
        <td style="padding: 10px;">Matplotlib</td>
        <td style="padding: 10px;">Daha yüngül və sürətli</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Çoxlu məlumat dəsti</td>
        <td style="padding: 10px;">Seaborn</td>
        <td style="padding: 10px;">Estetik və informativ</td>
      </tr>
    </table>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə <code>data</code> parametri ilə DataFrame ötürün - sütun adları avtomatik tanınacaq</li>
      <li><code>hue</code> parametri ilə 3-cü dəyişəni asanlıqla əlavə edin</li>
      <li>Böyük məlumat dəstlərində <code>alpha</code> (şəffaflıq) istifadə edin</li>
      <li><code>plt.figure(figsize=(w, h))</code> ilə ölçüləri əvvəlcədən təyin edin</li>
      <li><code>sns.set()</code> ilə ümumi stili bir dəfə təyin edin, bütün qrafiklərə tətbiq olunar</li>
      <li>Qrafikləri yadda saxlamazdan əvvəl <code>plt.tight_layout()</code> çağırın</li>
    </ul>

    <h4>🚀 Nümunə: Tam Analiz</h4>
    <pre><code># Tam analiz nümunəsi
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Stil təyin etmək
sns.set_style('whitegrid')
sns.set_palette('husl')

# Məlumat
df = pd.read_csv('telebeler.csv')

# Böyük şəkil
plt.figure(figsize=(16, 10))

# 1. Paylanma
plt.subplot(2, 3, 1)
sns.histplot(df['bal'], kde=True, color='blue')
plt.title('Bal Paylanması')

# 2. Sinif müqayisəsi
plt.subplot(2, 3, 2)
sns.boxplot(data=df, x='sinif', y='bal')
plt.title('Siniflər üzrə')

# 3. Yaş vs Bal
plt.subplot(2, 3, 3)
sns.scatterplot(data=df, x='yas', y='bal', hue='sinif', s=100)
plt.title('Yaş-Bal Əlaqəsi')

# 4. Korrelyasiya
plt.subplot(2, 3, 4)
sns.heatmap(df.corr(), annot=True, cmap='coolwarm', center=0)
plt.title('Korrelyasiya Matriksi')

# 5. Cinsiyyət paylanması
plt.subplot(2, 3, 5)
sns.countplot(data=df, x='sinif', hue='cinsiyyet')
plt.title('Cinsiyyət Paylanması')

# 6. Violin plot
plt.subplot(2, 3, 6)
sns.violinplot(data=df, x='sinif', y='bal', inner='box')
plt.title('Ətraflı Paylanma')

plt.suptitle('Tələbə Analizi Dashboard', fontsize=16, fontweight='bold')
plt.tight_layout()
plt.show()</code></pre>
  `,

  starterCode: {
    html: `<div class="seaborn-lab">
  <h2>🌊 Seaborn Statistik Vizualizasiya Lab</h2>
  
  <section class="demo-section">
    <h3>1. Distribusiya Qrafikləri</h3>
    <div class="dist-demo">
      <div class="chart-selector">
        <button onclick="showDistChart('hist')" class="dist-btn active">Histogram</button>
        <button onclick="showDistChart('kde')" class="dist-btn">KDE</button>
        <button onclick="showDistChart('box')" class="dist-btn">Box Plot</button>
        <button onclick="showDistChart('violin')" class="dist-btn">Violin</button>
      </div>
      <div class="chart-container" id="distChart">
        <canvas id="distCanvas" width="700" height="400"></canvas>
      </div>
      <div class="python-code" id="distCode">
        <pre>sns.histplot(data=df, x='bal', kde=True, color='skyblue')</pre>
      </div>
      <div class="explanation" id="distExplanation">
        Histogram məlumatların paylanmasını göstərir. KDE (Kernel Density Estimate) əyrisi hamarlaşdırılmış paylanmadır.
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Münasibət Qrafikləri</h3>
    <div class="rel-demo">
      <div class="rel-controls">
        <div class="control-group">
          <label>X dəyişəni:</label>
          <select id="relX" onchange="updateRelPlot()">
            <option value="yas">Yaş</option>
            <option value="davamiyyet">Davamiyyət</option>
            <option value="test">Test nəticəsi</option>
          </select>
        </div>
        <div class="control-group">
          <label>Y dəyişəni:</label>
          <select id="relY" onchange="updateRelPlot()">
            <option value="bal">Bal</option>
            <option value="imtahan">İmtahan</option>
          </select>
        </div>
        <div class="control-group">
          <label>Hue (Rəngləndirmə):</label>
          <select id="relHue" onchange="updateRelPlot()">
            <option value="sinif">Sinif</option>
            <option value="cinsiyyet">Cinsiyyət</option>
            <option value="none">Yoxdur</option>
          </select>
        </div>
        <div class="control-group">
          <label>Qrafik tipi:</label>
          <select id="relKind" onchange="updateRelPlot()">
            <option value="scatter">Scatter</option>
            <option value="line">Line</option>
            <option value="reg">Regression</option>
          </select>
        </div>
      </div>
      <div class="rel-chart" id="relChart">
        <canvas id="relCanvas" width="700" height="400"></canvas>
      </div>
      <div class="code-display" id="relCode"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Kateqorik Qrafiklər</h3>
    <div class="cat-demo">
      <div class="cat-tabs">
        <button onclick="showCatPlot('bar')" class="cat-tab active">Bar Plot</button>
        <button onclick="showCatPlot('count')" class="cat-tab">Count Plot</button>
        <button onclick="showCatPlot('box')" class="cat-tab">Box</button>
        <button onclick="showCatPlot('violin')" class="cat-tab">Violin</button>
        <button onclick="showCatPlot('strip')" class="cat-tab">Strip</button>
        <button onclick="showCatPlot('swarm')" class="cat-tab">Swarm</button>
      </div>
      <div class="cat-content" id="catContent">
        <div class="cat-viz" id="catViz"></div>
        <div class="cat-code" id="catCode"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. İstilik Xəritəsi (Heatmap) Builder</h3>
    <div class="heatmap-builder">
      <div class="heatmap-controls">
        <label>Matris ölçüsü:</label>
        <input type="range" id="matrixSize" min="3" max="8" value="5" oninput="updateHeatmap()">
        <span id="sizeValue">5x5</span>
        
        <label>Rəng palitrası:</label>
        <select id="heatmapPalette" onchange="updateHeatmap()">
          <option value="coolwarm">Cool-Warm</option>
          <option value="viridis">Viridis</option>
          <option value="plasma">Plasma</option>
          <option value="blues">Blues</option>
          <option value="reds">Reds</option>
        </select>
        
        <label>Annotasiya:</label>
        <input type="checkbox" id="showAnnot" checked onchange="updateHeatmap()">
      </div>
      <div class="heatmap-display" id="heatmapDisplay"></div>
      <div class="heatmap-code" id="heatmapCode"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Pair Plot Simulyatoru</h3>
    <div class="pairplot-demo">
      <div class="pair-controls">
        <label>Dəyişənlər:</label>
        <div class="var-checkboxes">
          <label><input type="checkbox" checked onchange="updatePairplot()"> Yaş</label>
          <label><input type="checkbox" checked onchange="updatePairplot()"> Bal</label>
          <label><input type="checkbox" onchange="updatePairplot()"> Davamiyyət</label>
          <label><input type="checkbox" onchange="updatePairplot()"> Test</label>
        </div>
        <label>Hue:</label>
        <select id="pairHue" onchange="updatePairplot()">
          <option value="sinif">Sinif</option>
          <option value="cinsiyyet">Cinsiyyət</option>
        </select>
        <button onclick="generatePairplot()">Yarat</button>
      </div>
      <div class="pairplot-grid" id="pairplotGrid"></div>
      <div class="pair-code" id="pairCode"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>6. Stil və Palitra Seçici</h3>
    <div class="style-picker">
      <div class="style-options">
        <div class="style-group">
          <label>Set Style:</label>
          <select id="snsStyle" onchange="previewStyle()">
            <option value="whitegrid">White Grid</option>
            <option value="darkgrid">Dark Grid</option>
            <option value="white">White</option>
            <option value="dark">Dark</option>
            <option value="ticks">Ticks</option>
          </select>
        </div>
        <div class="style-group">
          <label>Context:</label>
          <select id="snsContext" onchange="previewStyle()">
            <option value="notebook">Notebook</option>
            <option value="paper">Paper</option>
            <option value="talk">Talk</option>
            <option value="poster">Poster</option>
          </select>
        </div>
        <div class="style-group">
          <label>Palette:</label>
          <select id="snsPalette" onchange="previewStyle()">
            <option value="deep">Deep</option>
            <option value="muted">Muted</option>
            <option value="bright">Bright</option>
            <option value="pastel">Pastel</option>
            <option value="dark">Dark</option>
            <option value="colorblind">Colorblind</option>
          </select>
        </div>
      </div>
      <div class="style-preview-chart" id="stylePreviewChart">
        <canvas id="styleCanvas" width="600" height="300"></canvas>
      </div>
      <div class="style-code" id="styleCode"></div>
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

.seaborn-lab {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #e94560;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 20px rgba(233, 69, 96, 0.3);
}

h3 {
  color: #00d9ff;
  margin-bottom: 20px;
  font-size: 24px;
  border-left: 4px solid #00d9ff;
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

/* Distribution Demo */
.chart-selector, .cat-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.dist-btn, .cat-tab {
  background: #0f3460;
  border: 2px solid transparent;
  color: #eaeaea;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.dist-btn.active, .cat-tab.active, .dist-btn:hover, .cat-tab:hover {
  border-color: #e94560;
  color: #e94560;
  background: rgba(233, 69, 96, 0.1);
}

.chart-container, .rel-chart {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  border: 2px solid #30363d;
}

.python-code, .code-display, .cat-code, .heatmap-code, .pair-code, .style-code {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #00d9ff;
  font-family: 'Fira Code', monospace;
  color: #7ee787;
  overflow-x: auto;
  margin-top: 15px;
}

.explanation {
  background: rgba(0, 217, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #00d9ff;
  margin-top: 15px;
  color: #eaeaea;
}

/* Relationship Controls */
.rel-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.control-group label {
  color: #ffd700;
  font-weight: 600;
  font-size: 14px;
}

.control-group select {
  background: #0f3460;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}

/* Categorical */
.cat-content {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  min-height: 400px;
}

.cat-viz {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

/* Heatmap */
.heatmap-builder {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.heatmap-controls {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.heatmap-controls label {
  color: #ffd700;
  font-weight: 600;
}

.heatmap-controls input[type="range"] {
  width: 100%;
}

.heatmap-display {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.heatmap-grid {
  display: grid;
  gap: 2px;
  border: 2px solid #30363d;
  padding: 10px;
  background: #0d1117;
}

.heatmap-cell {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #000;
  border-radius: 4px;
}

/* Pairplot */
.pairplot-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pair-controls {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.var-checkboxes {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.var-checkboxes label {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.pairplot-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
}

.pairplot-cell {
  aspect-ratio: 1;
  background: #1a1a2e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #8b949e;
  border: 1px solid #30363d;
}

.pairplot-cell.diag {
  background: #0f3460;
}

/* Style Picker */
.style-options {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.style-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.style-group label {
  color: #ffd700;
  font-weight: 600;
}

.style-group select {
  background: #0f3460;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  min-width: 150px;
}

.style-preview-chart {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
}

/* Buttons */
button {
  background: linear-gradient(135deg, #e94560 0%, #c73e54 100%);
  color: #fff;
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
  box-shadow: 0 6px 20px rgba(233, 69, 96, 0.4);
}

@media (max-width: 768px) {
  body { padding: 20px; }
  .heatmap-builder { grid-template-columns: 1fr; }
  .pairplot-grid { grid-template-columns: repeat(2, 1fr); }
  .rel-controls { grid-template-columns: 1fr; }
  .style-options { flex-direction: column; }
}`,

    js: `// Seaborn Lab
const sampleData = {
  bal: [65, 72, 78, 85, 90, 65, 70, 88, 92, 75, 68, 82, 95, 70, 78, 85, 90, 72, 88, 76],
  yas: [18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19, 20, 18, 19],
  sinif: ['10A', '10A', '10B', '10B', '10A', '10B', '10A', '10B', '10A', '10B', 
          '10A', '10B', '10A', '10B', '10A', '10B', '10A', '10B', '10A', '10B'],
  cinsiyyet: ['K', 'E', 'K', 'E', 'K', 'E', 'K', 'E', 'K', 'E',
              'K', 'E', 'K', 'E', 'K', 'E', 'K', 'E', 'K', 'E']
};

function showDistChart(type) {
  document.querySelectorAll('.dist-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const canvas = document.getElementById('distCanvas');
  const ctx = canvas.getContext('2d');
  const codeDiv = document.getElementById('distCode');
  const expDiv = document.getElementById('distExplanation');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  switch(type) {
    case 'hist':
      drawHistogram(ctx, canvas);
      codeDiv.innerHTML = '<pre>sns.histplot(data=df, x=\\'bal\\', kde=True, color=\\'skyblue\\')</pre>';
      expDiv.textContent = 'Histogram məlumatların paylanmasını göstərir. Sütunlar hər intervaldakı məlumat sayını təmsil edir.';
      break;
    case 'kde':
      drawKDE(ctx, canvas);
      codeDiv.innerHTML = '<pre>sns.kdeplot(data=df, x=\\'bal\\', fill=True, color=\\'green\\')</pre>';
      expDiv.textContent = 'KDE (Kernel Density Estimate) hamarlaşdırılmış paylanma əyrisidir. Histogramın hamar versiyasıdır.';
      break;
    case 'box':
      drawBoxPlot(ctx, canvas);
      codeDiv.innerHTML = '<pre>sns.boxplot(data=df, y=\\'bal\\', color=\\'orange\\')</pre>';
      expDiv.textContent = 'Box Plot median, kvartillər və outlier-ləri göstərir. Qutu içindəki xətt mediandır.';
      break;
    case 'violin':
      drawViolin(ctx, canvas);
      codeDiv.innerHTML = '<pre>sns.violinplot(data=df, x=\\'sinif\\', y=\\'bal\\', palette=\\'muted\\')</pre>';
      expDiv.textContent = 'Violin Plot həm Box Plot, həm də KDE funksionallığını birləşdirir. Paylanmanın formasını göstərir.';
      break;
  }
}

function drawHistogram(ctx, canvas) {
  const padding = 60;
  const chartWidth = canvas.width - 2 * padding;
  const chartHeight = canvas.height - 2 * padding;
  
  // Calculate bins
  const bins = 10;
  const min = Math.min(...sampleData.bal);
  const max = Math.max(...sampleData.bal);
  const binWidth = (max - min) / bins;
  
  const counts = new Array(bins).fill(0);
  sampleData.bal.forEach(val => {
    const binIndex = Math.min(Math.floor((val - min) / binWidth), bins - 1);
    counts[binIndex]++;
  });
  
  const maxCount = Math.max(...counts);
  const barWidth = chartWidth / bins;
  
  // Draw bars
  counts.forEach((count, i) => {
    const height = (count / maxCount) * chartHeight;
    const x = padding + i * barWidth;
    const y = canvas.height - padding - height;
    
    ctx.fillStyle = '#00d9ff';
    ctx.fillRect(x + 2, y, barWidth - 4, height);
    
    // Draw bin label
    ctx.fillStyle = '#fff';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    const binStart = Math.round(min + i * binWidth);
    ctx.fillText(binStart, x + barWidth/2, canvas.height - padding + 15);
  });
  
  drawAxes(ctx, canvas, padding, 'Bal', 'Say');
}

function drawKDE(ctx, canvas) {
  const padding = 60;
  const chartWidth = canvas.width - 2 * padding;
  const chartHeight = canvas.height - 2 * padding;
  
  // Simple KDE approximation
  const min = Math.min(...sampleData.bal) - 5;
  const max = Math.max(...sampleData.bal) + 5;
  const points = 100;
  
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 255, 136, 0.3)';
  ctx.strokeStyle = '#00ff88';
  ctx.lineWidth = 3;
  
  for (let i = 0; i <= points; i++) {
    const x = min + (max - min) * (i / points);
    let y = 0;
    
    // Gaussian kernel
    sampleData.bal.forEach(val => {
      const dist = (x - val) / 5;
      y += Math.exp(-0.5 * dist * dist);
    });
    y /= sampleData.bal.length * 5 * Math.sqrt(2 * Math.PI);
    
    const canvasX = padding + ((x - min) / (max - min)) * chartWidth;
    const canvasY = canvas.height - padding - (y * chartHeight * 15);
    
    if (i === 0) ctx.moveTo(canvasX, canvasY);
    else ctx.lineTo(canvasX, canvasY);
    
    if (i === points) {
      ctx.lineTo(canvasX, canvas.height - padding);
      ctx.lineTo(padding, canvas.height - padding);
      ctx.closePath();
      ctx.fill();
    }
  }
  
  ctx.stroke();
  drawAxes(ctx, canvas, padding, 'Bal', 'Sıxlıq');
}

function drawBoxPlot(ctx, canvas) {
  const padding = 60;
  const centerX = canvas.width / 2;
  
  const sorted = [...sampleData.bal].sort((a,b) => a-b);
  const q1 = sorted[Math.floor(sorted.length * 0.25)];
  const median = sorted[Math.floor(sorted.length * 0.5)];
  const q3 = sorted[Math.floor(sorted.length * 0.75)];
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  
  const scale = 3;
  const baseY = canvas.height - padding;
  
  // Draw box
  ctx.fillStyle = 'rgba(255, 107, 107, 0.3)';
  ctx.fillRect(centerX - 40, baseY - q3 * scale, 80, (q3 - q1) * scale);
  
  ctx.strokeStyle = '#ff6b6b';
  ctx.lineWidth = 2;
  ctx.strokeRect(centerX - 40, baseY - q3 * scale, 80, (q3 - q1) * scale);
  
  // Median line
  ctx.beginPath();
  ctx.moveTo(centerX - 40, baseY - median * scale);
  ctx.lineTo(centerX + 40, baseY - median * scale);
  ctx.stroke();
  
  // Whiskers
  ctx.beginPath();
  ctx.moveTo(centerX, baseY - q1 * scale);
  ctx.lineTo(centerX, baseY - min * scale);
  ctx.moveTo(centerX, baseY - q3 * scale);
  ctx.lineTo(centerX, baseY - max * scale);
  ctx.stroke();
  
  // Min/max caps
  ctx.beginPath();
  ctx.moveTo(centerX - 20, baseY - min * scale);
  ctx.lineTo(centerX + 20, baseY - min * scale);
  ctx.moveTo(centerX - 20, baseY - max * scale);
  ctx.lineTo(centerX + 20, baseY - max * scale);
  ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#fff';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Bal', centerX, 30);
}

function drawViolin(ctx, canvas) {
  const padding = 60;
  const chartWidth = canvas.width - 2 * padding;
  
  // Draw two violins for two classes
  const classes = ['10A', '10B'];
  const colors = ['#00d9ff', '#e94560'];
  
  classes.forEach((cls, idx) => {
    const centerX = padding + chartWidth * (idx + 0.5) / 2;
    const classData = sampleData.bal.filter((_, i) => sampleData.sinif[i] === cls);
    
    // Simple violin shape
    ctx.fillStyle = colors[idx] + '40';
    ctx.strokeStyle = colors[idx];
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    for (let i = 0; i <= 20; i++) {
      const y = 100 + i * 10;
      const width = 30 + Math.sin(i * 0.5) * 20;
      if (i === 0) ctx.moveTo(centerX - width, y);
      else ctx.lineTo(centerX - width, y);
    }
    for (let i = 20; i >= 0; i--) {
      const y = 100 + i * 10;
      const width = 30 + Math.sin(i * 0.5) * 20;
      ctx.lineTo(centerX + width, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Class label
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(cls, centerX, canvas.height - 20);
  });
}

function updateRelPlot() {
  const xVar = document.getElementById('relX').value;
  const yVar = document.getElementById('relY').value;
  const hue = document.getElementById('relHue').value;
  const kind = document.getElementById('relKind').value;
  
  const canvas = document.getElementById('relCanvas');
  const ctx = canvas.getContext('2d');
  const codeDiv = document.getElementById('relCode');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Generate code
  let code = '';
  if (kind === 'scatter') {
    code = \`sns.scatterplot(data=df, x='\${xVar}', y='\${yVar}'\`;
    if (hue !== 'none') code += \`, hue='\${hue}'\`;
    code += \`, s=100, alpha=0.7)\`;
  } else if (kind === 'line') {
    code = \`sns.lineplot(data=df, x='\${xVar}', y='\${yVar}'\`;
    if (hue !== 'none') code += \`, hue='\${hue}'\`;
    code += \`, marker='o')\`;
  } else {
    code = \`sns.regplot(data=df, x='\${xVar}', y='\${yVar}', scatter_kws={'alpha':0.5})\`;
  }
  
  codeDiv.innerHTML = '<pre>' + code + '</pre>';
  
  // Draw simple scatter
  const padding = 60;
  const colors = hue === 'none' ? ['#00d9ff'] : ['#e94560', '#00ff88'];
  
  sampleData.bal.forEach((val, i) => {
    const x = padding + Math.random() * (canvas.width - 2 * padding);
    const y = canvas.height - padding - (val / 100) * (canvas.height - 2 * padding);
    
    ctx.fillStyle = hue === 'none' ? colors[0] : 
                   (sampleData[hue][i] === sampleData[hue][0] ? colors[0] : colors[1]);
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.globalAlpha = 1;
  drawAxes(ctx, canvas, padding, xVar, yVar);
}

function showCatPlot(type) {
  document.querySelectorAll('.cat-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  const viz = document.getElementById('catViz');
  const codeDiv = document.getElementById('catCode');
  
  const codes = {
    'bar': "sns.barplot(data=df, x='sinif', y='bal', palette='viridis')",
    'count': "sns.countplot(data=df, x='sinif', palette='pastel')",
    'box': "sns.boxplot(data=df, x='sinif', y='bal', hue='cinsiyyet')",
    'violin': "sns.violinplot(data=df, x='sinif', y='bal', inner='box')",
    'strip': "sns.stripplot(data=df, x='sinif', y='bal', jitter=True, alpha=0.6)",
    'swarm': "sns.swarmplot(data=df, x='sinif', y='bal', size=6)"
  };
  
  codeDiv.innerHTML = '<pre>' + codes[type] + '</pre>';
  viz.innerHTML = '<div style="color: #00d9ff; font-size: 18px;">' + type.toUpperCase() + ' PLOT</div>';
}

function updateHeatmap() {
  const size = parseInt(document.getElementById('matrixSize').value);
  const palette = document.getElementById('heatmapPalette').value;
  const showAnnot = document.getElementById('showAnnot').checked;
  
  document.getElementById('sizeValue').textContent = size + 'x' + size;
  
  const display = document.getElementById('heatmapDisplay');
  const codeDiv = document.getElementById('heatmapCode');
  
  // Generate random correlation matrix
  let html = '<div class="heatmap-grid" style="grid-template-columns: repeat(' + size + ', 1fr);">';
  
  const palettes = {
    'coolwarm': ['#3b4cc0', '#8daaff', '#c0d3f5', '#f5c3c3', '#f47f7f', '#b40426'],
    'viridis': ['#440154', '#31688e', '#35b779', '#fde725'],
    'plasma': ['#0d0887', '#7e03a8', '#cc4778', '#f89441', '#f0f921'],
    'blues': ['#f7fbff', '#c6dbef', '#6baed6', '#2171b5', '#08306b'],
    'reds': ['#fff5f0', '#fcbba1', '#fb6a4a', '#cb181d', '#67000d']
  };
  
  const colors = palettes[palette];
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const val = (Math.random() * 2 - 1).toFixed(2);
      const colorIndex = Math.floor(((parseFloat(val) + 1) / 2) * (colors.length - 1));
      const bg = colors[Math.max(0, Math.min(colorIndex, colors.length - 1))];
      const textColor = parseFloat(val) > 0 ? '#000' : '#fff';
      
      html += \`<div class="heatmap-cell" style="background: \${bg}; color: \${textColor}">
        \${showAnnot ? val : ''}
      </div>\`;
    }
  }
  
  html += '</div>';
  display.innerHTML = html;
  
  codeDiv.innerHTML = \`<pre>sns.heatmap(corr_matrix, annot=\${showAnnot}, cmap='\${palette}', 
            center=0, square=True, linewidths=0.5)</pre>\`;
}

function generatePairplot() {
  const grid = document.getElementById('pairplotGrid');
  const hue = document.getElementById('pairHue').value;
  const codeDiv = document.getElementById('pairCode');
  
  grid.innerHTML = '';
  
  // Create 3x3 grid
  const vars = ['Yaş', 'Bal', 'Davamiyyət'];
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('div');
      cell.className = 'pairplot-cell' + (i === j ? ' diag' : '');
      
      if (i === j) {
        cell.textContent = vars[i] + ' (dist)';
        cell.style.background = '#0f3460';
      } else {
        cell.textContent = vars[j] + ' vs ' + vars[i];
      }
      
      grid.appendChild(cell);
    }
  }
  
  codeDiv.innerHTML = \`<pre>sns.pairplot(df, vars=['yas', 'bal', 'davamiyyet'], 
             hue='\${hue}', palette='bright', diag_kind='kde')</pre>\`;
}

function previewStyle() {
  const style = document.getElementById('snsStyle').value;
  const context = document.getElementById('snsContext').value;
  const palette = document.getElementById('snsPalette').value;
  
  const canvas = document.getElementById('styleCanvas');
  const ctx = canvas.getContext('2d');
  const codeDiv = document.getElementById('styleCode');
  
  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Apply style background
  const bgColors = {
    'whitegrid': '#ffffff',
    'darkgrid': '#1a1a2e',
    'white': '#ffffff',
    'dark': '#0d1117',
    'ticks': '#ffffff'
  };
  
  ctx.fillStyle = bgColors[style] || '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw sample plot
  const colors = {
    'deep': ['#4c72b0', '#dd8452', '#55a868', '#c44e52'],
    'muted': ['#4878d0', '#ee854a', '#6acc64', '#d65f5f'],
    'bright': ['#023eff', '#ff7c00', '#1ac938', '#e8000b'],
    'pastel': ['#a1c9f4', '#ffb482', '#8de5a1', '#ff9f9b'],
    'dark': ['#001c7f', '#b1400d', '#12711c', '#8c0800'],
    'colorblind': ['#0173b2', '#de8f05', '#029e73', '#d55e00']
  };
  
  const paletteColors = colors[palette] || colors['deep'];
  
  // Draw bars with palette
  const barWidth = 80;
  const gap = 40;
  const baseY = 250;
  
  paletteColors.forEach((color, i) => {
    const height = 50 + Math.random() * 100;
    ctx.fillStyle = color;
    ctx.fillRect(50 + i * (barWidth + gap), baseY - height, barWidth, height);
  });
  
  // Code
  codeDiv.innerHTML = \`<pre>sns.set_style('\${style}')
sns.set_context('\${context}')
sns.set_palette('\${palette}')

sns.barplot(data=df, x='kateqoriya', y='deyer')</pre>\`;
}

function drawAxes(ctx, canvas, padding, xLabel, yLabel) {
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  
  // Y axis
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, canvas.height - padding);
  ctx.stroke();
  
  // X axis
  ctx.beginPath();
  ctx.moveTo(padding, canvas.height - padding);
  ctx.lineTo(canvas.width - padding, canvas.height - padding);
  ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#ffd700';
  ctx.font = '14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(xLabel, canvas.width / 2, canvas.height - 10);
  
  ctx.save();
  ctx.translate(20, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();
}

// Initialize
updateHeatmap();
previewStyle();
console.log('Seaborn Lab loaded!');`
  },

  exercise: {
    title: "🏥 Xəstəxana Pasient Analizi Dashboard",
    description: "Böyük bir xəstəxananın pasient məlumatlarını Seaborn istifadə edərək hərtərəfli analiz edin. Statistik vizualizasiyalar ilə pasientlərin sağlamlıq göstəricilərini təhlil edin.",
    requirements: [
      "200 pasient üçün DataFrame yaradın: Yaş, Cinsiyyət, Qan qrupu, Xəstəlik növü, Müalicə müddəti (gün), Sağalma statusu, Xərc (AZN)",
      "Distribusiya analizi: Yaşların histogramı, Müalicə müddətinin KDE əyrisi",
      "Kateqorik analiz: Xəstəlik növünə görə orta müalicə müddəti (barplot), Qan qrupu paylanması (countplot)",
      "Münasibət analizi: Yaş vs Xərc scatter plot (cinsiyyətə görə rəngləndirilmiş), Müalicə müddəti vs Xərc regression plot",
      "Çoxdəyişənli analiz: Xəstəlik və Cinsiyyətə görə Box plot (xərc), Violin plot (müalicə müddəti)",
      "Korrelyasiya matriksi: Ədədi dəyişənlər arası əlaqə (heatmap, annot=True)",
      "Facet Grid: Hər xəstəlik üçün ayrı scatter plot (yaş vs xərc)",
      "Ümumi stil tətbiq edin: whitegrid, talk context, husl palette və yadda saxlayın"
    ],
    starterCode: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Təkrarlanabilirlik üçün
np.random.seed(42)

# 1. Məlumat yaradın (200 pasient)
n = 200

data = {
    'Yas': np.random.randint(18, 85, n),
    'Cinsiyyet': np.random.choice(['K', 'E'], n),
    'Qan_Qrupu': np.random.choice(['A+', 'B+', 'AB+', 'O+', 'A-', 'B-'], n),
    'Xestelik': np.random.choice(['Ürək', 'Şəkər', 'Tənəffüs', 'Onkoloji', 'Travma'], n, 
                                p=[0.25, 0.20, 0.20, 0.15, 0.20]),
    'Mualice_Muddeti': np.random.randint(1, 60, n),
    'Sagalma': np.random.choice(['Bəli', 'Xeyr', 'Davam edir'], n, p=[0.7, 0.15, 0.15]),
    'Xerc': np.random.normal(5000, 2000, n).astype(int)
}

df = pd.DataFrame(data)

# Mənfi xərcləri düzəldək
df['Xerc'] = df['Xerc'].clip(lower=500)

print("Məlumat strukturu:")
print(df.head(10))
print(f"\\\\nÜmumi pasient sayı: {len(df)}")

# 2. Seaborn stilini təyin edin
# Kodunuzu bura yazın...

# 3. Böyük şəkil yaradın (16x12)
plt.figure(figsize=(16, 12))

# 4. Distribusiya analizi (2 qrafik)
# Yaş histogramı - subplot(3,3,1)
# Kodunuzu bura yazın...

# Müalicə müddəti KDE - subplot(3,3,2)
# Kodunuzu bura yazın...

# 5. Kateqorik analiz (2 qrafik)
# Xəstəlik üzrə orta müalicə - subplot(3,3,3)
# Kodunuzu bura yazın...

# Qan qrupu paylanması - subplot(3,3,4)
# Kodunuzu bura yazın...

# 6. Münasibət analizi (2 qrafik)
# Yaş vs Xərc scatter - subplot(3,3,5)
# Kodunuzu bura yazın...

# Regression plot - subplot(3,3,6)
# Kodunuzu bura yazın...

# 7. Çoxdəyişənli analiz (2 qrafik)
# Box plot - subplot(3,3,7)
# Kodunuzu bura yazın...

# Violin plot - subplot(3,3,8)
# Kodunuzu bura yazın...

# 8. Korrelyasiya heatmap - subplot(3,3,9)
# Kodunuzu bura yazın...

plt.suptitle('Xəstəxana Pasient Analizi 2024', fontsize=20, fontweight='bold', y=0.98)
plt.tight_layout()
plt.savefig('xestexana_analizi.png', dpi=300, bbox_inches='tight')
plt.show()

# 9. Facet Grid (ayrıca)
# Hər xəstəlik üçün Yaş vs Xərc scatter plot
# Kodunuzu bura yazın...`,
  },

  quiz: [
    {
      question: "Seaborn hansı kitabxana əsasında qurulub?",
      options: ["NumPy", "Pandas", "Matplotlib", "Plotly"],
      correctAnswer: 2
    },
    {
      question: "sns.histplot() funksiyasında KDE əyrisini əlavə etmək üçün hansı parametr istifadə olunur?",
      options: ["smooth=True", "curve=True", "kde=True", "density=True"],
      correctAnswer: 2
    },
    {
      question: "Box Plot-da qutu içindəki xətt nəyi göstərir?",
      options: ["Ortalama", "Median", "Moda", "Standart meyl"],
      correctAnswer: 1
    },
    {
      question: "3-cü dəyişəni (kateqoriya) rənglə fərqləndirmək üçün hansı parametr istifadə olunur?",
      options: ["color", "palette", "hue", "style"],
      correctAnswer: 2
    },
    {
      question: "sns.heatmap() funksiyasında hüceyrə dəyərlərini göstərmək üçün hansı parametr lazımdır?",
      options: ["values=True", "labels=True", "annot=True", "text=True"],
      correctAnswer: 2
    },
    {
      question: "Violin Plot hansı iki qrafiki birləşdirir?",
      options: ["Histogram və Scatter", "Box Plot və KDE", "Bar və Line", "Pie və Bar"],
      correctAnswer: 1
    },
    {
      question: "sns.pairplot() funksiyası nə edir?",
      options: ["İki dəyişən müqayisə edir", "Bütün ədədi sütunların cüt kombinasiyalarını göstərir", "Heatmap yaradır", "Regression analizi aparır"],
      correctAnswer: 1
    },
    {
      question: "FacetGrid nə üçün istifadə olunur?",
      options: ["Bir qrafiki böyütmək", "Alt qruplara görə çoxlu qrafiklər yaratmaq", "3D qrafiklər çəkmək", "Animasiya yaratmaq"],
      correctAnswer: 1
    },
    {
      question: "sns.set_style('whitegrid') əmri nə edir?",
      options: ["Rəngləri dəyişir", "Fon stilini və grid xətlərini təyin edir", "Şrift ölçüsünü dəyişir", "Qrafik ölçüsünü təyin edir"],
      correctAnswer: 1
    },
    {
      question: "Hansı Seaborn funksiyası avtomatik olaraq regression xətti çəkir?",
      options: ["sns.scatterplot()", "sns.lineplot()", "sns.regplot()", "sns.pointplot()"],
      correctAnswer: 2
    }
  ]
};

export default topicai20;