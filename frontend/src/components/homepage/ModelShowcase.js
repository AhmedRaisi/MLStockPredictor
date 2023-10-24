import React from 'react';
import { Link } from 'react-router-dom';

function ModelShowcase() {
  return (
    <section className="model-showcase">
      <h1>Explore Our Models</h1>
      <div className="model">
        <h2>LSTM Model</h2>
        <p>Discover the Long Short-Term Memory (LSTM) model, a powerful recurrent neural network designed for time series data like stock prices.</p>
      </div>
      <div className="model">
        <h2>ARIMA Model</h2>
        <p>Learn about the Autoregressive Integrated Moving Average (ARIMA) model, a classic time series forecasting method used for stock prediction.</p>
      </div>
      <div className="model">
        <h2>Prophet Model</h2>
        <p>Explore the Prophet model, a powerful forecasting tool developed by Facebook, designed to capture seasonality and holidays in time series data.</p>
      </div>
      <div className="model">
        <h2>Ensemble Model</h2>
        <p>Dive into the Ensemble model, a combination of multiple predictive models, to enhance prediction accuracy and robustness in stock forecasting.</p>
      </div>
      <div className="get-started">
        <Link to="/modeloverviewpage">
          <button>Learn More</button>
        </Link>
      </div>
    </section>
  );
}

export default ModelShowcase;
