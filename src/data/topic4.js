export const topic4 = {
  id: 4,
  title: "CSS Grid Layout",
  duration: "60 dəq",
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
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
        border-left: 5px solid #10b981;
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
        background: #f0fff4;
        padding: 1.5rem;
        border-radius: 10px;
        border: 2px solid #9ae6b4;
      }
      
      .info-item h4 {
        margin: 0 0 0.75rem 0;
        color: #059669;
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
      
      .grid-visual {
        display: grid;
        gap: 8px;
        margin: 1rem 0;
        padding: 1rem;
        background: white;
        border-radius: 8px;
      }
      
      .grid-cell {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 6px;
        font-weight: 600;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 60px;
      }
      
      .grid-cell-header {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      }
      
      .grid-cell-sidebar {
        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      }
      
      .grid-cell-main {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        min-height: 120px;
      }
      
      .grid-cell-aside {
        background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
      }
      
      .grid-cell-footer {
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      }
      
      .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 1.05rem;
      }
      
      .comparison-table th {
        background: #059669;
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
        background: #f0fdf4;
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
        background: #10b981;
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
        color: #10b981;
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
      
      .vs-flex {
        background: #ede9fe;
        border: 3px solid #8b5cf6;
      }
      
      .vs-flex h4 {
        color: #6d28d9;
      }
      
      .vs-grid {
        background: #dcfce7;
        border: 3px solid #10b981;
      }
      
      .vs-grid h4 {
        color: #059669;
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
      
      .fr-demo {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 10px;
        margin: 1rem 0;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 8px;
      }
      
      .fr-item {
        background: #10b981;
        color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 6px;
        font-weight: 600;
      }
      
      .fr-item:nth-child(2) {
        background: #059669;
      }
      
      code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-family: monospace;
        color: #059669;
        font-weight: 600;
        font-size: 0.95em;
      }
    </style>

    <div class="topic-container">
      <!-- GİRİŞ -->
      <div class="intro-box">
        <h2>🎯 CSS Grid-ə Xoş Gəlmisiniz!</h2>
        <p>CSS-in ən güclü layout sistemini öyrənin. İki ölçülü grid strukturlar ilə mürəkkəb veb layout-ları asanlıqla yaradın. Flexbox-un güclü qardaşı ilə tanış olun!</p>
      </div>

      <!-- GRID NƏDİR? -->
      <div class="section-card">
        <h3>🤔 CSS Grid Nədir?</h3>
        <p style="font-size: 1.1rem; margin-bottom: 1.5rem;"><strong>CSS Grid Layout</strong> iki ölçülü (two-dimensional) layout sistemidir. Sətir (row) və sütun (column) əsasında işləyərək, veb səhifələrin əsas strukturunu yaratmağa imkan verir.</p>
        
        <div class="vs-box">
          <div class="vs-item vs-flex">
            <h4>🏃 Flexbox</h4>
            <p style="font-size: 1rem;"><strong>Bir ölçülü</strong> (1D)</p>
            <p style="font-size: 0.95rem;">Yalnız sətir VƏ YA yalnız sütun</p>
            <p style="font-size: 0.95rem; margin-top: 0.5rem;">Komponentlər üçün ideal</p>
          </div>
          <div class="vs-item vs-grid">
            <h4>🎯 CSS Grid</h4>
            <p style="font-size: 1rem;"><strong>İki ölçülü</strong> (2D)</p>
            <p style="font-size: 0.95rem;">Həm sətir, HƏM sütun eyni vaxtda</p>
            <p style="font-size: 0.95rem; margin-top: 0.5rem;">Səhifə layout-ları üçün ideal</p>
          </div>
        </div>

        <div class="highlight-box">
          <strong>💡 Real Həyat Təsviri:</strong>
          <p style="margin-top: 0.5rem;">Flexbox-u <strong>kitab rəfi</strong> kimi düşünün - əşyaları bir sətirdə düzürsünüz. Grid-i isə <strong>excel cədvəli</strong> kimi düşünün - sətir və sütunlarla tam struktur yaradırsınız.</p>
        </div>

        <h4>Grid Nə Üçün İdealdir?</h4>
        <ul class="check-list">
          <li>Səhifənin əsas layout strukturu (header, sidebar, main, footer)</li>
          <li>Foto qalereyalar və kart grid-ləri</li>
          <li>Mürəkkəb, asimmetrik dizaynlar</li>
          <li>Dashboard və admin panel layout-ları</li>
          <li>Jurnal və qəzet üslublu dizaynlar</li>
        </ul>
      </div>

      <!-- ƏSAS KONSEPT -->
      <div class="section-card">
        <h3>🏗️ Əsas Konsept: Grid Container və Grid Items</h3>
        
        <ol class="step-list">
          <li><strong>Grid Container</strong> - Ana element. <code>display: grid</code> verilərək grid konteksti yaradılır.</li>
          <li><strong>Grid Items</strong> - Container-in birbaşa uşaq elementləri. Avtomatik grid item olurlar.</li>
          <li><strong>Grid Lines</strong> - Sətir və sütunları ayıran xətlər (1, 2, 3... ilə nömrələnir).</li>
          <li><strong>Grid Tracks</strong> - Sətir və ya sütunun özü (hüceyrələr arası məsafə).</li>
          <li><strong>Grid Areas</strong> - Bir neçə hüceyrənin birləşməsi ilə yaranan sahə.</li>
        </ol>

        <div class="visual-demo">
          <h4 style="margin-bottom: 1rem; color: #1e293b;">Grid Struktur Vizualı:</h4>
          <div class="grid-visual" style="grid-template-columns: repeat(3, 1fr); max-width: 400px; margin: 0 auto;">
            <div class="grid-cell" style="grid-column: 1 / -1;" class="grid-cell-header">HEADER</div>
            <div class="grid-cell grid-cell-sidebar" style="grid-row: span 2;">SIDEBAR</div>
            <div class="grid-cell grid-cell-main" style="grid-column: span 2;">MAIN CONTENT</div>
            <div class="grid-cell" style="grid-column: span 2;">ASIDE</div>
            <div class="grid-cell grid-cell-footer" style="grid-column: 1 / -1;">FOOTER</div>
          </div>
          <p style="margin-top: 1rem; color: #64748b; font-size: 1rem;">Grid Lines: 1, 2, 3, 4 (həm üfüqi, həm şaquli)</p>
        </div>

        <div class="code-block">
<span class="comment">/* Ən sadə grid container */</span>
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">grid</span><span class="punctuation">;</span>           <span class="comment">/* Və ya display: inline-grid */</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">200px 200px 200px</span><span class="punctuation">;</span>  <span class="comment">/* 3 sütun, hər biri 200px */</span>
  <span class="property">grid-template-rows</span><span class="punctuation">:</span> <span class="value">100px 100px</span><span class="punctuation">;</span>         <span class="comment">/* 2 sətir, hər biri 100px */</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>                      <span class="comment">/* Hüceyrələr arası boşluq */</span>
<span class="punctuation">}</span>

