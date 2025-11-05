// Contact.jsx
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p>
          I'm always open to new opportunities, collaborations, or just a friendly hello!
        </p>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:ant05man@yahoo.com">ant05man@yahoo.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/anthony-l-b767791b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/anthony-l-b767791b7
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/ant05man"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ant05man
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
