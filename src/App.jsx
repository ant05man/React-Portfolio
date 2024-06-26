import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Resume from "./components/Resume";
import './styles/Navbar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // CSS file
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
