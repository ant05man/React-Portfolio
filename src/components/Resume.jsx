// Resume.jsx
import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1>Anthony Littlejohn</h1>
        <h2>Full-Stack Developer | React & Node.js | MERN Stack</h2>
        <p>
          <a href="mailto:ant05man@yahoo.com">ant05man@yahoo.com.com</a> |  
          <a href="https://www.linkedin.com/in/anthony-l-b767791b7/">LinkedIn</a> | 
          <a href="https://github.com/ant05man">GitHub</a>
        </p>
      </header>

      {/* Education */}
      <section className="resume-section">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Rutgers University, New Brunswick, NJ</strong> – Full-Stack Coding Bootcamp | Dec 2023<br />
            400+ hours of hands-on web development training in MERN stack, React, Node.js, MongoDB, and REST APIs
          </li>
          <li>
            <strong>Montclair State University, Montclair, NJ</strong> – B.S. Environmental Science | Jan 2021
          </li>
        </ul>
      </section>

      {/* Experience / Projects */}
      <section className="resume-section">
        <h3>Experience & Projects</h3>
        <ul>
          <li>
            <strong>Full-Stack Developer – Rutgers Coding Bootcamp</strong> | Jun 2023 – Dec 2023<br />
            - Built 4 full-stack applications using React, Node.js, Express, and MongoDB, including an e-commerce app with user authentication and order history.<br />
            - Developed responsive, mobile-first frontends using HTML, CSS, and JavaScript.<br />
            - Implemented RESTful APIs and connected frontend to backend for dynamic data handling.<br />
            - Collaborated in Agile sprints and maintained code in Git/GitHub repositories.<br />
            <em>Technologies used:</em> MERN stack, JWT, Axios, GraphQL, JSON, Agile methodologies
          </li>
          <li>
            <strong>E-Commerce Shopping Cart App:</strong> Full-stack MERN app with user authentication, cart functionality, and order history. Deployed on Vercel/Render.
          </li>
          <li>
            <strong>Cryptid-World (In Progress):</strong> React-based interactive app exploring cryptids in the US.
          </li>
          <li>
            <strong>To-Do App:</strong> Full CRUD functionality with Node.js, Express, and MongoDB backend.
          </li>
          <li>
            <strong>Workday Scheduler:</strong> Hour-by-hour task management app using jQuery, Bootstrap, and Moment.js with localStorage persistence.
          </li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="resume-section">
        <h3>Technical Skills</h3>
        <ul className="skills-list">
          <li><strong>Languages & Frameworks:</strong> JavaScript (ES6+), HTML5, CSS3, React, Node.js, Express</li>
          <li><strong>Databases:</strong> MongoDB, Mongoose, GraphQL</li>
          <li><strong>Development Tools:</strong> Git/GitHub, Vercel, Render, REST APIs, Agile</li>
          <li><strong>Other:</strong> Client-Server Architecture, Responsive Design, JSON, MERN stack</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
