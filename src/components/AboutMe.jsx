import React from 'react';
import '../styles/AboutMe.css';

const pizza="Hello";
console.log(pizza);

const skills = [
    { name: 'JavaScript'},
    { name: 'React'},
    { name: 'Node.js' },
    { name: 'CSS' },
    { name: 'HTML'},
    { name: 'MongoDB'}
];

function AboutMe() {
    return (
        <div className="aboutme-container">
            <header className="aboutme">
                <div className="aboutme-content">
                    <h2>Hello I am</h2>
                    <h2 className='nameText'>Anthony Littlejohn</h2>
                    <h3 className='bodyText'>I'm a software engineer based in New Jersey that specializes
                        In Full-Stack Development. I have graduated from the Rutgers Full-Stack Coding Bootcamp, where I have had the opportunity to learn from some great teachers and meet some great people. I have re-awaked a passion of mine that I have had since I was in high school, and now I feel is the time to live my life with something that I am genuinely passionate about. I love to learn and I love that this field allows me the opportunity to learn something new everyday and allows me to use my creativity to create different applications. While you're here, if interested, check out some my projects that I am very proud of!
                    </h3>
                </div>
                <table className="skillsTable">
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
