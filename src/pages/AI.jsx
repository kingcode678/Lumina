import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, 
  Unlock, 
  CheckCircle, 
  Circle, 
  PlayCircle, 
  Code2, 
  MessageCircle, 
  Send,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Trophy,
  Target,
  Clock,
  Star,
  AlertCircle,
  Check,
  X,
  RotateCcw,
  HelpCircle,
  BookOpen,
  Layout,
  Award,
  TrendingUp,
  MessageSquare,
  Brain,
  Terminal,
  ExternalLink
} from 'lucide-react';
import '../styles/AI.css';

const AI = () => {
  // State management
  const [hasAccessCode, setHasAccessCode] = useState(false);
  const [accessCodeInput, setAccessCodeInput] = useState('');
  const [codeError, setCodeError] = useState('');
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeTab, setActiveTab] = useState('content');
  
  // Progress tracking
  const [completedTopics, setCompletedTopics] = useState([]);
  const [quizResults, setQuizResults] = useState({});
  const [codeResults, setCodeResults] = useState({});
  
  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  
  // Code editor state
  const [codeValue, setCodeValue] = useState('');
  const [codeOutput, setCodeOutput] = useState('');
  const [codeSuccess, setCodeSuccess] = useState(false);
  const [showHints, setShowHints] = useState(false);
  
  // Support state
  const [supportQuestion, setSupportQuestion] = useState('');
  const [supportSubmitted, setSupportSubmitted] = useState(false);
  
  // Analysis state
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Course data
  const courseData = {
    months: [
      {
        id: 'ai-m1',
        title: 'Ay 1: Python və AI Əsasları',
        isLocked: false,
        isActive: true,
        weeks: [
          {
            id: 'ai-m1-w1',
            weekNumber: 1,
            title: 'Həftə 1: Pythona Giriş',
            topics: [
              {
                id: 'ai-m1-w1-t1',
                title: 'Python nədir və niyə AI üçün istifadə olunur?',
                duration: '25 dəq',
                difficulty: 'Başlanğıc',
                isFree: true, // PULSUZ MOVZU
                content: `
                  <div class="content-section">
                    <h3>Pythona Xoş Gəlmisiniz!</h3>
                    <p>Python <strong>AI və Data Science</strong> dünyasının ən populyar dilidir. Səbəbi sadə sintaksisi və güclü kitabxanalarıdır.</p>
                    
                    <div class="info-box info">
                      <div class="info-icon">🐍</div>
                      <div>
                        <strong>Niyə Python?</strong>
                        <ul>
                          <li>Oxunaqlı və öyrənməsi asan sintaksis</li>
                          <li>TensorFlow, PyTorch, Scikit-learn kimi AI kitabxanaları</li>
                          <li>Böyük icma və dəstək</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h4>İlk Python Proqramı</h4>
                    <p>Python-da kod yazmaq üçün sadəcə <code>print()</code> funksiyasından istifadə edirik:</p>
                    
                    <div class="code-explanation">
                      <div class="explanation-step">
                        <span class="step-num">1</span>
                        <p><code>print()</code> - Ekrana mətn yazdırmaq üçün istifadə olunur</p>
                      </div>
                      <div class="explanation-step">
                        <span class="step-num">2</span>
                        <p>Mətn dırnaq işarələri (" və ya ') arasında yazılır</p>
                      </div>
                      <div class="explanation-step">
                        <span class="step-num">3</span>
                        <p>Python hər bir sətri tək-tək icra edir (yuxarıdan aşağıya)</p>
                      </div>
                    </div>
                    
                    <h4>Dəyişənlər (Variables)</h4>
                    <p>Dəyişənlər məlumat saxlamaq üçün qutular kimidir:</p>
                    
                    <div class="variable-analogy">
                      <div class="analogy-box">
                        <div class="box-label">qutu = "alma"</div>
                        <div class="box-visual">📦 ← 🍎</div>
                        <div class="box-desc">"qutu" adlı dəyişəndə "alma" saxlanılır</div>
                      </div>
                      <div class="analogy-box">
                        <div class="box-label">yas = 25</div>
                        <div class="box-visual">📦 ← 2️⃣5️⃣</div>
                        <div class="box-desc">"yas" adlı dəyişəndə 25 nömrəsi saxlanılır</div>
                      </div>
                    </div>
                    
                    <div class="warning-box">
                      <div class="warning-icon">⚠️</div>
                      <div>
                        <strong>Qayda:</strong> Dəyişən adları:
                        <ul>
                          <li>Rəqəmlə başlaya bilməz (<code>2yas</code> yalnışdır)</li>
                          <li>Boşluq ola bilməz (<code>menim yasim</code> yalnışdır, <code>menim_yasim</code> düzgündür)</li>
                          <li>Case-sensitive-dir (<code>Yas</code> və <code>yas</code> fərqlidir)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                `,
                codeExamples: [
                  {
                    title: 'Salam dünya proqramı',
                    language: 'python',
                    code: `# Bu şərhdir, Python bunu oxumur
print("Salam, Dünya!")
print('Python öyrənirəm')  # Tək dırnaq da olar

# Bir neçə sətir çap etmək
print("Sətir 1")
print("Sətir 2")
print("Sətir 3")`
                  },
                  {
                    title: 'Dəyişənlər ilə iş',
                    language: 'python',
                    code: `# Dəyişən təyin etmək
ad = "Kamil"
yas = 25
sehir = "Bakı"

# Dəyişənləri çap etmək
print(ad)
print(yas)
print(sehir)

# Dəyişənləri birləşdirmək
print(ad, yas, "yaşında", sehir, "şəhərində yaşayır")`
                  }
                ],
                videos: [
                  {
                    title: 'Python-a Giriş - 3 Saatlıq Kurs',
                    channel: 'Programming with Mosh',
                    duration: '3:00:00',
                    note: 'Mövzunu daha yaxşı anlamaq üçün tövsiyə edilir'
                  },
                  {
                    title: 'Python Dəyişənlər',
                    channel: 'Corey Schafer',
                    duration: '15:30',
                    note: 'Dəyişən tipləri ətraflı izah olunur'
                  }
                ],
                codingExercise: {
                  instructions: 'Aşağıdakı tələbləri yerinə yetirən Python proqramı yazın:',
                  requirements: [
                    '<code>ad</code> dəyişənində öz adınızı saxlayın',
                    '<code>yas</code> dəyişənində yaşınızı saxlayın',
                    '<code>meslek</code> dəyişənində peşənizi yazın',
                    '<code>print()</code> ilə "Salam, mənim adım [ad]. Mən [yas] yaşındayam və [meslek] işləyirəm." formatında çıxış verin'
                  ],
                  initialCode: `# Dəyişənləri burada təyin edin
ad = 
yas = 
meslek = 

# Nəticəni çap edin
print()`,
                  solution: `ad = "Kamil"
yas = 25
meslek = "proqramçı"

print("Salam, mənim adım", ad + ".", "Mən", yas, "yaşındayam və", meslek, "işləyirəm.")`,
                  hints: [
                    'Dəyişən adı = dəyər formatında yazın',
                    'print() içində vergül ilə dəyişənləri ayırın',
                    'Mətnləri dırnaq içində yazın, rəqəmləri yox'
                  ]
                },
                quiz: {
                  title: 'Python Əsasları - Bilik Yoxlanışı',
                  questions: [
                    {
                      id: 1,
                      question: 'Python kodu hansı funksiya ilə ekrana yazdırılır?',
                      options: ['echo()', 'console.log()', 'print()', 'write()'],
                      correct: 2,
                      explanation: 'Python-da print() funksiyası ekrana çıxış vermək üçün istifadə olunur.'
                    },
                    {
                      id: 2,
                      question: 'Hansı dəyişən adı düzgündür?',
                      options: ['2ad', 'menim adim', 'menim_adim', 'ad@'],
                      correct: 2,
                      explanation: 'Dəyişən adları rəqəmlə başlaya bilməz, boşluq ola bilməz, xüsusi simvollar olmamalıdır.'
                    },
                    {
                      id: 3,
                      question: 'Python şərhi (comment) necə yazılır?',
                      options: ['// şərh', '/* şərh */', '# şərh', '<!-- şərh -->'],
                      correct: 2,
                      explanation: 'Python-da # işarəsindən sonra yazılanlar şərh hesab olunur.'
                    },
                    {
                      id: 4,
                      question: '"25" və 25 arasındakı fərq nədir?',
                      options: ['Fərq yoxdur', 'Birinci mətn, ikinci rəqəmdir', 'Birinci rəqəm, ikinci mətn', 'Heç biri'],
                      correct: 1,
                      explanation: 'Dırnaq içindəki hər şey mətn (string) tipindədir, dırnaqsız rəqəmlər isə integer tipində.'
                    },
                    {
                      id: 5,
                      question: 'print() içində vergülün funksiyası nədir?',
                      options: ['Xəta verir', 'Dəyərləri birləşdirir və arada boşluq qoyur', 'Sadəcə birləşdirir', 'Heç nə etmir'],
                      correct: 1,
                      explanation: 'Vergül ilə ayrılan dəyərlər arada boşluq qoyularaq birləşdirilir.'
                    },
                    {
                      id: 6,
                      question: 'Python fayllarının uzantısı nədir?',
                      options: ['.py', '.python', '.pt', '.pyt'],
                      correct: 0,
                      explanation: 'Python faylları .py uzantısı ilə saxlanılır.'
                    },
                    {
                      id: 7,
                      question: 'Dəyişən adı case-sensitive-dirmi?',
                      options: ['Xeyr', 'Bəli', 'Yalnız bəzi hallarda', 'Python 3-də yox'],
                      correct: 1,
                      explanation: 'Python-da Ad və ad iki fərqli dəyişəndir.'
                    },
                    {
                      id: 8,
                      question: 'Hansı mətn tipi göstəricisidir?',
                      options: ['int', 'float', 'str', 'bool'],
                      correct: 2,
                      explanation: 'str (string) mətn tipini göstərir.'
                    },
                    {
                      id: 9,
                      question: 'print("Salam" + "Dünya") nəticəsi nə olar?',
                      options: ['Salam Dünya', 'SalamDünya', 'Xəta', 'Salam, Dünya'],
                      correct: 1,
                      explanation: '+ operatoru mətnləri birləşdirir, arada boşluq qoymur.'
                    },
                    {
                      id: 10,
                      question: 'Dəyişən dəyərini dəyişmək olarmı?',
                      options: ['Xeyr', 'Bəli', 'Yalnız bir dəfə', 'Yalnız rəqəmlərdə'],
                      correct: 1,
                      explanation: 'Python-da dəyişənlərin dəyəri istənilən vaxt dəyişilə bilər.'
                    },
                    {
                      id: 11,
                      question: 'type() funksiyası nə edir?',
                      options: ['Tip çevirir', 'Tipi göstərir', 'Tip yoxlayır', 'Tip yaradır'],
                      correct: 1,
                      explanation: 'type() dəyişənin tipini (int, str, float və s.) göstərir.'
                    },
                    {
                      id: 12,
                      question: 'print(5 + 3) nəticəsi nə olar?',
                      options: ['5 + 3', '8', '53', '"8"'],
                      correct: 1,
                      explanation: 'Dırnaq olmadığı üçün riyazi əməl aparılır və nəticə 8 olur.'
                    },
                    {
                      id: 13,
                      question: 'Çox sətirli şərh necə yazılır?',
                      options: ['###', '""" və ya \'\'\'', '/* */', '<!-- -->'],
                      correct: 1,
                      explanation: 'Üç dırnaq işarəsi çox sətirli şərh üçün istifadə olunur.'
                    },
                    {
                      id: 14,
                      question: 'input() funksiyası nə edir?',
                      options: ['Ekrana yazı yazır', 'İstifadəçidən məlumat alır', 'Fayl oxuyur', 'Xəta verir'],
                      correct: 1,
                      explanation: 'input() funksiyası istifadəçinin klaviaturadan daxil etdiyi məlumatı alır.'
                    },
                    {
                      id: 15,
                      question: 'Python hansı ildə yaradılıb?',
                      options: ['1989', '1991', '1995', '2000'],
                      correct: 1,
                      explanation: 'Python 1991-ci ildə Guido van Rossum tərəfindən yaradılıb.'
                    }
                  ]
                }
              },
              // Daha 4 mövzu (cəmi 5)
              {
                id: 'ai-m1-w1-t2',
                title: 'Data Tipləri və Operatorlar',
                duration: '30 dəq',
                difficulty: 'Başlanğıc',
                isFree: false,
                content: '<h3>Data Tipləri</h3><p>Python-da əsas tiplər...</p>',
                codeExamples: [],
                videos: [],
                codingExercise: { instructions: '', requirements: [], initialCode: '', solution: '', hints: [] },
                quiz: { title: '', questions: [] }
              },
              {
                id: 'ai-m1-w1-t3',
                title: 'Şərti Operatorlar (if/else)',
                duration: '35 dəq',
                difficulty: 'Orta',
                isFree: false,
                content: '',
                codeExamples: [],
                videos: [],
                codingExercise: { instructions: '', requirements: [], initialCode: '', solution: '', hints: [] },
                quiz: { title: '', questions: [] }
              },
              {
                id: 'ai-m1-w1-t4',
                title: 'Dövrlər (for və while)',
                duration: '40 dəq',
                difficulty: 'Orta',
                isFree: false,
                content: '',
                codeExamples: [],
                videos: [],
                codingExercise: { instructions: '', requirements: [], initialCode: '', solution: '', hints: [] },
                quiz: { title: '', questions: [] }
              },
              {
                id: 'ai-m1-w1-t5',
                title: 'Funksiyalar',
                duration: '35 dəq',
                difficulty: 'Orta',
                isFree: false,
                content: '',
                codeExamples: [],
                videos: [],
                codingExercise: { instructions: '', requirements: [], initialCode: '', solution: '', hints: [] },
                quiz: { title: '', questions: [] }
              }
            ],
            weeklyQuiz: {
              title: 'Həftə 1: Python Əsasları - Yekun Quiz',
              questionCount: 20,
              passingScore: 70
            },
            weeklyAnalysis: {
              metrics: ['topicsCompleted', 'codingAccuracy', 'quizAverage'],
              recommendations: []
            }
          },
          // Daha 3 həftə
          { id: 'ai-m1-w2', weekNumber: 2, title: 'Həftə 2: Data Structures', topics: [] },
          { id: 'ai-m1-w3', weekNumber: 3, title: 'Həftə 3: File Handling', topics: [] },
          { id: 'ai-m1-w4', weekNumber: 4, title: 'Həftə 4: Mini Layihə', topics: [] }
        ],
        monthlyQuiz: {
          title: 'Ay 1: Python və AI Əsasları - Yekun',
          questionCount: 30,
          passingScore: 75
        },
        monthlyAnalysis: {
          summary: 'Ay 1 ümumi performansı',
          strengths: [],
          weaknesses: [],
          recommendations: []
        }
      },
      // Gələcək aylar
      { id: 'ai-m2', title: 'Ay 2: Data Science Kitabxanaları', isLocked: true, weeks: [] },
      { id: 'ai-m3', title: 'Ay 3: Machine Learning', isLocked: true, weeks: [] },
      { id: 'ai-m4', title: 'Ay 4: Deep Learning', isLocked: true, weeks: [] },
      { id: 'ai-m5', title: 'Ay 5: NLP və Computer Vision', isLocked: true, weeks: [] },
      { id: 'ai-m6', title: 'Ay 6: Real Layihə', isLocked: true, weeks: [] }
    ]
  };

  // Access code verification
  const verifyAccessCode = () => {
    const validCodes = ['AI-M1-2024-TEST', 'AI-M1-ABC-123'];
    if (validCodes.includes(accessCodeInput.trim())) {
      setHasAccessCode(true);
      setCodeError('');
      const firstTopic = courseData.months[0].weeks[0].topics[0];
      setCodeValue(firstTopic.codingExercise.initialCode);
    } else {
      setCodeError('Yanlış kod. Zəhmət olmasa düzgün kod daxil edin.');
    }
  };

  const getCurrentTopic = () => {
    return courseData.months[activeMonth]?.weeks[activeWeek]?.topics[activeTopic];
  };

  const runCode = () => {
    const topic = getCurrentTopic();
    if (!topic) return;

    const userCode = codeValue.toLowerCase().replace(/\s/g, '');
    const checks = [];
    
    // Basic Python validation
    if (topic.id.includes('w1-t1')) {
      checks.push({ name: 'print funksiyası', pass: userCode.includes('print(') });
      checks.push({ name: 'dəyişən təyinatı', pass: (userCode.match(/=/g) || []).length >= 3 });
      checks.push({ name: 'ad dəyişəni', pass: userCode.includes('ad=') || userCode.includes('ad=') });
      checks.push({ name: 'yas dəyişəni', pass: userCode.includes('yas=') || userCode.includes('yas=') });
    }

    const passed = checks.filter(c => c.pass).length;
    const success = passed >= checks.length * 0.6;

    setCodeSuccess(success);
    setCodeOutput(success 
      ? `✅ Əla! Kodunuz düzgündür.\n\nYoxlamalar:\n${checks.map(c => `${c.pass ? '✓' : '✗'} ${c.name}`).join('\n')}`
      : `⚠️ Kodunuzda bəzi çatışmazlıqlar var.\n\nYoxlamalar:\n${checks.map(c => `${c.pass ? '✓' : '✗'} ${c.name}`).join('\n')}`
    );

    setCodeResults(prev => ({
      ...prev,
      [topic.id]: { success, attempts: (prev[topic.id]?.attempts || 0) + 1 }
    }));
  };

  const resetCode = () => {
    const topic = getCurrentTopic();
    if (topic) setCodeValue(topic.codingExercise.initialCode);
    setCodeOutput('');
    setCodeSuccess(false);
  };

  const submitQuiz = () => {
    const topic = getCurrentTopic();
    if (!topic || !topic.quiz) return;

    let correct = 0;
    topic.quiz.questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) correct++;
    });

    const score = Math.round((correct / topic.quiz.questions.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);

    setQuizResults(prev => ({
      ...prev,
      [topic.id]: { score, correct, total: topic.quiz.questions.length }
    }));
  };

  const submitSupport = (e) => {
    e.preventDefault();
    if (!supportQuestion.trim()) return;
    setSupportSubmitted(true);
    setTimeout(() => {
      setSupportSubmitted(false);
      setSupportQuestion('');
    }, 3000);
  };

  // Render access gate
  if (!hasAccessCode) {
    return (
      <div className="ai-container">
        <div className="access-gate">
          <div className="access-card">
            <div className="access-icon ai-icon">
              <Brain size={64} />
            </div>
            <h1>Süni İntelekt Kursu</h1>
            <p className="access-description">
              Python, Machine Learning və Deep Learning öyrən. 
              Bu kursa giriş üçün aktivləşdirmə kodu tələb olunur.
            </p>
            
            <div className="course-preview">
              <h3>🎁 Pulsuz Sınaq</h3>
              <p>İlk mövzu ("Pythona Giriş") kod olmadan əlçatandır!</p>
              <button 
                className="btn-preview"
                onClick={() => {
                  setHasAccessCode(true);
                  setActiveMonth(0);
                  setActiveWeek(0);
                  setActiveTopic(0);
                  const firstTopic = courseData.months[0].weeks[0].topics[0];
                  setCodeValue(firstTopic.codingExercise.initialCode);
                }}
              >
                <PlayCircle size={20} />
                Pulsuz Başla
              </button>
            </div>

            <div className="divider">
              <span>və ya</span>
            </div>
            
            <div className="code-input-group">
              <input
                type="text"
                value={accessCodeInput}
                onChange={(e) => setAccessCodeInput(e.target.value)}
                placeholder="Kodu daxil edin (məs: AI-M1-XXXX-XXXX)"
                className="code-input"
                onKeyPress={(e) => e.key === 'Enter' && verifyAccessCode()}
              />
              <button onClick={verifyAccessCode} className="btn-verify">
                <Unlock size={20} />
                Aktivləşdir
              </button>
            </div>
            
            {codeError && <div className="code-error">{codeError}</div>}
            
            <div className="pricing-info">
              <div className="price-tag">
                <span className="price">15 AZN</span>
                <span className="period">/ay</span>
              </div>
              <ul className="features-list">
                <li><Check size={16} /> 6 aylıq kurs</li>
                <li><Check size={16} /> 120+ praktiki mövzu</li>
                <li><Check size={16} /> Real AI layihələri</li>
                <li><Check size={16} /> Sertifikat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentTopic = getCurrentTopic();
  const currentMonthData = courseData.months[activeMonth];
  const currentWeekData = currentMonthData?.weeks[activeWeek];

  return (
    <div className="ai-container">
      {/* Header */}
      <header className="course-header-bar ai-header">
        <div className="course-title-section">
          <Brain size={32} className="course-icon" />
          <div>
            <h1>Süni İntelekt</h1>
            <span className="course-subtitle">Ay {activeMonth + 1} / 6 • {currentMonthData?.title}</span>
          </div>
        </div>
        <div className="course-progress">
          <div className="progress-ring">
            <svg viewBox="0 0 36 36">
              <path className="progress-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path 
                className="progress-ring-fill" 
                strokeDasharray={`${(completedTopics.length / 30) * 100}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
              />
            </svg>
            <span className="progress-text">{Math.round((completedTopics.length / 30) * 100)}%</span>
          </div>
          <button className="btn-analysis" onClick={() => setShowAnalysis(true)}>
            <TrendingUp size={18} />
            Analiz
          </button>
        </div>
      </header>

      <div className="course-layout">
        {/* Sidebar */}
        <aside className="course-sidebar">
          <div className="sidebar-header">
            <BookOpen size={20} />
            <span>Kurs Mündəricatı</span>
          </div>
          
          <div className="months-list">
            {courseData.months.map((month, mIdx) => (
              <div 
                key={month.id} 
                className={`month-item ${mIdx === activeMonth ? 'active' : ''} ${month.isLocked ? 'locked' : ''}`}
              >
                <div 
                  className="month-header"
                  onClick={() => !month.isLocked && setActiveMonth(mIdx)}
                >
                  {month.isLocked ? <Lock size={16} /> : <Unlock size={16} />}
                  <span className="month-title">{month.title}</span>
                  {mIdx === activeMonth && <ChevronDown size={16} />}
                </div>
                
                {mIdx === activeMonth && !month.isLocked && (
                  <div className="weeks-list">
                    {month.weeks.map((week, wIdx) => (
                      <div 
                        key={week.id}
                        className={`week-item ${wIdx === activeWeek ? 'active' : ''}`}
                        onClick={() => setActiveWeek(wIdx)}
                      >
                        <Layout size={14} />
                        <span>{week.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="course-main">
          {currentTopic && (
            <>
              {/* Topic Header */}
              <div className="topic-header">
                <div className="topic-meta">
                  <span className="topic-week">Həftə {currentWeekData?.weekNumber}</span>
                  <span className="topic-duration"><Clock size={14} /> {currentTopic.duration}</span>
                  <span className={`topic-difficulty ${currentTopic.difficulty.toLowerCase()}`}>
                    {currentTopic.difficulty}
                  </span>
                  {currentTopic.isFree && <span className="topic-free">🎁 PULSUZ</span>}
                </div>
                <h2 className="topic-title">{currentTopic.title}</h2>
                
                {/* Tabs */}
                <div className="topic-tabs">
                  <button className={`tab ${activeTab === 'content' ? 'active' : ''}`} onClick={() => setActiveTab('content')}>
                    <BookOpen size={18} /> Məzmun
                  </button>
                  <button className={`tab ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>
                    <Terminal size={18} /> Kod Yaz
                  </button>
                  <button className={`tab ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>
                    <Target size={18} /> Quiz (15)
                  </button>
                  <button className={`tab ${activeTab === 'support' ? 'active' : ''}`} onClick={() => setActiveTab('support')}>
                    <MessageCircle size={18} /> Sual Ver
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="tab-content">
                {/* Content Tab */}
                {activeTab === 'content' && (
                  <div className="content-tab">
                    <div className="lesson-content" dangerouslySetInnerHTML={{ __html: currentTopic.content }} />
                    
                    {currentTopic.codeExamples?.map((example, idx) => (
                      <div key={idx} className="code-example">
                        <div className="example-header">
                          <span className="example-title">{example.title}</span>
                          <span className="example-lang">{example.language}</span>
                        </div>
                        <pre className="example-code"><code>{example.code}</code></pre>
                      </div>
                    ))}

                    {/* Videos Section */}
                    {currentTopic.videos && currentTopic.videos.length > 0 && (
                      <div className="videos-section">
                        <div className="videos-header">
                          <PlayCircle size={24} />
                          <div>
                            <h3>Əlavə Video İzahlar</h3>
                            <p className="videos-disclaimer">
                              ⚠️ Bu videolar təhsil məqsədləri üçün təqdim edilib. 
                              Videoların müəllif hüquqları respective sahiblərinə aiddir.
                            </p>
                          </div>
                        </div>
                        <div className="videos-list">
                          {currentTopic.videos.map((video, idx) => (
                            <div key={idx} className="video-card">
                              <div className="video-thumbnail">
                                <PlayCircle size={32} />
                                <span className="video-duration">{video.duration}</span>
                              </div>
                              <div className="video-info">
                                <h4 className="video-title">{video.title}</h4>
                                <p className="video-channel">{video.channel}</p>
                                <p className="video-note">{video.note}</p>
                              </div>
                              <a 
                                href="#" 
                                className="video-link"
                                onClick={(e) => {
                                  e.preventDefault();
                                  alert('Link yerləşdirilməli yer. Admin: Buraya YouTube linkini əlavə edin.');
                                }}
                              >
                                <ExternalLink size={16} />
                              </a>
                            </div>
                          ))}
                        </div>
                        <div className="video-placeholder-notice">
                          <AlertCircle size={16} />
                          <span>
                            <strong>Admin üçün:</strong> YouTube video linklərini yuxarıdakı kartlara əlavə edin. 
                            Hər video üçün title, channel, duration və note məlumatlarını yeniləyin.
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="topic-navigation">
                      <button className="btn-prev">
                        <ChevronRight style={{ transform: 'rotate(180deg)' }} size={20} />
                        Əvvəlki
                      </button>
                      <button 
                        className="btn-complete"
                        onClick={() => {
                          if (!completedTopics.includes(currentTopic.id)) {
                            setCompletedTopics([...completedTopics, currentTopic.id]);
                          }
                        }}
                      >
                        {completedTopics.includes(currentTopic.id) ? (
                          <><Check size={20} /> Tamamlandı</>
                        ) : (
                          'Tamamla'
                        )}
                      </button>
                      <button className="btn-next">
                        Növbəti
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Code Tab */}
                {activeTab === 'code' && (
                  <div className="code-tab">
                    <div className="exercise-panel">
                      <h3><Terminal size={24} /> Praktik Tapşırıq</h3>
                      <p className="exercise-instructions">{currentTopic.codingExercise?.instructions}</p>
                      
                      <div className="requirements-list">
                        <h4>Tələblər:</h4>
                        <ul>
                          {currentTopic.codingExercise?.requirements.map((req, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: req }} />
                          ))}
                        </ul>
                      </div>
                      
                      <button className="btn-hints" onClick={() => setShowHints(!showHints)}>
                        <HelpCircle size={16} />
                        {showHints ? 'Gizlət' : 'İpuçları göstər'}
                      </button>
                      
                      {showHints && (
                        <div className="hints-box">
                          {currentTopic.codingExercise?.hints.map((hint, idx) => (
                            <div key={idx} className="hint-item">
                              <span className="hint-number">{idx + 1}</span>
                              {hint}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="editor-panel">
                      <div className="editor-header">
                        <span className="file-name">main.py</span>
                        <div className="editor-actions">
                          <button onClick={resetCode}><RotateCcw size={14} /> Sıfırla</button>
                          <button onClick={runCode} className="btn-run"><PlayCircle size={14} /> İşlət</button>
                        </div>
                      </div>
                      <textarea
                        className="code-editor python-editor"
                        value={codeValue}
                        onChange={(e) => setCodeValue(e.target.value)}
                        spellCheck={false}
                      />
                    </div>
                    
                    <div className="preview-panel">
                      <div className="preview-header"><span>Konsol Çıxışı</span></div>
                      <pre className="console-output">{codeOutput || 'Kodu işlətdikdən sonra nəticə burada görünəcək...'}</pre>
                    </div>
                    
                    {codeOutput && (
                      <div className={`code-output ${codeSuccess ? 'success' : 'error'}`}>
                        {codeSuccess ? <Check size={20} /> : <AlertCircle size={20} />}
                        {codeOutput.split('\n')[0]}
                      </div>
                    )}
                  </div>
                )}

                {/* Quiz Tab */}
                {activeTab === 'quiz' && currentTopic.quiz && (
                  <div className="quiz-tab">
                    <div className="quiz-header">
                      <h3><Target size={24} /> {currentTopic.quiz.title}</h3>
                      <span className="quiz-info">15 sual • Vaxt limiti yoxdur</span>
                    </div>
                    
                    {!quizSubmitted ? (
                      <div className="quiz-questions">
                        {currentTopic.quiz.questions.map((q, idx) => (
                          <div key={q.id} className="question-card">
                            <div className="question-number">Sual {idx + 1}</div>
                            <p className="question-text" dangerouslySetInnerHTML={{ __html: q.question }} />
                            <div className="options-list">
                              {q.options.map((opt, optIdx) => (
                                <label key={optIdx} className={`option-label ${quizAnswers[idx] === optIdx ? 'selected' : ''}`}>
                                  <input
                                    type="radio"
                                    name={`question-${idx}`}
                                    checked={quizAnswers[idx] === optIdx}
                                    onChange={() => setQuizAnswers({...quizAnswers, [idx]: optIdx})}
                                  />
                                  <span className="option-letter">{String.fromCharCode(65 + optIdx)}</span>
                                  <span className="option-text" dangerouslySetInnerHTML={{ __html: opt }} />
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        <button 
                          className="btn-submit-quiz"
                          onClick={submitQuiz}
                          disabled={Object.keys(quizAnswers).length < currentTopic.quiz.questions.length}
                        >
                          Quiz-i Təsdiqlə ({Object.keys(quizAnswers).length}/15)
                        </button>
                      </div>
                    ) : (
                      <div className="quiz-results">
                        <div className={`result-score ${quizScore >= 80 ? 'excellent' : quizScore >= 60 ? 'good' : 'needs-work'}`}>
                          <Trophy size={48} />
                          <span className="score-percent">{quizScore}%</span>
                          <span className="score-label">
                            {quizScore >= 80 ? 'Əla!' : quizScore >= 60 ? 'Yaxşı!' : 'Daha çox çalışmalısan'}
                          </span>
                        </div>
                        
                        <div className="result-details">
                          Düzgün cavablar: {quizResults[currentTopic.id]?.correct} / 15
                        </div>
                        
                        <div className="question-review">
                          {currentTopic.quiz.questions.map((q, idx) => (
                            <div key={q.id} className={`review-item ${quizAnswers[idx] === q.correct ? 'correct' : 'wrong'}`}>
                              <div className="review-status">
                                {quizAnswers[idx] === q.correct ? <Check size={16} /> : <X size={16} />}
                              </div>
                              <div className="review-content">
                                <p className="review-question">{idx + 1}. {q.question}</p>
                                {quizAnswers[idx] !== q.correct && (
                                  <p className="review-explanation">
                                    <strong>Doğru cavab:</strong> {q.options[q.correct]}<br/>
                                    {q.explanation}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {quizScore < 80 && (
                          <div className="improvement-tips">
                            <AlertCircle size={20} />
                            <div>
                              <strong>Təkmilləşdirmə tövsiyələri:</strong>
                              <ul>
                                {quizScore < 60 && <li>Python əsaslarını yenidən oxuyun</li>}
                                <li>Praktiki kod yazmağa daha çox vaxt ayırın</li>
                                <li>Video izahları izləyin</li>
                              </ul>
                            </div>
                          </div>
                        )}
                        
                        <button className="btn-retry" onClick={() => { setQuizSubmitted(false); setQuizAnswers({}); setQuizScore(0); }}>
                          <RotateCcw size={16} /> Yenidən Cəhd Et
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Support Tab */}
                {activeTab === 'support' && (
                  <div className="support-tab">
                    <div className="support-header">
                      <MessageCircle size={24} />
                      <div>
                        <h3>Mentor Dəstəyi</h3>
                        <p>Bu mövzu ilə bağlı sualınız var?</p>
                      </div>
                    </div>
                    
                    <form onSubmit={submitSupport} className="support-form">
                      <div className="form-group">
                        <label>Mövzu</label>
                        <input type="text" value={currentTopic.title} disabled className="form-input" />
                      </div>
                      <div className="form-group">
                        <label>Sualınız *</label>
                        <textarea
                          value={supportQuestion}
                          onChange={(e) => setSupportQuestion(e.target.value)}
                          placeholder="Məsələn: dəyişən adı niyə rəqəmlə başlaya bilməz?"
                          rows={5}
                          required
                          className="form-textarea"
                        />
                      </div>
                      <button type="submit" className="btn-send" disabled={supportSubmitted}>
                        {supportSubmitted ? <><Check size={18} /> Göndərildi</> : <><Send size={18} /> Sual Göndər</>}
                      </button>
                    </form>
                    
                    {supportSubmitted && (
                      <div className="support-confirmation">
                        <div className="confirmation-icon">✓</div>
                        <div>
                          <strong>Sualınız qəbul edildi!</strong>
                          <p>Admin 24 saat ərzində cavab verəcək.</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>

      {/* Analysis Modal */}
      {showAnalysis && (
        <div className="modal-overlay" onClick={() => setShowAnalysis(false)}>
          <div className="analysis-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2><TrendingUp size={24} /> Öyrənmə Analizi</h2>
              <button onClick={() => setShowAnalysis(false)}><X size={24} /></button>
            </div>
            <div className="analysis-content">
              <div className="analysis-section">
                <h3>Bu Həftənin Performansı</h3>
                <div className="stats-grid">
                  <div className="stat-card"><BookOpen size={24} /><span className="stat-value">3/5</span><span className="stat-label">Mövzu</span></div>
                  <div className="stat-card"><Terminal size={24} /><span className="stat-value">85%</span><span className="stat-label">Kod dəqiqliyi</span></div>
                  <div className="stat-card"><Target size={24} /><span className="stat-value">73%</span><span className="stat-label">Orta quiz</span></div>
                  <div className="stat-card"><Clock size={24} /><span className="stat-value">5s</span><span className="stat-label">Orta vaxt</span></div>
                </div>
              </div>
              
              <div className="analysis-section">
                <h3>Güclü və Zəif Tərəflər</h3>
                <div className="swot-grid">
                  <div className="swot-card strength">
                    <h4><Check size={18} /> Güclü tərəflər</h4>
                    <ul><li>Python sintaksisi</li><li>Dəyişən anlayışı</li></ul>
                  </div>
                  <div className="swot-card weakness">
                    <h4><AlertCircle size={18} /> İnkişaf etdirilməli</h4>
                    <ul><li>Data tipləri</li><li>Operatorlar</li></ul>
                  </div>
                </div>
              </div>
              
              <div className="analysis-section">
                <h3>Şəxsi Tövsiyələr</h3>
                <div className="recommendations-list">
                  <div className="recommendation-item">
                    <div className="rec-priority high">Vacib</div>
                    <p>Data tipləri mövzusunu təkrarlayın</p>
                  </div>
                  <div className="recommendation-item">
                    <div className="rec-priority medium">Orta</div>
                    <p>Python dokumentasiyasına baxın</p>
                  </div>
                </div>
              </div>
              
              <div className="analysis-section">
                <h3>Növbəti Addımlar</h3>
                <div className="next-steps">
                  <div className="step-item completed"><CheckCircle size={20} /><span>Pythona giriş</span></div>
                  <div className="step-item current"><Circle size={20} /><span>Data tipləri (indi buradasınız)</span></div>
                  <div className="step-item pending"><Circle size={20} /><span>Şərti operatorlar</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AI;