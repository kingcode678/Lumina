import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { db } from '../firebase';
import { 
  doc, 
  getDoc, 
  setDoc, 
  deleteDoc,
  serverTimestamp, 
  onSnapshot,
  collection,
  query,
  where,
  getDocs
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
  Layers, ArrowUpRight, PieChart, Hash, Cpu
} from 'lucide-react';

// ============================================
// API KEY - BIRBAŞA KODDA
// ============================================
const GROQ_API_KEY = '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';

// ============================================
// KONFiQURASIYA
// ============================================
const CONFIG = {
  MAX_INPUT_TOKENS: 4000,
  MAX_OUTPUT_TOKENS: 2000,
  MIN_ATTEMPTS_FOR_ANALYSIS: 3,
  CONFIDENCE_THRESHOLD: 0.7,
  RETRY_ATTEMPTS: 3,
  API_ENDPOINT: 'https://api.groq.com/openai/v1/chat/completions  '
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
    icon: '🌱'
  },
  ELEMENTARY: { 
    label: 'Elementar', 
    color: '#f97316', 
    bg: '#fff7ed',
    description: 'Əsas anlayışları qavrayır amma praktikada çətinlik çəkir',
    icon: '🌿'
  },
  INTERMEDIATE: { 
    label: 'Orta', 
    color: '#f59e0b', 
    bg: '#fffbeb',
    description: 'Mövzuları anlayır, orta səviyyədə tətbiq edir',
    icon: '🌳'
  },
  UPPER_INTERMEDIATE: { 
    label: 'Yuxarı Orta', 
    color: '#84cc16', 
    bg: '#f7fee7',
    description: 'Yaxşı mənimsəmiş, mürəkkəb tapşırıqlarda çətinlik çəkir',
    icon: '🌲'
  },
  ADVANCED: { 
    label: 'İrəli', 
    color: '#10b981', 
    bg: '#f0fdf4',
    description: 'Mövzuları tam mənimsəmiş, mürəkkəb problemləri həll edir',
    icon: '🚀'
  },
  EXPERT: { 
    label: 'Ekspert', 
    color: '#06b6d4', 
    bg: '#ecfeff',
    description: 'Konseptləri dərindən bilir və innovativ həllər yaradır',
    icon: '👑'
  }
};

// ============================================
// ERROR PATTERN DATABASE - Python üçün Genişləndirilmiş
// ============================================
const ERROR_PATTERNS = {
  SyntaxError: {
    patterns: ['invalid syntax', 'unexpected EOF', 'EOL while scanning string literal', 'unexpected character', 'invalid character'],
    causes: [
      'Dırnaq işarələrini bağlamaq unudulub (", \')',
      'Mötərizələr balanslı deyil - açılan mötərizə bağlanmayıb',
      'İndentasiya (boşluq) səhvləri - Python blok strukturu pozulub',
      'Sətir sonunda artıq nöqtə-vergül (;) qoyulub',
      'Kod sətri tamamlanmadan yeni sətirə keçilib'
    ],
    fix: 'Kodun strukturunu yoxlayın: bütün açan mötərizələr ((), [], {}) bağlanıb? Dırnaqlar cütləşib? İndentasiya düzgündür? VS Code-da "Problems" panelini yoxlayın.',
    learningTip: 'Python blok strukturunu (indentation) yaxşı mənimsəyin. Digər dillərdən (C++, Java) fərqli olaraq Python-da mötərizələr yox, boşluqlar əhəmiyyətlidir. Hər blok 4 boşluq ilə başlamalıdır.',
    resources: ['https://docs.python.org/3/tutorial/errors.html  ', 'https://realpython.com/invalid-syntax-python/  ']
  },
  
  IndentationError: {
    patterns: ['unexpected indent', 'expected an indented block', 'unindent does not match', 'inconsistent use of tabs and spaces'],
    causes: [
      'Funksiyadan sonra indentasiya unudulub (def, class, if, for, while)',
      'Boşluq (space) və Tab qarışığı istifadə edilib',
      'Şərt bloklarından sonra (if/else) indentasiya yoxdur',
      'Loop və ya funksiya daxilində kod yazılmayıb'
    ],
    fix: 'Bütün kod blokları (if, for, def, class) eyni səviyyədə boşluqdan başlamalıdır. 4 boşluq standartdır. VS Code-da "Convert Indentation to Spaces" istifadə edin.',
    learningTip: 'VS Code-da "Editor: Insert Spaces" ayarını aktiv edin və "Tab Size" 4 olaraq təyin edin. Heç vaxt Tab və boşluq qarışdırmayın. Funksiya və class-lardan sonra mütləq indentasiya olunmalıdır.',
    resources: ['https://www.python.org/dev/peps/pep-0008/#indentation  ']
  },
  
  NameError: {
    patterns: ['name .* is not defined', 'undefined variable', 'nameError'],
    causes: [
      'Dəyişən adı səhv yazılıb (case-sensitive: Name vs name)',
      'Dəyişən funksiyadan əvvəl çağırılıb (istifadə edilmədən əvvəl təyin olunmayıb)',
      'Lazımi modul import edilməyib (import math, import random)',
      'Scope (görünürlük) səhv - lokal dəyişən qlobalda istifadə edilir',
      'String dırnaq içində dəyişən adı yazılıb'
    ],
    fix: 'Dəyişən adını yoxlayın (case-sensitive). Əvvəlcə təyin olunduğuna əmin olun: x = 5, sonra print(x). Lazımsa "import modul_adı" əlavə edin.',
    learningTip: 'Python-da dəyişənlər istifadə edilmədən əvvəl təyin olunmalıdır. Funksiya daxilində yaradılan dəyişən xaricdə görünmür (local vs global scope). global açar sözündən çəkinin, funksiya arqumentləri istifadə edin.',
    resources: ['https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces  ']
  },
  
  TypeError: {
    patterns: ['unsupported operand type', 'can only concatenate', 'takes .* positional arguments', 'missing .* required argument', 'got an unexpected keyword argument', 'not callable', 'object is not subscriptable'],
    causes: [
      'Fərqli tipləri toplamaq (məs: "5" + 3 və ya "salam" + 5)',
      'Funksiyaya səhv arqument tipi göndərmək (string əvəzinə list)',
      'NoneType üzərində əməliyyat (funksiya heç nə qaytarmayıb)',
      'List əvəzinə string göndərmək və ya əksinə',
      'Funksiya olmayan şeyi çağırmaq (məs: stringi funksiya kimi)',
      'İndeksləmə səhvi (məs: {"a": 1}["b"] əvəzinə .get() istifadə etməmək)'
    ],
    fix: 'Dəyişənlərin tiplərini yoxlayın: print(type(deyisen)). Uyğun tipləri əməliyyat edin və ya tip çevirmə (int(), str(), list()) istifadə edin. Funksiya arqumentlərini yoxlayın.',
    learningTip: 'Python dinamik tipli dildir amma sərt tiplidir (strongly typed). Əməliyyat aparmadan əvvəl tiplərin uyğun olduğunu yoxlayın. isinstance() funksiyası ilə tip yoxlaması aparın.',
    resources: ['https://docs.python.org/3/library/functions.html#type  ', 'https://docs.python.org/3/library/functions.html#isinstance  ']
  },
  
  IndexError: {
    patterns: ['list index out of range', 'string index out of range', 'tuple index out of range', 'index error'],
    causes: [
      'Boş listə indeks ilə müraciət (len(list) == 0, amma list[0] çağırılır)',
      'Mövcud olmayan indeks (məs: 5 elementli listdə [10] çağırmaq)',
      'Loop-da sərhəd xətası (range() səhv istifadə edilib)',
      'Son elementə çatmaq üçün [-1] əvəzinə [len(list)] yazmaq'
    ],
    fix: 'Listin uzunluğunu yoxlayın: len(list). İndeks 0-dan başlayır, son indeks len-1-dir. Negative indekslər (-1 son element) istifadə edə bilərsiniz. Əvvəlcə if len(list) > 0: yoxlayın.',
    learningTip: 'Python-da indeksləmə 0-dan başlayır. 5 elementli listdə son elementin indeksi 4-dür (və ya -1). List boşdursa, heç bir indeks işləməz. Əvvəlcə yoxlamaq vacibdir.',
    resources: ['https://docs.python.org/3/tutorial/datastructures.html#more-on-lists  ']
  },
  
  KeyError: {
    patterns: ['KeyError', 'key not found', 'KeyError:'],
    causes: [
      'Lüğətdə (dict) olmayan açar (key) ilə müraciət',
      'Səhv açar adı yazmaq (case-sensitive səhv: "Name" vs "name")',
      'Dictionary-də olmayan elementi silməyə çalışmaq',
      'JSON datasından olmayan field çəkmək'
    ],
    fix: 'dict.get("key", default) istifadə edin və ya "key" in dict ilə yoxlayın. Bütün açarları görmək üçün dict.keys() çap edin. try-except KeyError ilə tutun.',
    learningTip: 'Dictionary-lərdə açarlar unikal olmalıdır. .get() metodu KeyError atmadan default dəyər qaytara bilər. Məs: value = my_dict.get("olmayan_key", "Default Dəyər")',
    resources: ['https://docs.python.org/3/library/stdtypes.html#dict.get  ']
  },
  
  AttributeError: {
    patterns: ['object has no attribute', 'NoneType object has no attribute', 'attribute error', 'has no attribute'],
    causes: [
      'Olmayan metod və ya atribut çağırmaq (məs: [1,2,3].upper())',
      'None üzərində metod çağırmaq (funksiya None qaytardıqdan sonra .append() çağırmaq)',
      'Modul düzgün import edilməyib (from math import sqrt əvəzinə import math və math.sqrt)',
      'String metodu listdə çağırmaq və ya əksinə',
      'Obyektin tipini yoxlamadan metod çağırmaq'
    ],
    fix: 'Obyektin tipini yoxlayın: type(obj). Lazımi metodlar üçün dir(obj) istifadə edin. None yoxlaması əlavə edin: if obj is not None:. Metodun mövcudluğunu yoxlayın: hasattr(obj, "method_name").',
    learningTip: 'Hər tipin öz metodları var. String metodları (upper(), split()) listdə işləmir. Obyektin tipini bilmədən metod çağırmayın. isinstance() ilə tip yoxlaması aparın.',
    resources: ['https://docs.python.org/3/library/functions.html#dir  ', 'https://docs.python.org/3/library/functions.html#hasattr  ']
  },
  
  ValueError: {
    patterns: ['invalid literal for int', 'could not convert string to float', 'too many values to unpack', 'not enough values to unpack', 'invalid literal', 'could not convert'],
    causes: [
      'Boş və ya yanlış formatlı stringi ədədə çevirmək (int(""), float("abc"))',
      'Unpacking-də element sayı uyğunsuzluğu (a, b = [1, 2, 3])',
      'Səhv tarix formatı (datetime.strptime ilə yanlış format)',
      'List element sayı uyğunsuzluğu',
      'input() ilə alınan məlumatı düzgün çevirməmək'
    ],
    fix: 'Dəyərin formatını yoxlayın. Tip çevirmədən əvvəl validate edin: if value.isdigit() və ya try-except ValueError. Unpacking-də element sayı bərabər olmalıdır.',
    learningTip: 'İstifadəçi daxilindən gələn məlumatları (input()) həmişə yoxlayın. try-except ValueError ilə tutmaq təhlükəsizdir. Məs: try: num = int(user_input) except ValueError: print("Zəhmət olmasa ədəd daxil edin")',
    resources: ['https://docs.python.org/3/tutorial/errors.html#handling-exceptions  ']
  },
  
  ZeroDivisionError: {
    patterns: ['division by zero', 'float division by zero', 'integer division or modulo by zero', 'division or modulo by zero'],
    causes: [
      'Sıfıra bölmə (10 / 0, 10 % 0)',
      'Boş listin ortalaması (sum([]) / len([]))',
      'Dəyişən sıfır olub, sonra bölmə əməliyyatı',
      'Funksiyaya sıfır göndərilməsi'
    ],
    fix: 'Bölmədən əvvəl məxrəci yoxlayın: if b != 0: və ya try-except ZeroDivisionError. Sıfır olduqda xüsusi handling əlavə edin.',
    learningTip: 'Həmişə bölən sıfır ola biləcəyini nəzərə alın. Statistik hesablamalarda boş dataset yoxlaması vacibdir. try-except ilə tutmaq daha yaxşıdır.',
    resources: ['https://docs.python.org/3/library/exceptions.html#ZeroDivisionError  ']
  },
  
  ImportError: {
    patterns: ['No module named', 'cannot import name', 'attempted relative import', 'ModuleNotFoundError'],
    causes: [
      'Modul install edilməyib (pip install modul_adı)',
      'Modul adı səhv yazılıb (məs: sklearn deyil scikit-learn)',
      'Dairəvi import (circular import) - iki modul bir-birini import edir',
      'Virtual environment aktiv deyil (venv, conda)',
      'Fayl adı modul adı ilə eynidir (məs: random.py faylı random modulunu bloklayır)'
    ],
    fix: 'pip install modul_adı ilə quraşdırın. Modul adını yoxlayın. requirements.txt istifadə edin. Virtual environment yoxlayın: which python və ya where python',
    learningTip: 'Python ekosistemində minlərlə modul var. Anaconda mühitində data science modulları (numpy, pandas, matplotlib) hazır gəlir. requirements.txt faylı ilə asılılıqları idarə edin.',
    resources: ['https://pip.pypa.io/en/stable/user_guide/  ', 'https://docs.python.org/3/tutorial/modules.html  ']
  },
  
  RuntimeError: {
    patterns: ['maximum recursion depth exceeded', 'generator raised StopIteration', 'recursion error'],
    causes: [
      'Sonsuz recursion - bazis şərt (base case) yoxdur və ya çatılmır',
      'Generator səhv istifadə - StopIteration manual tutulur',
      'Yaddaş dolması (memory overflow)',
      'Çox dərin recursion (default limit 1000)'
    ],
    fix: 'Rekursiv funksiyada bazis şərt (base case) əlavə edin. Iterativ həll düşünün (loop ilə). Generatorlarda StopIteration tutmayın. sys.setrecursionlimit() ilə limiti artırmaq olar, amma tövsiyə edilmir.',
    learningTip: 'Python recursion limiti 1000-dir. Dərin recursion əvəzinə stack və ya queue istifadə edin. Dinamik proqramlaşdırma (memoization) ilə optimallaşdırın.',
    resources: ['https://docs.python.org/3/library/sys.html#sys.setrecursionlimit  ']
  },
  
  FileNotFoundError: {
    patterns: ['No such file or directory', 'file not found', 'FileNotFoundError'],
    causes: [
      'Fayl mövcud deyil (səhv yol və ya ad)',
      'Relativ yol səhv (./data.txt əvəzinə data.txt)',
      'Fayl başqa qovluqda yerləşir',
      'Fayl adında typo (data.txt əvəzinə date.txt)',
      'Case-sensitive fayl sistemi (Linux-da Data.txt ilə data.txt fərqlidir)'
    ],
    fix: 'Fayl yolunu yoxlayın: os.path.exists("fayl.txt"). Tam yol istifadə edin və ya os.path.join() ilə qovluq birləşdirin. with open() ilə fayl açın.',
    learningTip: 'Fayl ilə işləyərkən həmişə yoxlama aparın. try-except FileNotFoundError ilə tutun. os.listdir() ilə qovluqdakı faylları görün. Context manager (with) istifadə edin.',
    resources: ['https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files  ']
  },
  
  PermissionError: {
    patterns: ['Permission denied', 'Access is denied', 'PermissionError'],
    causes: [
      'Fayla yazmaq icazəsi yoxdur (read-only fayl)',
      'Qovluqda yazmaq icazəsi yoxdur',
      'Fayl başqa proqram tərəfindən açıqdır (kilidlidir)',
      'Admin/root icazəsi tələb olunur'
    ],
    fix: 'Fayl icazələrini yoxlayın: os.access(). Başqa qovluqda yoxlayın. Fayl bağlı olduğuna əmin olun. Administrator icazəsi ilə çalışdırın (əgər lazımdırsa).',
    learningTip: 'Fayl sistemində icazələr vacibdir. Windows-da Administrator, Linux-da sudo ilə çalışdırın. Faylları istifadə etdikdən sonra bağlayın (with konteksti avtomatik bağlayır).',
    resources: ['https://docs.python.org/3/library/os.html#os.access  ']
  }
};

