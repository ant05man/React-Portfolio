import React from 'react';
import '../styles/AboutMe.css';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'CSS',
  'HTML',
  'MongoDB'
];

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="overlay"></div>

      <div className="aboutme-content">
        <div className="aboutme-text">
          <h2>Hello, I’m</h2>
          <h1 className="nameText">Anthony Littlejohn</h1>
          <p className="bodyText">
          Hey! I’m Anthony Littlejohn, a full-stack software developer based in New Jersey. I build modern, responsive, and user-friendly web applications using React, Node.js, Express, and MongoDB.

I discovered my passion for coding in high school, and after graduating from the Rutgers Full-Stack Coding Bootcamp, I’ve been focused on turning ideas into smooth, functional applications. I love learning new technologies, solving problems creatively, and building tools that make life easier and more engaging.
          </p>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
