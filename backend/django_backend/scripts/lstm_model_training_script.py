import os
import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler

# Load your historical stock data from TSLA.csv (replace this with your data loading code)
csv_file_path = 'TSLA.csv'  # Update this with the correct path
data = pd.read_csv(csv_file_path)

# Prepare input features and target values
X = data[['Open', 'High', 'Low', 'Volume']].values
y = data['Close'].values

# Normalize the data
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
y_scaled = scaler.fit_transform(y.reshape(-1, 1))

# Split data into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(X_scaled, y_scaled, test_size=0.2, shuffle=False)

# Reshape X_train to have three dimensions (num_samples, num_time_steps, num_features)
X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)  # Adding the third dimension

# Build the LSTM model
model = Sequential([
    LSTM(50, activation='relu', input_shape=(X_train.shape[1], X_train.shape[2])),
    Dense(1)
])
# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_val, y_val))

# Save the model
model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'models', 'lstm_model.h5')
model.save(model_path)
