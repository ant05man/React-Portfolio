import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Resume from "./components/Resume";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
