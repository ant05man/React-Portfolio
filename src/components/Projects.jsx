import React from 'react';
import '../styles/Projects.css';

function Projects() {
    return (
        <section className="WorkInfo">
            <div className="flex-container">
                <div id="box1" className="imageContainer">
                    <a href="https://cryptid-world.vercel.app/">
                        <img src="/Cryptid-World Screenshot.png" style={{ position: 'relative', left: 0 }} />
                    </a>
                <div className="text-container">
                    <div className="bottom-center">Cryptid-World</div>
                </div>
                </div>

                <div id="box2" className="imageContainer">
                    <a href="https://reel-delights.onrender.com/">
                        <img src="/Screenshot (51).png" />
                    </a>
                <div className="text-container">
                    <div className="bottom-center">Reel-Delights</div>
                </div>
                </div>

                <div id="box3" className="imageContainer">
                    <a href="https://ant05man.github.io/Flexbox-Mini-Project/">
                        <img src="/Screenshot (6).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Flexbox</div>
                    </div>
                </div>

                <div id="box4" className="imageContainer">
                    <a href="https://briellebroadt.github.io/Witty-Web-Wizard/">
                        <img src="/Screenshot (22).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Witty Web Wizard</div>
                    </div>
                </div>

                <div id="box5" className="imageContainer">
                    <a href="https://ant05man.github.io/Workday-scheduler/">
                        <img src="/Screenshot (42).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Workday-Scheduler</div>
                    </div>
                </div>
                <div id="box6" className="imageContainer">
                    <a href="https://ant05man.github.io/password-generator/">
                        <img src="/Screenshot (8).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Random Password Generator</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
