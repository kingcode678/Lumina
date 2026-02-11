import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from '../firebase';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
  setDoc 
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import '../styles/Frontend.css';

// Import all topics
import { topic1 } from '../data/topic1';
import { topic2 } from '../data/topic2';
import { topic3 } from '../data/topic3';
import { topic4 } from '../data/topic4';
import { topic5 } from '../data/topic5';
import { topic6 } from '../data/topic6';
import { topic7 } from '../data/topic7';
import { topic8 } from '../data/topic8';
import { topic9 } from '../data/topic9';
import { topic10 } from '../data/topic10';
import { topic11 } from '../data/topic11';
import { topic12 } from '../data/topic12';
import { topic13 } from '../data/topic13';
import { topic14 } from '../data/topic14';
import { topic15 } from '../data/topic15';
import { topic16 } from '../data/topic16';
import { topic17 } from '../data/topic17';
import { topic18 } from '../data/topic18';
import { topic19 } from '../data/topic19';
import { topic20 } from '../data/topic20';

// Import video links
import { videoLinks } from '../data/frvideo';

const topics = [
  topic1, topic2, topic3, topic4, topic5,
  topic6, topic7, topic8, topic9, topic10,
  topic11, topic12, topic13, topic14, topic15,
  topic16, topic17, topic18, topic19, topic20
];

const COURSE_ID = 'frontend'; // Bu kursun ID-si

