import React from 'react';
import '../styles/Resume.css/';

const Resume = () => {
  return (
    <div className="resumeDiv">
      <h2 className="resumeTitle">Resume</h2>
       {/* Download link */}
       <a href="/src/components/AnthonyL Resume.docx" className="resumeDownload" download>
        Download Resume<br></br><br></br>
      </a>
      <ul>
      <h3 className="resumeInfo">
        <li className="resumeTitle">Education</li>
        <li>
            <span style={{ color: 'red' }}>
            <img src="/assets/rutgers-scarlet-knights-logo.png" alt="Rutgers Logo" className="rutgersLogo"></img>Rutgers University, New Brunswick, NJ
        </span>
            </li>
                <li>Full-Stack Development Bootcamp Dec 2023</li><br></br>

        <li>
        <span style={{ color: 'red' }}>
            <img src="/assets/MSU logo.png" alt="Montclair State Logo" className="msuLogo"></img>
                Montclair State University, Montclair, NJ
        </span>
        </li>
                BS in Environmental Science Jan 2021<br></br><br></br>
        
         <li className="resumeTitle">Experience</li>
            <li>- Entry Level</li><br></br>
         <li className="resumeTitle">Technical Skills</li>
            <li>- NodeJS/ReactJS</li>
            <li>- HTML/CSS/JavaScript</li>
            <li>- MongoDB</li>
            <li>- GraphQL</li>
            <li>- Creating responsive web API's</li>
            <li>- Client-Server Models </li>
            <li>- Agile Development</li>
            <li>- JSON</li>
            <li>- MERN</li>
            <li>- Agile Development</li>
         </h3>
      </ul>

    </div>
  );
};

export default Resume;
