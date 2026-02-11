export const topic8 = {
  id: 8,
  title: "BEM Metodologiyası",
  duration: "50 dəq",
  isFree: false,
  
  content: `
    <h4>BEM Nədir?</h4>
    <p>BEM (Block Element Modifier) CSS class adlandırma konvensiyasıdır. Kodun təkrar istifadə ediləbilən, maintainable və aydın olmasını təmin edir.</p>
    
    <h4>BEM Strukturu</h4>
    <ul>
      <li><strong>Block:</strong> Müstəqil komponent (header, menu, button)</li>
      <li><strong>Element:</strong> Block-un hissəsi (__ ilə ayrılır) (menu__item, button__text)</li>
      <li><strong>Modifier:</strong> Block və ya Element-in vəziyyəti/variantı (-- ilə ayrılır) (button--primary, button--disabled)</li>
    </ul>

    <h4>Nümunələr</h4>
    <pre><code>/* Block */
.card { }

/* Element */
.card__title { }
.card__image { }
.card__content { }

/* Modifier */
.card--featured { }
.card__title--large { }</code></pre>

    <h4>Doğru və Yanlış İstifadə</h4>
    <pre><code>/* Yanlış - too specific */
.header .nav ul li a { }

/* Doğru - BEM */
.nav__link { }

/* Yanlış - element of element */
.card__header__title { }

/* Doğru */
.card__title { }</code></pre>

    <h4>Mixes (Birləşmələr)</h4>
    <p>Bir element həm block, həm də başqa block-un element-i ola bilər:</p>
    <pre><code>&lt;div class="card"&gt;
  &lt;button class="button card__button"&gt;Click&lt;/button&gt;
&lt;/div&gt;</code></pre>

    <h4>File Structure</h4>
    <pre><code>blocks/
  card/
    card.css
    card.js
    card__title.css
    card__image.css
    card--featured.css
  button/
    button.css
    button--primary.css</code></pre>
  `,

  starterCode: {
    html: `<!-- Header Block -->
<header class="header">
  <div class="header__logo">
    <img src="https://via.placeholder.com/40" alt="Logo" class="header__logo-img">
    <span class="header__logo-text">Brand</span>
  </div>
  
  <nav class="nav header__nav">
    <a href="#" class="nav__link nav__link--active">Home</a>
    <a href="#" class="nav__link">About</a>
    <a href="#" class="nav__link">Services</a>
    <a href="#" class="nav__link">Contact</a>
  </nav>
  
  <button class="button button--primary header__cta">Get Started</button>
</header>

<!-- Card Component -->
<div class="card card--featured">
  <img src="https://picsum.photos/400/250" alt="Card" class="card__image">
  <div class="card__content">
    <h3 class="card__title card__title--large">Featured Card Title</h3>
    <p class="card__text">This is a card component built with BEM methodology.</p>
    <div class="card__actions">
      <button class="button button--primary card__button">Read More</button>
      <button class="button button--secondary button--small card__button">Share</button>
    </div>
  </div>
</div>

<!-- Form Component -->
<form class="form">
  <div class="form__group">
    <label class="form__label">Email</label>
    <input type="email" class="form__input" placeholder="Enter email">
    <span class="form__error">Invalid email format</span>
  </div>
  
  <div class="form__group form__group--inline">
    <label class="form__label form__label--required">Password</label>
    <input type="password" class="form__input form__input--error" placeholder="Enter password">
  </div>
  
  <button class="button button--primary button--large button--full form__submit">Submit</button>
</form>`,
    
    css: `/* ========== BUTTON BLOCK ========== */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  font-family: inherit;
}

/* Button Modifiers */
.button--primary {
  background: #6366f1;
  color: white;
}

.button--primary:hover {
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.button--secondary {
  background: transparent;
  color: #6366f1;
  border: 2px solid #6366f1;
}

.button--secondary:hover {
  background: #6366f1;
  color: white;
}

.button--small {
  padding: 8px 16px;
  font-size: 12px;
}

.button--large {
  padding: 16px 32px;
  font-size: 16px;
}

.button--full {
  width: 100%;
}

.button:disabled,
.button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

/* ========== HEADER BLOCK ========== */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header__logo-img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.header__logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #1e293b;
}

.header__nav {
  display: flex;
  gap: 32px;
}

.header__cta {
  margin-left: 20px;
}

/* ========== NAV BLOCK ========== */
.nav {
  display: flex;
  align-items: center;
}

.nav__link {
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  position: relative;
  transition: color 0.2s;
}

.nav__link:hover {
  color: #6366f1;
}

.nav__link--active {
  color: #6366f1;
}

.nav__link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #6366f1;
  border-radius: 2px;
}

/* ========== CARD BLOCK ========== */
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 400px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.card--featured {
  border: 2px solid #6366f1;
  position: relative;
}

.card--featured::before {
  content: 'Featured';
  position: absolute;
  top: 16px;
  right: 16px;
  background: #6366f1;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  z-index: 1;
}

.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card__content {
  padding: 24px;
}

.card__title {
  font-size: 20px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 12px;
}

.card__title--large {
  font-size: 24px;
}

.card__text {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card__actions {
  display: flex;
  gap: 12px;
}

.card__button {
  flex: 1;
}

/* ========== FORM BLOCK ========== */
.form {
  max-width: 500px;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.form__group {
  margin-bottom: 24px;
}

.form__group--inline {
  display: flex;
  align-items: center;
  gap: 16px;
}

.form__label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.form__label--required::after {
  content: '*';
  color: #ef4444;
  margin-left: 4px;
}

.form__input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
  font-family: inherit;
}

.form__input:focus {
  outline: none;
  border-color: #6366f1;
}

.form__input--error {
  border-color: #ef4444;
  background: #fef2f2;
}

.form__input--error:focus {
  border-color: #ef4444;
}

.form__error {
  display: none;
  font-size: 12px;
  color: #ef4444;
  margin-top: 6px;
}

.form__input--error + .form__error {
  display: block;
}

.form__submit {
  margin-top: 8px;
}

/* Global Styles */
body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f1f5f9;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}`,

    js: `// BEM ilə JavaScript inteqrasiyası
document.addEventListener('DOMContentLoaded', () => {
  
  // Button click handler
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Modifier əlavə et
      this.classList.add('button--loading');
      
      // Simulate async action
      setTimeout(() => {
        this.classList.remove('button--loading');
        
        // Success state
        if (this.classList.contains('button--primary')) {
          this.classList.add('button--success');
          setTimeout(() => this.classList.remove('button--success'), 2000);
        }
      }, 1000);
    });
  });

  // Card interactions
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const image = card.querySelector('.card__image');
    const title = card.querySelector('.card__title');
    
    if (image && title) {
      image.addEventListener('click', () => {
        console.log('Card image clicked:', title.textContent);
        card.classList.toggle('card--expanded');
      });
    }
  });

  // Form validation
  const form = document.querySelector('.form');
  const inputs = form.querySelectorAll('.form__input');
  
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateInput(input);
    });
    
    input.addEventListener('input', () => {
      if (input.classList.contains('form__input--error')) {
        validateInput(input);
      }
    });
  });

  function validateInput(input) {
    const value = input.value.trim();
    const isRequired = input.closest('.form__group')
      ?.querySelector('.form__label--required');
    
    if (isRequired && !value) {
      input.classList.add('form__input--error');
      return false;
    }
    
    if (input.type === 'email' && value) {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(value)) {
        input.classList.add('form__input--error');
        return false;
      }
    }
    
    input.classList.remove('form__input--error');
    return true;
  }

  // Nav active state
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('nav__link--active'));
      link.classList.add('nav__link--active');
    });
  });

  console.log('BEM components initialized');
});

// Dynamic BEM class generator
function bem(block, element, modifiers) {
  let className = block;
  
  if (element) {
    className += '__' + element;
  }
  
  if (modifiers) {
    modifiers.split(' ').forEach(mod => {
      if (mod) className += ' ' + (element ? block + '__' + element : block) + '--' + mod;
    });
  }
  
  return className;
}

// Usage: bem('button', null, 'primary large') 
// Returns: "button button--primary button--large"`,
  },

  exercise: {
    title: "BEM Component Library",
    description: "BEM metodologiyası istifadə edərək aşağıdakı komponentləri yaradın: Modal, Tabs, Dropdown. Hər biri blok-element-modifier strukturunda olsun.",
    requirements: [
      "Modal block-u yaradın (overlay, content, close, header, body, footer elementləri)",
      "Tabs block-u yaradın (list, item, panel elementləri və active modifier-i)",
      "Dropdown block-u yaradın (toggle, menu, item elementləri və open modifier-i)",
      "Hər komponentdə minimum 2 modifier istifadə edin",
      "Mixes istifadə edərək komponentləri birləşdirin",
      "JavaScript ilə modifier-ləri idarə edin (active, open, disabled)",
      "File strukturu təşkil edin (hər komponent ayrı CSS bloku)"
    ],
    starterCode: `<!-- Modal -->
<div class="modal modal--open">
  <div class="modal__overlay"></div>
  <div class="modal__content modal__content--large">
    <!-- Elementləri əlavə edin -->
  </div>
</div>

<!-- Tabs -->
<div class="tabs">
  <!-- Kodunuzu yazın -->
</div>

<!-- Dropdown -->
<div class="dropdown dropdown--open">
  <!-- Kodunuzu yazın -->
</div>

<style>
  /* BEM strukturunu qurun */
  
</style>`
  },

  quiz: [
    {
      question: "BEM-də element necə ayrılır?",
      options: ["_", "-", "__", "--"],
      correctAnswer: 2
    },
    {
      question: "Modifier hansı simvol ilə ayrılır?",
      options: ["__", "--", "___", "=="],
      correctAnswer: 1
    },
    {
      question: "Aşağıdakılardan hansı doğru BEM adlandırmasıdır?",
      options: ["header__nav__link", "header__link", "header_nav_link", "header--link"],
      correctAnswer: 1
    },
    {
      question: "Block nədir?",
      options: ["CSS property", "Müstəqil komponent", "HTML tag", "JavaScript funksiyası"],
      correctAnswer: 1
    },
    {
      question: "card--featured nəyi ifadə edir?",
      options: ["card block-unda featured elementi", "card block-unun featured variantı", "card və featured block-ları", "Yanlış sintaksis"],
      correctAnswer: 1
    },
    {
      question: "Mix nədir?",
      options: ["CSS preprocessor", "Bir elementin birdən çox block olması", "JavaScript kitabxanası", "Color funksiyası"],
      correctAnswer: 1
    },
    {
      question: "button__text--large nədir?",
      options: ["Yanlış", "Element-in modifier-i", "Block-un modifier-i", "Yalnız element"],
      correctAnswer: 1
    },
    {
      question: "Niyə BEM istifadə edirik?",
      options: ["Daha sürətli yazmaq üçün", "Specificity problemini həll etmək və kodu strukturlaşdırmaq", "Daha az kod yazmaq", "Browser dəstəyini artırmaq"],
      correctAnswer: 1
    },
    {
      question: ".nav__link.nav__link--active yazmaq nəyi göstərir?",
      options: ["Yanlış sintaksis", "Link elementi və active modifier-i eyni anda", "İki fərqli element", "İki fərqli block"],
      correctAnswer: 1
    },
    {
      question: "File strukturunda hər block üçün ayrı fayl yaratmaq hansı üstünlüyü verir?",
      options: ["Daha sürətli yükləmə", "Modulluq və asan maintain", "Daha az CSS", "Avtomatik minification"],
      correctAnswer: 1
    }
  ]
};

export default topic8;