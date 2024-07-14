import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <section className="WorkInfo">
            <div className="flex-container">
                <div id="box1" className="imageContainer">
                    <a href="https://ant05man.github.io/SEO-HTML-Refactor/">
                        <img src="/Screenshot (3).png" alt="SEO Refactor Project Screenshot" style={{ position: 'relative', left: 0 }} />
                    </a>
                    <div className="text-container">
                        <div className="bottom-center">SEO-Refactor</div>
                    </div>
                </div>

                <div id="box2" className="imageContainer">
                    <a href="https://reel-delights.onrender.com/">
                        <img src="/Screenshot (51).png" alt="Reel Delights Project Screenshot" />
                    </a>
                    <div className="text-container">
                        <div className="bottom-center">Reel-Delights</div>
                    </div>
                </div>

                <div id="box3" className="imageContainer">
                    <a href="https://ant05man.github.io/Flexbox-Mini-Project/">
                        <img src="/Screenshot (6).png" alt="Flexbox Project Screenshot" />
                    </a>
                    <div className="text-container">
                        <div className="bottom-center">Flexbox</div>
                    </div>
                </div>

                <div id="box4" className="imageContainer">
                    <a href="https://briellebroadt.github.io/Witty-Web-Wizard/">
                        <img src="/Screenshot (22).png" alt="Witty Web Wizard Project Screenshot" />
                    </a>
                    <div className="text-container">
                        <div className="bottom-center">Witty Web Wizard</div>
                    </div>
                </div>

                <div id="box5" className="imageContainer">
                    <a href="https://ant05man.github.io/Workday-scheduler/">
                        <img src="/Screenshot (42).png" alt="Workday Scheduler Project Screenshot" />
                    </a>
                    <div className="text-container">
                        <div className="bottom-center">Workday-Scheduler</div>
                    </div>
                </div>
                
                <div id="box6" className="imageContainer">
                    <a href="https://ant05man.github.io/password-generator/">
                        <img src="/Screenshot (8).png" alt="Random Password Generator Project Screenshot" />
                    </a>
                    <div className="text-container">
                        <div className="bottom-center">Random Password Generator</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
