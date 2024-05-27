import '../styles/AboutMe.css';
import React from 'react';

const skills = [
  { name: 'JavaScript'},
  { name: 'React'},
  { name: 'Node.js' },
  { name: 'CSS' },
  { name: 'HTML'},
  { name: 'MongoDB'}

];
// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object

function AboutMe() {
  return (
    <div style={{ paddingBottom: '60px' }}>
    <header className="aboutme" style={{ textAlign: 'center', paddingTop: '30vh' }}>
      <p>
        Hello I am<br></br>
      <h2 className='nameText'>Anthony Littlejohn</h2>
      <br></br><h5 className='bodyText'>I'm a software engineer based in New Jersey that specializes
    <br></br>In Full-Stack Development</h5>
    </p>
    <table className="skillsTable" style={{ margin: '0 auto', marginTop: '20px'}}>
      <thead>
      <tr>
      <th>Skills</th>
      </tr>
      </thead>
      <tbody>
        {skills.map((skill, index) => (
          <tr key={index}>
            <td>{skill.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </header>
  </div>
  );
}

export default AboutMe;
