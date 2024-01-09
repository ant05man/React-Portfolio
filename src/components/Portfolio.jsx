import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <section className="WorkInfo">
            <div className="flex-container">
                <div id="box1" className="imageContainer">
                    <a href="https://ant05man.github.io/SEO-HTML-Refactor/">
                        <img src='/Screenshot (3).png' style={{ position: 'relative', left: 0 }} />
                    </a>
                <div className="text-container">
                    <div className="bottom-center">SEO-Refactor</div>
                </div>
                </div>

                <div id="box2" className="imageContainer">
                    <a href="https://ant05man.github.io/Landing-Page-Project/">
                        <img src="/Screenshot (5).png" />
                    </a>
                <div className="text-container">
                    <div className="bottom-center">Landing Page Mini-Project</div>
                </div>
                </div>

                <div id="box3" className="imageContainer">
                    <a href="https://ant05man.github.io/Flexbox-Mini-Project/">
                        <img src="/Screenshot (6).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">Flexbox Mini Project</div>
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
                    <div className="bottom-center">Workday-Scheduler Project</div>
                    </div>
                </div>
                <div id="box6" className="imageContainer">
                    <a href="https://ant05man.github.io/password-generator/">
                        <img src="/Screenshot (8).png" />
                    </a>
                    <div className="text-container">
                    <div className="bottom-center">PassWord Generator</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
