import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const mockData = [
    { weekday: 'Monday', price: 100 },
    { weekday: 'Tuesday', price: 105 },
    { weekday: 'Wednesday', price: 102 },
    { weekday: 'Thursday', price: 108 },
    { weekday: 'Friday', price: 110 },
];

const Predictions = () => {
  return (
    <div style={{ 
        textAlign: 'center', 
        padding: '20px',
        backgroundColor: '#1F2833',
        color: '#E1E5EB'
    }}>
      <h2 style={{ color: '#FFFFFF' }}>Predictions for the Week</h2>
      
      {/* Textual Data */}
      <ul>
        {mockData.map(data => (
          <li key={data.weekday} style={{ listStyle: 'none', marginBottom: '10px' }}>
            {data.weekday}: Predicted Closing Price - <span style={{ color: '#66FCF1' }}>${data.price}</span>
          </li>
        ))}
      </ul>

      {/* Chart */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <LineChart width={500} height={300} data={mockData}>
          <Line type="monotone" dataKey="price" stroke="#66FCF1" />
          <CartesianGrid stroke="#2E4159" />
          <XAxis dataKey="weekday" stroke="#E1E5EB" />
          <YAxis stroke="#E1E5EB" />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>

      {/* Disclaimer */}
      <p style={{ 
          marginTop: '20px', 
          color: '#FF5555',
          fontWeight: 'bold'
      }}>
        Disclaimer: These predictions are for informational purposes only and are not financial advice. Always conduct your own research before making investment decisions.
      </p>
    </div>
  );
};

export default Predictions;