<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#10b981</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
  <span class="property">text-align</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <div class="grid-visual" style="grid-template-columns: repeat(3, 1fr); max-width: 500px; margin: 0 auto;">
            <div class="grid-cell">1</div>
            <div class="grid-cell">2</div>
            <div class="grid-cell">3</div>
            <div class="grid-cell">4</div>
            <div class="grid-cell">5</div>
            <div class="grid-cell">6</div>
          </div>
          <p style="margin-top: 1rem;">3 sütun × 2 sətir = 6 hüceyrə</p>
        </div>
      </div>

      <!-- FR UNITİ -->
      <div class="section-card">
        <h3>📏 Fr Uniti (Fraction - Hissə)</h3>
        <p style="font-size: 1.1rem;"><code>fr</code> (fraction) grid-in ən güclü vahididir. Mövcud boşluqun <strong>nə qədər hissəsini</strong> tutacağını göstərir.</p>

        <div class="highlight-box">
          <strong>🎯 Əsas Qayda:</strong>
          <p style="margin-top: 0.5rem;"><code>1fr</code> = Mövcud boşluğun 1 hissəsi. Bütün <code>fr</code>-lər toplanır və boşluq buna görə bölünür.</p>
        </div>

        <div class="code-block">
<span class="comment">/* Bərabər 3 sütun */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">1fr 1fr 1fr</span><span class="punctuation">;</span>
<span class="comment">/* Və ya: */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(3, 1fr)</span><span class="punctuation">;</span>

<span class="comment">/* Orta sütun digərlərindən ikiqat böyük */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">1fr 2fr 1fr</span><span class="punctuation">;</span>

<span class="comment">/* Sidebar sabit, qalanı bərabər */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">250px 1fr 1fr</span><span class="punctuation">;</span>

<span class="comment">/* Header və footer tam en, main böyüyür */</span>
<span class="property">grid-template-rows</span><span class="punctuation">:</span> <span class="value">auto 1fr auto</span><span class="punctuation">;</span>
        </div>

        <div class="visual-demo">
          <h4 style="margin-bottom: 1rem;">1fr 2fr 1fr Nümunəsi:</h4>
          <div class="fr-demo">
            <div class="fr-item">1fr</div>
            <div class="fr-item" style="padding: 2rem 1rem;">2fr (İkiqat geniş)</div>
            <div class="fr-item">1fr</div>
          </div>
          <p style="margin-top: 1rem; color: #64748b;">Ümumi: 4 hissə | Soldan: 1/4, Orta: 2/4, Sağdan: 1/4</p>
        </div>

        <div class="tip-box">
          <strong>💡 Üstünlükləri:</strong>
          <ul class="check-list">
            <li>Avtomatik hesablanır - container ölçüsünü bilmək lazım deyil</li>
            <li>Responsive-dir - container kiçildikcə proporsional kiçilir</li>
            <li>% ilə fərqli olaraq, gap-ləri avtomatik çıxarır</li>
            <li>Mix edilə bilər: <code>200px 1fr 2fr</code></li>
          </ul>
        </div>
      </div>

      <!-- REPEAT FUNKSİYASI -->
      <div class="section-card">
        <h3>🔄 Repeat Funksiyası</h3>
        <p style="font-size: 1.1rem;">Təkrarlayan dəyərləri qısa formada yazmaq üçün <code>repeat()</code> funksiyası istifadə olunur.</p>

        <div class="code-block">
<span class="comment">/* Uzun yazılış */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">1fr 1fr 1fr 1fr 1fr 1fr</span><span class="punctuation">;</span>

<span class="comment">/* Qısa yazılış */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(6, 1fr)</span><span class="punctuation">;</span>

<span class="comment">/* Daha mürəkkəb nümunə */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(2, 100px 200px)</span><span class="punctuation">;</span>
<span class="comment">/* Nəticə: 100px 200px 100px 200px */</span>

<span class="comment">/* Responsiv grid - avtomatik sığdırma */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(auto-fit, minmax(250px, 1fr))</span><span class="punctuation">;</span>
        </div>

        <div class="highlight-box">
          <strong>🔥 Ən Güclü Kombinasiya:</strong>
          <div class="code-block" style="margin: 0.5rem 0;">
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(auto-fit, minmax(250px, 1fr))</span><span class="punctuation">;</span>
          </div>
          <p>Bu kod avtomatik olaraq mövcud enə uyğun olaraq mümkün qədər çox sütun yaradır, hər biri minimum 250px, maksimum bərabər paylaşır.</p>
        </div>
      </div>

      <!-- GRİD TEMPLATE AREAS -->
      <div class="section-card">
        <h3>🗺️ Grid Template Areas (Adlandırılmış Sahələr)</h3>
        <p style="font-size: 1.1rem;">Grid-in ən sevdiyimiz xüsusiyyəti! Vizual olaraq layout-u kodda çəkməyə imkan verir.</p>

        <div class="code-block">
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">grid</span><span class="punctuation">;</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">200px 1fr 200px</span><span class="punctuation">;</span>
  <span class="property">grid-template-rows</span><span class="punctuation">:</span> <span class="value">auto 1fr auto</span><span class="punctuation">;</span>
  
  <span class="comment">/* VIZUAL LAYOUT - Hər dırnaq içində bir sətir */</span>
  <span class="property">grid-template-areas</span><span class="punctuation">:</span>
    <span class="value">"header header header"</span>
    <span class="value">"sidebar main aside"</span>
    <span class="value">"footer footer footer"</span><span class="punctuation">;</span>
  
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
  <span class="property">min-height</span><span class="punctuation">:</span> <span class="value">100vh</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Hər element öz sahəsini alır */</span>
