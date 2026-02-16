export const topic3 = {
  id: 3,
  title: "Flexbox Layout Sistemi",
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
      
      .code-block .property { color: #63b3ed; }
      .code-block .value { color: #68d391; }
      .code-block .selector { color: #f687b3; }
      .code-block .comment { color: #718096; font-style: italic; }
      .code-block .punctuation { color: #a0aec0; }
      
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
      
      .visual-demo {
        background: #edf2f7;
        border: 2px dashed #cbd5e0;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1rem 0;
        text-align: center;
      }
      
      .flex-demo {
        display: flex;
        gap: 10px;
        padding: 20px;
        background: white;
        border-radius: 8px;
        margin: 10px 0;
        min-height: 100px;
      }
      
      .flex-demo-item {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        border-radius: 8px;
      }
      
      .axis-demo {
        position: relative;
        height: 200px;
        background: #f7fafc;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        margin: 1rem 0;
      }
      
      .axis-main {
        position: absolute;
        top: 50%;
        left: 10%;
        right: 10%;
        height: 3px;
        background: #f5576c;
        transform: translateY(-50%);
      }
      
      .axis-main::after {
        content: "Main Axis →";
        position: absolute;
        right: 0;
        top: -25px;
        color: #f5576c;
        font-weight: bold;
      }
      
      .axis-cross {
        position: absolute;
        left: 50%;
        top: 10%;
        bottom: 10%;
        width: 3px;
        background: #48bb78;
        transform: translateX(-50%);
      }
      
      .axis-cross::after {
        content: "↑ Cross Axis";
        position: absolute;
        top: 0;
        left: 10px;
        color: #48bb78;
        font-weight: bold;
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
      
      .property-badge {
        display: inline-block;
        background: #e6fffa;
        color: #234e52;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.85rem;
        margin: 0.2rem;
      }
      
      .value-badge {
        display: inline-block;
        background: #faf5ff;
        color: #553c9a;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.85rem;
        margin: 0.2rem;
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
        <h2>🎯 Flexbox-a Xoş Gəlmisiniz!</h2>
        <p>CSS-in ən güclü layout sistemlərindən biri ilə tanış olun. Flexbox ilə elementləri asanlıqla düzülşdürə, mərkəzləşdirə və responsiv dizaynlar yarada bilərsiniz.</p>
      </div>

      <!-- FLEXBOX NƏDİR? -->
      <div class="section-card">
        <h3>🤔 Flexbox Nədir və Nə Üçün Lazımdır?</h3>
        <p><strong>Flexbox</strong> (Flexible Box Layout) bir ölçülü layout sistemidir. Elementləri <strong>sətir</strong> (row) və ya <strong>sütun</strong> (column) şəklində düzülşdirməyə imkan verir.</p>
        
        <div class="highlight-box">
          <strong>Əvvəlki Problemlər (Float ilə):</strong>
          <ul>
            <li>Elementləri mərkəzləşdirmək çox çətin idi</li>
            <li>Bərabər hündürlük problemi var idi</li>
            <li>Elementlərin sırasını dəyişmək mümkün deyildi</li>
            <li>Responsiv dizayn çətin idi</li>
          </ul>
        </div>

        <div class="tip-box">
          <strong>✅ Flexbox Həlləri:</strong>
          <ul class="check-list">
            <li>Asan mərkəzləşdirmə (bir sətir kodla)</li>
            <li>Avtomatik bərabər hündürlük</li>
            <li>Elementlərin sırasını CSS ilə dəyişmək</li>
            <li>Asan responsiv dizayn</li>
            <li>Boşluqları avtomatik bölüştürmə</li>
          </ul>
        </div>

        <h4>Flexbox Nə Vaxt İstifadə Edilir?</h4>
        <div class="info-grid">
          <div class="info-item">
            <h4>✅ Uyğundur</h4>
            <p>Naviqasiya barları, kartlar, mərkəzləşdirmə, kiçik komponentlər, form elementlərinin düzülüşü</p>
          </div>
          <div class="info-item">
            <h4>❌ Uyğun Deyil</h4>
            <p>Böyük səhifə layout-ları (bunun üçün Grid daha yaxşıdır), iki ölçülü mürəkkəb strukturlar</p>
          </div>
        </div>
      </div>

      <!-- ƏSAS KONSEPT -->
      <div class="section-card">
        <h3>🏗️ Əsas Konsept: Container və Items</h3>
        <p>Flexbox-da iki əsas element var:</p>
        
        <ol class="step-list">
          <li><strong>Flex Container</strong> - Ana element (display: flex verilən)</li>
          <li><strong>Flex Items</strong> - Container-in birbaşa uşaq elementləri</li>
        </ol>

        <div class="code-block">
<span class="comment">&lt;!-- HTML strukturu --&gt;</span>
<span class="punctuation">&lt;</span><span class="selector">div</span> <span class="property">class</span><span class="punctuation">=</span><span class="value">"container"</span><span class="punctuation">&gt;</span>    <span class="comment">&lt;!-- Flex Container --&gt;</span>
  <span class="punctuation">&lt;</span><span class="selector">div</span> <span class="property">class</span><span class="punctuation">=</span><span class="value">"item"</span><span class="punctuation">&gt;</span><span class="value">1</span><span class="punctuation">&lt;/</span><span class="selector">div</span><span class="punctuation">&gt;</span>       <span class="comment">&lt;!-- Flex Item --&gt;</span>
  <span class="punctuation">&lt;</span><span class="selector">div</span> <span class="property">class</span><span class="punctuation">=</span><span class="value">"item"</span><span class="punctuation">&gt;</span><span class="value">2</span><span class="punctuation">&lt;/</span><span class="selector">div</span><span class="punctuation">&gt;</span>       <span class="comment">&lt;!-- Flex Item --&gt;</span>
  <span class="punctuation">&lt;</span><span class="selector">div</span> <span class="property">class</span><span class="punctuation">=</span><span class="value">"item"</span><span class="punctuation">&gt;</span><span class="value">3</span><span class="punctuation">&lt;/</span><span class="selector">div</span><span class="punctuation">&gt;</span>       <span class="comment">&lt;!-- Flex Item --&gt;</span>
<span class="punctuation">&lt;/</span><span class="selector">div</span><span class="punctuation">&gt;</span>
        </div>

        <div class="code-block">
<span class="comment">/* CSS - Ən sadə flex container */</span>
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>    <span class="comment">/* Və ya display: inline-flex */</span>
<span class="punctuation">}</span>

<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="comment">/* Avtomatik flex item olur */</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#667eea</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
  <span class="property">margin</span><span class="punctuation">:</span> <span class="value">5px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <div style="display: flex; gap: 10px; justify-content: center;">
            <div style="background: #667eea; color: white; padding: 20px; border-radius: 8px;">Item 1</div>
            <div style="background: #667eea; color: white; padding: 20px; border-radius: 8px;">Item 2</div>
            <div style="background: #667eea; color: white; padding: 20px; border-radius: 8px;">Item 3</div>
          </div>
          <p style="margin-top: 10px; color: #666;">Sadə flex container</p>
        </div>
      </div>

      <!-- FLEX AXES -->
      <div class="section-card">
        <h3>📐 Flex Axes (Oxlar) - Çox Vacib!</h3>
        <p>Flexbox-da iki ox var və bunları başa düşmək şərtdir:</p>

        <div class="axis-demo">
          <div class="axis-main"></div>
          <div class="axis-cross"></div>
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 10px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <strong>Flex Container</strong>
          </div>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <h4>🔴 Main Axis (Əsas Ox)</h4>
            <p>Elementlərin düzüldüyü əsas istiqamət. <code>flex-direction</code> ilə təyin olunur.</p>
            <ul style="margin-top: 0.5rem; font-size: 0.9rem;">
              <li>row: üfüqi (soldan sağa)</li>
              <li>column: şaquli (yuxarıdan aşağı)</li>
            </ul>
          </div>
          <div class="info-item">
            <h4>🟢 Cross Axis (Kəsişən Ox)</h4>
            <p>Main axis-ə perpendicular (90 dərəcə) ox.</p>
            <ul style="margin-top: 0.5rem; font-size: 0.9rem;">
              <li>row → cross axis: şaquli</li>
              <li>column → cross axis: üfüqi</li>
            </ul>
          </div>
        </div>

        <div class="warning-box">
          <strong>⚠️ Vacib:</strong> <code>justify-content</code> həmişə <strong>Main Axis</strong> üzrə, <code>align-items</code> isə həmişə <strong>Cross Axis</strong> üzrə işləyir!
        </div>
      </div>

      <!-- FLEX CONTAINER XÜSUSİYYƏTLƏRİ -->
      <div class="section-card">
        <h3>🎛️ Flex Container Xüsusiyyətləri</h3>

        <h4>1. flex-direction (Əsas Oxun İstiqaməti)</h4>
        <div class="code-block">
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  
  <span class="comment">/* Varsayılan: soldan sağa */</span>
  <span class="property">flex-direction</span><span class="punctuation">:</span> <span class="value">row</span><span class="punctuation">;</span>
  
  <span class="comment">/* Sağdan sola */</span>
  <span class="comment">/* flex-direction: row-reverse; */</span>
  
  <span class="comment">/* Yuxarıdan aşağı */</span>
  <span class="comment">/* flex-direction: column; */</span>
  
  <span class="comment">/* Aşağıdan yuxarı */</span>
  <span class="comment">/* flex-direction: column-reverse; */</span>
<span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <div style="margin-bottom: 1rem;">
            <strong>row:</strong>
            <div style="display: flex; flex-direction: row; gap: 5px; margin-top: 5px;">
              <div class="flex-demo-item">1</div>
              <div class="flex-demo-item">2</div>
              <div class="flex-demo-item">3</div>
            </div>
          </div>
          <div style="margin-bottom: 1rem;">
            <strong>row-reverse:</strong>
            <div style="display: flex; flex-direction: row-reverse; gap: 5px; margin-top: 5px; justify-content: flex-end;">
              <div class="flex-demo-item">1</div>
              <div class="flex-demo-item">2</div>
              <div class="flex-demo-item">3</div>
            </div>
          </div>
          <div>
            <strong>column:</strong>
            <div style="display: flex; flex-direction: column; gap: 5px; margin-top: 5px; align-items: center;">
              <div class="flex-demo-item">1</div>
              <div class="flex-demo-item">2</div>
              <div class="flex-demo-item">3</div>
            </div>
          </div>
        </div>

        <h4>2. justify-content (Main Axis Üzrə Düzləndirmə)</h4>
        <p>Elementləri əsas ox boyunca (main axis) necə paylaşdıracaq?</p>
        
        <div class="code-block">
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  
  <span class="comment">/* Ən solda (default) */</span>
  <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">flex-start</span><span class="punctuation">;</span>
  
  <span class="comment">/* Ən sağda */</span>
  <span class="comment">/* justify-content: flex-end; */</span>
  
  <span class="comment">/* Mərkəzdə */</span>
  <span class="comment">/* justify-content: center; */</span>
  
  <span class="comment">/* Boşluqlar bərabər, kənarlarda yox */</span>
  <span class="comment">/* justify-content: space-between; */</span>
  
  <span class="comment">/* Boşluqlar bərabər, kənarlarda yarım */</span>
  <span class="comment">/* justify-content: space-around; */</span>
  
  <span class="comment">/* Bütün boşluqlar tam bərabər */</span>
  <span class="comment">/* justify-content: space-evenly; */</span>
<span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <div style="margin-bottom: 1rem;">
            <strong>flex-start:</strong>
            <div style="display: flex; justify-content: flex-start; gap: 5px; background: #f0f0f0; padding: 10px; border-radius: 4px;">
              <div class="flex-demo-item" style="width: 40px; height: 40px;">1</div>
              <div class="flex-demo-item" style="width: 40px; height: 40px;">2</div>
              <div class="flex-demo-item" style="width: 40px; height: 40px;">3</div>
            </div>
          </div>
          <div style="margin-bottom: 1rem;">
            <strong>center:</strong>
            <div style="display: flex; justify-content: center; gap: 5px; background: #f0f0f0; padding: 10px; border-radius: 4px;">
              <div class="flex-demo-item" style="width: 40px; height: 40px;">1</div>
              <div class="flex-demo-item" style="width: 40px; height: 40px;">2</div>
              <div class="flex-demo-item" style="width: 40px; height: 40px;">3</div>
            </div>
          </div>
          <div style="margin-bottom: 1rem;">
            <strong>space-between:</strong>
            <div style="display: flex; justify-content: space-between; background: #f0f0f0; padding: 10px; border-radius: 4px;">
              <div class="flex-demo-item" style="width: 40px; height: 40px;">1</div>
              <div class="flex-demo-item" style="width: 40px; height: 40px;">2</div>
              <div class="flex-demo-item" style="width: 40px; height: 40px;">3</div>
            </div>
          </div>
          <div>
            <strong>space-evenly:</strong>
            <div style="display: flex; justify-content: space-evenly; background: #f0f0f0; padding: 10px; border-radius: 4px;">
              <div class="flex-demo-item" style="width: 40px; height: 40px;">1</div>
              <div class="flex-demo-item" style="width: 40px; height: 40px;">2</div>
              <div class="flex-demo-item" style="width: 40px; height: 40px;">3</div>
            </div>
          </div>
        </div>

        <h4>3. align-items (Cross Axis Üzrə Düzləndirmə)</h4>
        <p>Elementləri kəsişən ox boyunca (cross axis) necə düzləndirəcək?</p>
        
        <div class="code-block">
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="value">200px</span><span class="punctuation">;</span>  <span class="comment">/* Hündürlük vacibdir! */</span>
  
  <span class="comment">/* Container hündürlüyünə bərabər uzanır (default) */</span>
  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">stretch</span><span class="punctuation">;</span>
  
  <span class="comment">/* Yuxarıda */</span>
  <span class="comment">/* align-items: flex-start; */</span>
  
  <span class="comment">/* Aşağıda */</span>
  <span class="comment">/* align-items: flex-end; */</span>
  
  <span class="comment">/* Mərkəzdə (Ən çox istifadə olunan!) */</span>
  <span class="comment">/* align-items: center; */</span>
  
  <span class="comment">/* Mətnin əsas xətti boyunca */</span>
  <span class="comment">/* align-items: baseline; */</span>
<span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
            <div>
              <strong>flex-start</strong>
              <div style="display: flex; align-items: flex-start; height: 150px; background: #f0f0f0; padding: 10px; gap: 5px;">
                <div class="flex-demo-item" style="height: 40px;">1</div>
                <div class="flex-demo-item" style="height: 60px;">2</div>
                <div class="flex-demo-item" style="height: 50px;">3</div>
              </div>
            </div>
            <div>
              <strong>center</strong>
              <div style="display: flex; align-items: center; height: 150px; background: #f0f0f0; padding: 10px; gap: 5px;">
                <div class="flex-demo-item" style="height: 40px;">1</div>
                <div class="flex-demo-item" style="height: 60px;">2</div>
                <div class="flex-demo-item" style="height: 50px;">3</div>
              </div>
            </div>
            <div>
              <strong>flex-end</strong>
              <div style="display: flex; align-items: flex-end; height: 150px; background: #f0f0f0; padding: 10px; gap: 5px;">
                <div class="flex-demo-item" style="height: 40px;">1</div>
                <div class="flex-demo-item" style="height: 60px;">2</div>
                <div class="flex-demo-item" style="height: 50px;">3</div>
              </div>
            </div>
          </div>
        </div>

        <div class="highlight-box">
          <strong>🎯 Ən Populyar Kombinasiya:</strong>
          <div class="code-block" style="margin: 0.5rem 0;">
<span class="comment">/* Tam mərkəzləşdirmə (horizontal + vertical) */</span>
<span class="selector">.center-container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>  <span class="comment">/* Horizontal */</span>
  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>      <span class="comment">/* Vertical */</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="value">100vh</span><span class="punctuation">;</span>             <span class="comment">/* Tam ekran */</span>
<span class="punctuation">}</span>
          </div>
        </div>

        <h4>4. flex-wrap (Sətirə Sığmadıqda)</h4>
        <p>Elementlər container-ə sığmadıqda nə etsin?</p>
        
        <div class="code-block">
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  
  <span class="comment">/* Varsayılan: sığdırmaq üçün kiçilt (default) */</span>
  <span class="property">flex-wrap</span><span class="punctuation">:</span> <span class="value">nowrap</span><span class="punctuation">;</span>
  
  <span class="comment">/* Sığmadıqsa növbəti sətirə keç */</span>
  <span class="comment">/* flex-wrap: wrap; */</span>
  
  <span class="comment">/* Sətirə keç, amma tərs sırayla */</span>
  <span class="comment">/* flex-wrap: wrap-reverse; */</span>
<span class="punctuation">}</span>
        </div>

        <h4>5. gap (Elementlər Arası Boşluq)</h4>
        <p>Flex item-lər arasında boşluq yaratmaq üçün ən asan yol:</p>
        
        <div class="code-block">
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  
  <span class="comment">/* Həm üfüqi, həm şaquli boşluq */</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
  
  <span class="comment">/* Və ya ayrı-ayrı */</span>
  <span class="comment">/* row-gap: 20px; */</span>
  <span class="comment">/* column-gap: 10px; */</span>
  
  <span class="comment">/* Shorthand: row-gap column-gap */</span>
  <span class="comment">/* gap: 20px 10px; */</span>
<span class="punctuation">}</span>
        </div>

        <div class="tip-box">
          <strong>💡 Üstünlüyü:</strong> <code>gap</code> margin-dən fərqli olaraq yalnız elementlər <strong>arasında</strong> boşluq yaradır, kənarlarda yox. Bu səbəbdən responsiv dizayn üçün daha uyğundur.
        </div>
      </div>

      <!-- FLEX ITEM XÜSUSİYYƏTLƏRİ -->
      <div class="section-card">
        <h3>📦 Flex Item Xüsusiyyətləri</h3>
        <p>Bu xüsusiyyətlər birbaşa flex item-lərə (uşaq elementlərə) tətbiq olunur.</p>

        <h4>1. flex-grow (Böyümə Nisbəti)</h4>
        <p>Artıq boşluğu necə bölüşdürsün?</p>
        
        <div class="code-block">
<span class="selector">.item1</span> <span class="punctuation">{</span> <span class="property">flex-grow</span><span class="punctuation">:</span> <span class="value">1</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* 1 hissə */</span>
<span class="selector">.item2</span> <span class="punctuation">{</span> <span class="property">flex-grow</span><span class="punctuation">:</span> <span class="value">2</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* 2 hissə (ikiqat böyüyür) */</span>
<span class="selector">.item3</span> <span class="punctuation">{</span> <span class="property">flex-grow</span><span class="punctuation">:</span> <span class="value">1</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* 1 hissə */</span>
        </div>

        <div class="visual-demo">
          <div style="display: flex; gap: 10px; background: #f0f0f0; padding: 10px;">
            <div style="flex-grow: 1; background: #667eea; color: white; padding: 20px; text-align: center; border-radius: 4px;">flex-grow: 1</div>
            <div style="flex-grow: 2; background: #764ba2; color: white; padding: 20px; text-align: center; border-radius: 4px;">flex-grow: 2</div>
            <div style="flex-grow: 1; background: #667eea; color: white; padding: 20px; text-align: center; border-radius: 4px;">flex-grow: 1</div>
          </div>
        </div>

        <h4>2. flex-shrink (Kiçilmə İcazəsi)</h4>
        <p>Container kiçildikdə item də kiçilsinmi?</p>
        
        <div class="code-block">
<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="property">flex-shrink</span><span class="punctuation">:</span> <span class="value">1</span><span class="punctuation">;</span>   <span class="comment">/* Kiçilə bilər (default) */</span>
  <span class="comment">/* flex-shrink: 0; */</span>  <span class="comment">/* Kiçilməz, scroll yaranar */</span>
<span class="punctuation">}</span>
        </div>

        <h4>3. flex-basis (İlkin Ölçü)</h4>
        <p>Elementin başlanğıc ölçüsü (width və ya height kimi):</p>
        
        <div class="code-block">
<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="property">flex-basis</span><span class="punctuation">:</span> <span class="value">200px</span><span class="punctuation">;</span>   <span class="comment">/* row-da = width, column-da = height */</span>
  <span class="comment">/* flex-basis: auto; */</span>  <span class="comment">/* Content ölçüsü */</span>
  <span class="comment">/* flex-basis: 50%; */</span>   <span class="comment">/* Container-in 50%-i */</span>
<span class="punctuation">}</span>
        </div>

        <h4>4. flex (Shorthand)</h4>
        <p>Üç xüsusiyyəti birlikdə yazmaq:</p>
        
        <div class="code-block">
<span class="selector">.item</span> <span class="punctuation">{</span>
  <span class="comment">/* flex: grow shrink basis; */</span>
  <span class="property">flex</span><span class="punctuation">:</span> <span class="value">1 0 200px</span><span class="punctuation">;</span>
  
  <span class="comment">/* Ən çox istifadə olunanlar: */</span>
  <span class="property">flex</span><span class="punctuation">:</span> <span class="value">1</span><span class="punctuation">;</span>        <span class="comment">/* flex: 1 1 0; Bərabər böyü */</span>
  <span class="property">flex</span><span class="punctuation">:</span> <span class="value">auto</span><span class="punctuation">;</span>     <span class="comment">/* flex: 1 1 auto; */</span>
  <span class="property">flex</span><span class="punctuation">:</span> <span class="value">none</span><span class="punctuation">;</span>     <span class="comment">/* flex: 0 0 auto; Sabit ölçü */</span>
<span class="punctuation">}</span>
        </div>

        <h4>5. align-self (Fərdi Düzləndirmə)</h4>
        <p>Tək bir item-i digərlərindən fərqli düzləndirmək:</p>
        
        <div class="code-block">
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>  <span class="comment">/* Bütün item-lər mərkəzdə */</span>
<span class="punctuation">}</span>

<span class="selector">.special-item</span> <span class="punctuation">{</span>
  <span class="property">align-self</span><span class="punctuation">:</span> <span class="value">flex-start</span><span class="punctuation">;</span>  <span class="comment">/* Bu item yuxarıda */</span>
  <span class="comment">/* align-self: stretch; */</span>
  <span class="comment">/* align-self: flex-end; */</span>
<span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <div style="display: flex; align-items: center; height: 150px; background: #f0f0f0; padding: 10px; gap: 10px;">
            <div class="flex-demo-item" style="height: 40px;">Normal</div>
            <div class="flex-demo-item" style="align-self: flex-start; height: 40px;">flex-start</div>
            <div class="flex-demo-item" style="height: 40px;">Normal</div>
            <div class="flex-demo-item" style="align-self: flex-end; height: 40px;">flex-end</div>
            <div class="flex-demo-item" style="height: 40px;">Normal</div>
          </div>
        </div>

        <h4>6. order (Sıra Nömrəsi)</h4>
        <p>Elementlərin vizual sırasını dəyişmək (HTML-i dəyişmədən!):</p>
        
        <div class="code-block">
<span class="comment">/* HTML sırası: 1, 2, 3 */</span>
<span class="comment">/* Vizual sıra: 3, 1, 2 */</span>

<span class="selector">.item1</span> <span class="punctuation">{</span> <span class="property">order</span><span class="punctuation">:</span> <span class="value">2</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* Ortada */</span>
<span class="selector">.item2</span> <span class="punctuation">{</span> <span class="property">order</span><span class="punctuation">:</span> <span class="value">3</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* Sonda */</span>
<span class="selector">.item3</span> <span class="punctuation">{</span> <span class="property">order</span><span class="punctuation">:</span> <span class="value">1</span><span class="punctuation">;</span> <span class="punctuation">}</span>  <span class="comment">/* Əvvəldə */</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ Diqqət:</strong> <code>order</code> yalnız <strong>vizual</strong> sıranı dəyişir. Ekran oxuyucular və klaviatura naviqasiyası hələ də HTML sırasına uyğun işləyir. Əlçatanlıq üçün HTML-i düzgün sıralayın, order yalnız vizual effekt üçün istifadə edin.
        </div>
      </div>

      <!-- PRAKTİKİ NÜMUNƏLƏR -->
      <div class="section-card">
        <h3>🛠️ Praktiki Nümunələr</h3>

        <h4>1. Tam Mərkəzləşdirmə (Holy Grail)</h4>
        <p>Horizontal və vertikal mərkəzləşdirmənin ən asan yolu:</p>
        
        <div class="code-block">
<span class="selector">.center-container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
  <span class="property">min-height</span><span class="punctuation">:</span> <span class="value">100vh</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4>2. Naviqasiya Barı</h4>
        <p>Logo ortada, linklər sağda:</p>
        
        <div class="code-block">
<span class="selector">.navbar</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">space-between</span><span class="punctuation">;</span>
  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">1rem 2rem</span><span class="punctuation">;</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#2c3e50</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.nav-links</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">2rem</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4>3. Responsiv Kartlar</h4>
        <p>3 sütunlu grid, mobildə 1 sütun:</p>
        
        <div class="code-block">
<span class="selector">.card-container</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">flex-wrap</span><span class="punctuation">:</span> <span class="value">wrap</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">20px</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.card</span> <span class="punctuation">{</span>
  <span class="property">flex</span><span class="punctuation">:</span> <span class="value">1 1 calc(33.333% - 20px)</span><span class="punctuation">;</span>  <span class="comment">/* 3 sütun */</span>
  <span class="property">min-width</span><span class="punctuation">:</span> <span class="value">280px</span><span class="punctuation">;</span>  <span class="comment">/* Minimum ölçü */</span>
<span class="punctuation">}</span>

<span class="comment">/* Mobil: 1 sütun */</span>
<span class="selector">@media</span> <span class="punctuation">(</span><span class="property">max-width</span><span class="punctuation">:</span> <span class="value">768px</span><span class="punctuation">)</span> <span class="punctuation">{</span>
  <span class="selector">.card</span> <span class="punctuation">{</span>
    <span class="property">flex</span><span class="punctuation">:</span> <span class="value">1 1 100%</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <h4>4. Sidebar Layout</h4>
        <p>Sabit sidebar, dəyişən məzmun:</p>
        
        <div class="code-block">
<span class="selector">.layout</span> <span class="punctuation">{</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">min-height</span><span class="punctuation">:</span> <span class="value">100vh</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.sidebar</span> <span class="punctuation">{</span>
  <span class="property">flex</span><span class="punctuation">:</span> <span class="value">0 0 250px</span><span class="punctuation">;</span>  <span class="comment">/* Sabit 250px, böyüməz, kiçilməz */</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#2c3e50</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.main-content</span> <span class="punctuation">{</span>
  <span class="property">flex</span><span class="punctuation">:</span> <span class="value">1</span><span class="punctuation">;</span>  <span class="comment">/* Qalan bütün boşluğu tut */</span>
  <span class="property">padding</span><span class="punctuation">:</span> <span class="value">2rem</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>
      </div>

      <!-- MÜQAYİSƏ CƏDVƏLİ -->
      <div class="section-card">
        <h3>📊 Bütün Xüsusiyyətlər Cədvəli</h3>
        
        <h4>Container Xüsusiyyətləri:</h4>
        <table class="comparison-table">
          <tr>
            <th>Xüsusiyyət</th>
            <th>Default</th>
            <th>Təsvir</th>
          </tr>
          <tr>
            <td><span class="property-badge">display</span></td>
            <td>block</td>
            <td>flex və ya inline-flex</td>
          </tr>
          <tr>
            <td><span class="property-badge">flex-direction</span></td>
            <td>row</td>
            <td>row, row-reverse, column, column-reverse</td>
          </tr>
          <tr>
            <td><span class="property-badge">flex-wrap</span></td>
            <td>nowrap</td>
            <td>nowrap, wrap, wrap-reverse</td>
          </tr>
          <tr>
            <td><span class="property-badge">justify-content</span></td>
            <td>flex-start</td>
            <td>Main axis üzrə düzləndirmə</td>
          </tr>
          <tr>
            <td><span class="property-badge">align-items</span></td>
            <td>stretch</td>
            <td>Cross axis üzrə düzləndirmə</td>
          </tr>
          <tr>
            <td><span class="property-badge">align-content</span></td>
            <td>stretch</td>
            <td>Çoxsətirli layout-lar üçün</td>
          </tr>
          <tr>
            <td><span class="property-badge">gap</span></td>
            <td>0</td>
            <td>Elementlər arası boşluq</td>
          </tr>
        </table>

        <h4 style="margin-top: 1.5rem;">Item Xüsusiyyətləri:</h4>
        <table class="comparison-table">
          <tr>
            <th>Xüsusiyyət</th>
            <th>Default</th>
            <th>Təsvir</th>
          </tr>
          <tr>
            <td><span class="property-badge">flex-grow</span></td>
            <td>0</td>
            <td>Böyümə nisbəti</td>
          </tr>
          <tr>
            <td><span class="property-badge">flex-shrink</span></td>
            <td>1</td>
            <td>Kiçilmə icazəsi</td>
          </tr>
          <tr>
            <td><span class="property-badge">flex-basis</span></td>
            <td>auto</td>
            <td>İlkin ölçü</td>
          </tr>
          <tr>
            <td><span class="property-badge">flex</span></td>
            <td>0 1 auto</td>
            <td>Shorthand (grow shrink basis)</td>
          </tr>
          <tr>
            <td><span class="property-badge">align-self</span></td>
            <td>auto</td>
            <td>Fərdi düzləndirmə</td>
          </tr>
          <tr>
            <td><span class="property-badge">order</span></td>
            <td>0</td>
            <td>Sıra nömrəsi</td>
          </tr>
        </table>
      </div>

      <!-- YEKUN -->
      <div class="section-card" style="border-left-color: #48bb78;">
        <h3>🎉 Təbriklər!</h3>
        <p>Flexbox-u öyrəndiniz! İndi bilirsiniz:</p>
        <ul class="check-list">
          <li>Flex container və flex item arasındakı fərqi</li>
          <li>Main axis və cross axis konseptini</li>
          <li>justify-content və align-items istifadəsini</li>
          <li>flex-grow, flex-shrink və flex-basis-i</li>
          <li>Responsiv kartlar və naviqasiya yaratmağı</li>
          <li>Tam mərkəzləşdirmə texnikasını</li>
        </ul>
        
        <div class="tip-box" style="margin-top: 1rem;">
          <strong>🚀 Növbəti Addım:</strong> CSS Grid ilə tanış olun! Flexbox bir ölçülü, Grid isə iki ölçülü layout-lar üçündür. İkisini birlikdə istifadə edərək professional dizaynlar yarada bilərsiniz.
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
    <title>Flexbox Masterclass</title>
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
            color: #333;
            background: #f5f5f5;
        }

        /* ==========================================
           1. TAM MƏRKƏZLƏŞDİRMƏ HERO
           ========================================== */
        .hero {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-content p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        /* ==========================================
           2. NAVİQASİYA BAR
           ========================================== */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 5%;
            background: #2d3748;
            color: white;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #667eea;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #667eea;
        }

        .nav-cta {
            background: #667eea;
            color: white;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .nav-cta:hover {
            background: #764ba2;
        }

        /* ==========================================
           3. RESPONSİV KARTLAR
           ========================================== */
        .features {
            padding: 4rem 5%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .features h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #2d3748;
        }

        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: center;
        }

        .card {
            flex: 1 1 calc(33.333% - 30px);
            min-width: 280px;
            max-width: 350px;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .card-image {
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
        }

        .card-content {
            padding: 1.5rem;
        }

        .card-content h3 {
            margin-bottom: 0.5rem;
            color: #2d3748;
        }

        .card-content p {
            color: #718096;
            line-height: 1.6;
        }

        /* ==========================================
           4. STATİSTİKA BÖLMƏSİ
           ========================================== */
        .stats {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 4rem 5%;
            background: #2d3748;
            color: white;
            flex-wrap: wrap;
            gap: 2rem;
        }

        .stat-item {
            text-align: center;
            flex: 1 1 200px;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: bold;
            color: #667eea;
            display: block;
        }

        .stat-label {
            font-size: 1.1rem;
            opacity: 0.8;
        }

        /* ==========================================
           5. FLEX GROW NÜMUNƏSİ
           ========================================== */
        .grow-demo {
            padding: 4rem 5%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .grow-demo h2 {
            text-align: center;
            margin-bottom: 2rem;
        }

        .grow-container {
            display: flex;
            gap: 10px;
            background: #edf2f7;
            padding: 20px;
            border-radius: 8px;
        }

        .grow-item {
            padding: 2rem;
            color: white;
            text-align: center;
            border-radius: 8px;
            transition: flex-grow 0.3s;
        }

        .grow-item:hover {
            flex-grow: 2 !important;
        }

        .grow-item:nth-child(1) {
            background: #667eea;
            flex: 1;
        }

        .grow-item:nth-child(2) {
            background: #764ba2;
            flex: 2;
        }

        .grow-item:nth-child(3) {
            background: #f5576c;
            flex: 1;
        }

        /* ==========================================
           RESPONSIVE DIZAYN
           ========================================== */
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2rem;
            }

            .navbar {
                flex-direction: column;
                gap: 1rem;
            }

            .nav-links {
                gap: 1rem;
            }

            .card {
                flex: 1 1 100%;
            }

            .grow-container {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <!-- Naviqasiya -->
    <nav class="navbar">
        <div class="logo">🚀 FlexMaster</div>
        <ul class="nav-links">
            <li><a href="#home">Ana səhifə</a></li>
            <li><a href="#features">Xüsusiyyətlər</a></li>
            <li><a href="#stats">Statistika</a></li>
            <li><a href="#demo">Demo</a></li>
        </ul>
        <button class="nav-cta">Başla</button>
    </nav>

    <!-- Hero -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Flexbox ilə Qəhrəman Olun</h1>
            <p>CSS-in ən güclü layout alətini mənimsəyin və veb dizaynınızı dəyişdirin</p>
            <a href="#features" class="btn">Kəşf Et</a>
        </div>
    </section>

    <!-- Features -->
    <section class="features" id="features">
        <h2>Niyə Flexbox?</h2>
        <div class="card-container">
            <article class="card">
                <div class="card-image">📐</div>
                <div class="card-content">
                    <h3>Asan Düzləndirmə</h3>
                    <p>Elementləri bir sətir kodla mərkəzləşdirin. Horizontal və vertikal düzləndirmə artıq problem deyil.</p>
                </div>
            </article>
            <article class="card">
                <div class="card-image">📱</div>
                <div class="card-content">
                    <h3>Responsiv Dizayn</h3>
                    <p>flex-wrap və media query ilə hər ölçüdə mükəmməl görünən layout-lar yaradın.</p>
                </div>
            </article>
            <article class="card">
                <div class="card-image">⚡</div>
                <div class="card-content">
                    <h3>Sürətli İnkişaf</h3>
                    <p>Kodunuzu azaldın, sürətinizi artırın. Flexbox ilə daha az CSS daha çox iş görün.</p>
                </div>
            </article>
        </div>
    </section>

    <!-- Stats -->
    <section class="stats" id="stats">
        <div class="stat-item">
            <span class="stat-number">98%</span>
            <span class="stat-label">Brauzer Dəstəyi</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">50%</span>
            <span class="stat-label">Daha Az Kod</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">İmkanlar</span>
        </div>
    </section>

    <!-- Grow Demo -->
    <section class="grow-demo" id="demo">
        <h2>flex-grow Nümunəsi (Hover edin!)</h2>
        <div class="grow-container">
            <div class="grow-item">flex: 1</div>
            <div class="grow-item">flex: 2 (İkiqat böyüyür)</div>
            <div class="grow-item">flex: 1</div>
        </div>
    </section>
</body>
</html>`,
    
    css: `/* Bu fayl boş qala bilər, çünki bütün CSS HTML-in içindədir */
/* Və ya əlavə stillər burada yazıla bilər */`,
    
    js: `// Flexbox interaktiv demo

document.addEventListener('DOMContentLoaded', function() {
    
    // Kart hover effekti üçün əlavə animasiya
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Klikləndikdə order dəyiş
        card.addEventListener('click', function() {
            // Bütün kartlardan active klasını çıxar
            cards.forEach(c => {
                c.style.order = '0';
                c.style.transform = 'scale(1)';
            });
            
            // Kliklənəni önə çıxar
            this.style.order = '-1';
            this.style.transform = 'scale(1.05)';
            
            console.log('Kart ' + (index + 1) + ' seçildi');
        });
    });

    // Naviqasiya linklərinin aktiv vəziyyəti
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Bütün linklərdən aktiv stili çıxar
            navLinks.forEach(l => l.style.color = '');
            
            // Kliklənənə aktiv stil ver
            this.style.color = '#667eea';
            
            // Hədəf bölməyə scroll et
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if(targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Statistik animasiya
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            stat.style.opacity = '0';
            stat.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                stat.style.transition = 'all 0.5s';
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0)';
            }, 200);
        });
    };

    // Stats bölməsi göründükdə animasiya başlat
    const statsSection = document.querySelector('.stats');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    
    if(statsSection) {
        observer.observe(statsSection);
    }

    // Grow item-lərə klik effekti
    const growItems = document.querySelectorAll('.grow-item');
    growItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const currentFlex = this.style.flexGrow;
            this.style.flexGrow = currentFlex === '3' ? '1' : '3';
            console.log('Item ' + (index + 1) + ' yeni flex-grow: ' + this.style.flexGrow);
        });
    });

    console.log('%c🎯 Flexbox Masterclass yükləndi!', 'font-size: 16px; color: #667eea; font-weight: bold;');
    console.log('%cKartlara və grow item-lərə klikləməyi sınayın', 'font-size: 12px; color: #666;');
});`
  },

  exercise: {
    title: "Professional Portfolio Grid Yarat",
    description: "Flexbox istifadə edərək 3 sütunlu responsiv portfolio grid yaradın. Hər layihə üçün kart olmalı və hover effekti ilə böyüməlidir. Mobil cihazlarda 1 sütun olmalıdır.",
    requirements: [
      "Flex container yaradın (display: flex)",
      "flex-wrap: wrap istifadə edin ki, elementlər sığmadıqda aşağı düşsün",
      "Kartlar üçün flex: 1 1 300px (və ya %) istifadə edin",
      "gap: 30px ilə elementlər arası boşluq yaradın",
      "justify-content: center və ya space-between istifadə edin",
      "Hər kartda şəkil, başlıq, qısa təsvir və 'Ətraflı' düyməsi olsun",
      "Kart hover edəndə transform: translateY(-10px) effekti əlavə edin",
      "box-shadow ilə hover zamanı kölgə artırın",
      "@media (max-width: 768px) query-sində kartları 100% width edin",
      "align-items: stretch ilə bərabər hündürlük yaradın",
      "Şəkil üçün object-fit: cover istifadə edin",
      "Kart content-i üçün flex-direction: column və flex-grow: 1 istifadə edin",
      "Düyməni kartın altına yapışdırmaq üçün margin-top: auto istifadə edin",
      "Naviqasiya üçün ayrı flex container yaradın",
      "Statik header üçün position: sticky və top: 0 istifadə edin"
    ],
    starterCode: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | Flexbox</title>
    <style>
        /* BURAYA CSS KODUNUZU YAZIN */
        
        /* 1. Reset və base stillər */
        
        /* 2. Header və naviqasiya (flex) */
        
        /* 3. Hero bölməsi (tam mərkəzləşdirmə) */
        
        /* 4. Portfolio grid (flex container) */
        
        /* 5. Kart stilləri */
        
        /* 6. Responsive media query */
        
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav>
            <!-- Logo və naviqasiya linkləri -->
        </nav>
    </header>

    <!-- Hero -->
    <section class="hero">
        <h1>Portfolio</h1>
        <p>Son layihələrim</p>
    </section>

    <!-- Portfolio Grid -->
    <section class="portfolio">
        <article class="project-card">
            <img src="https://via.placeholder.com/400x300" alt="Layihə 1">
            <h2>Layihə 1</h2>
            <p>Qısa təsvir...</p>
            <button>Ətraflı</button>
        </article>
        
        <!-- Daha 5-6 kart əlavə edin -->
        
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Portfolio</p>
    </footer>
</body>
</html>`
  },

  quiz: [
    {
      question: "Flexbox container yaratmaq üçün hansı xüsusiyyət istifadə olunur?",
      options: ["display: block", "display: flex", "display: grid", "position: relative"],
      correctAnswer: 1,
      explanation: "display: flex bir elementi flex container-ə çevirir və birbaşa uşaq elementlərini flex item-lərə çevirir."
    },
    {
      question: "justify-content xüsusiyyəti hansı ox üzrə düzləndirmə edir?",
      options: ["Cross axis", "Main axis", "Z axis", "Diagonal axis"],
      correctAnswer: 1,
      explanation: "justify-content həmişə main axis (əsas ox) üzrə işləyir. flex-direction: row-də bu üfüqi, column-da isə şaqulidir."
    },
    {
      question: "Elementlərin vizual sırasını dəyişmək üçün hansı xüsusiyyət istifadə olunur?",
      options: ["flex-order", "order", "z-index", "sequence"],
      correctAnswer: 1,
      explanation: "order xüsusiyyəti flex item-lərin vizual sırasını dəyişdirir. Default dəyər 0-dır, mənfi dəyərlər əvvələ, müsbət dəyərlər sona atır."
    },
    {
      question: "flex-direction: column verildikdə main axis hansı istiqamətdə olur?",
      options: ["Üfüqi (soldan sağa)", "Şaquli (yuxarıdan aşağı)", "Diaqonal", "Mərkəzdən xaricə"],
      correctAnswer: 1,
      explanation: "flex-direction: column olduqda main axis şaquli olur (yuxarıdan aşağı), cross axis isə üfüqi olur."
    },
    {
      question: "space-between dəyəri nə edir?",
      options: ["Bütün boşluqları bərabər bölür", "İlk elementi sola, son elementi sağa çəkir, aralarını bərabər bölür", "Hər element ətrafında eyni boşluq yaradır", "Elementləri tam mərkəzləşdirir"],
      correctAnswer: 1,
      explanation: "space-between ilk elementi başlanğıca, son elementi sona çəkir və qalan boşluğu digər elementlər arasında bərabər bölür."
    },
    {
      question: "align-items: stretch default dəyərdir. Bu nə deməkdir?",
      options: ["Elementlər uzanır", "Elementlər container-in cross axis ölçüsünə bərabər uzanır", "Elementlər kiçilir", "Elementlər gizlənir"],
      correctAnswer: 1,
      explanation: "stretch dəyəri flex item-lərin cross axis boyunca container-in ölçüsünə bərabər uzanmasını təmin edir (əgər hündürlük təyin olunmayıbsa)."
    },
    {
      question: "flex: 1 0 200px ifadəsində 1 nəyi göstərir?",
      options: ["flex-shrink", "flex-grow", "flex-basis", "order"],
      correctAnswer: 1,
      explanation: "flex shorthand-i 3 dəyər qəbul edir: flex-grow, flex-shrink, flex-basis. İlk dəyər (1) flex-grow-dur."
    },
    {
      question: "Hansı xüsusiyyət yalnız bir flex item-ə tətbiq olunur?",
      options: ["justify-content", "align-items", "align-self", "flex-wrap"],
      correctAnswer: 2,
      explanation: "align-self tək bir flex item-in cross axis üzrə düzləndirməsini dəyişməyə imkan verir. Digərləri container xüsusiyyətləridir."
    },
    {
      question: "gap xüsusiyyəti nə üçün istifadə olunur?",
      options: ["Margin əvəzi", "Flex item-lər arası boşluq yaratmaq", "Padding yaratmaq", "Border boşluğu"],
      correctAnswer: 1,
      explanation: "gap flex item-lər arasında boşluq yaradır. Margin-dən fərqli olaraq kənarlarda boşluq yaratmır, yalnız elementlər arasında."
    },
    {
      question: "flex-wrap: wrap nə edir?",
      options: ["Elementləri gizlədir", "Elementlər container-ə sığmadıqda növbəti sətirə/sütuna keçirir", "Elementləri kiçildir", "Scroll yaratır"],
      correctAnswer: 1,
      explanation: "flex-wrap: wrap elementlərin container-ə sığmadıqda növbəti sətirə (row-də) və ya sütuna (column-da) keçməsinə icazə verir."
    }
  ]
};

export default topic3;