import React from 'react';
import ModelLayout from '../components/models/modellayout';

const ARIMAModelPage = () => {
  const title = "ARIMA Model";
  const description = (
    <div>
      <p>
        The Autoregressive Integrated Moving Average (ARIMA) model is a classic time series forecasting method used for stock prediction. ARIMA combines autoregression, differencing, and moving averages to make predictions based on historical data patterns.
      </p>
      <p>
        ARIMA models are well-suited for data with trend and seasonality and have been widely used in financial forecasting due to their simplicity and effectiveness.
      </p>
    </div>
  );
  const usage = (
    <div>
      <p>
        <strong>How it Works</strong>
      </p>
      <p>
        The ARIMA model works by fitting a linear regression model to a time series after differencing the data to make it stationary. The three main components of ARIMA are:
      </p>
      <ol>
        <li><strong>Autoregression (AR):</strong> The AR component predicts the future value of a series based on its past values. It involves using lagged observations of the target variable to predict its current value.</li>
        <li><strong>Differencing (I):</strong> The I component makes the data stationary by computing differences between consecutive observations. This step helps remove trend and seasonality from the series.</li>
        <li><strong>Moving Average (MA):</strong> The MA component represents the error of the model as a linear combination of past error terms. It captures the correlation between the observations and the residuals.</li>
      </ol>
      <p>
        The ARIMA model requires three parameters: p (order of autoregression), d (degree of differencing), and q (order of moving average). These parameters are chosen based on the properties of the time series data and can be determined using techniques like autocorrelation and partial autocorrelation plots.
      </p>
      <p>
        The ARIMA model provides forecasts that take into account both short-term and long-term trends, making it useful for predicting stock prices and other financial time series.
      </p>
    </div>
  );
  const performance = process.env.PUBLIC_URL + '/images/logo192.png';
  const mse = "0.05"; // Example value for Mean Squared Error
  const mape = "1.5"; // Example value for Mean Absolute Percentage Error
  const conclusion = (
    <div>
      <p>
        In conclusion, the ARIMA model is a powerful and widely used tool for time series forecasting, especially in financial markets. Its ability to handle trend and seasonality in data makes it a valuable asset for predicting stock prices and other financial metrics. However, like any model, the accuracy of ARIMA predictions depends on the quality of historical data and the appropriate selection of model parameters.
      </p>
      <p>
        The ARIMA model is an important component of our Predictor Application, providing reliable and informative predictions for our users. As we continue to develop and refine our machine learning models, we aim to leverage the strengths of ARIMA and other advanced techniques to enhance the accuracy and applicability of our predictions.
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

export default ARIMAModelPage;