<span class="selector">.header</span>  <span class="punctuation">{</span> <span class="property">grid-area</span><span class="punctuation">:</span> <span class="value">header</span><span class="punctuation">;</span>  <span class="punctuation">}</span>
<span class="selector">.sidebar</span> <span class="punctuation">{</span> <span class="property">grid-area</span><span class="punctuation">:</span> <span class="value">sidebar</span><span class="punctuation">;</span> <span class="punctuation">}</span>
<span class="selector">.main</span>    <span class="punctuation">{</span> <span class="property">grid-area</span><span class="punctuation">:</span> <span class="value">main</span><span class="punctuation">;</span>    <span class="punctuation">}</span>
<span class="selector">.aside</span>   <span class="punctuation">{</span> <span class="property">grid-area</span><span class="punctuation">:</span> <span class="value">aside</span><span class="punctuation">;</span>   <span class="punctuation">}</span>
<span class="selector">.footer</span>  <span class="punctuation">{</span> <span class="property">grid-area</span><span class="punctuation">:</span> <span class="value">footer</span><span class="punctuation">;</span>  <span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <h4 style="margin-bottom: 1rem;">Grid Areas Vizualı:</h4>
          <div style="display: grid; grid-template-columns: 100px 1fr 100px; gap: 8px; max-width: 500px; margin: 0 auto; font-size: 0.9rem;">
            <div style="grid-column: 1 / -1; background: #3b82f6; color: white; padding: 1rem; border-radius: 6px; font-weight: 600;">header</div>
            <div style="background: #f59e0b; color: white; padding: 2rem 1rem; border-radius: 6px; font-weight: 600;">sidebar</div>
            <div style="background: #10b981; color: white; padding: 3rem 1rem; border-radius: 6px; font-weight: 600;">main</div>
            <div style="background: #8b5cf6; color: white; padding: 2rem 1rem; border-radius: 6px; font-weight: 600;">aside</div>
            <div style="grid-column: 1 / -1; background: #1e293b; color: white; padding: 1rem; border-radius: 6px; font-weight: 600;">footer</div>
          </div>
        </div>

        <div class="tip-box">
          <strong>✅ Üstünlükləri:</strong>
          <ul class="check-list">
            <li>Layout-u vizual olaraq görə bilirsiniz</li>
            <li>Media query ilə responsive dəyişikliklər çox asandır</li>
            <li>HTML strukturunu dəyişmədən layout-u dəyişə bilərsiniz</li>
            <li>Kod oxunaqlığı çox yüksəkdir</li>
          </ul>
        </div>

        <div class="code-block">
<span class="comment">/* Mobil layout - sadəcə areas dəyişir */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">max-width</span><span class="punctuation">:</span> <span class="value">768px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.container</span> <span class="punctuation">{</span>
    <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">1fr</span><span class="punctuation">;</span>
    <span class="property">grid-template-areas</span><span class="punctuation">:</span>
      <span class="value">"header"</span>
      <span class="value">"main"</span>
      <span class="value">"sidebar"</span>
      <span class="value">"aside"</span>
      <span class="value">"footer"</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>
      </div>

      <!-- GRİD ITEM XÜSUSİYYƏTLƏRİ -->
      <div class="section-card">
        <h3>📦 Grid Item Xüsusiyyətləri</h3>
        <p style="font-size: 1.1rem;">Fərdi elementlərin grid-də hansı sahəni tutacağını təyin etmək.</p>

        <h4>1. Grid Column və Grid Row (Xətt Nömrələri ilə)</h4>
        <div class="code-block">
<span class="comment">/* 1-ci sütundan 3-cü xəttə qədər (2 sütun tutur) */</span>
<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="property">grid-column</span><span class="punctuation">:</span> <span class="number">1</span> <span class="punctuation">/</span> <span class="number">3</span><span class="punctuation">;</span>
  <span class="comment">/* Və ya: */</span>
  <span class="property">grid-column</span><span class="punctuation">:</span> <span class="value">span 2</span><span class="punctuation">;</span>  <span class="comment">/* 2 sütun tut */</span>
<span class="punctuation">}</span>

<span class="comment">/* 2-ci sətirdən 4-cü xəttə qədər */</span>
<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="property">grid-row</span><span class="punctuation">:</span> <span class="number">2</span> <span class="punctuation">/</span> <span class="number">4</span><span class="punctuation">;</span>
  <span class="comment">/* Və ya: */</span>
  <span class="property">grid-row</span><span class="punctuation">:</span> <span class="value">span 2</span><span class="punctuation">;</span>  <span class="comment">/* 2 sətir tut */</span>
<span class="punctuation">}</span>

<span class="comment">/* Shorthand - hər ikisi birlikdə */</span>
<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="property">grid-column</span><span class="punctuation">:</span> <span class="number">1</span> <span class="punctuation">/</span> <span class="number">3</span><span class="punctuation">;</span>
  <span class="property">grid-row</span><span class="punctuation">:</span> <span class="number">1</span> <span class="punctuation">/</span> <span class="number">3</span><span class="punctuation">;</span>
  <span class="comment">/* 2×2 sahə tutur */</span>
