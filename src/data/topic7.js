export const topic7 = {
  id: 7,
  title: "CSS Variables və Gradients",
  duration: "55 dəq",
  isFree: false,
  
  content: `
    <h4>CSS Variables (Custom Properties)</h4>
    <p>CSS-də dəyişənlər -- prefiksi ilə təyin olunur və var() funksiyası ilə istifadə edilir:</p>
    <pre><code>:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --spacing-unit: 8px;
  --border-radius: 8px;
  --font-stack: 'Segoe UI', system-ui, sans-serif;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
}</code></pre>

    <h4>Variable Scope</h4>
    <pre><code>/* Global */
:root { --color: blue; }

/* Local */
.card {
  --color: red;
  color: var(--color); /* red */
}

.button {
  color: var(--color); /* blue (global) */
}</code></pre>

    <h4>Default Dəyərlər</h4>
    <pre><code>color: var(--text-color, black); /* Əgər --text-color yoxdursa, black istifadə et */</code></pre>

    <h4>Linear Gradients</h4>
    <pre><code>/* Tək rəng keçidi */
background: linear-gradient(to right, red, blue);

/* Bucaq ilə */
background: linear-gradient(45deg, #6366f1, #ec4899);

/* Çoxlu dayanacaqlar */
background: linear-gradient(90deg, red 0%, yellow 50%, green 100%);

/* Şəffaf keçid */
background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);</code></pre>

    <h4>Radial Gradients</h4>
    <pre><code>/* Dairəvi gradient */
background: radial-gradient(circle, white, black);

/* Ellipse */
background: radial-gradient(ellipse at top, #6366f1, transparent);

/* Məzmorlu dairələr */
background: repeating-radial-gradient(circle, #6366f1 0, #6366f1 10px, #8b5cf6 10px, #8b5cf6 20px);</code></pre>

    <h4>Conic Gradients</h4>
    <pre><code>background: conic-gradient(from 0deg, red, yellow, green, blue, red);</code></pre>

    <h4>Dark Mode ilə Variables</h4>
    <pre><code>@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #0f172a;
    --text-color: #f8fafc;
  }
}</code></pre>
  `,

  starterCode: {
    html: `<div class="theme-toggle">
  <button onclick="toggleTheme()">🌓 Tema Dəyiş</button>
</div>

<div class="gradient-showcase">
  <h2>Linear Gradients</h2>
  <div class="gradient-box linear-1">Default (to bottom)</div>
  <div class="gradient-box linear-2">45deg Bucaq</div>
  <div class="gradient-box linear-3">Çoxlu rəng</div>
  <div class="gradient-box linear-4">Şəffaf</div>
  
  <h2>Radial Gradients</h2>
  <div class="gradient-box radial-1">Circle</div>
  <div class="gradient-box radial-2">Ellipse at corner</div>
  
  <h2>Conic Gradient</h2>
  <div class="gradient-box conic">Pie Chart effekti</div>
</div>

<div class="card-demo">
  <div class="card">
    <h3>Kart Başlığı</h3>
    <p>Bu kart CSS variables istifadə edir.</p>
    <button class="btn-primary">Primary</button>
    <button class="btn-secondary">Secondary</button>
  </div>
</div>

<div class="dynamic-box" id="dynamicBox">
  Dinamik Stil
</div>

<div class="controls">
  <label>
    Primary Rəng:
    <input type="color" id="primaryColor" value="#6366f1">
  </label>
  <label>
    Border Radius:
    <input type="range" id="borderRadius" min="0" max="50" value="8">
  </label>
  <label>
    Spacing:
    <input type="range" id="spacing" min="4" max="40" value="16">
  </label>
</div>`,
    
    css: `:root {
  /* Əsas rənglər */
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #8b5cf6;
  --accent: #ec4899;
  
  /* Neutrals */
  --bg: #ffffff;
  --surface: #f1f5f9;
  --text: #0f172a;
  --text-muted: #64748b;
  
  /* Ölçülər */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --radius: 8px;
  --radius-lg: 16px;
  
  /* Typography */
  --font: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Dark mode */
[data-theme="dark"] {
  --bg: #0f172a;
  --surface: #1e293b;
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  padding: var(--space-lg);
  transition: background 0.3s, color 0.3s;
}

.theme-toggle {
  margin-bottom: var(--space-lg);
}

button {
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}

.theme-toggle button {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--text-muted);
}

/* Gradient Showcase */
.gradient-showcase h2 {
  margin: var(--space-lg) 0 var(--space-md);
  color: var(--primary);
}

.gradient-box {
  width: 100%;
  height: 100px;
  margin-bottom: var(--space-md);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.linear-1 {
  background: linear-gradient(var(--primary), var(--secondary));
}

.linear-2 {
  background: linear-gradient(45deg, var(--primary), var(--accent));
}

.linear-3 {
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 33%, #ec4899 66%, #f43f5e 100%);
}

.linear-4 {
  background: linear-gradient(to bottom, rgba(99, 102, 241, 0.8), transparent),
              linear-gradient(to right, var(--primary), var(--secondary));
}

.radial-1 {
  background: radial-gradient(circle at center, var(--primary), var(--secondary));
}

.radial-2 {
  background: radial-gradient(ellipse at top right, var(--accent), var(--primary) 50%, var(--surface) 70%);
}

.conic {
  background: conic-gradient(from 0deg, var(--primary) 0deg 120deg, 
                                        var(--secondary) 120deg 240deg, 
                                        var(--accent) 240deg 360deg);
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

/* Card Demo */
.card-demo {
  margin-top: var(--space-lg);
}

.card {
  background: var(--surface);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  max-width: 400px;
}

.card h3 {
  color: var(--primary);
  margin-bottom: var(--space-sm);
}

.card p {
  color: var(--text-muted);
  margin-bottom: var(--space-md);
  line-height: 1.6;
}

.btn-primary {
  background: var(--primary);
  color: white;
  margin-right: var(--space-sm);
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}

/* Dynamic Box */
.dynamic-box {
  margin-top: var(--space-lg);
  padding: var(--space-lg);
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: var(--radius);
  text-align: center;
  font-size: 1.2rem;
  transition: all 0.3s;
}

/* Controls */
.controls {
  margin-top: var(--space-lg);
  padding: var(--space-md);
  background: var(--surface);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  max-width: 400px;
}

.controls label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text);
}

.controls input[type="color"] {
  width: 60px;
  height: 30px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
}

.controls input[type="range"] {
  width: 150px;
}`,

    js: `// Tema dəyişdirici
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  console.log('Tema dəyişdirildi:', newTheme);
}

// LocalStorage-dan tema yüklə
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// CSS Variables real-time dəyişdirici
const root = document.documentElement;
const primaryInput = document.getElementById('primaryColor');
const radiusInput = document.getElementById('borderRadius');
const spacingInput = document.getElementById('spacing');

primaryInput.addEventListener('input', (e) => {
  root.style.setProperty('--primary', e.target.value);
  // Tünd versiyasını da hesabla
  root.style.setProperty('--primary-dark', adjustBrightness(e.target.value, -20));
});

radiusInput.addEventListener('input', (e) => {
  root.style.setProperty('--radius', e.target.value + 'px');
});

spacingInput.addEventListener('input', (e) => {
  const val = parseInt(e.target.value);
  root.style.setProperty('--space-xs', (val / 4) + 'px');
  root.style.setProperty('--space-sm', (val / 2) + 'px');
  root.style.setProperty('--space-md', val + 'px');
  root.style.setProperty('--space-lg', (val * 1.5) + 'px');
});

// Rəng parlaqlığını dəyişmək üçün funksiya
function adjustBrightness(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
}

// Bütün variable-ları göstər
function showCSSVariables() {
  const styles = getComputedStyle(document.documentElement);
  console.log('Primary:', styles.getPropertyValue('--primary').trim());
  console.log('Spacing MD:', styles.getPropertyValue('--space-md').trim());
}

showCSSVariables();`
  },

  exercise: {
    title: "Themable Component Library",
    description: "CSS variables istifadə edərək 3 düymə (primary, secondary, danger) və 2 kart variantı yaradın. Hər şey variable-lar ilə idarə olunsun.",
    requirements: [
      "Minimum 10 CSS variable təyin edin :root-da",
      "3 fərqli düymə variantı yaradın (primary, secondary, danger)",
      "Hover və active state-ləri olsun",
      "2 kart variantı (default, outlined)",
      "Border radius, spacing, shadow variable-larla idarə olunsun",
      "Rəng palitrası harmonik olsun (primary, secondary, accent)",
      "Dark mode dəstəyi üçün variable strukturu qurun"
    ],
    starterCode: `<div class="component-library">
  <div class="buttons">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-danger">Danger</button>
  </div>
  
  <div class="cards">
    <!-- Kartları bura əlavə edin -->
  </div>
</div>

<style>
  :root {
    /* Variable-larınızı bura yazın */
    
  }
  
  /* Kodlarınız */
</style>`
  },

  quiz: [
    {
      question: "CSS variable necə təyin olunur?",
      options: ["$variable", "--variable", "@variable", "#variable"],
      correctAnswer: 1
    },
    {
      question: "Variable istifadə etmək üçün hansı funksiya işlədilir?",
      options: ["var()", "get()", "use()", "calc()"],
      correctAnswer: 0
    },
    {
      question: ":root selektoru nəyi ifadə edir?",
      options: ["Body elementi", "HTML elementi", "Bütün elementlər", "Class-ı root olan element"],
      correctAnswer: 1
    },
    {
      question: "linear-gradient(to right, red, blue) necə işləyir?",
      options: ["Yuxarıdan aşağıya", "Soldan sağa", "Sağdan sola", "Mərkəzdən kənara"],
      correctAnswer: 1
    },
    {
      question: "Default dəyər necə təyin olunur?",
      options: ["var(--color, black)", "var(--color || black)", "var(--color) || black", "var(--color) default black"],
      correctAnswer: 0
    },
    {
      question: "radial-gradient və linear-gradient fərqi nədir?",
      options: ["Rəng sayı", "Yayılma forması", "Sürət", "Browser dəstəyi"],
      correctAnswer: 1
    },
    {
      question: "prefers-color-scheme media query nə üçündür?",
      options: ["Ekran ölçüsü", "İstifadəçinin tema seçimi", "Orientation", "Resolution"],
      correctAnswer: 1
    },
    {
      question: "calc() funksiyası nə edir?",
      options: ["Rəng hesablayır", "Ölçü hesablamaları", "Font seçir", "Animasiya yaradır"],
      correctAnswer: 1
    },
    {
      question: "conic-gradient əsasən nə üçün istifadə olunur?",
      options: ["Dairəvi diaqramlar", "Mətn fonu", "Border effekti", "Shadow"],
      correctAnswer: 0
    },
    {
      question: "Variable scope necə işləyir?",
      options: ["Yalnız global", "Yalnız local", "Hierarchical (irsi)", "Heç biri"],
      correctAnswer: 2
    }
  ]
};

export default topic7;