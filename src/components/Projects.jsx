import React from 'react';
import '../styles/Projects.css';
import '../App.css';

const projects = [
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
  },
  {
    title: 'Flexbox',
    description: 'Master the art of flexible layouts with Flexbox! Create responsive and dynamic web designs effortlessly with this powerful tool.',
    link: 'https://ant05man.github.io/Flexbox-Mini-Project/',
    image: '/Screenshot (6).png',
  },
  {
    title: 'Full-Stack Recipe Management Application',
    description: 'Developed a full-stack recipe management application that allows users to register, log in, and manage their favorite recipes. The application provides features for user authentication, recipe storage, and retrieval, showcasing a modern, responsive interface built with React, and a robust backend powered by Node.js and Express.',
    link: 'https://briellebroadt.github.io/Witty-Web-Wizard/',
    image: '/Screenshot (22).png',
  },
  {
    title: 'Workday-Scheduler',
    description: 'Stay organized and productive with Workday-Scheduler! Plan your day effectively, schedule tasks, and never miss a deadline again.',
    link: 'https://ant05man.github.io/Workday-scheduler/',
    image: '/Screenshot (42).png',
  },
  {
    title: 'Random Password Generator',
    description: 'Ensure security with ease using Random Password Generator! Generate strong and unique passwords instantly to safeguard your online accounts.',
    link: 'https://ant05man.github.io/password-generator/',
    image: '/Screenshot (8).png',
  },
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
