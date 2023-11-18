import React from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
          <Route path="/aboutme" component={AboutMe} />
          <Route path="*" element={ < Project /> } />
      </ Routes>
      <Header />

      <Footer />
      <Section />
    </div>
  </ Router>
  );
}

export default App;
