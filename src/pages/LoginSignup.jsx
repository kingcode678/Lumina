import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  auth, 
  db,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile 
} from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Code2, Mail, Lock, User, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import '../styles/LoginSignup.css';

const LoginSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isLoginMode = location.pathname === '/login';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Bütün sahələri doldurun');
      return false;
    }
    
    if (!isLoginMode) {
      if (!formData.name.trim()) {
        setError('İstifadəçi adı daxil edin');
        return false;
      }
      if (formData.password.length < 6) {
        setError('Şifrə minimum 6 simvol olmalıdır');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Şifrələr uyğun gəlmir');
        return false;
      }
    }
    
    return true;
  };

  // 8 simvollu unikal kod generator
  const generateUniqueCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  // BOTACTIVATIONDATA KOLLEKSİYASINA DOCUMENT ƏLAVƏ ET
  const createActivationCodes = async (userId, userEmail, userName) => {
    try {
      const courses = [
        { id: 'frontend', name: 'Frontend Developer', duration: 4, price: 12 },
        { id: 'ai-python', name: 'Süni İntelekt', duration: 4, price: 20 }
      ];

      // Kurslar üçün kodları hazırla
      const coursesData = {};
      
      for (const course of courses) {
        const code = generateUniqueCode();
        
        coursesData[course.id] = {
          code: code,
          status: 'pending',
          payment: {
            status: 'pending',
            amount: course.price,
            currency: 'AZN'
          },
          courseName: course.name,
          duration: course.duration
        };

        // Köhnə activationCodes kolleksiyası (Frontend.jsx və AI.jsx üçün uyğunluq)
        const codeData = {
          code: code,
          userId: userId,
          userEmail: userEmail,
          userName: userName,
          course: course.id,
          courseName: course.name,
          status: 'pending',
          createdAt: serverTimestamp(),
          activatedAt: null,
          expiresAt: null,
          currentMonth: 0,
          totalMonths: course.duration,
          usedMonths: [],
          payment: {
            status: 'pending',
            amount: course.price,
            currency: 'AZN',
            method: null,
            verifiedBy: null,
            verifiedAt: null
          }
        };

        // activationCodes kolleksiyası
        await setDoc(doc(db, 'activationCodes', code), codeData);
        
        // User-in şəxsi activationCodes alt-kolleksiyası
        await setDoc(doc(db, 'users', userId, 'activationCodes', course.id), codeData);
      }

      // BOTACTIVATIONDATA KOLLEKSİYASINA YAZ - userId = document ID
      const botActivationData = {
        userEmail: userEmail,
        userName: userName,
        courses: coursesData,
        createdAt: serverTimestamp()
      };

      // userId ilə document yarat (əgər varsa yenilə)
      await setDoc(doc(db, 'botActivationData', userId), botActivationData);
      
      console.log('botActivationData yaradıldı:', userId);

    } catch (error) {
      console.error('Activation codes xətası:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    setError('');

    try {
      if (isLoginMode) {
        // LOGIN
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        // SIGNUP
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        
        const user = userCredential.user;

        // 1. Firebase Auth Profilini yenilə
        await updateProfile(user, {
          displayName: formData.name
        });

        // 2. FIRESTORE-DA İSTİFADƏÇİ BAZASI YARAT
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: formData.name,
          email: formData.email,
          role: "student",
          purchasedCourses: [],
          progress: {},
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });

        // 3. BOTACTIVATIONDATA KOLLEKSİYASINA ƏLAVƏ ET
        await createActivationCodes(user.uid, formData.email, formData.name);
      }
      
      navigate('/');
      
    } catch (err) {
      let errorMessage = 'Xəta baş verdi';
      
      switch (err.code) {
        case 'auth/user-not-found':
          errorMessage = 'Bu email ilə istifadəçi tapılmadı';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Yanlış şifrə';
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'Bu email artıq qeydiyyatdan keçib';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Yanlış email formatı';
          break;
        case 'auth/weak-password':
          errorMessage = 'Şifrə çox zəifdir';
          break;
        default:
          errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setError('');
  }, [location.pathname]);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="auth-logo">
          <Code2 size={40} className="logo-icon" />
          <span className="logo-text">CodeAz</span>
        </Link>

        <div className="auth-header">
          <h1>{isLoginMode ? 'Daxil Ol' : 'Qeydiyyat'}</h1>
          <p>
            {isLoginMode 
              ? 'Hesabınıza daxil olun və öyrənməyə davam edin' 
              : 'Yeni hesab yaradın və öyrənməyə başlayın'}
          </p>
        </div>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLoginMode && (
            <div className="form-group">
              <label htmlFor="name">
                <User size={18} />
                İstifadəçi adı
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınızı daxil edin"
                disabled={loading}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">
              <Mail size={18} />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <Lock size={18} />
              Şifrə
            </label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={isLoginMode ? 'Şifrənizi daxil edin' : 'Minimum 6 simvol'}
                disabled={loading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {!isLoginMode && (
            <div className="form-group">
              <label htmlFor="confirmPassword">
                <Lock size={18} />
                Şifrəni təsdiqlə
              </label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Şifrənizi təkrar daxil edin"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn-submit"
            disabled={loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : (
              isLoginMode ? 'Daxil Ol' : 'Qeydiyyatdan Keç'
            )}
          </button>
        </form>

        <div className="auth-toggle">
          {isLoginMode ? (
            <p>
              Hesabınız yoxdur?{' '}
              <Link to="/signup" className="toggle-link">
                Qeydiyyatdan keçin
              </Link>
            </p>
          ) : (
            <p>
              Artıq hesabınız var?{' '}
              <Link to="/login" className="toggle-link">
                Daxil olun
              </Link>
            </p>
          )}
        </div>

        <Link to="/" className="btn-back">
          <ArrowLeft size={18} />
          Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
};

export default LoginSignup;