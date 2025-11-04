import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            href="https://github.com/ant05man"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github-mark-black.png" alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anthony-l-b767791b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
