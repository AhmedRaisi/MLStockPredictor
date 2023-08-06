import React from 'react';
import './Footer.css'; // If you want to include specific styles

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MLStockPredictors</p>
      <p><a href="/privacy">Privacy Policy</a> | <a href="/contact">Contact Us</a></p>
    </footer>
  );
}

export default Footer;
