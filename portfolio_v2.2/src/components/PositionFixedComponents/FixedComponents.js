import React, { useState, useCallback } from 'react';
import Onloadanimation from './OnLoadAnimation/Onloadanimation';
import Logoanimation from './LogoAnimation/Logoanimation';
import Burgermenu from './BurgerMenu/Burgermenu';
import Header from './Header/Header';
import Darkmode from './DarkMode/Darkmode';

export default function PositionFixedComponents() {
  const [isBurgerOpen, setisBurgerOpen] = useState(false);
  const toggleburger = useCallback(() => {
    setisBurgerOpen(prevIsBurgerOpen => !prevIsBurgerOpen);
  }, []);
  return (
    <div>
      <Onloadanimation />
      <Logoanimation />
      <Burgermenu onToggleburger={toggleburger} isBurgerOpen={isBurgerOpen} />
      <Header isBurgerOpen={isBurgerOpen} />
      <Darkmode />
    </div>
  );
}
