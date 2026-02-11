export const topic1 = {
  id: 1,
  title: "HTML5 Strukturu və Semantik Elementlər",
  duration: "45 dəq",
  isFree: true,
  
  content: `
    <h4>HTML5-ə Giriş</h4>
    <p>HTML (HyperText Markup Language) veb səhifələrin strukturunu yaratmaq üçün istifadə olunan əsas dildir. HTML5 bu dilin ən son versiyasıdır və bir çox yeni xüsusiyyət gətirir.</p>
    
    <h4>Əsas HTML5 Strukturu</h4>
    <p>Hər düzgün HTML5 sənədi aşağıdakı struktura malik olmalıdır:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="az"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Səhifə Başlığı&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Kontent buraya --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h4>Semantik Elementlər</h4>
    <p>Semantik elementlər məzmunun mənasını açıqlayan taglərdir:</p>
    <ul>
      <li><code>&lt;header&gt;</code> - Səhifə və ya bölmənin başlığı</li>
      <li><code>&lt;nav&gt;</code> - Naviqasiya linkləri</li>
      <li><code>&lt;main&gt;</code> - Əsas məzmun (bir dəfə istifadə olunur)</li>
      <li><code>&lt;section&gt;</code> - Məzmun bölməsi</li>
      <li><code>&lt;article&gt;</code> - Müstəqil məqalə/kontent</li>
      <li><code>&lt;aside&gt;</code> - Yan məzmun (sidebar)</li>
      <li><code>&lt;footer&gt;</code> - Səhifənin alt hissəsi</li>
    </ul>

    <h4>Meta Tags və SEO</h4>
    <p>Meta taglər səhifə haqqında məlumat verir və SEO üçün vacibdir:</p>
    <pre><code>&lt;!-- Kodlaşdırma --&gt;
&lt;meta charset="UTF-8"&gt;

&lt;!-- Responsivlik --&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

&lt;!-- SEO üçün --&gt;
&lt;meta name="description" content="Səhifə təsviri"&gt;
&lt;meta name="keywords" content="html5, css, javascript"&gt;
&lt;meta name="author" content="CodeAz"&gt;

&lt;!-- Sosial media (Open Graph) --&gt;
&lt;meta property="og:title" content="Səhifə Başlığı"&gt;
&lt;meta property="og:description" content="Səhifə təsviri"&gt;
&lt;meta property="og:image" content="image.jpg"&gt;</code></pre>

    <h4>Formlar və Validasiya</h4>
    <p>HTML5 yeni input tipləri və validasiya gətirir:</p>
    <pre><code>&lt;form&gt;
  &lt;input type="email" placeholder="Email" required&gt;
  &lt;input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"&gt;
  &lt;input type="number" min="1" max="100"&gt;
  &lt;input type="date"&gt;
  &lt;button type="submit"&gt;Göndər&lt;/button&gt;
&lt;/form&gt;</code></pre>

    <h4>Accessibility (Erişilebilirlik)</h4>
    <p>Hər kəs üçün veb:</p>
    <ul>
      <li>Alt atributları şəkillərdə</li>
      <li>ARIA labels</li>
      <li>Düzgün heading hierarxiyası</li>
      <li>Klaviatura naviqasiyası</li>
    </ul>
  `,

  starterCode: {
    html: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantik Struktur</title>
</head>
<body>
    <header>
        <h1>Şirkət Adı</h1>
        <nav>
            <a href="#home">Ana səhifə</a>
            <a href="#about">Haqqımızda</a>
            <a href="#contact">Əlaqə</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>Xidmətlərimiz</h2>
            <article>
                <h3>Veb Dizayn</h3>
                <p>Müasir veb saytların hazırlanması.</p>
            </article>
        </section>
        
        <aside>
            <h3>Son Xəbərlər</h3>
            <p>Yeni layihələrimiz...</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Şirkət Adı</p>
    </footer>
</body>
</html>`,
    
    css: `/* Əsas stillər */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header {
    background: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

main {
    display: flex;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

section {
    flex: 2;
    padding-right: 20px;
}

aside {
    flex: 1;
    background: #f4f4f4;
    padding: 15px;
    border-radius: 8px;
}

footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 20px;
}`,

    js: `// DOM elementlərini seç
const header = document.querySelector('header');
const links = document.querySelectorAll('nav a');

// Klik eventləri
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Navigasiya:', link.textContent);
    });
});

// Scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = '#555';
    } else {
        header.style.background = '#333';
    }
});`
  },

  exercise: {
    title: "Şəxsi Portfolio Səhifəsi",
    description: "HTML5 semantik elementlərindən istifadə edərək şəxsi portfolio səhifəsi yaradın. Səhifədə header, nav, main, section, article, aside və footer elementləri olmalıdır.",
    requirements: [
      "Doctype HTML5 təyin edin",
      "Ən azı 3 semantik section istifadə edin",
      "Naviqasiya menyusu yaradın",
      "Şəkil əlavə edin (alt atributu ilə)",
      "Form əlavə edin (input, textarea, button)",
      "Meta description tagi əlavə edin",
      "Footerdə əlaqə məlumatları olsun"
    ],
    starterCode: `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <title>Portfolio</title>
</head>
<body>
    <!-- Kodunuzu bura yazın -->
    
</body>
</html>`
  },

  quiz: [
    {
      question: "HTML5-də hansı tag səhifənin əsas məzmununu göstərir?",
      options: ["<content>", "<main>", "<body>", "<section>"],
      correctAnswer: 1
    },
    {
      question: "Viewport meta tagi nə üçün istifadə olunur?",
      options: ["SEO üçün", "Responsiv dizayn üçün", "Şrift ölçüsü üçün", "Rəng üçün"],
      correctAnswer: 1
    },
    {
      question: "Hansı semantik tag müstəqil məzmun üçün istifadə olunur?",
      options: ["<div>", "<section>", "<article>", "<aside>"],
      correctAnswer: 2
    },
    {
      question: "Input tipi hansı email validasiyası edir?",
      options: ["type='text'", "type='email'", "type='mail'", "type='validate'"],
      correctAnswer: 1
    },
    {
      question: "ARIA nə deməkdir?",
      options: ["Accessible Rich Internet Applications", "Automatic Resource Integration API", "Advanced Responsive Interface Attributes", "Active Rendering Internet Architecture"],
      correctAnswer: 0
    },
    {
      question: "Hansı tag səhifənin naviqasiya linklərini əhatə edir?",
      options: ["<navigation>", "<nav>", "<menu>", "<links>"],
      correctAnswer: 1
    },
    {
      question: "HTML5-də şəkilin alternativ mətni hansı atributla verilir?",
      options: ["title", "alt", "desc", "caption"],
      correctAnswer: 1
    },
    {
      question: "Hansı doctype HTML5 üçün doğrudur?",
      options: ["<!DOCTYPE html5>", "<!DOCTYPE HTML PUBLIC>", "<!DOCTYPE html>", "<!DOCTYPE xhtml>"],
      correctAnswer: 2
    },
    {
      question: "Section və article tagləri arasındakı əsas fərq nədir?",
      options: ["Section böyükdür", "Article müstəqil məzmundur", "Section rəng verir", "Fərq yoxdur"],
      correctAnswer: 1
    },
    {
      question: "Form-da hansı atribut sahənin doldurulmasını məcbur edir?",
      options: ["mandatory", "required", "mustfill", "validate"],
      correctAnswer: 1
    }
  ]
};

export default topic1;