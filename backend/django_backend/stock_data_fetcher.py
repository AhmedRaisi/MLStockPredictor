import requests
import json
import numpy as np
from datetime import datetime, timedelta
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import TimeseriesGenerator

from django.db import models
from .models import PredictedStockData

class StockPredictor:

    model_path = os.path.join(os.path.dirname(__file__), 'models', 'lstm_model.h5')

    def __init__(self, stock_symbol):
        self.stock_symbol = stock_symbol
        self.api_key = '5DJBLCIB2W80QWFW'
        self.model = load_model(model_path)  # Load your trained LSTM model

    def fetch_historical_data(self, num_days=20):
        api_url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={self.stock_symbol}&apikey={self.api_key}'
        response = requests.get(api_url)
        data = response.json()

        if 'Time Series (Daily)' in data:
            time_series = data['Time Series (Daily)']
            historical_data = []
            for date, values in time_series.items():
                historical_data.append({
                    'date': date,
                    'close_price': float(values['4. close'])
                })
                if len(historical_data) == num_days:
                    break
            return historical_data
        return []

    def prepare_data(self, historical_data):
        close_prices = [item['close_price'] for item in historical_data]
        return np.array(close_prices).reshape(-1, 1)

    def generate_predictions(self, data, num_predictions=1):
        predictions = []
        for _ in range(num_predictions):
            prediction = self.model.predict(data.reshape(1, data.shape[0], 1))
            predictions.append(prediction[0, 0])
            data = np.roll(data, -1)
            data[-1] = prediction
        return predictions

    def save_predictions(self, predictions):
        latest_date = datetime.strptime(historical_data[-1]['date'], '%Y-%m-%d')
        next_day = latest_date + timedelta(days=1)
        for prediction in predictions:
            PredictedStockData.objects.create(
                date=next_day,
                actual_closing_price=0,  # Set the actual closing price if available
                predicted_closing_price=prediction
            )
            next_day += timedelta(days=1)

if __name__ == '__main__':
    stock_symbol = 'TSLA'  # Replace with your desired stock symbol
    stock_predictor = StockPredictor(stock_symbol)
    
    historical_data = stock_predictor.fetch_historical_data(num_days=20)
    if historical_data:
        prepared_data = stock_predictor.prepare_data(historical_data)
        predictions = stock_predictor.generate_predictions(prepared_data, num_predictions=5)
        stock_predictor.save_predictions(predictions)