<span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <h4 style="margin-bottom: 1rem;">Grid Column/Row Nümunəsi:</h4>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; max-width: 500px; margin: 0 auto;">
            <div style="grid-column: span 2; grid-row: span 2; background: #f59e0b; color: white; padding: 2rem; border-radius: 6px; font-weight: 600; display: flex; align-items: center; justify-content: center;">span 2 × span 2</div>
            <div style="background: #10b981; color: white; padding: 1rem; border-radius: 6px;">1</div>
            <div style="background: #10b981; color: white; padding: 1rem; border-radius: 6px;">2</div>
            <div style="background: #10b981; color: white; padding: 1rem; border-radius: 6px;">3</div>
            <div style="background: #10b981; color: white; padding: 1rem; border-radius: 6px;">4</div>
            <div style="grid-column: span 2; background: #8b5cf6; color: white; padding: 1rem; border-radius: 6px; font-weight: 600;">span 2</div>
          </div>
        </div>

        <h4 style="margin-top: 2rem;">2. Justify-self və Align-self (Fərdi Düzləndirmə)</h4>
        <div class="code-block">
<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="comment">/* Sütun daxilində üfüqi düzləndirmə */</span>
  <span class="property">justify-self</span><span class="punctuation">:</span> <span class="value">start</span><span class="punctuation">;</span>   <span class="comment">/* Sola */</span>
  <span class="comment">/* justify-self: center; */</span>  <span class="comment">/* Mərkəz */</span>
  <span class="comment">/* justify-self: end; */</span>     <span class="comment">/* Sağa */</span>
  <span class="comment">/* justify-self: stretch; */</span> <span class="comment">/* Genişlən (default) */</span>
  
  <span class="comment">/* Sətir daxilində şaquli düzləndirmə */</span>
  <span class="property">align-self</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>    <span class="comment">/* Mərkəz */</span>
  <span class="comment">/* align-self: start; */</span>       <span class="comment">/* Yuxarı */</span>
  <span class="comment">/* align-self: end; */</span>         <span class="comment">/* Aşağı */</span>
  <span class="comment">/* align-self: stretch; */</span>     <span class="comment">/* Uzan (default) */</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>💡 Flexbox vs Grid Düzləndirmə:</strong>
          <ul style="margin-top: 0.5rem;">
            <li><strong>Flexbox:</strong> justify-content (main axis), align-items (cross axis)</li>
            <li><strong>Grid:</strong> justify-items (üfüqi), align-items (şaquli) - bütün grid üçün</li>
            <li><strong>Grid:</strong> justify-self, align-self - tək item üçün</li>
          </ul>
        </div>
      </div>

      <!-- AUTO-FIT VS AUTO-FILL -->
      <div class="section-card">
        <h3>🔁 Auto-fit vs Auto-fill</h3>
        <p style="font-size: 1.1rem;">Responsiv grid-lərdə tez-tez istifadə olunan, amma qarışdırılan iki dəyər.</p>

        <div class="info-grid">
          <div class="info-item" style="background: #eff6ff; border-color: #3b82f6;">
            <h4 style="color: #1d4ed8;">auto-fill</h4>
            <p>Boş grid track-ləri <strong>saxlayır</strong>. Container genişlədikcə boş sütunlar görünür.</p>
          </div>
          <div class="info-item" style="background: #f0fdf4; border-color: #10b981;">
            <h4 style="color: #059669;">auto-fit</h4>
            <p>Boş track-ləri <strong>çökdürür</strong>. Mövcud elementləri genişləndirərək bütün boşluğu doldurur.</p>
          </div>
        </div>

        <div class="code-block">
<span class="comment">/* auto-fill: 6 element varsa, 10 sütunlu grid yarada bilər (boş sütunlar qalır) */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(auto-fill, minmax(200px, 1fr))</span><span class="punctuation">;</span>

<span class="comment">/* auto-fit: 6 element varsa, onları bütün enə yayır */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(auto-fit, minmax(200px, 1fr))</span><span class="punctuation">;</span>
        </div>

        <div class="highlight-box">
          <strong>🎯 Praktik Qayda:</strong>
          <p style="margin-top: 0.5rem;">Əksər hallarda <code>auto-fit</code> istifadə edin, çünki boşluğu doldurmaq daha estetik görünür. <code>auto-fill</code> yalnız xüsusi hallarda (məsələn, masonry layout) lazım olur.</p>
        </div>
      </div>

      <!-- DİGƏR XÜSUSİYYƏTLƏR -->
      <div class="section-card">
        <h3>⚙️ Digər Vacib Xüsusiyyətlər</h3>

        <h4>1. minmax() Funksiyası</h4>
        <div class="code-block">
<span class="comment">/* Minimum 200px, maksimum 1fr */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(3, minmax(200px, 1fr))</span><span class="punctuation">;</span>

<span class="comment">/* Responsiv: kiçik ekranda 200px, böyüdükcə bərabər bölmə */</span>
<span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(auto-fit, minmax(250px, 1fr))</span><span class="punctuation">;</span>
        </div>

        <h4 style="margin-top: 2rem;">2. grid-auto-flow</h4>
        <div class="code-block">
<span class="comment">/* Default: Sətir-sətir düzülür */</span>
<span class="property">grid-auto-flow</span><span class="punctuation">:</span> <span class="value">row</span><span class="punctuation">;</span>

<span class="comment">/* Sütun-sütun düzülür */</span>
<span class="property">grid-auto-flow</span><span class="punctuation">:</span> <span class="value">column</span><span class="punctuation">;</span>

<span class="comment">/* Boş yerləri doldur (masonry effekti) */</span>
<span class="property">grid-auto-flow</span><span class="punctuation">:</span> <span class="value">dense</span><span class="punctuation">;</span>
        </div>

        <h4 style="margin-top: 2rem;">3. Gap (Boşluq)</h4>
        <div class="code-block">
