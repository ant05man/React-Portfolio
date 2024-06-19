import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="https://www.github.com/ant05man">
                        <img src='/github-mark-black.png' alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/anthony-l-b767791b7/">LinkedIn</a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
