export const topic2 = {
  id: 2,
  title: "CSS3 Selektorlar və Box Model",
  duration: "60 dəq",
  isFree: false,

  content: `
    <style>
      .topic-container {
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        line-height: 1.7;
        color: #2d3748;
        max-width: 100%;
      }
      
      .intro-box {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
        border-left: 4px solid #f5576c;
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
      
      .code-block .selector { color: #f687b3; }
      .code-block .property { color: #63b3ed; }
      .code-block .value { color: #68d391; }
      .code-block .punctuation { color: #a0aec0; }
      .code-block .comment { color: #718096; font-style: italic; }
      
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
        color: #f5576c;
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
        background: #f5576c;
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
        background: #f5576c;
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
      
      .visual-box {
        background: #edf2f7;
        border: 2px dashed #cbd5e0;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1rem 0;
        text-align: center;
      }
      
      .box-model-demo {
        display: inline-block;
        background: #f5576c;
        padding: 20px;
        border: 10px solid #667eea;
        margin: 20px;
        color: white;
        font-weight: bold;
      }
      
      .selector-badge {
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
      
      .specificity-chart {
        background: #f7fafc;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
      }
      
      .specificity-bar {
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
        padding: 0.5rem;
        background: white;
        border-radius: 4px;
      }
      
      .specificity-score {
        width: 60px;
        text-align: center;
        font-weight: bold;
        color: #f5576c;
      }
      
      .specificity-label {
        flex: 1;
        padding-left: 1rem;
      }
    </style>

    <div class="topic-container">
      <!-- GİRİŞ -->
      <div class="intro-box">
        <h2>🎨 CSS3-ə Xoş Gəlmisiniz!</h2>
        <p>HTML skeleti qurduqdan sonra onu gözəl göstərmək vaxtıdır! CSS (Cascading Style Sheets) veb səhifələrinizə rəng, forma və həyat verir.</p>
      </div>

      <!-- CSS NƏDİR? -->
      <div class="section-card">
        <h3>🤔 CSS Nədir və Nə üçün Lazımdır?</h3>
        <p><strong>CSS</strong> (Cascading Style Sheets) - veb səhifələrin <em>görünüşünü</em> təyin edən dildir. Təsəvvür edin:</p>
        
        <ul class="check-list">
          <li><strong>HTML</strong> = Evin divarları, otaqlar (struktur)</li>
          <li><strong>CSS</strong> = Rənglər, mebel, dekorasiya (görünüş)</li>
          <li><strong>JavaScript</strong> = Elektrik, işıqlar (funksionallıq)</li>
        </ul>

        <div class="highlight-box">
          <strong>💡 Üstünlükləri:</strong>
          <ul>
            <li>Bir CSS faylı ilə minlərlə səhifəni stilizasiya edə bilərsiniz</li>
            <li>Dizaynı dəyişmək üçün HTML-ə toxunmaq lazım deyil</li>
            <li>Responsive (mobil uyumlu) dizayn yarada bilərsiniz</li>
            <li>Animasiyalar və interaktiv effektlər əlavə edə bilərsiniz</li>
          </ul>
        </div>
      </div>

      <!-- CSS ƏLAVƏ ÜSULLARI -->
      <div class="section-card">
        <h3>📥 CSS-i HTML-ə 3 Üsulla Əlavə Etmək</h3>
        
        <h4>1. Inline CSS (Ən Yüksək Prioritet, Amma Tövsiyə Edilmir)</h4>
        <p>Birbaşa HTML elementinin içində <code>style</code> atributu ilə:</p>
        
        <div class="code-block">
<span class="comment">&lt;!-- Bir elementə xüsusi stil --&gt;</span>
<span class="punctuation">&lt;</span><span class="selector">p</span> <span class="property">style</span><span class="punctuation">=</span><span class="value">"color: red; font-size: 20px;"</span><span class="punctuation">&gt;</span>
  <span class="value">Bu qırmızı və böyük mətn olacaq</span>
<span class="punctuation">&lt;/</span><span class="selector">p</span><span class="punctuation">&gt;</span>

<span class="punctuation">&lt;</span><span class="selector">div</span> <span class="property">style</span><span class="punctuation">=</span><span class="value">"background: blue; padding: 20px;"</span><span class="punctuation">&gt;</span>
  <span class="value">Mavi fonlu qutu</span>
<span class="punctuation">&lt;/</span><span class="selector">div</span><span class="punctuation">&gt;</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ Problemi:</strong> Hər elementə ayrıca stil vermək çox vaxt aparır və kodu qarışıq edir. Yalnız təcili, bir dəfəlik dəyişikliklər üçün istifadə edin.
        </div>

        <h4>2. Internal CSS (Səhifə Daxilində)</h4>
        <p>HTML faylının <code>&lt;head&gt;</code> hissəsində <code>&lt;style&gt;</code> teqi ilə:</p>
        
        <div class="code-block">
<span class="punctuation">&lt;!</span><span class="selector">DOCTYPE</span> <span class="selector">html</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;</span><span class="selector">html</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;</span><span class="selector">head</span><span class="punctuation">&gt;</span>
  <span class="punctuation">&lt;</span><span class="selector">title</span><span class="punctuation">&gt;</span><span class="value">Səhifə Başlığı</span><span class="punctuation">&lt;/</span><span class="selector">title</span><span class="punctuation">&gt;</span>
  
  <span class="punctuation">&lt;</span><span class="selector">style</span><span class="punctuation">&gt;</span>
    <span class="comment">/* Burada bütün CSS kodları */</span>
    <span class="selector">body</span> <span class="punctuation">{</span>
      <span class="property">background-color</span><span class="punctuation">:</span> <span class="value">#f0f0f0</span><span class="punctuation">;</span>
      <span class="property">font-family</span><span class="punctuation">:</span> <span class="value">Arial</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
    
    <span class="selector">h1</span> <span class="punctuation">{</span>
      <span class="property">color</span><span class="punctuation">:</span> <span class="value">blue</span><span class="punctuation">;</span>
      <span class="property">text-align</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>
  <span class="punctuation">&lt;/</span><span class="selector">style</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;/</span><span class="selector">head</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;</span><span class="selector">body</span><span class="punctuation">&gt;</span>
  <span class="punctuation">&lt;</span><span class="selector">h1</span><span class="punctuation">&gt;</span><span class="value">Başlıq</span><span class="punctuation">&lt;/</span><span class="selector">h1</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;/</span><span class="selector">body</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;/</span><span class="selector">html</span><span class="punctuation">&gt;</span>
        </div>

        <h4>3. External CSS (Ən Yaxşı Praktika - Ayrı Fayl)</h4>
        <p>CSS kodlarını ayrı <code>.css</code> faylında yazıb HTML-ə bağlayırıq:</p>
        
        <div class="code-block">
<span class="comment">/* styles.css faylı */</span>
<span class="selector">body</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#f5f5f5</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#333</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">h1</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#2c3e50</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <div class="code-block">
<span class="comment">&lt;!-- index.html faylında head hissəsində --&gt;</span>
<span class="punctuation">&lt;</span><span class="selector">link</span> <span class="property">rel</span><span class="punctuation">=</span><span class="value">"stylesheet"</span> <span class="property">href</span><span class="punctuation">=</span><span class="value">"styles.css"</span><span class="punctuation">&gt;</span>
        </div>

        <div class="tip-box">
          <strong>✅ Üstünlükləri:</strong>
          <ul>
            <li>Bir CSS faylı bir çox HTML faylı tərəfindən istifadə oluna bilər</li>
            <li>Brauzer CSS faylını bir dəfə yükləyib keşləyir (sürətlidir)</li>
            <li>HTML və CSS ayrı olduğu üçün kod daha oxunaqlıdır</li>
            <li>Komanda işi üçün idealdır</li>
          </ul>
        </div>
      </div>

      <!-- CSS SINTAKSISI -->
      <div class="section-card">
        <h3>✍️ CSS Sintaksisi (Yazılış Qaydaları)</h3>
        
        <div class="visual-box">
          <div style="font-family: monospace; font-size: 1.2rem; text-align: left; display: inline-block;">
            <span style="color: #f687b3;">selektor</span> {<br>
            &nbsp;&nbsp;<span style="color: #63b3ed;">xüsusiyyət</span>: <span style="color: #68d391;">dəyər</span>;<br>
            &nbsp;&nbsp;<span style="color: #63b3ed;">xüsusiyyət</span>: <span style="color: #68d391;">dəyər</span>;<br>
            }
          </div>
        </div>

        <div class="code-block">
<span class="comment">/* Selektor: hansı elementə tətbiq ediləcək */</span>
<span class="selector">p</span> <span class="punctuation">{</span>
  <span class="comment">/* Deklarasiya bloku */</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">blue</span><span class="punctuation">;</span>        <span class="comment">/* Xüsusiyyət: Dəyər */</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">16px</span><span class="punctuation">;</span>     <span class="comment">/* Hər sətirdə bir xüsusiyyət */</span>
  <span class="property">text-align</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>  <span class="comment">/* Sonra nöqtəli vergül (;) */</span>
<span class="punctuation">}</span>

<span class="comment">/* Bir neçə selektor eyni stil */</span>
<span class="selector">h1</span><span class="punctuation">,</span> <span class="selector">h2</span><span class="punctuation">,</span> <span class="selector">h3</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#333</span><span class="punctuation">;</span>
  <span class="property">font-family</span><span class="punctuation">:</span> <span class="value">Arial, sans-serif</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ Vacib Qaydalar:</strong>
          <ul>
            <li>Hər xüsusiyyətin sonunda <strong>nöqtəli vergül (;)</strong> olmalıdır</li>
            <li>Açılan və bağlanan <strong>fiqur mötərizələr {}</strong> unutmayın</li>
            <li>Xüsusiyyət və dəyər arasında <strong>iki nöqtə (:)</strong> qoyun</li>
            <li>Şərhlər <code>/* */</code> arasına yazılır</li>
          </ul>
        </div>
      </div>

      <!-- SELEKTORLAR -->
      <div class="section-card">
        <h3>🎯 CSS Selektorlar (Elementləri Seçmək)</h3>
        <p>Selektorlar hansı HTML elementlərinə stil tətbiq edəcəyimizi göstərir.</p>

        <h4>1. Element (Tag) Selektoru</h4>
        <p>Birbaşa HTML teqinin adı ilə:</p>
        
        <div class="code-block">
<span class="comment">/* Bütün p elementləri */</span>
<span class="selector">p</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">gray</span><span class="punctuation">;</span>
  <span class="property">line-height</span><span class="punctuation">:</span> <span class="value">1.6</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Bütün h1 elementləri */</span>
<span class="selector">h1</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">2.5rem</span><span class="punctuation">;</span>
  <span class="property">text-align</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Bütün şəkillər */</span>
<span class="selector">img</span> <span class="punctuation">{</span>
  <span class="property">max-width</span><span class="punctuation">:</span> <span class="value">100%</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="value">auto</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4>2. Class Selektoru (.)</h4>
        <p>HTML-də <code>class="ad"</code> atributu ilə təyin olunanlar:</p>
        
        <div class="code-block">
<span class="comment">/* HTML: &lt;p class="intro"&gt; */</span>
<span class="selector">.intro</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">1.2rem</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#666</span><span class="punctuation">;</span>
  <span class="property">font-style</span><span class="punctuation">:</span> <span class="value">italic</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* HTML: &lt;div class="card"&gt; */</span>
<span class="selector">.card</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
  <span class="property">border-radius</span><span class="punctuation">:</span> <span class="value">8px</span><span class="punctuation">;</span>
  <span class="property">box-shadow</span><span class="punctuation">:</span> <span class="value">0 2px 4px rgba(0,0,0,0.1)</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Bir elementə bir neçə class verilə bilər */</span>
<span class="comment">/* HTML: &lt;div class="card featured"&gt; */</span>
<span class="selector">.featured</span> <span class="punctuation">{</span>
  <span class="property">border</span><span class="punctuation">:</span> <span class="value">2px solid #f5576c</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>💡 Class Üstünlükləri:</strong>
          <ul>
            <li>Bir elementə <strong>bir neçə class</strong> verilə bilər: <code>class="btn primary large"</code></li>
            <li>Eyni class <strong>bir çox elementdə</strong> istifadə oluna bilər</li>
            <li>Adı mənalı yazın: <code>.error-message</code> yox <code>.em</code></li>
          </ul>
        </div>

        <h4>3. ID Selektoru (#)</h4>
        <p>HTML-də <code>id="ad"</code> atributu ilə - <strong>yalnız bir elementdə!</strong></p>
        
        <div class="code-block">
<span class="comment">/* HTML: &lt;header id="main-header"&gt; */</span>
<span class="selector">#main-header</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#2c3e50</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">2rem</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* HTML: &lt;div id="hero-section"&gt; */</span>
<span class="selector">#hero-section</span> <span class="punctuation">{</span>
  <span class="property">min-height</span><span class="punctuation">:</span> <span class="value">100vh</span><span class="punctuation">;</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ Diqqət:</strong> ID <strong>yalnız bir elementdə</strong> istifadə olunmalıdır! Eyni ID-ni bir neçə yerdə istifadə etsəniz, JavaScriptdə problemlər yarana bilər. Ümumiyyətlə, stilizasiya üçün class, JavaScript üçün ID istifadə edin.
        </div>

        <h4>4. Descendant Selektoru (Boşluq)</h4>
        <p>Bir elementin içindəki digər elementlər:</p>
        
        <div class="code-block">
<span class="comment">/* nav içindəki bütün li elementləri */</span>
<span class="selector">nav li</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">inline-block</span><span class="punctuation">;</span>
  <span class="property">margin-right</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* .card içindəki bütün p elementləri */</span>
<span class="selector">.card p</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#666</span><span class="punctuation">;</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">0.9rem</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* article içindəki bütün a elementləri */</span>
<span class="selector">article a</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#f5576c</span><span class="punctuation">;</span>
  <span class="property">text-decoration</span><span class="punctuation">:</span> <span class="value">none</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4>5. Child Selektoru (>)</h4>
        <p>Yalnız birbaşa uşaq elementlər (nəvələri yox):</p>
        
        <div class="code-block">
<span class="comment">/* ul-in birbaşa uşağı olan li-lər (ul &gt; li) */</span>
<span class="selector">ul > li</span> <span class="punctuation">{</span>
  <span class="property">list-style</span><span class="punctuation">:</span> <span class="value">none</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">10px 0</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* .menu-nin birbaşa uşağı olan a-lar */</span>
<span class="selector">.menu > a</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">block</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">10px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4>6. Adjacent Sibling Selektoru (+)</h4>
        <p>Birbaşa qardaş element (yan-yana, dərhal sonra gələn):</p>
        
        <div class="code-block">
<span class="comment">/* h1-dən dərhal sonra gələn p */</span>
<span class="selector">h1 + p</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">1.2rem</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#666</span><span class="punctuation">;</span>
  <span class="property">font-style</span><span class="punctuation">:</span> <span class="value">italic</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* .box-dan sonra gələn .box */</span>
<span class="selector">.box + .box</span> <span class="punctuation">{</span>
  <span class="property">margin-top</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4>7. General Sibling Selektoru (~)</h4>
        <p>Bütün qardaş elementlər (dərhal sonra olması vacib deyil):</p>
        
        <div class="code-block">
<span class="comment">/* h2-dən sonra gələn bütün p elementləri */</span>
<span class="selector">h2 ~ p</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">blue</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <table class="comparison-table">
          <tr>
            <th>Selektor</th>
            <th>Sintaksis</th>
            <th>Təsvir</th>
          </tr>
          <tr>
            <td>Element</td>
            <td><span class="selector-badge">p</span></td>
            <td>Bütün p elementləri</td>
          </tr>
          <tr>
            <td>Class</td>
            <td><span class="selector-badge">.class</span></td>
            <td>class="class" olanlar</td>
          </tr>
          <tr>
            <td>ID</td>
            <td><span class="selector-badge">#id</span></td>
            <td>id="id" olan (yalnız 1)</td>
          </tr>
          <tr>
            <td>Descendant</td>
            <td><span class="selector-badge">div p</span></td>
            <td>div içindəki bütün p</td>
          </tr>
          <tr>
            <td>Child</td>
            <td><span class="selector-badge">ul > li</span></td>
            <td>Birbaşa uşaq elementlər</td>
          </tr>
          <tr>
            <td>Adjacent</td>
            <td><span class="selector-badge">h1 + p</span></td>
            <td>h1-dən sonra gələn p</td>
          </tr>
          <tr>
            <td>General Sibling</td>
            <td><span class="selector-badge">h2 ~ p</span></td>
            <td>h2-dən sonra gələn bütün p</td>
          </tr>
        </table>
      </div>

      <!-- PSEUDO-CLASS və PSEUDO-ELEMENT -->
      <div class="section-card">
        <h3>✨ Pseudo-Class və Pseudo-Elementlər</h3>
        <p>Xüsusi vəziyyətlərdə və ya elementin müəyyən hissələrinə stil tətbiq etmək üçün.</p>

        <h4>Pseudo-Class-lar (:) - Xüsusi Vəziyyətlər</h4>
        
        <div class="code-block">
<span class="comment">/* :hover - üzərinə gəldikdə */</span>
<span class="selector">a:hover</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">red</span><span class="punctuation">;</span>
  <span class="property">text-decoration</span><span class="punctuation">:</span> <span class="value">underline</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">button:hover</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#f5576c</span><span class="punctuation">;</span>
  <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateY(-2px)</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* :focus - fokuslandıqda (klaviatura ilə seçdikdə) */</span>
<span class="selector">input:focus</span> <span class="punctuation">{</span>
  <span class="property">border-color</span><span class="punctuation">:</span> <span class="value">#667eea</span><span class="punctuation">;</span>
  <span class="property">outline</span><span class="punctuation">:</span> <span class="value">none</span><span class="punctuation">;</span>
  <span class="property">box-shadow</span><span class="punctuation">:</span> <span class="value">0 0 0 3px rgba(102, 126, 234, 0.1)</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* :active - klikləndikdə */</span>
<span class="selector">button:active</span> <span class="punctuation">{</span>
  <span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale(0.98)</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* :first-child - ilk uşaq */</span>
<span class="selector">li:first-child</span> <span class="punctuation">{</span>
  <span class="property">font-weight</span><span class="punctuation">:</span> <span class="value">bold</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* :last-child - son uşaq */</span>
<span class="selector">li:last-child</span> <span class="punctuation">{</span>
  <span class="property">border-bottom</span><span class="punctuation">:</span> <span class="value">none</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* :nth-child() - sıraya görə */</span>
<span class="selector">li:nth-child(odd)</span> <span class="punctuation">{</span>   <span class="comment">/* Tək sıralar: 1, 3, 5... */</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#f7fafc</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">li:nth-child(even)</span> <span class="punctuation">{</span>  <span class="comment">/* Cüt sıralar: 2, 4, 6... */</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">li:nth-child(3n)</span> <span class="punctuation">{</span>    <span class="comment">/* Hər 3-cü: 3, 6, 9... */</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#f5576c</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* :not() - istisna etmək */</span>
<span class="selector">li:not(.active)</span> <span class="punctuation">{</span>
  <span class="property">opacity</span><span class="punctuation">:</span> <span class="value">0.7</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4>Pseudo-Elementlər (::) - Elementin Hissələri</h4>
        
        <div class="code-block">
<span class="comment">/* ::before - elementin əvvəlinə mətn əlavə etmək */</span>
<span class="selector">.phone::before</span> <span class="punctuation">{</span>
  <span class="property">content</span><span class="punctuation">:</span> <span class="value">"📞 "</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* ::after - elementin sonuna mətn əlavə etmək */</span>
<span class="selector">a.external::after</span> <span class="punctuation">{</span>
  <span class="property">content</span><span class="punctuation">:</span> <span class="value">" ↗"</span><span class="punctuation">;</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">0.8em</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* ::first-line - ilk sətir */</span>
<span class="selector">p::first-line</span> <span class="punctuation">{</span>
  <span class="property">font-weight</span><span class="punctuation">:</span> <span class="value">bold</span><span class="punctuation">;</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">1.1em</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* ::first-letter - ilk hərf */</span>
<span class="selector">p::first-letter</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">3em</span><span class="punctuation">;</span>
  <span class="property">float</span><span class="punctuation">:</span> <span class="value">left</span><span class="punctuation">;</span>
  <span class="property">line-height</span><span class="punctuation">:</span> <span class="value">1</span><span class="punctuation">;</span>
  <span class="property">margin-right</span><span class="punctuation">:</span> <span class="value">10px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* ::placeholder - input placeholder mətni */</span>
<span class="selector">input::placeholder</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">#a0aec0</span><span class="punctuation">;</span>
  <span class="property">font-style</span><span class="punctuation">:</span> <span class="value">italic</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* ::selection - seçilmiş mətn */</span>
<span class="selector">::selection</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#f5576c</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>💡 Qayda:</strong> CSS3-dən sonra pseudo-elementlər <strong>iki qoşa nöqtə (::)</strong> ilə yazılır (::before, ::after), pseudo-class-lar isə <strong>tək nöqtə (:)</strong> ilə (:hover, :focus). Amma brauzerlər ::before və :before hər ikisini qəbul edir.
        </div>
      </div>

      <!-- BOX MODEL -->
      <div class="section-card">
        <h3>📦 Box Model (Qutu Modeli)</h3>
        <p>CSS-də hər HTML elementi bir <strong>qutu</strong> kimi düşünülür. Bu qutunun 4 əsas hissəsi var:</p>

        <div class="visual-box">
          <div style="background: #f6e05e; padding: 20px; display: inline-block;">
            <div style="background: #68d391; padding: 20px; display: inline-block;">
              <div style="background: #f687b3; padding: 40px; display: inline-block;">
                <div style="background: white; padding: 30px; font-weight: bold; color: #2d3748;">
                  CONTENT<br>(Məzmun)<br>Mətn, şəkil və s.
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 1rem; text-align: left; display: inline-block;">
            <div style="background: #f6e05e; padding: 5px 10px; margin: 2px;">🟡 MARGIN (Xarici boşluq)</div>
            <div style="background: #68d391; padding: 5px 10px; margin: 2px;">🟢 BORDER (Sərhəd)</div>
            <div style="background: #f687b3; padding: 5px 10px; margin: 2px;">🩷 PADDING (Daxili boşluq)</div>
            <div style="background: white; padding: 5px 10px; margin: 2px; border: 1px solid #ccc;">⚪ CONTENT (Məzmun)</div>
          </div>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <h4>1. Content</h4>
            <p>Məzmunun özü - mətn, şəkil və s. <code>width</code> və <code>height</code> ilə ölçülür.</p>
          </div>
          <div class="info-item">
            <h4>2. Padding</h4>
            <p>Content ilə Border arası boşluq. Daxili boşluq kimi düşünün.</p>
          </div>
          <div class="info-item">
            <h4>3. Border</h4>
            <p>Padding ətrafında sərhəd xətti. Qalınlıq, rəng, stil verilə bilər.</p>
          </div>
          <div class="info-item">
            <h4>4. Margin</h4>
            <p>Border xaricindəki boşluq. Elementlər arası məsafəni təyin edir.</p>
          </div>
        </div>

        <h4>Praktiki Nümunə:</h4>
        
        <div class="code-block">
<span class="selector">.box</span> <span class="punctuation">{</span>
  <span class="comment">/* 1. CONTENT ölçüləri */</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="value">300px</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="value">200px</span><span class="punctuation">;</span>
  
  <span class="comment">/* 2. PADDING - daxili boşluq */</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>           <span class="comment">/* Hər tərəfə 20px */</span>
  <span class="comment">/* padding: 10px 20px; */</span>  <span class="comment">/* Yuxarı/aşağı 10px, sağ/sol 20px */</span>
  <span class="comment">/* padding: 10px 20px 30px 40px; */</span> <span class="comment">/* Saat istiqamətində: yuxarı, sağ, aşağı, sol */</span>
  
  <span class="comment">/* 3. BORDER - sərhəd */</span>
  <span class="property">border</span><span class="punctuation">:</span> <span class="value">3px solid #667eea</span><span class="punctuation">;</span>
  <span class="comment">/* border-width: 3px; */</span>
  <span class="comment">/* border-style: solid; */</span>  <span class="comment">/* solid, dashed, dotted, double */</span>
  <span class="comment">/* border-color: #667eea; */</span>
  <span class="property">border-radius</span><span class="punctuation">:</span> <span class="value">10px</span><span class="punctuation">;</span>     <span class="comment">/* Küncləri yuvarlaqlaşdırmaq */</span>
  
  <span class="comment">/* 4. MARGIN - xarici boşluq */</span>
  <span class="property">margin</span><span class="punctuation">:</span> <span class="value">20px auto</span><span class="punctuation">;</span>      <span class="comment">/* Yuxarı/aşağı 20px, sağ/sol avtomatik (mərkəzləşdirmə) */</span>
<span class="punctuation">}</span>
        </div>

        <div class="example-preview">
          <div class="example-preview-header">Canlı Nümunə:</div>
          <div style="background: #f6e05e; padding: 20px; text-align: center;">
            <div style="background: #68d391; padding: 3px; display: inline-block;">
              <div style="background: #f687b3; padding: 20px;">
                <div style="background: white; padding: 20px; width: 200px; height: 100px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                  Mənim Qutum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOX-SIZING -->
      <div class="section-card">
        <h3>📐 Box-Sizing: Ölçülərin Hesablanması</h3>
        <p>Box-model ilə bağlı ən böyük çaşqınlıq budur! İki fərqli hesablama üsulu var:</p>

        <h4>1. content-box (Default - Standart)</h4>
        <p><code>width</code> və <code>height</code> <strong>yalnız content-i</strong> əhatə edir. Padding və border əlavə olunur.</p>
        
        <div class="code-block">
<span class="selector">.content-box-example</span> <span class="punctuation">{</span>
  <span class="property">box-sizing</span><span class="punctuation">:</span> <span class="value">content-box</span><span class="punctuation">;</span>  <span class="comment">/* Default */</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="value">300px</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
  <span class="property">border</span><span class="punctuation">:</span> <span class="value">5px solid black</span><span class="punctuation">;</span>
  <span class="comment">/* REAL WIDTH = 300 + 20 + 20 + 5 + 5 = 350px ! */</span>
<span class="punctuation">}</span>
        </div>

        <h4>2. border-box (Tövsiyə Olunan)</h4>
        <p><code>width</code> və <code>height</code> <strong>border və padding daxil</strong> hesablanır. Content avtomatik kiçilir.</p>
        
        <div class="code-block">
<span class="selector">.border-box-example</span> <span class="punctuation">{</span>
  <span class="property">box-sizing</span><span class="punctuation">:</span> <span class="value">border-box</span><span class="punctuation">;</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="value">300px</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
  <span class="property">border</span><span class="punctuation">:</span> <span class="value">5px solid black</span><span class="punctuation">;</span>
  <span class="comment">/* REAL WIDTH = 300px (content avtomatik 250px olur) */</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>✅ Hər zaman bunu istifadə edin:</strong>
          <div class="code-block" style="margin: 0.5rem 0;">
<span class="comment">/* Bütün elementlər üçün border-box */</span>
<span class="selector">*</span> <span class="punctuation">{</span>
  <span class="property">box-sizing</span><span class="punctuation">:</span> <span class="value">border-box</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
          </div>
          <p>Bu reset kodunu hər CSS faylının əvvəlinə yazın. Dizaynı daha proqnozlaşdırılan edir!</p>
        </div>

        <div class="visual-box">
          <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
            <div style="text-align: center;">
              <div style="background: #fff5f5; border: 2px dashed #fc8181; padding: 10px; width: 250px;">
                <div style="background: #fed7d7; padding: 20px;">
                  <div style="background: white; padding: 10px;">Content: 200px</div>
                </div>
              </div>
              <p><strong>content-box</strong><br>Total: 250px</p>
            </div>
            <div style="text-align: center;">
              <div style="background: #f0fff4; border: 2px dashed #48bb78; padding: 10px; width: 200px;">
                <div style="background: #c6f6d5; padding: 20px;">
                  <div style="background: white; padding: 10px;">Content: 140px</div>
                </div>
              </div>
              <p><strong>border-box</strong><br>Total: 200px</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CSS VAHİDLƏRİ -->
      <div class="section-card">
        <h3>📏 CSS Vahidləri (Units)</h3>
        <p>Ölçüları ifadə etmək üçün müxtəlif vahidlərdən istifadə edirik.</p>

        <h4>Absolute (Mütləq) Vahidlər</h4>
        <table class="comparison-table">
          <tr>
            <th>Vahid</th>
            <th>Təsvir</th>
            <th>İstifadə</th>
          </tr>
          <tr>
            <td><strong>px</strong></td>
            <td>Piksel (ekran nöqtəsi)</td>
            <td>Border, kölgələr, kiçik elementlər</td>
          </tr>
          <tr>
            <td><strong>cm, mm, in</strong></td>
            <td>Fiziki ölçülər</td>
            <td>Çap üçün (print CSS)</td>
          </tr>
          <tr>
            <td><strong>pt</strong></td>
            <td>Point (1/72 inç)</td>
            <td>Şriftlər üçün (Word-dən tanışdır)</td>
          </tr>
        </table>

        <h4>Relative (Nisbi) Vahidlər - Əsas Bunlar!</h4>
        
        <div class="code-block">
<span class="comment">/* % - Parent elementin faizi */</span>
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="value">80%</span><span class="punctuation">;</span>  <span class="comment">/* Ana elementin 80% eni */</span>
<span class="punctuation">}</span>

<span class="comment">/* em - Parent elementin font-size-ə bərabər */</span>
<span class="selector">.parent</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">16px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
<span class="selector">.child</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">1.5em</span><span class="punctuation">;</span>  <span class="comment">/* 16px * 1.5 = 24px */</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">2em</span><span class="punctuation">;</span>      <span class="comment">/* 24px * 2 = 48px (font-size-dən asılı olur!) */</span>
<span class="punctuation">}</span>

<span class="comment">/* rem (root em) - HTML elementinin font-size-ə bərabər */</span>
<span class="selector">html</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">16px</span><span class="punctuation">;</span>  <span class="comment">/* Default */</span>
<span class="punctuation">}</span>
<span class="selector">.element</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">1.5rem</span><span class="punctuation">;</span>  <span class="comment">/* Həmişə 16px * 1.5 = 24px */</span>
  <span class="property">margin</span><span class="punctuation">:</span> <span class="value">2rem</span><span class="punctuation">;</span>       <span class="comment">/* Həmişə 16px * 2 = 32px */</span>
<span class="punctuation">}</span>

<span class="comment">/* vw - Viewport Width (ekran eninin 1%-i) */</span>
<span class="selector">.hero</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="value">100vw</span><span class="punctuation">;</span>       <span class="comment">/* Tam ekran eni */</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">5vw</span><span class="punctuation">;</span>     <span class="comment">/* Ekranla böyüyən şrift */</span>
<span class="punctuation">}</span>

<span class="comment">/* vh - Viewport Height (ekran hündürlüyünün 1%-i) */</span>
<span class="selector">.full-screen</span> <span class="punctuation">{</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="value">100vh</span><span class="punctuation">;</span>     <span class="comment">/* Tam ekran hündürlüyü */</span>
  <span class="property">min-height</span><span class="punctuation">:</span> <span class="value">100vh</span><span class="punctuation">;</span> <span class="comment">/* Ən azı ekran qədər böyük */</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>🎯 Tövsiyələr:</strong>
          <ul>
            <li><strong>rem</strong> - Font ölçüləri və məsafələr üçün (ən yaxşısı)</li>
            <li><strong>%</strong> - Container və layout üçün</li>
            <li><strong>vw/vh</strong> - Hero sections və tam ekran elementlər üçün</li>
            <li><strong>px</strong> - Border, kölgələr və kiçik detallar üçün</li>
            <li><strong>em</strong> - Komponent daxilində proporsional ölçülər üçün</li>
          </ul>
        </div>
      </div>

      <!-- SPECIFICITY -->
      <div class="section-card">
        <h3>⚡ Specificity (Xüsusilik / Güc)</h3>
        <p>Bir elementə müxtəlif selektorlarla müxtəlif stillər verilsə, hansi tətbiq olunacaq?</p>

        <div class="specificity-chart">
          <div class="specificity-bar">
            <div class="specificity-score">0</div>
            <div class="specificity-label">Universal selektor <span class="selector-badge">*</span></div>
          </div>
          <div class="specificity-bar">
            <div class="specificity-score">1</div>
            <div class="specificity-label">Element selektoru <span class="selector-badge">p</span> <span class="selector-badge">div</span> <span class="selector-badge">::before</span></div>
          </div>
          <div class="specificity-bar">
            <div class="specificity-score">10</div>
            <div class="specificity-label">Class selektoru <span class="selector-badge">.class</span> <span class="selector-badge">:hover</span> <span class="selector-badge">[type="text"]</span></div>
          </div>
          <div class="specificity-bar">
            <div class="specificity-score">100</div>
            <div class="specificity-label">ID selektoru <span class="selector-badge">#id</span></div>
          </div>
          <div class="specificity-bar">
            <div class="specificity-score">1000</div>
            <div class="specificity-label">Inline style <span class="selector-badge">style="..."</span></div>
          </div>
        </div>

        <div class="code-block">
<span class="comment">/* Specificity: 1 */</span>
<span class="selector">p</span> <span class="punctuation">{</span> <span class="property">color</span><span class="punctuation">:</span> <span class="value">blue</span><span class="punctuation">;</span> <span class="punctuation">}</span>

<span class="comment">/* Specificity: 10 (class > element) */</span>
<span class="selector">.text</span> <span class="punctuation">{</span> <span class="property">color</span><span class="punctuation">:</span> <span class="value">red</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* Qazanır! */</span>

<span class="comment">/* Specificity: 11 (1 element + 1 class) */</span>
<span class="selector">p.text</span> <span class="punctuation">{</span> <span class="property">color</span><span class="punctuation">:</span> <span class="value">green</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* Ən güclü! */</span>

<span class="comment">/* Specificity: 100 (id > class) */</span>
<span class="selector">#unique</span> <span class="punctuation">{</span> <span class="property">color</span><span class="punctuation">:</span> <span class="value">purple</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* Ən güclü! */</span>

<span class="comment">/* HTML: &lt;p id="unique" class="text"&gt;Mətn&lt;/p&gt; */</span>
<span class="comment">/* Nəticə: PURPLE (ID ən güclüdür) */</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ !important - İstifadə Etməyin!</strong>
          <div class="code-block" style="margin: 0.5rem 0;">
<span class="selector">.button</span> <span class="punctuation">{</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">red !important</span><span class="punctuation">;</span>  <span class="comment">/* Hər şeyi üstələyir */</span>
<span class="punctuation">}</span>
          </div>
          <p><code>!important</code> bütün specificity qaydalarını ləğv edir. Yalnız son çarə olaraq istifadə edin (məsələn, üçüncü tərəf kodunu override etmək üçün). Daimi istifadə kodu qarışıq edir.</p>
        </div>

        <div class="tip-box">
          <strong>💡 Qayda:</strong> Eyni specificity-də olan selektorlardan <strong>son yazılan</strong> qüvvəyə minir (Cascading - Şəlalə effekti).
        </div>
      </div>

      <!-- YEKUN -->
      <div class="section-card" style="border-left-color: #48bb78;">
        <h3>🎉 Təbriklər!</h3>
        <p>CSS-in əsaslarını öyrəndiniz. İndi bilirsiniz:</p>
        <ul class="check-list">
          <li>CSS-i 3 üsulla HTML-ə əlavə etməyi</li>
          <li>7 fərqli selektor tipindən istifadəni</li>
          <li>Pseudo-class və pseudo-elementləri</li>
          <li>Box Model-i (Content, Padding, Border, Margin)</li>
          <li>Box-sizing: border-box-un vacibliyini</li>
          <li>Relative vahidləri (rem, em, %, vw, vh)</li>
          <li>Specificity qaydalarını</li>
        </ul>
        
        <div class="tip-box" style="margin-top: 1rem;">
          <strong>🚀 Növbəti Addım:</strong> Praktikada tətbiq edin! Aşağıdakı tapşırığı yerinə yetirin və real bir layihənin CSS-ini yazın.
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
    <title>CSS Box Model Praktikası</title>
    <style>
        /* ==========================================
           ƏSAS RESET - Hər zaman əlavə edin!
           ========================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box; /* Vacib! */
        }

        /* ==========================================
           ÜMUMİ STILLƏR
           ========================================== */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        /* ==========================================
           CONTAINER
           ========================================== */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        /* ==========================================
           HEADER - ID SELEKTORU
           ========================================== */
        #main-header {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }

        #main-header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .subtitle {
            font-size: 1.2rem;
            opacity: 0.95;
        }

        /* ==========================================
           NAVIQASIYA - DESCENDANT SELEKTORU
           ========================================== */
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 2rem;
            padding: 1.5rem;
            background: #2d3748;
        }

        nav li {
            display: inline-block;
        }

        nav a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: all 0.3s;
        }

        /* PSEUDO-CLASS: hover */
        nav a:hover {
            background: #f5576c;
            transform: translateY(-2px);
        }

        /* PSEUDO-CLASS: active */
        nav a:active {
            transform: translateY(0);
        }

        /* ==========================================
           BOX MODEL NÜMUNƏSİ
           ========================================== */
        .box-model-demo {
            padding: 3rem 2rem;
            background: #f7fafc;
        }

        .box-model-demo h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: #2d3748;
        }

        /* BOX MODEL TƏTBİQİ */
        .content-box {
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 40px;              /* PADDING */
            border: 5px solid #667eea;  /* BORDER */
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1); /* Margin effekti */
        }

        .content-box h3 {
            color: #667eea;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .content-box p {
            color: #4a5568;
            line-height: 1.8;
        }

        /* PSEUDO-ELEMENT: ::first-letter */
        .content-box p::first-letter {
            font-size: 3rem;
            float: left;
            line-height: 1;
            margin-right: 10px;
            color: #f5576c;
            font-weight: bold;
        }

        /* ==========================================
           FLEX CONTAINER
           ========================================== */
        .flex-showcase {
            padding: 3rem 2rem;
        }

        .flex-showcase h2 {
            text-align: center;
            margin-bottom: 2rem;
        }

        .flex-container {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* CLASS SELEKTORU */
        .flex-item {
            flex: 1;
            min-width: 200px;
            max-width: 300px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem;
            text-align: center;
            border-radius: 10px;
            transition: all 0.3s;
            cursor: pointer;
        }

        /* PSEUDO-CLASS: hover */
        .flex-item:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
        }

        /* PSEUDO-ELEMENT: ::before */
        .flex-item::before {
            content: "→";
            display: block;
            font-size: 2rem;
            margin-bottom: 10px;
        }

        /* CHILD SELEKTORU: Birbaşa uşaq h1 */
        .flex-item > h3 {
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        /* ==========================================
           LIST STYLING
           ========================================== */
        .custom-list-section {
            padding: 3rem 2rem;
            background: #edf2f7;
        }

        .custom-list {
            list-style: none;
            max-width: 600px;
            margin: 0 auto;
        }

        .custom-list li {
            background: white;
            padding: 1rem 1.5rem;
            margin-bottom: 1rem;
            border-left: 4px solid #f5576c;
            border-radius: 0 8px 8px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: all 0.3s;
        }

        /* PSEUDO-CLASS: hover */
        .custom-list li:hover {
            padding-left: 2rem;
            border-left-width: 8px;
        }

        /* PSEUDO-CLASS: nth-child */
        .custom-list li:nth-child(odd) {
            background: #fff5f5;
        }

        /* PSEUDO-CLASS: first-child */
        .custom-list li:first-child {
            border-left-color: #48bb78;
        }

        /* PSEUDO-CLASS: last-child */
        .custom-list li:last-child {
            border-left-color: #667eea;
        }

        /* ==========================================
           FOOTER
           ========================================== */
        footer {
            background: #2d3748;
            color: white;
            text-align: center;
            padding: 2rem;
        }

        /* PSEUDO-ELEMENT: ::after */
        footer p::after {
            content: " ❤️";
        }

        /* ==========================================
           RESPONSIVE DIZAYN
           ========================================== */
        @media (max-width: 768px) {
            #main-header h1 {
                font-size: 1.8rem;
            }

            nav ul {
                flex-direction: column;
                gap: 0.5rem;
            }

            .flex-container {
                flex-direction: column;
                align-items: center;
            }

            .flex-item {
                width: 100%;
                max-width: none;
            }

            .content-box {
                width: 95%;
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header id="main-header">
            <h1>CSS3 Box Model</h1>
            <p class="subtitle">Selektorlar və Dizayn Prinsipləri</p>
        </header>

        <!-- Naviqasiya -->
        <nav>
            <ul>
                <li><a href="#home">Ana səhifə</a></li>
                <li><a href="#about">Haqqında</a></li>
                <li><a href="#services">Xidmətlər</a></li>
                <li><a href="#contact">Əlaqə</a></li>
            </ul>
        </nav>

        <!-- Box Model Demo -->
        <section class="box-model-demo">
            <h2>Box Model Nümunəsi</h2>
            <div class="content-box">
                <h3>Məzmun Qutusu</h3>
                <p>Bu qutu box-model-in bütün xüsusiyyətlərini özündə birləşdirir. Padding içəri boşluq, border sərhəd, margin isə xarici boşluqdur. Box-sizing: border-box sayəsində width 80% olaraq qalır, padding və border daxildir.</p>
            </div>
        </section>

        <!-- Flex Showcase -->
        <section class="flex-showcase">
            <h2>Flexbox Layout</h2>
            <div class="flex-container">
                <div class="flex-item">
                    <h3>Responsiv</h3>
                    <p>Hər ölçüdə uyğunlaşan dizayn</p>
                </div>
                <div class="flex-item">
                    <h3>Müasir</h3>
                    <p>Ən son CSS3 xüsusiyyətləri</p>
                </div>
                <div class="flex-item">
                    <h3>Sürətli</h3>
                    <p>Optimallaşdırılmış performans</p>
                </div>
            </div>
        </section>

        <!-- Custom List -->
        <section class="custom-list-section">
            <h2 style="text-align: center; margin-bottom: 2rem;">Pseudo-Class Nümunələri</h2>
            <ul class="custom-list">
                <li>Birinci element (first-child)</li>
                <li>İkinci element</li>
                <li>Üçüncü element (nth-child(odd))</li>
                <li>Dördüncü element</li>
                <li>Son element (last-child)</li>
            </ul>
        </section>

        <!-- Footer -->
        <footer>
            <p>&copy; 2024 CSS Təlimatı</p>
        </footer>
    </div>
</body>
</html>`,
    
    css: `/* Bu fayl boş qala bilər, çünki bütün CSS HTML-in içindədir */
/* Və ya əlavə stillər burada yazıla bilər */`,
    
    js: `// Box Model ölçülərini hesabla və göstər
document.addEventListener('DOMContentLoaded', function() {
    
    const box = document.querySelector('.content-box');
    
    if(box) {
        // Hesablama funksiyası
        function calculateBoxModel() {
            const styles = window.getComputedStyle(box);
            
            const width = parseFloat(styles.width);
            const paddingTop = parseFloat(styles.paddingTop);
            const paddingRight = parseFloat(styles.paddingRight);
            const paddingBottom = parseFloat(styles.paddingBottom);
            const paddingLeft = parseFloat(styles.paddingLeft);
            const borderTop = parseFloat(styles.borderTopWidth);
            const borderRight = parseFloat(styles.borderRightWidth);
            const borderBottom = parseFloat(styles.borderBottomWidth);
            const borderLeft = parseFloat(styles.borderLeftWidth);
            
            console.log('=== BOX MODEL ÖLÇÜLƏRİ ===');
            console.log('Content Width:', width, 'px');
            console.log('Padding (T/R/B/L):', paddingTop, paddingRight, paddingBottom, paddingLeft, 'px');
            console.log('Border (T/R/B/L):', borderTop, borderRight, borderBottom, borderLeft, 'px');
            console.log('Total Width:', width + paddingLeft + paddingRight + borderLeft + borderRight, 'px');
            console.log('========================');
        }
        
        // Səhifə yükləndikdə hesabla
        calculateBoxModel();
        
        // Pəncərə ölçüsü dəyişdikdə yenidən hesabla
        window.addEventListener('resize', calculateBoxModel);
    }
    
    // Flex item-lərə klik eventi əlavə et
    const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Aktiv klasını əlavə et/çıxar
            this.style.background = this.style.background ? '' : '#f5576c';
            console.log('Flex Item ' + (index + 1) + ' klikləndi');
        });
    });
    
    // Naviqasiya linklərinin aktiv vəziyyətini dəyiş
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Keçidi blokla (demo üçün)
            
            // Bütün aktiv klaslarını sil
            navLinks.forEach(l => l.style.background = '');
            
            // Kliklənənə aktiv stil ver
            this.style.background = '#f5576c';
            
            console.log('Navigasiya:', this.textContent);
        });
    });
    
    // Custom list item-ləri üçün əlavə effekt
    const listItems = document.querySelectorAll('.custom-list li');
    listItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    console.log('%c🎨 CSS Box Model Praktikası yükləndi!', 'font-size: 16px; color: #f5576c; font-weight: bold;');
    console.log('%cBox model ölçülərini görmək üçün konsolu açıq saxlayın', 'font-size: 12px; color: #666;');
});`
  },

  exercise: {
    title: "Professional Profile Kartı Yarat",
    description: "HTML strukturu verilmişdir. Bütün CSS selektorlarını (element, class, id, descendant, child, pseudo-class, pseudo-element) istifadə edərək gözəl bir profil kartı dizayn edin. Box model qaydalarına riayət edin!",
    requirements: [
      "* { box-sizing: border-box } reset əlavə edin",
      "ID selektoru istifadə edin (#profile-card üçün)",
      "Ən azı 3 fərqli class selektoru yaradın",
      "Descendant selektoru istifadə edin (məsələn, .card h2)",
      "Child selektoru istifadə edin (məsələn, .skills > li)",
      ":hover pseudo-class istifadə edin",
      ":nth-child() pseudo-class istifadə edin",
      "::before və ya ::after pseudo-element istifadə edin",
      "Box model (padding, border, margin) tətbiq edin",
      "rem və ya em vahidləri istifadə edin",
      "Border-radius ilə yuvarlaq künclər yaradın",
      "Box-shadow ilə kölgə effekti əlavə edin",
      "Transition ilə animasiya əlavə edin",
      "Responsive dizayn üçün @media query əlavə edin",
      "Rəngli gradient fon istifadə edin"
    ],
    starterCode: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil Kartı</title>
    <style>
        /* BURAYA CSS KODUNUZU YAZIN */
        /* 1. Reset əlavə edin */
        
        /* 2. Bədən stilləri */
        
        /* 3. #profile-card stilləri */
        
        /* 4. .avatar stilləri */
        
        /* 5. .info stilləri */
        
        /* 6. .skills stilləri */
        
        /* 7. Pseudo-class və pseudo-elementlər */
        
        /* 8. Responsive dizayn */
        
    </style>
</head>
<body>
    <div id="profile-card">
        <div class="avatar">
            <img src="https://via.placeholder.com/150" alt="Profil şəkli">
        </div>
        
        <div class="info">
            <h2>Əli Məmmədov</h2>
            <p class="title">Veb Developer</p>
            <p class="bio">HTML, CSS və JavaScript ilə müasir veb saytlar yaradıram.</p>
        </div>
        
        <ul class="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
        </ul>
        
        <div class="contact">
            <button>Əlaqə</button>
        </div>
    </div>
</body>
</html>`
  },

  quiz: [
    {
      question: "CSS-i HTML-ə əlavə etməyin ən yaxşı üsulu hansıdır?",
      options: ["Inline style", "Internal <style> tagi", "External .css faylı", "JavaScript ilə"],
      correctAnswer: 2,
      explanation: "External CSS faylı ən yaxşı praktikadır çünki bir fayl bir çox səhifə tərəfindən istifadə oluna bilər, brauzer tərəfindən keşlənir və kod daha oxunaqlı olur."
    },
    {
      question: "Hansı selektorun specificity (güc) dəyəri ən yüksəkdir?",
      options: ["p {}", ".class {}", "#id {}", "* {}"],
      correctAnswer: 2,
      explanation: "ID selektoru (#id) 100 xalla ən yüksək dəyərə sahibdir. Class 10, element 1, universal selektor (*) isə 0 xaldır."
    },
    {
      question: "Box-sizing: border-box nə edir?",
      options: ["Yalnız content ölçüsünü hesablayır", "Padding və border-i width/height-ə daxil edir", "Margin-i hesablamır", "Heç birini"],
      correctAnswer: 1,
      explanation: "border-box width və height dəyərlərinə padding və border-i daxil edir. Beləliklə, verdiyiniz width dəqiq olaraq o ölçüdə qalır."
    },
    {
      question: "1rem nə qədərdir?",
      options: ["10px", "16px (default)", "Parent elementin font-size-ı", "1% viewport"],
      correctAnswer: 1,
      explanation: "1rem HTML elementinin (root) font-size-na bərabərdir. Default olaraq bu 16px-dir, amma dəyişdirilə bilər."
    },
    {
      question: "Hansı pseudo-class elementin üzərinə mouse gətirildikdə işləyir?",
      options: [":active", ":focus", ":hover", ":visited"],
      correctAnswer: 2,
      explanation: ":hover pseudo-class istifadəçi elementin üzərinə mouse gətirdikdə tətbiq olunur."
    },
    {
      question: "Descendant selektoru (boşluq) nə edir?",
      options: ["Birbaşa uşaq elementləri seçir", "Bütün nested elementləri seçir", "Qardaş elementləri seçir", "Parent elementi seçir"],
      correctAnswer: 1,
      explanation: "Boşluq ilə yazılan descendant selektoru (məsələn, div p) div-in içində olan bütün p elementlərini seçir, yalnız birbaşa uşaqları yox."
    },
    {
      question: "vw vahidi nəyi ifadə edir?",
      options: ["Viewport height", "Viewport width", "Vertical width", "View weight"],
      correctAnswer: 1,
      explanation: "vw (viewport width) brauzer pəncərəsinin eninin 1%-nə bərabərdir. 100vw tam ekran enidir."
    },
    {
      question: "Child selektoru (>) nə edir?",
      options: ["Bütün descendant-ları seçir", "Yalnız birbaşa uşaq elementləri seçir", "Qardaş elementləri seçir", "Parent elementi seçir"],
      correctAnswer: 1,
      explanation: "Child selektoru (>) yalnız birbaşa uşaq elementləri seçir. Nəvə və daha dərin elementləri seçmir."
    },
    {
      question: "Padding nədir?",
      options: ["Border xaricindəki boşluq", "Content ilə border arası boşluq", "Content-in ölçüsü", "Margin-in içindəki boşluq"],
      correctAnswer: 1,
      explanation: "Padding content (məzmun) ilə border (sərhəd) arasındakı daxili boşluqdur."
    },
    {
      question: "::before pseudo-elementi nə edir?",
      options: ["Elementin əvvəlinə mətn əlavə edir", "Elementin sonuna mətn əlavə edir", "Elementi gizlədir", "Elementin rəngini dəyişir"],
      correctAnswer: 0,
      explanation: "::before elementin əvvəlinə, ::after isə sonuna mətn və ya şəkil əlavə etmək üçün istifadə olunur. content: '' xüsusiyyəti mütləqdir."
    }
  ]
};

export default topic2;