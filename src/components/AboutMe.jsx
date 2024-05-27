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
    <div>
    <header className="aboutme" style={{ textAlign: 'center', paddingTop: '10vh' }}>
      <p>
        <h2>Hello I am</h2><br></br>
      <h2 className='nameText'>Anthony Littlejohn</h2>
      <br></br>< h3 className='bodyText'>I'm a software engineer based in New Jersey that specializes
    In Full-Stack Development. I have graduated from the Rutgers Full-Stack Coding Bootcamp, where I have had the opportunity to learn from some great teachers and meet some great people. I have re-awaked a passion of mine that I have had since I was in high school, and now I feel is the time to live my life with something that I am genuinely passionate about. I love to learn and I love that this field allows me the opportunity to learn something new everyday and allows me to use my creativity to create different applications. While you're here, if interested, check out some my projects that I am very proud of!</h3>
    </p>
    <table className="skillsTable" style={{ margin: '0 auto', marginTop: '10px', marginBottom: '20px'}}>
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
