import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sb
 
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from xgboost import XGBClassifier
from sklearn import metrics
 
import warnings
warnings.filterwarnings('ignore')


df = pd.read_csv('TSLA.csv')
df.head()
print(df.shape) #Shape of the Data Set

print(df.describe()) #Describe Data Set

print(df.info())

#Create initial Close graph to understand the closing price each day
plt.figure(figsize=(15,5))
plt.plot(df['Close'])
plt.title('Tesla Close price.', fontsize=15)
plt.ylabel('Price in dollars.')
plt.show()



print(df[df['Close'] == df['Adj Close']].shape) #Check that the close price is the same as the Adj Close

#It is the same so delete redundancy 
df = df.drop(['Adj Close'], axis=1)


#Check for Null values
print(df.isnull().sum()) #None exist

#Graph each feature
features = ['Open', 'High', 'Low', 'Close', 'Volume']
 
plt.subplots(figsize=(20,10))
 
for i, col in enumerate(features):
  plt.subplot(2,3,i+1)
  sb.distplot(df[col])
plt.show()
#We see that the graphs have two peaks except for volume

#create box plot
plt.subplots(figsize=(20,10))
for i, col in enumerate(features):
  plt.subplot(2,3,i+1)
  sb.boxplot(df[col])
plt.show()
#We see the volume only with outliers