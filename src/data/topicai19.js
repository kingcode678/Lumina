export const topicai19 = {
  id: 19,
  title: "Data Vizualizasiya: Matplotlib",
  duration: "130 dəq",
  isFree: false,
  
  content: `
    <h4>🎨 Nə Üçün Vizualizasiya Lazımdır?</h4>
    <p>Təsəvvür edin ki, sizdə bir ilin satış məlumatları var - 365 sətir, hər biri rəqəmlərlə dolu. Bu məlumatları tək-tək oxumaqla trendləri görmək çətindir. Ancaq bu məlumatları <strong>qrafik</strong> şəklində göstərsək, artım və azalma dərhal gözə çarpır.</p>
    
    <p><strong>Matplotlib</strong> - Python-un ən əsas və güclü vizualizasiya kitabxanasıdır. Bu kitabxana ilə istənilən növ qrafik çəkə bilərsiniz: xətt qrafikləri, sütun diaqramları, pasta diaqramları, saçılma diaqramları və s.</p>

    <h4>📦 Matplotlib-in Quruluşu</h4>
    <p>Matplotlib iki səviyyədə işləyir:</p>
    <ul>
      <li><strong>Pyplot (plt)</strong> - Sadə, tez qrafiklər üçün (əksər hallarda bu yetərlidir)</li>
      <li><strong>Object-Oriented (OO)</strong> - Mürəkkəb, professional qrafiklər üçün (Figure və Axes obyektləri)</li>
    </ul>

    <h4>🚀 İlk Qrafikiniz</h4>
    <p>Ən sadə formada qrafik çəkmək:</p>
    
    <pre><code>import matplotlib.pyplot as plt

# Məlumatlar
aylar = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May']
satis = [120, 150, 180, 140, 200]

# Qrafik çəkmək
plt.plot(aylar, satis)

# Göstərmək
plt.show()</code></pre>

    <p>Burada:</p>
    <ul>
      <li><code>plt.plot()</code> - xətt qrafiki çəkir</li>
      <li><code>plt.show()</code> - qrafiki ekranda göstərir</li>
      <li>Birinci arqument (aylar) - x oxu (horizontal)</li>
      <li>İkinci arqument (satis) - y oxu (vertikal)</li>
    </ul>

    <h4>✨ Qrafiki Gözəlləşdirmək</h4>
    <p>Əsas xətt qrafikini professional görünüşə salaq:</p>
    
    <pre><code>plt.figure(figsize=(10, 6))  # Ölçü: en x hündürlük (düym ilə)

plt.plot(aylar, satis, 
         color='red',           # Xətt rəngi
         linewidth=2,           # Xətt qalınlığı
         marker='o',            # Nöqtə işarələri
         markersize=8,          # İşarə ölçüsü
         linestyle='--',        # Xətt stili (solid, dashed, dotted)
         label='2024 Satışları') # Əfsanə üçün etiket

plt.title('Aylıq Satış Dinamikası', fontsize=16, fontweight='bold')
plt.xlabel('Aylar', fontsize=12)
plt.ylabel('Satış (min AZN)', fontsize=12)
plt.grid(True, alpha=0.3)       # Şəbəkə xətləri
plt.legend()                    # Əfsanəni göstər

plt.show()</code></pre>

    <h4>📊 Fərqli Qrafik Tipləri</h4>
    
    <p><strong>1. Sütun Diaqramı (Bar Chart)</strong></p>
    <p>Kateqoriyaları müqayisə etmək üçün:</p>
    <pre><code>fennler = ['Riyaz', 'Fizika', 'Kimya', 'Bio']
ballar = [85, 72, 90, 78]

plt.bar(fennler, ballar, color=['red', 'blue', 'green', 'orange'])
plt.title('Fənn Üzrə Orta Ballar')
plt.ylabel('Bal')

# Dəyərləri sütunların üzərinə yazmaq
for i, v in enumerate(ballar):
    plt.text(i, v + 1, str(v), ha='center', fontweight='bold')

plt.show()</code></pre>

    <p><strong>2. Üfüqi Sütun Diaqramı</strong></p>
    <pre><code>plt.barh(fennler, ballar, color='skyblue')
plt.xlabel('Bal')
plt.title('Fənn Üzrə Nəticələr')</code></pre>

    <p><strong>3. Pasta Diaqramı (Pie Chart)</strong></p>
    <p>Tərkib hissələrini göstərmək üçün:</p>
    <pre><code>paylar = [30, 25, 25, 20]
etiketler = ['Elektronika', 'Geyim', 'Ərzaq', 'Digər']
rengler = ['gold', 'lightcoral', 'lightskyblue', 'lightgreen']

plt.pie(paylar, labels=etiketler, colors=rengler, 
        autopct='%1.1f%%',        # Faiz göstərişi
        startangle=90,            # Başlanğıc bucağı
        explode=(0.1, 0, 0, 0))   # Bir hissəni ayırmaq

plt.title('Satışların Bölgüsü')
plt.show()</code></pre>

    <p><strong>4. Saçılma Diaqramı (Scatter Plot)</strong></p>
    <p>İki dəyişən arasındakı əlaqəni göstərmək üçün:</p>
    <pre><code>telebe_sayi = [20, 35, 50, 65, 80, 95]
ort_bal = [65, 72, 78, 82, 85, 88]

plt.scatter(telebe_sayi, ort_bal, 
           s=100,              # Nöqtə ölçüsü
           c='red',            # Rəng
           alpha=0.6,          # Şəffaflıq
           edgecolors='black') # Kenar xətti

plt.xlabel('Tələbə Sayı')
plt.ylabel('Orta Bal')
plt.title('Tələbə Sayı və Müvəffəqiyyət Əlaqəsi')
plt.show()</code></pre>

    <p><strong>5. Histogram</strong></p>
    <p>Məlumatların paylanmasını göstərmək üçün:</p>
    <pre><code>ballar = [65, 72, 78, 85, 90, 65, 70, 88, 92, 75, 68, 82, 95, 70, 78]

plt.hist(ballar, bins=5, color='purple', edgecolor='black', alpha=0.7)
plt.xlabel('Bal Aralıqları')
plt.ylabel('Tələbə Sayı')
plt.title('İmtahan Nəticələrinin Paylanması')
plt.show()</code></pre>

    <h4>🎯 Birdən Çox Qrafik (Subplots)</h4>
    <p>Bir səhifədə bir neçə qrafik göstərmək:</p>
    
    <pre><code># 2 sətir, 2 sütun = 4 qrafik
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 1-ci qrafik (solda yuxarı)
axes[0, 0].plot(aylar, satis, 'o-')
axes[0, 0].set_title('Xətt Qrafiki')

# 2-ci qrafik (sağda yuxarı)
axes[0, 1].bar(fennler, ballar, color='green')
axes[0, 1].set_title('Sütun Diaqramı')

# 3-cü qrafik (solda aşağı)
axes[1, 0].pie(paylar, labels=etiketler, autopct='%1.0f%%')
axes[1, 0].set_title('Pasta Diaqramı')

# 4-cü qrafik (sağda aşağı)
axes[1, 1].scatter(telebe_sayi, ort_bal)
axes[1, 1].set_title('Saçılma Diaqramı')

# Ümumi başlıq
fig.suptitle('Satış Analizi Dashboard', fontsize=16, fontweight='bold')
plt.tight_layout()  # Qrafiklər arası məsafəni tənzimlə
plt.show()</code></pre>

    <h4>🎨 Stil və Rənglər</h4>
    <p>Matplotlib-də hazır stillər var:</p>
    <pre><code>plt.style.use('seaborn')      # Seaborn stili
plt.style.use('ggplot')       # R-ın ggplot stili
plt.style.use('dark_background') # Qaranlıq fon

# Bütün stilləri görə bilərsiniz:
print(plt.style.available)</code></pre>

    <h4>💾 Qrafiki Yadda Saxlamaq</h4>
    <pre><code># Yüksək keyfiyyətdə yadda saxlamaq
plt.savefig('qrafik.png', dpi=300, bbox_inches='tight')

# PDF formatında
plt.savefig('qrafik.pdf', bbox_inches='tight')

# Transparent fon ilə
plt.savefig('qrafik.png', transparent=True)</code></pre>

    <h4>📈 Pandas ilə Birlikdə İstifadə</h4>
    <p>Matplotlib Pandas DataFrame-ləri ilə birbaşa işləyir:</p>
    <pre><code>import pandas as pd

df = pd.DataFrame({
    'ay': aylar,
    'satis': satis,
    'xercler': [100, 120, 140, 130, 160]
})

# Birbaşa plot() metodu
df.plot(x='ay', y=['satis', 'xercler'], kind='line', 
        figsize=(10, 6), marker='o')
plt.title('Gəlir və Xərclər')
plt.show()

# Və ya
df.plot(kind='bar', x='ay', y='satis', color='green')
plt.show()</code></pre>

    <h4>⚠️ Tez-tez Rast Gəlinən Xətalar</h4>
    <ul>
      <li><strong>plt.show() unutmaq:</strong> Qrafik görünməyə bilər</li>
      <li><strong>Data tipi uyğunsuzluğu:</strong> X oxu üçün string, Y oxu üçün rəqəm olmalıdır</li>
      <li><strong>Ölçü çox böyük/kiçik:</strong> figsize parametri ilə tənzimləyin</li>
      <li><strong>Etiketlər üst-üstə düşür:</strong> plt.tight_layout() istifadə edin</li>
      <li><strong>Rəng kodları:</strong> Hex kod (#FF5733) və ya ad ('red') istifadə edin</li>
    </ul>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə qrafikə <strong>başlıq</strong> və <strong>ox etiketləri</strong> əlavə edin</li>
      <li>Rəngləri məna daşıyacaq şəkildə seçin (məsələn, qırmızı = xəta, yaşıl = uğur)</li>
      <li>Çox məlumat olduqda <strong>şəffaflıq</strong> (alpha) istifadə edin</li>
      <li>Əfsanə (legend) həmişə aydın və oxunaqlı olsun</li>
      <li>Qrafiki yadda saxlamazdan əvvəl <code>tight_layout()</code> çağırın</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="matplotlib-lab">
  <h2>📈 Matplotlib Vizualizasiya Lab</h2>
  
  <section class="demo-section">
    <h3>1. Qrafik Tip Seçici</h3>
    <div class="chart-type-selector">
      <div class="chart-options">
        <button onclick="setChartType('line')" class="chart-btn active" data-type="line">📈 Xətt Qrafiki</button>
        <button onclick="setChartType('bar')" class="chart-btn" data-type="bar">📊 Sütun Diaqramı</button>
        <button onclick="setChartType('pie')" class="chart-btn" data-type="pie">🥧 Pasta Diaqramı</button>
        <button onclick="setChartType('scatter')" class="chart-btn" data-type="scatter">⚪ Saçılma</button>
      </div>
      
      <div class="chart-config">
        <div class="config-group">
          <label>Rəng:</label>
          <input type="color" id="chartColor" value="#00ff88" onchange="updateChart()">
        </div>
        <div class="config-group">
          <label>Başlıq:</label>
          <input type="text" id="chartTitle" value="Aylıq Satışlar" onchange="updateChart()">
        </div>
        <div class="config-group">
          <label>X Oxu:</label>
          <input type="text" id="xLabel" value="Aylar" onchange="updateChart()">
        </div>
        <div class="config-group">
          <label>Y Oxu:</label>
          <input type="text" id="yLabel" value="Satış (min)" onchange="updateChart()">
        </div>
      </div>
      
      <div class="chart-display" id="chartDisplay">
        <canvas id="mainCanvas" width="800" height="400"></canvas>
      </div>
      
      <div class="python-code-display" id="pythonCode">
        <pre>plt.plot(aylar, satis, color='#00ff88', marker='o')
plt.title('Aylıq Satışlar')
plt.xlabel('Aylar')
plt.ylabel('Satış (min)')
plt.show()</pre>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Subplot Layout Builder</h3>
    <div class="subplot-builder">
      <div class="layout-selector">
        <label>Layout:</label>
        <select id="layoutSelect" onchange="updateSubplots()">
          <option value="1x2">1 sətir, 2 sütun</option>
          <option value="2x1">2 sətir, 1 sütun</option>
          <option value="2x2">2 sətir, 2 sütun</option>
          <option value="3x1">3 sətir, 1 sütun</option>
        </select>
        <button onclick="generateSubplots()">Tətbiq Et</button>
      </div>
      <div class="subplot-preview" id="subplotPreview"></div>
      <div class="code-output" id="subplotCode"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Stil Galereyası</h3>
    <div class="style-gallery">
      <div class="style-buttons">
        <button onclick="applyStyle('default')" class="style-btn">Default</button>
        <button onclick="applyStyle('seaborn')" class="style-btn">Seaborn</button>
        <button onclick="applyStyle('ggplot')" class="style-btn">GGPlot</button>
        <button onclick="applyStyle('dark')" class="style-btn">Dark</button>
        <button onclick="applyStyle('bmh')" class="style-btn">BMH</button>
      </div>
      <div class="style-preview" id="stylePreview">
        <canvas id="styleCanvas" width="600" height="300"></canvas>
      </div>
      <div class="style-description" id="styleDesc">Default Matplotlib stili</div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. İnteraktiv Data Plotter</h3>
    <div class="interactive-plotter">
      <div class="data-input">
        <h4>Məlumat Daxil Edin (vergüllə ayrılmış):</h4>
        <div class="input-group">
          <label>X dəyərləri:</label>
          <input type="text" id="xValues" value="Yanvar, Fevral, Mart, Aprel, May" placeholder="A, B, C...">
        </div>
        <div class="input-group">
          <label>Y dəyərləri:</label>
          <input type="text" id="yValues" value="120, 150, 180, 140, 200" placeholder="10, 20, 30...">
        </div>
        <button onclick="plotCustomData()">Qrafik Çək</button>
      </div>
      <div class="custom-chart" id="customChart">
        <canvas id="customCanvas" width="700" height="350"></canvas>
      </div>
      <div class="export-options">
        <button onclick="downloadChart('png')">PNG Yüklə</button>
        <button onclick="downloadChart('svg')">SVG Yüklə</button>
        <button onclick="showPythonCode()">Python Kodu Göstər</button>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Qrafik Anatomiyası</h3>
    <div class="anatomy-section">
      <div class="anatomy-chart" id="anatomyChart">
        <svg viewBox="0 0 600 400" class="anatomy-svg">
          <!-- Xətt qrafiki -->
          <polyline points="50,300 150,250 250,200 350,280 450,150 550,100" 
                    fill="none" stroke="#00ff88" stroke-width="3"/>
          
          <!-- Oxlar -->
          <line x1="50" y1="350" x2="550" y2="350" stroke="white" stroke-width="2"/>
          <line x1="50" y1="350" x2="50" y2="50" stroke="white" stroke-width="2"/>
          
          <!-- Anatomiya etiketləri -->
          <circle cx="300" cy="100" r="4" fill="#ffd700" class="anatomy-point" data-part="title"/>
          <text x="300" y="80" fill="#ffd700" text-anchor="middle" font-size="12">Başlıq (Title)</text>
          
          <circle cx="300" cy="375" r="4" fill="#ff6b6b" class="anatomy-point" data-part="xlabel"/>
          <text x="300" y="395" fill="#ff6b6b" text-anchor="middle" font-size="12">X Etiketi</text>
          
          <circle cx="20" cy="200" r="4" fill="#00d9ff" class="anatomy-point" data-part="ylabel"/>
          <text x="20" y="200" fill="#00d9ff" text-anchor="middle" font-size="12" transform="rotate(-90 20 200)">Y Etiketi</text>
          
          <circle cx="300" cy="240" r="4" fill="#ff6b6b" class="anatomy-point" data-part="line"/>
          <text x="350" y="240" fill="#ff6b6b" font-size="12">Xətt (Line)</text>
          
          <circle cx="150" cy="250" r="4" fill="#ffd700" class="anatomy-point" data-part="marker"/>
          <text x="150" y="230" fill="#ffd700" font-size="12">Marker</text>
        </svg>
      </div>
      <div class="anatomy-info" id="anatomyInfo">
        <p>Qrafikin üzərindəki nöqtələrə klikləyərək hər hissə haqqında məlumat əldə edin.</p>
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
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.matplotlib-lab {
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

/* Chart Type Selector */
.chart-options {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.chart-btn {
  background: #30363d;
  border: 2px solid transparent;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
}

.chart-btn.active, .chart-btn:hover {
  border-color: #00ff88;
  color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
}

.chart-config {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.config-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.config-group label {
  color: #ffd700;
  font-weight: 600;
  font-size: 14px;
}

.config-group input {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}

.config-group input[type="color"] {
  height: 40px;
  cursor: pointer;
}

.chart-display {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  border: 2px solid #30363d;
}

canvas {
  max-width: 100%;
  height: auto;
}

.python-code-display {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #00ff88;
  font-family: 'Fira Code', monospace;
  color: #7ee787;
  overflow-x: auto;
}

/* Subplot Builder */
.layout-selector {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
}

.layout-selector label {
  color: #ffd700;
  font-weight: 600;
}

.layout-selector select {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  min-width: 200px;
}

.subplot-preview {
  display: grid;
  gap: 15px;
  margin-bottom: 20px;
  min-height: 300px;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.subplot-cell {
  background: #0d1117;
  border: 2px dashed #30363d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b949e;
  font-size: 14px;
  min-height: 150px;
}

/* Style Gallery */
.style-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.style-btn {
  background: #30363d;
  border: 2px solid transparent;
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.style-btn:hover {
  border-color: #00ff88;
  color: #00ff88;
}

.style-preview {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}

.style-description {
  text-align: center;
  color: #8b949e;
  font-style: italic;
}

/* Interactive Plotter */
.interactive-plotter {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.data-input {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  color: #ffd700;
  margin-bottom: 5px;
  font-weight: 600;
}

.input-group input {
  width: 100%;
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
}

.custom-chart {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
}

.export-options {
  grid-column: 1 / -1;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.export-options button {
  background: #30363d;
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.export-options button:hover {
  background: #00ff88;
  color: #000;
}

/* Anatomy Section */
.anatomy-chart {
  background: #0d1117;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.anatomy-svg {
  max-width: 100%;
  height: auto;
}

.anatomy-point {
  cursor: pointer;
  transition: all 0.3s;
}

.anatomy-point:hover {
  r: 6;
  filter: drop-shadow(0 0 5px currentColor);
}

.anatomy-info {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #00ff88;
}

/* Buttons */
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
  .interactive-plotter { grid-template-columns: 1fr; }
  .chart-options { flex-direction: column; }
  .chart-config { grid-template-columns: 1fr; }
}`,

    js: `// Matplotlib Lab
let currentChartType = 'line';
const sampleData = {
  labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'],
  values: [120, 150, 180, 140, 200]
};

function setChartType(type) {
  currentChartType = type;
  document.querySelectorAll('.chart-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(\`[data-type="\${type}"]\`).classList.add('active');
  updateChart();
}

function updateChart() {
  const canvas = document.getElementById('mainCanvas');
  const ctx = canvas.getContext('2d');
  const color = document.getElementById('chartColor').value;
  const title = document.getElementById('chartTitle').value;
  const xLabel = document.getElementById('xLabel').value;
  const yLabel = document.getElementById('yLabel').value;
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Set background
  ctx.fillStyle = '#0d1117';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw based on chart type
  switch(currentChartType) {
    case 'line':
      drawLineChart(ctx, canvas, color);
      break;
    case 'bar':
      drawBarChart(ctx, canvas, color);
      break;
    case 'pie':
      drawPieChart(ctx, canvas);
      break;
    case 'scatter':
      drawScatterChart(ctx, canvas, color);
      break;
  }
  
  // Draw labels
  drawLabels(ctx, canvas, title, xLabel, yLabel);
  
  // Update Python code display
  updatePythonCode(color, title, xLabel, yLabel);
}

function drawLineChart(ctx, canvas, color) {
  const padding = 60;
  const chartWidth = canvas.width - 2 * padding;
  const chartHeight = canvas.height - 2 * padding;
  
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  
  const stepX = chartWidth / (sampleData.labels.length - 1);
  const maxVal = Math.max(...sampleData.values);
  const scaleY = chartHeight / maxVal;
  
  sampleData.values.forEach((val, i) => {
    const x = padding + i * stepX;
    const y = canvas.height - padding - val * scaleY;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
    
    // Draw marker
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.stroke();
  
  // Draw axes
  drawAxes(ctx, canvas, padding);
}

function drawBarChart(ctx, canvas, color) {
  const padding = 60;
  const chartWidth = canvas.width - 2 * padding;
  const chartHeight = canvas.height - 2 * padding;
  
  const barWidth = chartWidth / sampleData.labels.length * 0.6;
  const maxVal = Math.max(...sampleData.values);
  const scaleY = chartHeight / maxVal;
  
  sampleData.values.forEach((val, i) => {
    const x = padding + (chartWidth / sampleData.labels.length) * i + 
              (chartWidth / sampleData.labels.length - barWidth) / 2;
    const y = canvas.height - padding - val * scaleY;
    const height = val * scaleY;
    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, barWidth, height);
    
    // Draw value on top
    ctx.fillStyle = '#fff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(val, x + barWidth/2, y - 5);
  });
  
  drawAxes(ctx, canvas, padding);
}

function drawPieChart(ctx, canvas) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(canvas.width, canvas.height) / 3;
  
  const total = sampleData.values.reduce((a, b) => a + b, 0);
  let currentAngle = -Math.PI / 2;
  
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
  
  sampleData.values.forEach((val, i) => {
    const sliceAngle = (val / total) * 2 * Math.PI;
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.strokeStyle = '#0d1117';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw label
    const labelAngle = currentAngle + sliceAngle / 2;
    const labelX = centerX + Math.cos(labelAngle) * (radius + 30);
    const labelY = centerY + Math.sin(labelAngle) * (radius + 30);
    ctx.fillStyle = '#fff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(sampleData.labels[i], labelX, labelY);
    ctx.fillText(\`\${((val/total)*100).toFixed(1)}%\`, labelX, labelY + 15);
    
    currentAngle += sliceAngle;
  });
}

function drawScatterChart(ctx, canvas, color) {
  const padding = 60;
  const chartWidth = canvas.width - 2 * padding;
  const chartHeight = canvas.height - 2 * padding;
  
  // Generate scatter data
  const scatterData = sampleData.values.map((v, i) => ({
    x: i * 20 + Math.random() * 10,
    y: v
  }));
  
  const maxX = Math.max(...scatterData.map(d => d.x));
  const maxY = Math.max(...scatterData.map(d => d.y));
  
  ctx.fillStyle = color;
  scatterData.forEach(point => {
    const x = padding + (point.x / maxX) * chartWidth;
    const y = canvas.height - padding - (point.y / maxY) * chartHeight;
    
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.globalAlpha = 1;
  drawAxes(ctx, canvas, padding);
}

function drawAxes(ctx, canvas, padding) {
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
  
  // X labels
  ctx.fillStyle = '#fff';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  const stepX = (canvas.width - 2 * padding) / (sampleData.labels.length - 1);
  sampleData.labels.forEach((label, i) => {
    ctx.fillText(label, padding + i * stepX, canvas.height - padding + 20);
  });
}

function drawLabels(ctx, canvas, title, xLabel, yLabel) {
  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(title, canvas.width / 2, 30);
  
  ctx.fillStyle = '#fff';
  ctx.font = '14px Arial';
  ctx.fillText(xLabel, canvas.width / 2, canvas.height - 10);
  
  ctx.save();
  ctx.translate(20, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();
}

function updatePythonCode(color, title, xLabel, yLabel) {
  const codeDiv = document.getElementById('pythonCode');
  let code = '';
  
  switch(currentChartType) {
    case 'line':
      code = \`plt.plot(aylar, satis, color='\${color}', marker='o', linewidth=2)
plt.title('\${title}')
plt.xlabel('\${xLabel}')
plt.ylabel('\${yLabel}')
plt.grid(True, alpha=0.3)
plt.show()\`;
      break;
    case 'bar':
      code = \`plt.bar(aylar, satis, color='\${color}')
plt.title('\${title}')
plt.xlabel('\${xLabel}')
plt.ylabel('\${yLabel}')
plt.show()\`;
      break;
    case 'pie':
      code = \`plt.pie(satis, labels=aylar, autopct='%1.1f%%', startangle=90)
plt.title('\${title}')
plt.show()\`;
      break;
    case 'scatter':
      code = \`plt.scatter(aylar, satis, color='\${color}', s=100, alpha=0.6)
plt.title('\${title}')
plt.xlabel('\${xLabel}')
plt.ylabel('\${yLabel}')
plt.show()\`;
      break;
  }
  
  codeDiv.querySelector('pre').textContent = code;
}

function generateSubplots() {
  const layout = document.getElementById('layoutSelect').value;
  const preview = document.getElementById('subplotPreview');
  const codeDiv = document.getElementById('subplotCode');
  
  const [rows, cols] = layout.split('x').map(Number);
  preview.style.gridTemplateColumns = \`repeat(\${cols}, 1fr)\`;
  preview.innerHTML = '';
  
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.className = 'subplot-cell';
    cell.textContent = \`axes[\${Math.floor(i/cols)}, \${i%cols}]\`;
    preview.appendChild(cell);
  }
  
  codeDiv.innerHTML = \`<pre>fig, axes = plt.subplots(\${rows}, \${cols}, figsize=(12, 8))
# axes[\${rows-1}, \${cols-1}] sonuncu qrafik
plt.tight_layout()
plt.show()</pre>\`;
}

function applyStyle(style) {
  const canvas = document.getElementById('styleCanvas');
  const ctx = canvas.getContext('2d');
  const desc = document.getElementById('styleDesc');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const styles = {
    'default': { bg: '#ffffff', line: '#1f77b4', text: '#000000', desc: 'Default Matplotlib stili - klassik ağ fon' },
    'seaborn': { bg: '#eaeaf2', line: '#c44e52', text: '#282828', desc: 'Seaborn stili - müasir görünüş, grid xətləri' },
    'ggplot': { bg: '#e5e5e5', line: '#e69f00', text: '#000000', desc: 'R ggplot stili - boz fon, güclü oxlar' },
    'dark': { bg: '#1a1a1a', line: '#00ff88', text: '#ffffff', desc: 'Qaranlıq tema - gecə rejimi üçün ideal' },
    'bmh': { bg: '#ffffff', line: '#348abd', text: '#333333', desc: 'Bayesian Methods stili - elmi nəşrlər üçün' }
  };
  
  const s = styles[style];
  ctx.fillStyle = s.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw sample line
  ctx.strokeStyle = s.line;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(50, 250);
  ctx.lineTo(150, 200);
  ctx.lineTo(250, 150);
  ctx.lineTo(350, 180);
  ctx.lineTo(450, 100);
  ctx.lineTo(550, 120);
  ctx.stroke();
  
  // Draw axes
  ctx.strokeStyle = s.text;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(50, 280);
  ctx.lineTo(580, 280);
  ctx.stroke();
  
  desc.textContent = s.desc;
}

function plotCustomData() {
  const xInput = document.getElementById('xValues').value;
  const yInput = document.getElementById('yValues').value;
  
  const xVals = xInput.split(',').map(s => s.trim());
  const yVals = yInput.split(',').map(s => parseFloat(s.trim()));
  
  const canvas = document.getElementById('customCanvas');
  const ctx = canvas.getContext('2d');
  
  // Clear and draw
  ctx.fillStyle = '#0d1117';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const padding = 60;
  const chartWidth = canvas.width - 2 * padding;
  const chartHeight = canvas.height - 2 * padding;
  
  const maxVal = Math.max(...yVals);
  const stepX = chartWidth / (xVals.length - 1);
  
  // Draw line
  ctx.strokeStyle = '#00ff88';
  ctx.lineWidth = 3;
  ctx.beginPath();
  
  yVals.forEach((val, i) => {
    const x = padding + i * stepX;
    const y = canvas.height - padding - (val / maxVal) * chartHeight;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
    
    // Points
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#fff';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  xVals.forEach((label, i) => {
    ctx.fillText(label, padding + i * stepX, canvas.height - padding + 20);
  });
  
  // Store for export
  window.customChartData = { x: xVals, y: yVals };
}

function downloadChart(format) {
  const canvas = document.getElementById('customCanvas');
  const link = document.createElement('a');
  link.download = \`chart.\${format}\`;
  link.href = canvas.toDataURL(\`image/\${format}\`);
  link.click();
}

function showPythonCode() {
  if (!window.customChartData) {
    alert('Əvvəlcə qrafik çəkin!');
    return;
  }
  const code = \`import matplotlib.pyplot as plt

x = \${JSON.stringify(window.customChartData.x)}
y = \${JSON.stringify(window.customChartData.y)}

plt.plot(x, y, marker='o')
plt.title('Custom Chart')
plt.show()\`;
  alert('Python kodu:\\n\\n' + code);
}

// Anatomy interactions
document.querySelectorAll('.anatomy-point').forEach(point => {
  point.addEventListener('click', function() {
    const part = this.getAttribute('data-part');
    const info = document.getElementById('anatomyInfo');
    
    const descriptions = {
      'title': '<strong>Başlıq (Title):</strong> Qrafikin əsas mövzusunu göstərir. plt.title() ilə əlavə edilir.',
      'xlabel': '<strong>X Etiketi:</strong> Üfüqi oxun nəyi ifadə etdiyini göstərir. plt.xlabel() ilə əlavə edilir.',
      'ylabel': '<strong>Y Etiketi:</strong> Şaquli oxun nəyi ifadə etdiyini göstərir. plt.ylabel() ilə əlavə edilir.',
      'line': '<strong>Xətt (Line):</strong> Məlumatların dəyişmə trendini göstərir. plt.plot() ilə çəkilir.',
      'marker': '<strong>Marker:</strong> Hər bir məlumat nöqtəsini işarələyir. marker parametri ilə dəyişdirilir.'
    };
    
    info.innerHTML = descriptions[part] || '';
  });
});

// Initialize
updateChart();
applyStyle('default');`
  },

  exercise: {
    title: "📊 Şirkət Satış Dashboard-u Yaradın",
    description: "Bir şirkətin 12 aylıq satış, xərc və mənfəət məlumatlarını vizuallaşdıran professional dashboard yaradın. Matplotlib istifadə edərək müxtəlif qrafik tiplərini birləşdirin.",
    requirements: [
      "12 ay (Yanvar-Dekabr) üçün satış, xərc və mənfəət məlumatlarından ibarət DataFrame yaradın",
      "2x2 subplot layout yaradın: (0,0) Xətt qrafiki - Satış trendi, (0,1) Sütun diaqramı - Aylıq mənfəət",
      "(1,0) Pasta diaqramı - İllik xərc strukturu (əmək haqqı, marketing, icarə, digər)",
      "(1,1) Saçılma diaqramı - Satış vs Xərc əlaqəsi (hər ay üçün nöqtə)",
      "Bütün qrafiklərə başlıq, ox etiketləri və əfsanə əlavə edin",
      "Fərqli rəng sxemləri istifadə edin (hər qrafikdə fərqli)",
      "Qrafiki yüksək keyfiyyətdə (300 dpi) 'dashboard.png' olaraq yadda saxlayın",
      "Böyük ölçüdə (16x10 düym) və tight_layout istifadə edin"
    ],
    starterCode: `import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# 1. Məlumatları hazırlayın
aylar = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
         'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']

np.random.seed(42)  # Təkrarlanabilirlik üçün
satis = np.random.randint(80, 150, 12) + np.linspace(0, 50, 12).astype(int)
xercler = satis * np.random.uniform(0.6, 0.8, 12)
menfeet = satis - xercler

df = pd.DataFrame({
    'Ay': aylar,
    'Satis': satis,
    'Xerc': xercler,
    'Menfeet': menfeet
})

print("İlkin məlumatlar:")
print(df.head())

# 2. 2x2 subplot yaradın
fig, axes = plt.subplots(2, 2, figsize=(16, 10))
fig.suptitle('Şirkət Maliyyə Dashboard 2024', fontsize=20, fontweight='bold')

# 3. (0,0) - Satış trendi (xətt qrafiki)
# Kodunuzu bura yazın...

# 4. (0,1) - Aylıq mənfəət (sütun diaqramı)
# Kodunuzu bura yazın...

# 5. (1,0) - Xərc strukturu (pasta diaqramı)
xerc_kateqoriya = ['Əmək haqqı', 'Marketing', 'İcarə', 'Digər']
xerc_deyer = [xercler.sum()*0.4, xercler.sum()*0.2, xercler.sum()*0.25, xercler.sum()*0.15]
# Kodunuzu bura yazın...

# 6. (1,1) - Satış vs Xərc (saçılma diaqramı)
# Kodunuzu bura yazın...

# 7. Layout tənzimləmə və yadda saxlama
plt.tight_layout()
plt.savefig('dashboard.png', dpi=300, bbox_inches='tight')
plt.show()

print("\\nDashboard yaradıldı: dashboard.png")`,
  },

  quiz: [
    {
      question: "Ən sadə xətt qrafiki çəkmək üçün hansı funksiya istifadə olunur?",
      options: ["plt.scatter()", "plt.bar()", "plt.plot()", "plt.hist()"],
      correctAnswer: 2
    },
    {
      question: "Qrafikin ölçüsünü necə təyin etmək olar?",
      options: ["plt.size()", "plt.figure(figsize=(10,6))", "plt.dimensions()", "plt.resize()"],
      correctAnswer: 1
    },
    {
      question: "Sütun diaqramı çəkmək üçün hansı funksiya lazımdır?",
      options: ["plt.column()", "plt.bar()", "plt.histogram()", "plt.pie()"],
      correctAnswer: 1
    },
    {
      question: "Pasta diaqramında faizləri göstərmək üçün hansı parametr istifadə olunur?",
      options: ["percent=True", "show_pct=True", "autopct='%1.1f%%'", "labels=True"],
      correctAnswer: 2
    },
    {
      question: "Bir səhifədə çoxlu qrafik yaratmaq üçün nə istifadə edilir?",
      options: ["plt.multiple()", "plt.subplots()", "plt.grid()", "plt.layout()"],
      correctAnswer: 1
    },
    {
      question: "Qrafiki şəkil faylı kimi yadda saxlamaq üçün hansı funksiya istifadə olunur?",
      options: ["plt.export()", "plt.save()", "plt.savefig()", "plt.store()"],
      correctAnswer: 2
    },
    {
      question: "X oxunun etiketini əlavə etmək üçün hansı funksiya istifadə olunur?",
      options: ["plt.xlabel()", "plt.xtitle()", "plt.xtext()", "plt.xname()"],
      correctAnswer: 0
    },
    {
      question: "Saçılma diaqramı (scatter plot) hansı məqsədlə istifadə olunur?",
      options: ["Kateqoriyaları müqayisə etmək", "İki dəyişən arasındakı əlaqəni göstərmək", "Paylanmanı göstərmək", "Trend analizi"],
      correctAnswer: 1
    },
    {
      question: "plt.tight_layout() funksiyası nə üçün istifadə olunur?",
      options: ["Qrafikləri sıxlaşdırmaq", "Elementlər arası məsafəni tənzimləmək", "Ölçüləri kiçiltmək", "Rəngləri dəyişmək"],
      correctAnswer: 1
    },
    {
      question: "Histogram çəkmək üçün hansı funksiya istifadə olunur?",
      options: ["plt.bar()", "plt.histogram()", "plt.hist()", "plt.distribution()"],
      correctAnswer: 2
    }
  ]
};

export default topicai19;