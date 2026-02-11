import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Brain, 
  ChevronRight, 
  Star, 
  Users, 
  Briefcase, 
  PlayCircle,
  CheckCircle2,
  MessageCircle,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Zap,
  Shield,
  Clock
} from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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
      features: ['16 mövzu', '60+ praktika', '4 layihə', 'Mentor dəstəyi']
    },
    {
      id: 'ai',
      icon: <Brain size={48} className="course-icon" />,
      title: 'Süni İntelekt',
      duration: '6 ay',
      price: '15 AZN/ay',
      color: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
      topics: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      features: ['24 mövzu', '80+ praktika', '6 layihə', 'Mentor dəstəyi']
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Kod Al',
      desc: 'WhatsApp/Telegram vasitəsilə əlaqə saxla, ödənişini et və sənə unikal kod göndərək.'
    },
    {
      number: '02',
      title: 'Aktivləşdir',
      desc: 'Kodu profilində daxil et və seçdiyin kursun ilk ayı sənə açılsın.'
    },
    {
      number: '03',
      title: 'Öyrən',
      desc: 'Həftəlik mövzuları tamamla, kod yaz, quizlər həll et, praktika et.'
    },
    {
      number: '04',
      title: 'İşə Düzəl',
      desc: 'Portfolionu qur, sertifikatını al və IT şirkətlərində işə başla.'
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
      title: 'Mentor Dəstəyi',
      desc: 'Dərslərlə bağlı suallarını email ilə cavablandırırıq.'
    },
    {
      icon: <Twitter size={32} />,
      title: 'Tələbə İcması',
      desc: 'Digər tələbələrlə chatdə ünsiyyət qur, bilik paylaş.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Aylıq Ödəniş',
      desc: 'Uzunmüddətli öhdəlik yoxdur. Hər ay ayrı ödə, risk yoxdur.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Öz Tempində',
      desc: 'Vaxt limiti yoxdur. Gündə 30 dəqiqə və ya 3 saat - sən seç.'
    }
  ];

  const testimonials = [
    {
      name: 'Leyla M.',
      role: 'Frontend Developer @ Pasha Bank',
      image: 'https://i.pravatar.cc/150?img=1',
      text: '3 ay ərzində HTML/CSS öyrənib işə düzəldim. Dərslər çox praktikidir, mentor dəstəyi əladır!'
    },
    {
      name: 'Orxan K.',
      role: 'Junior React Developer',
      image: 'https://i.pravatar.cc/150?img=3',
      text: 'Kod yazma tapşırıqları sayəsində real iş mühitinə hazır oldum. Hazırda remote işləyirəm.'
    },
    {
      name: 'Nigar A.',
      role: 'AI Kurs Tələbəsi',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Süni intelekt kursu çox sistemlidir. Python sıfırdan öyrəndim və ilk ML layihəmi etdim.'
    }
  ];

  const faqs = [
    {
      q: 'Kodu necə alıram?',
      a: 'WhatsApp (050-XXX-XX-XX) və ya Telegram (@codeaz) vasitəsilə əlaqə saxlayırsan. Ödənişini etdikdən sonra sənə unikal 12-simvollu kod göndəririk.'
    },
    {
      q: 'Aylıq ödəniş necə işləyir?',
      a: 'Hər ayın əvvəlində yeni kod alırsan. Kodu daxil etdikdə növbəti ayın məzmunu açılır. Köhnə ayın materialları isə 7 gün əlavə saxlanılır.'
    },
    {
      q: 'Kursu dondura bilərəmmi?',
      a: 'Bəli! 1 ay dondurma hüququ var. Məsələn, imtahanlarınız varsa, növbəti ayı ödəniş etmədən saxlaya bilərsiniz.'
    },
    {
      q: 'Sertifikat verirsinizmi?',
      a: 'Bəli, hər ayı tamamladıqda "Sertifikat of Completion" alırsan. 4 aylıq Frontend kursunu bitirdikdə isə tam sertifikat verilir.'
    },
    {
      q: 'İşə düzəlməyə kömək edirsinizmi?',
      a: 'Bəli! Son ayda CV review, LinkedIn optimallaşdırma və müsahibə hazırlığı dəstəyi veririk. Həmçinin partnyor şirkətlərə tövsiyə edirik.'
    }
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <Code2 size={32} className="logo-icon" />
            <span className="logo-text">CodeAz</span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#courses" className="nav-link">Kurslar</a>
            <a href="#how-it-works" className="nav-link">Necə İşləyir</a>
            <a href="#features" className="nav-link">Üstünlüklər</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>

          <div className="nav-actions">
            <button className="btn btn-ghost">Giriş</button>
            <button className="btn btn-primary">Qeydiyyat</button>
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
          <div className="hero-badge">
            <Star size={16} className="star-icon" />
            <span>500+ tələbə artıq öyrənir</span>
          </div>
          
          <h1 className="hero-title">
            Azərbaycanca <span className="gradient-text">Proqramlaşdırma</span> Öyrən,<br />
            İşə Düzəl
          </h1>
          
          <p className="hero-subtitle">
            Frontend Developer və Süni İntelekt kursları. 
            Praktika yönümlü, mentor dəstəkli, aylıq ödənişli.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Tələbə</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Reytinq</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">İşə Düzəlmə</span>
            </div>
          </div>
          
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
                
                {/* DƏYİŞİKLİK BURADADIR: ID-yə görə düzgün səhifəyə yönləndirir */}
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

      {/* Features */}
      <section id="features" className="features-section">
        <div className="section-header">
          <span className="section-tag">ÜSTÜNLÜKLƏR</span>
          <h2 className="section-title">Niyə CodeAz?</h2>
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

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header light">
          <span className="section-tag">RƏYLƏR</span>
          <h2 className="section-title">Tələbələrimiz Nə Deyir?</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <img src={item.image} alt={item.name} className="author-image" />
                <div className="author-info">
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                </div>
              </div>
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
            İlk 100 qeydiyyatdan keçənə 20% endirim. Tələsin!
          </p>
          <div className="cta-buttons">
            <button className="btn btn-large btn-white">
              Pulsuz Sınaq <ArrowRight size={20} />
            </button>
            <button className="btn btn-large btn-outline-white">
              WhatsApp-la Yaz
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <Code2 size={28} className="logo-icon" />
              <span className="logo-text">CodeAz</span>
            </div>
            <p className="footer-desc">
              Azərbaycanda proqramlaşdırma təhsilinin ən praktiki və əlçatan ünvanı.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Users size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Kurslar</h4>
              <Link to="/frontend">Frontend</Link>
              <Link to="/ai">Süni İntelekt</Link>
              <a href="#">Tezliklə: Backend</a>
            </div>
            <div className="footer-column">
              <h4>Şirkət</h4>
              <a href="#">Haqqımızda</a>
              <a href="#">Mentorlar</a>
              <a href="#">Əlaqə</a>
            </div>
            <div className="footer-column">
              <h4>Dəstək</h4>
              <a href="#">FAQ</a>
              <a href="#">Kod Aktivləşdirmə</a>
              <a href="#">Email: salam@codeaz.az</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 CodeAz. Bütün hüquqlar qorunur.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;