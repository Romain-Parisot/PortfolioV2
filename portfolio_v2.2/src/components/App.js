import React from 'react';
import './App.module.css';

import Home from './Home/Home';
import PositionFixedComponents from './PositionFixedComponents/FixedComponents';

export default function App() {
  return (
    <div className="App">
      <PositionFixedComponents />
      <main id="mainpage">
        <Home />
        {/* <Parcour />
        <Project />
        <Competence />
        <Contact /> */}
      </main>
    </div>
  );
}
