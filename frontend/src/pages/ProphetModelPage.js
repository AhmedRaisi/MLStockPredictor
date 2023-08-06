import React from 'react';
import ModelLayout from '../components/models/modellayout';

const ProphetModelPage = () => {
  const title = "Prophet Model";
  const description = (
    <div>
      <p>
        The Prophet model is a powerful forecasting tool developed by Facebook. It is specifically designed to capture seasonality and holidays in time series data, making it well-suited for predicting stock prices and other periodic patterns.
      </p>
      <p>
        Prophet uses an additive model to represent time series data, decomposing it into three main components: trend, seasonality, and holidays. By analyzing past patterns, Prophet can make informed predictions for future time steps.
      </p>
    </div>
  );
  const usage = (
    <div>
      <p>
        <strong>How it Works</strong>
      </p>
      <p>
        The Prophet model operates on the following principles:
      </p>
      <ol>
        <li><strong>Trend Modeling:</strong> Prophet captures the overall trend in the data using a flexible and customizable trend model. Users can specify whether the trend should be linear or logistic, or even add custom seasonalities.</li>
        <li><strong>Seasonality Modeling:</strong> Prophet incorporates seasonal patterns by automatically detecting recurring patterns in the data. Users can also add custom seasonalities to improve forecasting performance.</li>
        <li><strong>Holiday Modeling:</strong> Prophet can model irregular events, such as holidays, that may impact the time series data. Users can provide a list of known holidays to improve prediction accuracy.</li>
        <li><strong>Uncertainty Estimation:</strong> Prophet provides uncertainty intervals for each forecast, helping users understand the range of possible outcomes and assess the reliability of predictions.</li>
      </ol>
      <p>
        The Prophet model is known for its ease of use, flexibility, and ability to handle missing data. It has gained popularity for its impressive accuracy in various time series forecasting tasks, including stock price prediction.
      </p>
    </div>
  );
  const performance = process.env.PUBLIC_URL + '/images/logo192.png';
  const mse = "0.05"; // Example value for Mean Squared Error
  const mape = "1.5"; // Example value for Mean Absolute Percentage Error
  const conclusion = (
    <div>
      <p>
        In conclusion, the Prophet model is a valuable tool for time series forecasting, particularly in scenarios where seasonality and holidays play a significant role. Its ability to model complex patterns in the data and provide uncertainty estimates makes it a popular choice for predicting stock prices and other time-dependent metrics.
      </p>
      <p>
        The Prophet model is an essential part of our Predictor Application, enabling us to deliver accurate and reliable predictions to our users. As we continue to advance our machine learning capabilities, we look forward to leveraging the strengths of the Prophet model to further enhance the performance and reliability of our predictions.
      </p>
    </div>
  );

  return (
    <ModelLayout
      title={title}
      description={description}
      usage={usage}
      performance={performance}  // Check that this prop is passed correctly
      mse={mse}
      mape={mape}
      conclusion={conclusion}
    />
  );
};

export default ProphetModelPage;
