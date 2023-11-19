import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [showRequiredPrompt, setShowRequiredPrompt] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.elements.fname.value;
    const lastName = event.target.elements.lname.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    if (!firstName || !lastName || !email || !message) {
      // If any required field is empty, show the required prompt
      setShowRequiredPrompt(true);
    } else if (!isValidEmail(email)) {
      // If email is not valid, show the email prompt
      setShowEmailPrompt(true);
    } else {
      // Perform form submission logic here (e.g., send data to the server)
      console.log('Form submitted successfully!');
    }
  };

  const handleClosePrompt = () => {
    // Close all prompts when the user clicks on them or performs any other action
    setShowRequiredPrompt(false);
    setShowEmailPrompt(false);
  };

  const isValidEmail = (value) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="contactDiv">
      <h2 className="contactTitle">Contact Form</h2>

      {showRequiredPrompt && (
        <div className="prompt">
          <p>Please fill in all required fields.</p>
          <button onClick={handleClosePrompt}>OK</button>
        </div>
      )}

      {showEmailPrompt && (
        <div className="prompt">
          <p>Please enter a valid email address.</p>
          <button onClick={handleClosePrompt}>OK</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" required /><br />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" required /><br />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" required /><br />
        <label htmlFor="message">Message:</label>
        <input type="text" id="message" name="message" required /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
