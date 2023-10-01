import React, { useState, useCallback } from 'react';
import Onloadanimation from './OnLoadAnimation/Onloadanimation';
import './App.module.css';
import Logoanimation from './LogoAnimation/Logoanimation';
import Burgermenu from './BurgerMenu/Burgermenu';
import Header from './Header/Header';

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
    </div>
  );
}
