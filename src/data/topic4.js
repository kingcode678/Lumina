export const topic4 = {
  id: 4,
  title: "CSS Grid Layout",
  duration: "60 dəq",
  isFree: false,
  
  content: `
    <h4>CSS Grid-ə Giriş</h4>
    <p>CSS Grid iki ölçülü layout sistemidir və sətir və sütunlardan ibarət grid strukturu yaratmağa imkan verir. Flexbox-dan fərqli olaraq, həm üfüqi, həm də şaquli düzləndirməni eyni vaxtda idarə edə bilər.</p>
    
    <h4>Grid Container</h4>
    <p>Grid yaratmaq üçün:</p>
    <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
  gap: 20px;
}</code></pre>

    <h4>Repeat və Fr Unit</h4>
    <p>Təkrarlayan sütunlar və çevik ölçülər:</p>
    <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 bərabər sütun */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}</code></pre>

    <h4>Grid Template Areas</h4>
    <p>Adlandırılmış grid areas ilə layout:</p>
    <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }</code></pre>

    <h4>Grid Item Xüsusiyyətləri</h4>
    <pre><code>.grid-item {
  grid-column: 1 / 3;        /* 1-ci sütundan 3-ə qədər */
  grid-row: span 2;          /* 2 sətir tut */
  grid-column: span 2;       /* 2 sütun tut */
  justify-self: center;      /* Horizontal düzləndirmə */
  align-self: center;        /* Vertical düzləndirmə */
}</code></pre>

    <h4>Auto-fit vs Auto-fill</h4>
    <ul>
      <li><strong>auto-fill</strong>: Boş grid track-ləri saxlayır</li>
      <li><strong>auto-fit</strong>: Boş track-ləri çökdürür, mövcudları genişləndirir</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="grid-layout">
  <header class="grid-header">Header</header>
  <aside class="grid-sidebar">Sidebar</aside>
  <main class="grid-main">Main Content</main>
  <aside class="grid-aside">Right Aside</aside>
  <footer class="grid-footer">Footer</footer>
</div>

<div class="photo-grid">
  <div class="photo-item tall">1</div>
  <div class="photo-item">2</div>
  <div class="photo-item wide">3</div>
  <div class="photo-item">4</div>
  <div class="photo-item">5</div>
  <div class="photo-item tall">6</div>
</div>`,
    
    css: `/* Grid Layout */
.grid-layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 20px;
  min-height: 400px;
  margin-bottom: 40px;
}

.grid-header {
  grid-area: header;
  background: #6366f1;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
}

.grid-sidebar {
  grid-area: sidebar;
  background: #1e293b;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.grid-main {
  grid-area: main;
  background: #f1f5f9;
  padding: 20px;
  border-radius: 8px;
}

.grid-aside {
  grid-area: aside;
  background: #334155;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.grid-footer {
  grid-area: footer;
  background: #0f172a;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}

/* Photo Grid */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  gap: 15px;
  grid-auto-flow: dense;
}

.photo-item {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  border-radius: 8px;
}

.photo-item.tall {
  grid-row: span 2;
}

.photo-item.wide {
  grid-column: span 2;
}`,

    js: `// Grid item-ləri seç
const photoItems = document.querySelectorAll('.photo-item');

// Random rəng generator
const getRandomColor = () => {
  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#10b981', '#f59e0b'];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Hər birinə klik eventi
photoItems.forEach(item => {
  item.addEventListener('click', () => {
    // Rəng dəyiş
    item.style.background = getRandomColor();
    
    // Scale animasiyası
    item.style.transform = 'scale(0.95)';
    setTimeout(() => {
      item.style.transform = 'scale(1)';
    }, 200);
    
    console.log('Photo clicked:', item.textContent);
  });
});

// Layout dəyiş düyməsi (əgər əlavə edilsə)
const toggleLayout = () => {
  const grid = document.querySelector('.photo-grid');
  const currentCols = grid.style.gridTemplateColumns;
  
  if (currentCols === 'repeat(2, 1fr)') {
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
  } else {
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  }
};`
  },

  exercise: {
    title: "Instagram-style Photo Grid",
    description: "CSS Grid istifadə edərək Instagram-oxşar photo grid yaradın. Bəzi şəkillər 2x2, bəziləri 1x1 ölçüsündə olsun.",
    requirements: [
      "grid-template-columns: repeat(3, 1fr) istifadə edin",
      "grid-auto-rows ilə sətir hündürlüyü təyin edin",
      "Bəzi şəkillərə grid-column: span 2 verin",
      "Bəzi şəkillərə grid-row: span 2 verin",
      "gap: 10px ilə boşluq yaradın",
      "object-fit: cover ilə şəkilləri düzgün göstərin",
      "Hover effekti əlavə edin (scale və ya opacity)"
    ],
    starterCode: `<div class="instagram-grid">
  <!-- 9 şəkil əlavə edin, bəziləri span 2 olsun -->
  <div class="grid-item">
    <img src="https://via.placeholder.com/300" alt="Photo 1">
  </div>
  <!-- Digər şəkilləri əlavə edin -->
  
</div>

<style>
  .instagram-grid {
    display: grid;
    /* Grid kodunuzu bura yazın */
    
    max-width: 600px;
    margin: 0 auto;
  }
  
  .grid-item {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }
  
  .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Span classes */
  .span-2 {
    /* grid-column və ya grid-row span */
  }
</style>`
  },

  quiz: [
    {
      question: "CSS Grid container yaratmaq üçün hansı xüsusiyyət istifadə olunur?",
      options: ["display: grid", "display: flex", "position: grid", "layout: grid"],
      correctAnswer: 0
    },
    {
      question: "1fr uniti nə deməkdir?",
      options: ["Fixed width", "Fraction of available space", "Full width", "Fast render"],
      correctAnswer: 1
    },
    {
      question: "grid-template-areas nə üçün istifadə olunur?",
      options: ["Rəng təyin etmək", "Adlandırılmış grid bölgələri yaratmaq", "Font seçmək", "Animasiya əlavə etmək"],
      correctAnswer: 1
    },
    {
      question: "Elementin 2 sütun tutmasını necə təyin edərik?",
      options: ["grid-column: 2", "grid-column: span 2", "column-span: 2", "span-column: 2"],
      correctAnswer: 1
    },
    {
      question: "repeat(3, 1fr) nə edir?",
      options: ["3 dəfə 1fr təkrarlayır", "3 sütun yaradır", "Hər ikisi", "Heç biri"],
      correctAnswer: 2
    },
    {
      question: "auto-fit və auto-fill arasındakı fərq nədir?",
      options: ["Fərq yoxdur", "auto-fit boş track-ləri çökdürür", "auto-fill daha sürətlidir", "auto-fit yalnız mobil üçün işləyir"],
      correctAnswer: 1
    },
    {
      question: "grid-gap və gap arasındakı fərq?",
      options: ["grid-gap köhnə sintaksisdir", "gap yalnız flex üçün işləyir", "Fərq yoxdur, eyni şeydir", "grid-gap daha güclüdür"],
      correctAnswer: 2
    },
    {
      question: "justify-items xüsusiyyəti nə edir?",
      options: ["Bütün grid item-ləri üfüqi düzləndirir", "Container-i mərkəzləşdirir", "Sətir hündürlüyünü təyin edir", "Sütun enini təyin edir"],
      correctAnswer: 0
    },
    {
      question: "minmax(200px, 1fr) nə deməkdir?",
      options: ["Minimum 200px, maksimum 1fr", "200px və ya 1fr, hansı kiçikdirsə", "200px ilə 1fr arası", "Heç biri"],
      correctAnswer: 0
    },
    {
      question: "grid-auto-flow: dense nə edir?",
      options: ["Boş yerləri doldurur", "Sıxlığı artırır", "Elementləri kiçildir", "Responsiv edir"],
      correctAnswer: 0
    }
  ]
};

export default topic4;