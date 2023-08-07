import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="hero-section">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, please get in touch with us:</p>
        <p>Email: support@predictorapp.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
      {/* You can add a contact form or other contact information here */}
    </div>
  );
};

export default ContactPage;
