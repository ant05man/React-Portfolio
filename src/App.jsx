import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
