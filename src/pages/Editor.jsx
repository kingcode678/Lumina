import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  collection, 
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

// ============================================
// AI KONFIQURASI - Birbaşa API key
// ============================================

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;


const AI_CONFIG = {
  API_KEY: GROQ_API_KEY,
  API_ENDPOINT: 'https://api.groq.com/openai/v1/chat/completions',
  MODEL: 'llama-3.3-70b-versatile',
  MAX_INPUT_TOKENS: 2000,
  MAX_OUTPUT_TOKENS: 600,
  TEMPERATURE: 0.3
};

// ============================================
// KOD MÜRƏKKƏBLIĞI HESABLAMA
// ============================================
const calculateCodeComplexity = (code) => {
  if (!code) return { score: 0, factor: 1, lines: 0 };
  
  const lines = code.trim().split('\n');
  const totalLines = lines.length;
  
  // Boş sətirləri çıxar
  const nonEmptyLines = lines.filter(l => l.trim());
  const codeLines = nonEmptyLines.length;
  
  // Komment sətirləri
  const commentLines = nonEmptyLines.filter(l => l.trim().startsWith('#')).length;
  
  // Effektiv kod sətirləri
  const effectiveLines = codeLines - commentLines;
  
  // Mürəkkəblik faktoru (logaritmik)
  // 10 sətir = 1x, 100 sətir = 2x, 1000 sətir = 3x
  const complexityFactor = 1 + Math.log10(Math.max(1, effectiveLines / 10));
  
  // Çətinlik balı (0-100)
  const difficultyScore = Math.min(100, effectiveLines * 2 + (code.includes('def') ? 10 : 0) + (code.includes('class') ? 15 : 0));
  
  return {
    score: Math.round(difficultyScore),
    factor: Math.round(complexityFactor * 100) / 100,
    lines: totalLines,
    effectiveLines: effectiveLines
  };
};

// ============================================
// SKOR HESABLAMA (Kod mürəkkəbliyi ilə)
// ============================================
const calculateAttemptScore = (isSuccess, codeComplexity, executionTime = 0) => {
  // Əsas bal: Uğurlu = 100, Uğursuz = 0
  const baseScore = isSuccess ? 100 : 0;
  
  // Mürəkkəblik multiplikatoru (1.0 - 3.0 arası)
  const complexityMultiplier = codeComplexity.factor;
  
  // Effektiv bal = Əsas bal × Mürəkkəblik
  const effectiveScore = Math.round(baseScore * complexityMultiplier);
  
  // Bonus: Böyük kodu uğurla işlədənə əlavə bal
  let bonus = 0;
  if (isSuccess && codeComplexity.score > 50) {
    bonus = Math.round((codeComplexity.score - 50) / 2); // +25 bal max
  }
  
  return {
    baseScore,
    effectiveScore,
    bonus,
    totalScore: Math.min(150, effectiveScore + bonus),
    complexity: codeComplexity
  };
};

