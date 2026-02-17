import React, { useState, useEffect, useRef, useMemo } from 'react';
import { auth, db } from '../firebase';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  serverTimestamp,
  setDoc 
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { 
  Bot, 
  X, 
  Send, 
  Brain,
  Menu,
  ChevronRight,
  Lock,
  CheckCircle2,
  PlayCircle,
  BookOpen,
  Code2,
  FileEdit,
  BarChart3,
  Video,
  Play,
  ExternalLink
} from 'lucide-react';
import '../styles/AI.css';

// Import all AI topics
import { topicai1 } from '../data/topicai1';
import { topicai2 } from '../data/topicai2';
import { topicai3 } from '../data/topicai3';
import { topicai4 } from '../data/topicai4';
import { topicai5 } from '../data/topicai5';
import { topicai6 } from '../data/topicai6';
import { topicai7 } from '../data/topicai7';
import { topicai8 } from '../data/topicai8';
import { topicai9 } from '../data/topicai9';
import { topicai10 } from '../data/topicai10';
import { topicai11 } from '../data/topicai11';
import { topicai12 } from '../data/topicai12';
import { topicai13 } from '../data/topicai13';
import { topicai14 } from '../data/topicai14';
import { topicai15 } from '../data/topicai15';
import { topicai16 } from '../data/topicai16';
import { topicai17 } from '../data/topicai17';
import { topicai18 } from '../data/topicai18';
import { topicai19 } from '../data/topicai19';
import { topicai20 } from '../data/topicai20';

// Import Editor component
import Editor from './Editor';

const topics = [
  topicai1, topicai2, topicai3, topicai4, topicai5,
  topicai6, topicai7, topicai8, topicai9, topicai10,
  topicai11, topicai12, topicai13, topicai14, topicai15,
  topicai16, topicai17, topicai18, topicai19, topicai20
];

const COURSE_ID = 'ai-python';

// API Key
const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

// Navigation items for mobile menu
const NAV_ITEMS = [
  { id: 'content', icon: BookOpen, label: 'Məzmun', emoji: '📚' },
  { id: 'editor', icon: Code2, label: 'Editor', emoji: '🐍' },
  { id: 'exercise', icon: FileEdit, label: 'Tapşırıq', emoji: '✏️' },
  { id: 'quiz', icon: PlayCircle, label: 'Quiz', emoji: '📝' },
  { id: 'analysis', icon: BarChart3, label: 'Təhlil', emoji: '📊' },
  { id: 'videos', icon: Video, label: 'Video', emoji: '🎥' },
];

