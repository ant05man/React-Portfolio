import React from 'react';
import '../styles/Projects.css';
import '../App.css';

const projects = [
  {
    title: 'Full-Stack Recipe Management Application',
    description: 'Developed a full-stack recipe management application that allows users to register, log in, and manage their favorite recipes. The application provides features for user authentication, recipe storage, and retrieval, showcasing a modern, responsive interface built with React, and a robust backend powered by Node.js and Express.',
    link: 'https://food-recipes-ecommerce.vercel.app',
    image: '/Screenshot (54).png',
    technologies: [
      'React', 'HTML', 'CSS', 'JavaScript',
      'Node.js', 'Express', 'MongoDB', 'Mongoose',
      'JSON Web Tokens (JWT)', 'bcrypt',
      'Vercel', 'Git/GitHub for version control'
    ],
    keyContributions: `
      Designed and developed the user interface with React, implementing a modern design and enhancing user experience through intuitive navigation and responsive layouts.
      Built and integrated RESTful APIs using Node.js and Express to handle user authentication, recipe management, and data retrieval.
      Ensured secure and efficient data handling with MongoDB and Mongoose, implementing data validation and relationships between users and recipes.
      Deployed the application to cloud platforms, managing environment configurations and handling deployment processes to ensure high availability and scalability.
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
