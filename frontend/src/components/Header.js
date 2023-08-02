import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <h1 className="title">Model Market</h1>
      <div className="nav-container">
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="models-dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          <button className="models-button" onClick={() => setShowDropdown(!showDropdown)}>Models ▼</button>
          {showDropdown && (
            <div className="models-list">
              <Link to="/models/regression">Regression Model</Link>
              <Link to="/models/lstm">LSTM Model</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;