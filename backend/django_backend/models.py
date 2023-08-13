from django.db import models
import requests
from datetime import datetime, timedelta

class DailyStockData(models.Model):
    date = models.DateField()
    open_price = models.DecimalField(max_digits=10, decimal_places=2)
    high_price = models.DecimalField(max_digits=10, decimal_places=2)
    low_price = models.DecimalField(max_digits=10, decimal_places=2)
    close_price = models.DecimalField(max_digits=10, decimal_places=2)
    volume = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.date} - {self.close_price}"

    @classmethod
    def fetch_and_update_data(cls):
        api_key = '5DJBLCIB2W80QWFW'  # Replace with your Alpha Vantage API key
        stock_symbol = 'TSLA'  # Replace with your desired stock symbol

        # Calculate the start date (20 years ago from today)
        start_date = datetime.now() - timedelta(days=20 * 365)
        start_date_str = start_date.strftime('%Y-%m-%d')

        api_url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={stock_symbol}&apikey={api_key}&outputsize=full&datatype=json&startdate={start_date_str}'

        response = requests.get(api_url)
        data = response.json()

        if 'Time Series (Daily)' in data:
            time_series = data['Time Series (Daily)']
            for date, values in time_series.items():
                cls.objects.update_or_create(
                    date=datetime.strptime(date, '%Y-%m-%d'),
                    defaults={
                        'open_price': values['1. open'],
                        'high_price': values['2. high'],
                        'low_price': values['3. low'],
                        'close_price': values['4. close'],
                        'volume': values['5. volume']
                    }
                )
            return True
        return False

class PredictedStockData(models.Model):
    date = models.DateField()
    actual_closing_price = models.DecimalField(max_digits=10, decimal_places=2)
    predicted_closing_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.date} - Actual: {self.actual_closing_price}, Predicted: {self.predicted_closing_price}"
