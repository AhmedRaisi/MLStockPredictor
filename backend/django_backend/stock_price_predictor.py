import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")  # Replace with your actual project name
django.setup()

from tensorflow.keras.models import load_model
from models import PredictedStockData
from django.db import models
import requests
from datetime import datetime, timedelta

def generate_predictions():
    model_path = os.path.join(os.path.dirname(__file__), 'models', 'lstm_model.h5')
    model = load_model(model_path)
    
    # Get the latest date in the database
    latest_date = PredictedStockData.objects.latest('date').date
    
    # Generate a new date for prediction (e.g., the next day)
    new_date = latest_date + timedelta(days=1)
    
    # Use your data preparation code here to get the input data
    # input_data = prepare_input_data()
    
    # Generate the prediction
    predicted_price = model.predict(input_data)
    
    # Save the prediction to the database
    PredictedStockData.objects.create(
        date=new_date,
        predicted_closing_price=predicted_price[0][0]
    )

generate_predictions()
