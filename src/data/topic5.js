export const topic5 = {
  id: 5,
  title: "Responsive Design və Media Queries",
  duration: "75 dəq",
  isFree: false,
  
  content: `
    <h4>Responsive Design Nədir?</h4>
    <p><strong>Responsive Design (Responsiv Dizayn)</strong> veb səhifələrin müxtəlif cihaz və ekran ölçülərinə (mobil telefon, planşet, noutbuk, desktop monitor) avtomatik uyğunlaşması deməkdir. Bu yanaşma sayəsində istifadəçilər hansı cihazdan istifadə etsələr də, veb sayt optimal görünüş və funksionallıq təqdim edir.</p>
    
    <p><strong>Niyə vacibdir?</strong></p>
    <ul>
      <li>İnternet trafikinin 60%-dən çoxu mobil cihazlardan gəlir</li>
      <li>Google axtarış nəticələrində mobil dostu saytları üstün tutur</li>
      <li>Bir veb sayt yazmaq kifayətdir - hər cihaz üçün ayrı versiya yox</li>
      <li>Daha yaxşı istifadəçi təcrübəsi (UX) təmin edir</li>
    </ul>

    <h4>Viewport Meta Tag - Əsas Başlanğıc</h4>
    <p>HTML sənədinin <code>&lt;head&gt;</code> hissəsinə əlavə edilməlidir. Bu tag brauzerə səhifənin ekran ölçüsünə uyğunlaşması üçün göstəriş verir:</p>
    <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
    <ul>
      <li><code>width=device-width</code>: Səhifənin enini cihazın ekran eninə bərabər edir</li>
      <li><code>initial-scale=1.0</code>: Başlanğıc zoom səviyyəsini 100% təyin edir</li>
    </ul>

    <h4>Media Queries Sintaksisi - Ətraflı İzah</h4>
    <p><strong>Media Query</strong> CSS qaydalarını müəyyən şərtlər əsasında tətbiq etməyə imkan verir. Əsasən ekran ölçüsünə görə stillər dəyişir.</p>
    
    <p><strong>1. Mobil-ilk (Mobile-first) Yanaşma:</strong></p>
    <p>Əvvəlcə mobil üçün yazılır, sonra böyük ekranlar üçün genişləndirilir. Bu günün standart yanaşmasıdır.</p>
    <pre><code>/* Əsas stillər - Mobil cihazlar üçün (default) */
.body {
  padding: 10px;
  font-size: 14px;
}

/* Tablet və yuxarı - 768px və daha böyük */
@media (min-width: 768px) {
  .body {
    padding: 20px;
    font-size: 16px;
  }
}

/* Desktop və yuxarı - 1024px və daha böyük */
@media (min-width: 1024px) {
  .body {
    padding: 40px;
    font-size: 18px;
  }
}</code></pre>

    <p><strong>2. Desktop-ilk (Desktop-first) Yanaşma:</strong></p>
    <p>Köhnə yanaşma - əvvəlcə desktop, sonra kiçik ekranlar üçün.</p>
    <pre><code>/* Əsas stillər - Desktop üçün */
.container {
  width: 1200px;
}

/* Yalnız mobil - 767px və kiçik */
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}</code></pre>

    <h4>Əsas Breakpoint-lər (Kəsmə Nöqtələri)</h4>
    <p>Breakpoint-lər dizaynın dəyişdiyi ekran ölçüləridir. Standart dəyərlər:</p>
    <ul>
      <li><strong>Mobil:</strong> 320px - 767px (kiçik telefonlardan böyük telefonlara qədər)</li>
      <li><strong>Tablet:</strong> 768px - 1023px (planşetlər, kiçik noutbuklar)</li>
      <li><strong>Desktop:</strong> 1024px - 1439px (noutbuklar və kiçik monitorlar)</li>
      <li><strong>Large Desktop:</strong> 1440px+ (böyük monitorlar, TV ekranları)</li>
    </ul>
    
    <p><strong>Praktik breakpointlər:</strong></p>
    <pre><code>/* Kiçik mobil */
@media (min-width: 320px) { }

/* Orta mobil */
@media (min-width: 480px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Kiçik desktop */
@media (min-width: 1024px) { }

/* Orta desktop */
@media (min-width: 1200px) { }

/* Böyük desktop */
@media (min-width: 1440px) { }</code></pre>

    <h4>Responsive Units (Ölçü Vahidləri)</h4>
    <p>Fərqli vəziyyətlərdə fərqli vahidlər istifadə olunur:</p>
    
    <pre><code>/* Faiz (%) - Parent elementə nisbətən */
.container {
  width: 80%;        /* Ana elementin 80%-i qədər */
  margin: 0 auto;    /* Ortaya yerləşdirmək */
}

/* vw (Viewport Width) - Ekran eninin 1%-i */
.hero {
  width: 100vw;      /* Tam ekran eni */
  font-size: 5vw;    /* Ekran eninin 5%-i qədər şrift */
}

/* vh (Viewport Height) - Ekran hündürlüyünün 1%-i */
.section {
  height: 100vh;     /* Tam ekran hündürlüyü */
  min-height: 50vh;  /* Minimum yarım ekran */
}

/* rem (Root EM) - HTML elementinin şrift ölçüsünə əsaslanır (default: 16px) */
html {
  font-size: 16px;
}
h1 {
  font-size: 2rem;   /* 32px (16 * 2) */
  margin-bottom: 1.5rem; /* 24px */
}

/* em - Carı elementin şrift ölçüsünə əsaslanır */
.button {
  font-size: 16px;
  padding: 1em 2em;  /* 16px üst/alt, 32px sol/sağ */
}

/* clamp() - Minimum, ideal və maksimum dəyər */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* Minimum 1.5rem, ideal 4vw, maksimum 3rem */
}</code></pre>

    <h4>Responsive Images (Şəkillərin Responsivliyi)</h4>
    <p>Şəkillərin konteynerdən çıxmasının və ya deformasiya olmasının qarşısını almaq üçün:</p>
    <pre><code>/* Əsas responsive şəkil stili */
img {
  max-width: 100%;   /* Konteynerdən böyük olmaz */
  height: auto;      /* Nisbətləri qoruyur */
  display: block;    /* Boz boşluqları aradan qaldırır */
}

/* Arxa fon şəkilləri üçün */
.background {
  background-image: url('image.jpg');
  background-size: cover;        /* Konteyneri tam örtür */
  background-position: center;   /* Mərkəzləşdirir */
  background-repeat: no-repeat;  /* Təkrarlamır */
}</code></pre>

    <h4>Flexbox ilə Responsive Layout</h4>
    <pre><code>.container {
  display: flex;
  flex-wrap: wrap;        /* Kiçik ekranda aşağı düşsün */
  gap: 20px;             /* Elementlər arası məsafə */
}

.item {
  flex: 1 1 300px;       /* Böyüy, kiçil, əsas ölçü 300px */
  /* flex-grow: 1, flex-shrink: 1, flex-basis: 300px */
}</code></pre>

    <h4>CSS Grid ilə Responsive Layout</h4>
    <pre><code>.grid {
  display: grid;
  /* Avtomatik uyğunlaşan sütunlar */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Və ya media queries ilə */
.grid-simple {
  display: grid;
  grid-template-columns: 1fr;  /* Mobildə 1 sütun */
  gap: 15px;
}

@media (min-width: 768px) {
  .grid-simple {
    grid-template-columns: repeat(2, 1fr);  /* Tablet: 2 sütun */
  }
}

@media (min-width: 1024px) {
  .grid-simple {
    grid-template-columns: repeat(4, 1fr);  /* Desktop: 4 sütun */
  }
}</code></pre>

    <h4>Container Queries (Konteyner Sorğuları) - Yeni Nəsil</h4>
    <p>Viewport əvəzinə <strong>parent konteynerin</strong> ölçüsünə əsaslanır. Komponent əsaslı dizayn üçün idealdir.</p>
    <pre><code>/* Konteyneri təyin et */
.card-container {
  container-type: inline-size;  /* Enə görə izlə */
  container-name: card;         /* Optional: ad ver */
}

/* Konteyner ölçüsünə görə stillər */
@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
  
  .card-image {
    width: 40%;
  }
}

@container card (min-width: 700px) {
  /* Named container ilə */
  .card {
    font-size: 1.2rem;
  }
}</code></pre>

    <h4>Praktik Məsləhətlər</h4>
    <ul>
      <li><strong>Test edin:</strong> Brauzerin developer tools (F12) ilə müxtəlif ölçüləri yoxlayın</li>
      <li><strong>Chrome DevTools:</strong> Ctrl+Shift+M (və Cmd+Shift+M Mac-də) ilə cihaz emulyasiyası</li>
      <li><strong>Relative units:</strong> PX əvəzinə REM, EM, VW, VH istifadə edin</li>
      <li><strong>Touch targets:</strong> Mobil düymələr minimum 44x44px olmalıdır</li>
      <li><strong>Font sizes:</strong> 16px-dən kiçik şriftlərdən çəkinin (mobildə oxunmaz olur)</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="container">
  <header class="header">
    <h1>Responsive Layout</h1>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  
  <main class="grid">
    <article class="card">
      <img src="https://picsum.photos/400/300?random=1" alt="Nature">
      <div class="card-content">
        <h3>Təbiət Şəkilləri</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
        <button class="btn">Ətraflı</button>
      </div>
    </article>
    
    <article class="card">
      <img src="https://picsum.photos/400/300?random=2" alt="City">
      <div class="card-content">
        <h3>Şəhər Həyatı</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <button class="btn">Ətraflı</button>
      </div>
    </article>
    
    <article class="card">
      <img src="https://picsum.photos/400/300?random=3" alt="Technology">
      <div class="card-content">
        <h3>Texnologiya</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        <button class="btn">Ətraflı</button>
      </div>
    </article>
  </main>
  
  <footer class="footer">
    <p>&copy; 2024 Responsive Design Demo</p>
  </footer>
</div>`,
    
    css: `/* ===== RESET VƏ ƏSASLAR ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;  /* REM üçün əsas ölçü */
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f1f5f9;
}

/* ===== MOBIL-FIRST: 320px+ ===== */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

/* Header - Mobildə mərkəzləşdirilmiş */
.header {
  text-align: center;
  padding: 1.5rem 1rem;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  font-weight: 700;
}

/* Navigasiya - Mobildə şaquli */
.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav a:hover {
  background: #6366f1;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

/* Grid - Mobildə 1 sütun */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* Kartlar */
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.5rem;
}

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.card p {
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.5;
}

/* Düymələr */
.btn {
  width: 100%;  /* Mobildə tam en */
  padding: 0.75rem 1.5rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

/* Footer */
.footer {
  text-align: center;
  padding: 2rem;
  background: #1e293b;
  color: white;
  border-radius: 12px;
  font-size: 0.9rem;
}

/* ===== TABLET: 768px+ ===== */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
  
  /* Navigasiya üfüqi olur */
  .nav {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .nav a {
    width: auto;
  }
  
  /* Grid 2 sütunlu olur */
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  /* Düymə avtomatik enli olur */
  .btn {
    width: auto;
  }
}

/* ===== DESKTOP: 1024px+ ===== */
@media (min-width: 1024px) {
  /* Header yan-yana düzülür */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 2rem;
  }
  
  .header h1 {
    margin-bottom: 0;
  }
  
  .nav {
    margin-top: 0;
  }
  
  /* Grid 3 sütunlu olur */
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  /* Kart şəkilləri böyüyür */
  .card img {
    height: 250px;
  }
}

/* ===== LARGE DESKTOP: 1440px+ ===== */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
  
  .grid {
    gap: 2.5rem;
  }
}

/* ===== LANDSCAPE ORIENTASIYA ===== */
@media (orientation: landscape) and (max-height: 500px) {
  .header {
    padding: 1rem;
  }
  
  .card img {
    height: 150px;
  }
}`,

    js: `/* ===== RESPONSIVE UTILITIES ===== */

// Ekran ölçüsünü real-time göstərən funksiya
const displaySize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Breakpoint müəyyənləşdir
  let device = 'Mobil (320px-767px)';
  let icon = '📱';
  
  if (width >= 1440) {
    device = 'Large Desktop (1440px+)';
    icon = '🖥️';
  } else if (width >= 1024) {
    device = 'Desktop (1024px-1439px)';
    icon = '💻';
  } else if (width >= 768) {
    device = 'Tablet (768px-1023px)';
    icon = '📱';
  }
  
  // Konsola məlumat yaz
  console.log(\`\${icon} Cihaz: \${device}\`);
  console.log(\`📐 Ekran: \${width}px × \${height}px\`);
  console.log(\`🔄 Orientasiya: \${screen.orientation?.type || 'naməlum'}\`);
  
  // Səhifə başlığını yenilə
  document.title = \`Responsive - \${device.split(' ')[0]}\`;
  
  // Optional: Ekranda göstərmək üçün element yarat
  updateSizeIndicator(width, height, device);
};

// Ekran ölçü göstəricisi (developer üçün)
const updateSizeIndicator = (width, height, device) => {
  let indicator = document.getElementById('size-indicator');
  
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'size-indicator';
    indicator.style.cssText = \`
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgba(30, 41, 59, 0.9);
      color: white;
      padding: 10px 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    \`;
    document.body.appendChild(indicator);
  }
  
  indicator.innerHTML = \`
    <div><strong>\${width}px × \${height}px</strong></div>
    <div style="font-size: 11px; opacity: 0.8; margin-top: 4px;">\${device}</div>
  \`;
};

// Orientasiya dəyişikliyi
const handleOrientation = () => {
  const type = screen.orientation?.type;
  const angle = screen.orientation?.angle;
  
  console.log(\`Orientasiya dəyişdi: \${type} (\${angle}°)\`);
  
  // Xüsusi orientasiya əməliyyatları
  if (type?.includes('landscape')) {
    console.log('🔄 Landscape modu - yan görünüş');
  } else {
    console.log('🔄 Portrait modu - şaquli görünüş');
  }
};

// Debounce funksiyası - çox sığ çağırışların qarşısını alır
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

// Event listener-ləri qeydiyyatdan keçir
window.addEventListener('resize', debounce(displaySize, 250));
window.addEventListener('load', displaySize);

if (screen.orientation) {
  screen.orientation.addEventListener('change', handleOrientation);
}

// İlkin çağırış
displaySize();

// Media Query JavaScript-də yoxlamaq
const checkMediaQuery = () => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches;
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  
  console.log('Media Query Status:', { isMobile, isTablet, isDesktop });
};

// Hər resize-də yoxla
window.addEventListener('resize', debounce(checkMediaQuery, 300));

console.log('✅ Responsive Design Utilities yükləndi!');`
  },

  exercise: {
    title: "Responsive Hero Section",
    description: "Mobil-ilk yanaşma ilə tam funksional hero section yaradın. Tələblər: Mobildə (320px) şəkil yuxarıda, mətn aşağıda və mərkəzləşdirilmiş olsun. Tablet (768px+) və Desktop (1024px+) ölçülərində şəkil və mətn yan-yana (50%-50%) düzülsün. Şəkil hər zaman konteynerin içində qalsın və deformasiya olmasın.",
    requirements: [
      "Mobile-first media query strukturu qurun (əvvəlcə mobil, sonra böyük ekranlar)",
      "min-width: 768px və min-width: 1024px breakpoint-ləri istifadə edin",
      "Şəkil üçün max-width: 100% və height: auto tətbiq edin",
      "Flexbox istifadə edin (flex-direction: column mobildə, row desktopda)",
      "Typography ölçülərini rem və ya clamp() ilə responsive edin",
      "Button ölçülərini mobil üçün 100% width, desktop üçün auto edin",
      "Container max-width: 1200px və margin: 0 auto ilə mərkəzləşdirin",
      "Mobil üçün padding dəyərləri 16px, desktop üçün 32px olsun"
    ],
    starterCode: `<section class="hero">
  <div class="hero-content">
    <span class="tag">Yeni Kolleksiya</span>
    <h1>Təbiətin Gücünü Kəşf Edin</h1>
    <p>2024-cü ilin ən yeni outdoor məhsulları ilə tanış olun. Hər hava şəraitinə uyğun, yüksək keyfiyyətli avadanlıqlar.</p>
    <div class="buttons">
      <button class="btn-primary">İndi Alış-veriş Et</button>
      <button class="btn-secondary">Ətraflı Məlumat</button>
    </div>
  </div>
  <div class="hero-image">
    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" alt="Mountain landscape">
  </div>
</section>

<style>
  /* Kodunuzu bura yazın */
  /* 1. Əsas reset və box-sizing */
  
  /* 2. Hero section - Mobildə şaquli */
  
  /* 3. Mətn kontenti stilləri */
  
  /* 4. Şəkil konteyneri və şəkil */
  
  /* 5. Düymələr - Mobildə tam en */
  
  /* 6. Tablet breakpoint - 768px */
  
  /* 7. Desktop breakpoint - 1024px */
  
</style>`
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