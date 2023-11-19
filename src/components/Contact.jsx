import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div>
      <h2>Contact Form</h2>

      <form>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" /><br />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname"/><br />
        <label htmlFor="lname">Email:</label>
        <input type="text" id="email" name="email"/><br />
        <label htmlFor="lname">Message:</label>
        <input type="text" id="message" name="message"/><br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default Contact;
