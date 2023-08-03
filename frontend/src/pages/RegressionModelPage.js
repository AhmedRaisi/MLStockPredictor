import React from 'react';
import ModelLayout from '../components/models/modellayout';

const RegressionModelPage = () => {
  const title = "Regression Model";
  const description = (
    <div>
      <p>
        The Regression Model is a type of supervised machine learning model used for predicting continuous numerical values. It is particularly useful for tasks such as predicting house prices, stock prices, or any other quantity that can vary continuously.
      </p>
      <p>
        The goal of the Regression Model is to find the best-fitting line (or curve) that minimizes the difference between the predicted values and the actual values in the training data.
      </p>
    </div>
  );
  const usage = (
    <div>
      <p>
        <strong>How it Works</strong>
      </p>
      <p>
        The Regression Model works by learning the relationship between the input features (independent variables) and the target variable (dependent variable) from the training data. It finds the optimal coefficients for the features to predict the target variable accurately.
      </p>
      <p>
        The model uses a cost function, such as Mean Squared Error (MSE), to measure the difference between the predicted values and the actual values. The goal is to minimize this cost function during training.
      </p>
      <p>
        <strong>Algorithm:</strong>
      </p>
      <ol>
        <li>Collect and preprocess the training data, ensuring that it contains the input features and the corresponding target values.</li>
        <li>Choose a suitable regression algorithm, such as Linear Regression, Polynomial Regression, or Ridge Regression.</li>
        <li>Split the data into training and testing sets for model evaluation.</li>
        <li>Train the Regression Model on the training data using the fit() function.</li>
        <li>Evaluate the model's performance on the testing data using appropriate evaluation metrics, such as Mean Squared Error (MSE) or R-squared.</li>
        <li>Make predictions on new, unseen data using the predict() function.</li>
      </ol>
    </div>
  );
  const performance = process.env.PUBLIC_URL + '/images/logo192.png';
  const mse = "0.05"; // Example value for Mean Squared Error
  const mape = "1.5"; // Example value for Mean Absolute Percentage Error
  const conclusion = (
    <div>
      <p>
        In conclusion, the Regression Model has shown promising results in predicting continuous numerical values and capturing relationships between input features and the target variable. Its simplicity and interpretability make it a popular choice for various regression tasks.
      </p>
      <p>
        The Regression Model is a fundamental component of our Predictor Application, enabling us to provide accurate predictions for our users. As we continue to explore the field of machine learning, we aim to further enhance the Regression Model's performance and apply it to various domains.
      </p>
    </div>
  );

  return (
    <ModelLayout
      title={title}
      description={description}
      usage={usage}
      performance={performance}
      mse={mse}
      mape={mape}
      conclusion={conclusion}
    />
  );
};

export default RegressionModelPage;
