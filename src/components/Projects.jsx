import React from 'react';
import '../styles/Projects.css';
import '../App.css';

const projects = [

    {
        title: 'Full-Stack Recipe Management Application',
        description: 'Developed a full-stack recipe management application that allows users to register, log in, and manage their favorite recipes. The application provides features for user authentication, recipe storage, and retrieval, showcasing a modern, responsive interface built with React, and a robust backend powered by Node.js and Express.',
        link: 'food-recipes-ecommerce.vercel.app',
        image: '/Screenshot (54).png',
      },
  {
    title: 'Cryptid-World (Still In Development)',
    description: 'Embark on an adventure into the unknown with Cryptid-World! Explore mysterious creatures and hidden secrets in this immersive experience. (Still in Development)',
    link: 'https://cryptid-world.vercel.app/',
    image: '/Cryptid-World Screenshot.png',
  },
  {
    title: 'Reel-Delights',
    description: 'Indulge in a cinematic journey with Reel-Delights! Invite your friends to watch some of your favorite movies.',
    link: 'https://reel-delights.onrender.com/',
    image: '/Screenshot (51).png',
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
