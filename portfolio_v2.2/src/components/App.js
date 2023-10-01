import React, { useState, useCallback } from 'react';
import './App.module.css';
import Onloadanimation from './PositionFixedComponents/OnLoadAnimation/Onloadanimation';
import Logoanimation from './PositionFixedComponents/LogoAnimation/Logoanimation';
import Burgermenu from './PositionFixedComponents/BurgerMenu/Burgermenu';
import Header from './PositionFixedComponents/Header/Header';
import Darkmode from './PositionFixedComponents/DarkMode/Darkmode';
import Home from './Home/Home';

export default function App() {
  const [isBurgerOpen, setisBurgerOpen] = useState(false);
  const toggleburger = useCallback(() => {
    setisBurgerOpen(prevIsBurgerOpen => !prevIsBurgerOpen);
  }, []);
  return (
    <div className="App">
      <Onloadanimation />
      <Logoanimation />
      <Burgermenu onToggleburger={toggleburger} isBurgerOpen={isBurgerOpen} />
      <Header isBurgerOpen={isBurgerOpen} />
      <Darkmode />
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
