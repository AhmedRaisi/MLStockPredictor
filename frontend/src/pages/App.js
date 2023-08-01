import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import MyComponent from '../components/MyComponent';
import Header from '../components/Header'; // Importing the Header component (adjust the path as needed)

function App() {
  return (
    <div>
      <Header /> 
      <MyComponent />
    </div>
  );
}

export default App;
