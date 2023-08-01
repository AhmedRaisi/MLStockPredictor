import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Predictor Application</h1>
      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;