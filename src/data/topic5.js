export const topic5 = {
  id: 5,
  title: "Responsive Design və Media Queries",
  duration: "75 dəq",
  isFree: false,
  
  content: `
    <h4>Responsive Design Nədir?</h4>
    <p>Responsive Design veb səhifələrin müxtəlif cihaz və ekran ölçülərinə uyğunlaşması deməkdir. Mobil-ilk (Mobile-first) yanaşma ilə dizayn edilir.</p>
    
    <h4>Viewport Meta Tag</h4>
    <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>

    <h4>Media Queries Sintaksisi</h4>
    <pre><code>/* Mobil-ilk yanaşma */
@media (min-width: 768px) {
  /* Tablet və yuxarı */
}

@media (min-width: 1024px) {
  /* Desktop və yuxarı */
}

/* Max-width ilə */
@media (max-width: 767px) {
  /* Yalnız mobil */
}</code></pre>

    <h4>Əsas Breakpoint-lər</h4>
    <ul>
      <li><strong>Mobil:</strong> 320px - 767px</li>
      <li><strong>Tablet:</strong> 768px - 1023px</li>
      <li><strong>Desktop:</strong> 1024px+</li>
      <li><strong>Large:</strong> 1440px+</li>
    </ul>

    <h4>Responsive Units</h4>
    <pre><code>/* Relative units */
width: 100%;       /* Parent-ə nisbətən */
width: 50vw;       /* Viewport width */
height: 100vh;     /* Viewport height */
font-size: 2rem;   /* Root element */
padding: 1em;      /* Current font-size */</code></pre>

    <h4>Responsive Images</h4>
    <pre><code>img {
  max-width: 100%;
  height: auto;
  display: block;
}</code></pre>

    <h4>Container Queries</h4>
    <p>CSS Container Queries parent container-ə əsasən işləyir:</p>
    <pre><code>.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}</code></pre>
  `,

  starterCode: {
    html: `<div class="container">
  <header class="header">
    <h1>Responsive Layout</h1>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  
  <main class="grid">
    <article class="card">
      <img src="https://picsum.photos/400/300" alt="Image">
      <h3>Card 1</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
    <article class="card">
      <img src="https://picsum.photos/400/300" alt="Image">
      <h3>Card 2</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
    <article class="card">
      <img src="https://picsum.photos/400/300" alt="Image">
      <h3>Card 3</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
  </main>
</div>`,
    
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header - Mobile First */
.header {
  text-align: center;
  padding: 20px;
  background: #1e293b;
  color: white;
  margin-bottom: 30px;
  border-radius: 8px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 10px;
  background: #334155;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav a:hover {
  background: #6366f1;
}

/* Grid - Mobile: 1 sütun */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3, .card p {
  padding: 15px;
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: center;
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav {
    margin-top: 0;
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,

    js: `// Ekran ölçüsünü real-time göstər
const displaySize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log('Ekran ölçüsü:', width + 'x' + height);
  
  // Breakpoint yoxlanışı
  let device = 'Mobil';
  if (width >= 1024) device = 'Desktop';
  else if (width >= 768) device = 'Tablet';
  
  document.title = 'Responsive - ' + device;
};

window.addEventListener('resize', displaySize);
window.addEventListener('load', displaySize);

// Orientation change
window.addEventListener('orientationchange', () => {
  console.log('Orientation dəyişdi:', screen.orientation.type);
});`
  },

  exercise: {
    title: "Responsive Hero Section",
    description: "Mobil-ilk yanaşma ilə hero section yaradın. Mobildə şəkil yuxarıda mətn aşağıda, desktopda yan-yana olsun.",
    requirements: [
      "Mobile-first media query strukturu qurun",
      "min-width: 768px və min-width: 1024px breakpoint-ləri istifadə edin",
      "Şəkil üçün max-width: 100% tətbiq edin",
      "Flexbox və ya Grid istifadə edin",
      "Typography ölçülərini rem/vw ilə responsive edin",
      "Button ölçülərini mobil üçün fərqli edin",
      "Container max-width ilə məhdudlaşdırın"
    ],
    starterCode: `<section class="hero">
  <div class="hero-content">
    <h1>Başlıq Burada</h1>
    <p>Təsvir mətni...</p>
    <button>Ətraflı</button>
  </div>
  <div class="hero-image">
    <img src="https://picsum.photos/600/400" alt="Hero">
  </div>
</section>

<style>
  .hero {
    /* Kodunuzu bura yazın */
  }
</style>`
  },

  quiz: [
    {
      question: "Mobil-ilk yanaşmada hansı media query istifadə olunur?",
      options: ["max-width", "min-width", "max-height", "orientation"],
      correctAnswer: 1
    },
    {
      question: "Viewport meta tag-in əsas funksiyası nədir?",
      options: ["SEO optimizasiyası", "Ekran ölçüsünə uyğunlaşma", "Cache kontrolu", "Font yükləmə"],
      correctAnswer: 1
    },
    {
      question: "1rem nəyə bərabərdir default olaraq?",
      options: ["14px", "16px", "18px", "12px"],
      correctAnswer: 1
    },
    {
      question: "Responsive şəkillər üçün hansı kombinasiya istifadə olunur?",
      options: ["width: 100%; height: 100%", "max-width: 100%; height: auto", "width: auto; height: auto", "min-width: 100%"],
      correctAnswer: 1
    },
    {
      question: "Tablet breakpoint-i adətən hansı dəyərdədir?",
      options: ["480px", "768px", "992px", "1200px"],
      correctAnswer: 1
    },
    {
      question: "vw vahidi nəyi ifadə edir?",
      options: ["Viewport width", "View width", "Visual width", "Vertical width"],
      correctAnswer: 0
    },
    {
      question: "Hansı unit root element-in font-size-na əsaslanır?",
      options: ["em", "rem", "px", "%"],
      correctAnswer: 1
    },
    {
      question: "Container queries hansı element-ə əsaslanır?",
      options: ["Viewport", "Parent container", "Body", "HTML"],
      correctAnswer: 1
    },
    {
      question: "orientation: landscape nə zaman işləyir?",
      options: ["Ekran kvadrat olduqda", "Ekran eni hündürlükdən böyük olduqda", "Ekran portrait olduqda", "Hər zaman"],
      correctAnswer: 1
    },
    {
      question: "clamp() funksiyası nə edir?",
      options: ["Minimum, preferred və maximum dəyər təyin edir", "Yalnız minimum dəyər", "Yalnız maksimum dəyər", "Rəngləri qarışdırır"],
      correctAnswer: 0
    }
  ]
};

export default topic5;