import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { db } from '../firebase';
import { 
  doc, 
  getDoc, 
  setDoc, 
  deleteDoc,
  serverTimestamp, 
  collection,
  query,
  where,
  getDocs,
  addDoc,
  orderBy,
  limit
} from 'firebase/firestore';
import { 
  Brain, AlertCircle, CheckCircle2, XCircle, Loader2, 
  RefreshCw, Target, Zap, ChevronDown, ChevronUp,
  Terminal, Bug, BookOpen, FileQuestion, Code2, 
  TrendingUp, Award, Lightbulb, ArrowRight, BarChart3,
  Trash2, RotateCcw, GraduationCap, Clock, AlertTriangle,
  CheckSquare, LayoutList, PlayCircle, Lock, Unlock, 
  Star, TrendingDown, BrainCircuit, BookMarked, HelpCircle, 
  FileCode, Sparkles, BarChart2, Calendar, Clock3, Activity, 
  Layers, ArrowUpRight, PieChart, Hash, Cpu, Save, X, FileText
} from 'lucide-react';

// ============================================
// API KEY - BIRBAŞA KODDA
// ============================================
const apiKey = process.env.REACT_APP_GROQ_API_KEY_Analiz;

// ============================================
// KONFiQURASIYA - LIMITLER
// ============================================
const CONFIG = {
  MAX_INPUT_TOKENS: 3000,
  MAX_OUTPUT_TOKENS: 1500,
  MIN_ATTEMPTS_FOR_ANALYSIS: 2,
  CONFIDENCE_THRESHOLD: 0.7,
  RETRY_ATTEMPTS: 3,
  API_ENDPOINT: 'https://api.groq.com/openai/v1/chat/completions'
};

// ============================================
// SƏViYYƏLƏR
// ============================================
const LEVELS = {
  BEGINNER: { 
    label: 'Başlanğıc', 
    color: '#ef4444', 
    bg: '#fef2f2',
    description: 'Əsas konseptləri öyrənmə mərhələsində',
    icon: '🌱',
    minScore: 0,
    maxScore: 39
  },
  ELEMENTARY: { 
    label: 'Elementar', 
    color: '#f97316', 
    bg: '#fff7ed',
    description: 'Əsas anlayışları qavrayır amma praktikada çətinlik çəkir',
    icon: '🌿',
    minScore: 40,
    maxScore: 54
  },
  INTERMEDIATE: { 
    label: 'Orta', 
    color: '#f59e0b', 
    bg: '#fffbeb',
    description: 'Mövzuları anlayır, orta səviyyədə tətbiq edir',
    icon: '🌳',
    minScore: 55,
    maxScore: 69
  },
  UPPER_INTERMEDIATE: { 
    label: 'Yuxarı Orta', 
    color: '#84cc16', 
    bg: '#f7fee7',
    description: 'Yaxşı mənimsəmiş, mürəkkəb tapşırıqlarda çətinlik çəkir',
    icon: '🌲',
    minScore: 70,
    maxScore: 79
  },
  ADVANCED: { 
    label: 'İrəli', 
    color: '#10b981', 
    bg: '#f0fdf4',
    description: 'Mövzuları tam mənimsəmiş, mürəkkəb problemləri həll edir',
    icon: '🚀',
    minScore: 80,
    maxScore: 89
  },
  EXPERT: { 
    label: 'Ekspert', 
    color: '#06b6d4', 
    bg: '#ecfeff',
    description: 'Konseptləri dərindən bilir və innovativ həllər yaradır',
    icon: '👑',
    minScore: 90,
    maxScore: 100
  }
};

const getLevelByScore = (score) => {
  if (score >= 90) return LEVELS.EXPERT;
  if (score >= 80) return LEVELS.ADVANCED;
  if (score >= 70) return LEVELS.UPPER_INTERMEDIATE;
  if (score >= 55) return LEVELS.INTERMEDIATE;
  if (score >= 40) return LEVELS.ELEMENTARY;
  return LEVELS.BEGINNER;
};

