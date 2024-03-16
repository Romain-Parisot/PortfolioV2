import React, { useState } from 'react';
import './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Attribution from './AttributionPage/Attribution';
import PositionFixedComponents from './PositionFixedComponents/FixedComponents';
import Home from './Home/Home';
import Parcour from './Parcour/Parcour';
import Project from './Project/Project';
import Skills from './Skills/skills';
import Contact from './Contact/contact';

import Mousetrail from './MouseTrail/Mousetrail';
import AboutMe from './AboutMe/AboutMe';

function MainPage({ selectedLanguage, updateLanguage }) {
  return (
    <div className="App">
      <Mousetrail />
      <PositionFixedComponents selectedLanguage={selectedLanguage} updateLanguage={updateLanguage} />
      <main id="mainpage">
        <Home selectedLanguage={selectedLanguage} />
        <AboutMe selectedLanguage={selectedLanguage} />
        <Parcour selectedLanguage={selectedLanguage} />
        <Project selectedLanguage={selectedLanguage} />
        <Skills />
        <Contact selectedLanguage={selectedLanguage} />
      </main>
    </div>
  );
}

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const updateLanguage = newLanguage => {
    setSelectedLanguage(newLanguage);
  };

  return (
    <Router>
      <Routes>
        <Route path="/attribution" element={<Attribution />} />
        <Route path="/" element={<MainPage selectedLanguage={selectedLanguage} updateLanguage={updateLanguage} />} />
      </Routes>
    </Router>
  );
}

MainPage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};
