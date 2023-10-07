import React from 'react';
import './App.module.css';

import Home from './Home/Home';
import Parcour from './Parcour/Parcour';
import Project from './Project/Project';
import PositionFixedComponents from './PositionFixedComponents/FixedComponents';

export default function App() {
  return (
    <div className="App">
      <PositionFixedComponents />
      <main id="mainpage">
        <Home />
        <Parcour />
        <Project />
        {/* <Skills />
        <Contact /> */}
      </main>
    </div>
  );
}
