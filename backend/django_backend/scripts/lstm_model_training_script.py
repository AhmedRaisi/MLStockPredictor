import os
import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler

csv_file_path = 'TSLA.csv'
data = pd.read_csv(csv_file_path)

# Prepare input features and target values
X = data[['Open', 'High', 'Low', 'Volume']].values
y = data['Close'].values

# Normalize the data
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
y_scaled = scaler.fit_transform(y.reshape(-1, 1))

# Reshape data to create sequences of 20 days for LSTM input
def create_dataset(X, y, time_steps=20):
    Xs, ys = [], []
    for i in range(len(X) - time_steps):
        v = X[i:(i + time_steps)]
        Xs.append(v)
        ys.append(y[i + time_steps])
    return np.array(Xs), np.array(ys)

time_steps = 20
X_seq, y_seq = create_dataset(X_scaled, y_scaled, time_steps)

# Split data into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(X_seq, y_seq, test_size=0.2, shuffle=False)

# Build the LSTM model
model = Sequential([
    LSTM(50, activation='relu', input_shape=(time_steps, X_train.shape[2])),
    Dense(1)
])

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_val, y_val))

# Save the model
model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'models', 'lstm_model.h5')
model.save(model_path)
