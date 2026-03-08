import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  collection, 
  addDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

// ============================================
// AI KONFIQURASIYA
// ============================================
const AI_CONFIG = {
  API_KEY: process.env.REACT_APP_GROQ_API_KEY || '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',
  API_ENDPOINT: 'https://api.groq.com/openai/v1/chat/completions',
  MODEL: 'llama-3.3-70b-versatile',
  MAX_INPUT_TOKENS: 2000,
  MAX_OUTPUT_TOKENS: 600,
  TEMPERATURE: 0.3
};

const Editor = ({ 
  mode = 'editor', 
  starterCode = 'print("Salam")', 
  onCodeRun, 
  userId, 
  courseId = 'ai-python', 
  topicId = 1 
}) => {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('Sistem başladılır...');
  const [plotUrl, setPlotUrl] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const pyodideRef = useRef(null);
  const saveTimeoutRef = useRef(null);

  // ============================================
  // LOCALSTORAGE-DƏN KODU YÜKLƏ
  // ============================================
  const storageKey = `editor_code_${courseId}_${topicId}_${mode}_${userId || 'guest'}`;

  useEffect(() => {
    const savedCode = localStorage.getItem(storageKey);
    if (savedCode && savedCode.trim() !== '' && savedCode !== starterCode) {
      setCode(savedCode);
    } else {
      setCode(starterCode);
    }
  }, []); 

  // ============================================
  // KOD DƏYİŞDİKCƏ LOCALSTORAGE-A YAZ
  // ============================================
  useEffect(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    saveTimeoutRef.current = setTimeout(() => {
      localStorage.setItem(storageKey, code);
    }, 1000);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [code, storageKey]);

  useEffect(() => {
    const savedCode = localStorage.getItem(storageKey);
    if (!savedCode || savedCode.trim() === '') {
      setCode(starterCode);
    }
  }, [starterCode, storageKey]);

  // Pyodide init
  useEffect(() => {
    const initPython = async () => {
      try {
        if (!window.loadPyodide) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
          script.async = true;
          document.head.appendChild(script);
          await new Promise((res, rej) => {
            script.onload = res;
            script.onerror = () => rej(new Error('Pyodide yüklənmədi'));
          });
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

  // ============================================
  // TOKEN SAYĞACI
  // ============================================
  const countTokens = (text) => {
    if (!text) return 0;
    return Math.ceil(text.length / 4);
  };

  const truncateToLimit = (text, limit) => {
    const tokens = countTokens(text);
    if (tokens <= limit) return text;
    const maxChars = limit * 4;
    return text.substring(0, maxChars - 50) + '...';
  };

  // ============================================
  // FIRESTORE-A YAZ - SADƏLƏŞDİRİLMİŞ
  // ============================================
  const saveToFirestore = async (userCode, runOutput, errorMsg = null, executionStatus = 'success') => {
    console.log('🚀 Firestore save:', { userId, courseId, topicId });

    if (!userId) {
      console.warn('⚠️ User ID yoxdur');
      return;
    }

    if (!db) {
      console.error('❌ Firebase db yoxdur!');
      return;
    }

    setIsSaving(true);
    
    try {
      // 🔥 SADƏ PATH: codeAttempts/{userId}_{courseId}_{topicId}/{autoId}
      // Beləliklə hər istifadəçi+ kurs + mövzu kombinasiyası ayrı document olur
      const attemptsRef = collection(db, 'codeAttempts');
      
      const docData = {
        // ID məlumatları (query üçün)
        userId: userId,
        courseId: courseId,
        topicId: Number(topicId),
        
        // Kod məlumatları
        mode: mode,
        code: userCode,
        output: runOutput || '',
        error: errorMsg || null,
        status: executionStatus,
        
        // Timestamp
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
        
        // Statistika
        codeLength: userCode.length,
        hasPlot: !!plotUrl,
        
        // AI analizi
        aiAnalysis: aiAnalysis ? {
          text: aiAnalysis.text,
          type: aiAnalysis.type
        } : null
      };

      console.log('📄 Saving:', docData);
      
      const docRef = await addDoc(attemptsRef, docData);
      
      console.log('✅ Saved! ID:', docRef.id);
      
    } catch (err) {
      console.error('❌ Firestore xətası:', err);
      console.error('Detallar:', err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // ============================================
  // AI ANALIZ
  // ============================================
  const analyzeErrorWithAI = async (userCode, errorOutput, successOutput = null) => {
    setAiLoading(true);
    
    try {
      const hasError = !!errorOutput;
      const contextData = {
        kod: truncateToLimit(userCode, 600),
        xeta: hasError ? truncateToLimit(errorOutput, 400) : null,
        output: successOutput ? truncateToLimit(successOutput, 300) : null,
        movzu: `Mövzu ${topicId}`,
        mode: mode
      };

      const systemMessage = `Sən Python müəllimisisən. Kodu analiz et və azərbaycanca izah et.`;

      let userPrompt;
      
      if (hasError) {
        userPrompt = `XƏTA ANALİZİ\n\nKod:\n${contextData.kod}\n\nXəta:\n${contextData.xeta}\n\nSəbəbini və düzəltmə yolunu izah et.`;
      } else {
        userPrompt = `KOD ANALİZİ\n\nKod:\n${contextData.kod}\n\nOutput:\n${contextData.output}\n\nOptimallaşdırma tövsiyələri ver.`;
      }

      const response = await fetch(AI_CONFIG.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AI_CONFIG.API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: AI_CONFIG.MODEL,
          messages: [
            { role: 'system', content: systemMessage },
            { role: 'user', content: userPrompt }
          ],
          temperature: AI_CONFIG.TEMPERATURE,
          max_tokens: AI_CONFIG.MAX_OUTPUT_TOKENS
        })
      });

      if (!response.ok) throw new Error(`API: ${response.status}`);

      const result = await response.json();
      const aiResponse = result.choices[0].message.content;
      
      setAiAnalysis({
        text: aiResponse,
        timestamp: new Date().toLocaleTimeString(),
        type: hasError ? 'error_fix' : 'success_review'
      });

    } catch (err) {
      console.error('AI xətası:', err);
      setAiAnalysis({
        text: "⚠️ AI analizi alınmadı.",
        timestamp: new Date().toLocaleTimeString(),
        error: true
      });
    } finally {
      setAiLoading(false);
    }
  };

  // Kodu təmizlə
  const clearCode = () => {
    setCode('');
    setOutput('Kod təmizləndi.');
    setPlotUrl(null);
    setAiAnalysis(null);
    localStorage.removeItem(storageKey);
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
        setOutput(`✅ '${file.name}' yükləndi.`);
      } catch (err) { 
        setOutput("❌ Fayl xətası: " + err.message); 
      }
    };
    reader.readAsText(file);
  };

  // Run kod
  const runCode = useCallback(async () => {
    if (!isReady) {
      setOutput('⏳ Sistem hazırlanır...');
      return;
    }

    setOutput('🔄 İcra olunur...\n');
    setPlotUrl(null);
    setAiAnalysis(null);
    
    try {
      // Paketləri yüklə
      const packagesToLoad = [];
      if (code.includes('matplotlib')) packagesToLoad.push('matplotlib');
      if (code.includes('numpy')) packagesToLoad.push('numpy');
      if (code.includes('pandas')) packagesToLoad.push('pandas');

      for (const pkg of packagesToLoad) {
        setOutput(prev => prev + `📦 ${pkg}...\n`);
        await pyodideRef.current.loadPackage(pkg);
      }

      if (code.includes('seaborn')) {
        const micropip = pyodideRef.current.pyimport("micropip");
        await micropip.install("seaborn");
      }

      // Python mühitini hazırla
      await pyodideRef.current.runPythonAsync(`
import sys, io, base64
sys.stdout = io.StringIO()
import builtins
builtins.input = lambda msg="": str(__import__('js').prompt(msg) or "")

def get_plot():
    try:
        import matplotlib.pyplot as plt
        if plt.get_fignums():
            buf = io.BytesIO()
            plt.savefig(buf, format='png')
            return base64.b64encode(buf.getvalue()).decode()
    except: 
        pass
    return None
      `);

      // Kodu icra et
      await pyodideRef.current.runPythonAsync(code);
      
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");
      const imgData = pyodideRef.current.runPython("get_plot()");
      
      const finalOutput = stdout || "✅ İcra olundu.";
      setOutput(finalOutput);
      
      if (imgData) setPlotUrl("data:image/png;base64," + imgData);
      
      // AI analizi (tapşırıq rejimində)
      if (mode === 'exercise') {
        await analyzeErrorWithAI(code, null, finalOutput);
      }
      
      // Firestore-a yaz
      await saveToFirestore(code, finalOutput, null, 'success');
      
      if (onCodeRun) onCodeRun(finalOutput, null);
      
    } catch (err) {
      const errorMsg = "❌ XƏTA:\n" + err.message;
      setOutput(errorMsg);
      
      await analyzeErrorWithAI(code, err.message, null);
      await saveToFirestore(code, errorMsg, err.message, 'error');
      
      if (onCodeRun) onCodeRun(errorMsg, err);
    }
  }, [code, isReady, onCodeRun, userId, courseId, topicId, plotUrl, aiAnalysis, mode]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: mode === 'exercise' ? '600px' : '700px', 
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
            fontWeight: 'bold'
          }}>
            {isReady ? '●' : '◐'} PYTHON {mode === 'exercise' ? 'EXERCISE' : 'AI LAB'}
          </span>
          <input 
            type="file" 
            onChange={handleFileUpload} 
            style={{ color: '#aaa', fontSize: '11px', width: '180px' }} 
            disabled={!isReady}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {isSaving && <span style={{ color: '#888', fontSize: '11px' }}>💾 ...</span>}
          
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
              fontSize: '12px'
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
              fontSize: '12px'
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
            fontSize: '14px'
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
          borderLeft: '1px solid #333'
        }}>
          <pre style={{ 
            color: output.includes('❌') ? '#ff6b6b' : '#00ff00', 
            fontSize: '13px',
            whiteSpace: 'pre-wrap'
          }}>
            {output}
          </pre>
          
          {plotUrl && (
            <img src={plotUrl} alt="Plot" style={{ maxWidth: '100%', background: 'white' }} />
          )}

          {aiLoading && (
            <div style={{ color: '#a0a0ff', marginTop: '10px' }}>
              🤖 AI analiz edir...
            </div>
          )}

          {aiAnalysis && !aiLoading && (
            <div style={{
              marginTop: '10px',
              padding: '10px',
              background: aiAnalysis.type === 'error_fix' ? '#2a1a1a' : '#1a2e1a',
              borderRadius: '4px',
              color: '#e0e0e0'
            }}>
              <strong>{aiAnalysis.type === 'error_fix' ? '🔴 Xəta' : '🟢 Tövsiyə'}</strong>
              <div style={{ marginTop: '5px', whiteSpace: 'pre-wrap' }}>
                {aiAnalysis.text}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;