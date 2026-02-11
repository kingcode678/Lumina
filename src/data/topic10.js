export const topic10 = {
  id: 10,
  title: "Tailwind CSS",
  duration: "85 dəq",
  isFree: false,
  
  content: `
    <h4>Tailwind CSS Nədir?</h4>
    <p>Utility-first CSS framework-dur. Əvvəlcədən yazılmış class-lar ilə sürətli development imkanı verir. Custom design system yaratmaq üçün konfiqurasiya edilə bilər.</p>
    
    <h4>Utility Classes</h4>
    <pre><code>&lt;!-- Traditional CSS --&gt;
&lt;div class="card"&gt;...&lt;/div&gt;

&lt;!-- Tailwind --&gt;
&lt;div class="bg-white rounded-lg shadow-md p-6"&gt;...&lt;/div&gt;</code></pre>

    <h4>Əsas Konseptlər</h4>
    <ul>
      <li><strong>Responsive:</strong> md:flex, lg:grid, xl:hidden</li>
      <li><strong>Hover/Focus:</strong> hover:bg-blue-600, focus:ring-2</li>
      <li><strong>Dark mode:</strong> dark:bg-gray-800</li>
      <li><strong>States:</strong> disabled:opacity-50, first:mt-0</li>
    </ul>

    <h4>Layout</h4>
    <pre><code>&lt;div class="flex items-center justify-between"&gt;
  &lt;div class="grid grid-cols-3 gap-4"&gt;
    &lt;div class="col-span-2"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <h4>Customization (tailwind.config.js)</h4>
    <pre><code>module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brand: '#6366f1',
      },
      spacing: {
        '128': '32rem',
      }
    }
  }
}</code></pre>

    <h4>@apply Directive</h4>
    <pre><code>.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-lg 
         hover:bg-blue-700 transition-colors;
}</code></pre>

    <h4>JIT (Just-In-Time) Mode</h4>
    <p>İstənilən dəyəri istifadə etmək imkanı: w-[123px], text-[#1da1f2], top-[100px]</p>
  `,

  starterCode: {
    html: `<!-- Tailwind CSS CDN ilə -->
<script src="https://cdn.tailwindcss.com"><\/script>

<div class="min-h-screen bg-gray-50 py-12 px-4">
  
  <!-- Header Component -->
  <header class="max-w-6xl mx-auto mb-12">
    <nav class="flex items-center justify-between bg-white rounded-2xl shadow-sm p-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
          <span class="text-white font-bold text-xl">T</span>
        </div>
        <span class="text-xl font-bold text-gray-800">TailwindDemo</span>
      </div>
      
      <div class="hidden md:flex items-center gap-8">
        <a href="#" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
        <a href="#" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Features</a>
        <a href="#" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Pricing</a>
        <a href="#" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">About</a>
      </div>
      
      <button class="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 active:scale-95 transition-all">
        Get Started
      </button>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto mb-16 text-center">
    <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
      Build faster with <span class="text-indigo-600">Tailwind CSS</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
      Utility-first CSS framework for rapid UI development. Responsive, customizable, and modern.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all">
        Start Building
      </button>
      <button class="bg-white text-gray-700 border-2 border-gray-200 px-8 py-3 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all">
        Learn More
      </button>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="max-w-6xl mx-auto mb-16">
    <div class="grid md:grid-cols-3 gap-8">
      
      <!-- Card 1 -->
      <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
        <p class="text-gray-600 leading-relaxed">
          Utility classes mean you don't have to write custom CSS. Build interfaces in record time.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Fully Responsive</h3>
        <p class="text-gray-600 leading-relaxed">
          Built-in responsive modifiers make it easy to create mobile-first designs.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div class="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Customizable</h3>
        <p class="text-gray-600 leading-relaxed">
          Configure your design system with tailwind.config.js. Colors, spacing, fonts, and more.
        </p>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="max-w-6xl mx-auto mb-16 bg-indigo-900 rounded-3xl p-8 md:p-12">
    <div class="grid md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold text-white mb-2">2M+</div>
        <div class="text-indigo-200">Developers</div>
      </div>
      <div>
        <div class="text-4xl font-bold text-white mb-2">70K+</div>
        <div class="text-indigo-200">GitHub Stars</div>
      </div>
      <div>
        <div class="text-4xl font-bold text-white mb-2">100+</div>
        <div class="text-indigo-200">Components</div>
      </div>
      <div>
        <div class="text-4xl font-bold text-white mb-2">24KB</div>
        <div class="text-indigo-200">Minified</div>
      </div>
    </div>
  </section>

  <!-- Form Component -->
  <section class="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Join Newsletter</h2>
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input type="email" 
               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
               placeholder="you@example.com">
      </div>
      <button type="submit" 
              class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all">
        Subscribe
      </button>
    </form>
  </section>

</div>`,
    
    css: `/* 
 * Bu fayl Tailwind-in @apply istifadəsi ilə 
 * custom component class-larını göstərir
 */

/* Custom Button Component */
.btn {
  @apply inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium transition-all duration-200;
}

.btn-primary {
  @apply bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 active:scale-95;
}

.btn-secondary {
  @apply bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50;
}

/* Card Component */
.card {
  @apply bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300;
}

.card-icon {
  @apply w-14 h-14 rounded-xl flex items-center justify-center mb-6;
}

/* Form Components */
.form-input {
  @apply w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all;
}

.form-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}

/* Navigation */
.nav-link {
  @apply text-gray-600 hover:text-indigo-600 font-medium transition-colors;
}

/* Custom Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Gradient Text */
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600;
}

/* Glass Effect */
.glass {
  @apply bg-white/80 backdrop-blur-md border border-white/20;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-400 rounded-full hover:bg-gray-500;
}

/* Print Styles */
@media print {
  .no-print {
    @apply hidden;
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .auto-dark {
    @apply bg-gray-900 text-white;
  }
}`,

    js: `// Tailwind Configuration Simulation
const tailwindConfig = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          900: '#312e81',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    }
  },
  plugins: [
    // Custom plugin example
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }
      })
    }
  ]
};

console.log('Tailwind config loaded:', tailwindConfig);

// Dynamic class generator (JIT mode simulation)
function generateClass(property, value) {
  // w-[100px], bg-[#custom], m-[20px]
  return property + '-[' + value + ']';
}

// Usage examples
const customClasses = [
  generateClass('w', '123px'),
  generateClass('bg', '#1da1f2'),
  generateClass('top', '100px')
];

console.log('Custom JIT classes:', customClasses);

// Dark mode toggle
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

// Responsive breakpoint helper
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

function getBreakpoint() {
  const width = window.innerWidth;
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'default';
}

window.addEventListener('resize', () => {
  console.log('Current breakpoint:', getBreakpoint());
});`,
  },

  exercise: {
    title: "Tailwind Dashboard UI",
    description: "Tailwind CSS istifadə edərək admin dashboard yaradın. Sidebar, header, stats cards, chart placeholder və recent activity table olsun.",
    requirements: [
      "Flexbox və ya Grid ilə layout qurun",
      "Responsive sidebar (mobildə gizli, desktop-da görünən)",
      "Stats cards grid (1 sütun mobil, 4 sütun desktop)",
      "Table with hover states və striped rows",
      "Custom color palette (indigo əsas rəng)",
      "Dark mode dəstəyi (dark: prefix)",
      "Transition və transform ilə micro-interactions"
    ],
    starterCode: `<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"><\/script>

<div class="min-h-screen bg-gray-50">
  <!-- Sidebar -->
  <aside class="...">
    <!-- Kodunuzu yazın -->
  </aside>
  
  <!-- Main Content -->
  <main class="...">
    <header class="..."></header>
    
    <!-- Stats Grid -->
    <div class="grid ...">
      <!-- 4 stat card -->
    </div>
    
    <!-- Chart & Activity -->
    <div class="grid lg:grid-cols-3 ...">
      <div class="lg:col-span-2 ...">{/* Chart */}</div>
      <div class="...">{/* Activity */}</div>
    </div>
  </main>
</div>`,
  },

  quiz: [
    {
      question: "Tailwind hansı yanaşma ilə işləyir?",
      options: ["Component-first", "Utility-first", "Module-first", "Object-first"],
      correctAnswer: 1
    },
    {
      question: "Responsive class necə yazılır?",
      options: ["responsive:flex", "md:flex", "@media:flex", "breakpoint:flex"],
      correctAnswer: 1
    },
    {
      question: "Hover state necə tətbiq olunur?",
      options: [":hover:bg-blue-600", "hover:bg-blue-600", "onhover:bg-blue-600", "state:hover:bg-blue-600"],
      correctAnswer: 1
    },
    {
      question: "@apply nə üçün istifadə olunur?",
      options: ["JavaScript import", "Utility class-ları custom CSS-də birləşdirmək", "Plugin yükləmək", "Font əlavə etmək"],
      correctAnswer: 1
    },
    {
      question: "JIT mode nə imkan verir?",
      options: ["Daha sürətli compile", "İstənilən dəyəri [] ilə istifadə", "Auto dark mode", "TypeScript dəstəyi"],
      correctAnswer: 1
    },
    {
      question: "tailwind.config.js faylında nəyi extend edə bilərik?",
      options: ["Yalnız colors", "Theme (colors, spacing, fonts və s.)", "Yalnız plugins", "HTML strukturu"],
      correctAnswer: 1
    },
    {
      question: "space-x-4 nə edir?",
      options: ["Horizontal margin", "Horizontal gap between children", "Padding", "Width"],
      correctAnswer: 1
    },
    {
      question: "container class nə edir?",
      options: ["Full width", "Max-width və auto margin", "Flex container", "Grid container"],
      correctAnswer: 1
    },
    {
      question: "dark: prefix nə üçündür?",
      options: ["Qara rəng", "Dark mode üçün stillər", "Opacity", "Shadow"],
      correctAnswer: 1
    },
    {
      question: "group və group-hover necə işləyir?",
      options: ["Parent hover-da child dəyişir", "Yalnız group hover olur", "Flex group", "Grid area"],
      correctAnswer: 0
    }
  ]
};

export default topic10;