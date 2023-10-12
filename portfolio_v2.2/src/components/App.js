import React, { useState } from 'react';
import './App.module.css';

import PositionFixedComponents from './PositionFixedComponents/FixedComponents';
import Home from './Home/Home';
import Parcour from './Parcour/Parcour';
// import Project from './Project/Project';
import Skills from './Skills/skills';
import Contact from './Contact/contact';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const updateLanguage = newLanguage => {
    setSelectedLanguage(newLanguage);
  };
  return (
    <div className="App">
      <PositionFixedComponents selectedLanguage={selectedLanguage} updateLanguage={updateLanguage} />
      <main id="mainpage">
        <Home selectedLanguage={selectedLanguage} />
        <Parcour />
        {/* <Project /> */}
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
