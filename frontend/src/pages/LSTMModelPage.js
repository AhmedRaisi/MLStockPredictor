import React from 'react';
import ModelLayout from '../components/models/modellayout';

const LSTMModelPage = () => {
  const title = "LSTM Model";
  const description = "This page provides information about the LSTM (Long Short-Term Memory) model used in the Predictor Application.";
  const usage = "Provide details on how the LSTM model is used within your application here.";
  const mse = "0.05"; // Example value for Mean Squared Error
  const mape = "1.5"; // Example value for Mean Absolute Percentage Error
  const conclusion = "Conclusion about the model's performance and application.";

  return (
    <ModelLayout
      title={title}
      description={description}
      usage={usage}
      mse={mse}
      mape={mape}
      conclusion={conclusion}
    />
  );
};

export default LSTMModelPage;
