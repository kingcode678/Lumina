import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Frontend from './pages/Frontend';
import AI from './pages/AI'; 
import LoginSignup from './pages/LoginSignup'; 
// YENI IMPORT - əgər bu fayl yoxdursa, yaradın!
import Payment from './pages/Payment'; 
// YENI: Forum səhifəsi import
import Form from './pages/Form';

function App() {
  return (
    <Router>
      <Routes>
        {/* Əsas səhifə */}
        <Route path="/" element={<Home />} />
        
        {/* Kurs səhifələri */}
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/ai" element={<AI />} />
        
        {/* ÖDƏNIŞ SƏHIFƏSI */}
        <Route path="/payment" element={<Payment />} />
        
        {/* YENI: FORUM SƏHIFƏSI */}
        <Route path="/forum" element={<Form />} />
        
        {/* Auth səhifələri */}
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;