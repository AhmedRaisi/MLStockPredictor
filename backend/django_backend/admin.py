from django.contrib import admin
from .models import DailyStockData, PredictedStockData

class DailyStockDataAdmin(admin.ModelAdmin):
    list_display = ['date', 'close_price', 'open_price', 'high_price', 'low_price', 'volume']
    list_per_page = 200  # Change this number to the desired value

admin.site.register(DailyStockData, DailyStockDataAdmin)
admin.site.register(PredictedStockData)
