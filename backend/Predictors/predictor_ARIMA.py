import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA

# Step 1: Load the dataset
data_path = "../../db/TSLA.csv"
df = pd.read_csv(data_path, parse_dates=["Date"], index_col="Date")

# Step 2: Explore the data
print(df.head())
plt.figure(figsize=(10, 6))
plt.plot(df.index, df['Close'], label='Closing Price', color='green')
plt.xlabel('Date')
plt.ylabel('Price')
plt.title('TSLA Stock Price')
plt.legend()
plt.show()

# Step 3: ARIMA Model
model = ARIMA(df['Close'], order=(5,1,0))
results = model.fit()

# Step 4: Make predictions for the next 30 days
forecast = results.forecast(steps=30)

# Step 5: Create a date range for the forecast
forecast_dates = pd.date_range(df.index[-1], periods=30, freq=df.index.freq)

# Step 6: Combine original data and forecast data for plotting
combined_df = pd.concat([pd.Series(index=df.index, data=df['Close']), pd.Series(forecast, index=forecast_dates)])

# Step 7: Plot the results
plt.figure(figsize=(10, 6))
plt.plot(combined_df.index, combined_df.values, label='Forecast', color='blue')
plt.scatter(forecast_dates, forecast, label='Forecast', color='red', marker='o')
plt.xlabel('Date')
plt.ylabel('Price')
plt.title('TSLA Stock Price Prediction with ARIMA')
plt.legend()
plt.show()
