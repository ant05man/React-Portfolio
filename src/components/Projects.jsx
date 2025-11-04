import React from 'react';
import '../styles/Projects.css';
import '../App.css';

const projects = [
  {
    title: 'E-Commmerce Shopping Cart App',
    description: 'A full-stack e-commerce application that allows users to browse products, add items to a cart, sign up/log in, and place orders. Features user authentication and protected checkout. Built with React on the frontend and Node.js/Express/MongoDB on the backend.',
    link: 'https://shopping-cart-project-git-main-ant05mans-projects.vercel.app/',
    image: '/Screenshot (68).png',
    technologies: [
      'React', 'HTML', 'CSS', 'JavaScript',
      'Node.js', 'Express', 'MongoDB', 'Mongoose',
      'JWT (JSON Web Tokens)', 'bcrypt', 'Axios',
      'Vercel (Frontend)', 'Render (Backend)', 'Git/GitHub'
    ],
    keyContributions: `
      - Users can sign up/login
      - Browse products and add to cart.
      - Checkout and save orders to their account.
      - View order history after checkout.
      - Fully deployed on Vercel (frontend) and Render (backend).    `
  },
  {
    title: 'To-Do App',
    description: 'Developed a full-stack task management application that allows users to create, edit, mark as complete, and delete tasks. The application features a responsive and user-friendly interface built with React and CSS, and a robust backend powered by Node.js, Express, and MongoDB.',
    link: 'https://todo-app-frontend-nine-pink.vercel.app/',
    image: '/Screenshot (64).png',
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

      {/* Overlay on gradient background */}
      <div className="overlay"></div>

      {/* Main content */}
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
              <h3>Key Functions:</h3>
              <p>{project.keyContributions}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;