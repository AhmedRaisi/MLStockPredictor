import sys
sys.path.append('/mnt/c/Users/Ahmed/Projects/StockPricePredictor/backend')

import os
import django
import numpy as np
import requests
from datetime import datetime, timedelta
from decimal import Decimal
from tensorflow.keras.models import load_model

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_backend.settings")
django.setup()

from django_backend.models import PredictedStockData

def fetch_historical_data(stock_symbol, num_days=20):
    api_key = '5DJBLCIB2W80QWFW'
    api_url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={stock_symbol}&apikey={api_key}'
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

def prepare_input_data(historical_data):
    close_prices = [item['close_price'] for item in historical_data][-4:]  # Taking the last 4 data points
    return np.array(close_prices).reshape(-1, 1)

def generate_predictions():
    model_path = os.path.join(os.path.dirname(__file__), 'scripts', 'models', 'lstm_model.h5')
    model = load_model(model_path)
    
    try:
        latest_date = PredictedStockData.objects.latest('date').date
    except PredictedStockData.DoesNotExist:
        latest_date = datetime.today().date()

    stock_symbol = 'TSLA'
    historical_data = fetch_historical_data(stock_symbol, num_days=20)

    if not historical_data:
        print("Error: Unable to fetch historical data.")
        return
    
    input_data = prepare_input_data(historical_data)
    
    predicted_price = model.predict(input_data.reshape(1, input_data.shape[0], 1))
    
    new_date = latest_date + timedelta(days=1)
    PredictedStockData.objects.create(
        date=new_date,
        predicted_closing_price=Decimal(str(float(predicted_price[0][0])))
    )

generate_predictions()
