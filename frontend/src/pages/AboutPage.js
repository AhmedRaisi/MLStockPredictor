import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>About Us</h1>
        <p>We are dedicated to providing the best stock price predictions using cutting-edge technology and algorithms. Our mission is to empower investors with accurate information.</p>
      </section>
      <section className="features-overview">
        <h2>Our Features</h2>
        <ul>
          <li>Advanced Machine Learning Models: We use state-of-the-art machine learning algorithms, including LSTM, ARIMA, Prophet, and Ensemble models, to make accurate predictions.</li>
          <li>Historical Data Analysis: Our models are trained on extensive historical stock price data, allowing us to identify patterns and trends.</li>
          <li>Real-Time Predictions: We provide real-time predictions to help investors stay ahead of market fluctuations.</li>
          <li>User-Friendly Interface: Our platform offers an intuitive and user-friendly interface, making it easy for investors of all levels to access and interpret predictions.</li>
        </ul>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Our stock price prediction process involves the following steps:</p>
        <ol>
          <li>Data Collection: We gather historical stock price data from reliable sources.</li>
          <li>Data Preprocessing: The data is cleaned, normalized, and split into training and testing sets.</li>
          <li>Model Training: We train our machine learning models on the training data to learn patterns and relationships.</li>
          <li>Prediction Generation: Using the trained models, we make predictions on the testing data.</li>
          <li>Evaluation: The predictions are evaluated using various metrics like Mean Squared Error (MSE) and Mean Absolute Percentage Error (MAPE).</li>
          <li>Real-Time Predictions: Our models can also generate real-time predictions for live stock data.</li>
        </ol>
      </section>
      <section className="about-me">
        <h2>About Me</h2>
        <p>👋 Hello! I'm Ahmed, a dedicated and motivated Computer Science professional with a passion for full-stack development and machine learning. Throughout my career, I have honed my skills in problem-solving, data analysis, and technical troubleshooting. I'm currently looking for software engineering opportunities where I can leverage my expertise in both front-end and back-end development to build innovative applications.</p>
        <p>💼 I have gained valuable experience in IT operations and customer service, making proactive improvements and managing hardware and software inventory. Working as part of a dynamic team, I have contributed to the seamless operation of large-scale IT infrastructure, always with a focus on enhancing user experience and optimizing efficiency.</p>
        <p>💡 I am driven to apply my passion for machine learning to real-world applications and thrive in the role of a machine learning engineer. My skill set includes proficiency in software programs such as TeamDynamix, Active Directory, Group Policy Management, Config Manager Console, MATLAB, and Git. Additionally, I possess a strong command of various computer languages, including Java, Python, YAML, C++, C, OCaml, HTML, CSS, JavaScript, XML, Node.js, and MySQL.</p>
        {/* LinkedIn and GitHub Buttons */}
        <div className="contact-buttons">
          <a href="https://www.linkedin.com/in/ahmedalraisi7/" target="_blank" rel="noopener noreferrer">
            <img src={require("../images/linkedin-icon.png")} alt="LinkedIn" />
          </a>
          <a href="https://github.com/AhmedRaisi" target="_blank" rel="noopener noreferrer">
            <img src={require("../images/github-icon.png")} alt="GitHub" />
          </a>
        </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default AboutPage;