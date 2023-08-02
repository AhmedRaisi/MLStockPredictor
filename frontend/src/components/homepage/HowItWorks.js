import React from 'react';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h1>How It Works</h1>
      <div className="step">
        <h2>Step 1: Choose a Model</h2>
        <p>Select a stock prediction model from our curated collection of machine learning models tailored for different stocks and time frames.</p>
      </div>
      <div className="step">
        <h2>Step 2: Enter Your Data</h2>
        <p>Input the necessary stock data or connect your trading account to fetch the data automatically.</p>
      </div>
      <div className="step">
        <h2>Step 3: Analyze Predictions</h2>
        <p>Our algorithms will predict future stock prices based on historical data. Analyze these predictions to make informed trading decisions.</p>
      </div>
      <div className="step">
        <h2>Step 4: Make Informed Decisions</h2>
        <p>With insights gained from our predictive models, you can make trading decisions with confidence, knowing that you have the power of machine learning on your side.</p>
      </div>
      <div className="get-started">
        <button>Get Started Now</button>
      </div>
    </section>
  );
}

export default HowItWorks;
