import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const mockData = [
    { weekday: 'Monday', price: 100 },
    { weekday: 'Tuesday', price: 105 },
    { weekday: 'Wednesday', price: 102 },
    { weekday: 'Thursday', price: 108 },
    { weekday: 'Friday', price: 110 },
]; // This is mock data. Replace this with your actual data.

const Predictions = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Predictions for the Week</h2>
      
      {/* Textual Data */}
      <ul>
        {mockData.map(data => (
          <li key={data.weekday}>
            {data.weekday}: Predicted Price - ${data.price}
          </li>
        ))}
      </ul>

      {/* Chart */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <LineChart width={500} height={300} data={mockData}>
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="weekday" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>

      {/* Disclaimer */}
      <p style={{ marginTop: '20px', color: 'red', fontWeight: 'bold' }}>
        Disclaimer: These predictions are for informational purposes only and are not financial advice. Always conduct your own research before making investment decisions.
      </p>
    </div>
  );
};

export default Predictions;
