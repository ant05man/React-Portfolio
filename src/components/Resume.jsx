// Resume.js
import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resumeDiv">
      <h2 className="resumeTitle">Resume</h2>
      {/* Download link */}
      <a href="/src/components/AnthonyL Resume.docx" className="resumeDownload" download>
        Download Resume<br /><br />
      </a>
       <ul>
        < li className="resumeListItem resumeTitle">Education</li>
        <li className="resumeListItem">
          <span>
            <img src="/rutgers-scarlet-knights-logo.png" alt="Rutgers Logo" className="rutgersLogo" />
            Rutgers University, New Brunswick, NJ
          </span>
        </li>
        <li className="resumeListItem">Full-Stack Coding Bootcamp Certification Dec 2023</li><br />

        <li className="resumeListItem">
          <span>
            <img src="/MSU logo.png" alt="Montclair State Logo" className="msuLogo" />
            Montclair State University, Montclair, NJ
          </span>
        </li>
        <li className="resumeListItem">BS in Environmental Science Jan 2021</li><br /><br />

        <li className="resumeListItem resumeTitle">Experience</li>
        <li className="resumeListItem">- 6-month Intensive Coding Bootcamp</li><br />
        
        <li className="resumeListItem resumeTitle">Technical Skills</li>
        <li className="resumeListItem resumeInfo">- NodeJS/ReactJS</li>
        <li className="resumeListItem resumeInfo">- HTML/CSS/JavaScript</li>
        <li className="resumeListItem resumeInfo">- MongoDB</li>
        <li className="resumeListItem resumeInfo">- GraphQL</li>
        <li className="resumeListItem resumeInfo">- Creating responsive web API's</li>
        <li className="resumeListItem resumeInfo">- Client-Server Models </li>
        <li className="resumeListItem resumeInfo">- Agile Development</li>
        <li className="resumeListItem resumeInfo">- JSON</li>
        <li className="resumeListItem resumeInfo">- MERN</li>
      </ul>
    </div>
  );
};

export default Resume;