// ============================================
// ERROR PATTERN DATABASE - Python üçün
// ============================================
const ERROR_PATTERNS = {
  SyntaxError: {
    patterns: ['invalid syntax', 'unexpected EOF', 'EOL while scanning', 'unexpected character', 'invalid character', 'SyntaxError'],
    causes: [
      'Dırnaq işarələrini bağlamaq unudulub',
      'Mötərizələr balanslı deyil',
      'İndentasiya səhvləri',
      'Sətir sonunda artıq nöqtə-vergül',
      'Kod sətri tamamlanmadan yeni sətirə keçilib'
    ],
    fix: 'Kodun strukturunu yoxlayın: bütün açan mötərizələr bağlanıb? Dırnaqlar cütləşib? İndentasiya düzgündür?',
    learningTip: 'Python blok strukturunu (indentation) yaxşı mənimsəyin. Hər blok 4 boşluq ilə başlamalıdır.',
    resources: ['https://docs.python.org/3/tutorial/errors.html']
  },
  
  IndentationError: {
    patterns: ['unexpected indent', 'expected an indented block', 'unindent does not match', 'inconsistent use of tabs'],
    causes: [
      'Funksiyadan sonra indentasiya unudulub',
      'Boşluq və Tab qarışığı',
      'Şərt bloklarından sonra indentasiya yoxdur',
      'Loop və ya funksiya daxilində kod yazılmayıb'
    ],
    fix: 'Bütün kod blokları eyni səviyyədə boşluqdan başlamalıdır. 4 boşluq standartdır.',
    learningTip: 'VS Code-da "Editor: Insert Spaces" ayarını aktiv edin və "Tab Size" 4 olaraq təyin edin.',
    resources: ['https://www.python.org/dev/peps/pep-0008/#indentation']
  },
  
  NameError: {
    patterns: ['name .* is not defined', 'undefined variable', 'NameError'],
    causes: [
      'Dəyişən adı səhv yazılıb (case-sensitive)',
      'Dəyişən funksiyadan əvvəl çağırılıb',
      'Lazımi modul import edilməyib',
      'Scope səhv - lokal dəyişən qlobalda istifadə edilir'
    ],
    fix: 'Dəyişən adını yoxlayın. Əvvəlcə təyin olunduğuna əmin olun. Lazımsa "import modul_adı" əlavə edin.',
    learningTip: 'Python-da dəyişənlər istifadə edilmədən əvvəl təyin olunmalıdır.',
    resources: ['https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces']
  },
  
  TypeError: {
    patterns: ['unsupported operand type', 'can only concatenate', 'takes .* arguments', 'missing .* argument', 'not callable', 'object is not subscriptable'],
    causes: [
      'Fərqli tipləri toplamaq (məs: "5" + 3)',
      'Funksiyaya səhv arqument tipi göndərmək',
      'NoneType üzərində əməliyyat',
      'List əvəzinə string göndərmək',
      'Funksiya olmayan şeyi çağırmaq'
    ],
    fix: 'Dəyişənlərin tiplərini yoxlayın: print(type(deyisen)). Uyğun tipləri əməliyyat edin və ya tip çevirmə istifadə edin.',
    learningTip: 'Python dinamik tipli dildir amma sərt tiplidir. isinstance() funksiyası ilə tip yoxlaması aparın.',
    resources: ['https://docs.python.org/3/library/functions.html#type']
  },
  
  IndexError: {
    patterns: ['list index out of range', 'string index out of range', 'tuple index out of range'],
    causes: [
      'Boş listə indeks ilə müraciət',
      'Mövcud olmayan indeks',
      'Loop-da sərhəd xətası',
      'Son elementə çatmaq üçün səhv indeks'
    ],
    fix: 'Listin uzunluğunu yoxlayın: len(list). İndeks 0-dan başlayır. Negative indekslər (-1 son element) istifadə edin.',
    learningTip: 'Python-da indeksləmə 0-dan başlayır. List boşdursa, heç bir indeks işləməz.',
    resources: ['https://docs.python.org/3/tutorial/datastructures.html']
  },
  
  KeyError: {
    patterns: ['KeyError', 'key not found'],
    causes: [
      'Lüğətdə olmayan açar ilə müraciət',
      'Səhv açar adı yazmaq (case-sensitive)',
      'Dictionary-də olmayan elementi silməyə çalışmaq'
    ],
    fix: 'dict.get("key", default) istifadə edin və ya "key" in dict ilə yoxlayın.',
    learningTip: 'Dictionary-lərdə .get() metodu KeyError atmadan default dəyər qaytara bilər.',
    resources: ['https://docs.python.org/3/library/stdtypes.html#dict.get']
  },
  
  AttributeError: {
    patterns: ['object has no attribute', 'NoneType object has no attribute', 'AttributeError'],
    causes: [
      'Olmayan metod və ya atribut çağırmaq',
      'None üzərində metod çağırmaq',
      'Modul düzgün import edilməyib',
      'String metodu listdə çağırmaq'
    ],
    fix: 'Obyektin tipini yoxlayın: type(obj). Lazımi metodlar üçün dir(obj) istifadə edin. None yoxlaması əlavə edin.',
    learningTip: 'Hər tipin öz metodları var. String metodları listdə işləmir.',
    resources: ['https://docs.python.org/3/library/functions.html#dir']
  },
  
  ValueError: {
    patterns: ['invalid literal for int', 'could not convert string', 'too many values to unpack', 'not enough values to unpack'],
    causes: [
      'Boş və ya yanlış formatlı stringi ədədə çevirmək',
      'Unpacking-də element sayı uyğunsuzluğu',
      'Səhv tarix formatı',
      'input() ilə alınan məlumatı düzgün çevirməmək'
    ],
    fix: 'Dəyərin formatını yoxlayın. Tip çevirmədən əvvəl validate edin: if value.isdigit().',
    learningTip: 'İstifadəçi daxilindən gələn məlumatları həmişə yoxlayın. try-except ValueError ilə tutun.',
    resources: ['https://docs.python.org/3/tutorial/errors.html']
  },
  
  ZeroDivisionError: {
    patterns: ['division by zero', 'float division by zero', 'integer division or modulo by zero'],
    causes: [
      'Sıfıra bölmə',
      'Boş listin ortalaması',
      'Dəyişən sıfır olub, sonra bölmə əməliyyatı'
    ],
    fix: 'Bölmədən əvvəl məxrəci yoxlayın: if b != 0:. Sıfır olduqda xüsusi handling əlavə edin.',
    learningTip: 'Həmişə bölən sıfır ola biləcəyini nəzərə alın. Statistik hesablamalarda boş dataset yoxlaması vacibdir.',
    resources: ['https://docs.python.org/3/library/exceptions.html#ZeroDivisionError']
  },
  
  ImportError: {
    patterns: ['No module named', 'cannot import name', 'ModuleNotFoundError'],
    causes: [
      'Modul install edilməyib',
      'Modul adı səhv yazılıb',
      'Dairəvi import (circular import)',
      'Virtual environment aktiv deyil',
      'Fayl adı modul adı ilə eynidir'
    ],
    fix: 'pip install modul_adı ilə quraşdırın. Modul adını yoxlayın. Virtual environment yoxlayın.',
    learningTip: 'Python ekosistemində minlərlə modul var. requirements.txt faylı ilə asılılıqları idarə edin.',
    resources: ['https://pip.pypa.io/en/stable/user_guide/']
  },
  
  FileNotFoundError: {
    patterns: ['No such file or directory', 'FileNotFoundError'],
    causes: [
      'Fayl mövcud deyil',
      'Relativ yol səhv',
      'Fayl başqa qovluqda yerləşir',
      'Fayl adında typo',
      'Case-sensitive fayl sistemi'
    ],
    fix: 'Fayl yolunu yoxlayın: os.path.exists("fayl.txt"). Tam yol istifadə edin və ya os.path.join() ilə qovluq birləşdirin.',
    learningTip: 'Fayl ilə işləyərkən həmişə yoxlama aparın. try-except FileNotFoundError ilə tutun.',
    resources: ['https://docs.python.org/3/tutorial/inputoutput.html']
  }
};

// ============================================
// YARDIMCI FUNKSIYALAR
// ============================================

// Son cəhdləri əldə et (yalnız son nəticələr)
const getLastAttempts = (attempts, topicId, type) => {
  if (!attempts || !Array.isArray(attempts)) return [];
  
  // Mövzu və tip üzrə filter et
  const filtered = attempts.filter(a => 
    a.topicId === topicId && 
    a.type === type
  );
  
  // Tarixə görə sırala (ən yenisi əvvəl)
  const sorted = filtered.sort((a, b) => 
    new Date(b.timestamp) - new Date(a.timestamp)
  );
  
  // Son 5 cəhd (son nəticələr üçün kifayətdir)
  return sorted.slice(0, 5);
};