// AI Course Video Links Configuration
const aiVideoLinks = [
  // Topic 1: Python Variables and Data Types
  {
    topicId: 1,
    title: "Python Dəyişənləri",
    duration: "15:30",
    url: "https://youtu.be/V1c0MzR8qo8?si=VTQFIcaakZHEgdCv"
  },
  {
    topicId: 1,
    title: "Python Məlumat Tipləri",
    duration: "12:45",
    url: "https://youtu.be/L2Ryd70pVXI?si=9iDC00hct2RHUxHM"
  },
  
  // Topic 2: List, Tuple, Dictionary and Set
  {
    topicId: 2,
    title: "Set ve Tuple",
    duration: "18:20",
    url: "https://youtu.be/OMwQ_i9GJbI?si=3UJH1fepGsU1bGvM"
  },
  {
    topicId: 2,
    title: "List",
    duration: "16:50",
    url: "https://youtu.be/pBMuc4cc_Ck?si=lgfUe58fWOXJFmAC"
  },
  {
    topicId: 2,
    title: "Dictionary",
    duration: "12:30",
    url: "https://youtu.be/0jKOxXn7yMg?si=z7Q8jpACJ1gf9BCN"
  },

  // Topic 3: Conditional Operators
  {
    topicId: 3,
    title: "Şərt Operatorları",
    duration: "14:15",
    url: "https://youtu.be/R6DmpXky2WA?si=bpTWg7WpUfkIPtbt"
  },
  {
    topicId: 3,
    title: "Şərt Operatorları : İç-içə Şərtlər",
    duration: "17:30",
    url: "https://youtu.be/gbNRVvPdSa0?si=UdQ6KZUWT-8OBh60"
  },
  
  // Topic 4: Loops
  {
    topicId: 4,
    title: "Dövrlər : For və While Dövrləri",
    duration: "19:45",
    url: "https://youtu.be/JUsemOXDvjY?si=axD0VxWozQFym2DK"
  },
  
  // Topic 5: Functions
  {
    topicId: 5,
    title: "Funksiyalar",
    duration: "22:10",
    url: "https://youtu.be/_HRn8zB47cs?si=oHTLBbs3EWrQ7_Uu"
  },
  {
    topicId: 5,
    title: "Lambda və Map Funksiyaları : Anonim Funksiyalar",
    duration: "13:40",
    url: "https://youtu.be/yC9DIGj_J5o?si=8N7R5Ae1pf_3edNH"
  },
  
  // Topic 6-20 videos...
  {
    topicId: 6,
    title: "Fayllarla İş: Oxumaq və Yazmaq Əməliyyatları",
    duration: "16:55",
    url: ""
  },
  {
    topicId: 7,
    title: "Xətaların İdarə Edilməsi: Try/Except Blokları",
    duration: "18:30",
    url: ""
  },
  {
    topicId: 8,
    title: "Oyun Alqoritmləri: Döyüş və Xal Sistemləri",
    duration: "25:15",
    url: ""
  },
  {
    topicId: 9,
    title: "OOP: Class və Object Anlayışları",
    duration: "21:30",
    url: ""
  },
  {
    topicId: 10,
    title: "Varislik: Class-lar Arası Münasibətlər",
    duration: "19:20",
    url: ""
  },
  {
    topicId: 11,
    title: "NumPy: Massivlər və Əsas Əməliyyatlar",
    duration: "23:45",
    url: ""
  },
  {
    topicId: 12,
    title: "Matris Əməliyyatları: Toplama, Çıxma, Vurma",
    duration: "20:15",
    url: ""
  },
  {
    topicId: 13,
    title: "Xətti Cəbr: Vektorlar və Skalyarlar",
    duration: "22:40",
    url: ""
  },
  {
    topicId: 14,
    title: "Statistika: Orta Qiymət və Median",
    duration: "17:35",
    url: ""
  },
  {
    topicId: 15,
    title: "Ehtimal Nəzəriyyəsi: Əsas Anlayışlar",
    duration: "20:50",
    url: ""
  },
  {
    topicId: 16,
    title: "Pandas: DataFrame Strukturu və Yaradılması",
    duration: "24:30",
    url: ""
  },
  {
    topicId: 17,
    title: "Məlumat Təmizləmə: NaN Dəyərlər və Duplicate-lər",
    duration: "22:45",
    url: ""
  },
  {
    topicId: 18,
    title: "GroupBy: Qruplaşdırma və Aqreqasiya",
    duration: "20:20",
    url: ""
  },
  {
    topicId: 19,
    title: "Matplotlib: Qrafiklər və Vizualizasiya Əsasları",
    duration: "23:15",
    url: ""
  },
  {
    topicId: 20,
    title: "Seaborn: Statistik Vizualizasiya Kitabxanası",
    duration: "21:50",
    url: ""
  }
];

