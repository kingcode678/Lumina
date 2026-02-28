import React, { useState, useEffect, useRef, useCallback } from 'react';

const Editor = ({ mode = 'editor', starterCode = 'print("Salam")', onCodeRun }) => {
  // Props-dan gələn starterCode istifadə et
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('Sistem başladılır...');
  const [plotUrl, setPlotUrl] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const pyodideRef = useRef(null);

  // starterCode dəyişdikdə code state-ini update et
  useEffect(() => {
    setCode(starterCode);
  }, [starterCode]);

  // Pyodide init
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
        await pyodideRef.current.loadPackage("micropip");
        setIsReady(true);
        setOutput('✅ Sistem hazırdır. Kodunuzu yazın və RUN düyməsinə basın.');
      } catch (err) { 
        setOutput("❌ Xəta: " + err.message); 
      }
    };
    initPython();
  }, []);

  // Kodu təmizlə
  const clearCode = () => {
    setCode('');
    setOutput('Kod təmizləndi.');
    setPlotUrl(null);
  };

  // Fayl yüklə
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !isReady) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target.result;
      try {
        pyodideRef.current.FS.writeFile(file.name, content);
        setOutput(`✅ '${file.name}' uğurla yükləndi.`);
      } catch (err) { 
        setOutput("❌ Fayl xətası: " + err.message); 
      }
    };
    reader.readAsText(file);
  };

  // Əsas dəyişiklik: onCodeRun callback-i əlavə et
  const runCode = useCallback(async () => {
    if (!isReady) {
      setOutput('⏳ Sistem hazırlanır... Zəhmət olmasa gözləyin.');
      return;
    }

    setOutput('🔄 İcra olunur...\n');
    setPlotUrl(null);
    
    try {
      // Lazımi paketləri yüklə
      const packagesToLoad = [];
      
      if (code.includes('import matplotlib') || code.includes('from matplotlib') || code.includes('import plt')) {
        packagesToLoad.push('matplotlib');
      }
      if (code.includes('import numpy') || code.includes('import np') || code.includes('from numpy')) {
        packagesToLoad.push('numpy');
      }
      if (code.includes('import pandas') || code.includes('import pd') || code.includes('from pandas')) {
        packagesToLoad.push('pandas');
      }

      // Əsas paketləri yüklə
      for (const pkg of packagesToLoad) {
        setOutput(prev => prev + `📦 ${pkg} yüklənir...\n`);
        await pyodideRef.current.loadPackage(pkg);
      }

      // Seaborn (micropip ilə)
      if (code.includes('import seaborn') || code.includes('import sns') || code.includes('from seaborn')) {
        setOutput(prev => prev + '📦 Seaborn yüklənir...\n');
        const micropip = pyodideRef.current.pyimport("micropip");
        await micropip.install("seaborn");
      }

      // ✅ SCIKIT-LEARN (micropip ilə)
      if (code.includes('import sklearn') || 
          code.includes('from sklearn') || 
          code.includes('import scikit-learn')) {
        setOutput(prev => prev + '📦 Scikit-learn yüklənir (bu biraz vaxt ala bilər)...\n');
        const micropip = pyodideRef.current.pyimport("micropip");
        // scikit-learn və asılılıqlarını yüklə
        await micropip.install("scikit-learn");
        setOutput(prev => prev + '✅ Scikit-learn yükləndi!\n');
      }

      // Python mühitini hazırla
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

      // Kodu icra et
      await pyodideRef.current.runPythonAsync(code);
      
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");
      const imgData = pyodideRef.current.runPython("get_plot()");
      
      const finalOutput = stdout || "✅ İcra olundu (output yoxdur).";
      setOutput(finalOutput);
      
      if (imgData) setPlotUrl("data:image/png;base64," + imgData);
      
      // ✅ AI.jsx-ə nəticəni göndər
      if (onCodeRun) {
        const isError = finalOutput.toLowerCase().includes('xəta') || 
                       finalOutput.toLowerCase().includes('error') ||
                       finalOutput.toLowerCase().includes('traceback');
        onCodeRun(finalOutput, isError ? new Error(finalOutput) : null);
      }
      
    } catch (err) {
      const errorMsg = "❌ XƏTA:\n" + err.message;
      setOutput(errorMsg);
      
      // ✅ Xəta halında da AI.jsx-ə göndər
      if (onCodeRun) {
        onCodeRun(errorMsg, err);
      }
    }
  }, [code, isReady, onCodeRun]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: mode === 'exercise' ? '500px' : '600px', 
      background: '#1e1e1e', 
      borderRadius: '10px', 
      border: '1px solid #444', 
      overflow: 'hidden',
      fontFamily: 'monospace'
    }}>
      {/* Header */}
      <div style={{ 
        padding: '10px 15px', 
        background: '#2d2d2d', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid #444'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ 
            color: isReady ? '#00ff00' : '#ffaa00', 
            fontSize: '12px', 
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            {isReady ? '●' : '◐'} PYTHON {mode === 'exercise' ? 'EXERCISE' : 'DYNAMIC LAB'}
          </span>
          <input 
            type="file" 
            onChange={handleFileUpload} 
            style={{ color: '#aaa', fontSize: '11px', width: '180px' }} 
            disabled={!isReady}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={clearCode} 
            disabled={!isReady}
            style={{ 
              background: '#444', 
              color: 'white', 
              border: 'none', 
              padding: '6px 16px', 
              cursor: isReady ? 'pointer' : 'not-allowed', 
              borderRadius: '4px', 
              fontWeight: 'bold',
              fontSize: '12px',
              opacity: isReady ? 1 : 0.5
            }}>
            🗑️ TƏMİZLƏ
          </button>
          
          <button 
            onClick={runCode} 
            disabled={!isReady}
            style={{ 
              background: isReady ? '#2ea44f' : '#555', 
              color: 'white', 
              border: 'none', 
              padding: '6px 20px', 
              cursor: isReady ? 'pointer' : 'not-allowed', 
              borderRadius: '4px', 
              fontWeight: 'bold',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
            ▶ RUN
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* Code Editor */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={isReady ? '# Python kodunuzu bura yazın...' : 'Sistem hazırlanır...'}
          style={{ 
            flex: 1, 
            background: '#1e1e1e', 
            color: '#d4d4d4', 
            padding: '15px', 
            border: 'none', 
            outline: 'none', 
            resize: 'none', 
            fontFamily: 'monospace', 
            fontSize: '14px',
            lineHeight: '1.5'
          }}
          spellCheck="false"
          disabled={!isReady}
        />
        
        {/* Output Panel */}
        <div style={{ 
          flex: 1, 
          background: '#000', 
          padding: '15px', 
          overflowY: 'auto', 
          borderLeft: '1px solid #333',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            color: '#888',
            fontSize: '11px',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            🖥️ Output
          </div>
          <pre style={{ 
            margin: 0, 
            whiteSpace: 'pre-wrap', 
            fontSize: '13px', 
            color: output.includes('❌') ? '#ff6b6b' : '#00ff00', 
            fontFamily: 'monospace',
            lineHeight: '1.5'
          }}>
            {output}
          </pre>
          {plotUrl && (
            <img 
              src={plotUrl} 
              alt="Plot" 
              style={{ 
                maxWidth: '100%', 
                marginTop: '15px', 
                display: 'block', 
                background: 'white', 
                padding: '5px',
                borderRadius: '4px'
              }} 
            />
          )}
        </div>
      </div>
      
      {/* Status Bar */}
      <div style={{
        padding: '6px 15px',
        background: '#2d2d2d',
        borderTop: '1px solid #444',
        fontSize: '11px',
        color: '#888',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span>{code.split('\n').length} sətir | {code.length} simvol</span>
        <span>{isReady ? '✅ Pyodide Hazır' : '⏳ Yüklənir...'}</span>
      </div>
    </div>
  );
};

export default Editor;