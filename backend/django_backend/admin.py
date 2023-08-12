from django.contrib import admin
from .models import DailyStockData, PredictedStockData

admin.site.register(DailyStockData)
admin.site.register(PredictedStockData)
