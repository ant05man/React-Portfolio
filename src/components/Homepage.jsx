import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="logo-badge">AL</div>
      <div className="overlay"></div>
      <header className="homepage-content">
        <h1>
          Hey, I’m <span className="highlight">Anthony</span>
        </h1>
        <h2>Full-Stack Software Developer</h2>
        <p>
          I build modern, responsive, and user-friendly web applications using
          <strong> React, Node.js, Express,</strong> and <strong>MongoDB.</strong>
          I love turning ideas into smooth, functional designs.
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
          <span>Tailwind / CSS</span>
        </div>
      </header>
    </div>
  );
}

export default Homepage;
