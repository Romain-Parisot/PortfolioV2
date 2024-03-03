import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Events } from 'react-scroll';
import styles from './Header.module.css';
import translations from '../../../translations/translations';

export default function Header({ isBurgerOpen, selectedLanguage }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScrollStart = to => {
      setActiveSection(to);
    };

    Events.scrollEvent.register('begin', handleScrollStart);

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);
  return (
    <header className={`${isBurgerOpen ? styles.animationHeader : ''}`}>
      <nav>
        <ul>
          <li className={activeSection === 'home' ? styles.navSelected : ''}>
            <Link
              to="home"
              smooth
              spy
              onSetActive={() => setActiveSection('home')}
              className={`${styles.elmtHeader} MouseHoverEffect`}
            >
              {translations[selectedLanguage].header.home}
            </Link>
          </li>
          <li className={activeSection === 'aboutMe' ? styles.navSelected : ''}>
            <Link
              to="aboutMe"
              smooth
              spy
              onSetActive={() => setActiveSection('aboutMe')}
              className={`${styles.elmtHeader} MouseHoverEffect`}
            >
              {translations[selectedLanguage].header.aboutMe}
            </Link>
          </li>
          <li className={activeSection === 'course' ? styles.navSelected : ''}>
            <Link
              to="course"
              smooth
              spy
              onSetActive={() => setActiveSection('course')}
              className={`${styles.elmtHeader} MouseHoverEffect`}
            >
              {translations[selectedLanguage].header.course}
            </Link>
          </li>
          <li className={activeSection === 'project' ? styles.navSelected : ''}>
            <Link
              to="project"
              smooth
              spy
              onSetActive={() => setActiveSection('project')}
              className={`${styles.elmtHeader} MouseHoverEffect`}
            >
              {translations[selectedLanguage].header.projects}
            </Link>
          </li>
          <li className={activeSection === 'skills' ? styles.navSelected : ''}>
            <Link
              to="skills"
              smooth
              spy
              onSetActive={() => setActiveSection('skills')}
              className={`${styles.elmtHeader} MouseHoverEffect`}
            >
              {translations[selectedLanguage].header.skills}
            </Link>
          </li>
          <li className={activeSection === 'contact' ? styles.navSelected : ''}>
            <Link
              to="contact"
              smooth
              spy
              onSetActive={() => setActiveSection('contact')}
              className={`${styles.elmtHeader} MouseHoverEffect`}
            >
              {translations[selectedLanguage].header.contact}
            </Link>
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
