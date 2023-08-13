import requests
import json
import schedule
import time

API_KEY = '5DJBLCIB2W80QWFW'
SYMBOL = 'TSLA'  # Replace with the stock symbol you want to fetch

def fetch_stock_data():
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={SYMBOL}&apikey={API_KEY}'
    response = requests.get(url)
    data = response.json()

    daily_data = data['Time Series (Daily)']
    for date, values in daily_data.items():
        date_obj = date
        open_price = values['1. open']
        high_price = values['2. high']
        low_price = values['3. low']
        close_price = values['4. close']
        volume = values['5. volume']

        # Update your database here with the fetched data
        # You can use the Django model to create new entries

# Schedule the function to run daily
schedule.every().day.at('15:30').do(fetch_stock_data)  # Adjust the time as needed

while True:
    schedule.run_pending()
    time.sleep(1)
