import React, { useState, useEffect, useCallback, useRef } from 'react';
import { db } from '../firebase';
import { 
  doc, 
  getDoc, 
  setDoc, 
  deleteDoc,
  serverTimestamp, 
  onSnapshot
} from 'firebase/firestore';
import { 
  Brain, AlertCircle, CheckCircle2, XCircle, Loader2, 
  RefreshCw, Target, Zap, ChevronDown, ChevUp,
  Terminal, Bug, BookOpen, FileQuestion, Code2, 
  TrendingUp, Award, Lightbulb, ArrowRight, BarChart3,
  Trash2, RotateCcw, GraduationCap, Clock, AlertTriangle,
  CheckSquare, LayoutList, ChevronUp
} from 'lucide-react';

// ============================================
// API KEY - BİRBAŞA KODDA
// ============================================
const GROQ_API_KEY = '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';

// TOKEN LIMITLƏRI
const MAX_INPUT_TOKENS = 3500;
const MAX_OUTPUT_TOKENS = 1500;

// ============================================
// HOOK
// ============================================
export const useAIMentor = () => {
  const saveQuizAttempt = async (userId, courseId, topicId, questionIndex, userAnswer, isCorrect, questionData) => {
    if (!userId || !courseId) return;
    
    try {
      const sessionRef = doc(db, 'users', userId, 'sessions', courseId);
      const docSnap = await getDoc(sessionRef);
      const existing = docSnap.exists() ? docSnap.data().quizAttempts || [] : [];
      
      await setDoc(sessionRef, {
        quizAttempts: [...existing, {
          topicId,
          questionIndex,
          question: questionData?.question || '',
          options: questionData?.options || [],
          correctAnswer: questionData?.correctAnswer,
          userAnswer,
          isCorrect,
          timestamp: new Date().toISOString()
        }],
        lastUpdated: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.error('Quiz save error:', err);
    }
  };

  const saveCodeAttempt = async (userId, courseId, topicId, code, output, error, isSuccess, exerciseData) => {
    if (!userId || !courseId) return;
    
    try {
      const sessionRef = doc(db, 'users', userId, 'sessions', courseId);
      const docSnap = await getDoc(sessionRef);
      const existing = docSnap.exists() ? docSnap.data().codeAttempts || [] : [];
      
      let errorCategory = null;
      let errorLine = null;
      
      if (error) {
        const errStr = error.toString().toLowerCase();
        if (errStr.includes('syntax')) errorCategory = 'SyntaxError';
        else if (errStr.includes('indent')) errorCategory = 'IndentationError';
        else if (errStr.includes('name') && errStr.includes('not defined')) errorCategory = 'NameError';
        else if (errStr.includes('type')) errorCategory = 'TypeError';
        else if (errStr.includes('index')) errorCategory = 'IndexError';
        else if (errStr.includes('key')) errorCategory = 'KeyError';
        else if (errStr.includes('import') || errStr.includes('module')) errorCategory = 'ImportError';
        else if (errStr.includes('attribute')) errorCategory = 'AttributeError';
        else errorCategory = 'RuntimeError';
        
        const lineMatch = errStr.match(/line (\d+)/);
        if (lineMatch) errorLine = parseInt(lineMatch[1]);
      }
      
      await setDoc(sessionRef, {
        codeAttempts: [...existing, {
          topicId,
          exerciseTitle: exerciseData?.title || '',
          requirements: exerciseData?.requirements || [],
          code: code?.substring(0, 2000) || '',
          output: output?.substring(0, 1000) || '',
          error: error ? error.toString().substring(0, 1000) : null,
          errorCategory,
          errorLine,
          isSuccess,
          timestamp: new Date().toISOString()
        }],
        lastUpdated: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.error('Code save error:', err);
    }
  };

  return { saveQuizAttempt, saveCodeAttempt };
};

// ============================================
// KOMPONENT
// ============================================
const AIAnalysis = ({ user, courseId, currentTopic, topics, isActivated, currentMonth }) => {
  const [sessionData, setSessionData] = useState({
    quizAttempts: [],
    codeAttempts: [],
    totalAttempts: 0
  });

  const [aiAnalysis, setAiAnalysis] = useState({
    summary: '',
    detailedAnalysis: [],
    overallLevel: '',
    weakTopics: [],
    strongTopics: [],
    errorPatterns: [],
    recommendations: [],
    nextSteps: '',
    loading: false,
    error: null,
    lastUpdated: null,
    hasAnalysis: false,
    progressStats: null
  });

  const [activeSection, setActiveSection] = useState('overview');
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [tokenInfo, setTokenInfo] = useState({ input: 0, output: 0 });
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  
  const unsubscribeRef = useRef(null);

  // Firestore listener
  useEffect(() => {
    if (!user || !courseId) return;

    const sessionRef = doc(db, 'users', user.uid, 'sessions', courseId);
    
    unsubscribeRef.current = onSnapshot(sessionRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const quizAttempts = data.quizAttempts || [];
        const codeAttempts = data.codeAttempts || [];
        
        setSessionData({
          quizAttempts,
          codeAttempts,
          totalAttempts: quizAttempts.length + codeAttempts.length
        });
      }
    });

    loadLastAnalysis();
    return () => unsubscribeRef.current?.();
  }, [user, courseId]);

  const loadLastAnalysis = async () => {
    if (!user || !courseId) return;
    try {
      const analysisRef = doc(db, 'users', user.uid, 'aiAnalysis', courseId);
      const analysisSnap = await getDoc(analysisRef);
      
      if (analysisSnap.exists()) {
        const data = analysisSnap.data();
        setAiAnalysis(prev => ({
          ...prev,
          ...data,
          lastUpdated: data.generatedAt?.toDate() || null,
          hasAnalysis: true
        }));
        setTokenInfo(data.tokenInfo || { input: 0, output: 0 });
      }
    } catch (err) {
      console.error('Son analiz yüklənmədi:', err);
    }
  };

  // ============================================
  // ANALIZI SIFIRLA
  // ============================================
  const resetAnalysis = async () => {
    if (!user || !courseId) return;
    
    try {
      // Firestore-dan analizi sil
      const analysisRef = doc(db, 'users', user.uid, 'aiAnalysis', courseId);
      await deleteDoc(analysisRef);
      
      // State-i sıfırla
      setAiAnalysis({
        summary: '',
        detailedAnalysis: [],
        overallLevel: '',
        weakTopics: [],
        strongTopics: [],
        errorPatterns: [],
        recommendations: [],
        nextSteps: '',
        loading: false,
        error: null,
        lastUpdated: null,
        hasAnalysis: false,
        progressStats: null
      });
      
      setTokenInfo({ input: 0, output: 0 });
      setShowResetConfirm(false);
      
    } catch (err) {
      console.error('Analiz sıfırlanmadı:', err);
      alert('Analiz sıfırlanarkən xəta baş verdi');
    }
  };

  // ============================================
  // PROGRESS HESABLAMA
  // ============================================
  const calculateProgress = useCallback(() => {
    const { quizAttempts, codeAttempts } = sessionData;
    
    // Hər mövzu üzrə məlumatları yığ
    const topicStats = {};
    
    // Bütün mövzular üçün boş struktur yarat (keçilməyənlər də daxil)
    topics.forEach((topic, idx) => {
      topicStats[idx + 1] = {
        topicId: idx + 1,
        title: topic.title,
        quizAttempts: [],
        codeAttempts: [],
        hasActivity: false
      };
    });
    
    // Quiz məlumatlarını əlavə et
    quizAttempts.forEach(q => {
      if (topicStats[q.topicId]) {
        topicStats[q.topicId].quizAttempts.push(q);
        topicStats[q.topicId].hasActivity = true;
      }
    });
    
    // Kod məlumatlarını əlavə et
    codeAttempts.forEach(c => {
      if (topicStats[c.topicId]) {
        topicStats[c.topicId].codeAttempts.push(c);
        topicStats[c.topicId].hasActivity = true;
      }
    });
    
    // Aktiv mövzuları say (heç olmasa 1 cəhdi olanlar)
    const activeTopics = Object.values(topicStats).filter(t => t.hasActivity);
    const totalTopics = topics.length;
    const completedTopics = activeTopics.length;
    
    return {
      totalTopics,
      completedTopics,
      percentComplete: Math.round((completedTopics / totalTopics) * 100),
      topicStats
    };
  }, [sessionData, topics]);

  // ============================================
  // DETALLI PROMPT - HER MOVZU UCUN AYRI
  // ============================================
  const buildDetailedPrompt = useCallback(() => {
    const { quizAttempts, codeAttempts } = sessionData;
    const progress = calculateProgress();
    
    let prompt = `PYTHON AI KURSU - FƏRDİ TƏHLIL\n`;
    prompt += `=====================================\n\n`;
    
    // İRƏLİLƏYİŞ MƏLUMATI (Əsas göstərici)
    prompt += `📊 ÜMUMI İRƏLİLƏYİŞ: ${progress.completedTopics}/${progress.totalTopics} mövzu (${progress.percentComplete}%)\n`;
    prompt += `Tələbə kursun ${progress.percentComplete}%-ni tamamlayıb.\n\n`;
    
    // HƏR MÖVZU ÜZRƏ DETALLI TƏHLIL
    prompt += `🔍 MÖVZU BAZLI DETALLI TƏHLIL:\n`;
    prompt += `================================\n\n`;
    
    Object.values(progress.topicStats).forEach(topic => {
      const topicQuiz = topic.quizAttempts;
      const topicCode = topic.codeAttempts;
      
      // Mövzu başlığı
      prompt += `\n📚 MÖVZU ${topic.topicId}: ${topic.title.toUpperCase()}\n`;
      prompt += `${'='.repeat(40)}\n`;
      
      if (!topic.hasActivity) {
        prompt += `⏳ Bu mövzuya aid heç bir fəaliyyət yoxdur (keçilməyib).\n`;
        return;
      }
      
      // Quiz nəticələri
      if (topicQuiz.length > 0) {
        const correctCount = topicQuiz.filter(q => q.isCorrect).length;
        const accuracy = Math.round((correctCount / topicQuiz.length) * 100);
        
        prompt += `\n📝 Quiz Nəticələri:\n`;
        prompt += `   • Ümumi sual: ${topicQuiz.length}\n`;
        prompt += `   • Düzgün cavab: ${correctCount}\n`;
        prompt += `   • Uğur faizi: ${accuracy}%\n`;
        
        // Səhv cavablar detallı
        const wrongAnswers = topicQuiz.filter(q => !q.isCorrect);
        if (wrongAnswers.length > 0) {
          prompt += `\n   ❌ SƏHV CAVABLAR (Diqqət yetirilməli):\n`;
          wrongAnswers.forEach((q, idx) => {
            prompt += `      ${idx + 1}. Sual: ${q.question?.substring(0, 80)}...\n`;
            prompt += `         Səhv cavab: ${q.userAnswer || 'Boş'}\n`;
            prompt += `         Düzgün cavab: ${q.options?.[q.correctAnswer] || 'Bilinmir'}\n`;
          });
        }
        
        // Səviyyə qiymətləndirməsi
        let level = 'Başlanğıc';
        if (accuracy >= 90) level = 'Tam Mənimsəmiş';
        else if (accuracy >= 60) level = 'Orta';
        
        prompt += `\n   🎯 Mövzu Səviyyəsi: ${level}\n`;
      } else {
        prompt += `\n📝 Quiz: Keçirilməyib\n`;
      }
      
      // Kod tapşırıqları
      if (topicCode.length > 0) {
        const successCount = topicCode.filter(c => c.isSuccess).length;
        const successRate = Math.round((successCount / topicCode.length) * 100);
        
        prompt += `\n💻 Kod Tapşırıqları:\n`;
        prompt += `   • Ümumi cəhd: ${topicCode.length}\n`;
        prompt += `   • Uğurlu: ${successCount}\n`;
        prompt += `   • Uğur faizi: ${successRate}%\n`;
        
        // Xəta detalları
        const errors = topicCode.filter(c => !c.isSuccess && c.error);
        if (errors.length > 0) {
          prompt += `\n   🐞 YAYGIN XƏTALAR:\n`;
          const errorTypes = {};
          errors.forEach(e => {
            const type = e.errorCategory || 'Digər';
            errorTypes[type] = (errorTypes[type] || 0) + 1;
          });
          
          Object.entries(errorTypes).forEach(([type, count]) => {
            prompt += `      • ${type}: ${count} dəfə\n`;
          });
          
          // Son xəta nümunəsi
          const lastError = errors[errors.length - 1];
          prompt += `\n   📋 Son Xəta Nümunəsi:\n`;
          prompt += `      Tip: ${lastError.errorCategory}\n`;
          prompt += `      Mesaj: ${lastError.error?.substring(0, 150)}\n`;
        }
        
        // Kod səviyyəsi
        let codeLevel = 'Başlanğıc';
        if (successRate >= 80) codeLevel = 'Tam Mənimsəmiş';
        else if (successRate >= 50) codeLevel = 'Orta';
        
        prompt += `\n   🎯 Kod Səviyyəsi: ${codeLevel}\n`;
      } else {
        prompt += `\n💻 Kod tapşırığı: Keçirilməyib\n`;
      }
    });
    
    // ÜMUMI KURS TƏHLILI
    prompt += `\n\n📈 ÜMUMI KURS TƏHLILI:\n`;
    prompt += `======================\n`;
    
    const totalQuiz = quizAttempts.length;
    const correctQuiz = quizAttempts.filter(q => q.isCorrect).length;
    const totalCode = codeAttempts.length;
    const successCode = codeAttempts.filter(c => c.isSuccess).length;
    
    const quizRate = totalQuiz > 0 ? Math.round((correctQuiz / totalQuiz) * 100) : 0;
    const codeRate = totalCode > 0 ? Math.round((successCode / totalCode) * 100) : 0;
    
    prompt += `• Ümumi Quiz Uğuru: ${correctQuiz}/${totalQuiz} (${quizRate}%)\n`;
    prompt += `• Ümumi Kod Uğuru: ${successCode}/${totalCode} (${codeRate}%)\n`;
    
    // Ümumi səviyyə
    let overallLevel = 'Başlanğıc';
    const avgRate = (quizRate + codeRate) / 2;
    if (progress.percentComplete >= 80 && avgRate >= 85) overallLevel = 'İrəli';
    else if (progress.percentComplete >= 50 && avgRate >= 60) overallLevel = 'Orta';
    
    prompt += `• Ümumi Səviyyə: ${overallLevel}\n`;
    
    // ZƏIF MÖVZULAR (Tövsiyə üçün)
    prompt += `\n⚠️  DİQQƏT YETIRILMƏLI MÖVZULAR:\n`;
    Object.values(progress.topicStats).forEach(topic => {
      if (!topic.hasActivity) return;
      
      const topicQuiz = topic.quizAttempts;
      const topicCode = topic.codeAttempts;
      
      const quizAccuracy = topicQuiz.length > 0 
        ? (topicQuiz.filter(q => q.isCorrect).length / topicQuiz.length) * 100 
        : 100;
      const codeSuccess = topicCode.length > 0
        ? (topicCode.filter(c => c.isSuccess).length / topicCode.length) * 100
        : 100;
      
      if (quizAccuracy < 60 || codeSuccess < 50) {
        prompt += `• ${topic.title} (Quiz: ${Math.round(quizAccuracy)}%, Kod: ${Math.round(codeSuccess)}%)\n`;
      }
    });
    
    // TƏLƏBLƏR (Sıfırdan başlayanlar üçün)
    prompt += `\n\n🎯 TƏHLIL TƏLƏBLƏRI (Sıfırdan Başlayanlar Üçün):\n`;
    prompt += `1. Hər mövzu üçün ayrı-ayrılıqda səviyyə təyin et: Başlanğıc / Orta / Tam Mənimsəmiş\n`;
    prompt += `2. Ümumi kurs üzrə səviyyə təyin et (keçilən mövzular nəzərə alınaraq)\n`;
    prompt += `3. Səhv cavabların SƏBƏBİNİ izah et (niyə səhv olub, konsept nədir)\n`;
    prompt += `4. Kod xətalarını sadə dildə izah et (səhv etdiyi nöqtəni göstər)\n`;
    prompt += `5. Zəif mövzuları siyahıla və hər biri üçün KONKRET tövsiyə ver\n`;
    prompt += `6. Sıfırdan başlayan birinə uyğun: sadə, aydın, təşviqedici dil istifadə et\n`;
    prompt += `7. Növbəti addımları prioritizə et (hansı mövzunu təkrar etməli, nəyə fokuslanmalı)\n`;
    
    // Token limiti yoxla
    const estimatedTokens = prompt.length / 4;
    if (estimatedTokens > MAX_INPUT_TOKENS) {
      return prompt.substring(0, MAX_INPUT_TOKENS * 4) + '\n...[məlumat qısaldıldı]';
    }
    
    setTokenInfo(prev => ({ ...prev, input: Math.round(estimatedTokens) }));
    return prompt;
  }, [sessionData, topics, calculateProgress]);

  // ============================================
  // AI ANALYSIS
  // ============================================
  const generateAnalysis = useCallback(async () => {
    const prompt = buildDetailedPrompt();
    const progress = calculateProgress();
    
    if (!prompt || sessionData.totalAttempts === 0) {
      setAiAnalysis(prev => ({ 
        ...prev, 
        error: 'Analiz üçün kifayət qədər məlumat yoxdur. Əvvəlcə quiz və kod tapşırıqlarını tamamlayın.' 
      }));
      return;
    }

    setAiAnalysis(prev => ({ ...prev, loading: true, error: null }));

    try {
      console.log('🚀 API sorğusu:', { inputTokens: tokenInfo.input });
      
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions ', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `Sən peşəkar Python müəllimisən. Tələbənin hər mövzunu ayrı-ayrılıqda və ümumi kursu təhlil et. 
              Sıfırdan başlayanlar üçün sadə, aydın dil istifadə et. 
              Hər səhv üçün: 1) Nəyi bilmədiyini, 2) Necə düzəltməli olduğunu izah et.
              Təhlili strukturlu və oxunaqlı apar. Azərbaycanca cavab ver.`
            },
            { role: 'user', content: prompt }
          ],
          temperature: 0.5,
          max_tokens: MAX_OUTPUT_TOKENS
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API xətası:', response.status, errorText);
        throw new Error(`API xətası: ${response.status}`);
      }

      const result = await response.json();
      const aiResponse = result.choices[0].message.content;
      
      const outputTokens = aiResponse.length / 4;
      setTokenInfo({ input: tokenInfo.input, output: Math.round(outputTokens) });
      
      console.log('✅ AI cavabı alındı:', aiResponse.substring(0, 200));
      
      const parsed = parseDetailedResponse(aiResponse, progress);
      
      setAiAnalysis({
        ...parsed,
        loading: false,
        error: null,
        lastUpdated: new Date(),
        hasAnalysis: true,
        progressStats: progress
      });

      await saveAnalysis(parsed, progress);
      
    } catch (error) {
      console.error('AI Analysis error:', error);
      setAiAnalysis(prev => ({
        ...prev,
        loading: false,
        error: error.message || 'Xəta baş verdi'
      }));
    }
  }, [sessionData, buildDetailedPrompt, tokenInfo, calculateProgress]);

  const parseDetailedResponse = (response, progress) => {
    const lines = response.split('\n').filter(l => l.trim());
    
    const analysis = {
      summary: '',
      detailedAnalysis: [],
      overallLevel: '',
      weakTopics: [],
      strongTopics: [],
      errorPatterns: [],
      recommendations: [],
      nextSteps: '',
      progressContext: `${progress.completedTopics}/${progress.totalTopics} mövzu`
    };

    let currentSection = '';
    let currentTopic = null;
    let buffer = [];

    lines.forEach(line => {
      const lower = line.toLowerCase().trim();
      
      // Ümumi qiymət
      if (lower.match(/ümumi səviyyə|ümumi qiymət|kurs səviyyəsi/)) {
        currentSection = 'summary';
        const match = line.match(/(başlanğıc|orta|irəli|tam mənimsəmiş|advanced)/i);
        if (match) analysis.overallLevel = match[1];
        if (!analysis.summary) analysis.summary = line.replace(/^[-•*#]\s*/, '');
      }
      // Mövzu analizi
      else if (line.match(/^📚|mövzu \d+:|^\[?mövzu \d+/i)) {
        if (currentTopic) analysis.detailedAnalysis.push(currentTopic);
        
        const titleMatch = line.match(/[:]\s*(.+)/);
        currentTopic = {
          title: titleMatch ? titleMatch[1].replace(/[📚🎯]/g, '').trim() : line.replace(/[📚\-*\[\]]/g, '').trim(),
          level: 'Başlanğıc',
          quizAnalysis: [],
          codeAnalysis: [],
          suggestions: [],
          weakPoints: []
        };
        currentSection = 'topic';
      }
      // Mövzu səviyyəsi
      else if (lower.match(/səviyyə.*:/)) {
        const levelMatch = line.match(/(başlanğıc|orta|tam mənimsəmiş|irəli)/i);
        if (levelMatch && currentTopic) {
          currentTopic.level = levelMatch[1];
        }
      }
      // Güclü tərəflər
      else if (lower.match(/güclü|strength|üstün|yaxşı/)) {
        currentSection = 'strong';
      }
      // Zəif tərəflər
      else if (lower.match(/zəif|weak|inkişaf|problem|diqqət|səhv/)) {
        currentSection = 'weak';
      }
      // Xəta patternləri
      else if (lower.match(/xəta|error|pattern/)) {
        currentSection = 'errors';
      }
      // Tövsiyələr
      else if (lower.match(/tövsiyə|recommendation|məsləhət|nə etməli/)) {
        currentSection = 'rec';
      }
      // Növbəti addımlar
      else if (lower.match(/növbəti|next|addım|plan|davam/)) {
        currentSection = 'next';
        if (line.length > 10) analysis.nextSteps += line + ' ';
      }
      // Məzmun
      else if (line.match(/^[-•*\d]\.?\s/) || line.match(/^[📝💻🐞⚠️]\s/)) {
        const content = line.replace(/^[-•*\d📝💻🐞⚠️]\.?\s*/, '').trim();
        if (!content) return;
        
        switch(currentSection) {
          case 'topic':
            if (currentTopic) {
              if (lower.includes('quiz') || lower.includes('sual') || lower.includes('cavab')) {
                currentTopic.quizAnalysis.push(content);
              } else if (lower.includes('kod') || lower.includes('xəta')) {
                currentTopic.codeAnalysis.push(content);
              } else if (lower.includes('səhv') || lower.includes('problem')) {
                currentTopic.weakPoints.push(content);
              } else {
                currentTopic.suggestions.push(content);
              }
            }
            break;
          case 'strong':
            analysis.strongTopics.push(content);
            break;
          case 'weak':
            analysis.weakTopics.push(content);
            break;
          case 'errors':
            analysis.errorPatterns.push(content);
            break;
          case 'rec':
            analysis.recommendations.push(content);
            break;
          case 'next':
            analysis.nextSteps += content + ' ';
            break;
          default:
            if (!analysis.summary) analysis.summary = content;
        }
      }
    });

    if (currentTopic) analysis.detailedAnalysis.push(currentTopic);
    if (!analysis.summary) analysis.summary = `Kursun ${progress.percentComplete}%-si tamamlanıb. Ümumi səviyyə: ${analysis.overallLevel || 'Qiymətləndirilir'}`;
    if (!analysis.nextSteps) analysis.nextSteps = 'Zəif mövzuları təkrarlayın və praktik edin';

    return analysis;
  };

  const saveAnalysis = async (parsed, progress) => {
    try {
      const analysisRef = doc(db, 'users', user.uid, 'aiAnalysis', courseId);
      await setDoc(analysisRef, {
        ...parsed,
        tokenInfo,
        progressStats: progress,
        generatedAt: serverTimestamp(),
        stats: {
          totalQuiz: sessionData.quizAttempts.length,
          totalCode: sessionData.codeAttempts.length
        }
      }, { merge: true });
    } catch (err) {
      console.error('Analiz saxlama xətası:', err);
    }
  };

  // ============================================
  // RENDER FUNKSİYALARI
  // ============================================
  const renderProgressBar = () => {
    const progress = aiAnalysis.progressStats || calculateProgress();
    
    return (
      <div className="progress-section">
        <div className="progress-header">
          <div className="progress-title">
            <GraduationCap size={24} />
            <div>
              <h3>Kurs İrəliləyişi</h3>
              <p className="progress-subtitle">
                {progress.completedTopics} mövzu tamamlandı, {progress.totalTopics - progress.completedTopics} qaldı
              </p>
            </div>
          </div>
          <span className="progress-percent">{progress.percentComplete}%</span>
        </div>
        
        <div className="progress-track">
          <div 
            className="progress-fill-main" 
            style={{ width: `${progress.percentComplete}%` }}
          />
        </div>
        
        <div className="progress-stats">
          <div className="progress-stat">
            <CheckSquare size={16} />
            <span>{sessionData.quizAttempts.length} Quiz</span>
          </div>
          <div className="progress-stat">
            <Terminal size={16} />
            <span>{sessionData.codeAttempts.length} Kod</span>
          </div>
          <div className="progress-stat">
            <Clock size={16} />
            <span>Son yeniləmə: {aiAnalysis.lastUpdated ? new Date(aiAnalysis.lastUpdated).toLocaleDateString('az-AZ') : '-'}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderTopicAnalysis = () => {
    if (!aiAnalysis.detailedAnalysis || aiAnalysis.detailedAnalysis.length === 0) return null;
    
    return (
      <div className="topic-analysis-section">
        <h3 className="section-main-title">
          <LayoutList size={24} />
          Hər Mövzu Üzrə Təhlil
        </h3>
        
        <div className="topics-grid">
          {aiAnalysis.detailedAnalysis.map((topic, idx) => (
            <div key={idx} className={`topic-card level-${topic.level?.toLowerCase().replace(/\s/g, '-')}`}>
              <div className="topic-card-header">
                <div className="topic-number">#{idx + 1}</div>
                <div className="topic-info">
                  <h4>{topic.title}</h4>
                  <span className={`level-tag ${topic.level?.toLowerCase().replace(/\s/g, '-')}`}>
                    {topic.level || 'Qiymətləndirilməyib'}
                  </span>
                </div>
              </div>
              
              {topic.weakPoints?.length > 0 && (
                <div className="topic-weaknesses">
                  <h5><AlertTriangle size={14} /> Diqqət Yetirilməli</h5>
                  <ul>
                    {topic.weakPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {topic.suggestions?.length > 0 && (
                <div className="topic-suggestions">
                  <h5><Lightbulb size={14} /> Tövsiyə</h5>
                  <ul>
                    {topic.suggestions.map((sugg, i) => (
                      <li key={i}>{sugg}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {(topic.quizAnalysis?.length > 0 || topic.codeAnalysis?.length > 0) && (
                <div className="topic-details-toggle">
                  <button onClick={() => setSelectedDetail(selectedDetail === `analysis-${idx}` ? null : `analysis-${idx}`)}>
                    {selectedDetail === `analysis-${idx}` ? 'Gizlət' : 'Detalları Göstər'}
                    {selectedDetail === `analysis-${idx}` ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              )}
              
              {selectedDetail === `analysis-${idx}` && (
                <div className="topic-detailed-content">
                  {topic.quizAnalysis?.length > 0 && (
                    <div className="detail-subsection">
                      <h6>📝 Quiz Təhlili</h6>
                      <ul>{topic.quizAnalysis.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    </div>
                  )}
                  {topic.codeAnalysis?.length > 0 && (
                    <div className="detail-subsection">
                      <h6>💻 Kod Təhlili</h6>
                      <ul>{topic.codeAnalysis.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderQuizDetails = () => {
    const byTopic = {};
    sessionData.quizAttempts.forEach(q => {
      if (!byTopic[q.topicId]) {
        byTopic[q.topicId] = {
          title: topics[q.topicId - 1]?.title || `Mövzu ${q.topicId}`,
          attempts: []
        };
      }
      byTopic[q.topicId].attempts.push(q);
    });

    return Object.entries(byTopic).map(([topicId, data]) => (
      <div key={topicId} className="detail-card">
        <div 
          className="detail-header" 
          onClick={() => setSelectedDetail(selectedDetail === `quiz-${topicId}` ? null : `quiz-${topicId}`)}
        >
          <div className="detail-title">
            <div className="detail-icon quiz">
              <FileQuestion size={20} />
            </div>
            <div className="detail-text">
              <span className="detail-name">{data.title}</span>
              <span className="detail-meta">{data.attempts.length} sual cavablandırılıb</span>
            </div>
          </div>
          {selectedDetail === `quiz-${topicId}` ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {selectedDetail === `quiz-${topicId}` && (
          <div className="detail-content">
            {data.attempts.map((q, idx) => (
              <div key={idx} className={`attempt-item ${q.isCorrect ? 'success' : 'error'}`}>
                <div className="attempt-header">
                  <span className="attempt-num">Sual {q.questionIndex + 1}</span>
                  {q.isCorrect ? (
                    <span className="status-badge success">Düzgün</span>
                  ) : (
                    <span className="status-badge error">Səhv</span>
                  )}
                </div>
                
                <p className="question-text">{q.question}</p>
                
                <div className="answer-comparison">
                  <div className={`answer-box ${q.isCorrect ? 'correct' : 'wrong'}`}>
                    <label>Sizin Cavabınız</label>
                    <span>{q.userAnswer || 'Cavab verilməyib'}</span>
                  </div>
                  {!q.isCorrect && (
                    <div className="answer-box correct">
                      <label>Düzgün Cavab</label>
                      <span>{q.options?.[q.correctAnswer] || 'Bilinmir'}</span>
                    </div>
                  )}
                </div>
                
                {!q.isCorrect && (
                  <div className="error-explanation">
                    <AlertCircle size={16} />
                    <p>Bu sualda səhv etdiniz. Konsepti daha yaxşı mənimsəmək üçün mövzunu təkrarlayın.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  const renderCodeDetails = () => {
    const byTopic = {};
    sessionData.codeAttempts.forEach(c => {
      if (!byTopic[c.topicId]) {
        byTopic[c.topicId] = {
          title: topics[c.topicId - 1]?.title || `Mövzu ${c.topicId}`,
          attempts: []
        };
      }
      byTopic[c.topicId].attempts.push(c);
    });

    return Object.entries(byTopic).map(([topicId, data]) => (
      <div key={topicId} className="detail-card">
        <div 
          className="detail-header" 
          onClick={() => setSelectedDetail(selectedDetail === `code-${topicId}` ? null : `code-${topicId}`)}
        >
          <div className="detail-title">
            <div className="detail-icon code">
              <Terminal size={20} />
            </div>
            <div className="detail-text">
              <span className="detail-name">{data.title}</span>
              <span className="detail-meta">{data.attempts.length} kod cəhdi</span>
            </div>
          </div>
          {selectedDetail === `code-${topicId}` ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {selectedDetail === `code-${topicId}` && (
          <div className="detail-content">
            {data.attempts.map((c, idx) => (
              <div key={idx} className={`attempt-item ${c.isSuccess ? 'success' : 'error'}`}>
                <div className="attempt-header">
                  <span className="attempt-num">Cəhd {idx + 1}</span>
                  <span className={`status-badge ${c.isSuccess ? 'success' : 'error'}`}>
                    {c.isSuccess ? 'Uğurlu' : c.errorCategory || 'Xəta'}
                  </span>
                </div>
                
                <div className="code-preview">
                  <div className="code-header-small">
                    <Code2 size={14} />
                    <span>Yazdığınız Kod</span>
                  </div>
                  <pre className="code-snippet"><code>{c.code?.substring(0, 300) || 'Kod yoxdur'}</code></pre>
                </div>
                
                {c.error && (
                  <div className="error-details">
                    <div className="error-header-small">
                      <Bug size={14} />
                      <span>Xəta {c.errorLine ? `(Sətir ${c.errorLine})` : ''}</span>
                    </div>
                    <div className="error-message-box">
                      <p>{c.error?.substring(0, 250)}</p>
                    </div>
                    <div className="error-help">
                      <Lightbulb size={14} />
                      <span>Bu xətanı düzəltmək üçün sətrdəki yazılışı yoxlayın və ya mövzunun izahatına baxın.</span>
                    </div>
                  </div>
                )}
                
                {c.output && (
                  <div className="output-preview">
                    <label>Nəticə:</label>
                    <pre>{c.output?.substring(0, 200)}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  if (!user) {
    return (
      <div className="analysis-guest">
        <Brain size={64} />
        <h2>AI Mentor</h2>
        <p>Təhlil üçün daxil olun</p>
      </div>
    );
  }

  return (
    <div className="ai-analysis">
      {/* Header */}
      <header className="ai-header">
        <div className="header-brand">
          <div className="brand-icon">
            <Brain size={32} />
          </div>
          <div className="brand-text">
            <h1>🤖 AI Mentor</h1>
            <p>Fərdi Təlim Planı və Təhlil</p>
          </div>
        </div>
        
        <div className="header-actions">
          {aiAnalysis.hasAnalysis && (
            <button 
              className="reset-btn"
              onClick={() => setShowResetConfirm(true)}
              title="Analizi sıfırla"
            >
              <RotateCcw size={18} />
              <span>Sıfırla</span>
            </button>
          )}
          
          <button 
            className="analyze-btn"
            onClick={generateAnalysis}
            disabled={aiAnalysis.loading}
          >
            {aiAnalysis.loading ? (
              <>
                <Loader2 className="spin" size={20} />
                <span>Təhlil edilir...</span>
              </>
            ) : (
              <>
                <Zap size={20} />
                <span>{aiAnalysis.hasAnalysis ? 'Yenilə' : 'Analiz Et'}</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="modal-overlay" onClick={() => setShowResetConfirm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-icon warning">
              <AlertTriangle size={32} />
            </div>
            <h3>Analizi Sıfırlamaq</h3>
            <p>Bütün AI təhlili və statistikalar silinəcək. Bu əməliyyat geri qaytarıla bilməz.</p>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowResetConfirm(false)}>
                Ləğv Et
              </button>
              <button className="btn-danger" onClick={resetAnalysis}>
                <Trash2 size={16} />
                Sıfırla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Token Info */}
      {aiAnalysis.hasAnalysis && (
        <div className="info-bar">
          <div className="token-info">
            <span>📊 Tokens: {tokenInfo.input} → {tokenInfo.output}</span>
          </div>
          {aiAnalysis.progressStats && (
            <div className="progress-context">
              <span>📚 {aiAnalysis.progressStats.completedTopics}/{aiAnalysis.progressStats.totalTopics} mövzu təhlil edildi</span>
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {aiAnalysis.error && (
        <div className="error-banner">
          <AlertCircle size={24} />
          <p>{aiAnalysis.error}</p>
          <button onClick={() => setAiAnalysis(p => ({...p, error: null}))}>Bağla</button>
        </div>
      )}

      {/* Main Content */}
      <main className="ai-content">
        {!aiAnalysis.hasAnalysis && !aiAnalysis.loading ? (
          <div className="empty-state">
            <div className="empty-illustration">
              <BookOpen size={64} />
              <div className="floating-icons">
                <FileQuestion size={32} />
                <Terminal size={32} />
              </div>
            </div>
            <h2>Hələ təhlil yoxdur</h2>
            <p className="empty-desc">
              Quiz və kod tapşırıqlarını tamamlayın. AI mentor hər mövzu üçün 
              ayrı-ayrılıqda və ümumi kurs üzrə detallı təhlil aparacaq.
            </p>
            {renderProgressBar()}
          </div>
        ) : aiAnalysis.loading ? (
          <div className="loading-state">
            <div className="loading-animation">
              <Brain size={48} className="pulse" />
              <div className="loading-text">
                <h2>AI təhlil aparır...</h2>
                <p>Hər mövzu ayrı-ayrılıqda təhlil edilir</p>
              </div>
            </div>
            <div className="loading-steps">
              <div className="step active">Quiz nəticələri yoxlanılır</div>
              <div className="step active">Kod cəhdləri təhlil edilir</div>
              <div className="step">Səviyyələr müəyyən edilir</div>
              <div className="step">Tövsiyələr hazırlanır</div>
            </div>
          </div>
        ) : (
          <div className="analysis-result">
            {/* Progress Overview */}
            {renderProgressBar()}
            
            {/* Summary Card */}
            <div className="summary-card">
              <div className="summary-header">
                <div className="summary-icon">
                  <Award size={28} />
                </div>
                <div className="summary-title">
                  <h2>Ümumi Qiymətləndirmə</h2>
                  {aiAnalysis.overallLevel && (
                    <span className={`level-badge-large ${aiAnalysis.overallLevel.toLowerCase().replace(/\s/g, '-')}`}>
                      {aiAnalysis.overallLevel} Səviyyə
                    </span>
                  )}
                </div>
              </div>
              <p className="summary-text">{aiAnalysis.summary}</p>
            </div>

            {/* Topic-based Analysis */}
            {renderTopicAnalysis()}

            {/* Weak Topics Alert */}
            {aiAnalysis.weakTopics?.length > 0 && (
              <div className="alert-section weak-topics">
                <div className="alert-header">
                  <AlertTriangle size={24} />
                  <h3>Diqqət Yetirilməli Mövzular</h3>
                </div>
                <p className="alert-desc">
                  Bu mövzularda çətinlik çəkirsiniz. Tövsiyə edilir ki, hər birini təkrarlayın:
                </p>
                <ul className="weak-list">
                  {aiAnalysis.weakTopics.map((topic, idx) => (
                    <li key={idx}>
                      <XCircle size={16} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Strong Topics */}
            {aiAnalysis.strongTopics?.length > 0 && (
              <div className="alert-section strong-topics">
                <div className="alert-header">
                  <CheckCircle2 size={24} />
                  <h3>Güclü Tərəfləriniz</h3>
                </div>
                <ul className="strong-list">
                  {aiAnalysis.strongTopics.map((topic, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Error Patterns */}
            {aiAnalysis.errorPatterns?.length > 0 && (
              <div className="section-card error-patterns">
                <h3 className="section-title">
                  <Bug size={20} />
                  Tez-tez Təkrarlanan Xətalar
                </h3>
                <div className="pattern-list">
                  {aiAnalysis.errorPatterns.map((pattern, idx) => (
                    <div key={idx} className="pattern-item">
                      <span className="pattern-num">{idx + 1}</span>
                      <p>{pattern}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {aiAnalysis.recommendations?.length > 0 && (
              <div className="recommendations-section">
                <h3 className="section-main-title">
                  <Lightbulb size={24} />
                  Fərdi Təlim Planı
                </h3>
                <div className="recommendation-grid">
                  {aiAnalysis.recommendations.map((rec, idx) => (
                    <div key={idx} className="recommendation-card">
                      <div className="rec-number">{idx + 1}</div>
                      <div className="rec-content">
                        <p>{rec}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Steps */}
            {aiAnalysis.nextSteps && (
              <div className="next-steps-card">
                <div className="next-steps-header">
                  <ArrowRight size={24} />
                  <h3>Növbəti Addımlar</h3>
                </div>
                <p className="next-steps-text">{aiAnalysis.nextSteps}</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Expandable Details */}
      {sessionData.totalAttempts > 0 && (
        <section className="details-section">
          <h2 className="details-title">Ətraflı Nəticələr</h2>
          
          <div className="details-tabs">
            <button 
              className={`tab-btn ${activeSection === 'quiz' ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === 'quiz' ? '' : 'quiz')}
            >
              <FileQuestion size={18} />
              <span>Quiz Tarixçəsi</span>
              <span className="tab-count">{sessionData.quizAttempts.length}</span>
            </button>
            <button 
              className={`tab-btn ${activeSection === 'code' ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === 'code' ? '' : 'code')}
            >
              <Terminal size={18} />
              <span>Kod Tarixçəsi</span>
              <span className="tab-count">{sessionData.codeAttempts.length}</span>
            </button>
          </div>

          <div className="details-content">
            {activeSection === 'quiz' && renderQuizDetails()}
            {activeSection === 'code' && renderCodeDetails()}
          </div>
        </section>
      )}

      {/* CSS */}
      <style>{`
        .ai-analysis {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #f1f5f9;
          min-height: 100vh;
          line-height: 1.6;
        }

        /* ===== HEADER ===== */
        .ai-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          flex-wrap: wrap;
          gap: 16px;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .brand-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 6px -1px rgba(102, 126, 234, 0.3);
        }

        .brand-text h1 {
          margin: 0;
          font-size: 26px;
          color: #1e293b;
          font-weight: 700;
        }

        .brand-text p {
          margin: 4px 0 0;
          font-size: 15px;
          color: #64748b;
          font-weight: 500;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .analyze-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(102, 126, 234, 0.2);
        }

        .analyze-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(102, 126, 234, 0.3);
        }

        .analyze-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .reset-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 20px;
          background: white;
          color: #64748b;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .reset-btn:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: #fef2f2;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: white;
          padding: 32px;
          border-radius: 20px;
          max-width: 420px;
          width: 100%;
          text-align: center;
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        }

        .modal-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .modal-icon.warning {
          background: #fef3c7;
          color: #d97706;
        }

        .modal-content h3 {
          margin: 0 0 12px;
          font-size: 22px;
          color: #1e293b;
        }

        .modal-content p {
          margin: 0 0 24px;
          color: #64748b;
          font-size: 15px;
          line-height: 1.5;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
        }

        .btn-secondary {
          flex: 1;
          padding: 12px 20px;
          background: #f1f5f9;
          color: #475569;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #e2e8f0;
        }

        .btn-danger {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-danger:hover {
          background: #dc2626;
        }

        /* ===== INFO BAR ===== */
        .info-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 12px 20px;
          background: #e0e7ff;
          border-radius: 12px;
          font-size: 13px;
          color: #4338ca;
          font-weight: 500;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ===== ERROR BANNER ===== */
        .error-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #fef2f2;
          color: #dc2626;
          border-radius: 12px;
          margin-bottom: 24px;
          border: 1px solid #fecaca;
        }

        .error-banner button {
          margin-left: auto;
          padding: 8px 16px;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }

        /* ===== EMPTY STATE ===== */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .empty-illustration {
          position: relative;
          display: inline-flex;
          margin-bottom: 32px;
          color: #667eea;
        }

        .floating-icons {
          position: absolute;
          top: -10px;
          right: -30px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .floating-icons svg {
          background: white;
          padding: 8px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          color: #764ba2;
        }

        .empty-state h2 {
          margin: 0 0 16px;
          font-size: 26px;
          color: #1e293b;
          font-weight: 700;
        }

        .empty-desc {
          margin: 0 auto 32px;
          color: #64748b;
          font-size: 17px;
          max-width: 500px;
          line-height: 1.6;
        }

        /* ===== LOADING STATE ===== */
        .loading-state {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .loading-animation {
          margin-bottom: 32px;
        }

        .pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          color: #667eea;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .6; transform: scale(1.05); }
        }

        .loading-text h2 {
          margin: 16px 0 8px;
          font-size: 24px;
          color: #1e293b;
        }

        .loading-text p {
          margin: 0;
          color: #64748b;
          font-size: 16px;
        }

        .loading-steps {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 400px;
          margin: 0 auto;
        }

        .step {
          padding: 16px;
          background: #f1f5f9;
          border-radius: 10px;
          color: #64748b;
          font-size: 15px;
          position: relative;
          padding-left: 48px;
        }

        .step::before {
          content: '○';
          position: absolute;
          left: 16px;
          font-size: 20px;
        }

        .step.active {
          background: #e0e7ff;
          color: #4338ca;
          font-weight: 500;
        }

        .step.active::before {
          content: '◉';
        }

        /* ===== PROGRESS SECTION ===== */
        .progress-section {
          background: white;
          padding: 28px;
          border-radius: 16px;
          margin-bottom: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .progress-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .progress-title svg {
          color: #667eea;
        }

        .progress-title h3 {
          margin: 0;
          font-size: 20px;
          color: #1e293b;
        }

        .progress-subtitle {
          margin: 4px 0 0;
          font-size: 14px;
          color: #64748b;
        }

        .progress-percent {
          font-size: 32px;
          font-weight: 700;
          color: #667eea;
        }

        .progress-track {
          height: 12px;
          background: #e2e8f0;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .progress-fill-main {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 6px;
          transition: width 0.6s ease;
        }

        .progress-stats {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .progress-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #64748b;
        }

        .progress-stat svg {
          color: #94a3b8;
        }

        /* ===== SUMMARY CARD ===== */
        .summary-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 32px;
          border-radius: 20px;
          margin-bottom: 24px;
          box-shadow: 0 10px 25px -5px rgba(102, 126, 234, 0.4);
        }

        .summary-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .summary-icon {
          width: 56px;
          height: 56px;
          background: rgba(255,255,255,0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
        }

        .summary-title {
          flex: 1;
        }

        .summary-title h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
        }

        .level-badge-large {
          display: inline-block;
          margin-top: 8px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.2);
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
        }

        .level-badge-large.başlanğıc, .level-badge-large.beginner {
          background: rgba(254, 202, 202, 0.9);
          color: #991b1b;
        }

        .level-badge-large.orta, .level-badge-large.intermediate {
          background: rgba(254, 243, 199, 0.9);
          color: #92400e;
        }

        .level-badge-large.tam-mənimsəmiş, .level-badge-large.advanced {
          background: rgba(187, 247, 208, 0.9);
          color: #166534;
        }

        .summary-text {
          margin: 0;
          font-size: 17px;
          line-height: 1.7;
          opacity: 0.95;
        }

        /* ===== SECTION TITLES ===== */
        .section-main-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 32px 0 20px;
          font-size: 22px;
          color: #1e293b;
          font-weight: 700;
        }

        .section-main-title svg {
          color: #667eea;
        }

        /* ===== TOPIC ANALYSIS ===== */
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
        }

        @media (max-width: 768px) {
          .topics-grid {
            grid-template-columns: 1fr;
          }
        }

        .topic-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border-left: 4px solid #cbd5e1;
        }

        .topic-card.level-başlanğıc, .topic-card.level-beginner {
          border-left-color: #ef4444;
        }

        .topic-card.level-orta, .topic-card.level-intermediate {
          border-left-color: #f59e0b;
        }

        .topic-card.level-tam-mənimsəmiş, .topic-card.level-advanced {
          border-left-color: #10b981;
        }

        .topic-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .topic-number {
          width: 40px;
          height: 40px;
          background: #f1f5f9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #64748b;
          font-size: 14px;
        }

        .topic-info h4 {
          margin: 0 0 6px;
          font-size: 17px;
          color: #1e293b;
          font-weight: 600;
        }

        .level-tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .level-tag.başlanğıc, .level-tag.beginner {
          background: #fef2f2;
          color: #dc2626;
        }

        .level-tag.orta, .level-tag.intermediate {
          background: #fffbeb;
          color: #d97706;
        }

        .level-tag.tam-mənimsəmiş, .level-tag.advanced {
          background: #f0fdf4;
          color: #16a34a;
        }

        .topic-weaknesses, .topic-suggestions {
          margin-top: 16px;
          padding: 16px;
          border-radius: 12px;
        }

        .topic-weaknesses {
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .topic-weaknesses h5 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 12px;
          font-size: 14px;
          color: #dc2626;
          font-weight: 600;
        }

        .topic-suggestions {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .topic-suggestions h5 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 12px;
          font-size: 14px;
          color: #16a34a;
          font-weight: 600;
        }

        .topic-weaknesses ul, .topic-suggestions ul {
          margin: 0;
          padding-left: 20px;
        }

        .topic-weaknesses li, .topic-suggestions li {
          margin-bottom: 8px;
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
        }

        .topic-details-toggle {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
        }

        .topic-details-toggle button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .topic-details-toggle button:hover {
          background: #f1f5f9;
          color: #475569;
        }

        .topic-detailed-content {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
        }

        .detail-subsection {
          margin-bottom: 16px;
        }

        .detail-subsection h6 {
          margin: 0 0 10px;
          font-size: 13px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-subsection ul {
          margin: 0;
          padding-left: 18px;
        }

        .detail-subsection li {
          margin-bottom: 6px;
          font-size: 14px;
          color: #475569;
        }

        /* ===== ALERT SECTIONS ===== */
        .alert-section {
          padding: 24px;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .alert-section.weak-topics {
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .alert-section.strong-topics {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .alert-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .alert-section.weak-topics .alert-header {
          color: #dc2626;
        }

        .alert-section.strong-topics .alert-header {
          color: #16a34a;
        }

        .alert-header h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
        }

        .alert-desc {
          margin: 0 0 16px;
          color: #7f1d1d;
          font-size: 15px;
          line-height: 1.5;
        }

        .weak-list, .strong-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .weak-list li, .strong-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-size: 15px;
          color: #475569;
        }

        .weak-list li:last-child, .strong-list li:last-child {
          border-bottom: none;
        }

        .weak-list svg {
          color: #ef4444;
          flex-shrink: 0;
        }

        .strong-list svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        /* ===== ERROR PATTERNS ===== */
        .section-card {
          background: white;
          padding: 28px;
          border-radius: 16px;
          margin-bottom: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 20px;
          font-size: 20px;
          color: #1e293b;
          font-weight: 700;
        }

        .section-title svg {
          color: #dc2626;
        }

        .pattern-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pattern-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: #fef2f2;
          border-radius: 12px;
          border-left: 4px solid #dc2626;
        }

        .pattern-num {
          width: 32px;
          height: 32px;
          background: #dc2626;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .pattern-item p {
          margin: 0;
          font-size: 15px;
          color: #7f1d1d;
          line-height: 1.6;
        }

        /* ===== RECOMMENDATIONS ===== */
        .recommendations-section {
          margin-bottom: 24px;
        }

        .recommendation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .recommendation-card {
          display: flex;
          gap: 16px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border-left: 4px solid #f59e0b;
        }

        .rec-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .rec-content p {
          margin: 0;
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
        }

        /* ===== NEXT STEPS ===== */
        .next-steps-card {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          padding: 32px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .next-steps-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .next-steps-header h3 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
        }

        .next-steps-text {
          margin: 0;
          font-size: 17px;
          line-height: 1.7;
          opacity: 0.9;
        }

        /* ===== DETAILS SECTION ===== */
        .details-section {
          margin-top: 40px;
        }

        .details-title {
          font-size: 24px;
          color: #1e293b;
          margin: 0 0 24px;
          font-weight: 700;
        }

        .details-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 24px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tab-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .tab-btn.active {
          background: #667eea;
          border-color: #667eea;
          color: white;
        }

        .tab-count {
          margin-left: 8px;
          padding: 4px 10px;
          background: rgba(0,0,0,0.1);
          border-radius: 20px;
          font-size: 13px;
        }

        .tab-btn.active .tab-count {
          background: rgba(255,255,255,0.2);
        }

        .details-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ===== DETAIL CARDS ===== */
        .detail-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .detail-header:hover {
          background: #f8fafc;
        }

        .detail-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .detail-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .detail-icon.quiz {
          background: #dbeafe;
          color: #2563eb;
        }

        .detail-icon.code {
          background: #dcfce7;
          color: #16a34a;
        }

        .detail-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detail-name {
          font-size: 17px;
          font-weight: 600;
          color: #1e293b;
        }

        .detail-meta {
          font-size: 14px;
          color: #64748b;
        }

        .detail-content {
          padding: 0 24px 24px;
        }

        /* ===== ATTEMPT ITEMS ===== */
        .attempt-item {
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .attempt-item.success {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .attempt-item.error {
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .attempt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .attempt-num {
          font-size: 15px;
          font-weight: 600;
          color: #475569;
        }

        .status-badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.success {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.error {
          background: #fee2e2;
          color: #991b1b;
        }

        .question-text {
          margin: 0 0 16px;
          font-size: 16px;
          color: #334155;
          line-height: 1.6;
          font-weight: 500;
        }

        .answer-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }

        @media (max-width: 640px) {
          .answer-comparison {
            grid-template-columns: 1fr;
          }
        }

        .answer-box {
          padding: 16px;
          border-radius: 10px;
          text-align: center;
        }

        .answer-box.wrong {
          background: #fee2e2;
          color: #991b1b;
        }

        .answer-box.correct {
          background: #dcfce7;
          color: #166534;
        }

        .answer-box label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 6px;
          opacity: 0.8;
          font-weight: 600;
        }

        .answer-box span {
          display: block;
          font-size: 16px;
          font-weight: 600;
        }

        .error-explanation {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: #fef2f2;
          border-radius: 8px;
          color: #dc2626;
          font-size: 14px;
        }

        /* ===== CODE & ERROR DISPLAY ===== */
        .code-preview, .error-details {
          margin-top: 16px;
        }

        .code-header-small, .error-header-small {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 8px 8px 0 0;
        }

        .code-header-small {
          background: #1e293b;
          color: #94a3b8;
        }

        .error-header-small {
          background: #991b1b;
          color: #fecaca;
        }

        .code-snippet {
          margin: 0;
          padding: 16px;
          background: #0f172a;
          border-radius: 0 0 8px 8px;
          overflow-x: auto;
          font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
          font-size: 13px;
          color: #e2e8f0;
          line-height: 1.6;
        }

        .error-message-box {
          margin: 0;
          padding: 16px;
          background: #fef2f2;
          border-radius: 0 0 8px 8px;
          color: #7f1d1d;
          font-size: 13px;
          line-height: 1.6;
          font-family: 'Fira Code', monospace;
        }

        .error-help {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 12px;
          padding: 12px;
          background: #fffbeb;
          border-radius: 8px;
          color: #92400e;
          font-size: 14px;
        }

        .output-preview {
          margin-top: 16px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .output-preview label {
          display: block;
          color: #64748b;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .output-preview pre {
          margin: 0;
          color: #475569;
          font-size: 13px;
          white-space: pre-wrap;
          font-family: 'Fira Code', monospace;
        }

        /* ===== GUEST STATE ===== */
        .analysis-guest {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          color: #64748b;
          gap: 20px;
          text-align: center;
        }

        .analysis-guest h2 {
          margin: 0;
          color: #1e293b;
          font-size: 28px;
        }

        .analysis-guest p {
          margin: 0;
          font-size: 16px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .ai-analysis {
            padding: 16px;
          }

          .ai-header {
            flex-direction: column;
            text-align: center;
          }

          .header-brand {
            flex-direction: column;
          }

          .brand-text h1 {
            font-size: 22px;
          }

          .summary-card {
            padding: 24px;
          }

          .topics-grid {
            grid-template-columns: 1fr;
          }

          .recommendation-grid {
            grid-template-columns: 1fr;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AIAnalysis;