// Xəta kateqoriyasını müəyyən et
const categorizeError = (error) => {
  if (!error) return { category: 'Unknown', type: 'unknown' };
  
  const errorLower = error.toLowerCase();
  
  for (const [category, data] of Object.entries(ERROR_PATTERNS)) {
    if (data.patterns.some(pattern => 
      new RegExp(pattern, 'i').test(errorLower)
    )) {
      let type = 'other';
      if (['SyntaxError', 'IndentationError'].includes(category)) type = 'syntax';
      else if (['TypeError', 'ValueError', 'NameError'].includes(category)) type = 'logic';
      else if (['RuntimeError', 'ZeroDivisionError', 'IndexError', 'KeyError'].includes(category)) type = 'runtime';
      
      return { category, type };
    }
  }
  
  return { category: 'Unknown', type: 'unknown' };
};

// Mastery skoru hesabla (yalnız son cəhdlər əsasında)
const calculateMasteryScore = (quizAttempts, codeAttempts) => {
  // Quiz nəticələri (40% çəki)
  const quizWeight = 0.4;
  const codeWeight = 0.6;
  
  let quizScore = 0;
  if (quizAttempts.length > 0) {
    const correct = quizAttempts.filter(a => a.isCorrect).length;
    quizScore = (correct / quizAttempts.length) * 100;
  }
  
  // Kod nəticələri (60% çəki)
  let codeScore = 0;
  if (codeAttempts.length > 0) {
    const successful = codeAttempts.filter(a => a.isSuccess).length;
    codeScore = (successful / codeAttempts.length) * 100;
  }
  
  // Əgər hər iki tip varsa, çəkili orta
  if (quizAttempts.length > 0 && codeAttempts.length > 0) {
    return Math.round((quizScore * quizWeight) + (codeScore * codeWeight));
  }
  // Yalnız quiz varsa
  else if (quizAttempts.length > 0) {
    return Math.round(quizScore);
  }
  // Yalnız kod varsa
  else if (codeAttempts.length > 0) {
    return Math.round(codeScore);
  }
  
  return 0;
};

// Mövzu analizi et
const analyzeTopic = (topicId, topicTitle, quizAttempts, codeAttempts) => {
  // Yalnız son cəhdləri al
  const lastQuiz = getLastAttempts(quizAttempts, topicId, 'quiz');
  const lastCode = getLastAttempts(codeAttempts, topicId, 'code');
  
  if (lastQuiz.length === 0 && lastCode.length === 0) {
    return null;
  }
  
  const score = calculateMasteryScore(lastQuiz, lastCode);
  const level = getLevelByScore(score);
  
  // Quiz analizi
  const quizCorrect = lastQuiz.filter(a => a.isCorrect).length;
  const quizAccuracy = lastQuiz.length > 0 ? Math.round((quizCorrect / lastQuiz.length) * 100) : 0;
  
  // Kod analizi
  const codeSuccess = lastCode.filter(a => a.isSuccess).length;
  const codeSuccessRate = lastCode.length > 0 ? Math.round((codeSuccess / lastCode.length) * 100) : 0;
  
  // Xəta analizi
  const errors = [];
  lastCode.filter(a => !a.isSuccess && a.error).forEach(a => {
    const errInfo = categorizeError(a.error);
    errors.push({
      ...errInfo,
      error: a.error,
      code: a.code,
      timestamp: a.timestamp,
      exerciseTitle: a.exerciseTitle
    });
  });
  
  // Xəta qruplaşdırması
  const errorGroups = errors.reduce((acc, err) => {
    if (!acc[err.category]) acc[err.category] = [];
    acc[err.category].push(err);
    return acc;
  }, {});
  
  const commonErrors = Object.entries(errorGroups)
    .map(([category, items]) => ({
      category,
      count: items.length,
      percentage: Math.round((items.length / (lastCode.length || 1)) * 100),
      examples: items.slice(0, 2),
      explanation: ERROR_PATTERNS[category] || null
    }))
    .sort((a, b) => b.count - a.count);
  
  // Zəif konseptlər (quizdə səhv cavablananlar)
  const wrongAnswers = lastQuiz.filter(a => !a.isCorrect);
  const weakConcepts = [...new Set(wrongAnswers.map(a => a.concept || 'Ümumi'))].slice(0, 3);
  
  // Trend (son 2 cəhdin müqayisəsi)
  let trend = 'neutral';
  if (lastQuiz.length >= 2 || lastCode.length >= 2) {
    const recent = [...lastQuiz, ...lastCode].slice(0, 3);
    const older = [...lastQuiz, ...lastCode].slice(3, 6);
    
    if (recent.length > 0 && older.length > 0) {
      const recentSuccess = recent.filter(a => a.isCorrect || a.isSuccess).length / recent.length;
      const olderSuccess = older.filter(a => a.isCorrect || a.isSuccess).length / older.length;
      
      if (recentSuccess > olderSuccess + 0.1) trend = 'up';
      else if (recentSuccess < olderSuccess - 0.1) trend = 'down';
    }
  }
  
  // Tövsiyələr
  const recommendations = [];
  if (score < 50) {
    recommendations.push({
      type: 'critical',
      icon: '📚',
      title: 'Nəzəriyyəni təkrarlayın',
      description: 'Bu mövzuda əsas çətinliklər var. Dərsi yenidən oxuyun və video materiallara baxın.'
    });
  }
  if (quizAccuracy < 60 && lastQuiz.length > 0) {
    recommendations.push({
      type: 'warning',
      icon: '📝',
      title: 'Quiz suallarını təkrarlayın',
      description: 'Quiz nəticələri aşağıdır. Səhv cavabladığınız sualların izahlarını öyrənin.'
    });
  }
  if (codeSuccessRate < 50 && lastCode.length > 0) {
    recommendations.push({
      type: 'critical',
      icon: '💻',
      title: 'Praktikaya vaxt ayırın',
      description: 'Kod tapşırıqlarında çətinlik çəkirsiniz. Sadə nümunələrlə başlayın.'
    });
  }
  if (commonErrors.length > 0) {
    const topError = commonErrors[0];
    recommendations.push({
      type: 'error',
      icon: '🐛',
      title: `${topError.category} xətalarına diqqət edin`,
      description: ERROR_PATTERNS[topError.category]?.learningTip || 'Xəta səbəblərini öyrənin.'
    });
  }
  if (weakConcepts.length > 0) {
    recommendations.push({
      type: 'focus',
      icon: '🎯',
      title: `"${weakConcepts[0]}" konseptini öyrənin`,
      description: 'Bu konseptdə çətinlik çəkirsiniz. Əlavə mənbələrdən istifadə edin.'
    });
  }
  if (recommendations.length === 0) {
    recommendations.push({
      type: 'success',
      icon: '🚀',
      title: 'Mövzunu dərinləşdirin',
      description: 'Yaxşı nəticə! İndi daha mürəkkəb tapşırıqlar üzərində çalışın.'
    });
  }
  
  return {
    topicId,
    title: topicTitle,
    score,
    level,
    quizAccuracy,
    codeSuccessRate,
    quizAttempts: lastQuiz,
    codeAttempts: lastCode,
    commonErrors: commonErrors.slice(0, 3),
    weakConcepts,
    recommendations: recommendations.slice(0, 4),
    trend,
    totalAttempts: lastQuiz.length + lastCode.length,
    lastActivity: lastQuiz[0]?.timestamp || lastCode[0]?.timestamp || null
  };
};

