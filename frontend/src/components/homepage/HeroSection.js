import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Welcome to MLStockPredictors</h1>
      <p>Your go-to place for top-quality machine learning stock prediction models</p>
      <Link to="/modeloverviewpage">
          <button className="primary-btn">Explore Models</button>
      </Link>
      <Link to="/predictions">
          <button className="secondary-btn">Explore Predictions</button>
      </Link>
    </section>
  );
}

export default HeroSection;
