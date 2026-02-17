import React, { useState, useEffect, useRef } from 'react';

const Editor = () => {
  // Nümunə kod hissəsi sadəcə print("Salam") olaraq dəyişdirildi
  const [code, setCode] = useState(`print("Salam")`);
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
        setIsReady(true);
        setOutput('Sistem hazırdır.');
      } catch (err) { setOutput("Xəta: " + err.message); }
    };
    initPython();
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !isReady) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target.result;
      try {
        pyodideRef.current.FS.writeFile(file.name, content);
        setOutput(`'${file.name}' uğurla yükləndi. İndi Python-da bu adla müraciət edə bilərsiniz.`);
      } catch (err) {
        setOutput("Fayl yükləmə xətası: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  const runCode = async () => {
    if (!isReady) return;
    setOutput('İcra olunur...\n');
    setPlotUrl(null);
    
    try {
      // Kitabxanaların dinamik yüklənməsi məntiqi qorunub
      if (code.includes('import matplotlib') || code.includes('import plt')) {
        setOutput('Matplotlib yüklənir...\n');
        await pyodideRef.current.loadPackage('matplotlib');
      }
      if (code.includes('import numpy') || code.includes('import np')) {
        setOutput(prev => prev + 'Numpy yüklənir...\n');
        await pyodideRef.current.loadPackage('numpy');
      }
      if (code.includes('import pandas') || code.includes('import pd')) {
        setOutput(prev => prev + 'Pandas yüklənir...\n');
        await pyodideRef.current.loadPackage('pandas');
      }

      await pyodideRef.current.runPythonAsync(`
import sys, io, base64
from js import prompt

sys.stdout = io.StringIO()

import builtins
def safe_input(msg=""):
    res = prompt(msg)
    return str(res) if res is not None else ""
builtins.input = safe_input

def get_plot():
    try:
        import matplotlib.pyplot as plt
        if plt.get_fignums():
            buf = io.BytesIO()
            plt.savefig(buf, format='png', bbox_inches='tight', transparent=True)
            img_str = base64.b64encode(buf.getvalue()).decode('utf-8')
            plt.close('all')
            return img_str
    except:
        pass
    return None
      `);

      await pyodideRef.current.runPythonAsync(code);
      
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");
      const imgData = pyodideRef.current.runPython("get_plot()");
      
      setOutput(stdout || "İcra olundu.");
      if (imgData) {
        setPlotUrl("data:image/png;base64," + imgData);
      }
      
    } catch (err) {
      setOutput("XƏTA:\n" + err.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '600px', background: '#1e1e1e', borderRadius: '10px', border: '1px solid #444', overflow: 'hidden' }}>
      <div style={{ padding: '10px', background: '#2d2d2d', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ color: '#00ff00', fontSize: '12px', fontFamily: 'monospace' }}>PYTHON DYNAMIC LAB</span>
          <input 
            type="file" 
            onChange={handleFileUpload} 
            style={{ color: '#aaa', fontSize: '11px', width: '200px' }} 
          />
        </div>
        <button onClick={runCode} style={{ background: '#2ea44f', color: 'white', border: 'none', padding: '5px 15px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>RUN</button>
      </div>

      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ flex: 1, background: '#1e1e1e', color: '#d4d4d4', padding: '15px', border: 'none', outline: 'none', resize: 'none', fontFamily: 'monospace', fontSize: '14px' }}
          spellCheck="false"
        />
        
        <div style={{ flex: 1, background: '#000', padding: '15px', overflowY: 'auto', borderLeft: '1px solid #333' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: '13px', color: '#00ff00', fontFamily: 'monospace' }}>{output}</pre>
          {plotUrl && <img src={plotUrl} alt="Plot" style={{ maxWidth: '100%', marginTop: '10px', display: 'block' }} />}
        </div>
      </div>
    </div>
  );
};

export default Editor;