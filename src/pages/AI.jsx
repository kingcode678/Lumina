import React, { useState, useEffect, useRef, useCallback } from 'react';
import { auth, db } from '../firebase';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  serverTimestamp,
  setDoc,
  collection,
  addDoc
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
  ExternalLink,
  CheckSquare,
  Loader2,
  Play as RunIcon,
  MessageCircle
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
const GROQ_API_KEY = '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';

const NAV_ITEMS = [
  { id: 'content', icon: BookOpen, label: 'Məzmun', emoji: '📚' },
  { id: 'editor', icon: Code2, label: 'Editor', emoji: '🐍' },
  { id: 'exercise', icon: FileEdit, label: 'Tapşırıq', emoji: '✏️' },
  { id: 'quiz', icon: PlayCircle, label: 'Quiz', emoji: '📝' },
  { id: 'analysis', icon: BarChart3, label: 'Təhlil', emoji: '📊' },
  { id: 'videos', icon: Video, label: 'Video', emoji: '🎥' },
];

const aiVideoLinks = [
  { topicId: 1, title: "Python Dəyişənləri", duration: "15:30", url: "https://youtu.be/V1c0MzR8qo8?si=VTQFIcaakZHEgdCv" },
  { topicId: 1, title: "Python Məlumat Tipləri", duration: "12:45", url: "https://youtu.be/L2Ryd70pVXI?si=9iDC00hct2RHUxHM" },
  { topicId: 2, title: "Set ve Tuple", duration: "18:20", url: "https://youtu.be/OMwQ_i9GJbI?si=3UJH1fepGsU1bGvM" },
  { topicId: 2, title: "List", duration: "16:50", url: "https://youtu.be/pBMuc4cc_Ck?si=lgfUe58fWOXJFmAC" },
  { topicId: 2, title: "Dictionary", duration: "12:30", url: "https://youtu.be/0jKOxXn7yMg?si=z7Q8jpACJ1gf9BCN" },
  { topicId: 3, title: "Şərt Operatorları", duration: "14:15", url: "https://youtu.be/R6DmpXky2WA?si=bpTWg7WpUfkIPtbt" },
  { topicId: 3, title: "Şərt Operatorları : İç-içə Şərtlər", duration: "17:30", url: "https://youtu.be/gbNRVvPdSa0?si=UdQ6KZUWT-8OBh60" },
  { topicId: 4, title: "Dövrlər : For və While Dövrləri", duration: "19:45", url: "https://youtu.be/JUsemOXDvjY?si=axD0VxWozQFym2DK" },
  { topicId: 5, title: "Funksiyalar", duration: "22:10", url: "https://youtu.be/_HRn8zB47cs?si=oHTLBbs3EWrQ7_Uu" },
  { topicId: 5, title: "Lambda və Map Funksiyaları", duration: "13:40", url: "https://youtu.be/yC9DIGj_J5o?si=8N7R5Ae1pf_3edNH" },
  { topicId: 6, title: "Fayllarla İş", duration: "41:57", url: "https://youtu.be/hO7IRvi2nyw?si=nPBtv1w4hj7k3dcw" },
  { topicId: 7, title: "Xətaların İdarə Edilməsi", duration: "24:28", url: "https://youtu.be/iBYppSXFw0A?si=aAVb159nGgLy7CMj" },
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
  const [isCheckingCode, setIsCheckingCode] = useState(false);
  const [codeRunSuccess, setCodeRunSuccess] = useState(null);
  
  const [user, setUser] = useState(null);
  const [activationData, setActivationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activationError, setActivationError] = useState('');
  const [currentMonth, setCurrentMonth] = useState(0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // YENI: Chatbot state - tam yenidən yazıldı
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Salam! 👋 Mən Lumina AI Təhsil Platformasının Süni İntellekt Kurs Müəllimiyəm. Sizə Python, Data Science, Machine Learning və Deep Learning mövzularında tam dəstək verirəm. Sualınız varsa, buyurun soruşun!' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const getUserName = (firebaseUser) => {
    if (!firebaseUser) return 'guest';
    if (firebaseUser.displayName) {
      return firebaseUser.displayName.toLowerCase().replace(/\s+/g, '');
    }
    if (firebaseUser.email) {
      return firebaseUser.email.split('@')[0].toLowerCase();
    }
    return firebaseUser.uid.slice(0, 8);
  };

  const userName = getUserName(user);

  const saveQuizAttempt = async (userId, courseId, topicId, questionIndex, answer, isCorrect, questionData) => {
    try {
      await addDoc(collection(db, 'quizAttempts'), {
        userId,
        userName,
        courseId,
        topicId,
        questionIndex,
        answer,
        isCorrect,
        questionData,
        timestamp: serverTimestamp()
      });
      console.log('✅ Quiz yazıldı');
    } catch (err) {
      console.error('❌ Quiz xətası:', err);
    }
  };

  const saveCodeAttempt = async (userId, courseId, topicId, code, output, errorMsg, isSuccess, exerciseData) => {
    try {
      const parentDocId = `${userName}_movzu${topicId}`;
      const now = new Date();
      const timeStr = now.toTimeString().slice(0, 5);
      const dateStr = now.toISOString().split('T')[0];
      const docId = `${timeStr}_${dateStr}`;

      const parentRef = doc(db, 'totalCode', parentDocId);
      const parentSnap = await getDoc(parentRef);
      
      const parentData = {
        userName,
        topicId: Number(topicId),
        courseId,
        updatedAt: serverTimestamp(),
        lastError: {
          timeStr,
          dateStr,
          preview: errorMsg?.substring(0, 100) || (isSuccess ? 'Uğurlu' : 'Xəta')
        }
      };
      
      if (!parentSnap.exists()) {
        parentData.createdAt = serverTimestamp();
        parentData.errorCount = isSuccess ? 0 : 1;
      } else {
        const currentCount = parentSnap.data().errorCount || 0;
        parentData.errorCount = isSuccess ? currentCount : currentCount + 1;
      }
      
      await setDoc(parentRef, parentData, { merge: true });

      if (!isSuccess || errorMsg) {
        await setDoc(doc(db, 'totalCode', parentDocId, 'errors', docId), {
          timeStr,
          dateStr,
          timestamp: serverTimestamp(),
          code,
          output,
          errorMessage: errorMsg || '',
          codeLength: code.length,
          isSuccess,
          exerciseData
        });
      }

      console.log('✅ Kod yazıldı:', parentDocId);
    } catch (err) {
      console.error('❌ Kod yazma xətası:', err);
      throw err;
    }
  };

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

  // YENI: Chatbot açıq olduqda body scroll-unu blokla
  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
    }
    return () => {
      if (!isMobileMenuOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [isChatOpen, isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsChatOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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
              content: `Sən Lumina Təhsil Platformasının AI Kurs Müəllimisisən. 
Python, Data Science, ML mövzularında kömək et. Azərbaycanca cavab ver.`
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: inputMessage }
          ],
          temperature: 0.7,
          max_tokens: 2048
        })
      });

      if (!response.ok) throw new Error(`HTTP xəta: ${response.status}`);

      const data = await response.json();
      const botResponse = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
      
    } catch (error) {
      console.error('Chatbot xətası:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Bağışlayın, texniki problem: ${error.message}` 
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log('👤 User:', getUserName(currentUser));
        await checkUserActivation(currentUser.uid);
      } else {
        setUser(null);
        setIsActivated(false);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

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
    } catch (error) {
      console.error('Aktivləşdirmə xətası:', error);
    } finally {
      setLoading(false);
    }
  };

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
        setActivationError('Yanlış kod');
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
      if (codeData.status === 'used' || codeData.status === 'expired') {
        setActivationError('Kod istifadə olunub');
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
      setActivationError('Sistem xətası');
      return false;
    }
  };

  useEffect(() => {
    const savedMonth = localStorage.getItem('ai_current_month');
    if (savedMonth) setCurrentMonth(parseInt(savedMonth));
  }, []);

  useEffect(() => {
    const topic = topics[currentTopic];
    if (topic?.exercise?.starterCode) {
      setExerciseCode(topic.exercise.starterCode);
      setExerciseOutput('');
      setCodeRunSuccess(null);
    } else {
      setExerciseCode('');
      setExerciseOutput('');
      setCodeRunSuccess(null);
    }
  }, [currentTopic]);

  const checkAccess = () => {
    if (currentTopic === 0) return true;
    if (isActivated) return true;
    return false;
  };

  const handleTopicSelect = (idx) => {
    setCurrentTopic(idx);
    setQuizSubmitted(false);
    setQuizAnswers({});
    setActiveTab('content');
    setIsMobileMenuOpen(false);
  };

  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  const handleCodeRun = useCallback((output, error = null) => {
    setExerciseOutput(output || error || '');
    setCodeRunSuccess(!error && output && !output.toLowerCase().includes('error') && !output.toLowerCase().includes('xəta'));
  }, []);

  const handleCheckCode = async () => {
    if (!user) {
      alert('Əvvəlcə daxil olun!');
      return;
    }
    if (!exerciseCode.trim()) {
      alert('Zəhmət olmasa kod yazın!');
      return;
    }

    setIsCheckingCode(true);
    
    try {
      const isSuccess = codeRunSuccess === true;
      const errorMsg = codeRunSuccess === false ? exerciseOutput : null;
      
      await saveCodeAttempt(
        user.uid,
        COURSE_ID,
        currentTopic + 1,
        exerciseCode,
        exerciseOutput,
        errorMsg,
        isSuccess,
        currentTopicData.exercise
      );
      
      alert(isSuccess ? '✅ Kod uğurla yoxlandı!' : '⚠️ Kod göndərildi.');
      setActiveTab('analysis');
      
    } catch (err) {
      console.error('Xəta:', err);
      alert('Xəta baş verdi: ' + err.message);
    } finally {
      setIsCheckingCode(false);
    }
  };

  const handleQuizSubmit = async () => {
    const topic = topics[currentTopic];
    let score = 0;
    
    for (let idx = 0; idx < topic.quiz.length; idx++) {
      const q = topic.quiz[idx];
      const isCorrect = quizAnswers[idx] === q.correctAnswer;
      if (isCorrect) score++;
      
      if (user) {
        try {
          await saveQuizAttempt(
            user.uid,
            COURSE_ID,
            currentTopic + 1,
            idx,
            q.options[quizAnswers[idx]] || 'Cavab verilməyib',
            isCorrect,
            q
          );
        } catch (err) {
          console.error('Quiz xətası:', err);
        }
      }
    }
    
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const renderVideoHelp = () => {
    const currentTopicId = currentTopic + 1;
    const topicVideos = aiVideoLinks.filter(video => video.topicId === currentTopicId);

    const handleWatchClick = (videoUrl) => {
      const cleanUrl = videoUrl?.trim();
      if (cleanUrl) {
        window.open(cleanUrl, '_blank', 'noopener,noreferrer');
      } else {
        alert('Bu video tezliklə əlavə olunacaq!');
      }
    };

    return (
      <div className="video-help-section">
        <div className="video-header">
          <h3>🎥 Video Dəstəyi</h3>
          <p className="video-subtitle">Mövzu {currentTopicId}: {topics[currentTopic]?.title}</p>
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
                      {hasUrl ? <><Play size={16} /><span>İZLƏ</span><ExternalLink size={14} /></> 
                              : <><Lock size={16} /><span>Tezliklə</span></>}
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

  // YENI: AI Analysis placeholder komponenti
  const AIAnalysisPlaceholder = () => (
    <div className="analysis-placeholder" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
      borderRadius: '16px',
      border: '2px dashed #667eea50',
      textAlign: 'center',
      minHeight: '300px'
    }}>
      <div className="placeholder-icon" style={{
        fontSize: '64px',
        marginBottom: '20px',
        opacity: '0.8'
      }}>
        📊
      </div>
      <h3 style={{
        color: '#2d3748',
        margin: '0 0 12px 0',
        fontSize: '24px',
        fontWeight: '600'
      }}>
        AI Təhlil Hazırlanır
      </h3>
      <p style={{
        color: '#718096',
        margin: '0 0 24px 0',
        fontSize: '16px',
        maxWidth: '400px',
        lineHeight: '1.6'
      }}>
        Süni intellekt əsaslı təhlil sistemi tezliklə aktiv olacaq. 
        Kodlarınızın və quiz nəticələrinizin detallı analizi üçün hazırlıq işləri gedir.
      </p>
      <div className="placeholder-features" style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <span style={{
          background: '#fff',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          color: '#667eea',
          border: '1px solid #667eea30'
        }}>🤖 AI Mentor</span>
        <span style={{
          background: '#fff',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          color: '#667eea',
          border: '1px solid #667eea30'
        }}>📈 Progress Tracking</span>
        <span style={{
          background: '#fff',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          color: '#667eea',
          border: '1px solid #667eea30'
        }}>🎯 Təkmilləşmə Təklifləri</span>
      </div>
    </div>
  );

  const hasAccess = checkAccess();
  const currentTopicData = topics[currentTopic];

  if (loading) return <div className="loading-screen">Yüklənir...</div>;

  return (
    <div className="ai-course">
      {/* Header */}
      <header className="course-header">
        <div className="header-left">
          <button 
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <h1>🤖 Python AI Kursu</h1>
          {user && (
            <span style={{ 
              color: '#888', fontSize: '12px', marginLeft: '15px',
              background: '#2d2d2d', padding: '4px 10px', borderRadius: '12px'
            }}>
              👤 {userName}
            </span>
          )}
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

      {/* Mobile Menu */}
      <div className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      
      <nav className={`mobile-menu-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <div className="drawer-brand-icon">🤖</div>
            <div className="drawer-brand-text">
              <h2>AI Kursu</h2>
              <p>Mövzu {currentTopic + 1} / 20</p>
            </div>
          </div>
          <button className="close-drawer" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24}/>
          </button>
        </div>

        <div className="drawer-content">
          <div className="drawer-section">
            <div className="drawer-section-title">🧭 Naviqasiya</div>
            <div className="drawer-nav">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  className={`drawer-nav-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleTabSelect(item.id)}
                >
                  <span className="drawer-nav-icon">{item.emoji}</span>
                  <span className="drawer-nav-label">{item.label}</span>
                  {activeTab === item.id && <ChevronRight size={18} className="chevron"/>}
                </button>
              ))}
            </div>
          </div>

          <div className="drawer-section">
            <div className="drawer-section-title">📖 AI Mövzuları ({topics.length})</div>
            <div className="drawer-topics">
              {topics.map((topic, idx) => {
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
                      <span className={`drawer-topic-number ${isActive ? 'active' : ''}`}>{idx + 1}</span>
                      <span className="drawer-topic-name">{topic.title}</span>
                    </div>
                    <div className="drawer-topic-badge">
                      {idx === 0 && <span className="free-badge">FREE</span>}
                      {isLocked && <Lock size={16} className="lock-icon"/>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <div className="course-layout">
        <aside className="desktop-sidebar">
          <div className="desktop-sidebar-header"><h3>📚 AI Mövzuları</h3></div>
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
              </button>
            ))}
          </div>
        </aside>

        <main className="content-area">
          {/* Desktop Tabs */}
          <div className="desktop-tabs">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} className={activeTab === item.id ? 'active' : ''} onClick={() => setActiveTab(item.id)}>
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
                <input type="text" placeholder="Aktivləşdirmə kodunu daxil edin" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} />
                <button onClick={() => activateCourse(accessCode)}>Aktivləşdir</button>
                {activationError && <p className="error-text">{activationError}</p>}
                <p className="help-text">Nümunə kod formatı: AI2024</p>
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
                  <Editor mode="editor" starterCode={currentTopicData.starterCode?.python || '# Python kodu yazın\nprint("Salam Dünya!")'} onCodeRun={handleCodeRun} userId={user?.uid} userName={userName} courseId={COURSE_ID} topicId={currentTopic + 1} />
                )}

                {activeTab === 'exercise' && (
                  <div className="exercise-section">
                    <h3>{currentTopicData.exercise?.title || 'Kod Tapşırığı'}</h3>
                    <p>{currentTopicData.exercise?.description || 'Aşağıdakı tələbləri yerinə yetirin:'}</p>
                    {currentTopicData.exercise?.requirements && (
                      <div className="requirements">
                        <h4>Tələblər:</h4>
                        <ul>{currentTopicData.exercise.requirements.map((req, idx) => <li key={idx}>{req}</li>)}</ul>
                      </div>
                    )}
                    <div className="editor-wrapper">
                      <Editor mode="exercise" starterCode={exerciseCode || currentTopicData.exercise?.starterCode || '# Kodunuzu bura yazın'} onCodeRun={handleCodeRun} userId={user?.uid} userName={userName} courseId={COURSE_ID} topicId={currentTopic + 1} />
                    </div>
                    {exerciseOutput && (
                      <div className={`exercise-output ${codeRunSuccess ? 'success' : 'error'}`}>
                        <h4><RunIcon size={16} /> Nəticə: {codeRunSuccess !== null && <span className={`status-badge ${codeRunSuccess ? 'success' : 'error'}`}>{codeRunSuccess ? '✅ Uğurlu' : '❌ Xəta'}</span>}</h4>
                        <pre>{exerciseOutput}</pre>
                      </div>
                    )}
                    <div className="code-check-section">
                      <button className="check-code-btn" onClick={handleCheckCode} disabled={isCheckingCode || !exerciseCode.trim()}>
                        {isCheckingCode ? <><Loader2 className="spin" size={18} /> AI Analiz edir...</> : <><CheckSquare size={18} /> Kodu AI ilə Yoxla</>}
                      </button>
                      <p className="check-hint">{exerciseOutput ? 'Kodunuzu AI mentor ilə yoxlayın' : 'Əvvəlcə kodu işlədin (Run düyməsi)'}</p>
                    </div>
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
                                  <input type="radio" name={`question-${idx}`} checked={quizAnswers[idx] === optIdx} onChange={() => setQuizAnswers({ ...quizAnswers, [idx]: optIdx })} />
                                  <span>{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                        <button onClick={handleQuizSubmit} className="submit-quiz-btn" disabled={Object.keys(quizAnswers).length !== currentTopicData.quiz.length}>Quiz-i Təsdiqlə</button>
                      </>
                    ) : (
                      <div className="quiz-results">
                        <h4>Nəticə: {quizScore}/{currentTopicData.quiz.length}</h4>
                        <div className={`score-message ${quizScore >= 7 ? 'success' : 'fail'}`}>{quizScore >= 7 ? 'Təbriklər!' : 'Daha çox çalışmalısınız.'}</div>
                        <button onClick={() => setQuizSubmitted(false)} className="retry-btn">Yenidən Cəhd Et</button>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'analysis' && <AIAnalysisPlaceholder />}
                {activeTab === 'videos' && renderVideoHelp()}
              </div>
            </>
          )}
        </main>
      </div>

      {/* YENI: Tam responsive Chatbot */}
      <>
        {/* Chatbot Overlay - mobil üçün tam ekran fon */}
        {isChatOpen && (
          <div 
            className="chatbot-overlay"
            onClick={() => setIsChatOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 9998,
              display: 'none'
            }}
          />
        )}

        {/* Chatbot Container */}
        <div 
          className={`chatbot-wrapper ${isChatOpen ? 'open' : ''}`}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          {/* Chatbot Toggle Button */}
          <button 
            className="chatbot-toggle"
            onClick={() => setIsChatOpen(!isChatOpen)}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'all 0.3s ease',
              transform: isChatOpen ? 'rotate(180deg) scale(0.9)' : 'scale(1)'
            }}
          >
            {isChatOpen ? <X size={24} /> : <Bot size={28} />}
          </button>

          {/* Chatbot Window */}
          {isChatOpen && (
            <div 
              className="chatbot-window"
              style={{
                position: 'absolute',
                bottom: '70px',
                right: 0,
                width: '380px',
                maxWidth: 'calc(100vw - 40px)',
                height: '500px',
                maxHeight: 'calc(100vh - 100px)',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                animation: 'chatbotSlideIn 0.3s ease'
              }}
            >
              {/* Header */}
              <div 
                className="chatbot-header"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Brain size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '16px' }}>Lumina AI</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>🟢 Onlayn</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div 
                className="chatbot-messages"
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '20px',
                  background: '#f8f9fa',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {messages.map((msg, idx) => (
                  <div 
                    key={idx}
                    className={`message ${msg.role}`}
                    style={{
                      maxWidth: '85%',
                      padding: '12px 16px',
                      borderRadius: msg.role === 'assistant' ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                      background: msg.role === 'assistant' ? 'white' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: msg.role === 'assistant' ? '#2d3748' : 'white',
                      alignSelf: msg.role === 'assistant' ? 'flex-start' : 'flex-end',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      fontSize: '14px',
                      lineHeight: '1.5',
                      wordBreak: 'break-word'
                    }}
                  >
                    {msg.content}
                  </div>
                ))}
                {isTyping && (
                  <div 
                    className="message assistant typing"
                    style={{
                      maxWidth: '85%',
                      padding: '16px 20px',
                      borderRadius: '16px 16px 16px 4px',
                      background: 'white',
                      alignSelf: 'flex-start',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      display: 'flex',
                      gap: '4px'
                    }}
                  >
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#667eea',
                      animation: 'typingBounce 1.4s infinite ease-in-out both',
                      animationDelay: '0s'
                    }} />
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#667eea',
                      animation: 'typingBounce 1.4s infinite ease-in-out both',
                      animationDelay: '0.2s'
                    }} />
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#667eea',
                      animation: 'typingBounce 1.4s infinite ease-in-out both',
                      animationDelay: '0.4s'
                    }} />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div 
                className="chatbot-input"
                style={{
                  padding: '16px 20px',
                  background: 'white',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  gap: '12px'
                }}
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Sualınızı yazın..."
                  disabled={isTyping}
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '24px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                <button 
                  onClick={sendMessage}
                  disabled={isTyping || !inputMessage.trim()}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: (!inputMessage.trim() || isTyping) ? '#e2e8f0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    cursor: (!inputMessage.trim() || isTyping) ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'all 0.2s'
                  }}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobil üçün tam ekran chatbot */}
        <style>{`
          @media (max-width: 480px) {
            .chatbot-wrapper {
              bottom: 10px !important;
              right: 10px !important;
              left: 10px !important;
            }
            .chatbot-wrapper.open {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              width: 100vw !important;
              height: 100vh !important;
              background: rgba(0, 0, 0, 0.5) !important;
              backdrop-filter: blur(4px) !important;
              z-index: 9999 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              padding: 20px !important;
            }
            .chatbot-wrapper.open .chatbot-toggle {
              position: absolute !important;
              bottom: 20px !important;
              right: 20px !important;
            }
            .chatbot-wrapper.open .chatbot-window {
              position: relative !important;
              bottom: auto !important;
              right: auto !important;
              width: 100% !important;
              max-width: 100% !important;
              height: calc(100vh - 100px) !important;
              max-height: 600px !important;
              animation: chatbotFadeIn 0.3s ease !important;
            }
            .chatbot-overlay {
              display: block !important;
            }
          }
          @keyframes chatbotSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes chatbotFadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes typingBounce {
            0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
            40% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </>

      {/* CSS */}
      <style>{`
        .video-help-section { padding: 20px; max-width: 900px; }
        .video-header { margin-bottom: 24px; }
        .video-header h3 { color: #333; margin: 0 0 8px 0; font-size: 24px; font-weight: 600; }
        .video-subtitle { color: #666; margin: 0; font-size: 14px; }
        .video-buttons-grid { display: flex; flex-direction: column; gap: 16px; }
        .video-card { display: flex; align-items: center; justify-content: space-between; padding: 20px; border: 2px solid #e0e0e0; border-radius: 12px; background: white; transition: all 0.3s ease; }
        .video-card:hover { border-color: #667eea; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1); }
        .video-info-section { display: flex; align-items: center; gap: 16px; flex: 1; }
        .video-play-icon { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .video-play-icon.active { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .video-play-icon.disabled { background: #ccc; color: white; }
        .video-details { display: flex; flex-direction: column; gap: 4px; }
        .video-title { font-weight: 600; color: #333; font-size: 15px; }
        .video-duration { color: #888; font-size: 13px; }
        .watch-button { display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: none; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.3s ease; }
        .watch-button.active { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .watch-button.disabled { background: #e0e0e0; color: #999; cursor: not-allowed; }
        .no-videos-card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 20px; background: #f8f9fa; border-radius: 12px; color: #888; }
        .exercise-section { padding: 20px; }
        .exercise-section h3 { margin: 0 0 12px 0; color: #2d3748; font-size: 20px; }
        .requirements { background: #f7fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px; }
        .requirements h4 { margin: 0 0 10px 0; color: #4a5568; font-size: 14px; text-transform: uppercase; }
        .requirements ul { margin: 0; padding-left: 20px; }
        .editor-wrapper { margin-bottom: 16px; border: 2px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
        .exercise-output { margin: 16px 0; padding: 16px; background: #f7fafc; border-radius: 8px; border-left: 4px solid #cbd5e0; }
        .exercise-output.success { background: #f0fff4; border-left-color: #48bb78; }
        .exercise-output.error { background: #fff5f5; border-left-color: #f56565; }
        .exercise-output h4 { margin: 0 0 10px 0; font-size: 14px; color: #2d3748; display: flex; align-items: center; gap: 8px; }
        .status-badge { margin-left: auto; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        .status-badge.success { background: #c6f6d5; color: #22543d; }
        .status-badge.error { background: #fed7d7; color: #c53030; }
        .exercise-output pre { margin: 0; padding: 12px; background: #1a202c; color: #e2e8f0; border-radius: 6px; font-size: 13px; overflow-x: auto; max-height: 200px; overflow-y: auto; }
        .code-check-section { margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border: 2px dashed #667eea50; border-radius: 12px; text-align: center; }
        .check-code-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
        .check-code-btn:disabled { opacity: 0.6; cursor: not-allowed; background: #a0aec0; }
        .check-hint { margin: 12px 0 0 0; font-size: 13px; color: #667eea; font-weight: 500; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .video-card { flex-direction: column; align-items: flex-start; gap: 16px; }
          .watch-button, .check-code-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default AI;