<span class="property">gap</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>                    <span class="comment">/* Həm sətir, həm sütun */</span>
<span class="property">row-gap</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>                <span class="comment">/* Yalnız sətir arası */</span>
<span class="property">column-gap</span><span class="punctuation">:</span> <span class="value">30px</span><span class="punctuation">;</span>             <span class="comment">/* Yalnız sütun arası */</span>
<span class="property">gap</span><span class="punctuation">:</span> <span class="value">20px 30px</span><span class="punctuation">;</span>              <span class="comment">/* row-gap column-gap */</span>
        </div>
      </div>

      <!-- PRAKTİKİ NÜMUNƏLƏR -->
      <div class="section-card">
        <h3>🛠️ Praktiki Nümunələr</h3>

        <h4>1. Holy Grail Layout (Tam Səhifə)</h4>
        <div class="code-block">
<span class="selector">.layout</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">grid</span><span class="punctuation">;</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">250px 1fr 200px</span><span class="punctuation">;</span>
  <span class="property">grid-template-rows</span><span class="punctuation">:</span> <span class="value">auto 1fr auto</span><span class="punctuation">;</span>
  <span class="property">grid-template-areas</span><span class="punctuation">:</span>
    <span class="value">"header header header"</span>
    <span class="value">"nav main aside"</span>
    <span class="value">"footer footer footer"</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
  <span class="property">min-height</span><span class="punctuation">:</span> <span class="value">100vh</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4 style="margin-top: 2rem;">2. Instagram-style Photo Grid</h4>
        <div class="code-block">
