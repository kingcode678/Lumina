import React, { useState, useEffect, useRef } from 'react';

const Editor = () => {
  const [code, setCode] = useState(`# Qrafik Testi\nimport matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\nplt.figure(figsize=(7, 4))\nplt.plot(x, y, color='#00ff00') # Konsol yaşılı\nplt.title("Sinus Dalğası", color='white')\nplt.show()`);
  const [output, setOutput] = useState('Sistem başladılır...');
  const [plotUrl, setPlotUrl] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const pyodideRef = useRef(null);

  useEffect(() => {
    const initPython = async () => {
      try {
        if (!window.loadPyodide) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
          script.async = true;
          document.head.appendChild(script);
          await new Promise((res) => script.onload = res);
        }
        pyodideRef.current = await window.loadPyodide();
        await pyodideRef.current.loadPackage(['numpy', 'pandas', 'matplotlib', 'micropip']);
        const micropip = pyodideRef.current.pyimport("micropip");
        await micropip.install("seaborn");
        setIsReady(true);
        setOutput('Sistem hazırdır. Kodunuzu yazın.');
      } catch (err) {
        setOutput("Xəta: " + err.message);
      }
    };
    initPython();
  }, []);

  const runCode = async () => {
    if (!isReady) return;
    setOutput('İcra olunur...\n');
    setPlotUrl(null); 
    
    try {
      await pyodideRef.current.runPythonAsync(`
import sys, io, base64
import matplotlib.pyplot as plt
from js import prompt

sys.stdout = io.StringIO()

def get_plot():
    if plt.get_fignums():
        buf = io.BytesIO()
        # Fonu şəffaf edirik ki, konsolun qara fonuna tam otursun
        plt.savefig(buf, format='png', bbox_inches='tight', transparent=True)
        buf.seek(0)
        img_str = base64.b64encode(buf.read()).decode('utf-8')
        plt.close('all')
        return img_str
    return None

import builtins
builtins.input = lambda msg="": prompt(msg) or ""
      `);
      
      await pyodideRef.current.runPythonAsync(code);
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");
      setOutput(stdout || "İcra olundu.");
      
      const imgData = pyodideRef.current.runPython("get_plot()");
      if (imgData) {
        setPlotUrl(`data:image/png;base64,${imgData}`);
      }
      
    } catch (err) {
      setOutput("XƏTA:\n" + err.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '600px', background: '#1e1e1e', borderRadius: '10px', border: '1px solid #444', overflow: 'hidden', fontFamily: 'monospace' }}>
      <div style={{ padding: '10px 20px', background: '#2d2d2d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#00ff00', fontSize: '12px' }}>PYTHON 3.11 - WEB TERMINAL</span>
        <button onClick={runCode} disabled={!isReady} style={{ background: isReady ? '#2ea44f' : '#555', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}>
          {isReady ? 'RUN' : 'Yüklənir...'}
        </button>
      </div>

      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ flex: 1, background: '#1e1e1e', color: '#d4d4d4', padding: '15px', fontSize: '14px', border: 'none', outline: 'none', resize: 'none' }}
          spellCheck="false"
        />
        
        {/* KONSOL SAHƏSİ */}
        <div style={{ flex: 1, background: '#000', padding: '15px', overflowY: 'auto', borderLeft: '1px solid #333' }}>
          <pre style={{ color: '#00ff00', margin: 0, whiteSpace: 'pre-wrap', fontSize: '13px' }}>
            {output}
          </pre>
          
          {/* Qrafik birbaşa mətndən sonra gəlir */}
          {plotUrl && (
            <img 
              src={plotUrl} 
              alt="Plot" 
              style={{ maxWidth: '100%', marginTop: '10px', display: 'block' }} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;