// ============================================
// YARDIMCI FUNKSIYALAR
// ============================================
const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
};

const extractConceptFromQuestion = (question) => {
  if (!question) return 'Ümumi';
  const words = question.split(' ').slice(0, 5).join(' ');
  return words.length > 40 ? words.substring(0, 40) + '...' : words;
};

const calculateRecentAccuracy = (attempts, count = 5) => {
  const recent = attempts.slice(-count);
  if (recent.length === 0) return 0;
  const correct = recent.filter(a => a.isCorrect).length;
  return (correct / recent.length) * 100;
};

const calculateRecentSuccessRate = (attempts, count = 5) => {
  const recent = attempts.slice(-count);
  if (recent.length === 0) return 0;
  const success = recent.filter(a => a.isSuccess).length;
  return (success / recent.length) * 100;
};

const getLastAttemptDate = (quizAttempts, codeAttempts) => {
  const allDates = [
    ...quizAttempts.map(a => a.timestamp),
    ...codeAttempts.map(a => a.timestamp)
  ].filter(Boolean).sort((a, b) => new Date(b) - new Date(a));
  
  return allDates[0] ? new Date(allDates[0]) : null;
};

const calculateTrend = (quizAttempts, codeAttempts) => {
  const allAttempts = [...quizAttempts, ...codeAttempts]
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  
  if (allAttempts.length < 4) return 'neutral';
  
  const firstHalf = allAttempts.slice(0, Math.floor(allAttempts.length / 2));
  const secondHalf = allAttempts.slice(Math.floor(allAttempts.length / 2));
  
  const firstSuccess = firstHalf.filter(a => a.isCorrect || a.isSuccess).length / firstHalf.length;
  const secondSuccess = secondHalf.filter(a => a.isCorrect || a.isSuccess).length / secondHalf.length;
  
  if (secondSuccess > firstSuccess + 0.15) return 'up';
  if (secondSuccess < firstSuccess - 0.15) return 'down';
  return 'neutral';
};

const estimateTimeSpent = (quizAttempts, codeAttempts) => {
  // Quiz: orta 2 dəqiqə, Kod: orta 10 dəqiqə
  return (quizAttempts.length * 2) + (codeAttempts.length * 10);
};

