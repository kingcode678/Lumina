export const topic6 = {
  id: 6,
  title: "CSS Animations və Transitions",
  duration: "70 dəq",
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
        background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
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
        border-left: 5px solid #8b5cf6;
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
      .code-block .at-rule { color: #f472b6; font-weight: 600; }
      
      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }
      
      .info-item {
        background: #f3e8ff;
        padding: 1.5rem;
        border-radius: 10px;
        border: 2px solid #8b5cf6;
      }
      
      .info-item h4 {
        margin: 0 0 0.75rem 0;
        color: #6d28d9;
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
      
      .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 1.05rem;
      }
      
      .comparison-table th {
        background: #6d28d9;
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
        background: #f3e8ff;
      }
      
      .property-badge {
        display: inline-block;
        background: #f3e8ff;
        color: #6d28d9;
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        font-family: monospace;
        font-size: 1rem;
        font-weight: 600;
        margin: 0.25rem;
        border: 2px solid #8b5cf6;
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
        background: #8b5cf6;
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
        color: #8b5cf6;
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
      
      .vs-transition {
        background: #dbeafe;
        border: 3px solid #3b82f6;
      }
      
      .vs-transition h4 {
        color: #1d4ed8;
      }
      
      .vs-animation {
        background: #f3e8ff;
        border: 3px solid #8b5cf6;
      }
      
      .vs-animation h4 {
        color: #6d28d9;
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
      
      .demo-box {
        background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
        color: white;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        margin: 1rem auto;
        max-width: 200px;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      
      .demo-box:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
      }
      
      .timing-visual {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1.5rem 0;
      }
      
      .timing-bar {
        height: 40px;
        background: #e2e8f0;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
      }
      
      .timing-fill {
        height: 100%;
        background: linear-gradient(90deg, #8b5cf6 0%, #6d28d9 100%);
        border-radius: 6px;
        width: 0;
        animation: timingDemo 2s infinite;
      }
      
      .timing-label {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-weight: 600;
        color: #1e293b;
        z-index: 1;
      }
      
      @keyframes timingDemo {
        to { width: 100%; }
      }
      
      .ease-linear { animation-timing-function: linear; }
      .ease-in { animation-timing-function: ease-in; }
      .ease-out { animation-timing-function: ease-out; }
      .ease-in-out { animation-timing-function: ease-in-out; }
      
      code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-family: monospace;
        color: #6d28d9;
        font-weight: 600;
        font-size: 0.95em;
      }
      
      .transform-demo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }
      
      .transform-card {
        background: white;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        padding: 1.5rem;
        text-align: center;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      
      .transform-card:hover {
        border-color: #8b5cf6;
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
      }
      
      .transform-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
        color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin: 0 auto 1rem;
        transition: all 0.5s ease;
      }
      
      .transform-card:hover .translate-icon { transform: translate(20px, -20px); }
      .transform-card:hover .rotate-icon { transform: rotate(45deg); }
      .transform-card:hover .scale-icon { transform: scale(1.3); }
      .transform-card:hover .skew-icon { transform: skew(15deg, 10deg); }
    </style>

    <div class="topic-container">
      <!-- GİRİŞ -->
      <div class="intro-box">
        <h2>✨ CSS Animations və Transitions Dünyasına Xoş Gəlmisiniz!</h2>
        <p>Saytlarınıza həyat verin! İstifadəçi təcrübəsini artıran, professional görünüşlü animasiyalar və keçidlər yaradın. Statik dizayndan dinamik təcrübəyə keçid!</p>
      </div>

      <!-- TRANSITIONS VS ANIMATIONS -->
      <div class="section-card">
        <h3>🤔 Transition vs Animation - Hansını İstifadə Etməli?</h3>
        
        <div class="vs-box">
          <div class="vs-item vs-transition">
            <h4>🔄 Transition</h4>
            <p style="font-size: 1rem;"><strong>Keçid</strong></p>
            <p style="font-size: 0.95rem;">A → B vəziyyətləri arası</p>
            <p style="font-size: 0.95rem; margin-top: 0.5rem;">Hover, focus, active</p>
            <p style="font-size: 0.95rem;">2 vəziyyət arası</p>
          </div>
          <div class="vs-item vs-animation">
            <h4>🎬 Animation</h4>
            <p style="font-size: 1rem;"><strong>Animasiya</strong></p>
            <p style="font-size: 0.95rem;">Mürəkkəb hərəkət dizaynı</p>
            <p style="font-size: 0.95rem; margin-top: 0.5rem;">Keyframes ilə</p>
            <p style="font-size: 0.95rem;">Çoxlu vəziyyət (0% - 100%)</p>
          </div>
        </div>

        <div class="highlight-box">
          <strong>💡 Real Həyat Təsviri:</strong>
          <p style="margin-top: 0.5rem;"><strong>Transition</strong> qapının açılması kimidir - bağlıdan açığa keçid. <strong>Animation</strong> isə rəqs nömrəsi kimidir - əvvəldən sona qədər planlaşdırılmış hərəkətlər.</p>
        </div>

        <h4>Nə Vaxt Hansını İstifadə Etməli?</h4>
        <ul class="check-list">
          <li><strong>Transition:</strong> Hover effektləri, düymə basılmaları, form fokusları</li>
          <li><strong>Animation:</strong> Loading spinner-lər, banner slider-ləri, mürəkkəb təqdimatlar</li>
          <li><strong>Hər ikisi:</strong> Scroll effektləri, parallax, micro-interactions</li>
        </ul>
      </div>

      <!-- TRANSITIONS -->
      <div class="section-card">
        <h3>🔄 CSS Transitions - Sərt Keçidlərə Son!</h3>
        <p style="font-size: 1.1rem;"><strong>Transition</strong> CSS xüsusiyyətinin bir dəyərdən başqa dəyərə <strong>hamar</strong> keçməsini təmin edir.</p>

        <h4>Əsas Sintaksis</h4>
        <div class="code-block">
<span class="comment">/* Qısa yazılış */</span>
<span class="selector">.element</span> <span class="punctuation">{</span>
  <span class="property">transition</span><span class="punctuation">:</span> <span class="value">property duration timing-function delay</span><span class="punctuation">;</span>
  <span class="comment">/* transition: all 0.3s ease-in-out 0s; */</span>
<span class="punctuation">}</span>

<span class="comment">/* Tam yazılış */</span>
<span class="selector">.element</span> <span class="punctuation">{</span>
  <span class="property">transition-property</span><span class="punctuation">:</span> <span class="value">all</span><span class="punctuation">;</span>           <span class="comment">/* Və ya background, transform, opacity */</span>
  <span class="property">transition-duration</span><span class="punctuation">:</span> <span class="number">0.3</span><span class="value">s</span><span class="punctuation">;</span>        <span class="comment">/* Saniyə və ya millisaniyə (300ms) */</span>
  <span class="property">transition-timing-function</span><span class="punctuation">:</span> <span class="value">ease</span><span class="punctuation">;</span>  <span class="comment">/* Sürət qrafiki */</span>
  <span class="property">transition-delay</span><span class="punctuation">:</span> <span class="number">0</span><span class="value">s</span><span class="punctuation">;</span>             <span class="comment">/* Gecikmə vaxtı */</span>
<span class="punctuation">}</span>
        </div>

        <div class="visual-demo">
          <h4 style="margin-bottom: 1rem; color: #1e293b;">Canlı Demo - Hover Edin:</h4>
          <div class="demo-box">Hover Üstümə!</div>
          <p style="margin-top: 1rem; color: #64748b; font-size: 0.9rem;">transition: all 0.3s ease</p>
        </div>

        <h4>Transition Xüsusiyyətləri - Detallı</h4>
        <div class="info-grid">
          <div class="info-item">
            <h4>transition-property</h4>
            <p>Hansı CSS xüsusiyyəti animasiya olunacaq. <code>all</code> bütün xüsusiyyətləri əhatə edir.</p>
          </div>
          <div class="info-item">
            <h4>transition-duration</h4>
            <p>Animasiyanın davametmə müddəti. <code>0.3s</code> və ya <code>300ms</code></p>
          </div>
          <div class="info-item">
            <h4>transition-timing-function</h4>
            <p>Sürətin dəyişmə qrafiki. <code>ease</code>, <code>linear</code>, <code>cubic-bezier</code></p>
          </div>
          <div class="info-item">
            <h4>transition-delay</h4>
            <p>Animasiyadan əvvəl gözləmə vaxtı. <code>0.5s</code> gecikmə</p>
          </div>
        </div>

        <div class="code-block">
<span class="comment">/* Praktiki Nümunələr */</span>

<span class="comment">/* Düymə hover effekti */</span>
<span class="selector">.btn</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#3b82f6</span><span class="punctuation">;</span>
  <span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale</span><span class="punctuation">(</span><span class="number">1</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="property">transition</span><span class="punctuation">:</span> <span class="value">background 0.3s ease</span><span class="punctuation">,</span> <span class="value">transform 0.2s ease-out</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.btn</span><span class="punctuation">:</span><span class="value">hover</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">#1d4ed8</span><span class="punctuation">;</span>
  <span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale</span><span class="punctuation">(</span><span class="number">1.05</span><span class="punctuation">)</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Multiple properties */</span>
<span class="selector">.card</span> <span class="punctuation">{</span>
  <span class="property">box-shadow</span><span class="punctuation">:</span> <span class="number">0</span> <span class="number">2</span><span class="value">px</span> <span class="number">4</span><span class="value">px</span> <span class="value">rgba</span><span class="punctuation">(</span><span class="number">0</span><span class="punctuation">,</span><span class="number">0</span><span class="punctuation">,</span><span class="number">0</span><span class="punctuation">,</span><span class="number">0.1</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateY</span><span class="punctuation">(</span><span class="number">0</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="property">transition</span><span class="punctuation">:</span> <span class="value">box-shadow 0.3s ease</span><span class="punctuation">,</span> <span class="value">transform 0.3s ease</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.card</span><span class="punctuation">:</span><span class="value">hover</span> <span class="punctuation">{</span>
  <span class="property">box-shadow</span><span class="punctuation">:</span> <span class="number">0</span> <span class="number">10</span><span class="value">px</span> <span class="number">30</span><span class="value">px</span> <span class="value">rgba</span><span class="punctuation">(</span><span class="number">0</span><span class="punctuation">,</span><span class="number">0</span><span class="punctuation">,</span><span class="number">0</span><span class="punctuation">,</span><span class="number">0.15</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateY</span><span class="punctuation">(</span><span class="number">-5</span><span class="value">px</span><span class="punctuation">)</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>
      </div>

      <!-- TIMING FUNCTIONS -->
      <div class="section-card">
        <h3>⏱️ Timing Functions - Sürət Qrafikləri</h3>
        <p style="font-size: 1.1rem;">Animasiyanın başlanğıcdan sona qədər necə sürətlənəcəyini təyin edir.</p>

        <div class="timing-visual">
          <div class="timing-bar">
            <span class="timing-label">linear - Bərabər sürət</span>
            <div class="timing-fill ease-linear"></div>
          </div>
          <div class="timing-bar">
            <span class="timing-label">ease-in - Yavaş başlayır, sürətlənir</span>
            <div class="timing-fill ease-in"></div>
          </div>
          <div class="timing-bar">
            <span class="timing-label">ease-out - Sürətli başlayır, yavaşlayır</span>
            <div class="timing-fill ease-out"></div>
          </div>
          <div class="timing-bar">
            <span class="timing-label">ease-in-out - Hər iki tərəfdə yavaş</span>
            <div class="timing-fill ease-in-out"></div>
          </div>
        </div>

        <div class="code-block">
<span class="comment">/* Hazır timing function-lar */</span>
<span class="property">transition-timing-function</span><span class="punctuation">:</span> <span class="value">linear</span><span class="punctuation">;</span>      <span class="comment">/* Bərabər sürət */</span>
<span class="property">transition-timing-function</span><span class="punctuation">:</span> <span class="value">ease</span><span class="punctuation">;</span>        <span class="comment">/* Default - yavaş-başlayır, sürətlənir, yavaşlayır */</span>
<span class="property">transition-timing-function</span><span class="punctuation">:</span> <span class="value">ease-in</span><span class="punctuation">;</span>     <span class="comment">/* Yavaş başlayır */</span>
<span class="property">transition-timing-function</span><span class="punctuation">:</span> <span class="value">ease-out</span><span class="punctuation">;</span>    <span class="comment">/* Yavaş bitir */</span>
<span class="property">transition-timing-function</span><span class="punctuation">:</span> <span class="value">ease-in-out</span><span class="punctuation">;</span> <span class="comment">/* Hər iki tərəf yavaş */</span>

<span class="comment">/* Custom cubic-bezier */</span>
<span class="property">transition-timing-function</span><span class="punctuation">:</span> <span class="value">cubic-bezier</span><span class="punctuation">(</span><span class="number">0.68</span><span class="punctuation">,</span> <span class="number">-0.55</span><span class="punctuation">,</span> <span class="number">0.265</span><span class="punctuation">,</span> <span class="number">1.55</span><span class="punctuation">)</span><span class="punctuation">;</span>
<span class="comment">/* (x1, y1, x2, y2) - Bezier əyrisi koordinatları */</span>
<span class="comment">/* yuxarıdakı nümunə: "bounce" effekti */</span>
        </div>

        <div class="tip-box">
          <strong>💡 Ən Çox İstifadə Olunan:</strong>
          <ul class="check-list">
            <li><strong>ease:</strong> Ümumi hover effektləri üçün</li>
            <li><strong>ease-out:</strong> UI elementləri girişi üçün</li>
            <li><strong>ease-in-out:</strong> Modal və dropdownlar üçün</li>
            <li><strong>cubic-bezier(0.34, 1.56, 0.64, 1):</strong> "Spring" effekti</li>
          </ul>
        </div>
      </div>

      <!-- CSS ANIMATIONS -->
      <div class="section-card">
        <h3>🎬 CSS Animations - @keyframes ilə Mürəkkəb Hərəkətlər</h3>
        <p style="font-size: 1.1rem;"><strong>@keyframes</strong> ilə çoxlu vəziyyət ardıcıllığı yaradaraq mürəkkəb animasiyalar qurun.</p>

        <h4>Əsas Sintaksis</h4>
        <div class="code-block">
<span class="comment">/* Keyframes təyin etmə */</span>
<span class="at-rule">@keyframes</span> <span class="value">slideIn</span> <span class="punctuation">{</span>
  <span class="selector">from</span> <span class="punctuation">{</span>              <span class="comment">/* 0% - Başlanğıc */</span>
    <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX</span><span class="punctuation">(</span><span class="number">-100</span><span class="value">%</span><span class="punctuation">)</span><span class="punctuation">;</span>
    <span class="property">opacity</span><span class="punctuation">:</span> <span class="number">0</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
  
  <span class="selector">to</span> <span class="punctuation">{</span>                <span class="comment">/* 100% - Son */</span>
    <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX</span><span class="punctuation">(</span><span class="number">0</span><span class="punctuation">)</span><span class="punctuation">;</span>
    <span class="property">opacity</span><span class="punctuation">:</span> <span class="number">1</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">/* Və ya faiz ilə */</span>
<span class="at-rule">@keyframes</span> <span class="value">bounce</span> <span class="punctuation">{</span>
  <span class="selector">0%</span><span class="punctuation">,</span> <span class="selector">100%</span> <span class="punctuation">{</span>
    <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateY</span><span class="punctuation">(</span><span class="number">0</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
  <span class="selector">50%</span> <span class="punctuation">{</span>
    <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateY</span><span class="punctuation">(</span><span class="number">-30</span><span class="value">px</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">/* Elementə tətbiq etmə */</span>
<span class="selector">.element</span> <span class="punctuation">{</span>
  <span class="property">animation</span><span class="punctuation">:</span> <span class="value">slideIn 0.5s ease-out forwards</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <h4>Animation Xüsusiyyətləri - Tam Siyahı</h4>
        <div class="code-block">
<span class="selector">.animated-element</span> <span class="punctuation">{</span>
  <span class="comment">/* Animasiyanın adı */</span>
  <span class="property">animation-name</span><span class="punctuation">:</span> <span class="value">slideIn</span><span class="punctuation">;</span>
  
  <span class="comment">/* Davametmə müddəti */</span>
  <span class="property">animation-duration</span><span class="punctuation">:</span> <span class="number">2</span><span class="value">s</span><span class="punctuation">;</span>
  
  <span class="comment">/* Sürət qrafiki */</span>
  <span class="property">animation-timing-function</span><span class="punctuation">:</span> <span class="value">ease</span><span class="punctuation">;</span>
  
  <span class="comment">/* Gecikmə */</span>
  <span class="property">animation-delay</span><span class="punctuation">:</span> <span class="number">0.5</span><span class="value">s</span><span class="punctuation">;</span>
  
  <span class="comment">/* Təkrar sayı: 3, infinite, və s. */</span>
  <span class="property">animation-iteration-count</span><span class="punctuation">:</span> <span class="value">infinite</span><span class="punctuation">;</span>
  
  <span class="comment">/* İstiqamət: normal, reverse, alternate, alternate-reverse */</span>
  <span class="property">animation-direction</span><span class="punctuation">:</span> <span class="value">alternate</span><span class="punctuation">;</span>
  
  <span class="comment">/* Bitiş vəziyyəti: forwards, backwards, both */</span>
  <span class="property">animation-fill-mode</span><span class="punctuation">:</span> <span class="value">forwards</span><span class="punctuation">;</span>
  
  <span class="comment">/* Oynatma vəziyyəti: running, paused */</span>
  <span class="property">animation-play-state</span><span class="punctuation">:</span> <span class="value">running</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="comment">/* Shorthand - bütün xüsusiyyətlər bir sətirdə */</span>
<span class="property">animation</span><span class="punctuation">:</span> <span class="value">slideIn 2s ease 0.5s infinite alternate forwards</span><span class="punctuation">;</span>
        </div>

        <div class="highlight-box">
          <strong>🎯 animation-fill-mode Açıqlaması:</strong>
          <ul style="margin-top: 0.5rem;">
            <li><strong>forwards:</strong> Animasiya bitdikdən sonra son keyframe vəziyyətində qalır</li>
            <li><strong>backwards:</strong> Animasiya başlamazdan əvvəl ilk keyframe vəziyyətini tətbiq edir</li>
            <li><strong>both:</strong> Həm forwards, həm backwards qaydalarını tətbiq edir</li>
          </ul>
        </div>
      </div>

      <!-- TRANSFORM FUNKSİYALARI -->
      <div class="section-card">
        <h3>🔄 Transform Funksiyaları - 2D və 3D Hərəkətlər</h3>
        <p style="font-size: 1.1rem;"><strong>Transform</strong> elementləri hərəkət etdirmək, fırlatmaq, miqyaslaşdırmaq və əymək üçün istifadə olunur.</p>

        <div class="transform-demo">
          <div class="transform-card">
            <div class="transform-icon translate-icon">↗️</div>
            <h4>Translate</h4>
            <p>Yerləşdirmə</p>
            <code>translate(x, y)</code>
          </div>
          <div class="transform-card">
            <div class="transform-icon rotate-icon">🔄</div>
            <h4>Rotate</h4>
            <p>Fırlatma</p>
            <code>rotate(deg)</code>
          </div>
          <div class="transform-card">
            <div class="transform-icon scale-icon">🔍</div>
            <h4>Scale</h4>
            <p>Miqyas</p>
            <code>scale(n)</code>
          </div>
          <div class="transform-card">
            <div class="transform-icon skew-icon">📐</div>
            <h4>Skew</h4>
            <p>Əyilmə</p>
            <code>skew(x, y)</code>
          </div>
        </div>

        <div class="code-block">
<span class="comment">/* Translate - Yerləşdirmə */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">translate</span><span class="punctuation">(</span><span class="number">50</span><span class="value">px</span><span class="punctuation">,</span> <span class="number">100</span><span class="value">px</span><span class="punctuation">)</span><span class="punctuation">;</span>   <span class="comment">/* X və Y üzrə */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX</span><span class="punctuation">(</span><span class="number">-50</span><span class="value">%</span><span class="punctuation">)</span><span class="punctuation">;</span>         <span class="comment">/* Yalnız X oxu (mərkəzləşdirmə üçün çox istifadə olunur) */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateY</span><span class="punctuation">(</span><span class="number">-20</span><span class="value">px</span><span class="punctuation">)</span><span class="punctuation">;</span>         <span class="comment">/* Yalnız Y oxu */</span>

<span class="comment">/* Scale - Miqyas */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale</span><span class="punctuation">(</span><span class="number">1.5</span><span class="punctuation">)</span><span class="punctuation">;</span>               <span class="comment">/* Həm X, həm Y 1.5 dəfə */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">scaleX</span><span class="punctuation">(</span><span class="number">2</span><span class="punctuation">)</span><span class="punctuation">;</span>                 <span class="comment">/* Yalnız en 2x */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale</span><span class="punctuation">(</span><span class="number">0</span><span class="punctuation">)</span><span class="punctuation">;</span>                 <span class="comment">/* Elementi gizlət (opacity ilə birlikdə) */</span>

<span class="comment">/* Rotate - Fırlatma */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotate</span><span class="punctuation">(</span><span class="number">45</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span>             <span class="comment">/* Saat istiqamətində 45 dərəcə */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotate</span><span class="punctuation">(</span><span class="number">-90</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span>            <span class="comment">/* Əks istiqamətdə */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotate</span><span class="punctuation">(</span><span class="number">0.5</span><span class="value">turn</span><span class="punctuation">)</span><span class="punctuation">;</span>           <span class="comment">/* Turn ilə (0.5 = 180deg) */</span>

<span class="comment">/* Skew - Əyilmə */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">skew</span><span class="punctuation">(</span><span class="number">10</span><span class="value">deg</span><span class="punctuation">,</span> <span class="number">5</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span>         <span class="comment">/* X və Y üzrə əyilmə */</span>

<span class="comment">/* Multiple transforms - Bir neçə transform birlikdə */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX</span><span class="punctuation">(</span><span class="number">-50</span><span class="value">%</span><span class="punctuation">)</span> <span class="value">translateY</span><span class="punctuation">(</span><span class="number">-50</span><span class="value">%</span><span class="punctuation">)</span> <span class="value">rotate</span><span class="punctuation">(</span><span class="number">45</span><span class="value">deg</span><span class="punctuation">)</span> <span class="value">scale</span><span class="punctuation">(</span><span class="number">1.2</span><span class="punctuation">)</span><span class="punctuation">;</span>

<span class="comment">/* Matrix - Advanced (bütün transform-ların birgə forması) */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">matrix</span><span class="punctuation">(</span><span class="number">a</span><span class="punctuation">,</span> <span class="number">b</span><span class="punctuation">,</span> <span class="number">c</span><span class="punctuation">,</span> <span class="number">d</span><span class="punctuation">,</span> <span class="number">e</span><span class="punctuation">,</span> <span class="number">f</span><span class="punctuation">)</span><span class="punctuation">;</span>
        </div>

        <div class="tip-box">
          <strong>💡 Transform Üstünlükləri:</strong>
          <ul class="check-list">
            <li>GPU tərəfindən işləndiyi üçün <strong>60fps</strong> animasiya təmin edir</li>
            <li>Elementin <strong>layout-unu dəyişmir</strong> (reflow yaratmır)</li>
            <li><strong>translate(-50%, -50%)</strong> ilə mükəmməl mərkəzləşdirmə</li>
          </ul>
        </div>
      </div>

      <!-- 3D TRANSFORMS -->
      <div class="section-card">
        <h3>🧊 3D Transforms və Perspective</h3>
        <p style="font-size: 1.1rem;">Real üçölçülü effektlər üçün 3D transform-lar və perspective istifadə olunur.</p>

        <div class="code-block">
<span class="comment">/* Perspective - 3D mühitin dərinliyi */</span>
<span class="selector">.container</span> <span class="punctuation">{</span>
  <span class="property">perspective</span><span class="punctuation">:</span> <span class="number">1000</span><span class="value">px</span><span class="punctuation">;</span>  <span class="comment">/* Kiçik dəyər = daha çox 3D effekti */</span>
<span class="punctuation">}</span>

<span class="comment">/* 3D Transformlar */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotateX</span><span class="punctuation">(</span><span class="number">45</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span>     <span class="comment">/* X oxu ətrafında fırlatma */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotateY</span><span class="punctuation">(</span><span class="number">45</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span>     <span class="comment">/* Y oxu ətrafında */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotateZ</span><span class="punctuation">(</span><span class="number">45</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span>     <span class="comment">/* Z oxu ətrafında (2D rotate kimidir) */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateZ</span><span class="punctuation">(</span><span class="number">100</span><span class="value">px</span><span class="punctuation">)</span><span class="punctuation">;</span>    <span class="comment">/* Z oxu üzrə hərəkət (yaxınlaşma) */</span>
<span class="property">transform</span><span class="punctuation">:</span> <span class="value">scaleZ</span><span class="punctuation">(</span><span class="number">1.5</span><span class="punctuation">)</span><span class="punctuation">;</span>       <span class="comment">/* Z oxu üzrə miqyas */</span>

<span class="comment">/* Transform Style - 3D mühitin qorunması */</span>
<span class="selector">.card-inner</span> <span class="punctuation">{</span>
  <span class="property">transform-style</span><span class="punctuation">:</span> <span class="value">preserve-3d</span><span class="punctuation">;</span>  <span class="comment">/* Uşaq elementlər 3D-də qalır */</span>
  <span class="comment">/* flat - uşaqlar 2D-yə çevrilir */</span>
<span class="punctuation">}</span>

<span class="comment">/* Backface Visibility - Arxa tərəfin görünməsi */</span>
<span class="selector">.card-face</span> <span class="punctuation">{</span>
  <span class="property">backface-visibility</span><span class="punctuation">:</span> <span class="value">hidden</span><span class="punctuation">;</span>  <span class="comment">/* Arxa tərəf gizlənir */</span>
  <span class="comment">/* visible - default, arxa tərəf görünür */</span>
<span class="punctuation">}</span>
        </div>

        <h4>3D Card Flip Nümunəsi</h4>
        <div class="code-block">
<span class="selector">.card-3d</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">200</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="number">280</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">perspective</span><span class="punctuation">:</span> <span class="number">1000</span><span class="value">px</span><span class="punctuation">;</span>  <span class="comment">/* 3D effekti üçün */</span>
<span class="punctuation">}</span>

<span class="selector">.card-inner</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="property">position</span><span class="punctuation">:</span> <span class="value">relative</span><span class="punctuation">;</span>
  <span class="property">transform-style</span><span class="punctuation">:</span> <span class="value">preserve-3d</span><span class="punctuation">;</span>
  <span class="property">transition</span><span class="punctuation">:</span> <span class="value">transform 0.6s</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.card-3d</span><span class="punctuation">:</span><span class="value">hover</span> <span class="selector">.card-inner</span> <span class="punctuation">{</span>
  <span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotateY</span><span class="punctuation">(</span><span class="number">180</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span>  <span class="comment">/* Hover-də fırlat */</span>
<span class="punctuation">}</span>

<span class="selector">.card-front</span><span class="punctuation">,</span> <span class="selector">.card-back</span> <span class="punctuation">{</span>
  <span class="property">position</span><span class="punctuation">:</span> <span class="value">absolute</span><span class="punctuation">;</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="number">100</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="property">backface-visibility</span><span class="punctuation">:</span> <span class="value">hidden</span><span class="punctuation">;</span>  <span class="comment">/* Arxa tərəfi gizlət */</span>
  <span class="property">border-radius</span><span class="punctuation">:</span> <span class="number">12</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
  <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
  <span class="property">font-size</span><span class="punctuation">:</span> <span class="number">20</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">font-weight</span><span class="punctuation">:</span> <span class="value">bold</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.card-front</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">linear-gradient</span><span class="punctuation">(</span><span class="number">135</span><span class="value">deg</span><span class="punctuation">,</span> <span class="number">#6366f1</span><span class="punctuation">,</span> <span class="number">#8b5cf6</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="selector">.card-back</span> <span class="punctuation">{</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="value">linear-gradient</span><span class="punctuation">(</span><span class="number">135</span><span class="value">deg</span><span class="punctuation">,</span> <span class="number">#ec4899</span><span class="punctuation">,</span> <span class="number">#f43f5e</span><span class="punctuation">)</span><span class="punctuation">;</span>
  <span class="property">color</span><span class="punctuation">:</span> <span class="value">white</span><span class="punctuation">;</span>
  <span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotateY</span><span class="punctuation">(</span><span class="number">180</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span>  <span class="comment">/* Arxa tərəf əvvəldən fırladılmış */</span>
<span class="punctuation">}</span>
        </div>
      </div>

      <!-- PERFORMANCE -->
      <div class="section-card">
        <h3>⚡ Performance və will-change</h3>
        <p style="font-size: 1.1rem;">Animasiyaların sürətli və axıcı işləməsi üçün brauzerə əvvəlcədən məlumat verin.</p>

        <div class="code-block">
<span class="comment">/* will-change - Brauzerə əvvəlcədən hazırlaşmağı bildirir */</span>
<span class="selector">.animate</span> <span class="punctuation">{</span>
  <span class="property">will-change</span><span class="punctuation">:</span> <span class="value">transform</span><span class="punctuation">,</span> <span class="value">opacity</span><span class="punctuation">;</span>
  <span class="comment">/* GPU sürətləndirməsi üçün */</span>
<span class="punctuation">}</span>

<span class="comment">/* Animasiya bitdikdən sonra will-change silin */</span>
<span class="selector">.animate</span><span class="punctuation">.</span><span class="value">finished</span> <span class="punctuation">{</span>
  <span class="property">will-change</span><span class="punctuation">:</span> <span class="value">auto</span><span class="punctuation">;</span>
<span class="punctuation">}</span>
        </div>

        <div class="warning-box">
          <strong>⚠️ Diqqət:</strong>
          <ul class="check-list" style="margin-top: 0.5rem;">
            <li><strong>will-change</strong> hər elementə tətbiq etməyin - yalnız animasiya olunanlara</li>
            <li>Animasiya bitdikdə <strong>auto</strong> edin və ya silin</li>
            <li>Həddindən artıq istifadə <strong>GPU yaddaşını</strong> doldura bilər</li>
          </ul>
        </div>

        <h4>GPU-Sürətləndirilən Xüsusiyyətlər</h4>
        <div class="info-grid">
          <div class="info-item" style="background: #dcfce7; border-color: #10b981;">
            <h4 style="color: #166534;">✅ Sürətli (GPU)</h4>
            <p>transform, opacity</p>
            <p style="font-size: 0.9rem; margin-top: 0.5rem;">Bu xüsusiyyətlər 60fps animasiya təmin edir</p>
          </div>
          <div class="info-item" style="background: #fef2f2; border-color: #ef4444;">
            <h4 style="color: #b91c1c;">❌ Yavaş (CPU)</h4>
            <p>width, height, top, left</p>
            <p style="font-size: 0.9rem; margin-top: 0.5rem;">Layout recalculation tələb edir</p>
          </div>
        </div>
      </div>

      <!-- PRAKTİKİ NÜMUNƏLƏR -->
      <div class="section-card">
        <h3>🛠️ Praktiki Nümunələr</h3>

        <h4>1. Loading Spinner</h4>
        <div class="code-block">
<span class="selector">.loader</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">50</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="number">50</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">border</span><span class="punctuation">:</span> <span class="number">4</span><span class="value">px</span> <span class="value">solid</span> <span class="number">#e2e8f0</span><span class="punctuation">;</span>
  <span class="property">border-top-color</span><span class="punctuation">:</span> <span class="number">#8b5cf6</span><span class="punctuation">;</span>
  <span class="property">border-radius</span><span class="punctuation">:</span> <span class="number">50</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="property">animation</span><span class="punctuation">:</span> <span class="value">spin 1s linear infinite</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="at-rule">@keyframes</span> <span class="value">spin</span> <span class="punctuation">{</span>
  <span class="selector">to</span> <span class="punctuation">{</span> <span class="property">transform</span><span class="punctuation">:</span> <span class="value">rotate</span><span class="punctuation">(</span><span class="number">360</span><span class="value">deg</span><span class="punctuation">)</span><span class="punctuation">;</span> <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <h4 style="margin-top: 2rem;">2. Pulse Effekti</h4>
        <div class="code-block">
<span class="selector">.pulse</span> <span class="punctuation">{</span>
  <span class="property">width</span><span class="punctuation">:</span> <span class="number">20</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">height</span><span class="punctuation">:</span> <span class="number">20</span><span class="value">px</span><span class="punctuation">;</span>
  <span class="property">background</span><span class="punctuation">:</span> <span class="number">#8b5cf6</span><span class="punctuation">;</span>
  <span class="property">border-radius</span><span class="punctuation">:</span> <span class="number">50</span><span class="value">%</span><span class="punctuation">;</span>
  <span class="property">animation</span><span class="punctuation">:</span> <span class="value">pulse 2s ease-in-out infinite</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="at-rule">@keyframes</span> <span class="value">pulse</span> <span class="punctuation">{</span>
  <span class="selector">0%</span><span class="punctuation">,</span> <span class="selector">100%</span> <span class="punctuation">{</span>
    <span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale</span><span class="punctuation">(</span><span class="number">1</span><span class="punctuation">)</span><span class="punctuation">;</span>
    <span class="property">opacity</span><span class="punctuation">:</span> <span class="number">1</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
  <span class="selector">50%</span> <span class="punctuation">{</span>
    <span class="property">transform</span><span class="punctuation">:</span> <span class="value">scale</span><span class="punctuation">(</span><span class="number">1.3</span><span class="punctuation">)</span><span class="punctuation">;</span>
    <span class="property">opacity</span><span class="punctuation">:</span> <span class="number">0.7</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <h4 style="margin-top: 2rem;">3. Slide In Animation</h4>
        <div class="code-block">
<span class="selector">.slide-in</span> <span class="punctuation">{</span>
  <span class="property">animation</span><span class="punctuation">:</span> <span class="value">slideIn 0.5s ease-out forwards</span><span class="punctuation">;</span>
<span class="punctuation">}</span>

<span class="at-rule">@keyframes</span> <span class="value">slideIn</span> <span class="punctuation">{</span>
  <span class="selector">from</span> <span class="punctuation">{</span>
    <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX</span><span class="punctuation">(</span><span class="number">-100</span><span class="value">%</span><span class="punctuation">)</span><span class="punctuation">;</span>
    <span class="property">opacity</span><span class="punctuation">:</span> <span class="number">0</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
  <span class="selector">to</span> <span class="punctuation">{</span>
    <span class="property">transform</span><span class="punctuation">:</span> <span class="value">translateX</span><span class="punctuation">(</span><span class="number">0</span><span class="punctuation">)</span><span class="punctuation">;</span>
    <span class="property">opacity</span><span class="punctuation">:</span> <span class="number">1</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
        </div>

        <h4 style="margin-top: 2rem;">4. Staggered Animation (Ardıcıl)</h4>
        <div class="code-block">
<span class="comment">/* Hər element fərqli gecikmə ilə */</span>
<span class="selector">.item</span><span class="punctuation">:</span><span class="value">nth-child</span><span class="punctuation">(</span><span class="number">1</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="property">animation-delay</span><span class="punctuation">:</span> <span class="number">0.1</span><span class="value">s</span><span class="punctuation">;</span> <span class="punctuation">}</span>
<span class="selector">.item</span><span class="punctuation">:</span><span class="value">nth-child</span><span class="punctuation">(</span><span class="number">2</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="property">animation-delay</span><span class="punctuation">:</span> <span class="number">0.2</span><span class="value">s</span><span class="punctuation">;</span> <span class="punctuation">}</span>
<span class="selector">.item</span><span class="punctuation">:</span><span class="value">nth-child</span><span class="punctuation">(</span><span class="number">3</span><span class="punctuation">)</span> <span class="punctuation">{</span> <span class="property">animation-delay</span><span class="punctuation">:</span> <span class="number">0.3</span><span class="value">s</span><span class="punctuation">;</span> <span class="punctuation">}</span>
        </div>
      </div>

      <!-- CƏDVƏL VƏ YEKUN -->
      <div class="section-card">
        <h3>📊 Bütün Xüsusiyyətlər Cədvəli</h3>
        
        <h4>Transition Xüsusiyyətləri:</h4>
        <table class="comparison-table">
          <tr>
            <th>Xüsusiyyət</th>
            <th>Təsvir</th>
            <th>Əsas Dəyərlər</th>
          </tr>
          <tr>
            <td><span class="property-badge">transition-property</span></td>
            <td>Hansı xüsusiyyət animasiya olunacaq</td>
            <td>all, transform, opacity, background</td>
          </tr>
          <tr>
            <td><span class="property-badge">transition-duration</span></td>
            <td>Davametmə müddəti</td>
            <td>0.3s, 300ms</td>
          </tr>
          <tr>
            <td><span class="property-badge">transition-timing-function</span></td>
            <td>Sürət qrafiki</td>
            <td>ease, linear, ease-in, cubic-bezier</td>
          </tr>
          <tr>
            <td><span class="property-badge">transition-delay</span></td>
            <td>Gecikmə vaxtı</td>
            <td>0s, 0.5s</td>
          </tr>
        </table>

        <h4 style="margin-top: 2rem;">Animation Xüsusiyyətləri:</h4>
        <table class="comparison-table">
          <tr>
            <th>Xüsusiyyət</th>
            <th>Təsvir</th>
            <th>Əsas Dəyərlər</th>
          </tr>
          <tr>
            <td><span class="property-badge">animation-name</span></td>
            <td>@keyframes adı</td>
            <td>slideIn, pulse, spin</td>
          </tr>
          <tr>
            <td><span class="property-badge">animation-duration</span></td>
            <td>Davametmə müddəti</td>
            <td>2s, 500ms</td>
          </tr>
          <tr>
            <td><span class="property-badge">animation-iteration-count</span></td>
            <td>Təkrar sayı</td>
            <td>1, 3, infinite</td>
          </tr>
          <tr>
            <td><span class="property-badge">animation-direction</span></td>
            <td>İstiqamət</td>
            <td>normal, reverse, alternate</td>
          </tr>
          <tr>
            <td><span class="property-badge">animation-fill-mode</span></td>
            <td>Bitiş vəziyyəti</td>
            <td>forwards, backwards, both</td>
          </tr>
          <tr>
            <td><span class="property-badge">animation-play-state</span></td>
            <td>Oynatma vəziyyəti</td>
            <td>running, paused</td>
          </tr>
        </table>
      </div>

      <!-- YEKUN -->
      <div class="section-card" style="border-left-color: #8b5cf6;">
        <h3>🎉 Təbriklər!</h3>
        <p style="font-size: 1.1rem;">CSS Animations və Transitions öyrəndiniz! İndi bilirsiniz:</p>
        <ul class="check-list">
          <li>Transition və Animation arasındakı fərqi</li>
          <li>@keyframes ilə mürəkkəb animasiyalar yaratmağı</li>
          <li>Transform funksiyaları (translate, rotate, scale, skew)</li>
          <li>3D transforms və card flip effektləri</li>
          <li>Timing function-lar və cubic-bezier</li>
          <li>Performance optimizasiyası (will-change)</li>
          <li>Loading animasiyaları və micro-interactions</li>
        </ul>
        
        <div class="tip-box" style="margin-top: 1.5rem;">
          <strong>🚀 Son Məsləhət:</strong>
          <p style="margin-top: 0.5rem;"><strong>"Less is more"</strong> - Həddindən artıq animasiya istifadəçini yorar. Məqsədli, məntiqi animasiyalar istifadə edin. Həmişə <strong>prefers-reduced-motion</strong> media query-ni yadda saxlayın - animasiyaları azaltmaq istəyən istifadəçilər üçün!</p>
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
    <title>CSS Animations Masterclass</title>
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
            background: #0f172a;
            color: white;
            padding: 40px 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
            font-size: clamp(2rem, 5vw, 3rem);
            margin-bottom: 3rem;
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        h2 {
            color: #8b5cf6;
            margin: 3rem 0 1.5rem;
            font-size: 1.8rem;
        }

        /* ==========================================
           1. TRANSITIONS
           ========================================== */
        .transition-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .transition-box {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            padding: 3rem 2rem;
            border-radius: 16px;
            text-align: center;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .transition-box:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 20px 40px rgba(139, 92, 246, 0.4);
        }

        .transition-box h3 {
            margin-bottom: 0.5rem;
        }

        .btn-hover {
            display: inline-block;
            padding: 1rem 2rem;
            background: #8b5cf6;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.3s ease;
            margin-top: 1rem;
        }

        .btn-hover:hover {
            background: #ec4899;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(236, 72, 153, 0.3);
        }

        /* ==========================================
           2. ANIMATIONS
           ========================================== */
        .animation-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .anim-card {
            background: #1e293b;
            padding: 2rem;
            border-radius: 16px;
            text-align: center;
            border: 2px solid #334155;
        }

        /* Spin Animation */
        .spinner {
            width: 60px;
            height: 60px;
            border: 4px solid #334155;
            border-top-color: #8b5cf6;
            border-radius: 50%;
            margin: 0 auto 1rem;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Pulse Animation */
        .pulser {
            width: 60px;
            height: 60px;
            background: #8b5cf6;
            border-radius: 50%;
            margin: 0 auto 1rem;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
        }

        /* Bounce Animation */
        .bouncer {
            width: 60px;
            height: 60px;
            background: #ec4899;
            border-radius: 12px;
            margin: 0 auto 1rem;
            animation: bounce 1s ease infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
        }

        /* Shake Animation */
        .shaker {
            width: 60px;
            height: 60px;
            background: #f59e0b;
            border-radius: 12px;
            margin: 0 auto 1rem;
            animation: shake 0.5s ease-in-out infinite;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }

        /* ==========================================
           3. TRANSFORMS
           ========================================== */
        .transform-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .transform-item {
            background: #1e293b;
            padding: 2rem;
            border-radius: 16px;
            text-align: center;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .transform-item:hover .transform-demo {
            transform: var(--transform);
        }

        .transform-demo {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
            border-radius: 12px;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            transition: transform 0.3s ease;
        }

        /* ==========================================
           4. 3D CARD FLIP
           ========================================== */
        .card-section {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            margin-bottom: 3rem;
        }

        .card-3d {
            width: 250px;
            height: 350px;
            perspective: 1000px;
            cursor: pointer;
        }

        .card-inner {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-3d:hover .card-inner {
            transform: rotateY(180deg);
        }

        .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
        }

        .card-front {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        }

        .card-back {
            background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
            transform: rotateY(180deg);
        }

        .card-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        /* ==========================================
           5. STAGGERED LIST
           ========================================== */
        .stagger-list {
            list-style: none;
            max-width: 600px;
            margin: 0 auto;
        }

        .stagger-item {
            background: #1e293b;
            padding: 1.5rem;
            margin-bottom: 1rem;
            border-radius: 12px;
            border-left: 4px solid #8b5cf6;
            opacity: 0;
            transform: translateX(-50px);
            animation: slideIn 0.5s ease forwards;
        }

        .stagger-item:nth-child(1) { animation-delay: 0.1s; }
        .stagger-item:nth-child(2) { animation-delay: 0.2s; }
        .stagger-item:nth-child(3) { animation-delay: 0.3s; }
        .stagger-item:nth-child(4) { animation-delay: 0.4s; }
        .stagger-item:nth-child(5) { animation-delay: 0.5s; }

        @keyframes slideIn {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* ==========================================
           6. LOADING COLLECTION
           ========================================== */
        .loader-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
            text-align: center;
        }

        .loader-item h4 {
            margin-bottom: 1rem;
            color: #64748b;
        }

        /* Loader 1 - Dots */
        .loader-dots {
            display: flex;
            gap: 8px;
            justify-content: center;
        }

        .loader-dots span {
            width: 16px;
            height: 16px;
            background: #8b5cf6;
            border-radius: 50%;
            animation: dots 1.4s ease-in-out infinite both;
        }

        .loader-dots span:nth-child(1) { animation-delay: -0.32s; }
        .loader-dots span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes dots {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }

        /* Loader 2 - Wave */
        .loader-wave {
            display: flex;
            gap: 4px;
            justify-content: center;
            align-items: center;
            height: 40px;
        }

        .loader-wave span {
            width: 6px;
            height: 100%;
            background: #ec4899;
            animation: wave 1.2s ease-in-out infinite;
        }

        .loader-wave span:nth-child(1) { animation-delay: -1.1s; }
        .loader-wave span:nth-child(2) { animation-delay: -1.0s; }
        .loader-wave span:nth-child(3) { animation-delay: -0.9s; }
        .loader-wave span:nth-child(4) { animation-delay: -0.8s; }
        .loader-wave span:nth-child(5) { animation-delay: -0.7s; }

        @keyframes wave {
            0%, 40%, 100% { transform: scaleY(0.4); }
            20% { transform: scaleY(1); }
        }

        /* ==========================================
           7. FLOATING ANIMATION
           ========================================== */
        .floating {
            animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        /* ==========================================
           RESPONSIVE
           ========================================== */
        @media (max-width: 768px) {
            .card-3d {
                width: 200px;
                height: 280px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>✨ CSS Animations Masterclass</h1>

        <!-- Transitions -->
        <h2>🔄 Transitions</h2>
        <div class="transition-section">
            <div class="transition-box">
                <h3>Hover Me</h3>
                <p>Scale + Translate + Shadow</p>
            </div>
            <div class="transition-box" style="background: linear-gradient(135deg, #ec4899, #f43f5e);">
                <h3>Smooth</h3>
                <p>Cubic-bezier easing</p>
            </div>
            <div style="text-align: center; display: flex; align-items: center; justify-content: center;">
                <a href="#" class="btn-hover">Button Hover</a>
            </div>
        </div>

        <!-- Animations -->
        <h2>🎬 Animations</h2>
        <div class="animation-grid">
            <div class="anim-card">
                <div class="spinner"></div>
                <h4>Spin</h4>
                <p>Linear infinite</p>
            </div>
            <div class="anim-card">
                <div class="pulser"></div>
                <h4>Pulse</h4>
                <p>Ease-in-out</p>
            </div>
            <div class="anim-card">
                <div class="bouncer"></div>
                <h4>Bounce</h4>
                <p>Translate Y</p>
            </div>
            <div class="anim-card">
                <div class="shaker"></div>
                <h4>Shake</h4>
                <p>Translate X</p>
            </div>
        </div>

        <!-- Transforms -->
        <h2>🔄 Transforms</h2>
        <div class="transform-section">
            <div class="transform-item" style="--transform: translate(20px, -20px);">
                <div class="transform-demo">↗️</div>
                <h4>Translate</h4>
            </div>
            <div class="transform-item" style="--transform: rotate(45deg);">
                <div class="transform-demo">🔄</div>
                <h4>Rotate</h4>
            </div>
            <div class="transform-item" style="--transform: scale(1.3);">
                <div class="transform-demo">🔍</div>
                <h4>Scale</h4>
            </div>
            <div class="transform-item" style="--transform: skew(15deg, 10deg);">
                <div class="transform-demo">📐</div>
                <h4>Skew</h4>
            </div>
        </div>

        <!-- 3D Cards -->
        <h2>🧊 3D Card Flip</h2>
        <div class="card-section">
            <div class="card-3d">
                <div class="card-inner">
                    <div class="card-face card-front">
                        <div class="card-icon">🎨</div>
                        <h3>Front Side</h3>
                        <p>Hover to flip</p>
                    </div>
                    <div class="card-face card-back">
                        <div class="card-icon">✨</div>
                        <h3>Back Side</h3>
                        <p>3D Transform</p>
                    </div>
                </div>
            </div>
            <div class="card-3d">
                <div class="card-inner">
                    <div class="card-face card-front" style="background: linear-gradient(135deg, #10b981, #34d399);">
                        <div class="card-icon">🚀</div>
                        <h3>Launch</h3>
                        <p>Click to explore</p>
                    </div>
                    <div class="card-face card-back" style="background: linear-gradient(135deg, #f59e0b, #fbbf24);">
                        <div class="card-icon">🎯</div>
                        <h3>Success</h3>
                        <p>Mission complete!</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Staggered List -->
        <h2>📋 Staggered Animation</h2>
        <ul class="stagger-list">
            <li class="stagger-item">Item 1 - Ardıcıl animasiya</li>
            <li class="stagger-item">Item 2 - Gecikmə ilə gəlir</li>
            <li class="stagger-item">Item 3 - Təkrarlanmır</li>
            <li class="stagger-item">Item 4 - forwards ilə qalır</li>
            <li class="stagger-item">Item 5 - JavaScript ilə control</li>
        </ul>

        <!-- Loaders -->
        <h2>⏳ Loading Animations</h2>
        <div class="loader-section">
            <div class="loader-item">
                <h4>Dots</h4>
                <div class="loader-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="loader-item">
                <h4>Wave</h4>
                <div class="loader-wave">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="loader-item">
                <h4>Spinner</h4>
                <div class="spinner" style="margin: 0 auto;"></div>
            </div>
            <div class="loader-item">
                <h4>Pulse</h4>
                <div class="pulser" style="margin: 0 auto;"></div>
            </div>
        </div>

        <!-- Floating -->
        <h2>🎈 Floating Element</h2>
        <div style="text-align: center; padding: 3rem;">
            <div class="floating" style="display: inline-block; font-size: 5rem;">🎈</div>
            <p style="margin-top: 1rem; color: #64748b;">Ease-in-out infinite</p>
        </div>
    </div>

    <script>
        // Animation control
        document.querySelectorAll('.anim-card').forEach(card => {
            card.addEventListener('click', () => {
                const animElement = card.querySelector('div');
                const currentState = animElement.style.animationPlayState;
                animElement.style.animationPlayState = currentState === 'paused' ? 'running' : 'paused';
            });
        });

        // 3D card click effect
        document.querySelectorAll('.card-3d').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });

        console.log('%c🎬 CSS Animations Masterclass yükləndi!', 'font-size: 18px; color: #8b5cf6; font-weight: bold;');
    </script>
</body>
</html>`,
    
    css: `/* Bu fayl boş qala bilər, çünki bütün CSS HTML-in içindədir */
/* Və ya əlavə stillər burada yazıla bilər */`,
    
    js: `// CSS Animations Utilities və Interaktivliklər

document.addEventListener('DOMContentLoaded', function() {
    
    // Animation Controller
    const AnimationController = {
        elements: new Map(),
        
        register(element, options = {}) {
            this.elements.set(element, {
                playState: 'running',
                ...options
            });
            
            element.addEventListener('click', () => this.toggle(element));
        },
        
        toggle(element) {
            const config = this.elements.get(element);
            const newState = config.playState === 'running' ? 'paused' : 'running';
            
            element.style.animationPlayState = newState;
            config.playState = newState;
            
            console.log(\`Animation \${newState}: \${element.className}\`);
        },
        
        pause(element) {
            if (this.elements.has(element)) {
                element.style.animationPlayState = 'paused';
                this.elements.get(element).playState = 'paused';
            }
        },
        
        play(element) {
            if (this.elements.has(element)) {
                element.style.animationPlayState = 'running';
                this.elements.get(element).playState = 'running';
            }
        }
    };

    // Bütün animasiya elementlərini qeydiyyatdan keçir
    document.querySelectorAll('.spinner, .pulser, .bouncer, .shaker').forEach(el => {
        AnimationController.register(el);
    });

    // Scroll-triggered animations
    const ScrollAnimator = {
        observer: null,
        
        init() {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        console.log('Element visible:', entry.target.className);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.stagger-item, .transition-box').forEach(el => {
                this.observer.observe(el);
            });
        }
    };

    ScrollAnimator.init();

    // Mouse parallax effekti
    const ParallaxEffect = {
        init() {
            document.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                
                document.querySelectorAll('.floating').forEach((el, index) => {
                    const speed = (index + 1) * 0.5;
                    el.style.transform = \`translate(\${x * speed}px, \${y * speed}px)\`;
                });
            });
        }
    };

    ParallaxEffect.init();

    // 3D Card touch support
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('touchstart', () => {
            card.classList.toggle('touched');
        });
    });

    // Performance monitor
    const PerformanceMonitor = {
        init() {
            let lastTime = performance.now();
            let frames = 0;
            
            const checkPerformance = () => {
                const currentTime = performance.now();
                frames++;
                
                if (currentTime >= lastTime + 1000) {
                    const fps = Math.round((frames * 1000) / (currentTime - lastTime));
                    console.log(\`FPS: \${fps}\`);
                    
                    if (fps < 30) {
                        console.warn('Low FPS detected! Consider reducing animations.');
                    }
                    
                    frames = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(checkPerformance);
            };
            
            // requestAnimationFrame(checkPerformance);
        }
    };

    PerformanceMonitor.init();

    // prefers-reduced-motion support
    const checkMotionPreference = () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
            console.log('Reduced motion preference detected. Animations disabled.');
        }
    };

    checkMotionPreference();
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkMotionPreference);

    console.log('%c🎬 Animation Controller aktivləşdirildi!', 'font-size: 16px; color: #8b5cf6;');
    console.log('%cAnimasiya elementlərinə klikləməklə onları dayandıra/başlada bilərsiniz', 'font-size: 12px; color: #64748b;');
});`
  },

  exercise: {
    title: "Loading Animation Collection",
    description: "3 fərqli loading animasiyası yaradın: 1) Dönən dairə (spinner), 2) Pulse edən nöqtələr, 3) Dalğa effekti (wave). Hər biri fərqli @keyframes istifadə etsin və animation-iteration-count: infinite olsun.",
    requirements: [
      "@keyframes ilə minimum 3 animasiya yaradın (spin, pulse, wave)",
      "animation-iteration-count: infinite istifadə edin",
      "Fərqli timing-function-lar (linear, ease-in-out) sınayın",
      "Transform və opacity kombinasiyası istifadə edin",
      "Loading container-ə flex ilə mərkəzləşdirin",
      "Hər loader-ə fərqli rəng verin (mavi, çəhrayı, sarı)",
      "animation-delay ilə ardıcıl animasiya effekti yaradın",
      "Loader-ləri 100px × 100px ölçüdə edin",
      "Responsive grid ilə düzün (mobildə 1 sütun, desktopda 3 sütun)",
      "Hər loader-in altında adı yazılsın"
    ],
    starterCode: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Animations</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .loaders-container {
            display: grid;
            gap: 3rem;
            padding: 2rem;
            /* Mobil üçün 1 sütun, desktop üçün 3 sütun */
        }

        .loader-item {
            text-align: center;
        }

        .loader-item h3 {
            margin-top: 1rem;
            color: #64748b;
        }

        /* Loader 1 - Spinning Circle */
        .loader-spin {
            width: 100px;
            height: 100px;
            /* Kodunuzu bura yazın */
        }

        @keyframes spin {
            /* Kodunuzu bura yazın */
        }

        /* Loader 2 - Pulsing Dots */
        .loader-pulse {
            display: flex;
            gap: 8px;
            justify-content: center;
            align-items: center;
            height: 100px;
        }

        .loader-pulse span {
            width: 20px;
            height: 20px;
            background: #ec4899;
            border-radius: 50%;
            /* Kodunuzu bura yazın */
        }

        @keyframes pulse {
            /* Kodunuzu bura yazın */
        }

        /* Loader 3 - Wave */
        .loader-wave {
            display: flex;
            gap: 4px;
            justify-content: center;
            align-items: center;
            height: 100px;
        }

        .loader-wave span {
            width: 8px;
            height: 60px;
            background: #f59e0b;
            /* Kodunuzu bura yazın */
        }

        @keyframes wave {
            /* Kodunuzu bura yazın */
        }

        /* Responsive */
        @media (min-width: 768px) {
            .loaders-container {
                /* 3 sütunlu grid */
            }
        }
    </style>
</head>
<body>
    <div class="loaders-container">
        <div class="loader-item">
            <div class="loader-spin"></div>
            <h3>Spinner</h3>
        </div>
        <div class="loader-item">
            <div class="loader-pulse">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h3>Pulse</h3>
        </div>
        <div class="loader-item">
            <div class="loader-wave">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h3>Wave</h3>
        </div>
    </div>
</body>
</html>`
  },

  quiz: [
    {
      question: "CSS transition hansı halda işləyir?",
      options: ["Hər zaman avtomatik", "CSS xüsusiyyəti dəyişəndə", "Yalnız səhifə yüklənəndə", "Yalnız JavaScript ilə"],
      correctAnswer: 1,
      explanation: "Transition yalnız CSS xüsusiyyəti dəyişəndə (məsələn, hover, focus və ya class əlavə ediləndə) işə düşür."
    },
    {
      question: "@keyframes nə üçün istifadə olunur?",
      options: ["Rəng təyin etmək", "Mürəkkəb animasiyalar yaratmaq", "Font import etmək", "Layout qurmaq"],
      correctAnswer: 1,
      explanation: "@keyframes ilə animasiyanın 0%-dən 100%-ə qədər olan vəziyyətlərini təyin edərək mürəkkəb animasiyalar yaradılır."
    },
    {
      question: "animation-fill-mode: forwards nə edir?",
      options: ["Animasiyanı dayandırır", "Son keyframe vəziyyətini saxlayır", "Animasiyanı təkrarlayır", "Geriyə oynadır"],
      correctAnswer: 1,
      explanation: "forwards animasiya bitdikdən sonra elementin son keyframe-dəki vəziyyətində qalmasını təmin edir."
    },
    {
      question: "transform: translateX(-50%) nə edir?",
      options: ["Sola 50px çəkir", "Sola 50% çəkir", "Sağa 50% çəkir", "Heç nə etmir"],
      correctAnswer: 1,
      explanation: "translateX(-50%) elementi X oxu üzrə sola öz eninin 50%-i qədər çəkir. Bu, mərkəzləşdirmə üçün çox istifadə olunur."
    },
    {
      question: "cubic-bezier nədir?",
      options: ["Rəng kodu", "Sürət əyrisi (timing function)", "Font ailəsi", "Breakpoint"],
      correctAnswer: 1,
      explanation: "cubic-bezier() funksiyası animasiyanın sürətinin necə dəyişəcəyini təyin edən xüsusi bir əyri yaradır."
    },
    {
      question: "will-change xüsusiyyəti nə üçün istifadə olunur?",
      options: ["SEO optimizasiyası", "Performance yaxşılaşdırması", "Rəng dəyişməsi", "Font yükləmə"],
      correctAnswer: 1,
      explanation: "will-change brauzerə əvvəlcədən hansı xüsusiyyətlərin dəyişəcəyini bildirərək GPU sürətləndirməsi ilə performansı artırır."
    },
    {
      question: "animation-direction: alternate nə edir?",
      options: ["Animasiyanı dayandırır", "İrəli və geri oynadır", "Tərs istiqamətdə oynadır", "Sürətləndirir"],
      correctAnswer: 1,
      explanation: "alternate hər təkrarda animasiyanı irəli (0% → 100%), sonra geri (100% → 0%) oynadır."
    },
    {
      question: "perspective xüsusiyyəti nə üçün lazımdır?",
      options: ["2D transform üçün", "3D effektlər üçün", "Rəng dərinliyi üçün", "Blur effekti üçün"],
      correctAnswer: 1,
      explanation: "perspective 3D transform-lar üçün müşahidəçinin elementə nə qədər yaxın olduğunu təyin edir və 3D effekti yaradır."
    },
    {
      question: "backface-visibility: hidden nə edir?",
      options: ["Elementi tam gizlədir", "Elementin arxa tərəfini gizlədir", "3D dönməni dayandırır", "Opacity-ni sıfırlayır"],
      correctAnswer: 1,
      explanation: "backface-visibility: hidden element fırladıldıqda arxa tərəfinin görünməsini əngəlləyir (card flip effekti üçün vacibdir)."
    },
    {
      question: "Hansı transition-timing-function əvvəli sürətli, sonu yavaş edir?",
      options: ["ease-in", "ease-out", "ease-in-out", "linear"],
      correctAnswer: 1,
      explanation: "ease-out sürətli başlayır və sona yaxın yavaşlayır. ease-in isə əksinə, yavaş başlayıb sürətlənir."
    }
  ]
};

export default topic6;