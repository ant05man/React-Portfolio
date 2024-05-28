import React from 'react';
import '../styles/Projects.css';
import '../App.css';

function Projects() {
    return (
        <section className="WorkInfo">
            <div className="flex-container">
                <div id="box1" className="imageContainer">
                    <a href="https://cryptid-world.vercel.app/">
                        <img src="/Cryptid-World Screenshot.png" style={{ position: 'relative', left: 0 }} />
                    </a>
                <div className="text-container">
                    <div className="bottom-center">Cryptid-World(Still In Development)</div>
                    Embark on an adventure into the unknown with Cryptid-World! Explore mysterious creatures and hidden secrets in this immersive experience. (Still in Development)
                </div>
                
                </div>

                <div id="box2" className="imageContainer">
                    <a href="https://reel-delights.onrender.com/">
                        <img src="/Screenshot (51).png" />
                    </a>
                <div className="text-container">
                    <div className="bottom-center">Reel-Delights</div>
                    Indulge in a cinematic journey with Reel-Delights! Invite your friends to watch some of your favorite movies
                </div>
                </div>

                <div id="box3" className="imageContainer">
                    <a href="https://ant05man.github.io/Flexbox-Mini-Project/">
                        <img src="/Screenshot (6).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Flexbox</div>
                    Master the art of flexible layouts with Flexbox! Create responsive and dynamic web designs effortlessly with this powerful tool.
                    </div>
                </div>

                <div id="box4" className="imageContainer">
                    <a href="https://briellebroadt.github.io/Witty-Web-Wizard/">
                        <img src="/Screenshot (22).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Witty Web Wizard</div>
                    Enter a world of whimsy and wit with Witty Web Wizard! Embark on a magical journey filled with laughter and delight. Begin your quest for the funniest jokes today
                    </div>
                </div>

                <div id="box5" className="imageContainer">
                    <a href="https://ant05man.github.io/Workday-scheduler/">
                        <img src="/Screenshot (42).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Workday-Scheduler</div>
                    Stay organized and productive with Workday-Scheduler! Plan your day effectively, schedule tasks, and never miss a deadline again.
                    </div>
                </div>
                <br></br>
                <div id="box6" className="imageContainer">
                    <a href="https://ant05man.github.io/password-generator/">
                        <img src="/Screenshot (8).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Random Password Generator</div>
                    Ensure security with ease using Random Password Generator! Generate strong and unique passwords instantly to safeguard your online accounts.

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
