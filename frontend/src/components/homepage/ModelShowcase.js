import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'January', value: 12 },
  { name: 'February', value: 19 },
  { name: 'March', value: 3 },
  { name: 'April', value: 5 },
  { name: 'May', value: 2 },
];

function ModelShowcase() {
  return (
    <section className="model-showcase">
      <h2>Model Showcase</h2>
      <p>Explore the predictive capabilities of our ML models</p>
      <div className="chart-container">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    </section>
  );
}

export default ModelShowcase;
