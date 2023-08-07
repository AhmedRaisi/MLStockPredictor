import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error

# Step 1: Load the data
df = pd.read_csv('../../db/TSLA.csv', parse_dates=['Date'], index_col='Date')

# Step 2: Data Splitting
train_size = int(0.8 * len(df))
train_data = df.iloc[:train_size]
test_data = df.iloc[train_size:]

# Step 3: Model Fitting
model = ARIMA(train_data['Close'], order=(5, 1, 0))
results = model.fit()

# Step 4: Make predictions for the test set
forecast = results.forecast(steps=len(test_data))

# Step 5: Calculate MSE
mse = mean_squared_error(test_data['Close'], forecast)
print("Mean Squared Error (MSE):", mse)

# Step 6: Create a date range for the forecast
forecast_dates = pd.date_range(test_data.index[0], periods=len(test_data), freq=df.index.freq)

# Step 7: Plot the actual test data and forecasted values
plt.figure(figsize=(10, 6))
plt.plot(test_data.index, test_data['Close'], label='Test Data', color='green')
plt.plot(forecast_dates, forecast, label='Forecast', color='red')
plt.xlabel('Date')
plt.ylabel('Stock Price')
plt.title('ARIMA Stock Price Prediction')
plt.legend()
plt.show()