// AI Prompt generator - LIMITLI (3000 token)
const generateCompactPrompt = (userId, analyses, currentMonth) => {
  let prompt = `SƏN PEŞƏKAR PYTHON MÜƏLLİMİSƏN. TƏLƏBƏNİN SON NƏTİCƏLƏRİNƏ GÖRƏ QISA VƏ KONKRET TƏHLİL APAR.

TƏLƏBƏ: ${userId.slice(0, 8)}...
AY: ${currentMonth}
TARİX: ${new Date().toLocaleDateString('az-AZ')}

=== MÖVZU BAZLI SON NƏTİCƏLƏR ===\n`;

  analyses.forEach((a, idx) => {
    prompt += `
${idx + 1}. ${a.title} (ID:${a.topicId})
   Bal: ${a.score}/100 | Səviyyə: ${a.level.label}
   Quiz: ${a.quizAccuracy}% | Kod: ${a.codeSuccessRate}%
   Trend: ${a.trend === 'up' ? '↑' : a.trend === 'down' ? '↓' : '→'}
   ${a.weakConcepts.length > 0 ? `Zəif: ${a.weakConcepts.join(', ')}` : ''}
   ${a.commonErrors.length > 0 ? `Xətalar: ${a.commonErrors.map(e => e.category).join(', ')}` : ''}
`;
  });

  const avgScore = Math.round(analyses.reduce((sum, a) => sum + a.score, 0) / analyses.length);
  const strongest = analyses.reduce((max, a) => a.score > max.score ? a : max, analyses[0]);
  const weakest = analyses.reduce((min, a) => a.score < min.score ? a : min, analyses[0]);

  prompt += `
=== ÜMUMI STATISTIKA ===
Orta bal: ${avgScore}/100
Ən güclü: ${strongest.title} (${strongest.score})
Ən zəif: ${weakest.title} (${weakest.score})
Ümumi trend: ${analyses.filter(a => a.trend === 'up').length > analyses.filter(a => a.trend === 'down').length ? 'Yüksəlir' : 'Stabil'}

=== TƏLƏBLƏR (MAKSIMUM 1500 TOKEN) ===
1. Hər mövzu üçün 2-3 cümləlik KONKRET təhlil:
   - Nəyi səhv edir? (konseptual/praktiki)
   - Necə düzəltməli? (addım-addım)

2. Ümumi 4 həftəlik plan:
   Həftə 1: [Konkret mövzu]
   Həftə 2: [Konkret mövzu]
   Həftə 3: [Konkret mövzu]
   Həftə 4: [Konkret mövzu]

3. 3 müsbət və 3 mənfi cəhət (bullet points)

4. 1 motivasiya cümləsi

Cavab Azərbaycanca, sadə və aydın olsun. Texniki terminləri izah et.`;

  // Token limitini yoxla (təxmini: 1 token ≈ 4 char)
  if (prompt.length > CONFIG.MAX_INPUT_TOKENS * 4) {
    // Çox uzundursa, qısalt
    return prompt.substring(0, CONFIG.MAX_INPUT_TOKENS * 4);
  }
  
  return prompt;
};

// AI cavabını parse et
const parseAIResponse = (text) => {
  const result = {
    topicAnalyses: [],
    weeklyPlan: [],
    positives: [],
    negatives: [],
    motivation: '',
    raw: text
  };

  // Həftəlik plan
  const weekMatches = text.match(/Həftə\s*\d+[:\.]\s*([^\n]+)/gi);
  if (weekMatches) {
    result.weeklyPlan = weekMatches.map(w => w.replace(/Həftə\s*\d+[:\.]\s*/i, '').trim());
  }

  // Müsbət cəhətlər
  const positiveSection = text.match(/[✅✓]\s*([^\n]+)/g);
  if (positiveSection) {
    result.positives = positiveSection.map(p => p.replace(/[✅✓]\s*/, '').trim()).slice(0, 5);
  }

  // Mənfi cəhətlər  
  const negativeSection = text.match(/[⚠️❌✗]\s*([^\n]+)/g);
  if (negativeSection) {
    result.negatives = negativeSection.map(n => n.replace(/[⚠️❌✗]\s*/, '').trim()).slice(0, 5);
  }

  // Motivasiya (son 200 char və ya xüsusi işarələr)
  const motivationMatch = text.match(/(?:💪|🎉|Motivasiya|TƏŞƏKKÜR)[:\s]*([^\n]+)/i);
  if (motivationMatch) {
    result.motivation = motivationMatch[1].trim();
  } else {
    // Son cümləni götür
    const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 20);
    result.motivation = sentences[sentences.length - 1]?.trim() || 'Uğurlar!';
  }

  return result;
};

