import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-badge">AL</div>
      <div className="links-container">
        <NavLink to="/homepage" className="navbar-link" activeclassname="active">Home</NavLink>
        <NavLink to="/aboutme" className="navbar-link" activeclassname="active">About Me</NavLink>
        <NavLink to="/projects" className="navbar-link" activeclassname="active">Projects</NavLink>
        <NavLink to="/contact" className="navbar-link" activeclassname="active">Contact</NavLink>
        <NavLink to="/resume" className="navbar-link" activeclassname="active">Resume</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
