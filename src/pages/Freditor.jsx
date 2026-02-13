import React, { useState, useEffect, useRef } from 'react';

const Freditor = () => {
  const [html, setHtml] = useState('<div class="container">\n  <h1 class="text-3xl font-bold text-blue-600">Freditor 🚀</h1>\n  <p>Tailwind, Flexbox və JS dəstəklənir.</p>\n  <button id="btn">Mənə kliklə</button>\n</div>');
  const [css, setCss] = useState('$bg-color: #f0f4f8;\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background: $bg-color;\n  font-family: sans-serif;\n}\n\nbutton {\n  padding: 10px 20px;\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    background: #1d4ed8;\n  }\n}');
  const [js, setJs] = useState('const btn = document.getElementById("btn");\n\nbtn.addEventListener("click", () => {\n  alert("Freditor işləyir! 🎉");\n});');
  
  const [activeTab, setActiveTab] = useState('html');
  const iframeRef = useRef(null);

  const generateOutput = () => {
    // Tailwind CDN və SCSS-i CSS-ə çevirən kiçik skriptləri daxil edirik
    return `
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <style id="compiled-css"></style>
        </head>
        <body>
          ${html}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.11.1/sass.sync.min.js"></script>
          <script>
            // SCSS-i CSS-ə çeviririk
            try {
              Sass.compile(\`${css}\`, function(result) {
                if(result.text) {
                  document.getElementById('compiled-css').innerHTML = result.text;
                }
              });
            } catch (err) { console.error(err); }

            // JS-i icra edirik
            try {
              ${js}
            } catch (err) { console.error(err); }
          </script>
        </body>
      </html>
    `;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const iframe = iframeRef.current;
      if (iframe) {
        const doc = iframe.contentDocument;
        doc.open();
        doc.write(generateOutput());
        doc.close();
      }
    }, 500); // Yazdıqca anında yenilənmə (Debounce)

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#1e1e1e', color: '#fff' }}>
      {/* Header */}
      <div style={{ padding: '10px 20px', background: '#252526', borderBottom: '1px solid #333', display: 'flex', gap: '10px' }}>
        {['html', 'css', 'js'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '5px 15px',
              background: activeTab === tab ? '#007acc' : '#333',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          >
            {tab === 'css' ? 'SCSS / Tailwind' : tab}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', color: '#888', fontSize: '12px' }}>Freditor v1.0 ⚡</span>
      </div>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Editor Sahəsi */}
        <div style={{ flex: 1, borderRight: '1px solid #333' }}>
          <textarea
            value={activeTab === 'html' ? html : activeTab === 'css' ? css : js}
            onChange={(e) => {
              if (activeTab === 'html') setHtml(e.target.value);
              if (activeTab === 'css') setCss(e.target.value);
              if (activeTab === 'js') setJs(e.target.value);
            }}
            style={{
              width: '100%',
              height: '100%',
              background: '#1e1e1e',
              color: '#d4d4d4',
              padding: '15px',
              fontFamily: '"Fira Code", monospace',
              fontSize: '14px',
              border: 'none',
              outline: 'none',
              resize: 'none'
            }}
            spellCheck="false"
          />
        </div>

        {/* Canlı Önizləmə (Preview) */}
        <div style={{ flex: 1, background: '#fff' }}>
          <iframe
            ref={iframeRef}
            title="preview"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Freditor;