const Frontend = () => {
  const [currentTopic, setCurrentTopic] = useState(0);
  const [accessCode, setAccessCode] = useState('');
  const [isActivated, setIsActivated] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [exerciseCode, setExerciseCode] = useState('');
  const [exerciseOutput, setExerciseOutput] = useState('');
  const [showVideoHelp, setShowVideoHelp] = useState(false);
  const [analysisData, setAnalysisData] = useState({
    weeklyProgress: [],
    completedTopics: [],
    quizScores: [],
    codingAttempts: [],
    totalTimeSpent: 0
  });
  const [editorCode, setEditorCode] = useState({ html: '', css: '', js: '' });
  const [editorOutput, setEditorOutput] = useState('');
  const [activeEditorTab, setActiveEditorTab] = useState('html');
  
  // Yeni state'ler
  const [user, setUser] = useState(null);
  const [activationData, setActivationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activationError, setActivationError] = useState('');
  const [currentMonth, setCurrentMonth] = useState(0);

  const iframeRef = useRef(null);

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

  // İstifadəçinin aktivləşdirmə statusunu yoxla
  const checkUserActivation = async (userId) => {
    try {
      // İstifadəçinin bu kurs üçün kodunu yoxla
      const codeRef = doc(db, 'users', userId, 'activationCodes', COURSE_ID);
      const codeSnap = await getDoc(codeRef);

      if (codeSnap.exists()) {
        const data = codeSnap.data();
        setActivationData(data);
        
        if (data.status === 'active') {
          setIsActivated(true);
          setCurrentMonth(data.currentMonth || 1);
          // LocalStorage backup
          localStorage.setItem('frontend_course_activated', 'true');
          localStorage.setItem('frontend_current_month', data.currentMonth || 1);
        } else {
          setIsActivated(false);
        }
      } else {
        // Kod yoxdur - yoxla görək ümumi kolleksiyada varmı (köhnə sistem üçün)
        const q = query(
          collection(db, 'activationCodes'), 
          where('userId', '==', userId),
          where('course', '==', COURSE_ID)
        );
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setActivationData(data);
          
          if (data.status === 'active') {
            setIsActivated(true);
            setCurrentMonth(data.currentMonth || 1);
          }
        }
      }

      // Analiz məlumatlarını yüklə
      await loadUserAnalysis(userId);
      
    } catch (error) {
      console.error('Aktivləşdirmə yoxlama xətası:', error);
    } finally {
      setLoading(false);
    }
  };

  // İstifadəçi analiz məlumatlarını yüklə
  const loadUserAnalysis = async (userId) => {
    try {
      const analysisRef = doc(db, 'users', userId, 'courseProgress', COURSE_ID);
      const analysisSnap = await getDoc(analysisRef);
      
      if (analysisSnap.exists()) {
        setAnalysisData(analysisSnap.data());
      } else {
        // LocalStorage-dan köhnə məlumatları yüklə
        const savedAnalysis = localStorage.getItem('frontend_course_analysis');
        if (savedAnalysis) {
          const parsed = JSON.parse(savedAnalysis);
          setAnalysisData(parsed);
          // Firestore-a köçür
          await setDoc(analysisRef, parsed);
        }
      }
    } catch (error) {
      console.error('Analiz yükləmə xətası:', error);
    }
  };

  // Kodu aktivləşdir (Firebase yoxlaması ilə)
  const activateCourse = async (inputCode) => {
    setActivationError('');
    
    if (!user) {
      setActivationError('Əvvəlcə daxil olun');
      return false;
    }

    try {
      // Kodu yoxla - ümumi kolleksiyadan
      const codeRef = doc(db, 'activationCodes', inputCode.toUpperCase());
      const codeSnap = await getDoc(codeRef);

      if (!codeSnap.exists()) {
        setActivationError('Yanlış aktivləşdirmə kodu');
        return false;
      }

      const codeData = codeSnap.data();

      // Yoxlamalar
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

      // Aktivləşdir
      const updateData = {
        status: 'active',
        activatedAt: serverTimestamp(),
        currentMonth: 1,
        'payment.status': 'pending' // Admin təsdiqi gözləyir
      };

      // Hər iki yerdə yenilə
      await updateDoc(codeRef, updateData);
      await updateDoc(doc(db, 'users', user.uid, 'activationCodes', COURSE_ID), updateData);

      setIsActivated(true);
      setCurrentMonth(1);
      setActivationData({ ...codeData, ...updateData });
      
      // LocalStorage backup
      localStorage.setItem('frontend_course_activated', 'true');
      localStorage.setItem('frontend_current_month', '1');

      return true;

    } catch (error) {
      console.error('Aktivləşdirmə xətası:', error);
      setActivationError('Sistem xətası baş verdi');
      return false;
    }
  };

  // LocalStorage'dan ilkin yükləmə (backup üçün)
  useEffect(() => {
    const savedActivation = localStorage.getItem('frontend_course_activated');
    const savedMonth = localStorage.getItem('frontend_current_month');
    
    if (savedActivation === 'true' && !isActivated) {
      // Firebase yoxlaması lazımdır, sadəcə UI üçün
    }
    
    if (savedMonth) {
      setCurrentMonth(parseInt(savedMonth));
    }
  }, []);

  useEffect(() => {
    const topic = topics[currentTopic];
    if (topic && topic.starterCode) {
      setEditorCode({
        html: topic.starterCode.html || '',
        css: topic.starterCode.css || '',
        js: topic.starterCode.js || ''
      });
      setExerciseCode(topic.exercise?.starterCode || '');
    }
  }, [currentTopic]);

  useEffect(() => {
    runCode();
  }, [editorCode]);

  const checkAccess = () => {
    if (currentTopic === 0) return true; // Birinci mövzu həmişə pulsuz
    if (isActivated) return true;
    
    // SAMKA test kodu aktivləşdirmə etmir - sadəcə yazı olaraq qalır
    return false;
  };

  const runCode = () => {
    const { html, css, js } = editorCode;
    const fullCode = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (err) {
              console.error(err);
              document.body.innerHTML += '<div style="color:red;padding:10px;background:#ffeeee;margin-top:20px;border-radius:5px;">JS Error: ' + err.message + '</div>';
            }
          </script>
        </body>
      </html>
    `;
    setEditorOutput(fullCode);
  };

  const runExerciseCode = () => {
    try {
      const consoleOutput = [];
      const mockConsole = {
        log: (...args) => consoleOutput.push(args.join(' ')),
        error: (...args) => consoleOutput.push('Error: ' + args.join(' '))
      };
      
      const func = new Function('console', exerciseCode);
      func(mockConsole);
      
      setExerciseOutput(consoleOutput.join('\n') || 'Kod uğurla icra edildi (output yoxdur)');
      
      updateAnalysis('codingAttempts', {
        topicId: currentTopic + 1,
        timestamp: new Date().toISOString(),
        success: true
      });
    } catch (error) {
      setExerciseOutput('Xəta: ' + error.message);
      updateAnalysis('codingAttempts', {
        topicId: currentTopic + 1,
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message
      });
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
    }
  };

  // Analizi Firebase-ə saxla
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
    
    // LocalStorage'a yadda saxla
    localStorage.setItem('frontend_course_analysis', JSON.stringify(newAnalysis));
    
    // Firebase-ə saxla (əgər user varsa)
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

  const renderAnalysis = () => {
    const weekly = calculateWeeklyProgress();
    const monthly = calculateMonthlyStats();
    
    return (
      <div className="analysis-section">
        <h3>📊 Təhlil və Statistika</h3>
        
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
              <small>Mövzu tamamlanıb</small>
            </div>
          </div>
          
          <div className="stat-card">
            <h4>Ortalama Quiz Balı</h4>
            <div className="score-display">{monthly.averageQuizScore}%</div>
          </div>
          
          <div className="stat-card">
            <h4>Kod Uğuru</h4>
            <div className="success-rate">{monthly.codingSuccessRate}%</div>
            <small>{monthly.totalCodingAttempts} cəhd</small>
          </div>
        </div>

        <div className="weekly-progress">
          <h4>Həftəlik Progress</h4>
          {weekly.map((week, idx) => (
            <div key={idx} className="week-bar">
              <span>Həftə {week.week}</span>
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${week.percentage}%` }}
                />
              </div>
              <span>{week.completed}/{week.total}</span>
            </div>
          ))}
        </div>

        <div className="topic-breakdown">
          <h4>Mövzu üzrə Detallar</h4>
          <div className="topic-status-grid">
            {topics.map((topic, idx) => {
              const isCompleted = analysisData.completedTopics.includes(idx + 1);
              const quizData = analysisData.quizScores.find(q => q.topicId === idx + 1);
              
              return (
                <div 
                  key={idx} 
                  className={`topic-status ${isCompleted ? 'completed' : ''}`}
                  onClick={() => setCurrentTopic(idx)}
                >
                  <span className="topic-num">{idx + 1}</span>
                  <span className="topic-title">{topic.title}</span>
                  {quizData && (
                    <span className="quiz-badge">
                      {Math.round((quizData.score / quizData.total) * 100)}%
                    </span>
                  )}
                  {isCompleted && <span className="checkmark">✓</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderVideoHelp = () => {
    const topicVideos = videoLinks.filter(v => v.topicId === currentTopic + 1);
    
    return (
      <div className="video-help-section">
        <h3>🎥 Video Köməkçi</h3>
        <div className="video-categories">
          {['beginner', 'intermediate', 'advanced'].map(level => {
            const levelVideos = topicVideos.filter(v => v.level === level);
            if (levelVideos.length === 0) return null;
            
            return (
              <div key={level} className={`video-category ${level}`}>
                <h4>
                  {level === 'beginner' && 'Başlanğıc Səviyyə'}
                  {level === 'intermediate' && 'Orta Səviyyə'}
                  {level === 'advanced' && 'İrəliləmiş Səviyyə'}
                </h4>
                <div className="video-list">
                  {levelVideos.map((video, idx) => (
                    <div key={idx} className="video-item">
                      <div className="video-thumbnail">
                        <span className="play-icon">▶</span>
                      </div>
                      <div className="video-info">
                        <h5>{video.title}</h5>
                        <p>{video.duration} • {video.instructor}</p>
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="watch-btn"
                        >
                          İzlə
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const hasAccess = checkAccess();
  const currentTopicData = topics[currentTopic];

  if (loading) {
    return <div className="loading-screen">Yüklənir...</div>;
  }

  return (
    <div className="frontend-course">
      <header className="course-header">
        <h1>🚀 Frontend Development Kursu</h1>
        <div className="header-actions">
          <a href="/" className="home-btn">🏠 Ana Səhifə</a>
          {isActivated ? (
            <span className="badge activated">✓ Aktiv (Ay {currentMonth})</span>
          ) : (
            <span className="badge inactive">🔒 Deaktiv</span>
          )}
        </div>
      </header>

      <div className="course-layout">
        <aside className="topics-sidebar">
          <h3>Mövzular</h3>
          <div className="topics-list">
            {topics.map((topic, idx) => (
              <button
                key={idx}
                className={`topic-item ${currentTopic === idx ? 'active' : ''} ${idx === 0 ? 'free' : ''}`}
                onClick={() => {
                  setCurrentTopic(idx);
                  setQuizSubmitted(false);
                  setQuizAnswers({});
                  setActiveTab('content');
                }}
              >
                <span className="topic-number">{idx + 1}</span>
                <span className="topic-name">{topic.title}</span>
                {idx === 0 && <span className="free-badge">PULSUZ</span>}
                {!isActivated && idx !== 0 && <span className="lock-icon-small">🔒</span>}
                {analysisData.completedTopics.includes(idx + 1) && (
                  <span className="completed-icon">✓</span>
                )}
              </button>
            ))}
          </div>
        </aside>

        <main className="content-area">
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
                  Nümunə kod formatı: SAMKA (sadəcə nümunədir, aktivləşdirmir)
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="topic-header">
                <h2>Mövzu {currentTopic + 1}: {currentTopicData.title}</h2>
                <span className="duration">⏱️ {currentTopicData.duration}</span>
              </div>

              <div className="tabs">
                <button className={activeTab === 'content' ? 'active' : ''} onClick={() => setActiveTab('content')}>📚 Məzmun</button>
                <button className={activeTab === 'editor' ? 'active' : ''} onClick={() => setActiveTab('editor')}>💻 Kod Editoru</button>
                <button className={activeTab === 'exercise' ? 'active' : ''} onClick={() => setActiveTab('exercise')}>✏️ Tapşırıq</button>
                <button className={activeTab === 'quiz' ? 'active' : ''} onClick={() => setActiveTab('quiz')}>📝 Quiz</button>
                <button className={activeTab === 'analysis' ? 'active' : ''} onClick={() => setActiveTab('analysis')}>📊 Təhlil</button>
                <button className={activeTab === 'videos' ? 'active' : ''} onClick={() => setActiveTab('videos')}>🎥 Video Kömək</button>
              </div>

              <div className="tab-content">
                {activeTab === 'content' && (
                  <div 
                    className="content-html"
                    dangerouslySetInnerHTML={{ __html: currentTopicData.content }}
                  />
                )}

                {activeTab === 'editor' && (
                  <div className="code-editor-section">
                    <div className="editor-tabs">
                      {['html', 'css', 'js'].map(lang => (
                        <button 
                          key={lang}
                          className={activeEditorTab === lang ? 'active' : ''}
                          onClick={() => setActiveEditorTab(lang)}
                        >
                          {lang.toUpperCase()}
                        </button>
                      ))}
                    </div>
                    
                    <div className="editor-panels">
                      <div className="code-panel">
                        <textarea
                          value={editorCode[activeEditorTab]}
                          onChange={(e) => setEditorCode({
                            ...editorCode,
                            [activeEditorTab]: e.target.value
                          })}
                          spellCheck="false"
                        />
                      </div>
                      
                      <div className="output-panel">
                        <div className="panel-header">
                          <span>Output</span>
                          <button onClick={runCode} className="run-btn">▶ Run</button>
                        </div>
                        <iframe
                          ref={iframeRef}
                          srcDoc={editorOutput}
                          title="output"
                          sandbox="allow-scripts"
                        />
                      </div>
                    </div>
                  </div>
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
                    <div className="exercise-editor">
                      <textarea
                        value={exerciseCode}
                        onChange={(e) => setExerciseCode(e.target.value)}
                        placeholder="Kodunuzu buraya yazın..."
                        spellCheck="false"
                      />
                    </div>
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
                                <label key={optIdx} className="quiz-option">
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
    </div>
  );
};

export default Frontend;