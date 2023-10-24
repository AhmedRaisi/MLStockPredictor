import React from 'react';
import ModelLayout from '../../components/models/modellayout';

const EnsembleModelPage = () => {
  const title = "Ensemble Model";
  const description = (
    <div>
      <p>
        The Ensemble model is a powerful technique that combines multiple predictive models to enhance prediction accuracy and robustness in stock forecasting and other time series data analysis tasks.
      </p>
      <p>
        The basic idea behind Ensemble modeling is to take the predictions from several individual models (base models) and combine them to create a single, more accurate prediction. Ensemble models often outperform individual models because they can effectively capture different aspects of the data and reduce the risk of overfitting.
      </p>
    </div>
  );
  const usage = (
    <div>
      <p>
        <strong>How it Works</strong>
      </p>
      <p>
        There are several popular Ensemble techniques, including:
      </p>
      <ol>
        <li><strong>Bagging:</strong> Bagging involves training multiple instances of the same model on different subsets of the training data and then averaging their predictions. The goal is to reduce variance and improve prediction accuracy.</li>
        <li><strong>Boosting:</strong> Boosting focuses on sequentially training multiple weak models, where each new model corrects the errors of the previous ones. It aims to reduce bias and improve overall model performance.</li>
        <li><strong>Stacking:</strong> Stacking combines predictions from multiple models as input to a meta-model. The meta-model learns how to best weigh and combine the predictions from different models to produce the final prediction.</li>
      </ol>
      <p>
        Ensemble models are highly versatile and can be used with a wide range of base models, including Decision Trees, Random Forests, Gradient Boosting Machines, and more. By leveraging the strengths of different models, Ensemble modeling can lead to more reliable and accurate predictions for stock price forecasting.
      </p>
    </div>
  );
  const performance = process.env.PUBLIC_URL + '/images/logo192.png';
  const mse = "0.05"; // Example value for Mean Squared Error
  const mape = "1.5"; // Example value for Mean Absolute Percentage Error
  const conclusion = (
    <div>
      <p>
        In conclusion, the Ensemble model is a powerful technique for improving the accuracy and robustness of stock price predictions. By combining the strengths of multiple base models, Ensemble modeling provides more reliable forecasts and helps reduce the risk of model biases and overfitting.
      </p>
      <p>
        The Ensemble model is an important component of our Predictor Application, enabling us to deliver high-quality predictions to our users. As we continue to refine our machine learning strategies, we look forward to further leveraging the potential of Ensemble modeling to enhance the performance and effectiveness of our forecasting system.
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

export default EnsembleModelPage;