const formatDuration = (minutes) => {
  if (minutes < 60) return `${minutes} dəq`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours} saat ${mins} dəq`;
};

const generateRecommendations = (quizStats, codeStats, topicRequirements, weakConcepts = []) => {
  const recs = [];
  
  // Quiz tövsiyələri
  if (quizStats.accuracy < 50) {
    recs.push({
      type: 'critical',
      icon: '📚',
      title: 'Nəzəriyyəni təkrarlayın',
      description: 'Quiz nəticələri çox aşağıdır. Mövzunun nəzəri hissəsini yenidən oxuyun və video dərslərə baxın.'
    });
  } else if (quizStats.accuracy < 70) {
    recs.push({
      type: 'warning',
      icon: '📝',
      title: 'Quiz suallarını təkrarlayın',
      description: 'Səhv cavabladığınız sualların izahatlarını yazın və konseptləri dərindən öyrənin.'
    });
  }
  
  // Kod tövsiyələri
  if (codeStats.successRate < 40) {
    recs.push({
      type: 'critical',
      icon: '💻',
      title: 'Praktikaya daha çox vaxt ayırın',
      description: 'Kod tapşırıqlarında çətinlik çəkirsiniz. Sadə nümunələrlə başlayın və hər gün minimum 30 dəqiqə praktik edin.'
    });
  } else if (codeStats.successRate < 60) {
    recs.push({
      type: 'warning',
      icon: '🔍',
      title: 'Kod xətalarınızı analiz edin',
      description: 'Səhv etdiyiniz kodları yenidən yazın və hər sətri izah edin.'
    });
  }
  
  // Xəta kateqoriyalarına görə tövsiyələr
  const errorCategories = codeStats.commonErrors.map(e => e.category);
  
  if (errorCategories.includes('SyntaxError') || errorCategories.includes('IndentationError')) {
    recs.push({
      type: 'syntax',
      icon: '🐍',
      title: 'Python sintaksisini möhkəmləndirin',
      description: 'Kod strukturu səhvləri çoxdur. VS Code-da "Format Document" (Shift+Alt+F) istifadə edin və PEP8 standartlarını öyrənin.'
    });
  }
  
  if (errorCategories.includes('NameError')) {
    recs.push({
      type: 'concept',
      icon: '🏷️',
      title: 'Dəyişən adlandırma qaydaları',
      description: 'Dəyişənləri istifadə etmədən əvvəl təyin etdiyinizə əmin olun. Scope (görünürlük) anlayışını öyrənin.'
    });
  }
  
  if (errorCategories.includes('TypeError')) {
    recs.push({
      type: 'concept',
      icon: '🔢',
      title: 'Tip çevirmələri',
      description: 'Dəyişənlərin tiplərinə diqqət yetirin. type() funksiyası ilə tip yoxlaması aparın.'
    });
  }
  
  if (errorCategories.includes('IndexError') || errorCategories.includes('KeyError')) {
    recs.push({
      type: 'concept',
      icon: '📋',
      title: 'Data strukturları ilə iş',
      description: 'List və Dictionary ilə işləyərkən indeks və açarların mövcudluğunu yoxlayın.'
    });
  }
  
  // Zəif konseptlər
  if (weakConcepts.length > 0) {
    recs.push({
      type: 'focus',
      icon: '🎯',
      title: `"${weakConcepts[0]}" mövzusunu təkrarlayın`,
      description: 'Bu mövzuda çətinlik çəkirsiniz. Əlavə mənbələrdən öyrənin.'
    });
  }
  
  // Ümumi tövsiyələr
  if (recs.length === 0) {
    recs.push({
      type: 'success',
      icon: '🚀',
      title: 'Mövzuları daha da dərinləşdirin',
      description: 'Əla nəticə! İndi real layihələr üzərində çalışın və mürəkkəb problemlər həll edin.'
    });
  }
  
  return recs.slice(0, 5);
};

const calculateOverallTrend = (topicAnalysis) => {
  const trends = topicAnalysis.map(t => t.trend);
  const upCount = trends.filter(t => t === 'up').length;
  const downCount = trends.filter(t => t === 'down').length;
  
  if (upCount > downCount) return 'up';
  if (downCount > upCount) return 'down';
  return 'neutral';
};

const calculateAverageLevel = (topicAnalysis) => {
  if (topicAnalysis.length === 0) return LEVELS.BEGINNER;
  
  const scores = topicAnalysis.map(t => t.mastery.score);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  
  if (avg >= 90) return LEVELS.EXPERT;
  if (avg >= 80) return LEVELS.ADVANCED;
  if (avg >= 65) return LEVELS.UPPER_INTERMEDIATE;
  if (avg >= 50) return LEVELS.INTERMEDIATE;
  if (avg >= 35) return LEVELS.ELEMENTARY;
  return LEVELS.BEGINNER;
};

const findStrongestTopic = (topicAnalysis) => {
  if (topicAnalysis.length === 0) return null;
  return topicAnalysis.reduce((max, t) => t.mastery.score > max.mastery.score ? t : max, topicAnalysis[0]);
};

const findWeakestTopic = (topicAnalysis) => {
  if (topicAnalysis.length === 0) return null;
  return topicAnalysis.reduce((min, t) => t.mastery.score < min.mastery.score ? t : min, topicAnalysis[0]);
};

const extractSection = (text, startMarker, endMarker) => {
  const start = text.indexOf(startMarker);
  if (start === -1) return '';
  const end = text.indexOf(endMarker, start + startMarker.length);
  if (end === -1) return text.substring(start + startMarker.length).trim();
  return text.substring(start + startMarker.length, end).trim();
};

const extractList = (text, sectionHeader) => {
  const section = extractSection(text, sectionHeader, '\n\n');
  return section.split('\n')
    .map(line => line.replace(/^[-•*\d.]\s*/, '').trim())
    .filter(line => line.length > 0 && !line.includes('---'));
};

const extractValue = (text, key, delimiter = '\n') => {
  const idx = text.indexOf(key);
  if (idx === -1) return '';
  const start = idx + key.length;
  const end = text.indexOf(delimiter, start);
  if (end === -1) return text.substring(start).trim();
  return text.substring(start, end).trim();
};

const extractWeeklyPlan = (text) => {
  const section = extractSection(text, 'Fərdi Təlim Planı', '---');
  if (!section) return [];
  const weeks = section.match(/Həftə \d+:[^\n]+/g) || [];
  return weeks.map(w => w.replace(/^Həftə \d+:\s*/, '').trim()).filter(w => w.length > 0);
};

// ============================================
// TOPIC MASTERY CALCULATOR - DETAILLI
// ============================================
const calculateTopicMastery = (quizAttempts, codeAttempts, topicRequirements = []) => {
  const quizStats = analyzeQuizPerformance(quizAttempts);
  const codeStats = analyzeCodePerformance(codeAttempts);
  
  // Çəki: Quiz 40%, Kod 60% (praktik daha vacibdir)
  const quizWeight = 0.4;
  const codeWeight = 0.6;
  
  const totalScore = (quizStats.accuracy * quizWeight) + (codeStats.successRate * codeWeight);
  
  // Səviyyə təyini
  let level = LEVELS.BEGINNER;
  if (totalScore >= 95) level = LEVELS.EXPERT;
  else if (totalScore >= 85) level = LEVELS.ADVANCED;
  else if (totalScore >= 70) level = LEVELS.UPPER_INTERMEDIATE;
  else if (totalScore >= 55) level = LEVELS.INTERMEDIATE;
  else if (totalScore >= 40) level = LEVELS.ELEMENTARY;
  
  // Zəif tərəfləri müəyyən et
  const weakPoints = [];
  if (quizStats.accuracy < 60) weakPoints.push('Quiz bilikləri zəifdir');
  if (codeStats.successRate < 50) weakPoints.push('Praktik tətbiq çətinlikləri');
  if (codeStats.commonErrors.length > 0) {
    const topError = codeStats.commonErrors[0];
    weakPoints.push(`Tez-tez ${topError.category} xətası`);
  }
  if (quizStats.weakConcepts.length > 0) {
    weakPoints.push(`"${quizStats.weakConcepts[0]}" konseptində çətinlik`);
  }
  
  // Güclü tərəfləri müəyyən et
  const strongPoints = [];
  if (quizStats.accuracy > 80) strongPoints.push('Nəzəri biliklər güclüdür');
  if (codeStats.successRate > 75) strongPoints.push('Kod yazma bacarığı yaxşıdır');
  if (codeStats.cleanCodeRate > 70) strongPoints.push('Təmiz kod yazır');
  if (quizStats.recentAccuracy > quizStats.accuracy) strongPoints.push('Son vaxtlar irəliləyir');
  
  // Tövsiyələr
  const recommendations = generateRecommendations(quizStats, codeStats, topicRequirements, quizStats.weakConcepts);
  
  return {
    score: Math.round(totalScore),
    level,
    quizAccuracy: Math.round(quizStats.accuracy),
    codeSuccessRate: Math.round(codeStats.successRate),
    attemptsCount: quizAttempts.length + codeAttempts.length,
    quizCount: quizAttempts.length,
    codeCount: codeAttempts.length,
    weakPoints: weakPoints.slice(0, 3),
    strongPoints: strongPoints.slice(0, 3),
    commonErrors: codeStats.commonErrors,
    recommendations,
    lastAttempt: getLastAttemptDate(quizAttempts, codeAttempts),
    trend: calculateTrend(quizAttempts, codeAttempts),
    timeSpent: estimateTimeSpent(quizAttempts, codeAttempts),
    // Əlavə detallar
    quizDetails: quizStats,
    codeDetails: codeStats
  };
};

const analyzeQuizPerformance = (attempts) => {
  if (!attempts || attempts.length === 0) {
    return { 
      accuracy: 0, 
      total: 0, 
      correct: 0, 
      weakConcepts: [],
      recentAccuracy: 0,
      conceptAccuracy: {}
    };
  }
  
  const correct = attempts.filter(a => a.isCorrect).length;
  const accuracy = (correct / attempts.length) * 100;
  
  // Konseptlərə görə analiz
  const conceptStats = {};
  attempts.forEach(a => {
    const concept = extractConceptFromQuestion(a.question);
    if (!conceptStats[concept]) {
      conceptStats[concept] = { total: 0, correct: 0 };
    }
    conceptStats[concept].total++;
    if (a.isCorrect) conceptStats[concept].correct++;
  });
  
  // Zəif konseptlər (60%-dən aşağı)
  const weakConcepts = Object.entries(conceptStats)
    .filter(([_, stats]) => (stats.correct / stats.total) * 100 < 60)
    .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
    .slice(0, 3)
    .map(([concept, _]) => concept);
  
  // Konsept dəqiqliyi
  const conceptAccuracy = {};
  Object.entries(conceptStats).forEach(([concept, stats]) => {
    conceptAccuracy[concept] = Math.round((stats.correct / stats.total) * 100);
  });
  
  return {
    accuracy,
    total: attempts.length,
    correct,
    wrong: attempts.length - correct,
    weakConcepts,
    conceptAccuracy,
    recentAccuracy: calculateRecentAccuracy(attempts),
    attemptsByDate: groupBy(attempts, a => new Date(a.timestamp).toDateString())
  };
};

const analyzeCodePerformance = (attempts) => {
  if (!attempts || attempts.length === 0) {
    return { 
      successRate: 0, 
      total: 0, 
      success: 0, 
      commonErrors: [],
      cleanCodeRate: 0,
      avgAttemptsPerExercise: 0,
      errorBreakdown: {},
      recentSuccessRate: 0
    };
  }
  
  const successful = attempts.filter(a => a.isSuccess).length;
  const successRate = (successful / attempts.length) * 100;
  
  // Xəta təhlili
  const errorFrequency = {};
  const errorBreakdown = {
    syntax: 0,
    logic: 0,
    runtime: 0,
    other: 0
  };
  
  attempts.filter(a => !a.isSuccess && a.error).forEach(a => {
    const category = a.errorCategory || 'Unknown';
    if (!errorFrequency[category]) {
      errorFrequency[category] = { 
        count: 0, 
        examples: [],
        timestamps: []
      };
    }
    errorFrequency[category].count++;
    errorFrequency[category].timestamps.push(a.timestamp);
    
    if (errorFrequency[category].examples.length < 3) {
      errorFrequency[category].examples.push({
        error: a.error.substring(0, 150),
        code: a.code ? a.code.substring(0, 200) : '',
        timestamp: a.timestamp
      });
    }
    
    // Xəta tipinə görə kateqorizasiya
    if (['SyntaxError', 'IndentationError'].includes(category)) {
      errorBreakdown.syntax++;
    } else if (['TypeError', 'ValueError', 'NameError'].includes(category)) {
      errorBreakdown.logic++;
    } else if (['RuntimeError', 'ZeroDivisionError', 'IndexError', 'KeyError'].includes(category)) {
      errorBreakdown.runtime++;
    } else {
      errorBreakdown.other++;
    }
  });
  
  const commonErrors = Object.entries(errorFrequency)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 5)
    .map(([category, data]) => ({
      category,
      count: data.count,
      percentage: Math.round((data.count / attempts.length) * 100),
      examples: data.examples,
      explanation: ERROR_PATTERNS[category] || {
        causes: ['Naməlum səbəb'],
        fix: 'Xətanı araşdırın',
        learningTip: 'Dokumentasiyaya baxın'
      },
      lastOccurred: data.timestamps.sort().reverse()[0]
    }));
  
  // Təmiz kod indikatorları
  const cleanCodeIndicators = attempts.filter(a => {
    if (!a.code) return false;
    const hasComments = a.code.includes('#') || a.code.includes('"""');
    const properNaming = /[a-z_][a-z0-9_]*\s*=/.test(a.code) && !/[A-Z][a-zA-Z0-9]*\s*=/.test(a.code);
    const notTooLong = a.code.split('\n').length < 50;
    const hasFunctions = /def\s+\w+/.test(a.code);
    return (hasComments || properNaming) && notTooLong;
  }).length;
  
  const cleanCodeRate = (cleanCodeIndicators / attempts.length) * 100;
  
  // Tapşırıq başına orta cəhd
  const exerciseGroups = groupBy(attempts, 'exerciseTitle');
  const avgAttemptsPerExercise = Object.keys(exerciseGroups).length > 0 
    ? attempts.length / Object.keys(exerciseGroups).length 
    : 0;
  
  return {
    successRate,
    total: attempts.length,
    success: successful,
    failed: attempts.length - successful,
    commonErrors,
    cleanCodeRate: Math.round(cleanCodeRate),
    avgAttemptsPerExercise: Math.round(avgAttemptsPerExercise * 10) / 10,
    recentSuccessRate: calculateRecentSuccessRate(attempts),
    errorBreakdown,
    exerciseGroups
  };
};

// ============================================
// AI PROMPT GENERATOR - DETAILLI
// ============================================
const generateAIPrompt = (userData, topics, currentMonth) => {
  const { quizAttempts, codeAttempts, progressStats, topicAnalysis } = userData;
  
  let prompt = `SƏN PEŞƏKAR PYTHON MÜƏLLİMİSƏN. TƏLƏBƏNİN TƏHLİLİNİ APAR VƏ FƏRDİ TƏLİM PLANı YARAT.

=== TƏLƏBƏ MƏLUMATLARI ===
Kurs: Python AI (Ay ${currentMonth})
Tamamlanan mövzular: ${progressStats.completedTopics}/${progressStats.totalTopics} (${progressStats.percentComplete}%)
Ümumi fəaliyyət: ${quizAttempts.length} quiz, ${codeAttempts.length} kod tapşırığı
Orta bal: ${progressStats.averageScore}/100

`;

  // Hər mövzu üçün detallı analiz
  prompt += `\n=== MÖVZU BAZLI DETALLI TƏHLİL ===\n`;
  
  topicAnalysis.forEach((topic, idx) => {
    const topicQuiz = topic.quizAttempts;
    const topicCode = topic.codeAttempts;
    const mastery = topic.mastery;
    
    prompt += `
📚 MÖVZU ${topic.topicId}: ${topic.title}
• Səviyyə: ${mastery.level.label} (${mastery.score}/100) ${mastery.level.icon}
• Quiz uğuru: ${mastery.quizAccuracy}% (${topicQuiz.length} cəhd, ${mastery.quizDetails.correct} düzgün, ${mastery.quizDetails.wrong} səhv)
• Kod uğuru: ${mastery.codeSuccessRate}% (${topicCode.length} cəhd, ${mastery.codeDetails.success} uğurlu, ${mastery.codeDetails.failed} uğursuz)
• Trend: ${mastery.trend === 'up' ? 'Yüksəlir 📈' : mastery.trend === 'down' ? 'Enir 📉' : 'Stabil ➡️'}
• Zəif tərəflər: ${mastery.weakPoints.join(', ') || 'Yoxdur'}
• Güclü tərəflər: ${mastery.strongPoints.join(', ') || 'Müəyyən edilməyib'}
• Sərf olunan vaxt: ~${formatDuration(mastery.timeSpent)}

