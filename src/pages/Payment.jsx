// Payment.jsx - Yenilənmiş OCR Sistemi
// Əvvəlki kodun davamı, yalnız validatePaymentReceipt və processPayment funksiyaları dəyişir

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Upload, 
  CreditCard, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Copy, 
  ChevronRight, 
  Shield, 
  Zap,
  X,
  Check,
  ArrowLeft,
  Lock,
  Unlock,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { auth, db } from '../firebase';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs, 
  serverTimestamp, 
  addDoc
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Tesseract from 'tesseract.js';
import '../styles/Payment.css';

const COURSES = {
  frontend: { 
    name: 'Frontend Development', 
    price: 12, 
    dbName: 'frontend',
    icon: '💻',
    color: '#6366f1',
    description: 'HTML, CSS, JavaScript, React'
  },
  ai: { 
    name: 'Süni İntellekt (AI)', 
    price: 20, 
    dbName: 'ai-python',
    icon: '🤖',
    color: '#ec4899',
    description: 'Python, ML, Deep Learning'
  }
};

// VALID MƏBLƏĞLƏR (Endirimlə birlikdə)
const VALID_AMOUNTS = [20, 18, 12, 10.8, 16, 14.4]; // Əsas və endirimli məbləğlər

const Payment = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [email, setEmail] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [finalPrice, setFinalPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [firebaseUserId, setFirebaseUserId] = useState(null);
  const [affiliateName, setAffiliateName] = useState('');
  
  const [uploadedFile, setUploadedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrConfidence, setOcrConfidence] = useState(0);
  const [validationDetails, setValidationDetails] = useState(null);
  
  const [activationCode, setActivationCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [copied, setCopied] = useState(false);
  const [showFraudWarning, setShowFraudWarning] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setEmail(currentUser.email || '');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Step 1: Select Course
  const handleCourseSelect = (courseKey) => {
    setSelectedCourse(courseKey);
    setBasePrice(COURSES[courseKey].price);
    setFinalPrice(COURSES[courseKey].price);
    setCurrentStep(2);
    setError('');
  };

  // Step 2: Verify Email
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsProcessing(true);

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Düzgün email formatı daxil edin');
        setIsProcessing(false);
        return;
      }

      const botDataRef = collection(db, 'botActivationData');
      const q = query(botDataRef, where('userEmail', '==', email.toLowerCase().trim()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('Bu email sistemdə tapılmadı! Zəhmət olmasa əvvəlcə qeydiyyatdan keçin.');
        setIsProcessing(false);
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const courseDbName = COURSES[selectedCourse].dbName;
      const courseInfo = userData.courses?.[courseDbName];
      
      if (courseInfo?.status === 'active') {
        setError(`Bu kurs üçün artıq aktivləşdirmə kodu mövcuddur.`);
        setIsProcessing(false);
        return;
      }

      setFirebaseUserId(userDoc.id);
      setCurrentStep(3);
    } catch (err) {
      setError('Xəta baş verdi: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  // Step 3: Promo Code
  const handlePromoSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsProcessing(true);

    try {
      const inputCode = promoCode.trim();
      
      if (!inputCode || inputCode.toLowerCase() === 'xeyr') {
        setDiscountApplied(false);
        setFinalPrice(basePrice);
        setCurrentStep(4);
        setIsProcessing(false);
        return;
      }

      const affiliatesRef = collection(db, 'affiliates');
      const q = query(affiliatesRef, where('promoCode', '==', inputCode.toUpperCase()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('Promo kod tapılmadı!');
        setIsProcessing(false);
        return;
      }

      const affiliateDoc = querySnapshot.docs[0];
      const affiliateData = affiliateDoc.data();

      const paymentsRef = collection(db, 'payments');
      const paymentQuery = query(
        paymentsRef, 
        where('email', '==', email.toLowerCase()),
        where('affiliateCode', '==', inputCode.toUpperCase())
      );
      const paymentSnapshot = await getDocs(paymentQuery);

      if (!paymentSnapshot.empty) {
        setError('Bu email ilə bu promo kod artıq istifadə edilib.');
        setIsProcessing(false);
        return;
      }

      const discountedPrice = Math.round(basePrice * 0.9 * 100) / 100;
      setFinalPrice(discountedPrice);
      setDiscountApplied(true);
      setAffiliateName(affiliateData.name || '');
      setCurrentStep(4);
      
    } catch (err) {
      setError('Xəta baş verdi: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const skipPromo = () => {
    setDiscountApplied(false);
    setFinalPrice(basePrice);
    setPromoCode('');
    setAffiliateName('');
    setCurrentStep(4);
  };

  // File handling
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) validateAndSetFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) validateAndSetFile(file);
  };

  const validateAndSetFile = (file) => {
    setError('');
    
    if (!file.type.startsWith('image/')) {
      setError('Zəhmət olmasa şəkil faylı yükləyin (JPG, PNG, WEBP)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Fayl həcmi 5MB-dan çox ola bilməz');
      return;
    }

    setUploadedFile(file);
    
    const reader = new FileReader();
    reader.onload = (e) => setFilePreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // =============================================================================
  // TƏKMILLƏŞDIRILMIŞ OCR VALIDASIYA SISTEMI
  // =============================================================================

  const validatePaymentReceipt = (text, expectedAmount) => {
    const lowerText = text.toLowerCase();
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    console.log('=== OCR ANALIZ BAŞLADI ===');
    console.log('Raw text:', text.substring(0, 500));
    console.log('Expected amount:', expectedAmount);
    
    let score = 0;
    let maxScore = 0;
    const details = {
      checks: [],
      amounts: [],
      dates: [],
      banks: [],
      statuses: [],
      recipients: [],
      confidence: 0
    };

    // 1. MƏBLƏĞ YOXLANIŞI (25 bal)
    maxScore += 25;
    const amountPatterns = [
      new RegExp(`(${expectedAmount.toFixed(2).replace('.', '\\.')})\\s*(azn|₼|manat)?`, 'i'),
      new RegExp(`(${expectedAmount.toString().replace('.', '\\.')})\\s*(azn|₼|manat)?`, 'i'),
      new RegExp(`(${Math.floor(expectedAmount)})[\\s,]*(00)?\\s*(azn|₼)?`, 'i'),
      /(\d{1,3}[.,]\d{2})\s*(azn|₼|manat)/i,
      /(\d{1,3})\s*(azn|₼|manat)/i,
      /məblə[ğg][:\s]*(\d+[.,]?\d*)/i,
      /amount[:\s]*(\d+[.,]?\d*)/i,
      /total[:\s]*(\d+[.,]?\d*)/i,
      /ümumi[:\s]*(\d+[.,]?\d*)/i
    ];

    let amountFound = false;
    for (const pattern of amountPatterns) {
      const matches = lowerText.match(pattern);
      if (matches) {
        const foundAmount = parseFloat(matches[1].replace(',', '.'));
        details.amounts.push({ value: foundAmount, raw: matches[0] });
        
        // Gözlənilən məbləğə uyğunluq
        if (Math.abs(foundAmount - expectedAmount) < 0.01 || 
            VALID_AMOUNTS.includes(foundAmount)) {
          score += 25;
          amountFound = true;
          details.checks.push(`✅ Məbləğ uyğundur: ${foundAmount} AZN`);
          break;
        } else if (Math.abs(foundAmount - expectedAmount) < 1) {
          score += 15; // Yaxın məbləğ
          details.checks.push(`⚠️ Məbləğ yaxındır: ${foundAmount} AZN (gözlənilən: ${expectedAmount})`);
        }
      }
    }
    
    if (!amountFound) {
      details.checks.push(`❌ Məbləğ tapılmadı və ya uyğun deyil (gözlənilən: ${expectedAmount} AZN)`);
    }

    // 2. UĞUR/UĞURLU STATUSU (20 bal)
    maxScore += 20;
    const successPatterns = [
      /u[ğg]urlu\s*(?:əməliyyat|ödəniş|köçürmə|əməliyyat!)?/i,
      /u[ğg]urla\s*(?:başa\s*çatdı|ödəniş\s*edildi|köçürüldü)/i,
      /success/i,
      /completed/i,
      /approved/i,
      /təsdiqləndi/i,
      /yerinə\s*yetirildi/i,
      /aparıldı/i,
      /ödəniş\s*edildi/i,
      /köçürmə\s*u[ğg]urla/i,
      /green\s*check/i, // Vizual elementlər
      /✓/,
      /✅/,
      /paid/i,
      /ödənilib/i
    ];

    let successFound = false;
    for (const pattern of successPatterns) {
      if (pattern.test(text) || pattern.test(lowerText)) {
        const match = text.match(pattern) || lowerText.match(pattern);
        score += 20;
        successFound = true;
        details.statuses.push(match[0]);
        details.checks.push(`✅ Uğurlu status: "${match[0]}"`);
        break;
      }
    }
    
    if (!successFound) {
      // Vizual uğur indicatoları (yaşıl işarə, checkmark)
      if (text.includes('🟢') || text.includes('✓') || text.includes('✔') || 
          lowerText.includes('ugurlu') || lowerText.includes('ugur')) {
        score += 15;
        details.checks.push(`⚠️ Vizual uğur indicatoları tapıldı`);
      } else {
        details.checks.push(`❌ Uğurlu status tapılmadı`);
      }
    }

    // 3. BANK ADI (15 bal)
    maxScore += 15;
    const bankPatterns = [
      { name: 'Birbank', pattern: /birbank/i },
      { name: 'Leobank', pattern: /leo|leobank/i },
      { name: 'Unibank', pattern: /unibank/i },
      { name: 'ABB', pattern: /abb|azərbaycan\s*beynəlxalq\s*bankı/i },
      { name: 'Kapital Bank', pattern: /kapital/i },
      { name: 'PASHA Bank', pattern: /pasha/i },
      { name: 'Xalq Bank', pattern: /xalq/i },
      { name: 'Rabitə Bank', pattern: /rabitə/i },
      { name: 'Yelo Bank', pattern: /yelo/i },
      { name: 'Bank Respublika', pattern: /respublika/i }
    ];

    let bankFound = false;
    for (const bank of bankPatterns) {
      if (bank.pattern.test(lowerText)) {
        score += 15;
        bankFound = true;
        details.banks.push(bank.name);
        details.checks.push(`✅ Bank tapıldı: ${bank.name}`);
        break;
      }
    }
    
    if (!bankFound) {
      details.checks.push(`⚠️ Bank adı aydın deyil`);
    }

    // 4. TARIX (15 bal)
    maxScore += 15;
    const datePatterns = [
      /(\d{1,2})[.-](\d{1,2})[.-](20\d{2})/, // 24.02.2026 və ya 24-02-2026
      /(\d{1,2})\s*(yanvar|fevral|mart|aprel|may|iyun|iyul|avqust|sentyabr|oktyabr|noyabr|dekabr)/i,
      /(20\d{2})[.-](\d{1,2})[.-](\d{1,2})/, // 2026.02.24
      /(\d{1,2}):(\d{2})(?::(\d{2}))?/, // 22:24 və ya 22:24:27
      /tarix[:\s]*(\d+[.-]\d+[.-]\d+)/i,
      /date[:\s]*(\d+[.-]\d+[.-]\d+)/i
    ];

    let dateFound = false;
    for (const pattern of datePatterns) {
      const matches = text.match(pattern) || lowerText.match(pattern);
      if (matches) {
        score += 15;
        dateFound = true;
        details.dates.push(matches[0]);
        details.checks.push(`✅ Tarix tapıldı: ${matches[0]}`);
        break;
      }
    }
    
    if (!dateFound) {
      details.checks.push(`⚠️ Tarix aydın deyil`);
    }

    // 5. VALYUTA (10 bal)
    maxScore += 10;
    const currencyPatterns = [
      /azn/i,
      /₼/,
      /manat/i,
      /məblə[ğg].*azn/i
    ];

    let currencyFound = false;
    for (const pattern of currencyPatterns) {
      if (pattern.test(lowerText)) {
        score += 10;
        currencyFound = true;
        details.checks.push(`✅ Valyuta tapıldı: AZN/₼`);
        break;
      }
    }
    
    if (!currencyFound) {
      details.checks.push(`⚠️ Valyuta aydın deyil`);
    }

    // 6. ƏMƏLIYYAT NÖVÜ (10 bal)
    maxScore += 10;
    const operationPatterns = [
      /köçürmə/i,
      /transfer/i,
      /karta\s*köçürmə/i,
      /ödəniş/i,
      /payment/i,
      /category[:\s]*transfer/i
    ];

    let operationFound = false;
    for (const pattern of operationPatterns) {
      if (pattern.test(lowerText)) {
        score += 10;
        operationFound = true;
        details.checks.push(`✅ Əməliyyat növü: Köçürmə/Ödəniş`);
        break;
      }
    }
    
    if (!operationFound) {
      details.checks.push(`⚠️ Əməliyyat növü aydın deyil`);
    }

    // 7. ALICI/GÖNDƏRƏN MƏLUMATLARI (5 bal)
    maxScore += 5;
    const recipientPatterns = [
      /(?:alıcı|alici|to|enroll\s*to|haraya|karta)[:\s]*(\*{4,}\d{4}|\d{4})/i,
      /(?:göndərən|gonderen|from|haradan|paid\s*by)[:\s]*(\*{4,}\d{4}|\d{4})/i,
      /\*{4,}\d{4}/, // Masked kart nömrələri
      /\d{4}\s*\|\s*(?:leobank|birbank|unibank|abb)/i
    ];

    let recipientFound = false;
    for (const pattern of recipientPatterns) {
      const matches = text.match(pattern) || lowerText.match(pattern);
      if (matches) {
        score += 5;
        recipientFound = true;
        details.recipients.push(matches[0]);
        details.checks.push(`✅ Kart məlumatları tapıldı`);
        break;
      }
    }
    
    if (!recipientFound) {
      details.checks.push(`⚠️ Kart məlumatları aydın deyil`);
    }

    // NƏTICƏ HESABLAMA
    const percentage = Math.round((score / maxScore) * 100);
    details.confidence = percentage;
    details.score = score;
    details.maxScore = maxScore;
    
    console.log('=== OCR ANALIZ NƏTICƏSI ===');
    console.log('Score:', score, '/', maxScore);
    console.log('Percentage:', percentage + '%');
    console.log('Details:', details);
    
    return {
      isValid: percentage >= 60,
      percentage: percentage,
      details: details,
      score: score,
      maxScore: maxScore
    };
  };

  // =============================================================================
  // ÖDƏNIŞ PROSESI
  // =============================================================================

  const processPayment = async () => {
    if (!uploadedFile) {
      setError('Zəhmət olmasa ödəniş çekinin şəklini yükləyin');
      return;
    }

    setIsProcessing(true);
    setError('');
    setValidationDetails(null);

    try {
      // OCR with Tesseract - Azərbaycan və İngilis dilləri
      const result = await Tesseract.recognize(
        uploadedFile,
        'aze+eng',
        {
          logger: m => {
            if (m.status === 'recognizing text') {
              setOcrConfidence(Math.round(m.progress * 100));
            }
          }
        }
      );

      const extractedText = result.data.text;
      console.log('OCR Raw Text:', extractedText);
      
      // Validasiya
      const validation = validatePaymentReceipt(extractedText, finalPrice);
      setValidationDetails(validation);
      
      if (!validation.isValid) {
        setError(
          `❌ Çek təsdiqlənmədi! (${validation.percentage}% uyğunluq)\n\n` +
          `Tələb olunan minimum: 60%\n\n` +
          `Tapılan problemlər:\n` +
          validation.details.checks.filter(c => c.startsWith('❌') || c.startsWith('⚠️')).join('\n') +
          `\n\nZəhmət olmasa aydın şəkil çəkin və yenidən yoxlayın.`
        );
        setIsProcessing(false);
        return;
      }

      // Uğurlu - aktivləşdirmə kodu ver
      await activateCode(extractedText, validation);

    } catch (err) {
      console.error('OCR Error:', err);
      setError('Şəkil oxuma xətası: ' + err.message);
      setIsProcessing(false);
    }
  };

  const activateCode = async (ocrText, validation) => {
    try {
      const courseDbName = COURSES[selectedCourse].dbName;
      
      const botRef = doc(db, 'botActivationData', firebaseUserId);
      const botSnap = await getDoc(botRef);

      if (!botSnap.exists()) {
        setError('İstifadəçi məlumatları tapılmadı');
        setIsProcessing(false);
        return;
      }

      const botData = botSnap.data();
      const courseData = botData.courses?.[courseDbName];
      
      if (!courseData?.code) {
        setError('Aktivləşdirmə kodu tapılmadı');
        setIsProcessing(false);
        return;
      }

      const code = courseData.code;

      // Update status
      await updateDoc(botRef, {
        [`courses.${courseDbName}.status`]: 'active',
        [`courses.${courseDbName}.payment.status`]: 'completed',
        [`courses.${courseDbName}.payment.verifiedAt`]: serverTimestamp(),
        [`courses.${courseDbName}.payment.amount`]: finalPrice,
        [`courses.${courseDbName}.payment.validationScore`]: validation.score,
        [`courses.${courseDbName}.payment.validationPercentage`]: validation.percentage,
        updatedAt: serverTimestamp()
      });

      // Save payment
      await addDoc(collection(db, 'payments'), {
        email: email.toLowerCase(),
        course: selectedCourse,
        courseName: COURSES[selectedCourse].name,
        finalPrice: finalPrice,
        basePrice: basePrice,
        discountApplied: discountApplied,
        affiliateCode: promoCode.toUpperCase() || null,
        affiliateName: affiliateName || null,
        firebaseUserId: firebaseUserId,
        date: serverTimestamp(),
        status: 'completed',
        ocrText: ocrText.substring(0, 1000),
        validationScore: validation.score,
        validationPercentage: validation.percentage,
        validationDetails: validation.details,
        verifiedBy: 'auto_ocr_v2'
      });

      // Update affiliate
      if (promoCode) {
        const affiliatesRef = collection(db, 'affiliates');
        const q = query(affiliatesRef, where('promoCode', '==', promoCode.toUpperCase()));
        const affiliateSnap = await getDocs(q);

        if (!affiliateSnap.empty) {
          const affiliateDoc = affiliateSnap.docs[0];
          const affiliateData = affiliateDoc.data();
          const commission = finalPrice * 0.3;

          await updateDoc(affiliateDoc.ref, {
            earned: (affiliateData.earned || 0) + commission,
            totalSales: (affiliateData.totalSales || 0) + finalPrice,
            lastSale: serverTimestamp()
          });
        }
      }

      setActivationCode(code);
      setShowFraudWarning(true); // Fırıldaqçılıq xəbərdarlığı göstər
      setCurrentStep(5);
      setSuccess(`✅ Ödəniş uğurla təsdiqləndi! (${validation.percentage}% uyğunluq)`);
      
    } catch (err) {
      setError('Aktivləşdirmə xətası: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedCourse(null);
    setEmail('');
    setPromoCode('');
    setFinalPrice(0);
    setBasePrice(0);
    setDiscountApplied(false);
    setUploadedFile(null);
    setFilePreview(null);
    setActivationCode('');
    setError('');
    setSuccess('');
    setCopied(false);
    setAffiliateName('');
    setValidationDetails(null);
    setShowFraudWarning(false);
    setOcrConfidence(0);
  };

  if (loading) {
    return (
      <div className="payment-page-loading">
        <Loader2 className="animate-spin" size={48} color="#6366f1" />
        <p>Yüklənir...</p>
      </div>
    );
  }

  return (
    <div className="payment-page">
      {/* Header */}
      <header className="payment-header-simple">
        <Link to="/" className="payment-logo">
          <Zap size={28} color="#6366f1" />
          <span>Lumina Ödəniş</span>
        </Link>
        <div className="payment-header-actions">
          {user ? (
            <span className="user-email">{user.email}</span>
          ) : (
            <Link to="/login" className="btn-login-small">Giriş</Link>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="payment-content">
        {/* Progress */}
        <div className="payment-progress">
          {[
            { num: 1, label: 'Kurs' },
            { num: 2, label: 'Email' },
            { num: 3, label: 'Promo' },
            { num: 4, label: 'Çek' },
            { num: 5, label: 'Kod' }
          ].map((step) => (
            <div 
              key={step.num}
              className={`progress-item ${currentStep >= step.num ? 'active' : ''} ${currentStep === step.num ? 'current' : ''}`}
            >
              <div className="progress-circle">{step.num}</div>
              <span className="progress-label">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Alerts */}
        {error && (
          <div className="payment-alert error">
            <AlertCircle size={20} />
            <div className="alert-content">
              {error.split('\n').map((line, i) => (
                <p key={i} style={{ margin: '0.25rem 0' }}>{line}</p>
              ))}
            </div>
            <button onClick={() => setError('')} className="alert-close"><X size={16} /></button>
          </div>
        )}

        {success && (
          <div className="payment-alert success">
            <CheckCircle size={20} />
            <span>{success}</span>
          </div>
        )}

        {/* Step 1: Course Selection */}
        {currentStep === 1 && (
          <div className="payment-step">
            <h1>Kurs Seçin</h1>
            <p className="step-description">Hansı kurs üçün ödəniş etmək istəyirsiniz?</p>
            
            <div className="course-selection-grid">
              {Object.entries(COURSES).map(([key, course]) => (
                <div 
                  key={key}
                  className="course-selection-card"
                  onClick={() => handleCourseSelect(key)}
                  style={{ borderColor: course.color }}
                >
                  <div className="course-selection-icon" style={{ background: course.color }}>
                    {course.icon}
                  </div>
                  <div className="course-selection-info">
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                    <div className="course-selection-price" style={{ color: course.color }}>
                      {course.price} AZN/ay
                    </div>
                  </div>
                  <ChevronRight size={24} className="selection-arrow" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Email */}
        {currentStep === 2 && (
          <div className="payment-step">
            <h1>Email Təsdiqi</h1>
            <p className="step-description">Qeydiyyatdan keçdiyiniz email ünvanı</p>
            
            <form onSubmit={handleEmailSubmit} className="payment-form">
              <div className="form-field">
                <label>Email ünvanı</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ad@example.com"
                  required
                  disabled={!!user}
                />
              </div>

              <div className="selected-course-preview">
                <span>Seçilmiş kurs:</span>
                <strong>{COURSES[selectedCourse]?.name}</strong>
                <span>{COURSES[selectedCourse]?.price} AZN</span>
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setCurrentStep(1)} className="btn-secondary">
                  <ArrowLeft size={18} /> Geri
                </button>
                <button type="submit" className="btn-primary" disabled={isProcessing}>
                  {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <ChevronRight size={18} />}
                  Davam et
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Promo Code */}
        {currentStep === 3 && (
          <div className="payment-step">
            <h1>Promo Kod</h1>
            <p className="step-description">Endirim kodunuz varsa daxil edin (10% endirim)</p>
            
            <form onSubmit={handlePromoSubmit} className="payment-form">
              <div className="form-field">
                <label>Promo Kod (opsional)</label>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Kodu daxil edin və ya 'xeyr' yazın"
                  style={{ textTransform: 'uppercase' }}
                />
                {affiliateName && (
                  <span className="field-hint success">✅ {affiliateName} tərəfindən təqdim edildi</span>
                )}
              </div>

              <div className="price-breakdown">
                <div className="price-row">
                  <span>Əsas qiymət:</span>
                  <span>{basePrice.toFixed(2)} AZN</span>
                </div>
                {discountApplied && (
                  <div className="price-row discount">
                    <span>Endirim (10%):</span>
                    <span>-{(basePrice - finalPrice).toFixed(2)} AZN</span>
                  </div>
                )}
                <div className="price-row total">
                  <span>Yekun ödəniş:</span>
                  <span className="total-amount">{finalPrice.toFixed(2)} AZN</span>
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={() => setCurrentStep(2)} className="btn-secondary">
                  <ArrowLeft size={18} /> Geri
                </button>
                <div className="action-group">
                  <button type="button" onClick={skipPromo} className="btn-text">
                    Promo kod yoxdur
                  </button>
                  <button type="submit" className="btn-primary" disabled={isProcessing}>
                    {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <ChevronRight size={18} />}
                    Təsdiqlə
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Upload */}
        {currentStep === 4 && (
          <div className="payment-step">
            <h1>Ödəniş Təsdiqi</h1>
            <p className="step-description">Çekin şəklini yükləyin (OCR avtomatik yoxlayacaq)</p>
            
            <div className="payment-details-card">
              <h3>Ödəniş Məlumatları</h3>
              <div className="detail-row">
                <span>Kurs:</span>
                <strong>{COURSES[selectedCourse]?.name}</strong>
              </div>
              <div className="detail-row">
                <span>Məbləğ:</span>
                <strong className="highlight-price">{finalPrice.toFixed(2)} AZN</strong>
              </div>
              <div className="detail-row">
                <span>Kart:</span>
                <code className="card-info">4169 7388 1234 5678</code>
              </div>
              <div className="detail-row">
                <span>Ad Soyad:</span>
                <span>Lumina Edu</span>
              </div>
            </div>

            <div 
              className={`upload-area ${filePreview ? 'has-preview' : ''}`}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                hidden
              />
              
              {filePreview ? (
                <div className="preview-container">
                  <img src={filePreview} alt="Payment receipt" />
                  <button 
                    type="button" 
                    className="remove-preview"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile();
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <Upload size={48} color="#6366f1" />
                  <p>Şəkli bura sürükləyin və ya klikləyin</p>
                  <span>JPG, PNG (max 5MB)</span>
                </div>
              )}
            </div>

            {/* OCR Progress */}
            {isProcessing && ocrConfidence > 0 && ocrConfidence < 100 && (
              <div className="ocr-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${ocrConfidence}%` }}></div>
                </div>
                <span>Şəkil oxunur: {ocrConfidence}%</span>
              </div>
            )}

            {/* Validation Details */}
            {validationDetails && !isProcessing && (
              <div className={`validation-details ${validationDetails.isValid ? 'valid' : 'invalid'}`}>
                <h4>Validasiya Nəticəsi: {validationDetails.percentage}%</h4>
                <ul>
                  {validationDetails.details.checks.map((check, i) => (
                    <li key={i}>{check}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="upload-actions">
              <button 
                onClick={() => setCurrentStep(3)} 
                className="btn-secondary"
                disabled={isProcessing}
              >
                <ArrowLeft size={18} /> Geri
              </button>
              
              <button 
                onClick={processPayment}
                className="btn-verify"
                disabled={!uploadedFile || isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Yoxlanılır...
                  </>
                ) : (
                  <>
                    <Shield size={18} />
                    Ödənişi Təsdiqlə
                  </>
                )}
              </button>
            </div>

            <div className="ocr-info">
              <FileText size={14} />
              <p>Sistem avtomatik olaraq məbləğ, tarix, bank adı, uğur statusu və valyutanı yoxlayır</p>
            </div>
          </div>
        )}

        {/* Step 5: Success */}
        {currentStep === 5 && (
          <div className="payment-step success-step">
            <div className="success-animation">
              <CheckCircle size={64} color="#22c55e" />
            </div>
            
            <h1>Ödəniş Uğurlu!</h1>
            <p className="success-message">Aktivləşdirmə kodunuz hazırdır</p>
            
            {/* Fırıldaqçılıq Xəbərdarlığı */}
            {showFraudWarning && (
              <div className="fraud-warning">
                <AlertTriangle size={24} color="#f59e0b" />
                <div className="fraud-warning-content">
                  <h4>⚠️ Vacib Xəbərdarlıq</h4>
                  <p>
                    Əgər sizin ödəniş ilə bağlı hər hansısa yanlışlıq (sahte çek, 
                    manipulyasiya edilmiş şəkil və s.) aşkarlanarsa, hesabınız 
                    dərhal bloklanacaq və qanuni tədbirlər görüləcək.
                  </p>
                  <small>Bu əməliyyat loglarda qeydə alınmışdır.</small>
                </div>
              </div>
            )}
            
            <div className="activation-code-container">
              <div className="code-box">
                <code>{activationCode}</code>
                <button 
                  onClick={copyToClipboard}
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  title="Kopyala"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
              <p className="code-instruction">
                Bu kodu kurs səhifəsində "Kodu daxil et" bölməsinə yazın
              </p>
            </div>

            {validationDetails && (
              <div className="validation-summary">
                <p>✅ Validasiya: {validationDetails.percentage}% uyğunluq</p>
                <small>{validationDetails.details.amounts.map(a => a.value + ' AZN').join(', ')}</small>
              </div>
            )}

            <div className="success-actions-final">
              <Link to={`/${selectedCourse}`} className="btn-primary">
                Kursa Keç <ChevronRight size={18} />
              </Link>
              <button onClick={resetForm} className="btn-secondary">
                Yeni Ödəniş
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="payment-footer-simple">
        <p>© 2024 Lumina • Təhlükəsiz ödəniş sistemi</p>
        <div className="security-badges">
          <span><Lock size={14} /> SSL</span>
          <span><CheckCircle size={14} /> OCR Təsdiqi</span>
        </div>
      </footer>
    </div>
  );
};

export default Payment;