// ============================================
// HOOK - CƏHDLƏRI IDARƏ ETMEK
// ============================================
export const useAIMentor = () => {
  // Quiz cəhdini yadda saxla
  const saveQuizAttempt = useCallback(async (userId, courseId, topicId, attemptData) => {
    try {
      const attempt = {
        type: 'quiz',
        topicId: parseInt(topicId),
        questionIndex: attemptData.questionIndex,
        userAnswer: attemptData.userAnswer,
        isCorrect: attemptData.isCorrect,
        question: attemptData.question?.substring(0, 200), // Limitlə
        options: attemptData.options,
        correctAnswer: attemptData.correctAnswer,
        concept: attemptData.concept || attemptData.question?.split(' ').slice(0, 3).join(' '),
        timestamp: new Date().toISOString()
      };

      // Firestore-a yaz
      const attemptsRef = collection(db, 'users', userId, 'courses', courseId, 'attempts');
      await addDoc(attemptsRef, attempt);
      
      // Son nəticələri cache-lə (lokal state üçün)
      return attempt;
    } catch (error) {
      console.error('Quiz attempt error:', error);
      throw error;
    }
  }, []);

  // Kod cəhdini yadda saxla
  const saveCodeAttempt = useCallback(async (userId, courseId, topicId, attemptData) => {
    try {
      const { category, type } = categorizeError(attemptData.error);
      
      const attempt = {
        type: 'code',
        topicId: parseInt(topicId),
        code: attemptData.code?.substring(0, 1000), // Limitlə
        output: attemptData.output?.substring(0, 500),
        error: attemptData.error?.substring(0, 500),
        errorCategory: category,
        errorType: type,
        isSuccess: attemptData.isSuccess,
        exerciseTitle: attemptData.exerciseTitle,
        requirements: attemptData.requirements,
        timestamp: new Date().toISOString()
      };

      const attemptsRef = collection(db, 'users', userId, 'courses', courseId, 'attempts');
      await addDoc(attemptsRef, attempt);
      
      return attempt;
    } catch (error) {
      console.error('Code attempt error:', error);
      throw error;
    }
  }, []);

  // Cəhdləri yüklə (yalnız son nəticələr)
  const loadAttempts = useCallback(async (userId, courseId, topicId = null) => {
    try {
      let q = query(
        collection(db, 'users', userId, 'courses', courseId, 'attempts'),
        orderBy('timestamp', 'desc'),
        limit(100) // Son 100 cəhd kifayətdir
      );
      
      if (topicId) {
        q = query(q, where('topicId', '==', parseInt(topicId)));
      }

      const snapshot = await getDocs(q);
      const attempts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      return {
        quizAttempts: attempts.filter(a => a.type === 'quiz'),
        codeAttempts: attempts.filter(a => a.type === 'code')
      };
    } catch (error) {
      console.error('Load attempts error:', error);
      return { quizAttempts: [], codeAttempts: [] };
    }
  }, []);

  return { saveQuizAttempt, saveCodeAttempt, loadAttempts };
};

