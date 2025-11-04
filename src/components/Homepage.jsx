import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="overlay"></div>
      <header className="homepage-content">
        <h1>
          Hey, I’m <span className="highlight">Anthony</span>
        </h1>
        <h2>Full-Stack Software Developer</h2>
        <p>
          I build responsive, user-friendly web applications using React, Node.js, Express, and MongoDB. I turn ideas into smooth, functional designs that clients and users love.
        </p>

        <div className="homepage-buttons">
          <Link to="/projects" className="btn primary-btn">View My Work</Link>
          <Link to="/contact" className="btn secondary-btn">Contact Me</Link>
        </div>

        <div className="tech-stack">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>CSS / Tailwind</span>
        </div>
      </header>
    </div>
  );
}

export default Homepage;