<span class="selector">.photo-grid</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">grid</span><span class="punctuation">;</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(3, 1fr)</span><span class="punctuation">;</span>
  <span class="property">grid-auto-rows</span><span class="punctuation">:</span> <span class="value">300px</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">10px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.photo-item</span> <span class="punctuation">{</span>
  <span class="property">position</span><span class="punctuation">:</span> <span class="value">relative</span><span class="punctuation">;</span>
  <span class="property">overflow</span><span class="punctuation">:</span> <span class="value">hidden</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.photo-item</span><span class="punctuation">:</span><span class="value">nth-child(1)</span> <span class="punctuation">{</span>
  <span class="property">grid-column</span><span class="punctuation">:</span> <span class="value">span 2</span><span class="punctuation">;</span>
  <span class="property">grid-row</span><span class="punctuation">:</span> <span class="value">span 2</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.photo-item img</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="value">100%</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="value">100%</span><span class="punctuation">;</span>
  <span class="property">object-fit</span><span class="punctuation">:</span> <span class="value">cover</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4 style="margin-top: 2rem;">3. Dashboard Widget Grid</h4>
        <div class="code-block">
<span class="selector">.dashboard</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">grid</span><span class="punctuation">;</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">repeat(4, 1fr)</span><span class="punctuation">;</span>
  <span class="property">grid-auto-rows</span><span class="punctuation">:</span> <span class="value">minmax(150px, auto)</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.widget-large</span> <span class="punctuation">{</span>
  <span class="property">grid-column</span><span class="punctuation">:</span> <span class="value">span 2</span><span class="punctuation">;</span>
  <span class="property">grid-row</span><span class="punctuation">:</span> <span class="value">span 2</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.widget-wide</span> <span class="punctuation">{</span>
  <span class="property">grid-column</span><span class="punctuation">:</span> <span class="value">span 2</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>
      </div>

      <!-- MÜQAYİSƏ CƏDVƏLİ -->
      <div class="section-card">
        <h3>📊 Bütün Grid Xüsusiyyətləri Cədvəli</h3>
        
        <h4>Container Xüsusiyyətləri:</h4>
        <table class="comparison-table">
          <tr>
            <th>Xüsusiyyət</th>
            <th>Təsvir</th>
            <th>Əsas Dəyərlər</th>
          </tr>
          <tr>
            <td><span class="property-badge">display</span></td>
            <td>Grid konteksti yaratmaq</td>
            <td>grid, inline-grid</td>
          </tr>
          <tr>
            <td><span class="property-badge">grid-template-columns</span></td>
            <td>Sütun ölçüləri</td>
            <td>200px, 1fr, repeat(3, 1fr)</td>
          </tr>
          <tr>
            <td><span class="property-badge">grid-template-rows</span></td>
            <td>Sətir ölçüləri</td>
            <td>auto, 100px, 1fr</td>
          </tr>
          <tr>
            <td><span class="property-badge">grid-template-areas</span></td>
            <td>Adlandırılmış sahələr</td>
            <td>"header header" "sidebar main"</td>
          </tr>
          <tr>
            <td><span class="property-badge">gap</span></td>
            <td>Hüceyrələr arası boşluq</td>
            <td>20px, 1rem</td>
          </tr>
          <tr>
            <td><span class="property-badge">justify-items</span></td>
            <td>Bütün item-lərin üfüqi düzləndirməsi</td>
            <td>start, center, end, stretch</td>
          </tr>
          <tr>
            <td><span class="property-badge">align-items</span></td>
            <td>Bütün item-lərin şaquli düzləndirməsi</td>
            <td>start, center, end, stretch</td>
          </tr>
        </table>

        <h4 style="margin-top: 2rem;">Item Xüsusiyyətləri:</h4>
        <table class="comparison-table">
          <tr>
            <th>Xüsusiyyət</th>
            <th>Təsvir</th>
            <th>Əsas Dəyərlər</th>
          </tr>
          <tr>
            <td><span class="property-badge">grid-column</span></td>
            <td>Sütun xətt nömrələri</td>
            <td>1 / 3, span 2</td>
          </tr>
          <tr>
            <td><span class="property-badge">grid-row</span></td>
            <td>Sətir xətt nömrələri</td>
            <td>2 / 4, span 2</td>
          </tr>
          <tr>
            <td><span class="property-badge">grid-area</span></td>
            <td>Adlandırılmış sahə</td>
            <td>header, sidebar</td>
          </tr>
          <tr>
            <td><span class="property-badge">justify-self</span></td>
            <td>Tək item-in üfüqi düzləndirməsi</td>
            <td>start, center, end</td>
          </tr>
          <tr>
            <td><span class="property-badge">align-self</span></td>
            <td>Tək item-in şaquli düzləndirməsi</td>
            <td>start, center, end</td>
          </tr>
        </table>
      </div>

      <!-- YEKUN -->
      <div class="section-card" style="border-left-color: #10b981;">
        <h3>🎉 Təbriklər!</h3>
        <p style="font-size: 1.1rem;">CSS Grid-i öyrəndiniz! İndi bilirsiniz:</p>
        <ul class="check-list">
          <li>Grid container və grid item arasındakı fərqi</li>
          <li>fr uniti ilə çevik ölçülər yaratmağı</li>
          <li>Grid template areas ilə vizual layout qurmağı</li>
          <li>Responsiv grid-lər (auto-fit, minmax) yaratmağı</li>
          <li>Grid column/row ilə elementləri genişləndirməyi</li>
          <li>Flexbox və Grid-i birlikdə istifadə etməyi</li>
        </ul>
        
        <div class="tip-box" style="margin-top: 1.5rem;">
          <strong>🚀 Son Məsləhət:</strong>
          <p style="margin-top: 0.5rem;"><strong>Flexbox</strong> komponentlər (düymələr, naviqasiya, form elementləri) üçün, <strong>Grid</strong> isə səhifənin əsas layout strukturu üçün istifadə edin. İkisini birlikdə istifadə edərək professional veb saytlar yarada bilərsiniz!</p>
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
    <title>CSS Grid Masterclass</title>
    <style>
        /* ==========================================
           ƏSAS RESET
           ========================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #1a202c;
            background: #f1f5f9;
        }

        /* ==========================================
           1. HOLY GRAIL LAYOUT
           ========================================== */
        .holy-grail {
            display: grid;
            grid-template-columns: 250px 1fr 200px;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                "header header header"
                "sidebar main aside"
                "footer footer footer";
            gap: 20px;
            min-height: 100vh;
            padding: 20px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .hg-header {
            grid-area: header;
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 2rem;
            text-align: center;
            border-radius: 12px;
            font-size: 1.5rem;
            font-weight: 700;
        }

        .hg-sidebar {
            grid-area: sidebar;
            background: #f59e0b;
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
        }

        .hg-main {
            grid-area: main;
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .hg-aside {
            grid-area: aside;
            background: #8b5cf6;
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
        }

        .hg-footer {
            grid-area: footer;
            background: #1e293b;
            color: white;
            padding: 1.5rem;
            text-align: center;
            border-radius: 12px;
        }

        /* ==========================================
           2. RESPONSİV KART GRID
           ========================================== */
        .features-section {
            padding: 4rem 5%;
            max-width: 1200px;
            margin: 2rem auto;
        }

        .features-section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #1e293b;
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .card-image {
            height: 200px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
        }

        .card-content {
            padding: 1.5rem;
        }

        .card-content h3 {
            margin-bottom: 0.5rem;
            color: #1e293b;
            font-size: 1.3rem;
        }

        .card-content p {
            color: #64748b;
            line-height: 1.6;
        }

        /* ==========================================
           3. MASONRY PHOTO GRID
           ========================================== */
        .gallery-section {
            padding: 4rem 5%;
            background: #1e293b;
            color: white;
        }

        .gallery-section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }

        .photo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-rows: 200px;
            gap: 15px;
            max-width: 1000px;
            margin: 0 auto;
            grid-auto-flow: dense;
        }

        .photo-item {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: 700;
            color: white;
            cursor: pointer;
            transition: transform 0.3s;
            position: relative;
            overflow: hidden;
        }

        .photo-item:hover {
            transform: scale(1.05);
        }

        .photo-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.3);
            opacity: 0;
            transition: opacity 0.3s;
        }

        .photo-item:hover::after {
            opacity: 1;
        }

        /* Grid spanning */
        .photo-item.tall {
            grid-row: span 2;
        }

        .photo-item.wide {
            grid-column: span 2;
        }

        .photo-item.big {
            grid-column: span 2;
            grid-row: span 2;
        }

        /* ==========================================
           4. DASHBOARD WIDGETS
           ========================================== */
        .dashboard-section {
            padding: 4rem 5%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .dashboard-section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #1e293b;
        }

        .widget-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(150px, auto);
            gap: 20px;
        }

        .widget {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .widget h3 {
            color: #64748b;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
        }

        .widget .number {
            font-size: 3rem;
            font-weight: 700;
            color: #10b981;
        }

        .widget-large {
            grid-column: span 2;
            grid-row: span 2;
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
        }

        .widget-large h3,
        .widget-large .number {
            color: white;
        }

        .widget-wide {
            grid-column: span 2;
        }

        /* ==========================================
           RESPONSIVE DIZAYN
           ========================================== */
        @media (max-width: 1024px) {
            .holy-grail {
                grid-template-columns: 200px 1fr;
                grid-template-areas:
                    "header header"
                    "sidebar main"
                    "aside aside"
                    "footer footer";
            }

            .widget-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .holy-grail {
                grid-template-columns: 1fr;
                grid-template-areas:
                    "header"
                    "main"
                    "sidebar"
                    "aside"
                    "footer";
            }

            .hg-sidebar,
            .hg-aside {
                display: none; /* Və ya accordion edə bilərsiniz */
            }

            .widget-grid {
                grid-template-columns: 1fr;
            }

            .widget-large,
            .widget-wide {
                grid-column: span 1;
            }

            .photo-item.wide,
            .photo-item.big {
                grid-column: span 1;
            }
        }
    </style>
</head>
<body>
    <!-- Holy Grail Layout -->
    <div class="holy-grail">
        <header class="hg-header">
            🎯 CSS Grid Layout Sistemi
        </header>
        
        <aside class="hg-sidebar">
            <h3>Sidebar</h3>
            <ul style="list-style: none; margin-top: 1rem;">
                <li style="margin-bottom: 0.5rem;">📊 Dashboard</li>
                <li style="margin-bottom: 0.5rem;">📈 Analitika</li>
                <li style="margin-bottom: 0.5rem;">⚙️ Ayarlar</li>
            </ul>
        </aside>
        
        <main class="hg-main">
            <h2 style="margin-bottom: 1rem; color: #1e293b;">Əsas Məzmun</h2>
            <p style="color: #64748b; line-height: 1.8;">
                Bu bölmə grid-template-areas ilə yaradılmışdır. 
                CSS Grid ilə iki ölçülü layout-lar asanlıqla qurulur. 
                Mobil cihazlarda isə grid-template-areas dəyişərək 
                fərqli layout alır.
            </p>
        </main>
        
        <aside class="hg-aside">
            <h3>Right Panel</h3>
            <p style="margin-top: 1rem; font-size: 0.9rem;">
                Əlavə məlumatlar və statistika burada göstərilir.
            </p>
        </aside>
        
        <footer class="hg-footer">
            &copy; 2024 Grid Masterclass. Bütün hüquqlar qorunur.
        </footer>
    </div>

    <!-- Features Grid -->
    <section class="features-section">
        <h2>Grid Xüsusiyyətləri</h2>
        <div class="card-grid">
            <article class="feature-card">
                <div class="card-image">📐</div>
                <div class="card-content">
                    <h3>İki Ölçülü Layout</h3>
                    <p>Həm sətir, həm sütun eyni vaxtda idarə edin. Flexbox-dan fərqli olaraq tam nəzarət.</p>
                </div>
            </article>
            <article class="feature-card">
                <div class="card-image">🎨</div>
                <div class="card-content">
                    <h3>Template Areas</h3>
                    <p>Vizual olaraq layout çəkin. Kodunuz layout-unuzu əks etsin.</p>
                </div>
            </article>
            <article class="feature-card">
                <div class="card-image">📱</div>
                <div class="card-content">
                    <h3>Auto-Fit Responsive</h3>
                    <p>Bir sətir kodla hər ölçüdə mükəmməl görünən grid-lər yaradın.</p>
                </div>
            </article>
        </div>
    </section>

    <!-- Photo Gallery -->
    <section class="gallery-section">
        <h2>Masonry Grid Nümunəsi</h2>
        <div class="photo-grid">
            <div class="photo-item big">1</div>
            <div class="photo-item">2</div>
            <div class="photo-item tall">3</div>
            <div class="photo-item">4</div>
            <div class="photo-item wide">5</div>
            <div class="photo-item">6</div>
            <div class="photo-item tall">7</div>
            <div class="photo-item">8</div>
        </div>
    </section>

    <!-- Dashboard -->
    <section class="dashboard-section">
        <h2>Dashboard Widgets</h2>
        <div class="widget-grid">
            <div class="widget">
                <h3>İstifadəçilər</h3>
                <div class="number">1,234</div>
            </div>
            <div class="widget">
                <h3>Gəlir</h3>
                <div class="number">$12K</div>
            </div>
            <div class="widget widget-large">
                <h3>Əsas Qrafik</h3>
                <div class="number" style="margin-top: 2rem;">📈</div>
                <p style="margin-top: 1rem;">Bu widget 2×2 sahə tutur</p>
            </div>
            <div class="widget">
                <h3>Sifarişlər</h3>
                <div class="number">856</div>
            </div>
            <div class="widget widget-wide">
                <h3>Son Aktivlik</h3>
                <p style="margin-top: 1rem; color: #64748b;">Bu widget 2 sütun genişliyindədir</p>
            </div>
        </div>
    </section>
</body>
</html>`,
    
    css: `/* Bu fayl boş qala bilər, çünki bütün CSS HTML-in içindədir */
/* Və ya əlavə stillər burada yazıla bilər */`,
    
    js: `// Grid interaktivlikləri

document.addEventListener('DOMContentLoaded', function() {
    
    // Photo item-lərə klik effekti
    const photoItems = document.querySelectorAll('.photo-item');
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    ];
    
    photoItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Random rəng seç
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.background = randomColor;
            
            // Animasyon
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 150);
            
            console.log('Photo ' + (index + 1) + ' clicked');
        });
    });

    // Widget-lərə hover effekti
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach(widget => {
        widget.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s';
        });
        
        widget.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Feature card-lar üçün scroll animasiyası
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

    // Holy grail layout dəyişdirmə (demo üçün)
    const holyGrail = document.querySelector('.holy-grail');
    let layoutMode = 0;
    
    // Demo: 3 saniyədən bir layout dəyiş (əgər istəsəniz)
    // setInterval(() => {
    //     layoutMode = (layoutMode + 1) % 2;
    //     if (layoutMode === 1) {
    //         holyGrail.style.gridTemplateAreas = '"header header header" "main main main" "sidebar aside aside" "footer footer footer"';
    //     } else {
    //         holyGrail.style.gridTemplateAreas = '"header header header" "sidebar main aside" "footer footer footer"';
    //     }
    // }, 5000);

    console.log('%c🎯 CSS Grid Masterclass yükləndi!', 'font-size: 18px; color: #10b981; font-weight: bold;');
    console.log('%cPhoto grid item-lərinə klikləməyi sınayın', 'font-size: 13px; color: #64748b;');
});`
  },

  exercise: {
    title: "Instagram-style Photo Grid Yarat",
    description: "CSS Grid istifadə edərək Instagram-oxşar photo grid yaradın. Bəzi şəkillər 2x2, bəziləri 1x1 ölçüsündə olsun. Hover effekti və responsiv dizayn əlavə edin.",
    requirements: [
      "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) istifadə edin",
      "grid-auto-rows: 200px ilə sətir hündürlüyü təyin edin",
      "Bəzi şəkillərə grid-column: span 2 verin (geniş)",
      "Bəzi şəkillərə grid-row: span 2 verin (hündür)",
      "Bir şəkilə hər ikisini verin (2x2 böyük)",
      "gap: 10px ilə boşluq yaradın",
      "object-fit: cover ilə şəkilləri düzgün göstərin",
      "Hover effekti əlavə edin (transform: scale)",
      "grid-auto-flow: dense ilə boş yerləri doldurun",
      "Responsive media query əlavə edin",
      "Şəkillərə overlay və caption əlavə edin",
      "Mobil cihazlarda span-ları söndürün"
    ],
    starterCode: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Grid</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #fafafa;
            padding: 20px;
        }

        .instagram-grid {
            display: grid;
            /* Grid kodunuzu bura yazın */
            
            max-width: 1000px;
            margin: 0 auto;
        }

        .grid-item {
            position: relative;
            overflow: hidden;
            border-radius: 4px;
            cursor: pointer;
        }

        .grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }

        .grid-item:hover img {
            transform: scale(1.1);
        }

        /* Overlay */
        .grid-item::after {
            content: '❤️ 100';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.3);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .grid-item:hover::after {
            opacity: 1;
        }

        /* Span classes */
        .span-col {
            /* grid-column əlavə edin */
        }

        .span-row {
            /* grid-row əlavə edin */
        }

        .span-both {
            /* Hər ikisini əlavə edin */
        }

        /* Responsive */
        @media (max-width: 600px) {
            .instagram-grid {
                /* Mobil üçün 2 sütun */
            }
            
            .span-col,
            .span-row,
            .span-both {
                /* Mobil üçün span-ları söndür */
            }
        }
    </style>
</head>
<body>
    <div class="instagram-grid">
        <!-- 9-12 ədəd şəkil əlavə edin -->
        <div class="grid-item span-both">
            <img src="https://picsum.photos/400/400?random=1" alt="Photo 1">
        </div>
        <div class="grid-item">
            <img src="https://picsum.photos/400/400?random=2" alt="Photo 2">
        </div>
        <!-- Daha çox şəkil əlavə edin... -->
        
    </div>
</body>
</html>`
  },

  quiz: [
    {
      question: "CSS Grid container yaratmaq üçün hansı xüsusiyyət istifadə olunur?",
      options: ["display: grid", "display: flex", "position: grid", "layout: grid"],
      correctAnswer: 0,
      explanation: "display: grid bir elementi grid container-ə çevirir və birbaşa uşaq elementlərini grid item-lərə çevirir."
    },
    {
      question: "1fr uniti nə deməkdir?",
      options: ["Fixed width (Sabit en)", "Fraction of available space (Mövcud boşluğun hissəsi)", "Full width (Tam en)", "Fast render (Sürətli render)"],
      correctAnswer: 1,
      explanation: "1fr (fraction) mövcud boşluğun 1 hissəsini təmsil edir. Bütün fr-lər toplanır və boşluq buna görə bölünür."
    },
    {
      question: "grid-template-areas nə üçün istifadə olunur?",
      options: ["Rəng təyin etmək", "Adlandırılmış grid bölgələri yaratmaq", "Font seçmək", "Animasiya əlavə etmək"],
      correctAnswer: 1,
      explanation: "grid-template-areas ilə grid sahələrinə ad verib, vizual olaraq layout strukturunu təyin edə bilərsiniz."
    },
    {
      question: "Elementin 2 sütun tutmasını necə təyin edərik?",
      options: ["grid-column: 2", "grid-column: span 2", "column-span: 2", "span-column: 2"],
      correctAnswer: 1,
      explanation: "grid-column: span 2 və ya grid-column: 1 / 3 yazaraq elementi 2 sütun genişliyində edə bilərsiniz."
    },
    {
      question: "repeat(3, 1fr) nə edir?",
      options: ["3 dəfə 1fr təkrarlayır", "3 sütun yaradır", "Hər ikisi", "Heç biri"],
      correctAnswer: 2,
      explanation: "repeat(3, 1fr) 3 ədəd 1fr dəyəri yaradır, yəni 3 bərabər sütun deməkdir."
    },
    {
      question: "auto-fit və auto-fill arasındakı fərq nədir?",
      options: ["Fərq yoxdur", "auto-fit boş track-ləri çökdürür, auto-fill saxlayır", "auto-fill daha sürətlidir", "auto-fit yalnız mobil üçün işləyir"],
      correctAnswer: 1,
      explanation: "auto-fit boş grid track-lərini çökdürür və mövcud elementləri genişləndirir. auto-fill isə boş track-ləri saxlayır."
    },
    {
      question: "grid-gap və gap arasındakı fərq?",
      options: ["grid-gap köhnə sintaksisdir", "gap yalnız flex üçün işləyir", "Fərq yoxdur, eyni şeydir", "grid-gap daha güclüdür"],
      correctAnswer: 2,
      explanation: "grid-gap köhnə sintaksisdir (prefiksli), gap isə standartlaşdırılmış ümumi sintaksisdir. Hər ikisi eyni işi görür."
    },
    {
      question: "justify-items xüsusiyyəti nə edir?",
      options: ["Bütün grid item-ləri üfüqi düzləndirir", "Container-i mərkəzləşdirir", "Sətir hündürlüyünü təyin edir", "Sütun enini təyin edir"],
      correctAnswer: 0,
      explanation: "justify-items grid container-dəki bütün item-lərin sütun daxilində (üfüqi) düzləndirməsini təyin edir."
    },
    {
      question: "minmax(200px, 1fr) nə deməkdir?",
      options: ["Minimum 200px, maksimum 1fr", "200px və ya 1fr, hansı kiçikdirsə", "200px ilə 1fr arası", "Heç biri"],
      correctAnswer: 0,
      explanation: "minmax(200px, 1fr) track-in minimum 200px, maksimum isə 1fr (qalan boşluğun hissəsi) olacağını bildirir."
    },
    {
      question: "grid-auto-flow: dense nə edir?",
      options: ["Boş yerləri doldurur", "Sıxlığı artırır", "Elementləri kiçildir", "Responsiv edir"],
      correctAnswer: 0,
      explanation: "dense dəyəri grid alqoritminə boş qalan hüceyrələri sonrakı elementlərlə doldurmağı bildirir (masonry effekti)."
    }
  ]
};

export default topic4;