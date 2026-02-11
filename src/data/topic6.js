export const topic6 = {
  id: 6,
  title: "CSS Animations və Transitions",
  duration: "70 dəq",
  isFree: false,
  
  content: `
    <h4>Transitions - Keçidlər</h4>
    <p>CSS transition xüsusiyyətin dəyişməsi zamanı animasiya effekti yaradır:</p>
    <pre><code>.element {
  transition: property duration timing-function delay;
  transition: all 0.3s ease-in-out;
}</code></pre>

    <h4>Transition Xüsusiyyətləri</h4>
    <ul>
      <li><code>transition-property</code> - Hansı xüsusiyyət animasiya olunur</li>
      <li><code>transition-duration</code> - Neçə saniyə davam edir</li>
      <li><code>transition-timing-function</code> - Sürət qrafiki (linear, ease, ease-in, ease-out, cubic-bezier)</li>
      <li><code>transition-delay</code> - Gecikmə vaxtı</li>
    </ul>

    <h4>Animations - Keyframes</h4>
    <p>Mürəkkəb animasiyalar üçün @keyframes istifadə olunur:</p>
    <pre><code>@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.5s ease-out forwards;
}</code></pre>

    <h4>Animation Xüsusiyyətləri</h4>
    <pre><code>.animated {
  animation-name: slideIn;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite; /* və ya 3 */
  animation-direction: alternate; /* normal, reverse, alternate-reverse */
  animation-fill-mode: forwards; /* backwards, both */
  animation-play-state: paused; /* running */
}</code></pre>

    <h4>Transform Funksiyaları</h4>
    <pre><code>transform: translate(50px, 100px);  /* Yerləşdirmə */
transform: translateX(-50%);         /* X oxu üzrə */
transform: scale(1.5);               /* Miqyas */
transform: rotate(45deg);            /* Fırlatma */
transform: skew(10deg, 5deg);        /* Əyilmə */
transform: matrix(a, b, c, d, e, f); /* Bütün transform-lar */</code></pre>

    <h4>Performance üçün will-change</h4>
    <pre><code>.animate {
  will-change: transform, opacity;
}</code></pre>
  `,

  starterCode: {
    html: `<div class="demo-container">
  <h2>Transitions Demo</h2>
  <button class="btn-hover">Hover Et</button>
  <div class="box transition-box">Transition Box</div>
  
  <h2>Animations Demo</h2>
  <div class="box animation-box">Animation Box</div>
  <div class="loader"></div>
  
  <h2>Transform Demo</h2>
  <div class="transform-container">
    <div class="transform-box translate">Translate</div>
    <div class="transform-box rotate">Rotate</div>
    <div class="transform-box scale">Scale</div>
    <div class="transform-box skew">Skew</div>
  </div>
  
  <div class="card-3d">
    <div class="card-inner">
      <div class="card-front">Ön tərəf</div>
      <div class="card-back">Arxa tərəf</div>
    </div>
  </div>
</div>`,
    
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  padding: 40px;
  background: #0f172a;
  color: white;
}

.demo-container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  margin: 30px 0 15px;
  color: #6366f1;
}

/* Transitions */
.btn-hover {
  padding: 12px 30px;
  font-size: 16px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-hover:hover {
  background: #8b5cf6;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
}

.transition-box {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.5s ease;
  cursor: pointer;
}

.transition-box:hover {
  border-radius: 50%;
  transform: rotate(180deg) scale(1.1);
  background: linear-gradient(135deg, #ec4899, #f43f5e);
}

/* Animations */
.animation-box {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #10b981, #34d399);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.loader {
  width: 60px;
  height: 60px;
  border: 4px solid #334155;
  border-top-color: #6366f1;
  border-radius: 50%;
  margin: 20px 0;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Transform */
.transform-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.transform-box {
  width: 100px;
  height: 100px;
  background: #6366f1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 12px;
  transition: transform 0.3s;
  cursor: pointer;
}

.translate:hover {
  transform: translate(20px, -20px);
}

.rotate:hover {
  transform: rotate(45deg);
}

.scale:hover {
  transform: scale(1.3);
}

.skew:hover {
  transform: skew(15deg, 10deg);
}

/* 3D Card Flip */
.card-3d {
  width: 200px;
  height: 280px;
  perspective: 1000px;
  margin: 30px 0;
  cursor: pointer;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-3d:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
}

.card-front {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.card-back {
  background: linear-gradient(135deg, #ec4899, #f43f5e);
  transform: rotateY(180deg);
}`,

    js: `// Animation control
const animBox = document.querySelector('.animation-box');
const loader = document.querySelector('.loader');

// Kliklə animasiyanı dayandır/başlat
animBox.addEventListener('click', () => {
  const currentState = animBox.style.animationPlayState;
  animBox.style.animationPlayState = currentState === 'paused' ? 'running' : 'paused';
  console.log('Animation state:', animBox.style.animationPlayState || 'running');
});

// Scroll-based animation
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      console.log('Element göründü:', entry.target.className);
    }
  });
}, observerOptions);

