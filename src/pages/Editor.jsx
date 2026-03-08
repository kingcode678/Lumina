import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  doc, 
  setDoc, 
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
  const [saveError, setSaveError] = useState(null);
  const pyodideRef = useRef(null);
  const saveTimeoutRef = useRef(null);

  // ============================================
  // DEBUG: Props yoxlama
  // ============================================
  useEffect(() => {
    console.log('🔍 Editor Props:', {
      userId: userId || 'YOXDUR!',
      courseId,
      topicId,
      mode,
      dbExists: !!db
    });
  }, [userId, courseId, topicId, mode]);

  // ============================================
  // LOCALSTORAGE-DƏN KODU YÜKLƏ
  // ============================================
  const storageKey = `editor_code_${courseId}_${topicId}_${mode}_${userId || 'guest'}`;

  useEffect(() => {
    const savedCode = localStorage.getItem(storageKey);
    console.log('📂 LocalStorage yükləmə:', storageKey, savedCode ? 'Tapıldı' : 'Tapılmadı');
    
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
      console.log('💾 LocalStorage-a yazıldı:', storageKey);
    }, 1000);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [code, storageKey]);

  // starterCode prop dəyişdikdə
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
  // FIRESTORE-A KOD VƏ OUTPUT YAZ - DÜZƏLDİLMİŞ QRUPLAŞDIRMA
  // ============================================
  const saveToFirestore = async (userCode, runOutput, errorMsg = null, executionStatus = 'success') => {
    console.log('🚀 Firestore save başladıldı:', {
      userId: userId || 'YOXDUR',
      hasDb: !!db,
      codeLength: userCode?.length,
      outputLength: runOutput?.length
    });

    if (!userId) {
      console.warn('⚠️ User ID yoxdur, Firestore-a yazılmadı');
      setSaveError('İstifadəçi ID yoxdur');
      return;
    }

    if (!db) {
      console.error('❌ Firebase db obyekti yoxdur!');
      setSaveError('Firebase bağlantısı yoxdur');
      return;
    }

    if (!userCode || userCode.trim() === '') {
      console.warn('⚠️ Boş kod yazılmadı');
      return;
    }

    setIsSaving(true);
    setSaveError(null);
    
    try {
      // 🔥 YENI QRUPLAŞDIRMA STRUKTURU:
      // users/{userId}/courses/{courseId}/topics/{topicId}/attempts/{autoId}
      // Beləliklə hər istifadəçinin kodları tam ayrı-ayrı qruplaşdırılır
      
      const attemptsRef = collection(
        db, 
        'users', 
        userId, 
        'courses', 
        courseId, 
        'topics', 
        String(topicId), 
        'attempts'
      );
      
      const docData = {
        // Əsas məlumatlar
        mode: mode || 'editor',
        code: userCode,
        output: runOutput || '',
        error: errorMsg || null,
        status: executionStatus, // 'success', 'error', 'runtime_error'
        
        // Timestamp-lər
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
        
        // Statistika
        codeLength: userCode.length,
        outputLength: runOutput ? runOutput.length : 0,
        hasPlot: !!plotUrl,
        executionTime: new Date().toLocaleTimeString('az-AZ'),
        
        // AI Analizi (əgər varsa)
        aiAnalysis: aiAnalysis ? {
          text: aiAnalysis.text,
          timestamp: aiAnalysis.timestamp,
          tokens: aiAnalysis.tokens,
          type: aiAnalysis.type // 'error_fix' və ya 'success_review'
        } : null,
        
        // Metadata (filtering üçün)
        dateGroup: new Date().toISOString().split('T')[0], // "2024-03-15" formatında
        monthGroup: new Date().toISOString().slice(0, 7), // "2024-03" formatında
      };

      console.log('📄 Firestore document data:', docData);
      console.log('📍 Path:', `users/${userId}/courses/${courseId}/topics/${topicId}/attempts/{autoId}`);

      const docRef = await addDoc(attemptsRef, docData);
      
      console.log('✅ Firestore-a yazıldı!');
      console.log('🔗 Document ID:', docRef.id);
      console.log('👤 İstifadəçi:', userId);
      console.log('📚 Kurs:', courseId);
      console.log('📖 Mövzu:', topicId);
      
    } catch (err) {
      console.error('❌ Firestore yazma xətası:', err);
      console.error('Xəta detalları:', {
        code: err.code,
        message: err.message,
        stack: err.stack
      });
      setSaveError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // ============================================
  // AI ANALIZ FUNKSiyasi
  // ============================================
  const analyzeErrorWithAI = async (userCode, errorOutput, successOutput = null) => {
    setAiLoading(true);
    
    try {
      const hasError = !!errorOutput;
      const contextData = {
        kod: truncateToLimit(userCode, 600),
        xeta: hasError ? truncateToLimit(errorOutput, 400) : null,
        output: successOutput ? truncateToLimit(successOutput, 300) : null,
        movzu: `Python AI Kursu - Mövzu ${topicId}`,
        mode: mode === 'exercise' ? 'Tapşırıq rejimi' : 'Azad rejim'
      };

      const systemMessage = `Sən peşəkar Python müəllimisisən. Tələbənin koduna bax və fərdi tövsiyələr ver.

ƏSAS VƏZIFƏN:
- Kodu analiz et və səhvləri tap (əgər varsa)
- Uğurlu kod üçün optimallaşdırma tövsiyələri ver
- Tələbənin səviyyəsinə uyğun izahlar ver
- Həmişə azərbaycanca cavab ver

QAYDALAR:
1. Kodun işləkliyini yoxla və nəticəni izah et
2. Əgər xəta varsa: səbəbini və düzəltmə yolunu göstər
3. Əgər uğurludursa: daha yaxşı yazma yolları təklif et (refactoring)
4. Təhlükəsizlik problemləri varsa xəbərdarlıq et
5. Maksimum 5-6 cümlə ilə qısa və aydın izah ver
6. Kodun hansı sətirlərində problem olduğunu göstər

MƏQSƏD: Tələbəni mükəmməl Python proqramçısı etmək!`;

      let userPrompt;
      
      if (hasError) {
        userPrompt = `🔴 XƏTA ANALİZİ

Tələbə bu kodu yazdı (${contextData.movzu}, ${contextData.mode}):
\`\`\`python
${contextData.kod}
\`\`\`

❌ XƏTA MESAJI:
\`\`\`
${contextData.xeta}
\`\`\`

SƏNİN VƏZIFƏN:
1. Xətanın SƏBƏBİNİ izah et (nəyi səhv edib?)
2. Düzəltmə YOLU göstər (addım-addım)
3. Növbəti dəfə nəyə diqqət yetirməli
4. Səhv sətr(lər)i göstər

YADDA SAXLA: Sadə dildə izah et, çətin terminlərdən qaç. Düz hazır kod yazma, yalnız yönləndir!`;
      } else {
        userPrompt = `🟢 UĞURLU KOD ANALİZİ

Tələbə bu kodu yazdı (${contextData.movzu}, ${contextData.mode}):
\`\`\`python
${contextData.kod}
\`\`\`

✅ OUTPUT/NƏTICƏ:
\`\`\`
${contextData.output || 'Kod uğurla icra olundu (output yoxdur)'}
\`\`\`

SƏNİN VƏZIFƏN:
1. Kodun güclü tərəflərini qeyd et
2. Optimallaşdırma tövsiyələri ver (refactoring)
3. Ən yaxşı praktikaları göstər (best practices)
4. Daha qısa/effektiv yazma yolları təklif et (əgər varsa)

YADDA SAXLA: Tələbəni həvəsləndir, amma inkişaf etməsi üçün konkret tövsiyələr ver!`;
      }

      console.log('🤖 AI analizi göndərilir:', {
        mode: hasError ? 'XƏTA' : 'UĞUR',
        kodUzunluq: contextData.kod.length,
        outputUzunluq: hasError ? contextData.xeta?.length : contextData.output?.length
      });

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
            { role: 'user', content: truncateToLimit(userPrompt, AI_CONFIG.MAX_INPUT_TOKENS - 200) }
          ],
          temperature: AI_CONFIG.TEMPERATURE,
          max_tokens: AI_CONFIG.MAX_OUTPUT_TOKENS
        })
      });

      if (!response.ok) {
        throw new Error(`API xətası: ${response.status}`);
      }

      const result = await response.json();
      const aiResponse = result.choices[0].message.content;
      
      const analysisData = {
        text: aiResponse,
        timestamp: new Date().toLocaleTimeString(),
        tokens: {
          input: countTokens(systemMessage + userPrompt),
          output: countTokens(aiResponse)
        },
        type: hasError ? 'error_fix' : 'success_review'
      };
      
      setAiAnalysis(analysisData);
      console.log('✅ AI analizi alındı:', analysisData.type);

    } catch (err) {
      console.error('AI analizi xətası:', err);
      setAiAnalysis({
        text: "⚠️ AI analizi alınmadı. Xətanı özünüz araşdırın və ya müəllimdən soruşun.",
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
    console.log('🗑️ Kod təmizləndi');
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

  // Əsas run funksiyası
  const runCode = useCallback(async () => {
    if (!isReady) {
      setOutput('⏳ Sistem hazırlanır... Zəhmət olmasa gözləyin.');
      return;
    }

    setOutput('🔄 İcra olunur...\n');
    setPlotUrl(null);
    setAiAnalysis(null);
    
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

      for (const pkg of packagesToLoad) {
        setOutput(prev => prev + `📦 ${pkg} yüklənir...\n`);
        await pyodideRef.current.loadPackage(pkg);
      }

      if (code.includes('import seaborn') || code.includes('import sns')) {
        setOutput(prev => prev + '📦 Seaborn yüklənir...\n');
        const micropip = pyodideRef.current.pyimport("micropip");
        await micropip.install("seaborn");
      }

      if (code.includes('import sklearn') || code.includes('from sklearn')) {
        setOutput(prev => prev + '📦 Scikit-learn yüklənir...\n');
        const micropip = pyodideRef.current.pyimport("micropip");
        await micropip.install("scikit-learn");
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
      
      // Tapşırıq rejimində həmişə analiz et
      if (mode === 'exercise') {
        await analyzeErrorWithAI(code, null, finalOutput);
      }
      
      // Firestore-a yaz - YENI QRUPLAŞDIRMA
      await saveToFirestore(code, finalOutput, null, 'success');
      
      if (onCodeRun) {
        onCodeRun(finalOutput, null);
      }
      
    } catch (err) {
      const errorMsg = "❌ XƏTA:\n" + err.message;
      setOutput(errorMsg);
      
      // XƏTA OLDUQDA AI ANALIZI
      await analyzeErrorWithAI(code, err.message, null);
      
      // Firestore-a yaz - YENI QRUPLAŞDIRMA
      await saveToFirestore(code, errorMsg, err.message, 'error');
      
      if (onCodeRun) {
        onCodeRun(errorMsg, err);
      }
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
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
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
          {saveError && (
            <span style={{ color: '#ff6b6b', fontSize: '10px' }} title={saveError}>
              ❌ Saxlama xətası
            </span>
          )}
          
          {isSaving && (
            <span style={{ color: '#888', fontSize: '11px' }}>
              💾 ...
            </span>
          )}
          
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
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
        </div>
        
        {/* Output + AI Analysis Panel */}
        <div style={{ 
          flex: 1, 
          background: '#000', 
          padding: '15px', 
          overflowY: 'auto', 
          borderLeft: '1px solid #333',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Output Section */}
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
            margin: '0 0 15px 0', 
            whiteSpace: 'pre-wrap', 
            fontSize: '13px', 
            color: output.includes('❌') ? '#ff6b6b' : '#00ff00', 
            fontFamily: 'monospace',
            lineHeight: '1.5',
            maxHeight: aiAnalysis ? '120px' : 'auto',
            overflowY: 'auto'
          }}>
            {output}
          </pre>
          
          {/* Plot */}
          {plotUrl && (
            <img 
              src={plotUrl} 
              alt="Plot" 
              style={{ 
                maxWidth: '100%', 
                marginBottom: '15px', 
                display: 'block', 
                background: 'white', 
                padding: '5px',
                borderRadius: '4px'
              }} 
            />
          )}

          {/* AI Analysis Section */}
          {aiLoading && (
            <div style={{
              padding: '15px',
              background: '#1a1a2e',
              borderRadius: '8px',
              border: '1px solid #4a4a6a'
            }}>
              <div style={{ color: '#a0a0ff', fontSize: '12px', marginBottom: '8px' }}>
                🤖 AI Mentor analiz edir...
              </div>
              <div style={{ 
                height: '4px', 
                background: '#2a2a4a', 
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: '30%',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  animation: 'pulse 1.5s infinite'
                }} />
              </div>
            </div>
          )}

          {aiAnalysis && !aiLoading && (
            <div style={{
              padding: '15px',
              background: aiAnalysis.type === 'error_fix' ? '#2a1a1a' : '#1a2e1a',
              borderRadius: '8px',
              border: `1px solid ${aiAnalysis.type === 'error_fix' ? '#6a4a4a' : '#4a6a4a'}`,
              marginTop: '10px'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <div style={{ 
                  color: aiAnalysis.type === 'error_fix' ? '#ffa0a0' : '#a0ffa0', 
                  fontSize: '12px', 
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  {aiAnalysis.type === 'error_fix' ? '🔴 Xəta Təhlili' : '🟢 Kod İcmalı'}
                </div>
                <div style={{ color: '#666', fontSize: '10px' }}>
                  {aiAnalysis.timestamp} • {aiAnalysis.tokens?.output || '?'} token
                </div>
              </div>
              
              <div style={{ 
                color: '#e0e0e0', 
                fontSize: '13px', 
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap'
              }}>
                {aiAnalysis.text}
              </div>
              
              {aiAnalysis.error && (
                <div style={{ 
                  marginTop: '10px', 
                  padding: '8px', 
                  background: '#2a1a1a',
                  borderRadius: '4px',
                  color: '#ff8888',
                  fontSize: '11px'
                }}>
                  ⚠️ AI xidməti müvəqqəti əlçatan deyil
                </div>
              )}
            </div>
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
        <span>
          {isReady ? (
            isSaving ? '💾 Saxlanılır...' : 
            saveError ? '❌ Saxlama xətası' :
            aiLoading ? '🤖 AI analiz edir...' :
            aiAnalysis ? (aiAnalysis.type === 'error_fix' ? '🔴 Xəta təhlili' : '🟢 Kod icmalı') : 
            '✅ Hazır'
          ) : '⏳ Yüklənir...'}
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Editor;