`;
    
    // Quiz detalları
    if (topicQuiz.length > 0) {
      prompt += `  📝 QUIZ ANALİZİ:\n`;
      prompt += `  • Ümumi dəqiqlik: ${mastery.quizDetails.accuracy.toFixed(1)}%\n`;
      prompt += `  • Son 5 cəhdin dəqiqliyi: ${mastery.quizDetails.recentAccuracy.toFixed(1)}%\n`;
      
      if (mastery.quizDetails.weakConcepts.length > 0) {
        prompt += `  • Zəif konseptlər: ${mastery.quizDetails.weakConcepts.join(', ')}\n`;
      }
      
      // Son səhv cavablar
      const wrongAnswers = topicQuiz.filter(a => !a.isCorrect).slice(-3);
      if (wrongAnswers.length > 0) {
        prompt += `  • Son səhv cavablar:\n`;
        wrongAnswers.forEach((q, i) => {
          prompt += `    ${i+1}. Sual: ${q.question?.substring(0, 80)}...\n`;
          prompt += `       Cavab: ${q.userAnswer} (Düzgün: ${q.options?.[q.correctAnswer]})\n`;
        });
      }
      prompt += `\n`;
    }
    
    // Kod detalları
    if (topicCode.length > 0) {
      prompt += `  💻 KOD ANALİZİ:\n`;
      prompt += `  • Uğur nisbəti: ${mastery.codeDetails.successRate.toFixed(1)}%\n`;
      prompt += `  • Təmiz kod göstəricisi: ${mastery.codeDetails.cleanCodeRate}%\n`;
      prompt += `  • Tapşırıq başına orta cəhd: ${mastery.codeDetails.avgAttemptsPerExercise}\n`;
      
      // Xəta kateqoriyaları
      if (mastery.codeDetails.commonErrors.length > 0) {
        prompt += `  • Xəta kateqoriyaları:\n`;
        mastery.codeDetails.commonErrors.forEach(err => {
          prompt += `    - ${err.category}: ${err.count} dəfə (${err.percentage}%)\n`;
          if (err.explanation) {
            prompt += `      Səbəb: ${err.explanation.causes.slice(0, 2).join('; ')}\n`;
          }
        });
      }
      
      // Son kod cəhdləri
      const recentCode = topicCode.slice(-2);
      if (recentCode.length > 0) {
        prompt += `  • Son kod cəhdləri:\n`;
        recentCode.forEach((c, i) => {
          prompt += `    ${i+1}. ${c.isSuccess ? '✅' : '❌'} ${c.exerciseTitle || 'Tapşırıq'} (${new Date(c.timestamp).toLocaleDateString()})\n`;
          if (!c.isSuccess && c.error) {
            prompt += `       Xəta: ${c.error.substring(0, 100)}\n`;
          }
        });
      }
      prompt += `\n`;
    }
    
    prompt += `---\n`;
  });

  // Ümumi trend analizi
  const overallTrend = calculateOverallTrend(topicAnalysis);
  const strongest = findStrongestTopic(topicAnalysis);
  const weakest = findWeakestTopic(topicAnalysis);
  
  prompt += `
=== ÜMUMI TREND ANALIZI ===
• Ümumi irəliləyiş: ${overallTrend === 'up' ? 'Yüksəlir 📈' : overallTrend === 'down' ? 'Enir 📉' : 'Stabil ➡️'}
• Orta səviyyə: ${calculateAverageLevel(topicAnalysis).label}
• Ən güclü mövzu: #${strongest?.topicId} ${strongest?.title} (${strongest?.mastery.score}/100)
• Ən zəif mövzu: #${weakest?.topicId} ${weakest?.title} (${weakest?.mastery.score}/100)
• Xəta statistikası:
`;

  // Ümumi xəta statistikası
  const allErrors = {};
  topicAnalysis.forEach(t => {
    t.mastery.commonErrors.forEach(e => {
      allErrors[e.category] = (allErrors[e.category] || 0) + e.count;
    });
  });
  
  Object.entries(allErrors)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([cat, count]) => {
      prompt += `  - ${cat}: ${count} dəfə\n`;
    });

  prompt += `
=== SƏNƏ TƏLƏBLƏR (VACİB) ===
1. Hər mövzu üçün KONKRET və FƏRDİ izahat yaz:
   - Nəyi səhv edir? (konseptual səhv və ya diqqətsizlik?)
   - Niyə səhv edir? (səbəbini detallı izah et)
   - Necə düzəltməli? (addım-addım təlimat)

2. Səhv kateqoriyalarına uyğun TÖVSİYƏLƏR:
   - SyntaxError/IndentationError → Kod strukturunu, VS Code istifadəsini
   - NameError → Dəyişən adlandırma, scope anlayışı
   - TypeError → Tip yoxlamaları, type() funksiyası
   - IndexError/KeyError → Data strukturları ilə iş
   - ValueError → Input validasiyası, try-except
   - AttributeError → Obyekt yönümlü proqramlaşdırma
   - ZeroDivisionError → Şərt yoxlamaları
   - ImportError → Modul idarəetməsi, virtual environment

3. ÜMUMI AYLIQ HESABAT (Markdown formatında):
   ## 📊 Ay ${currentMonth} Ümumi Təhlili
   ### Ümumi Səviyyə: [Səviyyə adı və emoji]
   ### İrəliləyiş: [Faiz]% 
   
   #### ✅ Nələr Yaxşıdır (3-4 maddə):
   - [Müsbət cəhət 1]
   - [Müsbət cəhət 2]
   
   #### ⚠️ Diqqət Yetirilməli (3-4 maddə):
   - [İnkişaf edilməli sahə 1]
   - [İnkişaf edilməli sahə 2]
   
   #### 🎯 Fərdi Təlim Planı (4 həftə):
   1. Həftə 1: [Konkret mövzu və məqsəd]
   2. Həftə 2: [Konkret mövzu və məqsəd]
   3. Həftə 3: [Konkret mövzu və məqsəd]
   4. Həftə 4: [Konkret mövzu və məqsəd]

4. Hər zəif mövzu üçün "MINI DƏRS" formatında izahat:
   ### Mini Dərs: [Mövzu adı]
   **Problem:** [Tələbənin çətinlik çəkdiyi nöqtə]
   
   **İzahat:** [Sadə, gündəlik həyatdan nümunə ilə izah]
   
   **Kod Nümunəsi (Səhv):**
   \`\`\`python
   [Səhv kod]
   \`\`\`
   
   **Kod Nümunəsi (Düzgün):**
   \`\`\`python
   [Düzgün kod]
   \`\`\`
   
   **Praktik Məsləhət:** [Tətbiq tövsiyəsi]

5. MOTIVASIYA mesajı əlavə et - tələbəni ruhlandır.

Cavab Azərbaycanca olsun. Sıfırdan başlayanlar üçün sadə, aydın dil istifadə et. Texniki terminləri izah et.`;

  return prompt;
};

// ============================================
// AI RESPONSE PARSER
// ============================================
const parseAIResponse = (response, topicAnalysis) => {
  const sections = {
    topicAnalyses: [],
    monthlyReport: null,
    miniLessons: [],
    motivation: '',
    rawResponse: response
  };
  
  // Mövzu bloklarını ayır
  const topicBlocks = response.split(/📚\s*MÖVZU\s*\d+:|###\s*Mini Dərs:/i);
  
  topicBlocks.forEach((block, idx) => {
    if (idx === 0 || !block.trim()) return;
    
    const lines = block.split('\n').filter(l => l.trim());
    const titleMatch = block.match(/^([^\n]+)/);
    const title = titleMatch ? titleMatch[1].trim() : `Mövzu ${idx}`;
    
    const analysis = {
      title,
      conceptualErrors: extractSection(block, 'Konseptual Səhv', 'Praktiki Səhv') || 
                       extractSection(block, 'Problem:', 'İzahat:'),
      practicalErrors: extractSection(block, 'Praktiki Səhv', 'Tövsiyə') ||
                      extractSection(block, 'Səhv kod', 'Düzgün kod'),
      recommendations: extractList(block, 'Tövsiyə') || extractList(block, 'Praktik Məsləhət'),
      miniLesson: extractSection(block, 'MINI DƏRS', '---') || 
                 extractSection(block, 'İzahat:', 'Kod Nümunəsi'),
      codeExampleWrong: extractSection(block, 'Səhv kod', 'Düzgün kod'),
      codeExampleCorrect: extractSection(block, 'Düzgün kod', 'Praktik Məsləhət')
    };
    
    sections.topicAnalyses.push(analysis);
  });
  
  // Aylıq hesabat
  sections.monthlyReport = {
    overallLevel: extractValue(response, 'Ümumi Səviyyə:', '\n') || extractValue(response, 'Səviyyə:', '\n'),
    progressPercent: extractValue(response, 'İrəliləyiş:', '%') || extractValue(response, 'Faiz:', '%'),
    positives: extractList(response, '✅ Nələr Yaxşıdır') || extractList(response, 'Nələr Yaxşıdır'),
    negatives: extractList(response, '⚠️ Diqqət Yetirilməli') || extractList(response, 'Diqqət Yetirilməli'),
    weeklyPlan: extractWeeklyPlan(response) || extractList(response, 'Həftə')
  };
  
  // Motivasiya
  const motivationMatch = response.match(/(?:TƏŞƏKKÜR|MOTIVASIYA|🎉|💪).*?(?=\n\n|$)/is);
  if (motivationMatch) {
    sections.motivation = motivationMatch[0].trim();
  }
  
  return sections;
};

// ============================================
// USE AI MENTOR HOOK - DÜZƏLDİLMİŞ EXPORT
// ============================================
const useAIMentor = () => {
  const saveQuizAttempt = useCallback(async (userId, courseId, topicId, questionIndex, userAnswer, isCorrect, questionData) => {
    try {
      const sessionRef = doc(db, 'users', userId, 'sessions', courseId);
      
      const attempt = {
        type: 'quiz',
        topicId: parseInt(topicId),
        questionIndex: parseInt(questionIndex),
        userAnswer: userAnswer || 'Cavab verilməyib',
        isCorrect: Boolean(isCorrect),
        question: questionData?.question || '',
        options: questionData?.options || [],
        correctAnswer: questionData?.correctAnswer,
        concept: extractConceptFromQuestion(questionData?.question),
        timestamp: new Date().toISOString()
      };
      
      // Mövcud verini al
      const docSnap = await getDoc(sessionRef);
      const currentData = docSnap.exists() ? docSnap.data() : {};
      const quizAttempts = currentData.quizAttempts || [];
      
      // Yeni cəhdi əlavə et
      const updatedAttempts = [...quizAttempts, attempt];
      
      await setDoc(sessionRef, {
        ...currentData,
        quizAttempts: updatedAttempts,
        lastUpdated: serverTimestamp(),
        lastQuizAttempt: serverTimestamp()
      }, { merge: true });
      
      console.log('✅ Quiz attempt saved:', attempt);
      return true;
    } catch (error) {
      console.error('❌ Quiz attempt kaydetme hatası:', error);
      throw error;
    }
  }, []);

  const saveCodeAttempt = useCallback(async (userId, courseId, topicId, code, output, error, isSuccess, exerciseData) => {
    try {
      const sessionRef = doc(db, 'users', userId, 'sessions', courseId);
      
      // Xəta kateqoriyasını müəyyən et
      let errorCategory = null;
      let errorType = 'unknown';
      
      if (error) {
        const errorLower = error.toLowerCase();
        for (const [category, data] of Object.entries(ERROR_PATTERNS)) {
          if (data.patterns.some(pattern => 
            new RegExp(pattern, 'i').test(errorLower)
          )) {
            errorCategory = category;
            break;
          }
        }
        if (!errorCategory) errorCategory = 'UnknownError';
        
        // Xəta tipini təsnif et
        if (['SyntaxError', 'IndentationError'].includes(errorCategory)) {
          errorType = 'syntax';
        } else if (['TypeError', 'ValueError', 'NameError'].includes(errorCategory)) {
          errorType = 'logic';
        } else if (['RuntimeError', 'ZeroDivisionError', 'IndexError', 'KeyError'].includes(errorCategory)) {
          errorType = 'runtime';
        } else {
          errorType = 'other';
        }
      }

      const attempt = {
        type: 'code',
        topicId: parseInt(topicId),
        code: code || '',
        output: output || '',
        error: error || null,
        errorCategory: errorCategory,
        errorType: errorType,
        isSuccess: Boolean(isSuccess),
        exerciseTitle: exerciseData?.title || 'Naməlum tapşırıq',
        requirements: exerciseData?.requirements || [],
        codeLength: code ? code.length : 0,
        hasComments: code ? (code.includes('#') || code.includes('"""')) : false,
        timestamp: new Date().toISOString()
      };
      
      // Mövcud verini al
      const docSnap = await getDoc(sessionRef);
      const currentData = docSnap.exists() ? docSnap.data() : {};
      const codeAttempts = currentData.codeAttempts || [];
      
      // Yeni cəhdi əlavə et
      const updatedAttempts = [...codeAttempts, attempt];
      
      await setDoc(sessionRef, {
        ...currentData,
        codeAttempts: updatedAttempts,
        lastUpdated: serverTimestamp(),
        lastCodeAttempt: serverTimestamp()
      }, { merge: true });
      
      console.log('✅ Code attempt saved:', attempt);
      return true;
    } catch (err) {
      console.error('❌ Code attempt kaydetme hatası:', err);
      throw err;
    }
  }, []);

  // Keçmiş cəhdləri yükləmək üçün funksiya
  const loadAttempts = useCallback(async (userId, courseId) => {
    try {
      const sessionRef = doc(db, 'users', userId, 'sessions', courseId);
      const docSnap = await getDoc(sessionRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          quizAttempts: data.quizAttempts || [],
          codeAttempts: data.codeAttempts || [],
          lastUpdated: data.lastUpdated?.toDate() || null
        };
      }
      
      return { quizAttempts: [], codeAttempts: [], lastUpdated: null };
    } catch (error) {
      console.error('❌ Attempts yükləmə xətası:', error);
      throw error;
    }
  }, []);

  return {
    saveQuizAttempt,
    saveCodeAttempt,
    loadAttempts
  };
};

