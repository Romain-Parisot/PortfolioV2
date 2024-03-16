import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Attribution.module.css';
import translations from '../../translations/translations';

import Mousetrail from '../MouseTrail/Mousetrail';
import PositionFixedComponents from '../PositionFixedComponents/FixedComponents';

// svg icons
import Target from '../AboutMe/AboutMeSvg/rigorousSvg';
import Mountain from '../AboutMe/AboutMeSvg/boldSvg';
import Computer from '../AboutMe/AboutMeSvg/computerSvg';
import Hand from '../AboutMe/AboutMeSvg/cooperativeSvg';
import Sport from '../AboutMe/AboutMeSvg/sportSvg';
import MoonSunSvg from './MoonSunSvg';

// webp icons
import Cross from '../../assets/project/SwipperBar/cross.webp';
import Expand from '../../assets/project/SwipperBar/expand.webp';
import UndoArrow from '../../assets/project/SwipperBar/undoArrow.webp';

function Attribution({ selectedLanguage, updateLanguage }) {
  return (
    <div>
      <Mousetrail />
      <PositionFixedComponents selectedLanguage={selectedLanguage} updateLanguage={updateLanguage} hideHeader />
      <h1 className={styles.title}>{translations[selectedLanguage].attribution.title}</h1>
      <p className={styles.description}>{translations[selectedLanguage].attribution.description}</p>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <MoonSunSvg />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/tulpahn"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            tulpahn
          </a>
        </div>
        <div className={styles.iconContainer}>
          <Target />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/herikus"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            herikus
          </a>
        </div>
        <div className={styles.iconContainer}>
          <Mountain />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/herikus"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            herikus
          </a>
        </div>
        <div className={styles.iconContainer}>
          <Computer />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/pericon"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            pericon
          </a>
        </div>
        <div className={styles.iconContainer}>
          <Hand />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            freepik
          </a>
        </div>
        <div className={styles.iconContainer}>
          <Sport />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/trazobanana"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            trazobanana
          </a>
        </div>
        <div className={styles.iconContainer}>
          <img src={Cross} alt="Cross" />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            Pixel perfect
          </a>
        </div>
        <div className={styles.iconContainer}>
          <img src={Expand} alt="Expand" />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            Pixel perfect
          </a>
        </div>
        <div className={styles.iconContainer}>
          <img src={UndoArrow} alt="UndoArrow" />
          {translations[selectedLanguage].attribution.madeBy}
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noreferrer"
            className="MouseHoverEffect"
          >
            freepik
          </a>
        </div>
        <div className={`${styles.containerBackToHomeButton}`}>
          <button type="button" className={`${styles.backToHomeButton} MouseHoverEffect`}>
            <Link to="/">{translations[selectedLanguage].attribution.backToHome}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Attribution;

Attribution.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};
