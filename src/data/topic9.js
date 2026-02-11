export const topic9 = {
  id: 9,
  title: "SASS/SCSS Əsasları",
  duration: "80 dəq",
  isFree: false,
  
  content: `
    <h4>SASS vs SCSS</h4>
    <p>SASS (Syntactically Awesome Style Sheets) CSS preprocessor-dur. İki sintaksis var:</p>
    <ul>
      <li><strong>SCSS:</strong> CSS-ə oxşar, mötərizə və nöqtə-vergül ilə</li>
      <li><strong>SASS:</strong> Indent-based, mötərizəsiz</li>
    </ul>

    <h4>Variables</h4>
    <pre><code>$primary-color: #6366f1;
$spacing-unit: 8px;
$font-stack: 'Segoe UI', sans-serif;

.button {
  background: $primary-color;
  padding: $spacing-unit * 2;
  font-family: $font-stack;
}</code></pre>

    <h4>Nesting (Yuva)</h4>
    <pre><code>.card {
  background: white;
  
  &__title {
    font-size: 20px;
    
    &:hover {
      color: $primary-color;
    }
  }
  
  &--featured {
    border: 2px solid gold;
  }
}</code></pre>

    <h4>Partials və Import</h4>
    <pre><code>// _variables.scss
$primary: #6366f1;

// main.scss
@import 'variables';
@import 'components/button';
@import 'components/card';</code></pre>

    <h4>Mixins</h4>
    <pre><code>@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button($bg: #6366f1, $color: white) {
  background: $bg;
  color: $color;
  padding: 12px 24px;
}

.button {
  @include flex-center;
  @include button(#ec4899, white);
}</code></pre>

    <h4>Extend/Inheritance</h4>
    <pre><code>%message {
  padding: 16px;
  border-radius: 4px;
}

.success {
  @extend %message;
  background: green;
}

.error {
  @extend %message;
  background: red;
}</code></pre>

    <h4>Functions və Operations</h4>
    <pre><code>@function rem($pixels) {
  @return $pixels / 16 * 1rem;
}

.title {
  font-size: rem(32); // 2rem
  width: 100% / 3;
}</code></pre>
  `,

  starterCode: {
    html: `<div class="sass-showcase">
  <h1>SASS/SCSS Features Demo</h1>
  
  <section class="buttons">
    <h2>Buttons with Mixins</h2>
    <button class="btn btn--primary">Primary Button</button>
    <button class="btn btn--secondary">Secondary Button</button>
    <button class="btn btn--large btn--primary">Large Button</button>
    <button class="btn btn--small btn--secondary">Small Button</button>
  </section>

  <section class="cards">
    <h2>Cards with Nesting</h2>
    <div class="card">
      <img src="https://picsum.photos/400/200" alt="Card" class="card__image">
      <div class="card__body">
        <h3 class="card__title">Standard Card</h3>
        <p class="card__text">Using SASS nesting and BEM together.</p>
        <a href="#" class="card__link">Read more →</a>
      </div>
    </div>
    
    <div class="card card--featured">
      <img src="https://picsum.photos/400/200" alt="Card" class="card__image">
      <div class="card__body">
        <h3 class="card__title">Featured Card</h3>
        <p class="card__text">With modifier class for special styling.</p>
        <a href="#" class="card__link">Read more →</a>
      </div>
    </div>
  </section>

  <section class="grid-demo">
    <h2>Grid with Loops</h2>
    <div class="grid">
      <div class="grid__item grid__item--1">1</div>
      <div class="grid__item grid__item--2">2</div>
      <div class="grid__item grid__item--3">3</div>
      <div class="grid__item grid__item--4">4</div>
      <div class="grid__item grid__item--5">5</div>
      <div class="grid__item grid__item--6">6</div>
    </div>
  </section>

  <section class="alerts">
    <h2>Alerts with Extend</h2>
    <div class="alert alert--success">Success message!</div>
    <div class="alert alert--warning">Warning message!</div>
    <div class="alert alert--error">Error message!</div>
    <div class="alert alert--info">Info message!</div>
  </section>
</div>`,
    
    css: `/* 
 * Bu CSS SASS-dan compile olunmuşdur
 * Aşağıda SCSS kodu və nəticə göstərilir
 */

/* ========== VARIABLES ========== */
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #8b5cf6;
  --accent: #ec4899;
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;
  --gray-100: #f1f5f9;
  --gray-800: #1e293b;
  --space-unit: 8px;
  --radius: 8px;
}

/* ========== MIXINS (Compiled) ========== */
/* 
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
*/

/* ========== BUTTONS ========== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3);
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  font-family: inherit;
}

/* 
.btn--primary {
  @include button-variant(var(--primary), white);
}
*/
.btn--primary {
  background: var(--primary);
  color: white;
}

.btn--primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

/* 
.btn--secondary {
  @include button-variant(transparent, var(--primary));
  border: 2px solid var(--primary);
}
*/
.btn--secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn--secondary:hover {
  background: var(--primary);
  color: white;
}

/* 
.btn--large {
  @include button-size(16px, 32px, 18px);
}
*/
.btn--large {
  padding: 16px 32px;
  font-size: 18px;
}

/* 
.btn--small {
  @include button-size(8px, 16px, 12px);
}
*/
.btn--small {
  padding: 8px 16px;
  font-size: 12px;
}

/* ========== CARDS with Nesting ========== */
/* 
.card {
  background: white;
  border-radius: $radius;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  
  &__image { width: 100%; height: 200px; object-fit: cover; }
  &__body { padding: $space-unit * 3; }
  &__title { font-size: 20px; margin-bottom: $space-unit; }
  &__text { color: #64748b; line-height: 1.6; }
  &__link { color: $primary; text-decoration: none; }
  
  &--featured {
    border: 2px solid $accent;
    position: relative;
  }
}
*/
.card {
  background: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 400px;
  margin-bottom: 24px;
}

.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card__body {
  padding: 24px;
}

.card__title {
  font-size: 20px;
  margin-bottom: 8px;
  color: var(--gray-800);
}

.card__text {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card__link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.card__link:hover {
  text-decoration: underline;
}

.card--featured {
  border: 2px solid var(--accent);
  position: relative;
}

.card--featured::before {
  content: '★ Featured';
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--accent);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

/* ========== GRID with Loop ========== */
/* 
@for $i from 1 through 6 {
  .grid__item--#{$i} {
    animation-delay: $i * 0.1s;
  }
}
*/
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 600px;
}

.grid__item {
  aspect-ratio: 1;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  animation: fadeIn 0.5s ease backwards;
}

.grid__item--1 { animation-delay: 0.1s; }
.grid__item--2 { animation-delay: 0.2s; }
.grid__item--3 { animation-delay: 0.3s; }
.grid__item--4 { animation-delay: 0.4s; }
.grid__item--5 { animation-delay: 0.5s; }
.grid__item--6 { animation-delay: 0.6s; }

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== ALERTS with Extend ========== */
/* 
%alert-base {
  padding: 16px;
  border-radius: $radius;
  margin-bottom: $space-unit * 2;
}

.alert--success {
  @extend %alert-base;
  background: lighten($success, 45%);
  color: darken($success, 20%);
  border-left: 4px solid $success;
}
*/
.alert {
  padding: 16px;
  border-radius: var(--radius);
  margin-bottom: 16px;
  font-weight: 500;
}

.alert--success {
  background: #d1fae5;
  color: #065f46;
  border-left: 4px solid var(--success);
}

.alert--warning {
  background: #fef3c7;
  color: #92400e;
  border-left: 4px solid var(--warning);
}

.alert--error {
  background: #fee2e2;
  color: #991b1b;
  border-left: 4px solid var(--error);
}

.alert--info {
  background: #dbeafe;
  color: #1e40af;
  border-left: 4px solid var(--info);
}

/* Global */
body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: var(--gray-100);
  padding: 40px;
  color: var(--gray-800);
}

section {
  margin-bottom: 48px;
}

h1, h2 {
  margin-bottom: 24px;
  color: var(--gray-800);
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
  border-bottom: 2px solid var(--primary);
  padding-bottom: 8px;
  display: inline-block;
}`,

    js: `// SASS Compile Simulation
// Bu kod SASS-ın JavaScript-də necə işlədiyini göstərir

const sassFeatures = {
  variables: {
    '$primary': '#6366f1',
    '$spacing': '8px',
    '$radius': '8px'
  },
  
  // Mixin simulation
  mixins: {
    button: (bg = '#6366f1', color = 'white') => ({
      background: bg,
      color: color,
      padding: '12px 24px'
    }),
    
    flexCenter: () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    })
  },
  
  // Function simulation
  functions: {
    rem: (px) => px / 16 + 'rem',
    lighten: (color, percent) => {
      // Simplified color lightening
      return color + ' (lightened ' + percent + '%)';
    },
    darken: (color, percent) => {
      return color + ' (darkened ' + percent + '%)';
    }
  }
};

// Dynamic style generator (like SASS)
function generateStyles() {
  const styles = [];
  
  // Loop simulation (like @for)
  for (let i = 1; i <= 6; i++) {
    styles.push({
      selector: '.grid__item--' + i,
      delay: (i * 0.1).toFixed(1) + 's'
    });
  }
  
  console.log('Generated grid delays:', styles);
  return styles;
}

// Apply generated styles
const gridItems = document.querySelectorAll('.grid__item');
generateStyles().forEach((style, index) => {
  if (gridItems[index]) {
    gridItems[index].style.animationDelay = style.delay;
  }
});

// Interactive demo: Change primary color
const colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.value = '#6366f1';
colorPicker.style.cssText = 'position:fixed;top:20px;right:20px;z-index:1000;';

colorPicker.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--primary', e.target.value);
  console.log('Primary color updated:', e.target.value);
});

document.body.appendChild(colorPicker);

// Show SASS compile info
console.log('SASS Features available:', Object.keys(sassFeatures));
console.log('Sample Mixin output:', sassFeatures.mixins.button('#ec4899'));`,
  },

  exercise: {
    title: "SASS Portfolio Template",
    description: "SASS istifadə edərək portfolio saytı üçün variable system, mixin library və component strukturu yaradın. 7-1 pattern istifadə edin.",
    requirements: [
      "_variables.scss faylında rəng palitrası və spacing system yaradın",
      "_mixins.scss faylında flexbox, button, card mixinləri yazın",
      "@function rem() yaradın pixel-to-rem çevirmə üçün",
      "@each ilə social icon color-ları təyin edin (facebook: blue, twitter: cyan və s.)",
      "@for ilə gallery grid item-lərinə staggered animation delay verin",
      "BEM + SASS nesting strukturu qurun",
      "@import ilə bütün partial-ları main.scss-də birləşdirin"
    ],
    starterCode: `// _variables.scss
$colors: (
  primary: #6366f1,
  secondary: #8b5cf6,
  // davam edin...
);

$breakpoints: (
  mobile: 768px,
  // davam edin...
);

// _mixins.scss
@mixin respond($breakpoint) {
  // Media query mixin
}

// main.scss
@import 'variables';
@import 'mixins';
// davam edin...

// HTML strukturu
<nav class="nav">
  <a class="nav__link" href="#">Home</a>
</nav>`,
  },

  quiz: [
    {
      question: "SASS və SCSS arasındakı əsas fərq nədir?",
      options: ["Rəng dəstəyi", "Sintaksis (mötərizə və nöqtə-vergül)", "Browser dəstəyi", "Qiymət"],
      correctAnswer: 1
    },
    {
      question: "Variable necə təyin olunur?",
      options: ["--var", "$var", "@var", "#var"],
      correctAnswer: 1
    },
    {
      question: "Mixin necə çağırılır?",
      options: ["@include mixin-name", "@use mixin-name", "@import mixin-name", "@mixin mixin-name"],
      correctAnswer: 0
    },
    {
      question: "& işarəsi nesting-də nəyi ifadə edir?",
      options: ["Parent selector", "Child selector", "Root", "Body"],
      correctAnswer: 0
    },
    {
      question: "@extend nə üçün istifadə olunur?",
      options: ["Variable təyin etmək", "Inheritance/Miras almaq", "Loop yaratmaq", "Import etmək"],
      correctAnswer: 1
    },
    {
      question: "Partial fayl adı necə başlayır?",
      options: ["_", "-", ".", "#"],
      correctAnswer: 0
    },
    {
      question: "@mixin ilə @function arasındakı fərq?",
      options: ["Yoxdur", "Mixin CSS çıxarır, function dəyər qaytarır", "Function daha sürətlidir", "Mixin yalnız rənglər üçün"],
      correctAnswer: 1
    },
    {
      question: "@for $i from 1 through 3 neçə dəfə iterasiya edir?",
      options: ["2", "3", "4", "1"],
      correctAnswer: 1
    },
    {
      question: "lighten() və darken() nədir?",
      options: ["Mixins", "Functions", "Variables", "Directives"],
      correctAnswer: 1
    },
    {
      question: "7-1 pattern nədir?",
      options: ["7 mixin, 1 function", "7 folder, 1 main fayl strukturu", "7 rəng, 1 font", "7 breakpoint"],
      correctAnswer: 1
    }
  ]
};

export default topic9;