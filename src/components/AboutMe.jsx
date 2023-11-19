import '../styles/AboutMe.css';
import React from 'react';
// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object

function AboutMe() {
  return (
    <header className="aboutme">
      <p>
      Hello, I am an entry-level software developer with a passion for learning.
    </p>
    </header>
  );
}

export default AboutMe;
