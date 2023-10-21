import React, { useState } from 'react';
import styles from './App.module.css';

import PositionFixedComponents from './PositionFixedComponents/FixedComponents';
import Home from './Home/Home';
import Parcour from './Parcour/Parcour';
import Project from './Project/Project';
import Skills from './Skills/skills';
import Contact from './Contact/contact';

import translations from '../translations/translations';

import Mousetrail from './MouseTrail/Mousetrail';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const updateLanguage = newLanguage => {
    setSelectedLanguage(newLanguage);
  };
  return (
    <div className="App">
      <Mousetrail />
      <PositionFixedComponents selectedLanguage={selectedLanguage} updateLanguage={updateLanguage} />
      <main id="mainpage">
        <Home selectedLanguage={selectedLanguage} />
        <Parcour />
        <section id={`${styles.projects}`}>
          <h2>{translations[selectedLanguage].project.title}</h2>
          <p className={`${styles.numberProject}`}>1</p>
          <Project selectedLanguage={selectedLanguage} IndexProject={1} />
          <p className={`${styles.numberProject}`}>2</p>
          <Project selectedLanguage={selectedLanguage} IndexProject={1} />
          <p className={`${styles.numberProject}`}>3</p>
          <Project selectedLanguage={selectedLanguage} IndexProject={1} />
          <p className={`${styles.numberProject}`}>4</p>
          <Project selectedLanguage={selectedLanguage} IndexProject={1} />
          {/* <Project selectedLanguage={selectedLanguage} IndexProject={2} />
        <Project selectedLanguage={selectedLanguage} IndexProject={3} />
        <Project selectedLanguage={selectedLanguage} IndexProject={4} /> */}
        </section>
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
