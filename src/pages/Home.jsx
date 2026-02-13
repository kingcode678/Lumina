import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Code2, 
  Brain, 
  ChevronRight, 
  Clock, 
  PlayCircle,
  CheckCircle2, 
  MessageCircle, 
  Twitter,
  Menu,
  X,
  ArrowRight,
  Zap,
  Shield,
  LogOut,
  Send,
  Bot,
  Target,
  Heart,
  Users,
  Sparkles
} from 'lucide-react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import '../styles/Home.css';

// API Key birbaşa burada təyin edilir (təhlükəsizlik üçün env dəyişkənində saxlamaq daha yaxşıdır)
const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

const Home = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  // Auth state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Chatbot state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Salam! Mən Lumina AI köməkçisiyəm. Sizə necə kömək edə bilərəm?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Firebase auth listener və aktivləşdirmə kodları yaratmaq
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      // Yeni istifadəçi üçün aktivləşdirmə kodları yarat
      if (currentUser) {
        await generateActivationCodes(currentUser.uid);
      }
      
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Hər kurs üçün unikal aktivləşdirmə kodu yarat
  const generateActivationCodes = async (uid) => {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        // İstifadəçi yoxdursa kod yarat
        const frontendCode = generateCode();
        const aiCode = generateCode();
        
        await setDoc(userRef, {
          email: auth.currentUser.email,
          createdAt: new Date().toISOString(),
          activationCodes: {
            frontend: {
              code: frontendCode,
              isUsed: false,
              course: 'frontend',
              createdAt: new Date().toISOString()
            },
            ai: {
              code: aiCode,
              isUsed: false,
              course: 'ai',
              createdAt: new Date().toISOString()
            }
          }
        });
      }
    } catch (error) {
      console.error('Kod yaratma xətası:', error);
    }
  };

  // 8 simvollu unikal kod generator
  const generateCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowProfileMenu(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Chatbot funksiyaları
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
      // API Key yoxlaması
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
              content: 'Sən Lumina proqramlaşdırma kursunun AI köməkçisisən. Azərbaycanca cavab ver. Frontend Development və Süni İntelekt kursları haqqında məlumat ver. Dəstəkli, dostcanlı və peşəkar ol.'
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: inputMessage }
          ],
          temperature: 0.7,
          max_tokens: 1024
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      id: 'frontend',
      icon: <Code2 size={48} className="course-icon" />,
      title: 'Frontend Developer',
      duration: '4 ay',
      price: '12 AZN/ay',
      color: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Responsive Design', 'Git & GitHub'],
      features: [
        'Hər ay 20 mövzu',
        'Hər mövzuya özəl test',
        'Kod tapşırıqları',
        'Video kömək',
        'AI köməkçi',
        'Real layihələr'
      ]
    },
    {
      id: 'ai',
      icon: <Brain size={48} className="course-icon" />,
      title: 'Süni İntelekt',
      duration: '6 ay',
      price: '20 AZN/ay',
      color: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
      topics: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      features: [
        'Hər ay 20 mövzu',
        'Hər mövzuya özəl test',
        'Kod tapşırıqları',
        'Video kömək',
        'AI köməkçi',
        'Real layihələr'
      ]
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Qeydiyyatdan Keç',
      desc: 'Email ilə qeydiyyatdan keç və hesabını yarat. Sənə avtomatik aktivləşdirmə kodları təqdim ediləcək.'
    },
    {
      number: '02',
      title: 'Kod Al',
      desc: 'WhatsApp (055 547 36 56) vasitəsilə əlaqə saxla, ödənişini et və sənə unikal kod təsdiqlənsin.'
    },
    {
      number: '03',
      title: 'Aktivləşdir',
      desc: 'Profilindəki kodu daxil et və seçdiyin kursun ilk ayı sənə açılsın.'
    },
    {
      number: '04',
      title: 'Öyrən',
      desc: 'Həftəlik mövzuları tamamla, kod yaz, quizlər həll et, praktika et.'
    }
  ];

  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Azərbaycanca Məzmun',
      desc: 'Bütün dərslər ana dilində, sadə və anlaşıqlı izahlarla.'
    },
    {
      icon: <Code2 size={32} />,
      title: 'Praktika Yönümlü',
      desc: 'Hər mövzuda kod editoru, real tapşırıqlar və layihələr.'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'AI Dəstəyi',
      desc: '24/7 AI chatbot ilə dərhal cavab al, suallarını soruş.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Aylıq Ödəniş',
      desc: 'Uzunmüddətli öhdəlik yoxdur. Hər ay ayrı ödə, risk yoxdur.'
    }
  ];

  const aboutFeatures = [
    {
      icon: <Target size={32} />,
      title: 'Missiyamız',
      desc: 'Azərbaycanda keyfiyyətli proqramlaşdırma təhsilini hər kəs üçün əlçatan etmək. Texnologiya dünyasına girişi asan və münasib qiymətli edirik.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Dəyərlərimiz',
      desc: 'Şəffaf qiymətlər, praktika yönümlü tədris, fərdi yanaşma. Hər tələbənin uğuru bizim uğurumuzdur.'
    },
    {
      icon: <Users size={32} />,
      title: 'Komandamız',
      desc: 'Təcrübəli proqramçılar və müəllimlər. Real layihə təcrübəsi olan mütəxəssislər tərəfindən hazırlanmış kurikulum.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Fərqimiz',
      desc: 'AI dəstəkli öyrənmə, interaktiv kod editoru, hər mövzuda test və tapşırıqlar. Sadəcə video izləməklə kifayətlənməyin.'
    }
  ];

  const faqs = [
    {
      q: 'Kodu necə alıram?',
      a: 'WhatsApp (055 547 36 56) və ya Telegram (@luminaedu) vasitəsilə əlaqə saxlayırsan. Ödənişini etdikdən sonra sənə unikal 8-simvollu kod göndəririk.'
    },
    {
      q: 'Aylıq ödəniş necə işləyir?',
      a: 'Hər ayın əvvəlində yeni kod alırsan. Kodu daxil etdikdə növbəti ayın məzmunu açılır. Köhnə ayın materialları isə 7 gün əlavə saxlanılır.'
    },
    {
      q: 'Kursu dondura bilərəmmi?',
      a: 'Bəli! 1 ay dondurma hüququ var. Məsələn, imtahanlarınız varsa, növbəti ayı ödəniş etmədən saxlaya bilərsiniz.'
    }
  ];

  // İstifadəçi adının ilk hərfini götür
  const getUserInitial = () => {
    if (!user) return '';
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    return user.email.charAt(0).toUpperCase();
  };

  // İstifadəçi adını göstər
  const getUserName = () => {
    if (!user) return '';
    return user.displayName || user.email.split('@')[0];
  };

  if (loading) {
    return <div className="loading-screen">Yüklənir...</div>;
  }

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <Code2 size={32} className="logo-icon" />
            <span className="logo-text">Lumina</span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#courses" className="nav-link">Kurslar</a>
            <a href="#how-it-works" className="nav-link">Necə İşləyir</a>
            <a href="#about" className="nav-link">Haqqımızda</a>
            <a href="#features" className="nav-link">Üstünlüklər</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>

          <div className="nav-actions">
            {user ? (
              <div className="user-profile">
                <button 
                  className="profile-avatar-btn"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  title={getUserName()}
                >
                  {getUserInitial()}
                </button>

                {showProfileMenu && (
                  <div className="profile-dropdown">
                    <div className="profile-header">
                      <div className="profile-avatar-large">{getUserInitial()}</div>
                      <div className="profile-info">
                        <p className="profile-name">{getUserName()}</p>
                        <p className="profile-email">{user.email}</p>
                      </div>
                    </div>
                    <div className="profile-divider"></div>
                    <button onClick={handleLogout} className="logout-btn">
                      <LogOut size={16} />
                      Çıxış
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost">Giriş</Link>
                <Link to="/signup" className="btn btn-primary">Qeydiyyat</Link>
              </>
            )}
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Azərbaycanda <span className="gradient-text">Proqramlaşdırma</span> Öyrən,<br />
            Gələcəyini Qur
          </h1>
          
          <p className="hero-subtitle">
            Frontend Developer və Süni İntelekt kursları. 
            Praktika yönümlü, AI dəstəkli, aylıq ödənişli.
          </p>
          
          <div className="hero-cta">
            <a href="#courses" className="btn btn-large btn-primary">
              Kursları Gör <ArrowRight size={20} />
            </a>
            <button className="btn btn-large btn-ghost-light">
              <PlayCircle size={20} /> Sınaq Dərsinə Bax
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section">
        <div className="section-header">
          <span className="section-tag">KURSLAR</span>
          <h2 className="section-title">Karyeranıza Yön Verin</h2>
          <p className="section-subtitle">
            İki fərqli istiqamət, eyni keyfiyyət. Özünə uyğun olanı seç və başla.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card" style={{'--course-color': course.color}}>
              <div className="course-header" style={{background: course.color}}>
                <div className="course-icon-wrapper">
                  {course.icon}
                </div>
                <div className="course-price-badge">{course.price}</div>
              </div>
              
              <div className="course-body">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-duration">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                
                <div className="course-topics">
                  {course.topics.map((topic, idx) => (
                    <span key={idx} className="topic-tag">{topic}</span>
                  ))}
                </div>
                
                <ul className="course-features">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={`/${course.id}`} className="btn btn-course">
                  Ətraflı <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="steps-section">
        <div className="section-header light">
          <span className="section-tag">PROSES</span>
          <h2 className="section-title">4 Sadə Addımda Başla</h2>
        </div>
        
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {idx < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* About Section - YENİ EKLENDİ */}
      <section id="about" className="about-section">
        <div className="section-header">
          <span className="section-tag">HAQQIMIZDA</span>
          <h2 className="section-title">Lumina Nədir?</h2>
          <p className="section-subtitle">
            Azərbaycanda proqramlaşdırma təhsilini sadə, əlçatan və effektiv edən təhsil platforması.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              <strong>Lumina</strong> – bu, texnologiya dünyasına ilk addımı atanlar və biliklərini 
              dərinləşdirmək istəyənlər üçün yaradılmış onlayn təhsil platformasıdır. 
              Missiyamız keyfiyyətli proqramlaşdırma təhsilini hər kəs üçün əlçatan etməkdir.
            </p>
            <p className="about-description">
              Biz inanırıq ki, yaxşı proqramçı olmaq üçün bahalı kurslara getmək və ya 
              xarici dilləri mükəmməl bilmək lazım deyil. Ana dilində, sadə izahlarla, 
              praktika yönümlü yanaşma ilə hər kəs proqramlaşdırma öyrənə bilər.
            </p>
            <p className="about-description">
              Platformamızda hər mövzu üçün interaktiv kod editoru, testlər, praktiki 
              tapşırıqlar və AI köməkçi var. Aylıq ödəniş sistemi ilə isə təhsilinizi 
              öz tempinizdə, maliyyə yükü olmadan davam etdirə bilərsiniz.
            </p>
          </div>
          
          <div className="about-features-grid">
            {aboutFeatures.map((feature, idx) => (
              <div key={idx} className="about-feature-card">
                <div className="about-feature-icon">{feature.icon}</div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <div className="section-header">
          <span className="section-tag">ÜSTÜNLÜKLƏR</span>
          <h2 className="section-title">Niyə Lumina?</h2>
        </div>
        
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-section">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Tez-tez Verilən Suallar</h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${activeFAQ === idx ? 'active' : ''}`}
              onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <ChevronRight 
                  size={20} 
                  className={`faq-icon ${activeFAQ === idx ? 'rotate' : ''}`} 
                />
              </div>
              <div className={`faq-answer ${activeFAQ === idx ? 'show' : ''}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Proqramçı Karyerana İndi Başla!</h2>
          <p className="cta-subtitle">
            İlk addımı at, gələcəyini dəyiş. Bizimlə öyrən, praktika et, işə düzəl.
          </p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn btn-large btn-white">
              Pulsuz Başla <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/994555473656" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-outline-white">
              WhatsApp-la Yaz
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <Code2 size={28} className="logo-icon" />
              <span className="logo-text">Lumina</span>
            </div>
            <p className="footer-desc">
              Azərbaycanda proqramlaşdırma təhsilinin ən praktiki və əlçatan ünvanı.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Kurslar</h4>
              <Link to="/frontend">Frontend</Link>
              <Link to="/ai">Süni İntelekt</Link>
            </div>
            <div className="footer-column">
              <h4>Şirkət</h4>
              <a href="#about">Haqqımızda</a>
              <a href="https://wa.me/994555473656">Əlaqə</a>
            </div>
            <div className="footer-column">
              <h4>Dəstək</h4>
              <a href="#faq">FAQ</a>
              <a href="mailto:salam@lumina.az">salam@lumina.az</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Lumina. Bütün hüquqlar qorunur.</p>
        </div>
      </footer>

      {/* Chatbot */}
      <div className={`chatbot-container ${isChatOpen ? 'open' : ''}`}>
        <button 
          className="chatbot-toggle"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? <X size={24} /> : <Bot size={28} />}
        </button>

        {isChatOpen && (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-title">
                <Bot size={20} />
                <span>Lumina AI</span>
              </div>
              <p className="chatbot-subtitle">24/7 Dəstək</p>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.role}`}>
                  <div className="message-content">
                    {msg.content}
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
                placeholder="Sualınızı yazın..."
                disabled={isTyping}
              />
              <button 
                onClick={sendMessage}
                disabled={isTyping || !inputMessage.trim()}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;