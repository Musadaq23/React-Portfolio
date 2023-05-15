import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!email) {
      setErrorMessage('Please enter your email.');
      return;
    }

    if (!message) {
      setErrorMessage('Please enter your message.');
      return;
    }

    alert('Your message has been sent!');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={name} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={email} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" rows="5" value={message} onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>

      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;