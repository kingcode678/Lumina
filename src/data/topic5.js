export const topic5 = {
  id: 5,
  title: "Responsive Design və Media Queries",
  duration: "75 dəq",
  isFree: false,
  
  content: `
    <style>
      .topic-container {
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        line-height: 1.8;
        color: #1a202c;
        max-width: 100%;
        font-size: 16px;
      }
      
      .intro-box {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        color: white;
        padding: 2.5rem;
        border-radius: 16px;
        margin-bottom: 2rem;
      }
      
      .intro-box h2 {
        margin: 0 0 1rem 0;
        font-size: 2.2rem;
        font-weight: 700;
      }
      
      .intro-box p {
        margin: 0;
        opacity: 0.95;
        font-size: 1.2rem;
        line-height: 1.7;
      }
      
      .section-card {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.07);
        border-left: 5px solid #3b82f6;
      }
      
      .section-card h3 {
        color: #1a202c;
        margin: 0 0 1.5rem 0;
        font-size: 1.6rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .section-card h4 {
        color: #2d3748;
        margin: 2rem 0 1rem 0;
        font-size: 1.3rem;
        font-weight: 600;
      }
      
      .code-block {
        background: #1a202c;
        color: #e2e8f0;
        padding: 1.5rem;
        border-radius: 10px;
        overflow-x: auto;
        margin: 1.5rem 0;
        font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        font-size: 1rem;
        line-height: 1.7;
        border: 2px solid #4a5568;
      }
      
      .code-block .property { color: #63b3ed; font-weight: 600; }
      .code-block .value { color: #68d391; font-weight: 500; }
      .code-block .selector { color: #f687b3; font-weight: 600; }
      .code-block .comment { color: #a0aec0; font-style: italic; }
      .code-block .punctuation { color: #e2e8f0; }
      .code-block .number { color: #fbd38d; }
      
      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }
      
      .info-item {
        background: #eff6ff;
        padding: 1.5rem;
        border-radius: 10px;
        border: 2px solid #3b82f6;
      }
      
      .info-item h4 {
        margin: 0 0 0.75rem 0;
        color: #1d4ed8;
        font-size: 1.2rem;
        font-weight: 700;
      }
      
      .info-item p {
        margin: 0;
        font-size: 1rem;
        color: #2d3748;
        line-height: 1.6;
      }
      
      .highlight-box {
        background: #fffbeb;
        border: 2px solid #f59e0b;
        border-radius: 10px;
        padding: 1.5rem;
        margin: 1.5rem 0;
        font-size: 1.05rem;
      }
      
      .highlight-box strong {
        color: #b45309;
        font-size: 1.1rem;
      }
      
      .tip-box {
        background: #ecfdf5;
        border: 2px solid #10b981;
        border-radius: 10px;
        padding: 1.5rem;
        margin: 1.5rem 0;
        font-size: 1.05rem;
      }
      
      .tip-box strong {
        color: #047857;
        font-size: 1.1rem;
      }
      
      .warning-box {
        background: #fef2f2;
        border: 2px solid #ef4444;
        border-radius: 10px;
        padding: 1.5rem;
        margin: 1.5rem 0;
        font-size: 1.05rem;
      }
      
      .warning-box strong {
        color: #b91c1c;
        font-size: 1.1rem;
      }
      
      .visual-demo {
        background: #f8fafc;
        border: 3px dashed #cbd5e1;
        border-radius: 12px;
        padding: 2rem;
        margin: 1.5rem 0;
        text-align: center;
      }
      
      .device-showcase {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
      }
      
      .device-card {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        text-align: center;
        transition: transform 0.3s;
      }
      
      .device-card:hover {
        transform: translateY(-5px);
      }
      
      .device-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
      }
      
      .device-card h4 {
        margin: 0 0 0.5rem 0;
        color: #1e293b;
        font-size: 1.3rem;
      }
      
      .device-card p {
        margin: 0;
        color: #64748b;
        font-size: 0.95rem;
      }
      
      .breakpoint-visual {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1.5rem 0;
      }
      
      .breakpoint-bar {
        background: linear-gradient(90deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%);
        height: 60px;
        border-radius: 8px;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        color: white;
        font-weight: 600;
      }
      
      .breakpoint-marker {
        position: absolute;
        top: -10px;
        transform: translateX(-50%);
        background: #1e293b;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 700;
      }
      
      .breakpoint-marker::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #1e293b;
      }
      
      .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 1.05rem;
      }
      
      .comparison-table th {
        background: #1d4ed8;
        color: white;
        padding: 1rem;
        text-align: left;
        font-weight: 600;
        font-size: 1.1rem;
      }
      
      .comparison-table td {
        padding: 1rem;
        border-bottom: 2px solid #e2e8f0;
        color: #2d3748;
      }
      
      .comparison-table tr:nth-child(even) {
        background: #eff6ff;
      }
      
      .property-badge {
        display: inline-block;
        background: #dbeafe;
        color: #1e40af;
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        font-family: monospace;
        font-size: 1rem;
        font-weight: 600;
        margin: 0.25rem;
        border: 2px solid #3b82f6;
      }
      
      .value-badge {
        display: inline-block;
        background: #dcfce7;
        color: #166534;
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        font-family: monospace;
        font-size: 1rem;
        font-weight: 600;
        margin: 0.25rem;
        border: 2px solid #10b981;
      }
      
      .step-list {
        counter-reset: step;
        list-style: none;
        padding: 0;
      }
      
      .step-list li {
        counter-increment: step;
        position: relative;
        padding-left: 3.5rem;
        margin-bottom: 1.5rem;
        padding-top: 0.5rem;
        font-size: 1.05rem;
        line-height: 1.7;
      }
      
      .step-list li::before {
        content: counter(step);
        position: absolute;
        left: 0;
        top: 0;
        width: 2.5rem;
        height: 2.5rem;
        background: #3b82f6;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.2rem;
      }
      
      .check-list {
        list-style: none;
        padding: 0;
      }
      
      .check-list li {
        padding-left: 2rem;
        position: relative;
        margin-bottom: 0.75rem;
        font-size: 1.05rem;
        line-height: 1.7;
      }
      
      .check-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #3b82f6;
        font-weight: 900;
        font-size: 1.3rem;
      }
      
      .vs-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 1.5rem 0;
      }
      
      .vs-item {
        padding: 1.5rem;
        border-radius: 10px;
        text-align: center;
      }
      
      .vs-item h4 {
        margin: 0 0 1rem 0;
        font-size: 1.3rem;
      }
      
      .vs-mobile {
        background: #fef3c7;
        border: 3px solid #f59e0b;
      }
      
      .vs-mobile h4 {
        color: #b45309;
      }
      
      .vs-desktop {
        background: #dbeafe;
        border: 3px solid #3b82f6;
      }
      
      .vs-desktop h4 {
        color: #1d4ed8;
      }
      
      .example-preview {
        background: white;
        border: 3px solid #e2e8f0;
        border-radius: 10px;
        padding: 1.5rem;
        margin: 1.5rem 0;
      }
      
      .example-preview-header {
        background: #f1f5f9;
        padding: 0.75rem 1.5rem;
        margin: -1.5rem -1.5rem 1.5rem -1.5rem;
        border-radius: 7px 7px 0 0;
        font-size: 1rem;
        color: #475569;
        font-weight: 600;
        border-bottom: 2px solid #e2e8f0;
      }
      
      .responsive-demo {
        background: #f8fafc;
        border-radius: 12px;
        padding: 2rem;
        margin: 1.5rem 0;
      }
      
      .demo-box {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        color: white;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 1rem;
        transition: all 0.3s;
      }
      
      .demo-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr;
      }
      
      @media (min-width: 768px) {
        .demo-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-family: monospace;
        color: #1d4ed8;
        font-weight: 600;
        font-size: 0.95em;
      }
      
      .unit-comparison {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin: 1.5rem 0;
      }
      
      .unit-card {
        background: white;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
      }
      
      .unit-card h5 {
        margin: 0 0 0.5rem 0;
        color: #3b82f6;
        font-size: 1.1rem;
      }
      
      .unit-card p {
        margin: 0;
        font-size: 0.9rem;
        color: #64748b;
      }
    </style>

    <div class="topic-container">
      <!-- GİRİŞ -->
      <div class="intro-box">
        <h2>📱 Responsive Design Dünyasına Xoş Gəlmisiniz!</h2>
        <p>Hər cihazda mükəmməl görünən veb saytlar yaratmağı öyrənin. Mobil telefondan tutmuş 4K monitora qədər bütün ekranlara uyğunlaşan dizaynlar qurun!</p>
      </div>

      <!-- RESPONSIVE DESIGN NƏDİR? -->
      <div class="section-card">
        <h3>🤔 Responsive Design Nədir?</h3>
        <p style="font-size: 1.1rem; margin-bottom: 1.5rem;"><strong>Responsive Design (Responsiv Dizayn)</strong> veb səhifələrin müxtəlif cihaz və ekran ölçülərinə avtomatik uyğunlaşması deməkdir. Bir səhifə yazırsınız, hər yerdə mükəmməl işləyir!</p>
        
        <div class="device-showcase">
          <div class="device-card">
            <div class="device-icon">📱</div>
            <h4>Mobil</h4>
            <p>320px - 767px<br>Kiçik ekranlar üçün</p>
          </div>
          <div class="device-card">
            <div class="device-icon">📲</div>
            <h4>Tablet</h4>
            <p>768px - 1023px<br>Orta ölçülü ekranlar</p>
          </div>
          <div class="device-card">
            <div class="device-icon">💻</div>
            <h4>Desktop</h4>
            <p>1024px - 1439px<br>Noutbuk və monitorlar</p>
          </div>
          <div class="device-card">
            <div class="device-icon">🖥️</div>
            <h4>Large</h4>
            <p>1440px+<br>Böyük monitorlar</p>
          </div>
        </div>

        <div class="highlight-box">
          <strong>💡 Niyə Vacibdir?</strong>
          <ul class="check-list" style="margin-top: 0.5rem;">
            <li>İnternet trafikinin <strong>60%-dən çoxu</strong> mobil cihazlardan gəlir</li>
            <li>Google <strong>mobile-first indexing</strong> istifadə edir</li>
            <li>Bir kod bazası - hər cihaz üçün ayrı versiya yox</li>
            <li>Daha yaxşı istifadəçi təcrübəsi (UX) və SEO</li>
          </ul>
        </div>

        <h4>Responsive vs Adaptive vs Mobile-First</h4>
        <div class="vs-box">
          <div class="vs-item vs-mobile">
            <h4>🏃 Mobile-First</h4>
            <p style="font-size: 1rem;"><strong>Əvvəlcə mobil</strong></p>
            <p style="font-size: 0.95rem;">Əsas kod mobil üçün, sonra böyük ekranlar üçün genişləndirilir</p>
            <p style="font-size: 0.95rem; margin-top: 0.5rem;"><code>min-width</code> istifadə olunur</p>
          </div>
          <div class="vs-item vs-desktop">
            <h4>🖥️ Desktop-First</h4>
            <p style="font-size: 1rem;"><strong>Əvvəlcə desktop</strong></p>
            <p style="font-size: 0.95rem;">Əsas kod desktop üçün, sonra kiçik ekranlar üçün daraldılır</p>
            <p style="font-size: 0.95rem; margin-top: 0.5rem;"><code>max-width</code> istifadə olunur</p>
          </div>
        </div>
      </div>

      <!-- VIEWPORT META TAG -->
      <div class="section-card">
        <h3>🔍 Viewport Meta Tag - Əsas Başlanğıc</h3>
        <p style="font-size: 1.1rem;">Responsiv dizaynın ilk və ən vacib addımı. Bu tag brauzerə səhifənin necə görünməli olduğunu bildirir.</p>

        <div class="code-block">
<span class="comment">&lt;!-- HTML head hissəsində --&gt;</span>
<span class="punctuation">&lt;</span><span class="selector">meta</span> 
  <span class="property">name</span><span class="punctuation">=</span><span class="value">"viewport"</span> 
  <span class="property">content</span><span class="punctuation">=</span><span class="value">"width=device-width, initial-scale=1.0"</span><span class="punctuation">&gt;</span>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <h4>width=device-width</h4>
            <p>Səhifənin enini cihazın ekran eninə bərabər edir</p>
          </div>
          <div class="info-item">
            <h4>initial-scale=1.0</h4>
            <p>Başlanğıc zoom səviyyəsini 100% təyin edir</p>
          </div>
          <div class="info-item">
            <h4>maximum-scale=1.0</h4>
            <p>İstifadəçinin zoom etməsini əngəlləyir (tövsiyə olunmur)</p>
          </div>
        </div>

        <div class="warning-box">
          <strong>⚠️ Vacib:</strong>
          <p style="margin-top: 0.5rem;">Bu tag olmadan mobil cihazlar səhifəni desktop kimi göstərəcək və mətn çox kiçiləcək. Hər zaman əlavə edin!</p>
        </div>
      </div>

      <!-- MEDIA QUERIES -->
      <div class="section-card">
        <h3>📐 Media Queries - Responsivliyin Ürəyi</h3>
        <p style="font-size: 1.1rem;"><strong>Media Query</strong> CSS qaydalarını müəyyən şərtlər əsasında tətbiq etməyə imkan verir. Əsasən ekran ölçüsünə görə stillər dəyişir.</p>

        <h4>1. Mobil-First Yanaşma (Tövsiyə Olunan)</h4>
        <div class="code-block">
<span class="comment">/* Əsas stillər - Mobil üçün (default) */</span>
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="number">10</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">14</span><span class="value">px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Tablet: 768px və yuxarı */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">768</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.container</span> <span class="punctuation">{</span>
    <span class="property">padding</span><span class="punctuation">:</span> <span class="number">20</span><span class="value">px</span><span class="punctuation">;</span>
    <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">16</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">/* Desktop: 1024px və yuxarı */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">1024</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.container</span> <span class="punctuation">{</span>
    <span class="property">padding</span><span class="punctuation">:</span> <span class="number">40</span><span class="value">px</span><span class="punctuation">;</span>
    <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">18</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <h4>2. Desktop-First Yanaşma</h4>
        <div class="code-block">
<span class="comment">/* Əsas stillər - Desktop üçün */</span>
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">1200</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">margin</span><span class="punctuation">:</span> <span class="number">0</span> <span class="value">auto</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Tablet: 1023px və aşağı */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">max-width</span><span class="punctuation">:</span> <span class="number">1023</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.container</span> <span class="punctuation">{</span>
    <span class="property">width</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">%</span><span class="punctuation">;</span>
    <span class="property">padding</span><span class="punctuation">:</span> <span class="number">0</span> <span class="number">20</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">/* Mobil: 767px və aşağı */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">max-width</span><span class="punctuation">:</span> <span class="number">767</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.container</span> <span class="punctuation">{</span>
    <span class="property">padding</span><span class="punctuation">:</span> <span class="number">0</span> <span class="number">10</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>💡 Hansi Yanaşma Daha Yaxşıdır?</strong>
          <p style="margin-top: 0.5rem;"><strong>Mobil-First</strong> tövsiyə olunur çünki:</p>
          <ul class="check-list">
            <li>CSS daha sadə və az olur</li>
            <li>Mobil cihazlar daha az CSS yükləyir (performans)</li>
            <li>Google mobile-first indexing istifadə edir</li>
            <li>Progressive enhancement prinsipi ilə uyğundur</li>
          </ul>
        </div>
      </div>

      <!-- BREAKPOINT-LƏR -->
      <div class="section-card">
        <h3>📏 Əsas Breakpoint-lər (Kəsmə Nöqtələri)</h3>
        <p style="font-size: 1.1rem;">Breakpoint-lər dizaynın dəyişdiyi ekran ölçüləridir. Standart dəyərlər:</p>

        <div class="breakpoint-visual">
          <div class="breakpoint-bar">
            <span style="position: absolute; left: 20%;">Mobil</span>
            <span style="position: absolute; left: 50%;">Tablet</span>
            <span style="position: absolute; left: 80%;">Desktop</span>
            
            <div class="breakpoint-marker" style="left: 20%;">320px</div>
            <div class="breakpoint-marker" style="left: 40%;">480px</div>
            <div class="breakpoint-marker" style="left: 60%;">768px</div>
            <div class="breakpoint-marker" style="left: 75%;">1024px</div>
            <div class="breakpoint-marker" style="left: 90%;">1440px</div>
          </div>
        </div>

        <div class="code-block">
<span class="comment">/* Praktik breakpoint strukturu */</span>

<span class="comment">/* Kiçik mobil: 320px+ */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">320</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="punctuation">}</span>

<span class="comment">/* Orta mobil: 480px+ */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">480</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="punctuation">}</span>

<span class="comment">/* Tablet: 768px+ */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">768</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="punctuation">}</span>

<span class="comment">/* Kiçik desktop: 1024px+ */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">1024</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="punctuation">}</span>

<span class="comment">/* Orta desktop: 1200px+ */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">1200</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="punctuation">}</span>

<span class="comment">/* Böyük desktop: 1440px+ */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">1440</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="punctuation">}</span>
        </div>

        <div class="highlight-box">
          <strong>🔥 Ən Çox İstifadə Olunan:</strong>
          <p style="margin-top: 0.5rem;"><code>768px</code> (tablet) və <code>1024px</code> (desktop) əksər layihələr üçün kifayətdir. Çox breakpoint çətinləşdirir, az isə məhdudlaşdırır.</p>
        </div>
      </div>

      <!-- RESPONSIVE UNITS -->
      <div class="section-card">
        <h3>📏 Responsive Units (Ölçü Vahidləri)</h3>
        <p style="font-size: 1.1rem;">Fərqli vəziyyətlərdə fərqli vahidlər istifadə olunur:</p>

        <div class="unit-comparison">
          <div class="unit-card">
            <h5>% (Faiz)</h5>
            <p>Parent elementin ölçüsünə nisbətən</p>
            <code>width: 50%</code>
          </div>
          <div class="unit-card">
            <h5>vw</h5>
            <p>Viewport width - Ekran eninin 1%-i</p>
            <code>width: 100vw</code>
          </div>
          <div class="unit-card">
            <h5>vh</h5>
            <p>Viewport height - Ekran hündürlüyünün 1%-i</p>
            <code>height: 100vh</code>
          </div>
          <div class="unit-card">
            <h5>rem</h5>
            <p>Root elementin font-size-na əsaslanır</p>
            <code>font-size: 2rem</code>
          </div>
          <div class="unit-card">
            <h5>em</h5>
            <p>Carı elementin font-size-na əsaslanır</p>
            <code>padding: 2em</code>
          </div>
          <div class="unit-card">
            <h5>clamp()</h5>
            <p>Min, ideal və max dəyər</p>
            <code>clamp(1rem, 2vw, 2rem)</code>
          </div>
        </div>

        <div class="code-block">
<span class="comment">/* Faiz - Parent-ə nisbətən */</span>
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">80</span><span class="value">%</span><span class="punctuation">;</span>        <span class="comment">/* Ana elementin 80%-i */</span>
  <span class="property">margin</span><span class="punctuation">:</span> <span class="number">0</span> <span class="value">auto</span><span class="punctuation">;</span>     <span class="comment">/* Ortaya yerləşdirmək */</span>
<span class="punctuation">}</span>

<span class="comment">/* vw/vh - Viewport-ə nisbətən */</span>
<span class="selector">.hero</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">vw</span><span class="punctuation">;</span>      <span class="comment">/* Tam ekran eni */</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">vh</span><span class="punctuation">;</span>     <span class="comment">/* Tam ekran hündürlüyü */</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">5</span><span class="value">vw</span><span class="punctuation">;</span>    <span class="comment">/* Ekran eninin 5%-i */</span>
<span class="punctuation">}</span>

<span class="comment">/* rem - Root elementə əsaslanır */</span>
<span class="selector">html</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">16</span><span class="value">px</span><span class="punctuation">;</span>    <span class="comment">/* Default */</span>
<span class="punctuation">}</span>
<span class="selector">h1</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">2</span><span class="value">rem</span><span class="punctuation">;</span>    <span class="comment">/* 32px (16 * 2) */</span>
<span class="punctuation">}</span>

<span class="comment">/* clamp() - Fluid typography */</span>
<span class="selector">h1</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">clamp</span><span class="punctuation">(</span><span class="number">1.5</span><span class="value">rem</span><span class="punctuation">,</span> <span class="number">4</span><span class="value">vw</span><span class="punctuation">,</span> <span class="number">3</span><span class="value">rem</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="comment">/* Minimum 1.5rem, ideal 4vw, maksimum 3rem */</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>💡 Üstünlüklər:</strong>
          <ul class="check-list">
            <li><strong>rem:</strong> İstifadəçi şrift ölçüsünü dəyişdirdikdə uyğunlaşır (accessibility)</li>
            <li><strong>vw/vh:</strong> Ekran ölçüsünə tam uyğunlaşır</li>
            <li><strong>clamp():</strong> Həm minimum, həm maksimum kontrolu təmin edir</li>
          </ul>
        </div>
      </div>

      <!-- RESPONSIVE IMAGES -->
      <div class="section-card">
        <h3>🖼️ Responsive Images</h3>
        <p style="font-size: 1.1rem;">Şəkillərin konteynerdən çıxmasının və ya deformasiya olmasının qarşısını almaq üçün:</p>

        <div class="code-block">
<span class="comment">/* Əsas responsive şəkil stili */</span>
<span class="selector">img</span> <span class="punctuation">{</span>
  <span class="property">max-width</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">%</span><span class="punctuation">;</span>   <span class="comment">/* Konteynerdən böyük olmaz */</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="value">auto</span><span class="punctuation">;</span>      <span class="comment">/* Nisbətləri qoruyur */</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">block</span><span class="punctuation">;</span>    <span class="comment">/* Boz boşluqları aradan qaldırır */</span>
<span class="punctuation">}</span>

<span class="comment">/* Arxa fon şəkilləri üçün */</span>
<span class="selector">.background</span> <span class="punctuation">{</span>
  <span class="property">background-image</span><span class="punctuation">:</span> <span class="value">url</span><span class="punctuation">(</span><span class="value">'image.jpg'</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="property">background-size</span><span class="punctuation">:</span> <span class="value">cover</span><span class="punctuation">;</span>        <span class="comment">/* Konteyneri tam örtür */</span>
  <span class="property">background-position</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>   <span class="comment">/* Mərkəzləşdirir */</span>
  <span class="property">background-repeat</span><span class="punctuation">:</span> <span class="value">no-repeat</span><span class="punctuation">;</span>  <span class="comment">/* Təkrarlamır */</span>
<span class="punctuation">}</span>

<span class="comment">/* Picture element ilə müxtəlif ölçülər */</span>
<span class="punctuation">&lt;</span><span class="selector">picture</span><span class="punctuation">&gt;</span>
  <span class="punctuation">&lt;</span><span class="selector">source</span> <span class="property">media</span><span class="punctuation">=</span><span class="value">"(min-width: 1024px)"</span> <span class="property">srcset</span><span class="punctuation">=</span><span class="value">"large.jpg"</span><span class="punctuation">&gt;</span>
  <span class="punctuation">&lt;</span><span class="selector">source</span> <span class="property">media</span><span class="punctuation">=</span><span class="value">"(min-width: 768px)"</span> <span class="property">srcset</span><span class="punctuation">=</span><span class="value">"medium.jpg"</span><span class="punctuation">&gt;</span>
  <span class="punctuation">&lt;</span><span class="selector">img</span> <span class="property">src</span><span class="punctuation">=</span><span class="value">"small.jpg"</span> <span class="property">alt</span><span class="punctuation">=</span><span class="value">"Responsive image"</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;/</span><span class="selector">picture</span><span class="punctuation">&gt;</span>
        </div>

        <div class="highlight-box">
          <strong>🎯 object-fit Xüsusiyyəti:</strong>
          <div class="code-block" style="margin: 0.5rem 0;">
<span class="selector">.cover-image</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="number">300</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">object-fit</span><span class="punctuation">:</span> <span class="value">cover</span><span class="punctuation">;</span>      <span class="comment">/* Konteyneri doldurur, kəsir */</span>
  <span class="comment">/* object-fit: contain; */</span>  <span class="comment">/* Tam görünür, boşluq ola bilər */</span>
  <span class="comment">/* object-fit: fill; */</span>     <span class="comment">/* Dəformasiya ola bilər */</span>
<span class="punctuation">}</span>
          </div>
        </div>
      </div>

      <!-- FLEXBOX VƏ GRID İLƏ RESPONSIVE -->
      <div class="section-card">
        <h3>🏗️ Flexbox və Grid ilə Responsive Layout</h3>

        <h4>1. Flexbox ilə Responsive</h4>
        <div class="code-block">
<span class="selector">.flex-container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">flex-wrap</span><span class="punctuation">:</span> <span class="value">wrap</span><span class="punctuation">;</span>        <span class="comment">/* Kiçik ekranda aşağı düşsün */</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="number">20</span><span class="value">px</span><span class="punctuation">;</span>             <span class="comment">/* Elementlər arası məsafə */</span>
<span class="punctuation">}</span>

<span class="selector">.flex-item</span> <span class="punctuation">{</span>
  <span class="property">flex</span><span class="punctuation">:</span> <span class="number">1</span> <span class="number">1</span> <span class="number">300</span><span class="value">px</span><span class="punctuation">;</span>       <span class="comment">/* Böyüy, kiçil, əsas ölçü 300px */</span>
  <span class="comment">/* flex-grow: 1, flex-shrink: 1, flex-basis: 300px */</span>
<span class="punctuation">}</span>
        </div>

        <h4>2. Grid ilə Responsive</h4>
        <div class="code-block">
<span class="selector">.grid-container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">grid</span><span class="punctuation">;</span>
  <span class="comment">/* Avtomatik uyğunlaşan sütunlar */</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat</span><span class="punctuation">(</span><span class="value">auto-fit</span><span class="punctuation">,</span> <span class="value">minmax</span><span class="punctuation">(</span><span class="number">250</span><span class="value">px</span><span class="punctuation">,</span> <span class="number">1</span><span class="value">fr</span><span class="punctuation">)</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="number">20</span><span class="value">px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Və ya media queries ilə */</span>
<span class="selector">.responsive-grid</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">grid</span><span class="punctuation">;</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="number">1</span><span class="value">fr</span><span class="punctuation">;</span>  <span class="comment">/* Mobildə 1 sütun */</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="number">15</span><span class="value">px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">768</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.responsive-grid</span> <span class="punctuation">{</span>
    <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat</span><span class="punctuation">(</span><span class="number">2</span><span class="punctuation">,</span> <span class="number">1</span><span class="value">fr</span><span class="punctuation">)</span><span class="punctuation">;</span>  <span class="comment">/* Tablet: 2 sütun */</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">1024</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.responsive-grid</span> <span class="punctuation">{</span>
    <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat</span><span class="punctuation">(</span><span class="number">4</span><span class="punctuation">,</span> <span class="number">1</span><span class="value">fr</span><span class="punctuation">)</span><span class="punctuation">;</span>  <span class="comment">/* Desktop: 4 sütun */</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <div class="responsive-demo">
          <h4 style="margin-bottom: 1rem; color: #1e293b;">Canlı Demo:</h4>
          <div class="demo-grid">
            <div class="demo-box">1</div>
            <div class="demo-box">2</div>
            <div class="demo-box">3</div>
            <div class="demo-box">4</div>
          </div>
          <p style="margin-top: 1rem; color: #64748b; font-size: 0.9rem;">Brauzer pəncərəsini kiçildin - 768px-dən kiçik olduqda 1 sütun, böyük olduqda 2 sütun olacaq</p>
        </div>
      </div>

      <!-- CONTAINER QUERIES -->
      <div class="section-card">
        <h3>📦 Container Queries - Yeni Nəsil</h3>
        <p style="font-size: 1.1rem;"><strong>Container Queries</strong> viewport əvəzinə <strong>parent konteynerin</strong> ölçüsünə əsaslanır. Komponent əsaslı dizayn üçün idealdir.</p>

        <div class="code-block">
<span class="comment">/* Konteyneri təyin et */</span>
<span class="selector">.card-container</span> <span class="punctuation">{</span>
  <span class="property">container-type</span><span class="punctuation">:</span> <span class="value">inline-size</span><span class="punctuation">;</span>  <span class="comment">/* Enə görə izlə */</span>
  <span class="property">container-name</span><span class="punctuation">:</span> <span class="value">card</span><span class="punctuation">;</span>         <span class="comment">/* Optional: ad ver */</span>
<span class="punctuation">}</span>

<span class="comment">/* Konteyner ölçüsünə görə stillər */</span>
<span class="selector">@container</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">400</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.card</span> <span class="punctuation">{</span>
    <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
    <span class="property">flex-direction</span><span class="punctuation">:</span> <span class="value">row</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
  
  <span class="selector">.card-image</span> <span class="punctuation">{</span>
    <span class="property">width</span><span class="punctuation">:</span> <span class="number">40</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="selector">@container</span> <span class="selector">card</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">700</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="comment">/* Named container ilə */</span>
  <span class="selector">.card</span> <span class="punctuation">{</span>
    <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">1.2</span><span class="value">rem</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <div class="highlight-box">
          <strong>🎯 Media Query vs Container Query:</strong>
          <ul style="margin-top: 0.5rem;">
            <li><strong>Media Query:</strong> Ekran ölçüsünə əsaslanır (viewport)</li>
            <li><strong>Container Query:</strong> Konteyner ölçüsünə əsaslanır (component)</li>
          </ul>
          <p style="margin-top: 0.5rem;">Container queries reusable komponentlər üçün idealdır - eyni komponent fərqli yerlərdə fərqli görünə bilər.</p>
        </div>
      </div>

      <!-- PRAKTİKİ NÜMUNƏLƏR -->
      <div class="section-card">
        <h3>🛠️ Praktiki Nümunələr</h3>

        <h4>1. Responsive Navigation</h4>
        <div class="code-block">
<span class="comment">/* Mobildə hamburger, desktopda üfüqi menu */</span>
<span class="selector">.nav</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">flex-direction</span><span class="punctuation">:</span> <span class="value">column</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="number">10</span><span class="value">px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.nav-toggle</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">block</span><span class="punctuation">;</span>  <span class="comment">/* Mobildə görünür */</span>
<span class="punctuation">}</span>

<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">768</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.nav</span> <span class="punctuation">{</span>
    <span class="property">flex-direction</span><span class="punctuation">:</span> <span class="value">row</span><span class="punctuation">;</span>
    <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">space-between</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
  
  <span class="selector">.nav-toggle</span> <span class="punctuation">{</span>
    <span class="property">display</span><span class="punctuation">:</span> <span class="value">none</span><span class="punctuation">;</span>  <span class="comment">/* Desktopda gizlənir */</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <h4 style="margin-top: 2rem;">2. Responsive Hero Section</h4>
        <div class="code-block">
<span class="selector">.hero</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">flex-direction</span><span class="punctuation">:</span> <span class="value">column</span><span class="punctuation">;</span>
  <span class="property">text-align</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.hero-image</span> <span class="punctuation">{</span>
  <span class="property">order</span><span class="punctuation">:</span> <span class="number">-1</span><span class="punctuation">;</span>  <span class="comment">/* Mobildə şəkil yuxarıda */</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">%</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">768</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.hero</span> <span class="punctuation">{</span>
    <span class="property">flex-direction</span><span class="punctuation">:</span> <span class="value">row</span><span class="punctuation">;</span>
    <span class="property">text-align</span><span class="punctuation">:</span> <span class="value">left</span><span class="punctuation">;</span>
    <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
  
  <span class="selector">.hero-image</span> <span class="punctuation">{</span>
    <span class="property">order</span><span class="punctuation">:</span> <span class="number">0</span><span class="punctuation">;</span>  <span class="comment">/* Desktopda normal sıra */</span>
    <span class="property">width</span><span class="punctuation">:</span> <span class="number">50</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
  
  <span class="selector">.hero-content</span> <span class="punctuation">{</span>
    <span class="property">width</span><span class="punctuation">:</span> <span class="number">50</span><span class="value">%</span><span class="punctuation">;</span>
    <span class="property">padding</span><span class="punctuation">:</span> <span class="number">2</span><span class="value">rem</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <h4 style="margin-top: 2rem;">3. Responsive Typography Scale</h4>
        <div class="code-block">
<span class="comment">/* Fluid typography ilə */</span>
<span class="selector">html</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">14</span><span class="value">px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">768</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">html</span> <span class="punctuation">{</span>
    <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">16</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">1200</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">html</span> <span class="punctuation">{</span>
    <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">18</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">/* Və ya clamp ilə avtomatik */</span>
<span class="selector">html</span> <span class="punctuation">{</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">clamp</span><span class="punctuation">(</span><span class="number">14</span><span class="value">px</span><span class="punctuation">,</span> <span class="number">0.8</span><span class="value">vw</span> <span class="number">+</span> <span class="number">12</span><span class="value">px</span><span class="punctuation">,</span> <span class="number">18</span><span class="value">px</span><span class="punctuation">)</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>
      </div>

      <!-- TEST VƏ DEBUG -->
      <div class="section-card">
        <h3>🧪 Test və Debug Alətləri</h3>

        <h4>Chrome DevTools İstifadəsi:</h4>
        <ol class="step-list">
          <li><strong>F12</strong> və ya <strong>Right-click → Inspect</strong> ilə açın</li>
          <li><strong>Toggle Device Toolbar</strong> (📱 icon) ilə cihaz emulyasiyası</li>
          <li><strong>Responsive</strong> seçərək ölçüləri əl ilə dəyişin</li>
          <li><strong>Breakpoints</strong> göstəricisi ilə media query-ləri görün</li>
        </ol>

        <div class="code-block">
<span class="comment">/* Debug üçün köməkçi klass */</span>
<span class="selector">body::before</span> <span class="punctuation">{</span>
  <span class="property">content</span><span class="punctuation">:</span> <span class="value">'Mobile'</span><span class="punctuation">;</span>
  <span class="property">position</span><span class="punctuation">:</span> <span class="value">fixed</span><span class="punctuation">;</span>
  <span class="property">top</span><span class="punctuation">:</span> <span class="number">10</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">right</span><span class="punctuation">:</span> <span class="number">10</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">red</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="number">5</span><span class="value">px</span> <span class="number">10</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">z-index</span><span class="punctuation">:</span> <span class="number">9999</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">768</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">body::before</span> <span class="punctuation">{</span> <span class="property">content</span><span class="punctuation">:</span> <span class="value">'Tablet'</span><span class="punctuation">;</span> <span class="property">background</span><span class="punctuation">:</span> <span class="value">orange</span><span class="punctuation">;</span> <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">min-width</span><span class="punctuation">:</span> <span class="number">1024</span><span class="value">px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">body::before</span> <span class="punctuation">{</span> <span class="property">content</span><span class="punctuation">:</span> <span class="value">'Desktop'</span><span class="punctuation">;</span> <span class="property">background</span><span class="punctuation">:</span> <span class="value">green</span><span class="punctuation">;</span> <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>💡 Ən Yaxşı Təcrübələr:</strong>
          <ul class="check-list">
            <li>Həmişə <strong>mobil-ilk</strong> yanaşma istifadə edin</li>
            <li><strong>max-width</strong> ilə konteynerləri məhdudlaşdırın</li>
            <li><strong>rem/em</strong> istifadə edin, px yox (accessibility)</li>
            <li><strong>Touch targets</strong> minimum 44x44px olsun</li>
            <li><strong>Test edin:</strong> Real cihazlarda yoxlayın</li>
          </ul>
        </div>
      </div>

      <!-- YEKUN -->
      <div class="section-card" style="border-left-color: #3b82f6;">
        <h3>🎉 Təbriklər!</h3>
        <p style="font-size: 1.1rem;">Responsive Design-i öyrəndiniz! İndi bilirsiniz:</p>
        <ul class="check-list">
          <li>Viewport meta tag-in əhəmiyyətini</li>
          <li>Mobil-ilk yanaşma ilə media query yazmağı</li>
          <li>Breakpoint-ləri düzgün seçməyi</li>
          <li>Responsive units (rem, vw, clamp) istifadə etməyi</li>
          <li>Şəkilləri responsiv etməyi</li>
          <li>Flexbox və Grid ilə responsiv layout qurmağı</li>
          <li>Container queries ilə komponentlər yaratmağı</li>
        </ul>
        
        <div class="tip-box" style="margin-top: 1.5rem;">
          <strong>🚀 Son Məsləhət:</strong>
          <p style="margin-top: 0.5rem;"><strong>Responsive dizayn</strong> yalnız CSS deyil, düşüncə tərzidir. Hər komponenti və layout-u müxtəlif ekranlarda düşünərək yaradın. İstifadəçi hansı cihazdan baxırsa baxsın, təcrübə mükəmməl olmalıdır!</p>
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
    <title>Responsive Design Masterclass</title>
    <style>
        /* ==========================================
           ƏSAS RESET VƏ VARIABLES
           ========================================== */
        :root {
            --primary: #3b82f6;
            --primary-dark: #1d4ed8;
            --secondary: #10b981;
            --dark: #1e293b;
            --light: #f8fafc;
            --gray: #64748b;
            --container-width: 1200px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            font-size: 14px;
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background: var(--light);
        }

        /* ==========================================
           1. RESPONSIVE HEADER & NAVIGATION
           ========================================== */
        .header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .header-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .nav-toggle {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        }

        .nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--primary-dark);
            flex-direction: column;
            padding: 1rem;
        }

        .nav.active {
            display: flex;
        }

        .nav a {
            color: white;
            text-decoration: none;
            padding: 0.75rem 1rem;
            border-radius: 6px;
            transition: background 0.3s;
        }

        .nav a:hover {
            background: rgba(255,255,255,0.1);
        }

        /* Tablet və yuxarı */
        @media (min-width: 768px) {
            html {
                font-size: 16px;
            }

            .nav-toggle {
                display: none;
            }

            .nav {
                display: flex !important;
                position: static;
                flex-direction: row;
                background: transparent;
                padding: 0;
                gap: 0.5rem;
            }
        }

        /* ==========================================
           2. RESPONSIVE HERO SECTION
           ========================================== */
        .hero {
            padding: 3rem 1rem;
            max-width: var(--container-width);
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            text-align: center;
        }

        .hero-content h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        .hero-content p {
            font-size: clamp(1rem, 2vw, 1.25rem);
            color: var(--gray);
            margin-bottom: 1.5rem;
            max-width: 600px;
        }

        .btn-group {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .btn {
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            text-align: center;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
            background: white;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .hero-image {
            width: 100%;
            max-width: 500px;
        }

        .hero-image img {
            width: 100%;
            height: auto;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        /* Tablet və yuxarı */
        @media (min-width: 768px) {
            .hero {
                flex-direction: row;
                text-align: left;
                padding: 4rem 2rem;
            }

            .hero-content {
                flex: 1;
            }

            .hero-image {
                flex: 1;
                order: 1;
            }

            .btn-group {
                flex-direction: row;
            }

            .btn {
                width: auto;
            }
        }

        /* Desktop */
        @media (min-width: 1024px) {
            .hero {
                padding: 6rem 2rem;
            }
        }

        /* ==========================================
           3. RESPONSIVE FEATURES GRID
           ========================================== */
        .features {
            padding: 4rem 1rem;
            background: white;
        }

        .section-title {
            text-align: center;
            font-size: clamp(1.75rem, 4vw, 2.5rem);
            margin-bottom: 3rem;
        }

        .features-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .feature-card {
            background: var(--light);
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.75rem;
            margin: 0 auto 1rem;
        }

        .feature-card h3 {
            margin-bottom: 0.5rem;
            font-size: 1.25rem;
        }

        .feature-card p {
            color: var(--gray);
            font-size: 0.95rem;
        }

        /* Tablet */
        @media (min-width: 768px) {
            .features {
                padding: 5rem 2rem;
            }

            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* Desktop */
        @media (min-width: 1024px) {
            .features-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        /* ==========================================
           4. RESPONSIVE GALLERY
           ========================================== */
        .gallery {
            padding: 4rem 1rem;
            max-width: var(--container-width);
            margin: 0 auto;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            aspect-ratio: 1;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }

        .gallery-item:hover img {
            transform: scale(1.1);
        }

        .gallery-item.tall {
            grid-row: span 2;
        }

        .gallery-item.wide {
            grid-column: span 2;
        }

        /* Tablet */
        @media (min-width: 768px) {
            .gallery-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 1.5rem;
            }
        }

        /* Desktop */
        @media (min-width: 1024px) {
            .gallery-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        /* ==========================================
           5. RESPONSIVE FOOTER
           ========================================== */
        .footer {
            background: var(--dark);
            color: white;
            padding: 3rem 1rem;
            text-align: center;
        }

        .footer-content {
            max-width: var(--container-width);
            margin: 0 auto;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 1.5rem 0;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s;
        }

        .footer-links a:hover {
            opacity: 1;
        }

        @media (min-width: 768px) {
            .footer-links {
                flex-direction: row;
                justify-content: center;
                gap: 2rem;
            }
        }

        /* ==========================================
           DEBUG INDICATOR
           ========================================== */
        body::before {
            content: '📱 Mobile (< 768px)';
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            font-size: 0.875rem;
            font-weight: 600;
            z-index: 9999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        @media (min-width: 768px) {
            body::before {
                content: '📲 Tablet (768px - 1023px)';
                background: #f59e0b';
            }
        }

        @media (min-width: 1024px) {
            body::before {
                content: '💻 Desktop (1024px+)';
                background: #10b981';
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <div class="logo">🚀 Responsive</div>
            <button class="nav-toggle" onclick="toggleNav()">☰</button>
            <nav class="nav" id="nav">
                <a href="#home">Ana Səhifə</a>
                <a href="#features">Xüsusiyyətlər</a>
                <a href="#gallery">Qalereya</a>
                <a href="#contact">Əlaqə</a>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Hər Cihazda Mükəmməl Görünüş</h1>
            <p>Responsive design ilə veb saytlarınız mobil telefondan tutmuş 4K monitora qədər bütün ekranlarda optimal görünür.</p>
            <div class="btn-group">
                <a href="#" class="btn btn-primary">Başla</a>
                <a href="#" class="btn btn-secondary">Ətraflı</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" alt="Responsive Design">
        </div>
    </section>

    <!-- Features -->
    <section class="features">
        <h2 class="section-title">Niyə Responsive?</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Mobil Dostu</h3>
                <p>Bütün mobil cihazlarda mükəmməl işləyir</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Sürətli</h3>
                <p>Optimallaşdırılmış kod ilə yüksək performans</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔍</div>
                <h3>SEO</h3>
                <p>Google axtarışlarında üstün mövqe</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎨</div>
                <h3>Müasir</h3>
                <p>Ən son veb standartları ilə uyğun</p>
            </div>
        </div>
    </section>

    <!-- Gallery -->
    <section class="gallery">
        <h2 class="section-title">Qalereya</h2>
        <div class="gallery-grid">
            <div class="gallery-item wide">
                <img src="https://picsum.photos/800/400?random=1" alt="Gallery 1">
            </div>
            <div class="gallery-item">
                <img src="https://picsum.photos/400/400?random=2" alt="Gallery 2">
            </div>
            <div class="gallery-item tall">
                <img src="https://picsum.photos/400/800?random=3" alt="Gallery 3">
            </div>
            <div class="gallery-item">
                <img src="https://picsum.photos/400/400?random=4" alt="Gallery 4">
            </div>
            <div class="gallery-item">
                <img src="https://picsum.photos/400/400?random=5" alt="Gallery 5">
            </div>
            <div class="gallery-item wide">
                <img src="https://picsum.photos/800/400?random=6" alt="Gallery 6">
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 Responsive Design Masterclass</p>
            <div class="footer-links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </footer>

    <script>
        function toggleNav() {
            document.getElementById('nav').classList.toggle('active');
        }
    </script>
</body>
</html>`,
    
    css: `/* Bu fayl boş qala bilər, çünki bütün CSS HTML-in içindədir */
/* Və ya əlavə stillər burada yazıla bilər */`,
    
    js: `// Responsive Design Utilities və Interaktivliklər

document.addEventListener('DOMContentLoaded', function() {
    
    // Ekran ölçüsü monitoru
    const createSizeMonitor = () => {
        const monitor = document.createElement('div');
        monitor.id = 'size-monitor';
        monitor.style.cssText = \`
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: rgba(30, 41, 59, 0.95);
            color: white;
            padding: 15px;
            border-radius: 10px;
            font-family: monospace;
            font-size: 13px;
            z-index: 9998;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            min-width: 200px;
        \`;
        document.body.appendChild(monitor);
        return monitor;
    };

    const monitor = createSizeMonitor();

    const updateMonitor = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const dpr = window.devicePixelRatio;
        
        // Breakpoint müəyyənləşdir
        let device = 'Mobile';
        let color = '#ef4444';
        if (width >= 1440) {
            device = 'Large Desktop';
            color = '#3b82f6';
        } else if (width >= 1024) {
            device = 'Desktop';
            color = '#10b981';
        } else if (width >= 768) {
            device = 'Tablet';
            color = '#f59e0b';
        }

        monitor.innerHTML = \`
            <div style="font-weight: bold; margin-bottom: 8px; color: \${color};">\${device}</div>
            <div>📐 \${width}px × \${height}px</div>
            <div>🖥️ DPR: \${dpr}x</div>
            <div>🔄 \${screen.orientation?.type || 'unknown'}</div>
        \`;
    };

    // Debounce funksiyası
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Event listener-lər
    window.addEventListener('resize', debounce(updateMonitor, 100));
    window.addEventListener('load', updateMonitor);
    
    if (screen.orientation) {
        screen.orientation.addEventListener('change', updateMonitor);
    }

    // Smooth scroll üçün
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Feature card animasiyası
    const cards = document.querySelectorAll('.feature-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });

    // Gallery item click
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(\`Gallery item \${index + 1} clicked\`);
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
            }, 200);
        });
    });

    console.log('%c📱 Responsive Design Masterclass yükləndi!', 'font-size: 18px; color: #3b82f6; font-weight: bold;');
    console.log('%cBrauzer pəncərəsini yenidən ölçüləndirin və dəyişiklikləri müşahidə edin', 'font-size: 13px; color: #64748b;');
});`
  },

  exercise: {
    title: "Responsive Hero Section Yarat",
    description: "Mobil-ilk yanaşma ilə tam funksional hero section yaradın. Mobildə (320px) şəkil yuxarıda, mətn aşağıda və mərkəzləşdirilmiş olsun. Tablet (768px+) və Desktop (1024px+) ölçülərində şəkil və mətn yan-yana (50%-50%) düzülsün. Typography fluid olsun (clamp istifadə edin).",
    requirements: [
      "Mobile-first media query strukturu qurun (əvvəlcə mobil, sonra böyük ekranlar)",
      "min-width: 768px və min-width: 1024px breakpoint-ləri istifadə edin",
      "Şəkil üçün max-width: 100% və height: auto tətbiq edin",
      "Flexbox istifadə edin (flex-direction: column mobildə, row desktopda)",
      "Typography ölçülərini clamp() ilə responsive edin",
      "Button ölçülərini mobil üçün 100% width, desktop üçün auto edin",
      "Container max-width: 1200px və margin: 0 auto ilə mərkəzləşdirin",
      "Mobil üçün padding dəyərləri 16px, desktop üçün 32px olsun",
      "Şəkil mobildə order: -1 ilə yuxarıda olsun",
      "HTML viewport meta tag əlavə edin"
    ],
    starterCode: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <!-- Viewport meta tag əlavə edin -->
    
    <title>Responsive Hero</title>
    <style>
        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Mobil üçün əsas stillər (Mobile-first) */
        .hero {
            /* Kodunuzu bura yazın */
        }

        .hero-content {
            /* Kodunuzu bura yazın */
        }

        .hero-content h1 {
            /* clamp() ilə responsive typography */
        }

        .hero-image {
            /* Şəkil stiləri */
        }

        .hero-image img {
            /* Responsive şəkil */
        }

        .btn {
            /* Düymə stiləri */
        }

        /* Tablet breakpoint - 768px */
        @media (min-width: 768px) {
            /* Tablet stilləri */
        }

        /* Desktop breakpoint - 1024px */
        @media (min-width: 1024px) {
            /* Desktop stilləri */
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-content">
            <h1>Başlıq Burada</h1>
            <p>Təsvir mətni...</p>
            <button class="btn">Ətraflı</button>
        </div>
        <div class="hero-image">
            <img src="https://picsum.photos/800/600" alt="Hero Image">
        </div>
    </section>
</body>
</html>`
  },

  quiz: [
    {
      question: "Mobil-ilk (Mobile-first) yanaşmada hansı media query istifadə olunur?",
      options: ["max-width (maksimum en)", "min-width (minimum en)", "max-height (maksimum hündürlük)", "orientation (orientasiya)"],
      correctAnswer: 1,
      explanation: "Mobil-ilk yanaşmada əvvəlcə mobil üçün yazılır, sonra min-width ilə böyük ekranlar üçün əlavə stillər tətbiq olunur."
    },
    {
      question: "Viewport meta tag-in əsas funksiyası nədir?",
      options: ["SEO optimizasiyası üçün", "Səhifənin ekran ölçüsünə uyğunlaşması üçün", "Cache kontrolu üçün", "Şrift yükləmə üçün"],
      correctAnswer: 1,
      explanation: "Viewport meta tag brauzerə səhifənin enini cihazın ekran eninə bərabər etməyi və zoom səviyyəsini tənzimləməyi bildirir."
    },
    {
      question: "1rem (root em) default olaraq neçə pikselə bərabərdir?",
      options: ["14px", "16px", "18px", "12px"],
      correctAnswer: 1,
      explanation: "Default olaraq brauzerlər HTML elementinə 16px şrift ölçüsü təyin edir. 1rem = 16px, 2rem = 32px və s."
    },
    {
      question: "Responsive şəkillər üçün hansı CSS kombinasiyası istifadə olunur?",
      options: ["width: 100%; height: 100%", "max-width: 100%; height: auto", "width: auto; height: auto", "min-width: 100%"],
      correctAnswer: 1,
      explanation: "max-width: 100% şəklin konteynerdən çıxmasının qarşısını alır, height: auto isə nisbətləri qoruyur."
    },
    {
      question: "Standard tablet breakpoint-i hansı dəyərdədir?",
      options: ["480px", "768px", "992px", "1200px"],
      correctAnswer: 1,
      explanation: "768px ən geniş yayılmış tablet breakpoint-dir (iPad və çoxplanşetlər bu ölçüdədir)."
    },
    {
      question: "CSS-də 'vw' vahidi nəyi ifadə edir?",
      options: ["Viewport Width (ekran eninin 1%-i)", "View Width", "Visual Width", "Vertical Width"],
      correctAnswer: 0,
      explanation: "vw (Viewport Width) brauzer pəncərəsinin eninin 1%-ni ifadə edir. 100vw = tam ekran eni."
    },
    {
      question: "Hansı CSS unit root (html) elementinin font-size-na əsaslanır?",
      options: ["em", "rem", "px", "%"],
      correctAnswer: 1,
      explanation: "rem (root em) həmişə HTML elementinin şrift ölçüsünə əsaslanır. em isə cari elementin şrift ölçüsünə əsaslanır."
    },
    {
      question: "CSS Container Queries hansı elementin ölçüsünə əsaslanır?",
      options: ["Viewport (ekran)", "Parent container (ana konteyner)", "Body elementi", "HTML elementi"],
      correctAnswer: 1,
      explanation: "Container Queries viewport əvəzinə birbaşa parent konteynerin ölçüsünə əsaslanır, bu da komponent əsaslı dizayn üçün idealdir."
    },
    {
      question: "Media query 'orientation: landscape' nə zaman işləyir?",
      options: ["Ekran kvadrat olduqda", "Ekran eni hündürlükdən böyük olduqda", "Ekran portrait (şaquli) olduqda", "Hər zaman"],
      correctAnswer: 1,
      explanation: "Landscape eni hündürlükdən böyük olan orientasiyadır (yan görünüş). Portrait isə əksidir."
    },
    {
      question: "CSS clamp() funksiyası nə edir?",
      options: ["Minimum, ideal (preferred) və maksimum dəyər təyin edir", "Yalnız minimum dəyər təyin edir", "Yalnız maksimum dəyər təyin edir", "Rəngləri qarışdırır"],
      correctAnswer: 0,
      explanation: "clamp(min, preferred, max) funksiyası minimum dəyər, ideal hesablanan dəyər və maksimum dəyər təyin etməyə imkan verir."
    }
  ]
};

export default topic5;