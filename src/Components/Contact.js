import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    // You can access the form data using the state variables (name, email, message)
    // Send the data to your server or perform any desired actions
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps?q=37.7749,-122.4194&z=14&output=embed"
        ></iframe>
      </div>
      <div className="address-box">
        <h2>Address: King Khalid Street</h2>
        <p>Dammam, Saudi Arabia</p>
        <h2>Phone:</h2>
        <p>123-456-7890</p>
        <h2>Email:</h2>
        <p>info@example.com</p>
        <div className="form-container">
          <h2>Contact Form:</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Message:
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  
  );
};

export default Contact;
