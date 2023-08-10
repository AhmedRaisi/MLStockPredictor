from django.db import models

class DailyStockData(models.Model):
    date = models.DateField()
    open_price = models.DecimalField(max_digits=10, decimal_places=2)
    high_price = models.DecimalField(max_digits=10, decimal_places=2)
    low_price = models.DecimalField(max_digits=10, decimal_places=2)
    close_price = models.DecimalField(max_digits=10, decimal_places=2)
    volume = models.BigIntegerField()

    def __str__(self):
        return str(self.date)

class PredictedStockData(models.Model):
    date = models.DateField()
    actual_closing_price = models.DecimalField(max_digits=10, decimal_places=2)
    predicted_closing_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.date)
