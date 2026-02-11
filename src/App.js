import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Frontend from './pages/Frontend';
import AI from './pages/AI'; 
import LoginSignup from './pages/LoginSignup'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/ai" element={<AI />} />

        {/* BURADA DƏYİŞİKLİK: Hər iki yol eyni komponentə gedir */}
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;