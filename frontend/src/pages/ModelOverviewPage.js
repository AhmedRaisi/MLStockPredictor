import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ModelOverviewPage.css';

function ModelOverview() {
  return (
    <section className="model-overview">
      <h1>Model Overview</h1>
      <div className="model">
        <h2>LSTM Model</h2>
        <p>Discover the Long Short-Term Memory (LSTM) model, a powerful recurrent neural network designed for time series data like stock prices.</p>
        <Link to="/models/lstm">Learn More</Link>
      </div>
      <div className="model">
        <h2>ARIMA Model</h2>
        <p>Learn about the Autoregressive Integrated Moving Average (ARIMA) model, a classic time series forecasting method used for stock prediction.</p>
        <Link to="/models/arima">Learn More</Link>
      </div>
      <div className="model">
        <h2>Prophet Model</h2>
        <p>Explore the Prophet model, a powerful forecasting tool developed by Facebook, designed to capture seasonality and holidays in time series data.</p>
        <Link to="/models/prophet">Learn More</Link>
      </div>
      <div className="model">
        <h2>Ensemble Model</h2>
        <p>Dive into the Ensemble model, a combination of multiple predictive models, to enhance prediction accuracy and robustness in stock forecasting.</p>
        <Link to="/models/ensemble">Learn More</Link>
      </div>
      <div className="model">
        <h2>Regression Model</h2>
        <p>Explore the Regression model, a statistical approach to model the relationship between a dependent variable and one or more independent variables.</p>
        <Link to="/models/regression">Learn More</Link>
      </div>
    </section>
  );
}

export default ModelOverview;