// ============================================
// ANA KOMPONENT - AI ANALYSIS
// ============================================
const AIAnalysis = ({ user, courseId, currentTopic, topics, isActivated, currentMonth = 1 }) => {
  const [sessionData, setSessionData] = useState({
    quizAttempts: [],
    codeAttempts: [],
    totalAttempts: 0
  });
  
  const [analysis, setAnalysis] = useState({
    loading: false,
    error: null,
    lastUpdated: null,
    hasAnalysis: false,
    data: null
  });
  
  const [viewMode, setViewMode] = useState('overview');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [showResetModal, setShowResetModal] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(true);
  
  const unsubscribeRef = useRef(null);

  // Real-time data subscription
  useEffect(() => {
    if (!user || !courseId) {
      setIsDataLoading(false);
      return;
    }

    setIsDataLoading(true);
    const sessionRef = doc(db, 'users', user.uid, 'sessions', courseId);
    
    unsubscribeRef.current = onSnapshot(sessionRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const quiz = data.quizAttempts || [];
        const code = data.codeAttempts || [];
        
        setSessionData({
          quizAttempts: quiz,
          codeAttempts: code,
          totalAttempts: quiz.length + code.length
        });
      } else {
        setSessionData({
          quizAttempts: [],
          codeAttempts: [],
          totalAttempts: 0
        });
      }
      setIsDataLoading(false);
    }, (error) => {
      console.error('Snapshot error:', error);
      setIsDataLoading(false);
    });

    loadSavedAnalysis();
    
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [user, courseId]);

  // Hesablanmış analiz
  const calculatedAnalysis = useMemo(() => {
    if (sessionData.totalAttempts === 0) return null;
    
    const topicAnalysis = topics.map((topic, idx) => {
      const topicId = idx + 1;
      const topicQuiz = sessionData.quizAttempts.filter(a => a.topicId === topicId);
      const topicCode = sessionData.codeAttempts.filter(a => a.topicId === topicId);
      
      // Əgər mövzu üzrə heç bir cəhd yoxdursa, null qaytar
      if (topicQuiz.length === 0 && topicCode.length === 0) return null;
      
      return {
        topicId,
        title: topic.title,
        mastery: calculateTopicMastery(topicQuiz, topicCode, topic.requirements),
        quizAttempts: topicQuiz,
        codeAttempts: topicCode
      };
    }).filter(Boolean); // null dəyərləri filter et
    
    if (topicAnalysis.length === 0) return null;
    
    const completedTopics = topicAnalysis.length;
    const totalTopics = topics.length;
    const avgScore = topicAnalysis.reduce((sum, t) => sum + t.mastery.score, 0) / topicAnalysis.length;
    
    return {
      topicAnalysis,
      progressStats: {
        totalTopics,
        completedTopics,
        percentComplete: Math.round((completedTopics / totalTopics) * 100),
        totalQuiz: sessionData.quizAttempts.length,
        totalCode: sessionData.codeAttempts.length,
        averageScore: Math.round(avgScore),
        strongestTopic: findStrongestTopic(topicAnalysis),
        weakestTopic: findWeakestTopic(topicAnalysis),
        overallTrend: calculateOverallTrend(topicAnalysis),
        totalTimeSpent: formatDuration(topicAnalysis.reduce((sum, t) => sum + t.mastery.timeSpent, 0))
      }
    };
  }, [sessionData, topics]);

  // AI Analizi generasiya et
  const generateAnalysis = useCallback(async () => {
    if (!calculatedAnalysis || calculatedAnalysis.topicAnalysis.length === 0) {
      setAnalysis(prev => ({ 
        ...prev, 
        error: 'Kifayət qədər məlumat yoxdur. Əvvəlcə quiz və kod tapşırıqlarını tamamlayın.' 
      }));
      return;
    }

    setAnalysis(prev => ({ ...prev, loading: true, error: null }));

    try {
      const prompt = generateAIPrompt(
        { ...sessionData, ...calculatedAnalysis },
        topics,
        currentMonth
      );

      // Prompt uzunluğunu yoxla
      if (prompt.length > CONFIG.MAX_INPUT_TOKENS * 4) {
        console.warn('⚠️ Prompt çox uzundur, qısaldılır...');
      }

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
              content: 'Sən peşəkar Python müəllimisən. Təhlil apararkən: 1) Hər səhvə görə konkret səbəb göstər, 2) Səviyyələri reallığa uyğun qiymətləndir, 3) Fərdi tövsiyələr ver, 4) Sadə, aydın dil istifadə et, 5) Kod nümunələri ilə izah et.'
            },
            { 
              role: 'user', 
              content: prompt.substring(0, CONFIG.MAX_INPUT_TOKENS * 4) 
            }
          ],
          temperature: 0.3,
          max_tokens: CONFIG.MAX_OUTPUT_TOKENS,
          top_p: 0.9
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API xətası: ${response.status} - ${errorData.error?.message || 'Bilinməyən xəta'}`);
      }

      const result = await response.json();
      const aiText = result.choices[0].message.content;
      
      const parsedData = parseAIResponse(aiText, calculatedAnalysis.topicAnalysis);
      
      const finalAnalysis = {
        ...calculatedAnalysis,
        aiInsights: parsedData,
        generatedAt: new Date().toISOString(),
        promptTokens: Math.round(prompt.length / 4),
        responseTokens: Math.round(aiText.length / 4),
        aiModel: 'llama-3.3-70b-versatile'
      };

      setAnalysis({
        loading: false,
        error: null,
        lastUpdated: new Date(),
        hasAnalysis: true,
        data: finalAnalysis
      });

      await saveAnalysis(finalAnalysis);
      
    } catch (error) {
      console.error('❌ AI Analysis error:', error);
      setAnalysis(prev => ({
        ...prev,
        loading: false,
        error: error.message || 'Təhlil apararkən xəta baş verdi. Yenidən cəhd edin.'
      }));
    }
  }, [calculatedAnalysis, sessionData, topics, currentMonth]);

  // Saxlanmış analizi yüklə
  const loadSavedAnalysis = async () => {
    if (!user || !courseId) return;
    try {
      const analysisRef = doc(db, 'users', user.uid, 'aiAnalysis', courseId);
      const snap = await getDoc(analysisRef);
      if (snap.exists()) {
        const data = snap.data();
        setAnalysis({
          loading: false,
          error: null,
          lastUpdated: data.generatedAt?.toDate() || new Date(data.generatedAt),
          hasAnalysis: true,
          data: data
        });
      }
    } catch (err) {
      console.error('❌ Keçmiş təhlil yüklənmədi:', err);
    }
  };

  // Analizi saxla
  const saveAnalysis = async (data) => {
    try {
      const analysisRef = doc(db, 'users', user.uid, 'aiAnalysis', courseId);
      await setDoc(analysisRef, {
        ...data,
        savedAt: serverTimestamp()
      });
      console.log('✅ Analysis saved to Firestore');
    } catch (err) {
      console.error('❌ Təhlil saxlanmadı:', err);
    }
  };

  // Analizi sıfırla
  const resetAnalysis = async () => {
    if (!user || !courseId) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'aiAnalysis', courseId));
      setAnalysis({
        loading: false,
        error: null,
        lastUpdated: null,
        hasAnalysis: false,
        data: null
      });
      setShowResetModal(false);
      console.log('✅ Analysis reset');
    } catch (err) {
      console.error('❌ Sıfırlanarkən xəta:', err);
      alert('Sıfırlanarkən xəta baş verdi');
    }
  };

  // Bölməni aç/bağla
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Header render
  const renderHeader = () => (
    <header className="ai-header">
      <div className="header-brand">
        <div className="brand-icon">
          <BrainCircuit size={32} />
        </div>
        <div className="brand-text">
          <h1>🤖 AI Mentor Pro</h1>
          <p>Fərdi Təlim və Təhlil Sistemi</p>
        </div>
      </div>
      
      <div className="header-actions">
        {analysis.hasAnalysis && (
          <button className="btn-secondary" onClick={() => setShowResetModal(true)}>
            <RotateCcw size={18} />
            <span>Sıfırla</span>
          </button>
        )}
        
        <button 
          className="btn-primary"
          onClick={generateAnalysis}
          disabled={analysis.loading || sessionData.totalAttempts < CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS}
          title={sessionData.totalAttempts < CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS ? 
            `Minimum ${CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS} cəhd tələb olunur (${sessionData.totalAttempts}/${CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS})` : 
            'AI Təhlil Et'}
        >
          {analysis.loading ? (
            <>
              <Loader2 className="spin" size={20} />
              <span>Təhlil edilir...</span>
            </>
          ) : (
            <>
              <Sparkles size={20} />
              <span>{analysis.hasAnalysis ? 'Yenilə' : 'AI Təhlil Et'}</span>
            </>
          )}
        </button>
      </div>
    </header>
  );

  // Ümumi irəliləyiş render
  const renderProgressOverview = () => {
    const stats = analysis.data?.progressStats || calculatedAnalysis?.progressStats;
    if (!stats) return null;

    const avgLevel = calculateAverageLevel(calculatedAnalysis?.topicAnalysis || []);

    return (
      <div className="progress-overview">
        <div className="progress-card main">
          <div className="progress-header">
            <GraduationCap size={24} />
            <div>
              <h3>Ümumi İrəliləyiş</h3>
              <p className="text-muted">Ay {currentMonth} • {stats.completedTopics} mövzu tamamlanıb • {stats.totalTimeSpent}</p>
            </div>
          </div>
          
          <div className="progress-stats-grid">
            <div className="stat-item">
              <div className="stat-value">{stats.percentComplete}%</div>
              <div className="stat-label">Kurs Tamamlanma</div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${stats.percentComplete}%` }}
                />
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value" style={{ color: avgLevel.color }}>{avgLevel.icon} {stats.averageScore}</div>
              <div className="stat-label">Orta Bal</div>
              <div className={`trend-indicator ${stats.averageScore > 70 ? 'up' : stats.averageScore < 50 ? 'down' : 'neutral'}`}>
                {stats.averageScore > 70 ? <TrendingUp size={16} /> : stats.averageScore < 50 ? <TrendingDown size={16} /> : <Activity size={16} />}
              </div>
              <span className="level-badge-small" style={{ background: avgLevel.bg, color: avgLevel.color }}>
                {avgLevel.label}
              </span>
            </div>
            
            <div className="stat-item">
              <div className="stat-value">{stats.totalQuiz + stats.totalCode}</div>
              <div className="stat-label">Ümumi Cəhd</div>
              <div className="stat-breakdown">
                <span className="quiz-count">{stats.totalQuiz} quiz</span>
                <span className="code-count">{stats.totalCode} kod</span>
              </div>
            </div>
          </div>
        </div>

        <div className="strength-weakness-grid">
          {stats.strongestTopic && (
            <div className="sw-card strength">
              <div className="sw-header">
                <Star size={20} />
                <span>Ən Güclü Mövzu</span>
              </div>
              <div className="sw-content">
                <h4>#{stats.strongestTopic.topicId} {stats.strongestTopic.title}</h4>
                <div className="sw-score" style={{ color: stats.strongestTopic.mastery.level.color }}>
                  {stats.strongestTopic.mastery.level.icon} {stats.strongestTopic.mastery.score}/100
                </div>
                <p>{stats.strongestTopic.mastery.strongPoints[0] || 'Yaxşı performans'}</p>
                <div className="sw-details">
                  <span>Quiz: {stats.strongestTopic.mastery.quizAccuracy}%</span>
                  <span>Kod: {stats.strongestTopic.mastery.codeSuccessRate}%</span>
                </div>
              </div>
            </div>
          )}
          
          {stats.weakestTopic && stats.weakestTopic.mastery.score < 70 && (
            <div className="sw-card weakness">
              <div className="sw-header">
                <AlertTriangle size={20} />
                <span>Diqqət Yetirilməli</span>
              </div>
              <div className="sw-content">
                <h4>#{stats.weakestTopic.topicId} {stats.weakestTopic.title}</h4>
                <div className="sw-score" style={{ color: stats.weakestTopic.mastery.level.color }}>
                  {stats.weakestTopic.mastery.level.icon} {stats.weakestTopic.mastery.score}/100
                </div>
                <p>{stats.weakestTopic.mastery.weakPoints[0] || 'Təkmilləşmə lazımdır'}</p>
                <div className="sw-details">
                  <span>Quiz: {stats.weakestTopic.mastery.quizAccuracy}%</span>
                  <span>Kod: {stats.weakestTopic.mastery.codeSuccessRate}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Mövzu detay kartı render
  const renderTopicDetailCard = (topic) => {
    const isExpanded = expandedSections[`topic-${topic.topicId}`];
    const levelInfo = topic.mastery.level;
    const hasErrors = topic.mastery.commonErrors.length > 0;
    
    return (
      <div 
        key={topic.topicId} 
        className={`topic-detail-card ${isExpanded ? 'expanded' : ''}`}
        style={{ borderLeftColor: levelInfo.color }}
      >
        <div 
          className="topic-card-header"
          onClick={() => toggleSection(`topic-${topic.topicId}`)}
        >
          <div className="topic-main-info">
            <div className="topic-number-badge" style={{ background: levelInfo.color }}>
              {topic.topicId}
            </div>
            <div className="topic-title-section">
              <h4>{topic.title}</h4>
              <div className="topic-badges">
                <span className="level-badge" style={{ background: levelInfo.bg, color: levelInfo.color }}>
                  {levelInfo.icon} {levelInfo.label}
                </span>
                <span className="score-badge">{topic.mastery.score}/100</span>
                {hasErrors && <span className="error-badge"><Bug size={12} /> {topic.mastery.commonErrors.length} xəta</span>}
              </div>
            </div>
          </div>
          
          <div className="topic-quick-stats">
            <div className="quick-stat" title="Quiz dəqiqliyi">
              <FileQuestion size={14} />
              <span>{topic.mastery.quizAccuracy}%</span>
            </div>
            <div className="quick-stat" title="Kod uğuru">
              <Terminal size={14} />
              <span>{topic.mastery.codeSuccessRate}%</span>
            </div>
            <div className={`trend-mini ${topic.mastery.trend}`}>
              {topic.mastery.trend === 'up' ? <TrendingUp size={14} /> : 
               topic.mastery.trend === 'down' ? <TrendingDown size={14} /> : 
               <Activity size={14} />}
            </div>
            <div className="expand-icon">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="topic-expanded-content">
            {/* Tövsiyələr bölməsi */}
            {topic.mastery.recommendations.length > 0 && (
              <div className="recommendations-section">
                <h5 className="section-subtitle">
                  <Lightbulb size={16} />
                  Fərdi Tövsiyələr
                </h5>
                <div className="recommendation-list">
                  {topic.mastery.recommendations.map((rec, idx) => (
                    <div key={idx} className={`recommendation-item ${rec.type}`}>
                      <span className="rec-icon">{rec.icon}</span>
                      <div className="rec-content">
                        <strong>{rec.title}</strong>
                        <p>{rec.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Xəta təhlili */}
            {hasErrors && (
              <div className="error-analysis-section">
                <h5 className="section-subtitle">
                  <Bug size={16} />
                  Səhv Təhlili və Təlimat
                </h5>
                
                {topic.mastery.commonErrors.map((err, idx) => (
                  <div key={idx} className="error-detail-card">
                    <div className="error-header">
                      <span className="error-category" style={{ 
                        background: err.explanation ? '#fef2f2' : '#f3f4f6',
                        color: err.explanation ? '#dc2626' : '#6b7280'
                      }}>
                        {err.category}
                      </span>
                      <span className="error-frequency">{err.count} dəfə • {err.percentage}%</span>
                      {err.lastOccurred && (
                        <span className="error-date">
                          Son: {new Date(err.lastOccurred).toLocaleDateString('az-AZ')}
                        </span>
                      )}
                    </div>
                    
                    {err.explanation && (
                      <div className="error-explanation">
                        <div className="explanation-block">
                          <h6>🎯 Səbəblər:</h6>
                          <ul>
                            {err.explanation.causes.map((cause, i) => (
                              <li key={i}>{cause}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="explanation-block highlight">
                          <h6>✅ Düzəltmə:</h6>
                          <p>{err.explanation.fix}</p>
                        </div>
                        
                        <div className="explanation-block tip">
                          <h6>💡 Öyrənmə Tövsiyəsi:</h6>
                          <p>{err.explanation.learningTip}</p>
                        </div>

                        {err.explanation.resources && (
                          <div className="explanation-block resources">
                            <h6>📚 Faydalı Resurslar:</h6>
                            <ul>
                              {err.explanation.resources.map((res, i) => (
                                <li key={i}><a href={res} target="_blank" rel="noopener noreferrer">{res}</a></li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {err.examples.length > 0 && (
                      <div className="error-examples">
                        <h6>📝 Xəta Nümunələri:</h6>
                        {err.examples.map((ex, i) => (
                          <div key={i} className="error-example-item">
                            <code className="error-code-snippet">{ex.error}</code>
                            {ex.code && (
                              <pre className="context-code">{ex.code}</pre>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Güclü və zəif tərəflər */}
            <div className="strength-weakness-detail">
              {topic.mastery.strongPoints.length > 0 && (
                <div className="sw-detail-section positive">
                  <h6><CheckCircle2 size={14} /> Güclü Tərəflər</h6>
                  <ul>
                    {topic.mastery.strongPoints.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              )}
              
              {topic.mastery.weakPoints.length > 0 && (
                <div className="sw-detail-section negative">
                  <h6><XCircle size={14} /> İnkişaf Etməli Sahələr</h6>
                  <ul>
                    {topic.mastery.weakPoints.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              )}
            </div>

            {/* Son fəaliyyət */}
            <div className="attempts-history">
              <h5 className="section-subtitle">
                <Clock3 size={16} />
                Son Fəaliyyət ({formatDuration(topic.mastery.timeSpent)})
              </h5>
              
              <div className="history-tabs">
                {topic.quizAttempts.length > 0 && (
                  <div className="history-group">
                    <h6>📝 Quiz Cəhdləri ({topic.quizAttempts.length})</h6>
                    {topic.quizAttempts.slice(-3).map((q, i) => (
                      <div key={`q-${i}`} className={`history-item ${q.isCorrect ? 'success' : 'error'}`}>
                        <div className="history-icon">
                          {q.isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                        </div>
                        <div className="history-content">
                          <span className="history-type">Sual {q.questionIndex + 1}</span>
                          <p className="history-question">{q.question?.substring(0, 60)}...</p>
                          {!q.isCorrect && (
                            <span className="history-error">Siz: {q.userAnswer} | Düzgün: {q.options?.[q.correctAnswer]}</span>
                          )}
                          <span className="history-date">{new Date(q.timestamp).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {topic.codeAttempts.length > 0 && (
                  <div className="history-group">
                    <h6>💻 Kod Cəhdləri ({topic.codeAttempts.length})</h6>
                    {topic.codeAttempts.slice(-3).map((c, i) => (
                      <div key={`c-${i}`} className={`history-item ${c.isSuccess ? 'success' : 'error'}`}>
                        <div className="history-icon">
                          {c.isSuccess ? <CheckCircle2 size={14} /> : <Bug size={14} />}
                        </div>
                        <div className="history-content">
                          <span className="history-type">{c.exerciseTitle || 'Tapşırıq'}</span>
                          {!c.isSuccess && c.errorCategory && (
                            <span className="history-error">{c.errorCategory}</span>
                          )}
                          <span className="history-date">{new Date(c.timestamp).toLocaleDateString()}</span>
                          {c.code && (
                            <details className="code-details">
                              <summary>Kodu göstər</summary>
                              <pre>{c.code.substring(0, 300)}...</pre>
                            </details>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Aylıq hesabat render
  const renderMonthlyReport = () => {
    const report = analysis.data?.aiInsights?.monthlyReport;
    const aiInsights = analysis.data?.aiInsights;
    
    if (!report) return (
      <div className="empty-state small">
        <p>Hələ AI hesabatı generasiya edilməyib. "AI Təhlil Et" düyməsinə klikləyin.</p>
      </div>
    );

    return (
      <div className="monthly-report-section">
        <div className="report-header">
          <Calendar size={24} />
          <h3>Ay {currentMonth} Ümumi Hesabat</h3>
          <span className="report-date">{analysis.lastUpdated?.toLocaleDateString('az-AZ')}</span>
        </div>

        <div className="report-content">
          {/* Ümumi səviyyə kartı */}
          <div className="overall-level-card">
            <h4>Ümumi Səviyyə</h4>
            <div className="level-display">
              <span className="level-name">{report.overallLevel || 'Qiymətləndirilir'}</span>
              <div className="level-progress">
                <div 
                  className="level-progress-bar" 
                  style={{ width: `${report.progressPercent || 0}%` }}
                />
              </div>
              <span className="level-percent">{report.progressPercent || 0}% tamamlanıb</span>
            </div>
          </div>

          {/* Müsbət və mənfi cəhətlər */}
          <div className="report-columns">
            <div className="report-column positive">
              <h5><CheckCircle2 size={18} /> Nələr Yaxşıdır</h5>
              <ul>
                {(report.positives || []).map((item, i) => (
                  <li key={i}><ArrowUpRight size={14} />{item}</li>
                ))}
                {(report.positives || []).length === 0 && <li className="empty-item">Məlumat yoxdur</li>}
              </ul>
            </div>
            
            <div className="report-column negative">
              <h5><AlertCircle size={18} /> Diqqət Yetirilməli</h5>
              <ul>
                {(report.negatives || []).map((item, i) => (
                  <li key={i}><ArrowRight size={14} />{item}</li>
                ))}
                {(report.negatives || []).length === 0 && <li className="empty-item">Məlumat yoxdur</li>}
              </ul>
            </div>
          </div>

          {/* Həftəlik plan */}
          {report.weeklyPlan && report.weeklyPlan.length > 0 && (
            <div className="weekly-plan-section">
              <h5><Target size={18} /> 4 Həftəlik Təlim Planı</h5>
              <div className="week-grid">
                {report.weeklyPlan.map((week, i) => (
                  <div key={i} className="week-card">
                    <div className="week-number">Həftə {i + 1}</div>
                    <p>{week}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mini dərslər */}
          {aiInsights?.topicAnalyses && aiInsights.topicAnalyses.length > 0 && (
            <div className="mini-lessons-section">
              <h5><BookMarked size={18} /> Mini Dərslər</h5>
              <div className="mini-lessons-list">
                {aiInsights.topicAnalyses.map((lesson, i) => (
                  <div key={i} className="mini-lesson-card">
                    <h6>{lesson.title}</h6>
                    {lesson.miniLesson && (
                      <div className="lesson-content">
                        <p>{lesson.miniLesson}</p>
                      </div>
                    )}
                    {lesson.recommendations && lesson.recommendations.length > 0 && (
                      <ul className="lesson-recommendations">
                        {lesson.recommendations.map((rec, j) => (
                          <li key={j}>{rec}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Motivasiya */}
        {aiInsights?.motivation && (
          <div className="motivation-box">
            <Sparkles size={20} />
            <p>{aiInsights.motivation}</p>
          </div>
        )}
      </div>
    );
  };

  // Boş vəziyyət render
  const renderEmptyState = () => (
    <div className="empty-state">
      <div className="empty-illustration">
        <Brain size={64} className="main-icon" />
        <div className="floating-icons">
          <FileQuestion size={32} />
          <Terminal size={32} />
          <Code2 size={32} />
        </div>
      </div>
      <h2>Hələ təhlil üçün kifayət qədər məlumat yoxdur</h2>
      <p className="empty-desc">
        AI Mentor sizin üçün fərdi təlim planı yaratmaq üçün əvvəlcə 
        minimum {CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS} tapşırıq tamamlamanızı gözləyir.
      </p>
      
      <div className="empty-progress">
        <div className="progress-indicator">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${Math.min((sessionData.totalAttempts / CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS) * 100, 100)}%` 
            }}
          />
        </div>
        <span>{sessionData.totalAttempts} / {CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS} cəhd</span>
      </div>

      <div className="next-steps-hint">
        <h4>Nələr etməlisiniz:</h4>
        <ul>
          <li><PlayCircle size={16} /> Mövzuları təkrarlayın və quizləri cavablandırın</li>
          <li><Code2 size={16} /> Kod tapşırıqlarını yerinə yetirin</li>
          <li><BookOpen size={16} /> Səhv etdiyiniz hissələri öyrənin</li>
        </ul>
      </div>
    </div>
  );

  // Yüklənmə vəziyyəti render
  const renderLoadingState = () => (
    <div className="loading-state">
      <div className="loading-animation">
        <BrainCircuit size={48} className="pulse" />
        <div className="loading-text">
          <h2>AI Mentor təhlil aparır...</h2>
          <p>Hər mövzu ayrıca təhlil edilir, səhv səbəbləri araşdırılır</p>
        </div>
      </div>
      
      <div className="loading-details">
        <div className="loading-step active">
          <div className="step-icon"><FileQuestion /></div>
          <span>Quiz performansı analiz edilir</span>
        </div>
        <div className="loading-step active">
          <div className="step-icon"><Terminal /></div>
          <span>Kod xətaları təsnif edilir</span>
        </div>
        <div className="loading-step">
          <div className="step-icon"><Brain /></div>
          <span>Səviyyələr müəyyən edilir</span>
        </div>
        <div className="loading-step">
          <div className="step-icon"><Lightbulb /></div>
          <span>Fərdi tövsiyələr hazırlanır</span>
        </div>
      </div>
    </div>
  );

  // Data yüklənmə vəziyyəti
  if (isDataLoading) {
    return (
      <div className="ai-analysis loading">
        <div className="initial-loading">
          <Loader2 size={48} className="spin" />
          <p>Məlumatlar yüklənir...</p>
        </div>
      </div>
    );
  }

  // İstifadəçi yoxdursa
  if (!user) {
    return (
      <div className="ai-analysis guest">
        <div className="guest-content">
          <Lock size={64} />
          <h2>Giriş Tələb Olunur</h2>
          <p>Fərdi AI təhlili görmək üçün daxil olun</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-analysis">
      {renderHeader()}

      {/* Sıfırlama modalı */}
      {showResetModal && (
        <div className="modal-overlay" onClick={() => setShowResetModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-icon warning">
              <AlertTriangle size={32} />
            </div>
            <h3>Təhlili Sıfırlamaq</h3>
            <p>Bütün AI təhlili və statistikalar silinəcək. Bu əməliyyat geri qaytarıla bilməz.</p>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowResetModal(false)}>
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

      {/* Xəta banneri */}
      {analysis.error && (
        <div className="error-banner">
          <AlertCircle size={24} />
          <p>{analysis.error}</p>
          <button onClick={() => setAnalysis(p => ({...p, error: null}))}>Bağla</button>
        </div>
      )}

      <main className="ai-main-content">
        {!analysis.hasAnalysis && !analysis.loading && sessionData.totalAttempts < CONFIG.MIN_ATTEMPTS_FOR_ANALYSIS ? (
          renderEmptyState()
        ) : analysis.loading ? (
          renderLoadingState()
        ) : (
          <>
            {/* Tab menyu */}
            <div className="view-tabs">
              <button 
                className={viewMode === 'overview' ? 'active' : ''}
                onClick={() => setViewMode('overview')}
              >
                <BarChart3 size={18} />
                Ümumi Baxış
              </button>
              <button 
                className={viewMode === 'topics' ? 'active' : ''}
                onClick={() => setViewMode('topics')}
              >
                <Layers size={18} />
                Mövzu Təhlili
              </button>
              <button 
                className={viewMode === 'monthly' ? 'active' : ''}
                onClick={() => setViewMode('monthly')}
              >
                <Calendar size={18} />
                Aylıq Hesabat
              </button>
            </div>

            {/* Ümumi baxış tabı */}
            {viewMode === 'overview' && (
              <div className="tab-content overview">
                {renderProgressOverview()}
                
                {analysis.data?.aiInsights?.topicAnalyses && (
                  <div className="ai-insights-summary">
                    <h3><Sparkles size={20} /> AI Tövsiyələri</h3>
                    <div className="insights-grid">
                      {analysis.data.aiInsights.topicAnalyses.slice(0, 3).map((insight, i) => (
                        <div key={i} className="insight-card">
                          <h4>{insight.title}</h4>
                          {insight.recommendations && insight.recommendations.length > 0 ? (
                            <ul>
                              {insight.recommendations.slice(0, 2).map((rec, j) => (
                                <li key={j}>{rec}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>Təkmilləşmə tövsiyələri mövcuddur</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mövzular tabı */}
            {viewMode === 'topics' && calculatedAnalysis?.topicAnalysis && (
              <div className="tab-content topics">
                <div className="topics-filter">
                  <span className="filter-label">Sıralama:</span>
                  <select onChange={(e) => {
                    // Sıralama funksionallığı əlavə edilə bilər
                    console.log('Sort by:', e.target.value);
                  }}>
                    <option value="score">Bala görə ( yüksək → aşağı )</option>
                    <option value="recent">Son aktivliyə görə</option>
                    <option value="errors">Səhv sayına görə</option>
                  </select>
                </div>
                
                <div className="topics-list">
                  {calculatedAnalysis.topicAnalysis
                    .sort((a, b) => b.mastery.score - a.mastery.score)
                    .map(topic => renderTopicDetailCard(topic))}
                </div>
              </div>
            )}

            {/* Aylıq hesabat tabı */}
            {viewMode === 'monthly' && renderMonthlyReport()}
          </>
        )}
      </main>

      {/* Footer */}
      {analysis.hasAnalysis && analysis.data && (
        <footer className="analysis-footer">
          <div className="footer-stats">
            <span>📊 Tokens: {analysis.data.promptTokens} → {analysis.data.responseTokens}</span>
            <span>•</span>
            <span>🤖 Model: {analysis.data.aiModel}</span>
            <span>•</span>
            <span>🕐 Son yeniləmə: {analysis.lastUpdated?.toLocaleString('az-AZ')}</span>
          </div>
        </footer>
      )}

      {/* CSS Styles */}
      <style>{`
        .ai-analysis {
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          min-height: 100vh;
          color: #1e293b;
        }

        .ai-analysis.loading {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .initial-loading {
          text-align: center;
          color: #64748b;
        }

        .initial-loading p {
          margin-top: 16px;
        }

        .ai-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding: 24px 32px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .brand-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(102, 126, 234, 0.3);
        }

        .brand-text h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-text p {
          margin: 4px 0 0;
          color: #64748b;
          font-size: 16px;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn-primary, .btn-secondary, .btn-danger {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 6px -1px rgba(102, 126, 234, 0.2);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(102, 126, 234, 0.3);
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
          background: #fef2f2;
        }

        .btn-danger {
          background: #ef4444;
          color: white;
        }

        .btn-danger:hover {
          background: #dc2626;
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
          padding: 8px;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .view-tabs button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 12px;
          border: none;
          background: transparent;
          color: #64748b;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .view-tabs button.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .progress-overview {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 32px;
        }

        .progress-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .progress-card.main {
          border: 2px solid #e0e7ff;
        }

        .progress-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .progress-header svg {
          color: #667eea;
        }

        .progress-header h3 {
          margin: 0;
          font-size: 22px;
        }

        .text-muted {
          color: #64748b;
          margin: 4px 0 0;
          font-size: 14px;
        }

        .progress-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }

        .stat-item {
          text-align: center;
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
          position: relative;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 12px;
        }

        .progress-bar-bg {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        .trend-indicator {
          display: inline-flex;
          padding: 8px;
          border-radius: 50%;
          margin-bottom: 8px;
        }

        .trend-indicator.up {
          background: #dcfce7;
          color: #16a34a;
        }

        .trend-indicator.down {
          background: #fef2f2;
          color: #dc2626;
        }

        .trend-indicator.neutral {
          background: #f1f5f9;
          color: #64748b;
        }

        .level-badge-small {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .stat-breakdown {
          display: flex;
          gap: 12px;
          justify-content: center;
          font-size: 13px;
          margin-top: 8px;
        }

        .quiz-count {
          color: #3b82f6;
        }

        .code-count {
          color: #10b981;
        }

        .strength-weakness-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .sw-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          border-left: 4px solid;
        }

        .sw-card.strength {
          border-left-color: #10b981;
        }

        .sw-card.weakness {
          border-left-color: #ef4444;
        }

        .sw-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .sw-card.strength .sw-header {
          color: #10b981;
        }

        .sw-card.weakness .sw-header {
          color: #ef4444;
        }

        .sw-content h4 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .sw-score {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .sw-content p {
          margin: 0 0 12px;
          color: #64748b;
          font-size: 14px;
        }

        .sw-details {
          display: flex;
          gap: 16px;
          font-size: 13px;
          color: #64748b;
        }

        .topics-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .topic-detail-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border-left: 4px solid;
          transition: all 0.2s;
        }

        .topic-detail-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .topic-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .topic-card-header:hover {
          background: #f8fafc;
        }

        .topic-main-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .topic-number-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 14px;
        }

        .topic-title-section h4 {
          margin: 0 0 6px;
          font-size: 17px;
        }

        .topic-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .level-badge, .score-badge, .error-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .score-badge {
          background: #f1f5f9;
          color: #475569;
        }

        .error-badge {
          background: #fef2f2;
          color: #dc2626;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .topic-quick-stats {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .quick-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
        }

        .trend-mini {
          padding: 6px;
          border-radius: 50%;
        }

        .trend-mini.up {
          color: #10b981;
          background: #dcfce7;
        }

        .trend-mini.down {
          color: #ef4444;
          background: #fef2f2;
        }

        .trend-mini.neutral {
          color: #64748b;
          background: #f1f5f9;
        }

        .expand-icon {
          color: #94a3b8;
        }

        .topic-expanded-content {
          padding: 0 24px 24px;
          border-top: 1px solid #e2e8f0;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-subtitle {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 24px 0 16px;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .recommendation-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .recommendation-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 16px;
          border-radius: 12px;
          border-left: 4px solid;
        }

        .recommendation-item.critical {
          background: #fef2f2;
          border-left-color: #ef4444;
        }

        .recommendation-item.warning {
          background: #fffbeb;
          border-left-color: #f59e0b;
        }

        .recommendation-item.syntax {
          background: #eff6ff;
          border-left-color: #3b82f6;
        }

        .recommendation-item.concept {
          background: #f5f3ff;
          border-left-color: #8b5cf6;
        }

        .recommendation-item.focus {
          background: #f0fdf4;
          border-left-color: #10b981;
        }

        .recommendation-item.success {
          background: #f0fdf4;
          border-left-color: #10b981;
        }

        .rec-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .rec-content strong {
          display: block;
          margin-bottom: 4px;
          color: #1e293b;
        }

        .rec-content p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
        }

        .error-detail-card {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 16px;
        }

        .error-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .error-category {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .error-frequency {
          font-size: 13px;
          color: #7f1d1d;
          font-weight: 500;
        }

        .error-date {
          font-size: 12px;
          color: #9ca3af;
        }

        .error-explanation {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .explanation-block {
          background: white;
          padding: 16px;
          border-radius: 8px;
          border-left: 3px solid #dc2626;
        }

        .explanation-block.highlight {
          border-left-color: #10b981;
          background: #f0fdf4;
        }

        .explanation-block.tip {
          border-left-color: #f59e0b;
          background: #fffbeb;
        }

        .explanation-block.resources {
          border-left-color: #3b82f6;
          background: #eff6ff;
        }

        .explanation-block h6 {
          margin: 0 0 8px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
        }

        .explanation-block ul {
          margin: 0;
          padding-left: 20px;
        }

        .explanation-block li {
          margin-bottom: 6px;
          font-size: 14px;
          color: #475569;
        }

        .explanation-block p {
          margin: 0;
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
        }

        .explanation-block a {
          color: #3b82f6;
          text-decoration: none;
        }

        .explanation-block a:hover {
          text-decoration: underline;
        }

        .error-examples {
          margin-top: 16px;
        }

        .error-examples h6 {
          margin: 0 0 10px;
          font-size: 13px;
          color: #64748b;
        }

        .error-example-item {
          margin-bottom: 12px;
        }

        .error-code-snippet {
          display: block;
          background: #1e293b;
          color: #e2e8f0;
          padding: 12px;
          border-radius: 6px;
          font-family: 'Fira Code', monospace;
          font-size: 12px;
          overflow-x: auto;
          margin-bottom: 8px;
        }

        .context-code {
          background: #f1f5f9;
          padding: 12px;
          border-radius: 6px;
          font-family: 'Fira Code', monospace;
          font-size: 12px;
          overflow-x: auto;
          color: #475569;
          margin: 0;
        }

        .strength-weakness-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 20px 0;
        }

        @media (max-width: 768px) {
          .strength-weakness-detail {
            grid-template-columns: 1fr;
          }
        }

        .sw-detail-section {
          padding: 16px;
          border-radius: 12px;
        }

        .sw-detail-section.positive {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .sw-detail-section.negative {
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .sw-detail-section h6 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 12px;
          font-size: 14px;
        }

        .sw-detail-section.positive h6 {
          color: #16a34a;
        }

        .sw-detail-section.negative h6 {
          color: #dc2626;
        }

        .sw-detail-section ul {
          margin: 0;
          padding-left: 20px;
        }

        .sw-detail-section li {
          margin-bottom: 6px;
          font-size: 14px;
          color: #475569;
        }

        .attempts-history {
          margin-top: 24px;
        }

        .history-tabs {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .history-group h6 {
          margin: 0 0 12px;
          font-size: 14px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .history-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 8px;
        }

        .history-item.success {
          background: #f0fdf4;
          color: #16a34a;
        }

        .history-item.error {
          background: #fef2f2;
          color: #dc2626;
        }

        .history-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .history-content {
          flex: 1;
          min-width: 0;
        }

        .history-type {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0.8;
          display: block;
          margin-bottom: 4px;
        }

        .history-question {
          margin: 0;
          font-size: 14px;
          color: #475569;
          word-break: break-word;
        }

        .history-error {
          font-size: 12px;
          color: #dc2626;
          margin-top: 4px;
          display: block;
        }

        .history-date {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 4px;
          display: block;
        }

        .code-details {
          margin-top: 8px;
        }

        .code-details summary {
          font-size: 12px;
          color: #64748b;
          cursor: pointer;
        }

        .code-details pre {
          margin-top: 8px;
          background: #1e293b;
          color: #e2e8f0;
          padding: 12px;
          border-radius: 6px;
          font-size: 12px;
          overflow-x: auto;
        }

        .monthly-report-section {
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .report-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 2px solid #f1f5f9;
        }

        .report-header h3 {
          margin: 0;
          flex: 1;
          font-size: 24px;
        }

        .report-date {
          color: #64748b;
          font-size: 14px;
        }

        .overall-level-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 32px;
          border-radius: 16px;
          margin-bottom: 24px;
          text-align: center;
        }

        .overall-level-card h4 {
          margin: 0 0 16px;
          opacity: 0.9;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .level-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .level-name {
          font-size: 32px;
          font-weight: 800;
        }

        .level-progress {
          width: 100%;
          max-width: 400px;
          height: 12px;
          background: rgba(255,255,255,0.3);
          border-radius: 6px;
          overflow: hidden;
        }

        .level-progress-bar {
          height: 100%;
          background: rgba(255,255,255,0.9);
          border-radius: 6px;
          transition: width 0.6s ease;
        }

        .level-percent {
          font-size: 18px;
          font-weight: 600;
          opacity: 0.9;
        }

        .report-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        @media (max-width: 768px) {
          .report-columns {
            grid-template-columns: 1fr;
          }
        }

        .report-column {
          padding: 24px;
          border-radius: 16px;
        }

        .report-column.positive {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .report-column.negative {
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .report-column h5 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 16px;
          font-size: 18px;
        }

        .report-column.positive h5 {
          color: #16a34a;
        }

        .report-column.negative h5 {
          color: #dc2626;
        }

        .report-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .report-column li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-size: 15px;
          color: #475569;
        }

        .report-column li:last-child {
          border-bottom: none;
        }

        .empty-item {
          color: #9ca3af;
          font-style: italic;
        }

        .weekly-plan-section {
          margin-top: 24px;
        }

        .weekly-plan-section h5 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 16px;
          font-size: 18px;
          color: #1e293b;
        }

        .week-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .week-card {
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
        }

        .week-number {
          font-size: 13px;
          font-weight: 700;
          color: #667eea;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .week-card p {
          margin: 0;
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
        }

        .mini-lessons-section {
          margin-top: 24px;
        }

        .mini-lessons-section h5 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 16px;
          font-size: 18px;
          color: #1e293b;
        }

        .mini-lessons-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mini-lesson-card {
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .mini-lesson-card h6 {
          margin: 0 0 12px;
          font-size: 16px;
          color: #1e293b;
        }

        .lesson-content p {
          margin: 0;
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
        }

        .lesson-recommendations {
          margin: 12px 0 0;
          padding-left: 20px;
        }

        .lesson-recommendations li {
          margin-bottom: 6px;
          font-size: 14px;
          color: #475569;
        }

        .motivation-box {
          margin-top: 24px;
          padding: 24px;
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: #92400e;
        }

        .motivation-box p {
          margin: 0;
          font-size: 16px;
          line-height: 1.6;
          font-style: italic;
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .empty-state.small {
          padding: 40px 20px;
        }

        .empty-illustration {
          position: relative;
          display: inline-flex;
          margin-bottom: 32px;
        }

        .main-icon {
          color: #667eea;
        }

        .floating-icons {
          position: absolute;
          top: -10px;
          right: -40px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .floating-icons svg {
          background: white;
          padding: 8px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          color: #764ba2;
        }

        .empty-state h2 {
          margin: 0 0 16px;
          font-size: 26px;
          color: #1e293b;
        }

        .empty-desc {
          color: #64748b;
          font-size: 16px;
          max-width: 500px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .empty-progress {
          max-width: 400px;
          margin: 0 auto 32px;
        }

        .progress-indicator {
          height: 12px;
          background: #e2e8f0;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 6px;
          transition: width 0.6s ease;
        }

        .next-steps-hint {
          background: #f8fafc;
          padding: 24px;
          border-radius: 16px;
          max-width: 500px;
          margin: 0 auto;
          text-align: left;
        }

        .next-steps-hint h4 {
          margin: 0 0 16px;
          color: #1e293b;
        }

        .next-steps-hint ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .next-steps-hint li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: #475569;
          font-size: 15px;
        }

        .next-steps-hint svg {
          color: #667eea;
        }

        .loading-state {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .loading-animation {
          margin-bottom: 40px;
        }

        .pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          color: #667eea;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
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

        .loading-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 500px;
          margin: 0 auto;
        }

        .loading-step {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
          color: #64748b;
          transition: all 0.3s;
        }

        .loading-step.active {
          background: #e0e7ff;
          color: #4338ca;
          font-weight: 500;
        }

        .step-icon {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
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

        .analysis-footer {
          margin-top: 40px;
          padding: 20px;
          text-align: center;
          color: #64748b;
          font-size: 13px;
        }

        .footer-stats {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ai-analysis.guest {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
        }

        .guest-content {
          text-align: center;
          color: #64748b;
        }

        .guest-content h2 {
          color: #1e293b;
          margin: 16px 0 8px;
        }

        .topics-filter {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding: 16px;
          background: white;
          border-radius: 12px;
        }

        .filter-label {
          color: #64748b;
          font-size: 14px;
        }

        .topics-filter select {
          padding: 8px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          color: #1e293b;
          font-size: 14px;
          cursor: pointer;
        }

        .ai-insights-summary {
          margin-top: 32px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .ai-insights-summary h3 {
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
          background: #f8fafc;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .insight-card h4 {
          margin: 0 0 12px;
          font-size: 16px;
          color: #1e293b;
        }

        .insight-card p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        .insight-card ul {
          margin: 0;
          padding-left: 20px;
        }

        .insight-card li {
          margin-bottom: 6px;
          color: #475569;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .ai-analysis {
            padding: 16px;
          }

          .ai-header {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .header-brand {
            flex-direction: column;
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
            min-width: 120px;
            justify-content: center;
          }

          .topic-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .topic-quick-stats {
            width: 100%;
            justify-content: space-between;
          }

          .progress-stats-grid {
            grid-template-columns: 1fr;
          }

          .strength-weakness-grid {
            grid-template-columns: 1fr;
          }

          .modal-actions {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary, .btn-danger {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

// ============================================
// EXPORTLAR - BURADA OLMAQ ZƏRURİDİR
// ============================================

// 1. Named export - Hook üçün
export { useAIMentor };

// 2. Default export - Komponent üçün
export default AIAnalysis;