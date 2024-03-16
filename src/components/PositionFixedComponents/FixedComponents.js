import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Onloadanimation from './OnLoadAnimation/Onloadanimation';
import Logoanimation from './LogoAnimation/Logoanimation';
import Burgermenu from './BurgerMenu/Burgermenu';
import Header from './Header/Header';
import Darkmode from './DarkMode/Darkmode';
import LanguageSelector from './LanguageSelector/LanguageSelector';

export default function PositionFixedComponents({ selectedLanguage, updateLanguage, hideHeader }) {
  const [isBurgerOpen, setisBurgerOpen] = useState(false);
  const toggleburger = useCallback(() => {
    setisBurgerOpen(prevIsBurgerOpen => !prevIsBurgerOpen);
  }, []);

  return (
    <div>
      <Onloadanimation />
      <Logoanimation />
      {!hideHeader ? <Burgermenu onToggleburger={toggleburger} isBurgerOpen={isBurgerOpen} /> : null}
      <LanguageSelector selectedLanguage={selectedLanguage} updateLanguage={updateLanguage} />
      <Header isBurgerOpen={isBurgerOpen} selectedLanguage={selectedLanguage} />
      <Darkmode />
    </div>
  );
}

PositionFixedComponents.defaultProps = {
  hideHeader: false,
};

PositionFixedComponents.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
  hideHeader: PropTypes.bool,
};
