export const topic2 = {
  id: 2,
  title: "CSS3 Selektorlar və Box Model",
  duration: "60 dəq",
  isFree: false,

  content: `
    <h4>CSS3-ə Giriş</h4>
    <p>CSS (Cascading Style Sheets) veb səhifələrin görünüşünü təyin edən dildir. CSS3 isə ən son versiyadır və bir çox güclü xüsusiyyət əlavə edir.</p>
    
    <h4>CSS Əlavə Üsulları</h4>
    <p>CSS-i HTML-ə 3 üsulla əlavə edə bilərik:</p>
    <ul>
      <li><strong>Inline:</strong> style atributu ilə</li>
      <li><strong>Internal:</strong> &lt;style&gt; tagi ilə head hissəsində</li>
      <li><strong>External:</strong> Ayrı .css faylı ilə (ən yaxşı praktika)</li>
    </ul>

    <h4>CSS Selektorlar</h4>
    <p>Elementləri seçmək üçün istifadə olunur:</p>
    <pre><code>/* Element selektoru */
p { color: blue; }

/* Class selektoru */
.intro { font-size: 18px; }

/* ID selektoru */
#header { background: black; }

/* Descendant selektoru */
div p { margin: 10px; }

/* Child selektoru */
ul > li { list-style: none; }

/* Adjacent sibling */
h1 + p { font-weight: bold; }</code></pre>

    <h4>Pseudo-class və Pseudo-elementlər</h4>
    <pre><code>/* Pseudo-classes */
a:hover { color: red; }
input:focus { border: 2px solid blue; }
li:nth-child(odd) { background: #f0f0f0; }

/* Pseudo-elements */
p::first-line { font-weight: bold; }
p::before { content: "→ "; }
p::after { content: " ←"; }</code></pre>

    <h4>Box Model</h4>
    <p>Hər HTML elementi bir qutu kimi düşünülür:</p>
    <ul>
      <li><strong>Content:</strong> Məzmun hissəsi (mətn, şəkil)</li>
      <li><strong>Padding:</strong> Content ilə border arası boşluq</li>
      <li><strong>Border:</strong> Sərhəd xətti</li>
      <li><strong>Margin:</strong> Border xaricindəki boşluq</li>
    </ul>
    <pre><code>.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 2px solid #333;
    margin: 10px auto;
}</code></pre>

    <h4>Box-sizing</h4>
    <p>Ölçülərin hesablanma üsulu:</p>
    <pre><code>/* content-box: default, width/height yalnız content */
/* border-box: width/height border və padding daxil */

* {
    box-sizing: border-box;
}</code></pre>

    <h4>CSS Units (Vahidlər)</h4>
    <ul>
      <li><strong>Absolute:</strong> px (piksel)</li>
      <li><strong>Relative:</strong> %, em, rem, vw, vh</li>
    </ul>
    <pre><code>html { font-size: 16px; }
.rem-example { font-size: 2rem; } /* 32px */
.em-example { font-size: 1.5em; } /* Parent-in 1.5 dəfəsi */
.vw-example { width: 50vw; } /* Ekran eninin 50% */</code></pre>

    <h4>Specificity (Xüsusilik)</h4>
    <p>Selektorların gücü (ən aşağıdan ən yüksəyə):</p>
    <ol>
      <li>Element selektoru (1)</li>
      <li>Class selektoru (10)</li>
      <li>ID selektoru (100)</li>
      <li>Inline style (1000)</li>
      <li>!important (əslində istifadə etməyin)</li>
    </ol>
  `,

  starterCode: {
    html: `<div class="container">
    <header id="main-header">
        <h1>CSS Dizayn</h1>
        <p class="subtitle">Box Model Tətbiqi</p>
    </header>
    
    <div class="content-box">
        <h2>Məzmun Qutusu</h2>
        <p>Bu qutu box-model xüsusiyyətlərini göstərir.</p>
    </div>
    
    <div class="flex-container">
        <div class="flex-item">Element 1</div>
        <div class="flex-item">Element 2</div>
        <div class="flex-item">Element 3</div>
    </div>
    
    <ul class="custom-list">
        <li>Birinci element</li>
        <li>İkinci element</li>
        <li>Üçüncü element</li>
    </ul>
</div>`,

    css: `/* Reset və base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f4f4f4;
}

/* Container */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

/* Header stilləri */
#main-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 2rem;
}

#main-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
}

/* Content Box - Box Model nümunəsi */
.content-box {
    background: white;
    width: 100%;
    padding: 30px;
    border: 3px solid #667eea;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.content-box h2 {
    color: #667eea;
    margin-bottom: 10px;
}

/* Flex container */
.flex-container {
    display: flex;
    gap: 15px;
    margin: 20px 0;
}

.flex-item {
    flex: 1;
    background: #667eea;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    transition: transform 0.3s;
}

.flex-item:hover {
    transform: translateY(-5px);
}

/* Custom list */
.custom-list {
    list-style: none;
    padding: 0;
}

.custom-list li {
    background: white;
    padding: 15px;
    margin: 10px 0;
    border-left: 4px solid #667eea;
    border-radius: 0 5px 5px 0;
    transition: all 0.3s;
}

.custom-list li:hover {
    background: #f8f9fa;
    padding-left: 20px;
}

/* Responsive */
@media (max-width: 600px) {
    .flex-container {
        flex-direction: column;
    }
    
    #main-header h1 {
        font-size: 1.8rem;
    }
}`,

    js: `// Box model ölçülərini hesabla
const box = document.querySelector('.content-box');

function getBoxMetrics() {
    const styles = window.getComputedStyle(box);
    
    console.log('Width:', styles.width);
    console.log('Padding:', styles.padding);
    console.log('Border:', styles.borderWidth);
    console.log('Margin:', styles.margin);
    
    const totalHeight = box.offsetHeight + 
                       parseInt(styles.marginTop) + 
                       parseInt(styles.marginBottom);
    console.log('Total Height:', totalHeight + 'px');
}

if(box) getBoxMetrics();

// Hover effektləri əlavə et
const items = document.querySelectorAll('.flex-item');
items.forEach((item, index) => {
     item.addEventListener('click', () => {
        item.style.background = '#764ba2';
        // Burada template literal (backtick) istifadə etmirik ki, xəta verməsin
        console.log('Element ' + (index + 1) + ' klikləndi');
    });
});`
  },

  exercise: {
    title: "Specificity Oyunu və Box Model",
    description: "Verilmiş HTML strukturu üçün CSS yazın. Hər element üçün müxtəlif selektorlar istifadə edin və box-model xüsusiyyətləri tətbiq edin.",
    requirements: [
      "ID selektoru istifadə edin (bir element üçün)",
      "Class selektorları istifadə edin (ən azı 3)",
      "Descendant selektoru istifadə edin",
      "Pseudo-class (:hover) istifadə edin",
      "Box-sizing: border-box tətbiq edin",
      "Padding, margin və border istifadə edin",
      "Rem və ya em vahidləri istifadə edin"
    ],
    starterCode: `<div id="game-container">
    <header class="game-header">
        <h1>Oyun Başlığı</h1>
        <p class="description">Təsvir mətni</p>
    </header>
    
    <div class="game-board">
        <div class="card">Kart 1</div>
        <div class="card">Kart 2</div>
        <div class="card">Kart 3</div>
    </div>
    
    <footer class="game-footer">
        <button id="start-btn">Başla</button>
    </footer>
</div>`
  },

  quiz: [
    {
      question: "Hansı selektorun specificity dəyəri ən yüksəkdir?",
      options: ["p {}", ".class {}", "#id {}", "div p {}"],
      correctAnswer: 2
    },
    {
      question: "Box-sizing: border-box nə edir?",
      options: ["Yalnız content ölçüsünü hesablayır", "Padding və border-i width/height-ə daxil edir", "Margin-i hesablamır", "Heç biri"],
      correctAnswer: 1
    },
    {
      question: "1rem nə qədərdir?",
      options: ["10px", "16px", "HTML font-size-ə bərabər", "1%"],
      correctAnswer: 2
    },
    {
      question: "Hansı pseudo-class elementin üzərinə gəldikdə işləyir?",
      options: [":active", ":focus", ":hover", ":visited"],
      correctAnswer: 2
    },
    {
      question: "Descendant selektoru hansı simvolla yazılır?",
      options: [">", "+", "~", "Boşluq (space)"],
      correctAnswer: 3
    },
    {
      question: "vw vahidi nəyi ifadə edir?",
      options: ["Viewport height", "Viewport width", "Vertical width", "View width"],
      correctAnswer: 1
    },
    {
      question: "Hansı atribut !important-dan güclüdür?",
      options: ["Heç biri", "Inline style", "ID selektoru", "Class selektoru"],
      correctAnswer: 0
    },
    {
      question: "Child selektoru (>) nə edir?",
      options: ["Bütün descendant-ları seçir", "Yalnız birbaşa uşaq elementləri seçir", "Qardaş elementləri seçir", "Parent elementi seçir"],
      correctAnswer: 1
    },
    {
      question: "Padding nədir?",
      options: ["Border xaricindəki boşluq", "Content ilə border arası boşluq", "Content-in ölçüsü", "Margin-in içindəki boşluq"],
      correctAnswer: 1
    },
    {
      question: "Hansı pseudo-element content əlavə edir?",
      options: [":before", "::before", ":after", "Hər ikisi"],
      correctAnswer: 3
    }
  ]
};

export default topic2;