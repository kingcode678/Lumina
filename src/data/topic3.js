export const topic3 = {
  id: 3,
  title: "Flexbox Layout Sistemi",
  duration: "60 dəq",
  isFree: false,
  
  content: `
    <h4>Flexbox-a Giriş</h4>
    <p>Flexbox (Flexible Box Layout) bir ölçülü layout sistemi olub, elementlərin sətir və ya sütun şəklində düzülüşünü idarə etməyə imkan verir. Əsasən naviqasiya barları, kartlar və mərkəzləşdirilmiş kontentlər üçün istifadə olunur.</p>
    
    <h4>Flex Container</h4>
    <p>Flexbox istifadə etmək üçün əvvəlcə container-ə <code>display: flex</code> verilir:</p>
    <pre><code>.container {
  display: flex;
  flex-direction: row; /* row | row-reverse | column | column-reverse */
  flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
}</code></pre>

    <h4>Əsas Xüsusiyyətlər</h4>
    <ul>
      <li><code>justify-content</code> - Main axis üzrə düzləndirmə (flex-start, center, flex-end, space-between, space-around, space-evenly)</li>
      <li><code>align-items</code> - Cross axis üzrə düzləndirmə (stretch, flex-start, center, flex-end, baseline)</li>
      <li><code>align-content</code> - Çoxsətirli layout-lar üçün (flex-start, center, flex-end, space-between, space-around, stretch)</li>
      <li><code>gap</code> - Elementlər arası boşluq (row-gap, column-gap)</li>
    </ul>

    <h4>Flex Items</h4>
    <p>Container içindəki elementlərə tətbiq olunan xüsusiyyətlər:</p>
    <pre><code>.item {
  flex-grow: 1;      /* Böyümə nisbəti */
  flex-shrink: 0;    /* Kiçilmə icazəsi */
  flex-basis: 200px; /* İlkin ölçü */
  flex: 1 0 200px;   /* Shorthand: grow shrink basis */
  align-self: center; /* Fərdi düzləndirmə */
  order: 1;          /* Sıra nömrəsi */
}</code></pre>

    <h4>Praktiki Nümunələr</h4>
    <p>Mərkəzləşdirilmiş kontent:</p>
    <pre><code>.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}</code></pre>

    <p>Naviqasiya barı:</p>
    <pre><code>.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}</code></pre>
  `,

  starterCode: {
    html: `<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
</div>

<div class="navbar">
  <div class="logo">Logo</div>
  <div class="nav-links">
    <a href="#">Ana səhifə</a>
    <a href="#">Xidmətlər</a>
    <a href="#">Haqqımızda</a>
    <a href="#">Əlaqə</a>
  </div>
  <button class="cta">Qeydiyyat</button>
</div>`,
    
    css: `/* Flexbox Container */
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 200px;
  background: #f0f0f0;
  margin-bottom: 30px;
}

.flex-item {
  width: 80px;
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e293b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #6366f1;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #6366f1;
}

.cta {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}`,

    js: `// Flex item-ləri seç
const items = document.querySelectorAll('.flex-item');

// Hər birinə klik eventi əlavə et
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Aktiv class əlavə/çıxar
    item.classList.toggle('active');
    
    // Order dəyiş
    item.style.order = item.classList.contains('active') ? -1 : index;
    
    // XƏTANIN HƏLLİ: Template literal yerinə normal toplama istifadə edirik
    console.log('Item ' + (index + 1) + ' clicked, new order: ' + item.style.order);
  });
});

// Navbar scroll effekti
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});`
  },

  exercise: {
    title: "Responsive Flexbox Kartlar",
    description: "Flexbox istifadə edərək 3 sütunlu responsiv kart layout-u yaradın. Mobil görünüşdə 1 sütun, tabletdə 2 sütun, desktopda 3 sütun olsun.",
    requirements: [
      "Flex container yaradın (display: flex)",
      "flex-wrap: wrap istifadə edin",
      "Kartlar üçün flex-basis təyin edin",
      "gap xüsusiyyəti ilə boşluq verin",
      "justify-content: space-between istifadə edin",
      "Hər kartda şəkil, başlıq və mətn olsun",
      "Mobil üçün media query yazın (max-width: 768px)"
    ],
    starterCode: `<div class="card-container">
  </div>

<style>
  .card-container {
    /* Flexbox kodunuzu bura yazın */
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    flex: 1 1 calc(33.333% - 20px);
  }
  
  @media (max-width: 768px) {
    .card {
      flex: 1 1 100%;
    }
  }
</style>`
  },

  quiz: [
    {
      question: "Flexbox container yaratmaq üçün hansı xüsusiyyət istifadə olunur?",
      options: ["display: block", "display: flex", "display: grid", "position: flex"],
      correctAnswer: 1
    },
    {
      question: "justify-content xüsusiyyəti hansı istiqamətdə düzləndirmə edir?",
      options: ["Cross axis", "Main axis", "Vertical", "Horizontal only"],
      correctAnswer: 1
    },
    {
      question: "Elementlərin sırasını dəyişmək üçün hansı xüsusiyyət istifadə olunur?",
      options: ["flex-order", "order", "z-index", "sequence"],
      correctAnswer: 1
    },
    {
      question: "flex-direction: column verildikdə main axis hansı istiqamətdə olur?",
      options: ["Üfüqi", "Şaquli", "Diaqonal", "Mərkəzdən xaricə"],
      correctAnswer: 1
    },
    {
      question: "space-between dəyəri nə edir?",
      options: ["Bütün boşluqları bərabər bölür", "İlk və son elementləri kənara çəkir, aralarını bərabər bölür", "Hər element ətrafında eyni boşluq yaradır", "Elementləri mərkəzləşdirir"],
      correctAnswer: 1
    },
    {
      question: "align-items: stretch default dəyərdir. Bu nə deməkdir?",
      options: ["Elementlər uzanır", "Elementlər container hündürlüyünə bərabər uzanır", "Elementlər kiçilir", "Elementlər gizlənir"],
      correctAnswer: 1
    },
    {
      question: "flex: 1 0 auto ifadəsində 1 nəyi göstərir?",
      options: ["flex-shrink", "flex-grow", "flex-basis", "order"],
      correctAnswer: 1
    },
    {
      question: "Hansı xüsusiyyət yalnız bir flex item-ə tətbiq olunur?",
      options: ["justify-content", "align-items", "align-self", "flex-wrap"],
      correctAnswer: 2
    },
    {
      question: "gap xüsusiyyəti nə üçün istifadə olunur?",
      options: ["Margin əvəzi", "Elementlər arası boşluq", "Padding yaratmaq", "Border boşluğu"],
      correctAnswer: 1
    },
    {
      question: "flex-wrap: wrap nə edir?",
      options: ["Elementləri gizlədir", "Elementlər sığmadıqda növbəti sətirə keçir", "Elementləri kiçildir", "Scroll yaradır"],
      correctAnswer: 1
    }
  ]
};

export default topic3;