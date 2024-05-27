import '../styles/Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/homepage" className="navbar-link">Homepage</Link>
     <Link to="/aboutme" className="navbar-link">About Me</Link>
      <Link to="/projects" className="navbar-link">Projects</Link>
      <Link to="/contact" className="navbar-link">Contact</Link>
      <Link to="/resume" className="navbar-link">Resume</Link>

    </header>
  );
}

export default Navbar;