const AI = () => {
  const [currentTopic, setCurrentTopic] = useState(0);
  const [accessCode, setAccessCode] = useState('');
  const [isActivated, setIsActivated] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [exerciseCode, setExerciseCode] = useState('');
  const [exerciseOutput, setExerciseOutput] = useState('');
  const [analysisData, setAnalysisData] = useState({
    weeklyProgress: [],
    completedTopics: [],
    quizScores: [],
    codingAttempts: [],
    totalTimeSpent: 0,
    pythonSkillScores: {
      basics: 0,
      dataStructures: 0,
      oop: 0,
      numpy: 0,
      pandas: 0,
      visualization: 0,
      statistics: 0
    }
  });
  
  const [user, setUser] = useState(null);
  const [activationData, setActivationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activationError, setActivationError] = useState('');
  const [currentMonth, setCurrentMonth] = useState(0);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Chatbot state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Salam! 👋 Mən Lumina AI Təhsil Platformasının Süni İntellekt Kurs Müəllimiyəm. Sizə Python, Data Science, Machine Learning və Deep Learning mövzularında tam dəstək verirəm. Sualınız varsa, buyurun soruşun! Mövcud mövzularımız:\n\n1. Python Əsasları\n2. NumPy & Pandas\n3. Data Vizualizasiya\n4. Machine Learning\n5. Deep Learning\n\nHansı mövzuda kömək lazımdır?' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Chatbot functions
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      if (!GROQ_API_KEY || GROQ_API_KEY === "YOUR_API_KEY_HERE") {
        throw new Error('API açarı təyin edilməyib');
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
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
              content: `Sən Lumina Təhsil Platformasının rəsmi Süni İntellekt Kurs Müəllimisisən. 
              
Əsas vəzifən:
- Tələbələrə Python proqramlaşdırma, Data Science, Machine Learning və Deep Learning öyrətmək
- Hər sualı çox sadə, anlaşıqlı və ətraflı izah etmək
- Real həyat nümunələri ilə izahlar vermək
- Tələbənin səviyyəsinə uyğun fərdi yanaşma göstərmək
- Həvəsləndirici və dəstəkçi olmaq

Kurs strukturumuz:
1. Python Əsasları (Dəyişənlər, List, Dictionary, Funksiyalar, OOP)
2. NumPy (Massivlər, Matris əməliyyatları)
3. Pandas (DataFrame, Data Cleaning, GroupBy)
4. Data Vizualizasiya (Matplotlib, Seaborn)
5. Statistika və Ehtimal Nəzəriyyəsi
6. Machine Learning Alqoritmləri
7. Deep Learning və Neural Networks

Hər zaman azərbaycanca cavab ver. Çox uzun olmayan, amma ətraflı izahlar ver. Kod nümunələri ilə izah et. Tələbə çətinlik çəkirsə, daha sadə izah et. Həvəsləndirici ol!`
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: inputMessage }
          ],
          temperature: 0.7,
          max_tokens: 2048
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `HTTP xəta: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('API-dən cavab alınmadı');
      }

      const botResponse = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
      
    } catch (error) {
      console.error('Chatbot xətası:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Bağışlayın, texniki problem yarandı: ${error.message}. Zəhmət olmasa sonra yenidən cəhd edin.` 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await checkUserActivation(currentUser.uid);
      } else {
        setUser(null);
        setIsActivated(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // FRONTEND.JSX İLƏ TAM EYNİ - checkUserActivation
  const checkUserActivation = async (userId) => {
    try {
      const codeRef = doc(db, 'users', userId, 'activationCodes', COURSE_ID);
      const codeSnap = await getDoc(codeRef);

      if (codeSnap.exists()) {
        const data = codeSnap.data();
        setActivationData(data);
        
        if (data.status === 'active') {
          setIsActivated(true);
          setCurrentMonth(data.currentMonth || 1);
          localStorage.setItem('ai_course_activated', 'true');
          localStorage.setItem('ai_current_month', data.currentMonth || 1);
        } else {
          setIsActivated(false);
        }
      } else {
        setIsActivated(false);
      }

      await loadUserAnalysis(userId);
      
    } catch (error) {
      console.error('Aktivləşdirmə yoxlama xətası:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadUserAnalysis = async (userId) => {
    try {
      const analysisRef = doc(db, 'users', userId, 'courseProgress', COURSE_ID);
      const analysisSnap = await getDoc(analysisRef);
      
      if (analysisSnap.exists()) {
        setAnalysisData(analysisSnap.data());
      } else {
        const savedAnalysis = localStorage.getItem('ai_course_analysis');
        if (savedAnalysis) {
          const parsed = JSON.parse(savedAnalysis);
          setAnalysisData(parsed);
          await setDoc(analysisRef, parsed);
        }
      }
    } catch (error) {
      console.error('Analiz yükləmə xətası:', error);
    }
  };

  // FRONTEND.JSX İLƏ TAM EYNİ - activateCourse
  const activateCourse = async (inputCode) => {
    setActivationError('');
    
    if (!user) {
      setActivationError('Əvvəlcə daxil olun');
      return false;
    }

    try {
      const codeRef = doc(db, 'activationCodes', inputCode.toUpperCase());
      const codeSnap = await getDoc(codeRef);

      if (!codeSnap.exists()) {
        setActivationError('Yanlış aktivləşdirmə kodu');
        return false;
      }

      const codeData = codeSnap.data();

      if (codeData.course !== COURSE_ID) {
        setActivationError('Bu kod bu kurs üçün deyil');
        return false;
      }

      if (codeData.userId !== user.uid) {
        setActivationError('Bu kod sizə aid deyil');
        return false;
      }

      if (codeData.status === 'active') {
        setIsActivated(true);
        setCurrentMonth(codeData.currentMonth || 1);
        return true;
      }

      if (codeData.status === 'used' || codeData.status === 'expired') {
        setActivationError('Bu kod artıq istifadə olunub və ya vaxtı bitib');
        return false;
      }

      const updateData = {
        status: 'active',
        activatedAt: serverTimestamp(),
        currentMonth: 1,
        'payment.status': 'pending'
      };

      await updateDoc(codeRef, updateData);
      await updateDoc(doc(db, 'users', user.uid, 'activationCodes', COURSE_ID), updateData);

      setIsActivated(true);
      setCurrentMonth(1);
      setActivationData({ ...codeData, ...updateData });
      
      localStorage.setItem('ai_course_activated', 'true');
      localStorage.setItem('ai_current_month', '1');

      return true;

    } catch (error) {
      console.error('Aktivləşdirmə xətası:', error);
      setActivationError('Sistem xətası baş verdi');
      return false;
    }
  };

  useEffect(() => {
    const savedMonth = localStorage.getItem('ai_current_month');
    if (savedMonth) {
      setCurrentMonth(parseInt(savedMonth));
    }
  }, []);

  useEffect(() => {
    const topic = topics[currentTopic];
    if (topic && topic.starterCode) {
      setExerciseCode(topic.exercise?.starterCode || '');
    }
  }, [currentTopic]);

  const checkAccess = () => {
    if (currentTopic === 0) return true;
    if (isActivated) return true;
    return false;
  };

  // Handle topic selection from mobile menu
  const handleTopicSelect = (idx) => {
    setCurrentTopic(idx);
    setQuizSubmitted(false);
    setQuizAnswers({});
    setActiveTab('content');
    setIsMobileMenuOpen(false);
  };

  // Handle tab selection from mobile menu
  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  const runExerciseCode = async (code) => {
    setExerciseCode(code);
  };

  const updateSkillScore = (topicIndex) => {
    const skillCategories = {
      0: 'basics', 1: 'dataStructures', 2: 'basics', 3: 'basics', 4: 'basics',
      5: 'basics', 6: 'basics', 7: 'basics', 8: 'oop', 9: 'oop',
      10: 'numpy', 11: 'numpy', 12: 'numpy', 13: 'statistics', 14: 'statistics',
      15: 'pandas', 16: 'pandas', 17: 'pandas', 18: 'visualization', 19: 'visualization'
    };
    
    const skill = skillCategories[topicIndex];
    if (skill) {
      setAnalysisData(prev => ({
        ...prev,
        pythonSkillScores: {
          ...prev.pythonSkillScores,
          [skill]: Math.min(100, (prev.pythonSkillScores[skill] || 0) + 10)
        }
      }));
    }
  };

  const handleQuizSubmit = () => {
    const topic = topics[currentTopic];
    let score = 0;
    topic.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctAnswer) score++;
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    
    updateAnalysis('quizScores', {
      topicId: currentTopic + 1,
      score: score,
      total: topic.quiz.length,
      timestamp: new Date().toISOString()
    });

    if (score >= 7) {
      updateAnalysis('completedTopics', currentTopic + 1);
      updateSkillScore(currentTopic);
    }
  };

  const updateAnalysis = async (field, data) => {
    const newAnalysis = { ...analysisData };
    if (Array.isArray(newAnalysis[field])) {
      if (field === 'completedTopics') {
        if (!newAnalysis[field].includes(data)) {
          newAnalysis[field].push(data);
        }
      } else {
        newAnalysis[field].push(data);
      }
    }
    setAnalysisData(newAnalysis);
    
    localStorage.setItem('ai_course_analysis', JSON.stringify(newAnalysis));
    
    if (user) {
      try {
        const analysisRef = doc(db, 'users', user.uid, 'courseProgress', COURSE_ID);
        await setDoc(analysisRef, newAnalysis, { merge: true });
      } catch (error) {
        console.error('Analiz saxlama xətası:', error);
      }
    }
  };

  const calculateWeeklyProgress = () => {
    const weeks = 4;
    const topicsPerWeek = 5;
    const progress = [];
    
    for (let week = 0; week < weeks; week++) {
      const completed = analysisData.completedTopics.filter(id => 
        id > week * topicsPerWeek && id <= (week + 1) * topicsPerWeek
      ).length;
      
      progress.push({
        week: week + 1,
        completed: completed,
        total: topicsPerWeek,
        percentage: (completed / topicsPerWeek) * 100
      });
    }
    return progress;
  };

  const calculateMonthlyStats = () => {
    const totalQuizzes = analysisData.quizScores.length;
    const avgScore = totalQuizzes > 0 
      ? analysisData.quizScores.reduce((acc, q) => acc + (q.score / q.total) * 100, 0) / totalQuizzes 
      : 0;
    const codingSuccess = analysisData.codingAttempts.filter(a => a.success).length;
    const totalCoding = analysisData.codingAttempts.length;
    
    return {
      topicsCompleted: analysisData.completedTopics.length,
      totalTopics: 20,
      averageQuizScore: avgScore.toFixed(1),
      codingSuccessRate: totalCoding > 0 ? ((codingSuccess / totalCoding) * 100).toFixed(1) : 0,
      totalCodingAttempts: totalCoding
    };
  };

  const getSkillData = () => {
    const skills = analysisData.pythonSkillScores || {};
    return [
      { name: 'Python Əsasları', value: Math.round((skills.basics + skills.dataStructures) / 2 || 0) },
      { name: 'OOP', value: skills.oop || 0 },
      { name: 'NumPy', value: skills.numpy || 0 },
      { name: 'Statistika', value: skills.statistics || 0 },
      { name: 'Pandas', value: skills.pandas || 0 },
      { name: 'Vizualizasiya', value: skills.visualization || 0 }
    ];
  };

  const renderAnalysis = () => {
    const weekly = calculateWeeklyProgress();
    const monthly = calculateMonthlyStats();
    const skills = getSkillData();
    
    return (
      <div className="analysis-section">
        <h3>📊 AI Kurs Təhlili</h3>
        
        {isActivated && (
          <div className="activation-info-banner">
            <p>✅ Kurs Aktivdir | Ay: {currentMonth}/4</p>
          </div>
        )}
        
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Ümumi Progress</h4>
            <div className="progress-circle">
              <span>{monthly.topicsCompleted}/{monthly.totalTopics}</span>
              <small>Mövzu</small>
            </div>
          </div>
          
          <div className="stat-card">
            <h4>Ortalama Quiz</h4>
            <div className="score-display">{monthly.averageQuizScore}%</div>
          </div>
          
          <div className="stat-card">
            <h4>Kod Uğuru</h4>
            <div className="success-rate">{monthly.codingSuccessRate}%</div>
            <small>{monthly.totalCodingAttempts} cəhd</small>
          </div>
        </div>

        <div className="skills-radar">
          <h4>Python Bacarıqlar</h4>
          <div className="radar-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-bar">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-track">
                  <div className="skill-fill" style={{width: skill.value + '%'}}/>
                </div>
                <span className="skill-value">{skill.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="weekly-progress">
          <h4>Həftəlik Progress</h4>
          {weekly.map((week, idx) => (
            <div key={idx} className="week-bar">
              <span>Həftə {week.week}</span>
              <div className="progress-track">
                <div className="progress-fill" style={{width: week.percentage + '%'}}/>
              </div>
              <span>{week.completed}/{week.total}</span>
            </div>
          ))}
        </div>

        <div className="topic-breakdown">
          <h4>Mövzu Detalları</h4>
          <div className="topic-status-grid">
            {topics.map((topic, idx) => {
              const isCompleted = analysisData.completedTopics.includes(idx + 1);
              const quizData = analysisData.quizScores.find(q => q.topicId === idx + 1);
              
              return (
                <div 
                  key={idx} 
                  className={'topic-status ' + (isCompleted ? 'completed' : '')}
                  onClick={() => setCurrentTopic(idx)}
                >
                  <span className="topic-num">{idx + 1}</span>
                  <span className="topic-title">{topic.title}</span>
                  {quizData && (
                    <span className="quiz-badge">
                      {Math.round((quizData.score / quizData.total) * 100)}%
                    </span>
                  )}
                  {isCompleted && <CheckCircle2 size={16} className="check-icon"/>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Video bölməsi
  const renderVideoHelp = () => {
    const currentTopicId = currentTopic + 1;
    const topicVideos = aiVideoLinks.filter(video => video.topicId === currentTopicId);

    const handleWatchClick = (videoUrl) => {
      if (videoUrl && videoUrl.trim() !== '') {
        window.open(videoUrl, '_blank', 'noopener,noreferrer');
      } else {
        alert('Bu video tezliklə əlavə olunacaq!');
      }
    };

    return (
      <div className="video-help-section">
        <div className="video-header">
          <h3>🎥 Video Dəstəyi</h3>
          <p className="video-subtitle">
            Mövzu {currentTopicId}: {topics[currentTopic]?.title}
          </p>
        </div>
        
        <div className="video-buttons-container">
          {topicVideos.length === 0 ? (
            <div className="no-videos-card">
              <Video size={48} className="no-videos-icon" />
              <p>Bu mövzu üçün hələ video əlavə edilməyib.</p>
            </div>
          ) : (
            <div className="video-buttons-grid">
              {topicVideos.map((video, index) => {
                const hasUrl = video.url && video.url.trim() !== '';
                
                return (
                  <div key={index} className="video-card">
                    <div className="video-info-section">
                      <div className={`video-play-icon ${hasUrl ? 'active' : 'disabled'}`}>
                        {hasUrl ? <Play size={24} fill="currentColor" /> : <Lock size={24} />}
                      </div>
                      
                      <div className="video-details">
                        <span className="video-title">{video.title}</span>
                        <span className="video-duration">⏱️ {video.duration}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleWatchClick(video.url)}
                      className={`watch-button ${hasUrl ? 'active' : 'disabled'}`}
                      disabled={!hasUrl}
                    >
                      {hasUrl ? (
                        <>
                          <Play size={16} />
                          <span>İZLƏ</span>
                          <ExternalLink size={14} />
                        </>
                      ) : (
                        <>
                          <Lock size={16} />
                          <span>Tezliklə</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  const hasAccess = checkAccess();
  const currentTopicData = topics[currentTopic];
  const completedCount = analysisData.completedTopics.length;

  if (loading) {
    return <div className="loading-screen">Yüklənir...</div>;
  }

  return (
    <div className="ai-course">
      {/* Header with Hamburger */}
      <header className="course-header">
        <div className="header-left">
          <button 
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menyu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            {completedCount > 0 && <span className="menu-badge">{completedCount}</span>}
          </button>
          
          <h1>🤖 Python AI Kursu</h1>
        </div>
        
        <div className="header-actions">
          <a href="/" className="home-btn">🏠 Ana Səhifə</a>
          {isActivated ? (
            <span className="badge activated">✓ Aktiv (Ay {currentMonth})</span>
          ) : (
            <span className="badge inactive">🔒 Deaktiv</span>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <nav className={`mobile-menu-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <div className="drawer-brand-icon">🤖</div>
            <div className="drawer-brand-text">
              <h2>AI Kursu</h2>
              <p>Mövzu {currentTopic + 1} / 20</p>
            </div>
          </div>
          <button 
            className="close-drawer"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Bağla"
          >
            <X size={24}/>
          </button>
        </div>

        <div className="drawer-content">
          {/* Navigation Section */}
          <div className="drawer-section">
            <div className="drawer-section-title">🧭 Naviqasiya</div>
            <div className="drawer-nav">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className={`drawer-nav-item ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => handleTabSelect(item.id)}
                  >
                    <span className="drawer-nav-icon">{item.emoji}</span>
                    <span className="drawer-nav-label">{item.label}</span>
                    {activeTab === item.id && <ChevronRight size={18} className="chevron"/>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Topics Section */}
          <div className="drawer-section">
            <div className="drawer-section-title">📖 AI Mövzuları ({topics.length})</div>
            <div className="drawer-topics">
              {topics.map((topic, idx) => {
                const isCompleted = analysisData.completedTopics.includes(idx + 1);
                const quizData = analysisData.quizScores.find(q => q.topicId === idx + 1);
                const isLocked = !isActivated && idx !== 0;
                const isActive = currentTopic === idx;
                
                return (
                  <button
                    key={idx}
                    className={`drawer-topic-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                    onClick={() => !isLocked && handleTopicSelect(idx)}
                    disabled={isLocked}
                  >
                    <div className="topic-main">
                      <span className={`drawer-topic-number ${isActive ? 'active' : ''}`}>
                        {idx + 1}
                      </span>
                      <span className="drawer-topic-name">{topic.title}</span>
                    </div>
                    <div className="drawer-topic-badge">
                      {idx === 0 && <span className="free-badge">FREE</span>}
                      {isLocked && <Lock size={16} className="lock-icon"/>}
                      {!isLocked && quizData && !isCompleted && (
                        <span className="progress-badge">
                          {Math.round((quizData.score / quizData.total) * 100)}%
                        </span>
                      )}
                      {isCompleted && <CheckCircle2 size={20} className="completed-badge"/>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="drawer-footer">
          <div className={`drawer-status ${isActivated ? 'active' : ''}`}>
            <span>{isActivated ? '✅' : '🔓'}</span>
            <span>{isActivated ? `Kurs Aktivdir (Ay ${currentMonth})` : 'İlk mövzu pulsuzdur'}</span>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <div className="course-layout">
        <aside className="desktop-sidebar">
          <div className="desktop-sidebar-header">
            <h3>📚 AI Mövzuları</h3>
          </div>
          <div className="desktop-topics-list">
            {topics.map((topic, idx) => (
              <button
                key={idx}
                className={`desktop-topic-item ${currentTopic === idx ? 'active' : ''}`}
                onClick={() => {
                  setCurrentTopic(idx);
                  setQuizSubmitted(false);
                  setQuizAnswers({});
                  setActiveTab('content');
                }}
              >
                <span className="topic-number">{idx + 1}</span>
                <span className="topic-name">{topic.title}</span>
                {analysisData.completedTopics.includes(idx + 1) && (
                  <CheckCircle2 size={16} className="check-icon"/>
                )}
              </button>
            ))}
          </div>
        </aside>

        <main className="content-area">
          {/* Desktop Tabs */}
          <div className="desktop-tabs">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={activeTab === item.id ? 'active' : ''}
                onClick={() => setActiveTab(item.id)}
              >
                {item.emoji} {item.label}
              </button>
            ))}
          </div>

          {!hasAccess ? (
            <div className="access-lock">
              <div className="lock-icon">🔒</div>
              <h2>Mövzu {currentTopic + 1}: {currentTopicData.title}</h2>
              <p>Bu mövzuya baxmaq üçün aktivləşdirmə kodu tələb olunur</p>

              <div className="activation-form">
                <input
                  type="text"
                  placeholder="Aktivləşdirmə kodunu daxil edin"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                />
                <button onClick={() => activateCourse(accessCode)}>Aktivləşdir</button>
                {activationError && <p className="error-text">{activationError}</p>}
                <p className="help-text">
                  Nümunə kod formatı: AI2024 (sadəcə nümunədir, aktivləşdirmir)
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="topic-header">
                <h2>Mövzu {currentTopic + 1}: {currentTopicData.title}</h2>
                <span className="duration">⏱️ {currentTopicData.duration}</span>
              </div>

              <div className="tab-content">
                {activeTab === 'content' && (
                  <div className="content-html" dangerouslySetInnerHTML={{ __html: currentTopicData.content }} />
                )}

                {activeTab === 'editor' && (
                  <Editor 
                    mode="editor"
                    starterCode={currentTopicData.starterCode?.python || ''}
                    onCodeRun={(output) => {}}
                  />
                )}

                {activeTab === 'exercise' && (
                  <div className="exercise-section">
                    <h3>{currentTopicData.exercise.title}</h3>
                    <p>{currentTopicData.exercise.description}</p>
                    <div className="requirements">
                      <h4>Tələblər:</h4>
                      <ul>
                        {currentTopicData.exercise.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Editor 
                      mode="exercise"
                      starterCode={exerciseCode}
                      onCodeRun={(output) => {
                        setExerciseOutput(output);
                        updateAnalysis('codingAttempts', {
                          topicId: currentTopic + 1,
                          timestamp: new Date().toISOString(),
                          success: !output.includes('Xəta:')
                        });
                        if (!output.includes('Xəta:')) {
                          updateSkillScore(currentTopic);
                        }
                      }}
                    />
                    {exerciseOutput && (
                      <div className="exercise-output">
                        <h4>Nəticə:</h4>
                        <pre>{exerciseOutput}</pre>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'quiz' && (
                  <div className="quiz-section">
                    <h3>Quiz: {currentTopicData.title}</h3>
                    {!quizSubmitted ? (
                      <>
                        {currentTopicData.quiz.map((q, idx) => (
                          <div key={idx} className="quiz-question">
                            <p className="question-text">{idx + 1}. {q.question}</p>
                            <div className="quiz-options">
                              {q.options.map((opt, optIdx) => (
                                <label key={optIdx} className={`quiz-option ${quizAnswers[idx] === optIdx ? 'selected' : ''}`}>
                                  <input
                                    type="radio"
                                    name={`question-${idx}`}
                                    checked={quizAnswers[idx] === optIdx}
                                    onChange={() => setQuizAnswers({ ...quizAnswers, [idx]: optIdx })}
                                  />
                                  <span>{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                        <button 
                          onClick={handleQuizSubmit}
                          className="submit-quiz-btn"
                          disabled={Object.keys(quizAnswers).length !== currentTopicData.quiz.length}
                        >
                          Quiz-i Təsdiqlə
                        </button>
                      </>
                    ) : (
                      <div className="quiz-results">
                        <h4>Nəticə: {quizScore}/{currentTopicData.quiz.length}</h4>
                        <div className={`score-message ${quizScore >= 7 ? 'success' : 'fail'}`}>
                          {quizScore >= 7 ? 'Təbriklər! Uğurla tamamladınız.' : 'Daha çox çalışmalısınız.'}
                        </div>
                        <button onClick={() => setQuizSubmitted(false)} className="retry-btn">Yenidən Cəhd Et</button>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'analysis' && renderAnalysis()}
                {activeTab === 'videos' && renderVideoHelp()}
              </div>
            </>
          )}
        </main>
      </div>

      {/* Chatbot */}
      <div className={`chatbot-container ${isChatOpen ? 'open' : ''}`}>
        <button 
          className="chatbot-toggle"
          onClick={() => setIsChatOpen(!isChatOpen)}
          title="AI Müəllim"
        >
          {isChatOpen ? <X size={24} /> : <Bot size={28} />}
        </button>

        {isChatOpen && (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-title">
                <Brain size={20} />
                <span>Lumina AI Müəllim</span>
              </div>
              <button className="close-chat" onClick={() => setIsChatOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.role}`}>
                  <div className="message-content">
                    {msg.content.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message assistant typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Python, NumPy, Pandas, ML suallarınızı yazın..."
                disabled={isTyping}
              />
              <button 
                onClick={sendMessage}
                disabled={isTyping || !inputMessage.trim()}
              >
                <Send size={18} />
              </button>
            </div>
            
            <div className="chatbot-footer">
              <small>Powered by Groq AI • Llama 3.3</small>
            </div>
          </div>
        )}
      </div>

      {/* Video CSS */}
      <style>{`
        .video-help-section {
          padding: 20px;
          max-width: 900px;
        }
        
        .video-header {
          margin-bottom: 24px;
        }
        
        .video-header h3 {
          color: #333;
          margin: 0 0 8px 0;
          font-size: 24px;
          font-weight: 600;
        }
        
        .video-subtitle {
          color: #666;
          margin: 0;
          font-size: 14px;
        }
        
        .video-buttons-container {
          width: 100%;
        }
        
        .video-buttons-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .video-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          background: white;
          transition: all 0.3s ease;
        }
        
        .video-card:hover {
          border-color: #667eea;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
        }
        
        .video-info-section {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
        }
        
        .video-play-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        
        .video-play-icon.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .video-play-icon.disabled {
          background: #ccc;
          color: white;
        }
        
        .video-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .video-title {
          font-weight: 600;
          color: #333;
          font-size: 15px;
          line-height: 1.4;
        }
        
        .video-duration {
          color: #888;
          font-size: 13px;
        }
        
        .watch-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .watch-button.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .watch-button.active:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .watch-button.disabled {
          background: #e0e0e0;
          color: #999;
          cursor: not-allowed;
        }
        
        .no-videos-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background: #f8f9fa;
          border-radius: 12px;
          color: #888;
          text-align: center;
        }
        
        .no-videos-icon {
          margin-bottom: 16px;
          opacity: 0.5;
        }
        
        @media (max-width: 768px) {
          .video-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          
          .watch-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AI;