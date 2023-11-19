import React from 'react';
import '../styles/Resume.css/';

const Resume = () => {
  return (
    <div>
      <h2 className="resumeTitle">Anthony Littlejohn's Resume</h2>
      {/* Resume */}
      <p>Education, Experience, Skills</p>

      {/* Download link */}
      <a href="/path-to-your-resume.pdf" download>
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
