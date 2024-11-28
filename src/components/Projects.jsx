import React from 'react';
import '../styles/Projects.css';
import '../App.css';

const projects = [
  {
    title: 'To-Do App(Works Locally)',
    description: 'Developed a full-stack task management application that allows users to create, edit, mark as complete, and delete tasks. The application features a responsive and user-friendly interface built with React and CSS, and a robust backend powered by Node.js, Express, and MongoDB.',
    link: 'https://github.com/ant05man/todo-app',
    image: '/Screenshot(64).png',
    technologies: [
      'React', 'HTML', 'CSS', 'JavaScript',
      'Node.js', 'Express', 'MongoDB', 'Mongoose',
      'RESTful APIs', 'Axios',
      'Vercel', 'Git/GitHub for version control'
    ],
    keyContributions: `
      - Designed and developed an intuitive and visually appealing user interface using React, enhancing usability and responsiveness for seamless task management.
      - Implemented backend functionality with Node.js and Express, creating RESTful APIs to handle CRUD operations for tasks efficiently.
      - Utilized MongoDB and Mongoose for secure and scalable data storage, implementing schema validation for data consistency.
      - Deployed the application to Vercel, configuring environment variables and managing deployment for high availability.
    `
  },
  
  {
    title: 'Cryptid-World (Still In Development)',
    description: 'Embark on an adventure into the unknown with Cryptid-World! Explore mysterious creatures and hidden secrets in this immersive experience. (Still in Development)',
    link: 'https://cryptid-world.vercel.app/',
    image: '/Cryptid-World Screenshot.png',
    technologies: [
      'React', 'HTML', 'CSS', 'JavaScript',
      'Node.js', 'Express', 'MongoDB', 'Mongoose',
      'JSON Web Tokens (JWT)', 'bcrypt',
      'Vercel', 'Git/GitHub for version control'
    ],
    keyContributions: `
      Developed an immersive web application to explore mysterious creatures and hidden secrets across various locations.
      Utilized React for frontend development, creating a dynamic and engaging user interface.
      Managed and stored cryptid-related data using MongoDB and Mongoose, implementing efficient data handling and retrieval.
      Deployed the application using Vercel, ensuring smooth deployment processes and maintaining high availability.
    `
  },
  {
    title: 'Reel-Delights',
    description: 'Indulge in a cinematic journey with Reel-Delights! Invite your friends to watch some of your favorite movies.',
    link: 'https://reel-delights.onrender.com/',
    image: '/Screenshot (51).png',
    technologies: [
      'React', 'HTML', 'CSS', 'JavaScript',
      'Render'
    ],
    keyContributions: `
      Developed a movie recommendation web application using React, HTML, CSS, and JavaScript.
      Created an intuitive and responsive user interface for seamless navigation and interaction.
      Deployed the application using Render, ensuring high availability and performance.
    `
  },
  {
    title: 'Workday Scheduler',
    description: 'A simple calendar app for scheduling your work day. The Workday Scheduler helps users manage their daily tasks with a clear, hour-by-hour interface, allowing them to keep track of their schedule easily. Built using jQuery and Bootstrap for a responsive and functional design.',
    link: 'https://ant05man.github.io/Workday-scheduler/',
    image: '/Screenshot (42).png',
    technologies: [
      'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Moment.js'
    ],
    keyContributions: `
      Developed a dynamic, user-friendly scheduling interface using jQuery and Bootstrap, providing an intuitive hour-by-hour task management system.
      Implemented localStorage functionality to persist user data, ensuring tasks are saved even after the page is refreshed.
      Utilized Moment.js for real-time date and time functionality, dynamically updating the UI based on the current hour.
      Created responsive layouts to ensure compatibility across various devices and screen sizes.
    `
  }
];

function Projects() {
  return (
    <section className="Projects">
      <div className="background-image"></div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            
            <div className="project-details">
              <h3>Technologies Used:</h3>
              <ul>
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <h3>Key Contributions:</h3>
              <p>{project.keyContributions}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
