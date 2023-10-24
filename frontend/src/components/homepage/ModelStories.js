import React from 'react';
import { Link } from 'react-router-dom';

function ModelStories() {
  return (
    <section className="model-stories">
      <h1>Model Stories</h1>
      <div className="story">
        <h2>Jane Doe, Investor</h2>
        <p>"I explored the LSTM model on MLStockPredictors and gained valuable insights into stock price prediction. The model's accurate predictions and visualizations helped me make informed investment decisions."</p>
      </div>
      <div className="story">
        <h2>John Smith, Financial Analyst</h2>
        <p>"Using MLStockPredictors, I learned about the ARIMA model and its effectiveness in forecasting stock prices. This knowledge has significantly improved my ability to analyze market trends."</p>
      </div>
      <div className="story">
        <h2>Sara Lee, Day Trader</h2>
        <p>"MLStockPredictors introduced me to the Prophet model, which has become an essential part of my day trading strategy. Its ability to capture seasonality has boosted my trading performance."</p>
      </div>
      <div className="share-story">
        <h2>Share Your Experience</h2>
        <p>If you have explored our models and would like to share your insights or experiences, we'd love to hear from you!</p>
        <Link to="/Contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </section>
  );
}

export default ModelStories;
