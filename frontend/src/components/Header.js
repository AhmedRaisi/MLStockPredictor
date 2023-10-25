import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="title-link">
        <h1 className="title">
          <span className="ml">ML</span>
          <span className="stock">Stock</span>
          <span className="predictors">Predictors</span>
        </h1>
      </Link>
      <div className="nav-container">
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/predictions">Predictions</Link>
        </nav>
        <div
          className="models-dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link to="/modeloverviewpage">
            <button className="models-button">
              Models ▼
            </button>
          </Link>
          {showDropdown && (
            <div className="models-list">
              <Link to="/models/regression">Regression Model</Link>
              <Link to="/models/lstm">LSTM Model</Link>
              <Link to="/models/arima">ARIMA Model</Link>
              <Link to="/models/prophet">Prophet Model</Link>
              <Link to="/models/ensemble">Ensemble Model</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