observer.observe(loader);

// Mouse move parallax effekti
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  const boxes = document.querySelectorAll('.transform-box');
  boxes.forEach((box, index) => {
    const speed = (index + 1) * 10;
    box.style.transform = 'translate(' + (x * speed) + 'px, ' + (y * speed) + 'px)';
  });
});`
  },

  exercise: {
    title: "Loading Animation Collection",
    description: "3 fərqli loading animasiyası yaradın: 1) Dönən dairə, 2) Pulse edən nöqtələr, 3) Dalğa effekti. Hər biri fərqli @keyframes istifadə etsin.",
    requirements: [
      "@keyframes ilə minimum 3 animasiya yaradın",
      "animation-iteration-count: infinite istifadə edin",
      "Fərqli timing-function-lar (ease, linear, ease-in-out) sınayın",
      "Transform və opacity kombinasiyası istifadə edin",
      "Loading container-ə flex ilə mərkəzləşdirin",
      "Hər loader-ə fərqli rəng verin",
      "animation-delay ilə ardıcıl animasiya effekti yaradın"
    ],
    starterCode: `<div class="loaders-container">
  <div class="loader-1"></div>
  <div class="loader-2">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="loader-3"></div>
</div>

<style>
  .loaders-container {
    /* Kodunuzu bura yazın */
  }
</style>`
  },

  quiz: [
    {
      question: "Transition hansı halda işləyir?",
      options: ["Hər zaman", "Xüsusiyyət dəyişəndə", "Yalnız hover-də", "Səhifə yüklənəndə"],
      correctAnswer: 1
    },
    {
      question: "@keyframes nə üçün istifadə olunur?",
      options: ["Rəng təyin etmək", "Mürəkkəb animasiyalar", "Font import", "Layout yaratmaq"],
      correctAnswer: 1
    },
    {
      question: "animation-fill-mode: forwards nə edir?",
      options: ["Animasiyanı dayandırır", "Son keyframe vəziyyətini saxlayır", "Animasiyanı təkrarlayır", "Geriyə oynadır"],
      correctAnswer: 1
    },
    {
      question: "transform: translateX(-50%) nə edir?",
      options: ["Sola 50px çəkir", "Sola 50% çəkir", "Sağa 50% çəkir", "Heç nə"],
      correctAnswer: 1
    },
    {
      question: "cubic-bezier nədir?",
      options: ["Rəng kodu", "Sürət əyrisi", "Font ailəsi", "Breakpoint"],
      correctAnswer: 1
    },
    {
      question: "will-change xüsusiyyəti nə üçün istifadə olunur?",
      options: ["SEO üçün", "Performance optimizasiyası", "Rəng dəyişməsi", "Font yükləmə"],
      correctAnswer: 1
    },
    {
      question: "animation-direction: alternate nə edir?",
      options: ["Animasiyanı dayandırır", "İrəli-geri oynadır", "Tərs oynadır", "Sürətləndirir"],
      correctAnswer: 1
    },
    {
      question: "perspective xüsusiyyəti nə üçün lazımdır?",
      options: ["2D transform", "3D effektlər", "Rəng dərinliyi", "Blur effekti"],
      correctAnswer: 1
    },
    {
      question: "backface-visibility: hidden nə edir?",
      options: ["Elementi gizlədir", "Arxa tərəfi gizlədir", "3D dönməni dayandırır", "Opacity-ni sıfırlayır"],
      correctAnswer: 1
    },
    {
      question: "Hansı transition-timing-function əvvəli sürətli, sonu yavaş edir?",
      options: ["ease-in", "ease-out", "ease-in-out", "linear"],
      correctAnswer: 1
    }
  ]
};

export default topic6;