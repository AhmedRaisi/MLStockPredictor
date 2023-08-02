import React from 'react';

function SuccessStories() {
  return (
    <section className="success-stories">
      <h1>Success Stories</h1>
      <div className="story">
        <h2>Jane Doe, Investor</h2>
        <p>"MLStockPredictors helped me make smarter investment decisions. The predictions were incredibly accurate, and I was able to grow my portfolio by 25% in just three months!"</p>
      </div>
      <div className="story">
        <h2>John Smith, Financial Analyst</h2>
        <p>"I've been using MLStockPredictors for my clients, and they are thrilled with the results. The models take the guesswork out of trading, making my job easier and my clients happier."</p>
      </div>
      <div className="story">
        <h2>Sara Lee, Day Trader</h2>
        <p>"As a day trader, I need accurate and fast predictions. MLStockPredictors provides just that. It's become an essential tool in my trading toolkit."</p>
      </div>
      <div className="share-story">
        <h2>Share Your Story</h2>
        <p>If you have a success story you'd like to share, we'd love to hear from you!</p>
        <button>Contact Us</button>
      </div>
    </section>
  );
}

export default SuccessStories;