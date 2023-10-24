#Predictor using Long Short Term Memory

import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
import numpy as np
import matplotlib.pyplot as plt

# Read the CSV file
<<<<<<<< HEAD:backend/Predictors/predictor_lstm.py
file_path = '/mnt/c/Users/Ahmed/Projects/StockPricePredictor/db/TSLA.csv'
========
file_path = '../../db/TSLA.csv'
>>>>>>>> 2dd44c98ebd8eb58bbef88f0aad15820c8191a52:predictors/predictor_lstm.py
df = pd.read_csv(file_path)

# Convert the 'Date' column to datetime
df['Date'] = pd.to_datetime(df['Date'])

# Set 'Date' as the index
df.set_index('Date', inplace=True)

# Choose the 'Close' column as the target
data = df['Close'].values.reshape(-1, 1)

# Normalize the data
scaler = MinMaxScaler()
data_normalized = scaler.fit_transform(data)

# Create sequences
time_steps = 10
X, y = [], []
for i in range(len(data_normalized) - time_steps):
    X.append(data_normalized[i:(i + time_steps)])
    y.append(data_normalized[i + time_steps])
X = np.array(X)
y = np.array(y)

#Split the Data
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
y_train, y_test = y[:train_size], y[train_size:]

#Built LSTM Model
model = Sequential()
model.add(LSTM(50, input_shape=(time_steps, 1), return_sequences=True))
model.add(LSTM(50))
model.add(Dense(1))
model.compile(optimizer='adam', loss='mse')

#Train the model
model.fit(X_train, y_train, epochs=50, batch_size=64, validation_split=0.1)

#Evaluate the Model
y_pred = model.predict(X_test)
y_pred_transformed = scaler.inverse_transform(y_pred.reshape(-1, 1))
y_test_transformed = scaler.inverse_transform(y_test.reshape(-1, 1))
mse = mean_squared_error(y_test_transformed, y_pred_transformed)
print(f'Mean Squared Error: {mse}')

#Plot Results
plt.plot(y_test_transformed, label="Actual")
plt.plot(y_pred_transformed, label="Predicted")
plt.legend()
plt.show()