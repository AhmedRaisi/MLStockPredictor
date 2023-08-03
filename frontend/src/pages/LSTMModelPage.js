import React from 'react';
import ModelLayout from '../components/models/modellayout';

const LSTMModelPage = () => {
  const title = "LSTM Model";
  const description = (
    <div>
      <p>
        The Long Short-Term Memory (LSTM) model is a type of recurrent neural network (RNN) that is particularly well-suited for time series data, such as stock price prediction. LSTM was introduced to overcome the limitations of traditional RNNs, which struggle to capture long-term dependencies in sequential data.
      </p>
      <p>
        LSTM networks have an architecture with specialized memory cells that allow them to remember information over long periods, making them effective for tasks involving sequences with time dependencies.
      </p>
    </div>
  );
  const usage = (
    <div>
      <p>
        <strong>How it Works</strong>
      </p>
      <p>
        The LSTM model works by utilizing a combination of memory cells and gates to process sequential input data. Each memory cell in an LSTM network has three main components: an input gate, a forget gate, and an output gate.
      </p>
      <p>
        <strong>Input Gate:</strong> The input gate determines how much of the new input should be stored in the memory cell. It takes the current input and the previous output (hidden state) as inputs and outputs a value between 0 and 1 for each element of the memory cell.
      </p>
      <p>
        <strong>Forget Gate:</strong> The forget gate decides how much of the previous memory cell state should be forgotten. It takes the current input and the previous output as inputs and outputs a value between 0 and 1 for each element of the memory cell.
      </p>
      <p>
        <strong>Output Gate:</strong> The output gate controls how much of the memory cell state should be exposed as the output. It takes the current input and the previous output as inputs and outputs a value between 0 and 1 for each element of the memory cell.
      </p>
      <p>
        The combination of these gates allows the LSTM model to selectively retain or forget information at each time step, enabling it to remember important patterns in the data over longer sequences.
      </p>
      <p>
        <strong>Algorithm:</strong>
      </p>
      <ol>
        <li>Initialize the LSTM model with the desired number of LSTM layers and units in each layer.</li>
        <li>Preprocess the input time series data and normalize it to a suitable range using MinMaxScaler.</li>
        <li>Create sequences of data with a fixed number of time steps and corresponding target values.</li>
        <li>Split the data into training and testing sets.</li>
        <li>Build the LSTM model architecture, including input layers, LSTM layers, and output layers.</li>
        <li>Compile the model with an appropriate optimizer and loss function, such as Mean Squared Error (MSE) for regression tasks.</li>
        <li>Train the LSTM model on the training data using the fit() function.</li>
        <li>Evaluate the model's performance on the testing data using the evaluate() function.</li>
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
        In conclusion, the LSTM model has shown promising results in predicting stock prices and capturing time-dependent patterns. Its ability to handle long-term dependencies and adapt to changing market conditions makes it a valuable tool in financial forecasting. However, as with any machine learning model, careful evaluation, hyperparameter tuning, and validation are essential to ensure its optimal performance.
      </p>
      <p>
        The LSTM model is a significant component of our Predictor Application, enabling us to provide accurate and insightful predictions for our users. As we continue to explore the field of machine learning and deep learning, we aim to further enhance the LSTM model's performance and expand its application to other domains.
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

export default LSTMModelPage;