const Editor = ({ 
  mode = 'editor', 
  starterCode = 'print("Salam")', 
  onCodeRun, 
  userId, 
  userName = 'guest', 
  courseId = 'ai-python', 
  topicId = 1 
}) => {
  // ============================================
  // STATE
  // ============================================
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('Sistem başladılır...');
  const [plotUrl, setPlotUrl] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Hierarchy state
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userTopics, setUserTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicErrors, setTopicErrors] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  
  const pyodideRef = useRef(null);
  const saveTimeoutRef = useRef(null);

  const storageKey = `editor_code_${courseId}_${topicId}_${mode}_${userId || 'guest'}`;

  // LocalStorage
  useEffect(() => {
    const savedCode = localStorage.getItem(storageKey);
    if (savedCode?.trim() && savedCode !== starterCode) {
      setCode(savedCode);
    } else {
      setCode(starterCode);
    }
  }, [starterCode, storageKey]);

  useEffect(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      localStorage.setItem(storageKey, code);
    }, 1000);
    return () => clearTimeout(saveTimeoutRef.current);
  }, [code, storageKey]);

  // ============================================
  // 🔥 DATABASE YAZMA - HƏM UĞURLU HƏM XƏTALI
  // ============================================
  const saveAttemptToDatabase = async (userCode, executionOutput, isSuccess, executionTime = 0, errorMsg = null) => {
    // Validasiya
    if (!userName || userName === 'guest' || !userName.trim()) {
      console.warn('userName uyğun deyil:', userName);
      return;
    }

    if (!db) {
      console.error('Firebase db yoxdur!');
      return;
    }

    setIsSaving(true);
    
    try {
      const now = new Date();
      const timeStr = now.toTimeString().slice(0, 5);
      const dateStr = now.toISOString().split('T')[0];
      const docId = `${timeStr}_${dateStr}_${now.getTime()}`; // Unikal ID
      const parentDocId = `${userName}_movzu${topicId}`;
      
      // Kod mürəkkəbliyini hesabla
      const complexity = calculateCodeComplexity(userCode);
      
      // Balı hesabla
      const score = calculateAttemptScore(isSuccess, complexity, executionTime);
      
      console.log('💾 Database yazılır:', {
        parentDocId,
        isSuccess,
        complexity: complexity.score,
        totalScore: score.totalScore
      });

      // 1. PARENT DOCUMENT - Statistikalar
      const parentRef = doc(db, 'totalCode', parentDocId);
      const parentSnap = await getDoc(parentRef);
      
      const parentData = {
        userName: userName,
        topicId: Number(topicId),
        courseId: courseId,
        updatedAt: serverTimestamp(),
        lastAttempt: {
          timeStr: timeStr,
          dateStr: dateStr,
          isSuccess: isSuccess,
          score: score.totalScore,
          complexity: complexity.score
        }
      };
      
      if (!parentSnap.exists()) {
        // İlk cəhd - yeni sənəd
        parentData.createdAt = serverTimestamp();
        parentData.totalAttempts = 1;
        parentData.successfulAttempts = isSuccess ? 1 : 0;
        parentData.failedAttempts = isSuccess ? 0 : 1;
        parentData.totalScore = score.totalScore;
        parentData.averageScore = score.totalScore;
        parentData.bestScore = score.totalScore;
        parentData.totalCodeLines = complexity.lines;
        parentData.totalEffectiveLines = complexity.effectiveLines;
      } else {
        // Mövcud sənəd - update et
        const current = parentSnap.data();
        const newTotalAttempts = (current.totalAttempts || 0) + 1;
        const newSuccessful = (current.successfulAttempts || 0) + (isSuccess ? 1 : 0);
        const newFailed = (current.failedAttempts || 0) + (isSuccess ? 0 : 1);
        const newTotalScore = (current.totalScore || 0) + score.totalScore;
        const newAverage = Math.round(newTotalScore / newTotalAttempts);
        const newBest = Math.max(current.bestScore || 0, score.totalScore);
        
        parentData.totalAttempts = newTotalAttempts;
        parentData.successfulAttempts = newSuccessful;
        parentData.failedAttempts = newFailed;
        parentData.totalScore = newTotalScore;
        parentData.averageScore = newAverage;
        parentData.bestScore = newBest;
        parentData.totalCodeLines = (current.totalCodeLines || 0) + complexity.lines;
        parentData.totalEffectiveLines = (current.totalEffectiveLines || 0) + complexity.effectiveLines;
        
        // Success rate
        parentData.successRate = Math.round((newSuccessful / newTotalAttempts) * 100);
      }
      
      await setDoc(parentRef, parentData, { merge: true });
      console.log('✅ Parent document yazıldı');

      // 2. SUBCOLLECTION - Hər cəhdin detalları
      const attemptRef = doc(db, 'totalCode', parentDocId, 'attempts', docId);
      
      const attemptData = {
        timeStr: timeStr,
        dateStr: dateStr,
        timestamp: serverTimestamp(),
        isSuccess: isSuccess,
        code: userCode || '',
        output: executionOutput || '',
        codeLength: userCode?.length || 0,
        executionTime: executionTime,
        
        // Kod mürəkkəbliyi
        complexity: {
          score: complexity.score,
          factor: complexity.factor,
          lines: complexity.lines,
          effectiveLines: complexity.effectiveLines
        },
        
        // Bal məlumatları
        score: {
          base: score.baseScore,
          effective: score.effectiveScore,
          bonus: score.bonus,
          total: score.totalScore
        },
        
        // Xəta məlumatları (əgər varsa)
        error: errorMsg ? {
          message: errorMsg,
          type: errorMsg.split(':')[0] || 'Unknown'
        } : null,
        
        // AI analizi (əgər varsa)
        aiAnalysis: aiAnalysis ? {
          text: aiAnalysis.text,
          type: aiAnalysis.type,
          timestamp: aiAnalysis.timestamp
        } : null
      };
      
      await setDoc(attemptRef, attemptData);
      console.log('✅ Attempt document yazıldı:', docId);

      // UI yeniləmə
      if (showHistory && selectedTopic === parentDocId) {
        await loadTopicAttempts(parentDocId);
      }
      
      // Output-a məlumat əlavə et
      const saveMsg = isSuccess 
        ? `\\n\\n💾 Uğurlu cəhd yazıldı! (+${score.totalScore} bal, Mürəkkəblik: ${complexity.score}/100)`
        : `\\n\\n💾 Xətalı cəhd yazıldı! (Mürəkkəblik: ${complexity.score}/100)`;
      
      setOutput(prev => prev + saveMsg);
      
    } catch (err) {
      console.error('❌ Database yazma xətası:', err);
      setOutput(prev => prev + '\\n\\n❌ Database xətası: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // ============================================
  // AI ANALIZ
  // ============================================
  const analyzeErrorWithAI = async (userCode, errorOutput) => {
    if (!AI_CONFIG.API_KEY) {
      setAiAnalysis({ 
        text: "⚠️ API Key tapılmadı", 
        error: true 
      });
      return;
    }

    setAiLoading(true);
    
    try {
      const systemMessage = `Sən Python müəllimisisən. Xətanı analiz et və azərbaycanca izah et. Sadə dildə, konkret olaraq hansı sətirdə problem olduğunu göstər.`;
      const userPrompt = `Kod:\\n${userCode?.slice(0, 800)}\\n\\nXəta:\\n${errorOutput?.slice(0, 500)}`;

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

      if (!response.ok) {
        throw new Error(`API ${response.status}`);
      }

      const result = await response.json();
      
      setAiAnalysis({
        text: result.choices[0].message.content,
        timestamp: new Date().toLocaleTimeString(),
        type: 'error_fix'
      });
      
    } catch (err) {
      console.error('AI xətası:', err);
      setAiAnalysis({ 
        text: `⚠️ AI analizi alınmadı: ${err.message}`, 
        error: true 
      });
    } finally {
      setAiLoading(false);
    }
  };

  // ============================================
  // HIERARCHY FUNKSİYALARI (Yenilənmiş)
  // ============================================
  const loadAllUsers = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'totalCode'));
      const users = [];
      
      snapshot.forEach((doc) => {
        const docId = doc.id;
        const data = doc.data();
        const parts = docId.split('_');
        
        if (parts.length >= 2) {
          const uName = parts[0];
          const tId = parts[1].replace('movzu', '');
          
          const existingUser = users.find(u => u.userName === uName);
          if (!existingUser) {
            users.push({
              userName: uName,
              topics: [{
                topicId: parseInt(tId),
                topicName: `Mövzu ${tId}`,
                docId: docId,
                stats: {
                  totalAttempts: data.totalAttempts || 0,
                  successfulAttempts: data.successfulAttempts || 0,
                  failedAttempts: data.failedAttempts || 0,
                  successRate: data.successRate || 0,
                  averageScore: data.averageScore || 0,
                  bestScore: data.bestScore || 0
                }
              }]
            });
          } else {
            existingUser.topics.push({
              topicId: parseInt(tId),
              topicName: `Mövzu ${tId}`,
              docId: docId,
              stats: {
                totalAttempts: data.totalAttempts || 0,
                successfulAttempts: data.successfulAttempts || 0,
                failedAttempts: data.failedAttempts || 0,
                successRate: data.successRate || 0,
                averageScore: data.averageScore || 0,
                bestScore: data.bestScore || 0
              }
            });
          }
        }
      });
      
      setAllUsers(users);
    } catch (err) {
      console.error('İstifadəçi yükləmə xətası:', err);
    }
  };

  const loadUserTopics = async (uName) => {
    try {
      const snapshot = await getDocs(collection(db, 'totalCode'));
      const topics = [];
      
      snapshot.forEach((doc) => {
        const docId = doc.id;
        if (docId.startsWith(`${uName}_`)) {
          const data = doc.data();
          const tId = docId.split('_')[1].replace('movzu', '');
          topics.push({
            topicId: parseInt(tId),
            topicName: `Mövzu ${tId}`,
            docId: docId,
            stats: {
              totalAttempts: data.totalAttempts || 0,
              successfulAttempts: data.successfulAttempts || 0,
              failedAttempts: data.failedAttempts || 0,
              successRate: data.successRate || 0,
              averageScore: data.averageScore || 0,
              bestScore: data.bestScore || 0
            }
          });
        }
      });
      
      topics.sort((a, b) => a.topicId - b.topicId);
      setUserTopics(topics);
      setSelectedUser(uName);
      setSelectedTopic(null);
      setTopicErrors([]);
    } catch (err) {
      console.error('Mövzu yükləmə xətası:', err);
    }
  };

  const loadTopicAttempts = async (topicDocId) => {
    try {
      const attemptsRef = collection(db, 'totalCode', topicDocId, 'attempts');
      const q = query(attemptsRef, orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(q);
      
      const attempts = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        attempts.push({
          id: doc.id,
          ...data
        });
      });
      
      setTopicErrors(attempts);
      setSelectedTopic(topicDocId);
    } catch (err) {
      console.error('Cəhd yükləmə xətası:', err);
    }
  };

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

  const clearCode = () => {
    setCode('');
    setOutput('Kod təmizləndi.');
    setPlotUrl(null);
    setAiAnalysis(null);
    localStorage.removeItem(storageKey);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !isReady) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        pyodideRef.current.FS.writeFile(file.name, event.target.result);
        setOutput(`✅ '${file.name}' yükləndi.`);
      } catch (err) { 
        setOutput("❌ Fayl xətası: " + err.message); 
      }
    };
    reader.readAsText(file);
  };

  const viewAttemptHistory = (attemptItem) => {
    setCode(attemptItem.code);
    setOutput(attemptItem.output);
    setAiAnalysis(attemptItem.aiAnalysis || null);
  };

  const runCode = useCallback(async () => {
    if (!isReady) {
      setOutput('⏳ Sistem hazırlanır...');
      return;
    }

    const startTime = Date.now();
    setOutput('🔄 İcra olunur...\\n');
    setPlotUrl(null);
    setAiAnalysis(null);
    
    try {
      const packagesToLoad = [];
      if (code.includes('matplotlib')) packagesToLoad.push('matplotlib');
      if (code.includes('numpy')) packagesToLoad.push('numpy');
      if (code.includes('pandas')) packagesToLoad.push('pandas');

      for (const pkg of packagesToLoad) {
        setOutput(prev => prev + `📦 ${pkg}...\\n`);
        await pyodideRef.current.loadPackage(pkg);
      }

      if (code.includes('seaborn')) {
        const micropip = pyodideRef.current.pyimport("micropip");
        await micropip.install("seaborn");
      }

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

      await pyodideRef.current.runPythonAsync(code);
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");
      const imgData = pyodideRef.current.runPython("get_plot()");
      
      const executionTime = Date.now() - startTime;
      const finalOutput = stdout || "✅ İcra olundu.";
      setOutput(finalOutput);
      if (imgData) setPlotUrl("data:image/png;base64," + imgData);
      
      // 🔥 UĞURLU CƏHDI YAZ
      await saveAttemptToDatabase(code, finalOutput, true, executionTime, null);
      
      if (onCodeRun) onCodeRun(finalOutput, null);
      
    } catch (err) {
      const executionTime = Date.now() - startTime;
      const errorMsg = err.message;
      const errorOutput = "❌ XƏTA:\\n" + errorMsg;
      setOutput(errorOutput);
      
      // AI analizi
      await analyzeErrorWithAI(code, errorMsg);
      
      // 🔥 XƏTALI CƏHDI YAZ
      await saveAttemptToDatabase(code, errorOutput, false, executionTime, errorMsg);
      
      if (onCodeRun) onCodeRun(errorOutput, err);
    }
  }, [code, isReady, onCodeRun, userName, topicId, aiAnalysis]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: mode === 'exercise' ? '700px' : '800px', 
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
          
          {userName && userName !== 'guest' && (
            <span style={{ color: '#888', fontSize: '11px', background: '#1a1a1a', padding: '2px 8px', borderRadius: '4px' }}>
              👤 {userName}
            </span>
          )}
          
          <input 
            type="file" 
            onChange={handleFileUpload} 
            style={{ color: '#aaa', fontSize: '11px', width: '180px' }} 
            disabled={!isReady}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button 
            onClick={() => {
              setShowHistory(!showHistory);
              if (!showHistory) loadAllUsers();
            }}
            style={{ 
              background: showHistory ? '#4a9eff' : '#444', 
              color: 'white', 
              border: 'none', 
              padding: '6px 12px', 
              cursor: 'pointer', 
              borderRadius: '4px', 
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            📚 Tarixçə
          </button>
          
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
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
            ▶ RUN
          </button>
        </div>
      </div>

      {/* Hierarchy Panel */}
      {showHistory && (
        <div style={{
          maxHeight: '200px',
          overflowY: 'auto',
          background: '#1a1a1a',
          borderBottom: '2px solid #4a9eff',
          padding: '12px'
        }}>
          {!selectedUser ? (
            <div>
              <div style={{ color: '#4a9eff', fontSize: '12px', marginBottom: '8px', fontWeight: 'bold' }}>
                👥 İstifadəçilər ({allUsers.length})
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {allUsers.map((user) => (
                  <button
                    key={user.userName}
                    onClick={() => loadUserTopics(user.userName)}
                    style={{
                      background: '#2a2a2a',
                      color: '#aaa',
                      border: '1px solid #444',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '11px'
                    }}
                  >
                    {user.userName}
                  </button>
                ))}
              </div>
            </div>
          ) : !selectedTopic ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#4a9eff', fontSize: '12px', fontWeight: 'bold' }}>
                  📁 {selectedUser} - Mövzular
                </span>
                <button 
                  onClick={() => setSelectedUser(null)}
                  style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '11px' }}
                >
                  ← Geri
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {userTopics.map((topic) => (
                  <button
                    key={topic.topicId}
                    onClick={() => loadTopicAttempts(topic.docId)}
                    style={{
                      background: '#2a2a2a',
                      color: '#aaa',
                      border: '1px solid #444',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '11px',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{topic.topicName}</span>
                    <span style={{ color: topic.stats.successRate > 70 ? '#4ade80' : topic.stats.successRate > 40 ? '#facc15' : '#f87171' }}>
                      {topic.stats.totalAttempts} cəhd | {topic.stats.successRate}% uğur
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#4a9eff', fontSize: '12px', fontWeight: 'bold' }}>
                  📝 Cəhdlər ({topicErrors.length})
                </span>
                <button 
                  onClick={() => setSelectedTopic(null)}
                  style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '11px' }}
                >
                  ← Geri
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxHeight: '150px', overflowY: 'auto' }}>
                {topicErrors.map((attempt) => (
                  <button
                    key={attempt.id}
                    onClick={() => viewAttemptHistory(attempt)}
                    style={{
                      background: attempt.isSuccess ? '#1a2f1a' : '#2f1a1a',
                      color: '#aaa',
                      border: `1px solid ${attempt.isSuccess ? '#22c55e30' : '#ef444430'}`,
                      padding: '6px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '10px',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{attempt.isSuccess ? '✅' : '❌'} {attempt.timeStr}</span>
                      <span style={{ color: attempt.isSuccess ? '#4ade80' : '#f87171' }}>
                        +{attempt.score?.total || 0} bal
                      </span>
                    </div>
                    <div style={{ color: '#666', fontSize: '9px', marginTop: '2px' }}>
                      Mürəkkəblik: {attempt.complexity?.score}/100 | {attempt.complexity?.lines} sətir
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
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
        
        <div style={{ 
          flex: 1, 
          background: '#000', 
          padding: '15px', 
          overflowY: 'auto', 
          borderLeft: '1px solid #333',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ color: '#888', fontSize: '11px', marginBottom: '8px' }}>
            🖥️ Output
          </div>
          
          <pre style={{ 
            color: output.includes('❌') ? '#ff6b6b' : '#00ff00', 
            fontSize: '13px',
            whiteSpace: 'pre-wrap',
            margin: '0 0 15px 0'
          }}>
            {output}
          </pre>
          
          {plotUrl && (
            <img src={plotUrl} alt="Plot" style={{ maxWidth: '100%', background: 'white', borderRadius: '4px' }} />
          )}

          {aiLoading && (
            <div style={{ color: '#a0a0ff', marginTop: '10px' }}>
              🤖 AI analiz edir...
            </div>
          )}

          {aiAnalysis && !aiLoading && (
            <div style={{
              marginTop: '10px',
              padding: '12px',
              background: aiAnalysis.error ? '#2a2a1a' : '#2a1a1a',
              borderRadius: '6px',
              border: `1px solid ${aiAnalysis.error ? '#ffa500' : '#6a4a4a'}`,
              color: '#e0e0e0'
            }}>
              <div style={{ 
                color: aiAnalysis.error ? '#ffa500' : '#ffa0a0', 
                fontSize: '12px', 
                fontWeight: 'bold',
                marginBottom: '6px'
              }}>
                {aiAnalysis.error ? '⚠️ AI Xəta' : '🔴 AI Təhlili'}
              </div>
              <div style={{ fontSize: '13px', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
                {aiAnalysis.text}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Status Bar */}
      <div style={{
        padding: '8px 15px',
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
            aiLoading ? '🤖 AI analiz edir...' : '✅ Hazır'
          ) : '⏳ Yüklənir...'}
        </span>
      </div>
    </div>
  );
};

export default Editor;