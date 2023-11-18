import '../styles/Section.css';
import React from 'react';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section({ AboutMe }) {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      <p>
        { AboutMe }
      </p>
    </section>
  );
}

export default Section;
