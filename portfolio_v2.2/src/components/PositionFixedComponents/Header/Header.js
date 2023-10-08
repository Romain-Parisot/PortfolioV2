import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import translations from '../../../translations/translations';

export default function Header({ isBurgerOpen, selectedLanguage }) {
  function scrollToParcour() {
    const parcourSection = document.getElementById('parcour');
    parcourSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToProjets() {
    const projetSection = document.getElementsByClassName('project')[0];
    projetSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToHome() {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className={`${isBurgerOpen ? styles.animationHeader : ''}`}>
      <nav>
        <ul className={`${styles.navLinks}`}>
          <li className={`${styles.navSelected}`}>
            <button type="button" className={`${styles.elmtHeader}`} onClick={scrollToHome}>
              {translations[selectedLanguage].common.home}
            </button>
          </li>
          <li>
            <button type="button" className={`${styles.elmtHeader}`} onClick={scrollToProjets}>
              Projets
            </button>
          </li>
          <li>
            <button type="button" className={`${styles.elmtHeader}`} onClick={scrollToParcour}>
              A propos
            </button>
          </li>
          <li>
            <button type="button" className={`${styles.elmtHeader}`} onClick={scrollToContact}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  isBurgerOpen: PropTypes.bool.isRequired,
};
