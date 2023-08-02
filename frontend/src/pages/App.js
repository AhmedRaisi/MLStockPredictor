import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import RegressionModelPage from './RegressionModelPage';
import LSTMModelPage from './LSTMModelPage';

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/models/regression" element={<RegressionModelPage />} />
          <Route path="/models/lstm" element={<LSTMModelPage />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
