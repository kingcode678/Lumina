export const topic1 = {
  id: 1,
  title: "HTML5 Strukturu və Semantik Elementlər",
  duration: "45 dəq",
  isFree: true,
  
  content: `
    <style>
      .topic-container {
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        line-height: 1.7;
        color: #2d3748;
        max-width: 100%;
      }
      
      .intro-box {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem;
        border-radius: 16px;
        margin-bottom: 2rem;
      }
      
      .intro-box h2 {
        margin: 0 0 1rem 0;
        font-size: 1.8rem;
      }
      
      .intro-box p {
        margin: 0;
        opacity: 0.95;
        font-size: 1.1rem;
      }
      
      .section-card {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.07);
        border-left: 4px solid #667eea;
      }
      
      .section-card h3 {
        color: #2d3748;
        margin: 0 0 1rem 0;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .code-block {
        background: #1a202c;
        color: #e2e8f0;
        padding: 1.5rem;
        border-radius: 8px;
        overflow-x: auto;
        margin: 1rem 0;
        font-family: 'Consolas', 'Monaco', monospace;
        font-size: 0.9rem;
        line-height: 1.6;
      }
      
      .code-block .tag { color: #63b3ed; }
      .code-block .attr { color: #68d391; }
      .code-block .value { color: #f687b3; }
      .code-block .comment { color: #718096; font-style: italic; }
      .code-block .text { color: #e2e8f0; }
      
      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin: 1rem 0;
      }
      
      .info-item {
        background: #f7fafc;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
      }
      
      .info-item h4 {
        margin: 0 0 0.5rem 0;
        color: #667eea;
        font-size: 1rem;
      }
      
      .info-item p {
        margin: 0;
        font-size: 0.9rem;
        color: #4a5568;
      }
      
      .highlight-box {
        background: #fffaf0;
        border: 1px solid #fbd38d;
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
      }
      
      .highlight-box strong {
        color: #c05621;
      }
      
      .tip-box {
        background: #f0fff4;
        border: 1px solid #9ae6b4;
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
      }
      
      .tip-box strong {
        color: #276749;
      }
      
      .warning-box {
        background: #fff5f5;
        border: 1px solid #fc8181;
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
      }
      
      .warning-box strong {
        color: #c53030;
      }
      
      .step-list {
        counter-reset: step;
        list-style: none;
        padding: 0;
      }
      
      .step-list li {
        counter-increment: step;
        position: relative;
        padding-left: 3rem;
        margin-bottom: 1rem;
        padding-top: 0.3rem;
      }
      
      .step-list li::before {
        content: counter(step);
        position: absolute;
        left: 0;
        top: 0;
        width: 2rem;
        height: 2rem;
        background: #667eea;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.9rem;
      }
      
      .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        font-size: 0.95rem;
      }
      
      .comparison-table th {
        background: #667eea;
        color: white;
        padding: 0.75rem;
        text-align: left;
      }
      
      .comparison-table td {
        padding: 0.75rem;
        border-bottom: 1px solid #e2e8f0;
      }
      
      .comparison-table tr:nth-child(even) {
        background: #f7fafc;
      }
      
      .tag-badge {
        display: inline-block;
        background: #e6fffa;
        color: #234e52;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.85rem;
        margin: 0.2rem;
      }
      
      .example-preview {
        background: white;
        border: 2px dashed #cbd5e0;
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
      }
      
      .example-preview-header {
        background: #edf2f7;
        padding: 0.5rem 1rem;
        margin: -1rem -1rem 1rem -1rem;
        border-radius: 6px 6px 0 0;
        font-size: 0.85rem;
        color: #4a5568;
      }
      
      .check-list {
        list-style: none;
        padding: 0;
      }
      
      .check-list li {
        padding-left: 1.8rem;
        position: relative;
        margin-bottom: 0.5rem;
      }
      
      .check-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #48bb78;
        font-weight: bold;
      }
    </style>

    <div class="topic-container">
      <!-- GİRİŞ -->
      <div class="intro-box">
        <h2>🌐 HTML5-ə Xoş Gəlmisiniz!</h2>
        <p>Bu dərsdə veb səhifələrin qurulmasının əsaslarını öyrənəcəksiniz. Heç bir əvvəlki biliyiniz olmadan, addım-addım professional veb səhifələr yaratmağı öyrənəcəksiniz.</p>
      </div>

      <!-- HTML NƏDİR? -->
      <div class="section-card">
        <h3>📚 HTML Nədir?</h3>
        <p><strong>HTML</strong> (HyperText Markup Language) veb səhifələrin <em>skeletini</em> yaratmaq üçün istifadə olunan dildir. Təsəvvür edin ki, ev tikirsiniz:</p>
        
        <ul class="check-list">
          <li><strong>HTML</strong> = Evin divarları, otaqları, qapıları (struktur)</li>
          <li><strong>CSS</strong> = Rənglər, mebel, dekorasiya (görünüş)</li>
          <li><strong>JavaScript</strong> = Elektrik sistemi, işıqlar, smart cihazlar (funksionallıq)</li>
        </ul>

        <div class="highlight-box">
          <strong>💡 Vacib:</strong> HTML yalnız məzmunun <em>nə olduğunu</em> göstərir, <em> necə göründüyünü</em> yox! Görünüş üçün CSS istifadə olunur.
        </div>
      </div>

      <!-- ƏSAS STRUKTUR -->
      <div class="section-card">
        <h3>🏗️ Hər HTML Sənədinin Əsası</h3>
        <p>Hər hansı bir veb səhifəni yaratarkən bu 4 əsas hissə olmalıdır:</p>
        
        <div class="code-block">
<span class="comment">&lt;!-- 1. Sənəd tipini bildiririk --&gt;</span>
<span class="tag">&lt;!DOCTYPE</span> <span class="attr">html</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- 2. HTML sənədi başlayır --&gt;</span>
<span class="tag">&lt;html</span> <span class="attr">lang</span>=<span class="value">"az"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- 3. Başlıq hissəsi (görünmür) --&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="value">"UTF-8"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;title&gt;</span><span class="text">Səhifənin Başlığı</span><span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>

  <span class="comment">&lt;!-- 4. Görünən hissə --&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;h1&gt;</span><span class="text">Salam Dünya!</span><span class="tag">&lt;/h1&gt;</span>
    <span class="tag">&lt;p&gt;</span><span class="text">Bu mənim ilk veb səhifəmdir.</span><span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;/body&gt;</span>

<span class="tag">&lt;/html&gt;</span>
        </div>

        <ol class="step-list">
          <li><strong>&lt;!DOCTYPE html&gt;</strong> - Brauzerə "bu HTML5 sənədidir" deyir</li>
          <li><strong>&lt;html&gt;</strong> - Bütün sənədi əhatə edir</li>
          <li><strong>&lt;head&gt;</strong> - Meta məlumatlar (başlıq, şriftlər, stil faylları)</li>
          <li><strong>&lt;body&gt;</strong> - İstifadəçinin gördüyü hər şey</li>
        </ol>
      </div>

      <!-- TEQLƏR (TAGS) -->
      <div class="section-card">
        <h3>🏷️ HTML Teqləri (Tags)</h3>
        <p>HTML <strong>teqlərdən</strong> ibarətdir. Hər teq bu formada yazılır:</p>
        
        <div class="code-block">
<span class="comment">&lt;!-- Açılış teqi --&gt;</span>
<span class="tag">&lt;p&gt;</span><span class="text">Bu bir abzasıdır.</span><span class="tag">&lt;/p&gt;</span>
<span class="comment">  ↑         ↑
  |         Bağlanış teqi (slash / ilə)
  Açılış teqi</span>

<span class="comment">&lt;!-- Öz-özünə bağlanan teqlər --&gt;</span>
<span class="tag">&lt;br&gt;</span>      <span class="comment">&lt;!-- Sətir sonu --&gt;</span>
<span class="tag">&lt;hr&gt;</span>      <span class="comment">&lt;!-- Üfüqi xətt --&gt;</span>
<span class="tag">&lt;img&gt;</span>     <span class="comment">&lt;!-- Şəkil --&gt;</span>
<span class="tag">&lt;input&gt;</span>   <span class="comment">&lt;!-- Giriş sahəsi --&gt;</span>
        </div>

        <table class="comparison-table">
          <tr>
            <th>Teq</th>
            <th>Adı</th>
            <th>Nə üçün istifadə olunur?</th>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;h1&gt; - &lt;h6&gt;</span></td>
            <td>Başlıqlar</td>
            <td>Səhifə və bölmə başlıqları (h1 ən böyük, h6 ən kiçik)</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;p&gt;</span></td>
            <td>Abzas</td>
            <td>Mətn paragrafları üçün</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;br&gt;</span></td>
            <td>Sətir sonu</td>
            <td>Mətndə yeni sətirə keçmək üçün</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;hr&gt;</span></td>
            <td>Üfüqi xətt</td>
            <td>Məzmunu vizual olaraq ayırmaq üçün</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;!-- --&gt;</span></td>
            <td>Şərh</td>
            <td>Kodda qeydlər yazmaq üçün (görünmür)</td>
          </tr>
        </table>
      </div>

      <!-- BAŞLIQLAR -->
      <div class="section-card">
        <h3>📰 Başlıqlar (Headings)</h3>
        <p>Başlıqlar 6 səviyyədən ibarətdir. Hər səhifədə <strong>yalnız bir &lt;h1&gt;</strong> olmalıdır!</p>
        
        <div class="example-preview">
          <div class="example-preview-header">Brauzerdə belə görünür:</div>
          <h1 style="margin:0 0 0.5rem 0; font-size:2rem;">Bu H1 başlıqdır (Əsas başlıq)</h1>
          <h2 style="margin:0 0 0.5rem 0; font-size:1.7rem; color:#4a5568;">Bu H2 başlıqdır (Bölmə başlığı)</h2>
          <h3 style="margin:0 0 0.5rem 0; font-size:1.4rem; color:#718096;">Bu H3 başlıqdır (Alt bölmə)</h3>
          <h4 style="margin:0 0 0.3rem 0; font-size:1.2rem; color:#a0aec0;">Bu H4 başlıqdır</h4>
          <h5 style="margin:0 0 0.3rem 0; font-size:1rem; color:#cbd5e0;">Bu H5 başlıqdır</h5>
          <h6 style="margin:0; font-size:0.9rem; color:#e2e8f0;">Bu H6 başlıqdır (Ən kiçik)</h6>
        </div>

        <div class="code-block">
<span class="tag">&lt;h1&gt;</span><span class="text">Veb Dizayn Kursu</span><span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;h2&gt;</span><span class="text">HTML5 Modulu</span><span class="tag">&lt;/h2&gt;</span>
<span class="tag">&lt;h3&gt;</span><span class="text">Semantik Elementlər</span><span class="tag">&lt;/h3&gt;</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ Xəta etməyin:</strong> Başlıqları böyük yazı yaratmaq üçün istifadə etməyin! Onların məqsədi <strong>struktur</strong> yaratmaqdır. Böyük yazı üçün CSS-dən istifadə edin.
        </div>
      </div>

      <!-- MƏTN FORMATLAMA -->
      <div class="section-card">
        <h3>✍️ Mətn Formatlama</h3>
        
        <div class="info-grid">
          <div class="info-item">
            <h4>Qalın mətn</h4>
            <div class="code-block" style="margin:0.5rem 0; padding:0.5rem;">
<span class="tag">&lt;strong&gt;</span><span class="text">Vacib</span><span class="tag">&lt;/strong&gt;</span>
<span class="tag">&lt;b&gt;</span><span class="text">Qalın</span><span class="tag">&lt;/b&gt;</span>
            </div>
            <p><strong>strong</strong> - semantik (vacib məna)<br>
            <b>b</b> - vizual yalnız qalın</p>
          </div>
          
          <div class="info-item">
            <h4>Əyri mətn</h4>
            <div class="code-block" style="margin:0.5rem 0; padding:0.5rem;">
<span class="tag">&lt;em&gt;</span><span class="text">Vurğu</span><span class="tag">&lt;/em&gt;</span>
<span class="tag">&lt;i&gt;</span><span class="text">Əyri</span><span class="tag">&lt;/i&gt;</span>
            </div>
            <p><em>em</em> - vurğu (semantik)<br>
            <i>i</i> - vizual yalnız əyri</p>
          </div>
          
          <div class="info-item">
            <h4>Alt/Üst indeks</h4>
            <div class="code-block" style="margin:0.5rem 0; padding:0.5rem;">
H<span class="tag">&lt;sub&gt;</span><span class="text">2</span><span class="tag">&lt;/sub&gt;</span>O
E=mc<span class="tag">&lt;sup&gt;</span><span class="text">2</span><span class="tag">&lt;/sup&gt;</span>
            </div>
            <p>H<sub>2</sub>O (sub - alt)<br>
            E=mc<sup>2</sup> (sup - üst)</p>
          </div>
          
          <div class="info-item">
            <h4>Xüsusi işarələr</h4>
            <div class="code-block" style="margin:0.5rem 0; padding:0.5rem;">
<span class="text">&amp;copy;</span> <span class="text">&amp;reg;</span>
<span class="text">&amp;trade;</span> <span class="text">&amp;nbsp;</span>
            </div>
            <p>&copy; &reg; &trade; &nbsp;(boşluq)</p>
          </div>
        </div>
      </div>

      <!-- SİYAHILAR -->
      <div class="section-card">
        <h3>📋 Siyahılar (Lists)</h3>
        
        <h4>1. Sıralanmamış Siyahı (ul - unordered list)</h4>
        <div class="code-block">
<span class="tag">&lt;ul&gt;</span>
  <span class="tag">&lt;li&gt;</span><span class="text">Alma</span><span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span><span class="text">Armud</span><span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span><span class="text">Banan</span><span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span>
        </div>
        
        <div class="example-preview">
          <div class="example-preview-header">Nəticə:</div>
          <ul style="margin:0;">
            <li>Alma</li>
            <li>Armud</li>
            <li>Banan</li>
          </ul>
        </div>

        <h4>2. Sıralanmış Siyahı (ol - ordered list)</h4>
        <div class="code-block">
<span class="tag">&lt;ol&gt;</span>
  <span class="tag">&lt;li&gt;</span><span class="text">HTML öyrən</span><span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span><span class="text">CSS öyrən</span><span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span><span class="text">JavaScript öyrən</span><span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ol&gt;</span>
        </div>
        
        <div class="example-preview">
          <div class="example-preview-header">Nəticə:</div>
          <ol style="margin:0;">
            <li>HTML öyrən</li>
            <li>CSS öyrən</li>
            <li>JavaScript öyrən</li>
          </ol>
        </div>

        <h4>3. Tərif Siyahısı (dl - definition list)</h4>
        <div class="code-block">
<span class="tag">&lt;dl&gt;</span>
  <span class="tag">&lt;dt&gt;</span><span class="text">HTML</span><span class="tag">&lt;/dt&gt;</span>
  <span class="tag">&lt;dd&gt;</span><span class="text">Veb səhifələrin strukturunu yaradan dil</span><span class="tag">&lt;/dd&gt;</span>
  
  <span class="tag">&lt;dt&gt;</span><span class="text">CSS</span><span class="tag">&lt;/dt&gt;</span>
  <span class="tag">&lt;dd&gt;</span><span class="text">Veb səhifələrin görünüşünü tənzimləyən dil</span><span class="tag">&lt;/dd&gt;</span>
<span class="tag">&lt;/dl&gt;</span>
        </div>
        
        <div class="example-preview">
          <div class="example-preview-header">Nəticə:</div>
          <dl style="margin:0;">
            <dt style="font-weight:bold;">HTML</dt>
            <dd style="margin-left:1rem;">Veb səhifələrin strukturunu yaradan dil</dd>
            <dt style="font-weight:bold; margin-top:0.5rem;">CSS</dt>
            <dd style="margin-left:1rem;">Veb səhifələrin görünüşünü tənzimləyən dil</dd>
          </dl>
        </div>
      </div>

      <!-- KEÇİDLƏR -->
      <div class="section-card">
        <h3>🔗 Keçidlər (Links)</h3>
        <p>Keçidlər <span class="tag-badge">&lt;a&gt;</span> (anchor - lövbər) teqi ilə yaradılır.</p>
        
        <div class="code-block">
<span class="comment">&lt;!-- Xarici keçid (başqa sayta) --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"https://google.com"</span> <span class="attr">target</span>=<span class="value">"_blank"</span><span class="tag">&gt;</span>
  <span class="text">Google-a get</span>
<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- Daxili keçid (eyni saytda) --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"about.html"</span><span class="tag">&gt;</span>
  <span class="text">Haqqımızda səhifəsi</span>
<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- Səhifə daxilində keçid --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"#contact"</span><span class="tag">&gt;</span>
  <span class="text">Əlaqə bölməsinə get</span>
<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- Email keçidi --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"mailto:email@example.com"</span><span class="tag">&gt;</span>
  <span class="text">Email göndər</span>
<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- Telefon keçidi --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"tel:+994501234567"</span><span class="tag">&gt;</span>
  <span class="text">Zəng et</span>
<span class="tag">&lt;/a&gt;</span>
        </div>

        <div class="tip-box">
          <strong>💡 Atributlar:</strong><br>
          • <code>href</code> - keçid ünvanı (hara gedəcək)<br>
          • <code>target="_blank"</code> - yeni tab-da aç<br>
          • <code>title</code> - hover edəndə göstərilən mətn<br>
          • <code>download</code> - fayl yükləmə keçidi
        </div>
      </div>

      <!-- ŞƏKİLLƏR -->
      <div class="section-card">
        <h3>🖼️ Şəkillər (Images)</h3>
        <p>Şəkillər <span class="tag-badge">&lt;img&gt;</span> teqi ilə əlavə olunur. Bu teq öz-özünə bağlanır (bağlanış teqi yoxdur).</p>
        
        <div class="code-block">
<span class="comment">&lt;!-- Sadə şəkil --&gt;</span>
<span class="tag">&lt;img</span> 
  <span class="attr">src</span>=<span class="value">"photo.jpg"</span> 
  <span class="attr">alt</span>=<span class="value">"Təsvir edici mətn"</span>
  <span class="attr">width</span>=<span class="value">"300"</span>
  <span class="attr">height</span>=<span class="value">"200"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- Link kimi şəkil --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"large-image.jpg"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="value">"thumbnail.jpg"</span> <span class="attr">alt</span>=<span class="value">"Kiçik şəkil"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/a&gt;</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ Çox Vacib - Alt Atributu:</strong><br>
          <code>alt</code> atributu şəklin təsviridir. Bu:<br>
          • Şəkil yüklənməsə göstərilir<br>
          • Ekran oxuyucular üçün vacibdir (korlar üçün)<br>
          • SEO üçün önəmlidir<br>
          • Boş buraxıla bilməz! (əgər dekorativdirsə <code>alt=""</code> yazın)
        </div>

        <h4>Şəkil Formatları:</h4>
        <table class="comparison-table">
          <tr>
            <th>Format</th>
            <th>İstifadə yeri</th>
            <th>Xüsusiyyətləri</th>
          </tr>
          <tr>
            <td><strong>JPG/JPEG</strong></td>
            <td>Fotoşəkillər</td>
            <td>Kiçik həcm, itkilə sıxılma</td>
          </tr>
          <tr>
            <td><strong>PNG</strong></td>
            <td>Şəffaf şəkillər, loqolar</td>
            <td>Şəffaflıq dəstəyi, itkisiz</td>
          </tr>
          <tr>
            <td><strong>GIF</strong></td>
            <td>Animasiyalar</td>
            <td>256 rəng, animasiya</td>
          </tr>
          <tr>
            <td><strong>SVG</strong></td>
            <td>İkonlar, loqolar</td>
            <td>Vektor, istənilən ölçüdə keyfiyyətli</td>
          </tr>
          <tr>
            <td><strong>WebP</strong></td>
            <td>Müasir veb</td>
            <td>Ən yaxşı sıxılma, bütün brauzerlərdə dəstək</td>
          </tr>
        </table>
      </div>

      <!-- CƏDVƏLLƏR -->
      <div class="section-card">
        <h3>📊 Cədvəllər (Tables)</h3>
        <p>Məlumatları sətir və sütunlarda göstərmək üçün.</p>
        
        <div class="code-block">
<span class="tag">&lt;table&gt;</span>
  <span class="comment">&lt;!-- Cədvəl başlığı --&gt;</span>
  <span class="tag">&lt;thead&gt;</span>
    <span class="tag">&lt;tr&gt;</span>
      <span class="tag">&lt;th&gt;</span><span class="text">Ad</span><span class="tag">&lt;/th&gt;</span>
      <span class="tag">&lt;th&gt;</span><span class="text">Yaş</span><span class="tag">&lt;/th&gt;</span>
      <span class="tag">&lt;th&gt;</span><span class="text">Şəhər</span><span class="tag">&lt;/th&gt;</span>
    <span class="tag">&lt;/tr&gt;</span>
  <span class="tag">&lt;/thead&gt;</span>
  
  <span class="comment">&lt;!-- Cədvəl bədəni --&gt;</span>
  <span class="tag">&lt;tbody&gt;</span>
    <span class="tag">&lt;tr&gt;</span>
      <span class="tag">&lt;td&gt;</span><span class="text">Əli</span><span class="tag">&lt;/td&gt;</span>
      <span class="tag">&lt;td&gt;</span><span class="text">25</span><span class="tag">&lt;/td&gt;</span>
      <span class="tag">&lt;td&gt;</span><span class="text">Bakı</span><span class="tag">&lt;/td&gt;</span>
    <span class="tag">&lt;/tr&gt;</span>
    <span class="tag">&lt;tr&gt;</span>
      <span class="tag">&lt;td&gt;</span><span class="text">Ayşə</span><span class="tag">&lt;/td&gt;</span>
      <span class="tag">&lt;td&gt;</span><span class="text">30</span><span class="tag">&lt;/td&gt;</span>
      <span class="tag">&lt;td&gt;</span><span class="text">Gəncə</span><span class="tag">&lt;/td&gt;</span>
    <span class="tag">&lt;/tr&gt;</span>
  <span class="tag">&lt;/tbody&gt;</span>
<span class="tag">&lt;/table&gt;</span>
        </div>

        <div class="example-preview">
          <div class="example-preview-header">Nəticə:</div>
          <table style="width:100%; border-collapse: collapse;">
            <thead style="background:#667eea; color:white;">
              <tr>
                <th style="padding:0.5rem; text-align:left;">Ad</th>
                <th style="padding:0.5rem; text-align:left;">Yaş</th>
                <th style="padding:0.5rem; text-align:left;">Şəhər</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:0.5rem;">Əli</td>
                <td style="padding:0.5rem;">25</td>
                <td style="padding:0.5rem;">Bakı</td>
              </tr>
              <tr>
                <td style="padding:0.5rem;">Ayşə</td>
                <td style="padding:0.5rem;">30</td>
                <td style="padding:0.5rem;">Gəncə</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box">
          <strong>💡 Teqlərin izahı:</strong><br>
          • <code>&lt;table&gt;</code> - Cədvəl konteyneri<br>
          • <code>&lt;tr&gt;</code> - Table Row (sətir)<br>
          • <code>&lt;th&gt;</code> - Table Header (başlıq hüceyrəsi, qalın və mərkəzləşdirilir)<br>
          • <code>&lt;td&gt;</code> - Table Data (adi hüceyrə)<br>
          • <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> - Cədvəl hissələri (semantik)
        </div>
      </div>

      <!-- FORMLAR -->
      <div class="section-card">
        <h3>📝 Formlar (Forms)</h3>
        <p>İstifadəçidən məlumat almaq üçün formalar yaradırıq.</p>
        
        <div class="code-block">
<span class="tag">&lt;form</span> <span class="attr">action</span>=<span class="value">"/gonder"</span> <span class="attr">method</span>=<span class="value">"POST"</span><span class="tag">&gt;</span>
  
  <span class="comment">&lt;!-- Mətn inputu --&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"ad"</span><span class="tag">&gt;</span><span class="text">Adınız:</span><span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;input</span> 
    <span class="attr">type</span>=<span class="value">"text"</span> 
    <span class="attr">id</span>=<span class="value">"ad"</span> 
    <span class="attr">name</span>=<span class="value">"ad"</span>
    <span class="attr">placeholder</span>=<span class="value">"Adınızı daxil edin"</span>
    <span class="attr">required</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Email --&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"email"</span><span class="tag">&gt;</span><span class="text">Email:</span><span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"email"</span> <span class="attr">id</span>=<span class="value">"email"</span> <span class="attr">name</span>=<span class="value">"email"</span> <span class="attr">required</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Şifrə --&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"sifre"</span><span class="tag">&gt;</span><span class="text">Şifrə:</span><span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"password"</span> <span class="attr">id</span>=<span class="value">"sifre"</span> <span class="attr">name</span>=<span class="value">"sifre"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Radio düymələr (tək seçim) --&gt;</span>
  <span class="tag">&lt;p&gt;</span><span class="text">Cinsiyyət:</span><span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"radio"</span> <span class="attr">id</span>=<span class="value">"kisi"</span> <span class="attr">name</span>=<span class="value">"cins"</span> <span class="attr">value</span>=<span class="value">"kisi"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"kisi"</span><span class="tag">&gt;</span><span class="text">Kişi</span><span class="tag">&lt;/label&gt;</span>
  
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"radio"</span> <span class="attr">id</span>=<span class="value">"qadin"</span> <span class="attr">name</span>=<span class="value">"cins"</span> <span class="attr">value</span>=<span class="value">"qadin"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"qadin"</span><span class="tag">&gt;</span><span class="text">Qadın</span><span class="tag">&lt;/label&gt;</span>

  <span class="comment">&lt;!-- Checkbox (çox seçim) --&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"checkbox"</span> <span class="attr">id</span>=<span class="value">"qaydalar"</span> <span class="attr">name</span>=<span class="value">"qaydalar"</span> <span class="attr">required</span><span class="tag">&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"qaydalar"</span><span class="tag">&gt;</span><span class="text">Qaydaları qəbul edirəm</span><span class="tag">&lt;/label&gt;</span>

  <span class="comment">&lt;!-- Böyük mətn sahəsi --&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"mesaj"</span><span class="tag">&gt;</span><span class="text">Mesajınız:</span><span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;textarea</span> <span class="attr">id</span>=<span class="value">"mesaj"</span> <span class="attr">name</span>=<span class="value">"mesaj"</span> <span class="attr">rows</span>=<span class="value">"4"</span> <span class="attr">cols</span>=<span class="value">"50"</span><span class="tag">&gt;&lt;/textarea&gt;</span>

  <span class="comment">&lt;!-- Açılan siyahı --&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"seher"</span><span class="tag">&gt;</span><span class="text">Şəhər:</span><span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;select</span> <span class="attr">id</span>=<span class="value">"seher"</span> <span class="attr">name</span>=<span class="value">"seher"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">""</span><span class="tag">&gt;</span><span class="text">Seçin...</span><span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"baki"</span><span class="tag">&gt;</span><span class="text">Bakı</span><span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"gence"</span><span class="tag">&gt;</span><span class="text">Gəncə</span><span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"sumqayit"</span><span class="tag">&gt;</span><span class="text">Sumqayıt</span><span class="tag">&lt;/option&gt;</span>
  <span class="tag">&lt;/select&gt;</span>

  <span class="comment">&lt;!-- Düymələr --&gt;</span>
  <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="value">"submit"</span><span class="tag">&gt;</span><span class="text">Göndər</span><span class="tag">&lt;/button&gt;</span>
  <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="value">"reset"</span><span class="tag">&gt;</span><span class="text">Təmizlə</span><span class="tag">&lt;/button&gt;</span>

<span class="tag">&lt;/form&gt;</span>
        </div>

        <h4>Input Tipləri:</h4>
        <div class="info-grid">
          <div class="info-item">
            <h4>text</h4>
            <p>Adi mətn</p>
          </div>
          <div class="info-item">
            <h4>email</h4>
            <p>Email ünvanı (avtomatik yoxlayır)</p>
          </div>
          <div class="info-item">
            <h4>password</h4>
            <p>Şifrə (gizli simvollar)</p>
          </div>
          <div class="info-item">
            <h4>number</h4>
            <p>Rəqəm (oxlar ilə)</p>
          </div>
          <div class="info-item">
            <h4>tel</h4>
            <p>Telefon nömrəsi</p>
          </div>
          <div class="info-item">
            <h4>date</h4>
            <p>Tarix seçici</p>
          </div>
          <div class="info-item">
            <h4>file</h4>
            <p>Fayl yükləmə</p>
          </div>
          <div class="info-item">
            <h4>color</h4>
            <p>Rəng seçici</p>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 Label vacibdir!</strong><br>
          Hər input üçün <code>&lt;label&gt;</code> istifadə edin. <code>for</code> atributu input-un <code>id</code>-si ilə eyni olmalıdır. Bu:<br>
          • Klikləndə input-a fokuslanır<br>
          • Ekran oxuyucular üçün vacibdir<br>
          • Daha yaxşı istifadəçi təcrübəsi yaradır
        </div>
      </div>

      <!-- SEMANTİK ELEMENTLƏR -->
      <div class="section-card">
        <h3>🏛️ Semantik Elementlər (HTML5 Yenilikləri)</h3>
        <p>HTML5 gələnə qədər hər şey <code>&lt;div&gt;</code> ilə yazılırdı. İndi hər hissənin öz teqi var:</p>
        
        <div class="code-block">
<span class="tag">&lt;body&gt;</span>
  
  <span class="comment">&lt;!-- Səhifə başlığı --&gt;</span>
  <span class="tag">&lt;header&gt;</span>
    <span class="tag">&lt;nav&gt;</span>
      <span class="tag">&lt;ul&gt;</span>
        <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="value">"#"</span><span class="tag">&gt;</span><span class="text">Ana səhifə</span><span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/nav&gt;</span>
  <span class="tag">&lt;/header&gt;</span>

  <span class="comment">&lt;!-- Əsas məzmun (yalnız 1 dəfə!) --&gt;</span>
  <span class="tag">&lt;main&gt;</span>
    
    <span class="tag">&lt;section&gt;</span>
      <span class="tag">&lt;h2&gt;</span><span class="text">Xidmətlərimiz</span><span class="tag">&lt;/h2&gt;</span>
      
      <span class="tag">&lt;article&gt;</span>
        <span class="tag">&lt;h3&gt;</span><span class="text">Veb Dizayn</span><span class="tag">&lt;/h3&gt;</span>
        <span class="tag">&lt;p&gt;</span><span class="text">Müasir veb saytlar...</span><span class="tag">&lt;/p&gt;</span>
      <span class="tag">&lt;/article&gt;</span>
      
    <span class="tag">&lt;/section&gt;</span>

    <span class="tag">&lt;aside&gt;</span>
      <span class="tag">&lt;h3&gt;</span><span class="text">Son Xəbərlər</span><span class="tag">&lt;/h3&gt;</span>
    <span class="tag">&lt;/aside&gt;</span>
    
  <span class="tag">&lt;/main&gt;</span>

  <span class="tag">&lt;footer&gt;</span>
    <span class="tag">&lt;p&gt;</span><span class="text">&amp;copy; 2024 Şirkət Adı</span><span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;/footer&gt;</span>

<span class="tag">&lt;/body&gt;</span>
        </div>

        <table class="comparison-table">
          <tr>
            <th>Teq</th>
            <th>Təsvir</th>
            <th>Əvəz etdiyi</th>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;header&gt;</span></td>
            <td>Səhifə/bölmə başlığı</td>
            <td>&lt;div class="header"&gt;</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;nav&gt;</span></td>
            <td>Naviqasiya linkləri</td>
            <td>&lt;div class="nav"&gt;</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;main&gt;</span></td>
            <td>Əsas məzmun (bir dəfə!)</td>
            <td>&lt;div class="main"&gt;</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;section&gt;</span></td>
            <td>Məzmun bölməsi</td>
            <td>&lt;div class="section"&gt;</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;article&gt;</span></td>
            <td>Müstəqil məzmun</td>
            <td>&lt;div class="article"&gt;</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;aside&gt;</span></td>
            <td>Yan məzmun</td>
            <td>&lt;div class="sidebar"&gt;</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;footer&gt;</span></td>
            <td>Alt hissə</td>
            <td>&lt;div class="footer"&gt;</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;figure&gt;</span></td>
            <td>Şəkil/diaqram konteyneri</td>
            <td>&lt;div class="image-box"&gt;</td>
          </tr>
          <tr>
            <td><span class="tag-badge">&lt;figcaption&gt;</span></td>
            <td>Şəkil başlığı</td>
            <td>&lt;p class="caption"&gt;</td>
          </tr>
        </table>

        <div class="highlight-box">
          <strong>💡 Niyə Semantik Elementlər?</strong><br>
          1. <strong>SEO:</strong> Axtarış sistemləri məzmunu daha yaxşı başa düşür<br>
          2. <strong>Accessibility:</strong> Ekran oxuyucular istifadəçilərə kömək edir<br>
          3. <strong>Kod oxunaqlığı:</strong> Başqaları kodu daha asan başa düşür<br>
          4. <strong>Maintainability:</strong> Dəyişiklik etmək asanlaşır
        </div>
      </div>

      <!-- META TAGLƏR -->
      <div class="section-card">
        <h3>🔍 Meta Taglər və SEO</h3>
        <p><code>&lt;head&gt;</code> bölməsində yazılan, səhifə haqqında məlumat verən teqlər.</p>
        
        <div class="code-block">
<span class="tag">&lt;head&gt;</span>
  <span class="comment">&lt;!-- Kodlaşdırma (həmişə UTF-8) --&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="value">"UTF-8"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Mobil cihazlar üçün --&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="value">"viewport"</span> 
        <span class="attr">content</span>=<span class="value">"width=device-width, initial-scale=1.0"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Səhifə təsviri (Google-da görünən) --&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="value">"description"</span> 
        <span class="attr">content</span>=<span class="value">"Veb dizayn kursu - HTML, CSS, JS öyrənin"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Açar sözlər (indiki vaxtda az təsirli) --&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="value">"keywords"</span> 
        <span class="attr">content</span>=<span class="value">"html, css, javascript, veb dizayn"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Müəllif --&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="value">"author"</span> <span class="attr">content</span>=<span class="value">"CodeAz"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Sosial media üçün (Open Graph) --&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">property</span>=<span class="value">"og:title"</span> <span class="attr">content</span>=<span class="value">"Veb Kursu"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">property</span>=<span class="value">"og:image"</span> <span class="attr">content</span>=<span class="value">"https://site.com/sekil.jpg"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Səhifə başlığı (brauzer tab-ında görünən) --&gt;</span>
  <span class="tag">&lt;title&gt;</span><span class="text">Ana Səhifə | CodeAz</span><span class="tag">&lt;/title&gt;</span>

  <span class="comment">&lt;!-- Xarici CSS faylı --&gt;</span>
  <span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="value">"stylesheet"</span> <span class="attr">href</span>=<span class="value">"styles.css"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- Favicon (tab-da kiçik ikon) --&gt;</span>
  <span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="value">"icon"</span> <span class="attr">type</span>=<span class="value">"image/x-icon"</span> <span class="attr">href</span>=<span class="value">"favicon.ico"</span><span class="tag">&gt;</span>

<span class="tag">&lt;/head&gt;</span>
        </div>
      </div>

      <!-- ƏLÇATANLIQ -->
      <div class="section-card">
        <h3>♿ Accessibility (Əlçatanlıq)</h3>
        <p>Veb səhifələr <strong>hər kəs</strong> üçün əlçatan olmalıdır - o cümlədən:</p>
        <ul class="check-list">
          <li>Ekran oxuyucu istifadə edənlər (görmə əngəllilər)</li>
          <li>Klaviatura ilə idarə edənlər</li>
          <li>Rəng korluğu olanlar</li>
          <li>Mobil cihaz istifadəçiləri</li>
        </ul>

        <h4>Əsas Qaydalar:</h4>
        
        <div class="code-block">
<span class="comment">&lt;!-- 1. Hər şəkildə ALT atributu olsun --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="value">"photo.jpg"</span> 
     <span class="attr">alt</span>=<span class="value">"Təlimat: Müəllim lövhəni göstərir"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- 2. Düzgün heading hierarxiyası --&gt;</span>
<span class="tag">&lt;h1&gt;</span><span class="text">Sayt Başlığı</span><span class="tag">&lt;/h1&gt;</span>
  <span class="tag">&lt;h2&gt;</span><span class="text">Bölmə 1</span><span class="tag">&lt;/h2&gt;</span>
    <span class="tag">&lt;h3&gt;</span><span class="text">Alt bölmə</span><span class="tag">&lt;/h3&gt;</span>
  <span class="tag">&lt;h2&gt;</span><span class="text">Bölmə 2</span><span class="tag">&lt;/h2&gt;</span>

<span class="comment">&lt;!-- 3. Hər input-un label-i olsun --&gt;</span>
<span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"email"</span><span class="tag">&gt;</span><span class="text">Email:</span><span class="tag">&lt;/label&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">id</span>=<span class="value">"email"</span> <span class="attr">type</span>=<span class="value">"email"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- 4. Skip link (əsas məzmuna keçid) --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"#main"</span> <span class="attr">class</span>=<span class="value">"skip-link"</span><span class="tag">&gt;</span>
  <span class="text">Əsas məzmuna keç</span>
<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- 5. ARIA labels (ekran oxuyucular üçün) --&gt;</span>
<span class="tag">&lt;nav</span> <span class="attr">aria-label</span>=<span class="value">"Əsas naviqasiya"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">aria-label</span>=<span class="value">"Menyunu bağla"</span><span class="tag">&gt;</span>☰<span class="tag">&lt;/button&gt;</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ Heç vaxt etməyin:</strong><br>
          • &lt;div&gt; və ya &lt;span&gt; ilə düymə yaratmaq (əvəzinə &lt;button&gt; istifadə edin)<br>
          • Rənglə yalnız məlumat ötürmək (mətn də əlavə edin)<br>
          • Avtoplay audio/video<br>
          • Kiçik klik sahələri (min 44x44px olmalıdır)
        </div>
      </div>

      <!-- YEKUN -->
      <div class="section-card" style="border-left-color: #48bb78;">
        <h3>🎉 Təbriklər!</h3>
        <p>HTML5-in əsaslarını öyrəndiniz. İndi bilirsiniz:</p>
        <ul class="check-list">
          <li>HTML sənədinin strukturunu</li>
          <li>Başlıqlar, abzaslar, siyahılar yaratmağı</li>
          <li>Keçidlər və şəkillər əlavə etməyi</li>
          <li>Cədvəllər və formlar qurmağı</li>
          <li>Semantik elementlərdən istifadəni</li>
          <li>Əlçatanlıq prinsiplərini</li>
        </ul>
        
        <div class="tip-box" style="margin-top: 1rem;">
          <strong>🚀 Növbəti Addım:</strong> Öyrəndiklərinizi praktikada tətbiq edin! Aşağıdakı tapşırığı yerinə yetirin və real bir layihə yaradın.
        </div>
      </div>
    </div>
  `,

  starterCode: {
    html: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mənim ilk veb səhifəm - HTML5 öyrənirəm">
    <title>Mənim Səhifəm | Ana Səhifə</title>
    <style>
        /* ==========================================
           BU CSS KODU - Sizin üçün hazırlandı
           ========================================== */
        
        /* Əsas reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        /* Skip link - əlçatanlıq üçün */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 100;
        }
        
        .skip-link:focus {
            top: 0;
        }
        
        /* Konteyner */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            min-height: 100vh;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        /* Header */
        header {
            background: #2d3748;
            color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 50;
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .logo span {
            color: #667eea;
        }
        
        /* Naviqasiya */
        nav ul {
            list-style: none;
            display: flex;
            gap: 2rem;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background 0.3s;
        }
        
        nav a:hover, nav a.active {
            background: #667eea;
        }
        
        /* Hero bölməsi */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .btn {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: transform 0.3s;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        /* Əsas məzmun */
        main {
            padding: 3rem 2rem;
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
        }
        
        @media (max-width: 768px) {
            main {
                grid-template-columns: 1fr;
            }
        }
        
        /* Kartlar */
        .card {
            background: #f7fafc;
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            border-left: 4px solid #667eea;
        }
        
        .card h2 {
            color: #2d3748;
            margin-bottom: 1rem;
        }
        
        /* Siyahılar */
        .feature-list {
            list-style: none;
            margin-top: 1rem;
        }
        
        .feature-list li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
        }
        
        .feature-list li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #48bb78;
            font-weight: bold;
        }
        
        /* Yan panel */
        aside {
            background: #edf2f7;
            padding: 2rem;
            border-radius: 12px;
            height: fit-content;
        }
        
        aside h3 {
            color: #2d3748;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #667eea;
        }
        
        .info-item {
            margin-bottom: 1.5rem;
        }
        
        .info-item strong {
            display: block;
            color: #667eea;
            margin-bottom: 0.3rem;
        }
        
        /* Footer */
        footer {
            background: #2d3748;
            color: white;
            text-align: center;
            padding: 2rem;
        }
        
        .social-links {
            margin-top: 1rem;
        }
        
        .social-links a {
            color: white;
            font-size: 1.5rem;
            margin: 0 0.5rem;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <!-- Əlçatanlıq üçün skip link -->
    <a href="#main-content" class="skip-link">Əsas məzmuna keç</a>
    
    <div class="container">
        <!-- Header -->
        <header>
            <div class="header-content">
                <div class="logo">
                    🚀 <span>Tech</span>Academy
                </div>
                <nav aria-label="Əsas naviqasiya">
                    <ul>
                        <li><a href="#home" class="active">Ana səhifə</a></li>
                        <li><a href="#about">Haqqımızda</a></li>
                        <li><a href="#services">Xidmətlər</a></li>
                        <li><a href="#contact">Əlaqə</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <!-- Hero bölməsi -->
        <section class="hero">
            <h1>HTML5 ilə Veb Dünyasına Açılan Qapı</h1>
            <p>Müasir veb texnologiyalarını öyrənin və professional səhifələr yaradın</p>
            <a href="#start" class="btn">Öyrənməyə Başla</a>
        </section>

        <!-- Əsas məzmun -->
        <main id="main-content">
            <div class="content">
                <article class="card">
                    <h2>🎯 Niyə HTML5 Öyrənməliyəm?</h2>
                    <p>HTML5 veb proqramlaşdırmanın əsasını təşkil edir. Onu bilmədən veb sayt yaratmaq mümkün deyil.</p>
                    <ul class="feature-list">
                        <li>Asan öyrənilmə</li>
                        <li>Hər yerdə tələb olunur</li>
                        <li>Pulsuz və açıq standart</li>
                        <li>Daim inkişaf edən texnologiya</li>
                    </ul>
                </article>

                <article class="card">
                    <h2>📚 Kurs Proqramı</h2>
                    <p>4 həftəlik intensiv proqram ilə veb developer olun:</p>
                    <ol style="margin-left: 1.5rem; margin-top: 1rem;">
                        <li><strong>HTML5</strong> - Struktur və semantika</li>
                        <li><strong>CSS3</strong> - Stil və dizayn</li>
                        <li><strong>JavaScript</strong> - İnteraktivlik</li>
                        <li><strong>React</strong> - Müasir framework</li>
                    </ol>
                </article>

                <section class="card">
                    <h2>✍️ Bizimlə Əlaqə</h2>
                    <form action="#" method="POST">
                        <p>
                            <label for="ad">Adınız:</label><br>
                            <input type="text" id="ad" name="ad" required 
                                   style="width: 100%; padding: 0.5rem; margin-top: 0.3rem;">
                        </p>
                        <p>
                            <label for="email">Email:</label><br>
                            <input type="email" id="email" name="email" required
                                   style="width: 100%; padding: 0.5rem; margin-top: 0.3rem;">
                        </p>
                        <p>
                            <label for="mesaj">Mesaj:</label><br>
                            <textarea id="mesaj" name="mesaj" rows="4" 
                                      style="width: 100%; padding: 0.5rem; margin-top: 0.3rem;"></textarea>
                        </p>
                        <button type="submit" class="btn" 
                                style="border: none; cursor: pointer; width: 100%;">
                            Göndər
                        </button>
                    </form>
                </section>
            </div>

            <!-- Yan panel -->
            <aside>
                <h3>📊 Statistika</h3>
                <div class="info-item">
                    <strong>500+</strong>
                    Tələbə
                </div>
                <div class="info-item">
                    <strong>50+</strong>
                    Video dərs
                </div>
                <div class="info-item">
                    <strong>24/7</strong>
                    Dəstək
                </div>

                <h3 style="margin-top: 2rem;">🏆 Uğurlar</h3>
                <p style="font-size: 0.9rem; color: #4a5568;">
                    Tələbələrimiz Google, Apple, Microsoft kimi şirkətlərdə çalışırlar.
                </p>
            </aside>
        </main>

        <!-- Footer -->
        <footer>
            <p>&copy; 2024 TechAcademy. Bütün hüquqlar qorunur.</p>
            <div class="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="LinkedIn">💼</a>
            </div>
        </footer>
    </div>
</body>
</html>`,
    
    css: `/* Bu fayl boş qala bilər, çünki bütün CSS HTML-in içindədir */
/* Və ya əlavə stillər burada yazıla bilər */`,
    
    js: `// Bu səhifə üçün sadə JavaScript funksionallığı

// Səhifə yükləndikdə
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Səhifə yükləndi!');
    
    // Naviqasiya linklərinin aktiv vəziyyətini dəyiş
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Bütün aktiv klaslarını sil
            navLinks.forEach(l => l.classList.remove('active'));
            // Kliklənənə əlavə et
            this.classList.add('active');
        });
    });
    
    // Form göndərilməsi
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Səhifənin yenilənməsinin qarşısını al
            alert('Mesajınız qəbul edildi! (Bu demo versiyasıdır)');
            this.reset(); // Formu təmizlə
        });
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});`
  },

  exercise: {
    title: "Şəxsi CV/Portfolio Səhifəsi Yarat",
    description: "Özünüz haqqında tam məlumat verən, HTML5 bütün elementlərindən istifadə edən professional bir səhifə yaradın. Bu səhifə sizin ilk real layihəniz olacaq!",
    requirements: [
      "Doctype HTML5 təyin edin və lang='az' yazın",
      "Head bölməsində charset, viewport, description və title olsun",
      "Header elementində adınız/logo və naviqasiya menyusu yaradın",
      "Main elementində minimum 3 section olsun: Haqqımda, Bacarıqlarım, Əlaqə",
      "Haqqımda bölməsində şəkliniz (placeholder ola bilər) və qısa təqdimat",
      "Bacarıqlarım bölməsində ul/il ilə siyahı (HTML, CSS, və s.)",
      "Təhsil və ya iş təcrübənizi article elementində göstərin",
      "Əlaqə bölməsində form yaradın (ad, email, mesaj, göndər düyməsi)",
      "Aside elementində sosial media linkləri və ya əlavə məlumat",
      "Footer elementində copyright və əlaqə məlumatları",
      "Hər şəkildə alt atributu istifadə edin",
      "Skip-to-content linki əlavə edin",
      "Hər input üçün label istifadə edin",
      "Semantik teqlərdən (header, nav, main, section, article, aside, footer) istifadə edin",
      "Səhifəni gözəl göstərmək üçün style etiketi ilə CSS yazın"
    ],
    starterCode: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <!-- viewport meta tagını əlavə edin -->
    <title>Ad Soyad | Portfolio</title>
    <style>
        /* CSS kodunuzu bura yazın */
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <!-- Skip link -->
    
    <!-- Header: Adınız və naviqasiya -->
    
    <!-- Main: 
         - Section: Haqqımda (şəkil + mətn)
         - Section: Bacarıqlarım (ul/li siyahı)
         - Article: Təhsil/Təcrübə
         - Section: Əlaqə (form)
    -->
    
    <!-- Aside: Yan panel -->
    
    <!-- Footer -->
    
</body>
</html>`
  },

  quiz: [
    {
      question: "HTML sənədinin ilk sətri nə olmalıdır?",
      options: ["<html>", "<head>", "<!DOCTYPE html>", "<body>"],
      correctAnswer: 2,
      explanation: "<!DOCTYPE html> brauzerə sənədin HTML5 olduğunu bildirir və həmişə ilk sətirdə olmalıdır."
    },
    {
      question: "Hansı teq səhifənin görünən hissəsini əhatə edir?",
      options: ["<head>", "<body>", "<main>", "<html>"],
      correctAnswer: 1,
      explanation: "<body> teqi istifadəçinin brauzerdə gördüyü bütün məzmunu əhatə edir."
    },
    {
      question: "H1 başlığı səhifədə neçə dəfə istifadə edilməlidir?",
      options: ["İstədiyim qədər", "Yalnız 1 dəfə", "Maximum 3 dəfə", "Heç istifadə etməməliyəm"],
      correctAnswer: 1,
      explanation: "H1 səhifənin əsas başlığıdır və SEO və əlçatanlıq üçün yalnız bir dəfə istifadə edilməlidir."
    },
    {
      question: "Şəkil əlavə etmək üçün hansı teqdən istifadə olunur?",
      options: ["<picture>", "<img>", "<image>", "<src>"],
      correctAnswer: 1,
      explanation: "<img> teqi şəkil əlavə etmək üçün istifadə olunur və öz-özünə bağlanır (</img> yoxdur)."
    },
    {
      question: "Keçid (link) yaratmaq üçün hansı teq istifadə olunur?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
      explanation: "<a> (anchor) teqi keçidlər yaratmaq üçün istifadə olunur. href atributu ünvanı göstərir."
    },
    {
      question: "Sıralanmamış siyahı (dairə işarələri ilə) hansı teqlə yaradılır?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      correctAnswer: 1,
      explanation: "<ul> (unordered list) sıralanmamış siyahı, <ol> (ordered list) isə nömrəli siyahı üçündür."
    },
    {
      question: "Form-da istifadəçidən email almaq üçün inputun type nə olmalıdır?",
      options: ["text", "email", "mail", "e-mail"],
      correctAnswer: 1,
      explanation: "type='email' istifadə edildikdə brauzer avtomatik email formatını yoxlayır."
    },
    {
      question: "Hansı semantik teq səhifənin əsas məzmununu göstərir və bir dəfə istifadə olunur?",
      options: ["<section>", "<article>", "<main>", "<div>"],
      correctAnswer: 2,
      explanation: "<main> teqi səhifənin əsas (unikal) məzmununu əhatə edir və bir sənəddə yalnız bir dəfə olmalıdır."
    },
    {
      question: "HTML şərhi (kodda görünməyən qeyd) necə yazılır?",
      options: ["// Bu şərhdir", "/* Bu şərhdir */", "<!-- Bu şərhdir -->", "# Bu şərhdir"],
      correctAnswer: 2,
      explanation: "<!-- --> işarələri arasındakı mətn brauzerdə görünmür, yalnız kodda qalır."
    },
    {
      question: "Ekran oxuyucular üçün şəkilin təsviri hansı atributda yazılır?",
      options: ["title", "alt", "description", "caption"],
      correctAnswer: 1,
      explanation: "alt (alternative text) atributu şəklin təsviridir və şəkil yüklənmədikdə və ya ekran oxuyucu üçün göstərilir."
    }
  ]
};

export default topic1;