// ============================================
// ANA KOMPONENT
// ============================================
const AIAnalysis = ({ user, courseId, topics, currentMonth = 1 }) => {
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState({ quizAttempts: [], codeAttempts: [] });
  const [analysis, setAnalysis] = useState(null);
  const [viewMode, setViewMode] = useState('overview'); // overview, topics, report
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showResetModal, setShowResetModal] = useState(false);

  // Hook-u komponent səviyyəsində çağır
  const { loadAttempts } = useAIMentor();

  // Cəhdləri yüklə
  useEffect(() => {
    if (!user || !courseId) return;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await loadAttempts(user.uid, courseId);
        setAttempts(data);
        
        // Saxlanmış analizi yüklə
        const analysisDoc = await getDoc(doc(db, 'users', user.uid, 'courses', courseId, 'analysis', 'latest'));
        if (analysisDoc.exists()) {
          setAnalysis(analysisDoc.data());
        }
      } catch (err) {
        console.error('Data load error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [user, courseId, loadAttempts]);

  // Mövzu analizlərini hesabla (yalnız son nəticələr)
  const topicAnalyses = useMemo(() => {
    return topics
      .map((topic, idx) => analyzeTopic(idx + 1, topic.title, attempts.quizAttempts, attempts.codeAttempts))
      .filter(Boolean); // null olanları at
  }, [attempts, topics]);

  // Ümumi statistika
  const overallStats = useMemo(() => {
    if (topicAnalyses.length === 0) return null;
    
    const scores = topicAnalyses.map(t => t.score);
    const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const completedTopics = topicAnalyses.filter(t => t.score > 0).length;
    
    return {
      averageScore: avgScore,
      completedTopics,
      totalTopics: topics.length,
      completionRate: Math.round((completedTopics / topics.length) * 100),
      strongest: topicAnalyses.reduce((max, t) => t.score > max.score ? t : max, topicAnalyses[0]),
      weakest: topicAnalyses.reduce((min, t) => t.score < min.score ? t : min, topicAnalyses[0]),
      overallLevel: getLevelByScore(avgScore),
      trend: topicAnalyses.filter(t => t.trend === 'up').length > topicAnalyses.filter(t => t.trend === 'down').length ? 'up' : 'neutral'
    };
  }, [topicAnalyses, topics.length]);

  // AI Analizi apar
  const generateAIAnalysis = async () => {
    if (topicAnalyses.length === 0) {
      setError('Analiz üçün kifayət qədər məlumat yoxdur. Əvvəlcə quiz və kod tapşırıqlarını tamamlayın.');
      return;
    }

    setAnalyzing(true);
    setError(null);

    try {
      const prompt = generateCompactPrompt(user.uid, topicAnalyses, currentMonth);
      
      const response = await fetch(CONFIG.API_ENDPOINT, {
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
              content: 'Sən peşəkar Python müəllimisən. Qısa, konkret və faydalı təhlil apar. Hər mövzu üçün maksimum 3 cümlə yaz. Ümumi hesabat 500 sözdən çox olmasın.'
            },
            { role: 'user', content: prompt }
          ],
          temperature: 0.4,
          max_tokens: CONFIG.MAX_OUTPUT_TOKENS,
          top_p: 0.9
        })
      });

      if (!response.ok) {
        throw new Error(`API xətası: ${response.status}`);
      }

      const result = await response.json();
      const aiText = result.choices[0].message.content;
      const parsed = parseAIResponse(aiText);

      const newAnalysis = {
        aiInsights: parsed,
        generatedAt: new Date().toISOString(),
        topicAnalyses: topicAnalyses,
        overallStats: overallStats,
        model: 'llama-3.3-70b-versatile',
        inputTokens: Math.round(prompt.length / 4),
        outputTokens: Math.round(aiText.length / 4)
      };

      // Firestore-a saxla
      await setDoc(
        doc(db, 'users', user.uid, 'courses', courseId, 'analysis', 'latest'),
        newAnalysis
      );

      setAnalysis(newAnalysis);
    } catch (err) {
      console.error('AI Analysis error:', err);
      setError('Təhlil apararkən xəta baş verdi. Yenidən cəhd edin.');
    } finally {
      setAnalyzing(false);
    }
  };

  // Analizi sıfırla
  const resetAnalysis = async () => {
    if (!user || !courseId) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'courses', courseId, 'analysis', 'latest'));
      setAnalysis(null);
      setShowResetModal(false);
    } catch (err) {
      console.error('Reset error:', err);
    }
  };

  // Render funksiyaları
  const renderHeader = () => (
    <div className="ai-header">
      <div className="header-brand">
        <div className="brand-icon">
          <BrainCircuit size={32} />
        </div>
        <div className="brand-text">
          <h1>🤖 AI Mentor</h1>
          <p>Fərdi Təlim və Təhlil Sistemi</p>
        </div>
      </div>
      
      <div className="header-actions">
        {analysis && (
          <button className="btn-secondary" onClick={() => setShowResetModal(true)}>
            <RotateCcw size={18} />
            <span>Sıfırla</span>
          </button>
        )}
        
        <button 
          className="btn-primary"
          onClick={generateAIAnalysis}
          disabled={analyzing || topicAnalyses.length === 0}
        >
          {analyzing ? (
            <>
              <Loader2 className="spin" size={20} />
              <span>Təhlil edilir...</span>
            </>
          ) : (
            <>
              <Sparkles size={20} />
              <span>{analysis ? 'Yenilə' : 'AI Təhlil Et'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  const renderOverview = () => {
    if (!overallStats) return renderEmptyState();
    
    return (
      <div className="overview-section">
        <div className="stats-grid">
          <div className="stat-card main">
            <div className="stat-header">
              <GraduationCap size={24} />
              <h3>Ümumi İrəliləyiş</h3>
            </div>
            <div className="stat-body">
              <div className="big-score" style={{ color: overallStats.overallLevel.color }}>
                {overallStats.overallLevel.icon} {overallStats.averageScore}%
              </div>
              <div className="level-badge" style={{ background: overallStats.overallLevel.bg, color: overallStats.overallLevel.color }}>
                {overallStats.overallLevel.label}
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${overallStats.completionRate}%` }} />
              </div>
              <p className="stat-desc">{overallStats.completedTopics} / {overallStats.totalTopics} mövzu tamamlanıb</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <TrendingUp size={24} />
              <h3>Ən Güclü Mövzu</h3>
            </div>
            <div className="stat-body">
              <div className="topic-name">{overallStats.strongest.title}</div>
              <div className="topic-score" style={{ color: overallStats.strongest.level.color }}>
                {overallStats.strongest.score}%
              </div>
              <p className="stat-desc">{overallStats.strongest.level.label}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <AlertTriangle size={24} />
              <h3>Diqqət Tələb Olunur</h3>
            </div>
            <div className="stat-body">
              <div className="topic-name">{overallStats.weakest.title}</div>
              <div className="topic-score" style={{ color: overallStats.weakest.level.color }}>
                {overallStats.weakest.score}%
              </div>
              <p className="stat-desc">{overallStats.weakest.level.label}</p>
            </div>
          </div>
        </div>

        {analysis?.aiInsights && (
          <div className="ai-summary">
            <h3><Sparkles size={20} /> AI Tövsiyələri</h3>
            <div className="insights-grid">
              {analysis.aiInsights.positives.length > 0 && (
                <div className="insight-card positive">
                  <h4>✅ Müsbət Cəhətlər</h4>
                  <ul>
                    {analysis.aiInsights.positives.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              )}
              {analysis.aiInsights.negatives.length > 0 && (
                <div className="insight-card negative">
                  <h4>⚠️ İnkişaf Etməli</h4>
                  <ul>
                    {analysis.aiInsights.negatives.map((n, i) => <li key={i}>{n}</li>)}
                  </ul>
                </div>
              )}
              {analysis.aiInsights.weeklyPlan.length > 0 && (
                <div className="insight-card plan">
                  <h4>📅 4 Həftəlik Plan</h4>
                  <ul>
                    {analysis.aiInsights.weeklyPlan.map((w, i) => (
                      <li key={i}><strong>Həftə {i+1}:</strong> {w}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {analysis.aiInsights.motivation && (
              <div className="motivation-box">
                <Sparkles size={20} />
                <p>{analysis.aiInsights.motivation}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderTopics = () => (
    <div className="topics-section">
      <div className="topics-list">
        {topicAnalyses.map(topic => (
          <div 
            key={topic.topicId} 
            className={`topic-card ${selectedTopic === topic.topicId ? 'expanded' : ''}`}
            style={{ borderLeftColor: topic.level.color }}
          >
            <div 
              className="topic-header"
              onClick={() => setSelectedTopic(selectedTopic === topic.topicId ? null : topic.topicId)}
            >
              <div className="topic-info">
                <span className="topic-number" style={{ background: topic.level.color }}>
                  {topic.topicId}
                </span>
                <div>
                  <h4>{topic.title}</h4>
                  <div className="topic-badges">
                    <span className="badge" style={{ background: topic.level.bg, color: topic.level.color }}>
                      {topic.level.icon} {topic.level.label}
                    </span>
                    <span className="badge score">{topic.score}%</span>
                    {topic.commonErrors.length > 0 && (
                      <span className="badge error"><Bug size={12} /> {topic.commonErrors.length}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="topic-stats">
                <span className="mini-stat"><FileQuestion size={14} /> {topic.quizAccuracy}%</span>
                <span className="mini-stat"><Terminal size={14} /> {topic.codeSuccessRate}%</span>
                <span className={`trend-icon ${topic.trend}`}>
                  {topic.trend === 'up' ? <TrendingUp size={16} /> : 
                   topic.trend === 'down' ? <TrendingDown size={16} /> : 
                   <Activity size={16} />}
                </span>
                {selectedTopic === topic.topicId ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {selectedTopic === topic.topicId && (
              <div className="topic-details">
                {/* Tövsiyələr */}
                {topic.recommendations.length > 0 && (
                  <div className="detail-section">
                    <h5><Lightbulb size={16} /> Tövsiyələr</h5>
                    <div className="recommendations">
                      {topic.recommendations.map((rec, idx) => (
                        <div key={idx} className={`rec-item ${rec.type}`}>
                          <span className="rec-icon">{rec.icon}</span>
                          <div>
                            <strong>{rec.title}</strong>
                            <p>{rec.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Xəta təhlili */}
                {topic.commonErrors.length > 0 && (
                  <div className="detail-section">
                    <h5><Bug size={16} /> Səhv Təhlili</h5>
                    {topic.commonErrors.map((err, idx) => (
                      <div key={idx} className="error-card">
                        <div className="error-header">
                          <span className="error-cat">{err.category}</span>
                          <span className="error-count">{err.count} dəfə</span>
                        </div>
                        {err.explanation && (
                          <div className="error-help">
                            <p><strong>🎯 Səbəb:</strong> {err.explanation.causes[0]}</p>
                            <p><strong>✅ Həll:</strong> {err.explanation.fix}</p>
                            <p className="tip"><strong>💡 Məsləhət:</strong> {err.explanation.learningTip}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Son fəaliyyət */}
                <div className="detail-section">
                  <h5><Clock3 size={16} /> Son Fəaliyyət</h5>
                  <div className="activity-list">
                    {topic.quizAttempts.slice(0, 2).map((q, i) => (
                      <div key={`q-${i}`} className={`activity-item ${q.isCorrect ? 'success' : 'error'}`}>
                        <span>{q.isCorrect ? '✅' : '❌'} Quiz: {q.question?.substring(0, 50)}...</span>
                      </div>
                    ))}
                    {topic.codeAttempts.slice(0, 2).map((c, i) => (
                      <div key={`c-${i}`} className={`activity-item ${c.isSuccess ? 'success' : 'error'}`}>
                        <span>{c.isSuccess ? '✅' : '❌'} Kod: {c.exerciseTitle}</span>
                        {!c.isSuccess && c.errorCategory && (
                          <small>{c.errorCategory}</small>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderReport = () => {
    if (!analysis) return (
      <div className="empty-report">
        <p>AI hesabatı hələ generasiya edilməyib.</p>
        <button className="btn-primary" onClick={generateAIAnalysis}>
          <Sparkles size={18} /> Təhlil Et
        </button>
      </div>
    );

    return (
      <div className="report-section">
        <div className="report-header">
          <Calendar size={24} />
          <h2>Ay {currentMonth} - AI Hesabatı</h2>
          <span className="report-date">
            {new Date(analysis.generatedAt).toLocaleDateString('az-AZ')}
          </span>
        </div>

        <div className="report-content">
          <div className="report-stats">
            <div className="r-stat">
              <span className="r-label">Orta Bal</span>
              <span className="r-value" style={{ color: overallStats?.overallLevel.color }}>
                {overallStats?.averageScore}%
              </span>
            </div>
            <div className="r-stat">
              <span className="r-label">Mövzu Sayı</span>
              <span className="r-value">{topicAnalyses.length}</span>
            </div>
            <div className="r-stat">
              <span className="r-label">Token İstifadəsi</span>
              <span className="r-value">{analysis.inputTokens} → {analysis.outputTokens}</span>
            </div>
          </div>

          {analysis.aiInsights?.raw && (
            <div className="raw-analysis">
              <h4>📝 Detallı Təhlil</h4>
              <div className="raw-content">
                {analysis.aiInsights.raw.split('\n').map((line, i) => (
                  <p key={i} className={line.startsWith('**') ? 'bold' : ''}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderEmptyState = () => (
    <div className="empty-state">
      <Brain size={64} className="empty-icon" />
      <h2>Hələ kifayət qədər məlumat yoxdur</h2>
      <p>AI Mentor fərdi təhlil üçün minimum {CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS} tapşırıq gözləyir.</p>
      <div className="progress-mini">
        <div className="progress-bar-mini">
          <div 
            className="progress-fill-mini" 
            style={{ width: `${Math.min((topicAnalyses.length / CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS) * 100, 100)}%` }}
          />
        </div>
        <span>{topicAnalyses.length} / {CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS} mövzu</span>
      </div>
      <div className="next-steps">
        <p>🎯 Başlamaq üçün:</p>
        <ul>
          <li>Mövzuları təkrarlayın və quizləri cavablandırın</li>
          <li>Kod tapşırıqlarını yerinə yetirin</li>
          <li>Səhv etdiklərinizi düzəldin</li>
        </ul>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="ai-analysis loading">
        <Loader2 size={48} className="spin" />
        <p>Məlumatlar yüklənir...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="ai-analysis guest">
        <Lock size={64} />
        <h2>Giriş Tələb Olunur</h2>
        <p>Fərdi AI təhlili görmək üçün daxil olun</p>
      </div>
    );
  }

  return (
    <div className="ai-analysis">
      {renderHeader()}

      {/* Reset Modal */}
      {showResetModal && (
        <div className="modal-overlay" onClick={() => setShowResetModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <AlertTriangle size={48} className="modal-icon" />
            <h3>Təhlili Sıfırlamaq</h3>
            <p>Bütün AI təhlili və statistikalar silinəcək. Bu əməliyyat geri qaytarıla bilməz.</p>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowResetModal(false)}>Ləğv Et</button>
              <button className="btn-danger" onClick={resetAnalysis}>
                <Trash2 size={16} /> Sıfırla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="error-banner">
          <AlertCircle size={24} />
          <p>{error}</p>
          <button onClick={() => setError(null)}><X size={18} /></button>
        </div>
      )}

      {/* Tabs */}
      <div className="view-tabs">
        <button 
          className={viewMode === 'overview' ? 'active' : ''}
          onClick={() => setViewMode('overview')}
        >
          <BarChart3 size={18} /> Ümumi
        </button>
        <button 
          className={viewMode === 'topics' ? 'active' : ''}
          onClick={() => setViewMode('topics')}
        >
          <Layers size={18} /> Mövzular
        </button>
        <button 
          className={viewMode === 'report' ? 'active' : ''}
          onClick={() => setViewMode('report')}
        >
          <FileText size={18} /> Hesabat
        </button>
      </div>

      {/* Content */}
      <main className="ai-content">
        {viewMode === 'overview' && renderOverview()}
        {viewMode === 'topics' && renderTopics()}
        {viewMode === 'report' && renderReport()}
      </main>

      {/* Footer */}
      {analysis && (
        <footer className="analysis-footer">
          <span>🤖 {analysis.model}</span>
          <span>•</span>
          <span>🕐 {new Date(analysis.generatedAt).toLocaleString('az-AZ')}</span>
        </footer>
      )}

      {/* CSS */}
      <style>{`
        .ai-analysis {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #f8fafc;
          min-height: 100vh;
          color: #1e293b;
        }

        .ai-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .brand-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .brand-text h1 {
          margin: 0;
          font-size: 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-text p {
          margin: 4px 0 0;
          color: #64748b;
          font-size: 14px;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn-primary, .btn-secondary, .btn-danger {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-secondary {
          background: white;
          color: #64748b;
          border: 2px solid #e2e8f0;
        }

        .btn-secondary:hover {
          border-color: #ef4444;
          color: #ef4444;
        }

        .btn-danger {
          background: #ef4444;
          color: white;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .view-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          background: white;
          padding: 6px;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .view-tabs button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .view-tabs button.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .ai-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          min-height: 400px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
          border: 2px solid #e2e8f0;
        }

        .stat-card.main {
          border-color: #667eea;
          background: linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%);
        }

        .stat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          color: #64748b;
        }

        .stat-header h3 {
          margin: 0;
          font-size: 16px;
          color: #1e293b;
        }

        .big-score {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .level-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .progress-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        .stat-desc {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        .topic-name {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .topic-score {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .ai-summary {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 2px solid #e2e8f0;
        }

        .ai-summary h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 20px;
          color: #1e293b;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }

        .insight-card {
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid;
        }

        .insight-card.positive {
          background: #f0fdf4;
          border-left-color: #10b981;
        }

        .insight-card.negative {
          background: #fef2f2;
          border-left-color: #ef4444;
        }

        .insight-card.plan {
          background: #eff6ff;
          border-left-color: #3b82f6;
        }

        .insight-card h4 {
          margin: 0 0 12px;
          font-size: 15px;
        }

        .insight-card ul {
          margin: 0;
          padding-left: 18px;
        }

        .insight-card li {
          margin-bottom: 6px;
          font-size: 14px;
          color: #475569;
        }

        .motivation-box {
          margin-top: 20px;
          padding: 20px;
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: #92400e;
        }

        .motivation-box p {
          margin: 0;
          font-size: 15px;
          font-style: italic;
        }

        .topics-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .topic-card {
          background: #f8fafc;
          border-radius: 12px;
          overflow: hidden;
          border-left: 4px solid;
          transition: all 0.2s;
        }

        .topic-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .topic-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          cursor: pointer;
        }

        .topic-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .topic-number {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 13px;
        }

        .topic-info h4 {
          margin: 0 0 6px;
          font-size: 16px;
        }

        .topic-badges {
          display: flex;
          gap: 8px;
        }

        .badge {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .badge.score {
          background: #e2e8f0;
          color: #475569;
        }

        .badge.error {
          background: #fef2f2;
          color: #dc2626;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .topic-stats {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #64748b;
        }

        .mini-stat {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
        }

        .trend-icon {
          padding: 6px;
          border-radius: 50%;
        }

        .trend-icon.up {
          color: #10b981;
          background: #dcfce7;
        }

        .trend-icon.down {
          color: #ef4444;
          background: #fef2f2;
        }

        .trend-icon.neutral {
          color: #64748b;
          background: #f1f5f9;
        }

        .topic-details {
          padding: 0 20px 20px;
          border-top: 1px solid #e2e8f0;
        }

        .detail-section {
          margin-top: 20px;
        }

        .detail-section h5 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 12px;
          font-size: 14px;
          color: #1e293b;
        }

        .recommendations {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .rec-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px;
          border-radius: 10px;
          border-left: 3px solid;
        }

        .rec-item.critical {
          background: #fef2f2;
          border-left-color: #ef4444;
        }

        .rec-item.warning {
          background: #fffbeb;
          border-left-color: #f59e0b;
        }

        .rec-item.error {
          background: #eff6ff;
          border-left-color: #3b82f6;
        }

        .rec-item.focus {
          background: #f5f3ff;
          border-left-color: #8b5cf6;
        }

        .rec-item.success {
          background: #f0fdf4;
          border-left-color: #10b981;
        }

        .rec-icon {
          font-size: 20px;
        }

        .rec-item strong {
          display: block;
          margin-bottom: 4px;
          font-size: 14px;
          color: #1e293b;
        }

        .rec-item p {
          margin: 0;
          font-size: 13px;
          color: #64748b;
        }

        .error-card {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 12px;
        }

        .error-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .error-cat {
          background: #dc2626;
          color: white;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .error-count {
          color: #7f1d1d;
          font-size: 13px;
          font-weight: 500;
        }

        .error-help p {
          margin: 0 0 8px;
          font-size: 13px;
          color: #475569;
        }

        .error-help .tip {
          color: #92400e;
          background: #fef3c7;
          padding: 8px;
          border-radius: 6px;
          margin-top: 8px;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .activity-item {
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          display: flex;
          flex-direction: column;
        }

        .activity-item.success {
          background: #f0fdf4;
          color: #166534;
        }

        .activity-item.error {
          background: #fef2f2;
          color: #991b1b;
        }

        .activity-item small {
          margin-top: 4px;
          opacity: 0.8;
        }

        .report-section {
          max-width: 800px;
          margin: 0 auto;
        }

        .report-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e2e8f0;
        }

        .report-header h2 {
          margin: 0;
          flex: 1;
          font-size: 22px;
        }

        .report-date {
          color: #64748b;
          font-size: 14px;
        }

        .report-stats {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
        }

        .r-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .r-label {
          font-size: 13px;
          color: #64748b;
        }

        .r-value {
          font-size: 24px;
          font-weight: 700;
        }

        .raw-analysis {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
        }

        .raw-analysis h4 {
          margin: 0 0 16px;
          color: #1e293b;
        }

        .raw-content {
          font-size: 14px;
          line-height: 1.8;
          color: #475569;
        }

        .raw-content p {
          margin: 0 0 12px;
        }

        .raw-content .bold {
          font-weight: 600;
          color: #1e293b;
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
        }

        .empty-icon {
          color: #667eea;
          margin-bottom: 24px;
        }

        .empty-state h2 {
          margin: 0 0 12px;
          color: #1e293b;
        }

        .empty-state p {
          color: #64748b;
          margin-bottom: 24px;
        }

        .progress-mini {
          max-width: 300px;
          margin: 0 auto 24px;
        }

        .progress-bar-mini {
          height: 10px;
          background: #e2e8f0;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress-fill-mini {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 5px;
          transition: width 0.6s ease;
        }

        .next-steps {
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          max-width: 400px;
          margin: 0 auto;
          text-align: left;
        }

        .next-steps p {
          font-weight: 600;
          margin: 0 0 12px;
          color: #1e293b;
        }

        .next-steps ul {
          margin: 0;
          padding-left: 20px;
          color: #475569;
        }

        .next-steps li {
          margin-bottom: 8px;
        }

        .empty-report {
          text-align: center;
          padding: 40px;
        }

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
        }

        .modal-content {
          background: white;
          padding: 28px;
          border-radius: 16px;
          max-width: 400px;
          width: 100%;
          text-align: center;
        }

        .modal-icon {
          color: #f59e0b;
          margin-bottom: 16px;
        }

        .modal-content h3 {
          margin: 0 0 12px;
          font-size: 20px;
        }

        .modal-content p {
          margin: 0 0 20px;
          color: #64748b;
          font-size: 14px;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
        }

        .error-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #fef2f2;
          color: #dc2626;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .error-banner button {
          margin-left: auto;
          background: none;
          border: none;
          color: #dc2626;
          cursor: pointer;
        }

        .analysis-footer {
          margin-top: 32px;
          padding: 16px;
          text-align: center;
          color: #64748b;
          font-size: 13px;
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .loading, .guest {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .ai-header {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .header-actions {
            width: 100%;
            justify-content: center;
          }

          .view-tabs {
            flex-wrap: wrap;
          }

          .view-tabs button {
            flex: 1;
            justify-content: center;
          }

          .topic-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .topic-stats {
            width: 100%;
            justify-content: space-between;
          }

          .report-stats {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default AIAnalysis;