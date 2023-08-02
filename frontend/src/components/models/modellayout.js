import React from 'react';
import './modellayout.css';

const ModelLayout = ({ title, description, usage, imageSrc, mse, mape, conclusion }) => {
  return (
    <div className="model-layout">
      <h1>{title}</h1>
      <section className="description">
        <h2>Description of the Model</h2>
        <p>{description}</p>
      </section>
      <section className="usage">
        <h2>How It Is Used</h2>
        <p>{usage}</p>
      </section>
      <section className="performance">
        <h2>Performance Graph</h2>
        <img src={imageSrc} alt="Performance Graph" />
      </section>
      <section className="errors">
        <h2>Error Metrics</h2>
        <p>Mean Squared Error: {mse}</p>
        <p>Mean Absolute Percentage Error: {mape}%</p>
      </section>
      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>{conclusion}</p>
      </section>
    </div>
  );
};

export default ModelLayout;
