import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutMe.module.css';
import translations from '../../translations/translations';
import CooperativeSvg from './AboutMeSvg/cooperativeSvg';
import BoldSvg from './AboutMeSvg/boldSvg';
import ComputerSvg from './AboutMeSvg/computerSvg';
import RigorousSvg from './AboutMeSvg/rigorousSvg';
import SportSvg from './AboutMeSvg/sportSvg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe({ selectedLanguage }) {
  const containerRef = useRef(null);
  // gsap animation
  useEffect(() => {
    const fromTop = containerRef.current.querySelectorAll('.fromTopAnimation');
    const fromLeft = containerRef.current.querySelectorAll('.fromLeftAnimation');
    const fromRight = containerRef.current.querySelectorAll('.fromRightAnimation');
    const fromBottom = containerRef.current.querySelectorAll('.fromBottomAnimation');

    const animations = [
      { x: 0, y: -100 }, // from top
      { x: -100, y: 0 }, // from left
      { x: 100, y: 0 }, // from right
      { x: 0, y: 100 }, // from bottom
    ];

    setTimeout(() => {
      fromTop.forEach(top => {
        gsap.fromTo(
          top,
          { x: animations[0].x, y: animations[0].y, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: top },
        );
      });
      fromLeft.forEach(left => {
        gsap.fromTo(
          left,
          { x: animations[1].x, y: animations[1].y, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: left },
        );
      });
      fromRight.forEach(right => {
        gsap.fromTo(
          right,
          { x: animations[2].x, y: animations[2].y, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: right },
        );
      });
      fromBottom.forEach(bottom => {
        gsap.fromTo(
          bottom,
          { x: animations[3].x, y: animations[3].y, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: bottom },
        );
      });
    }, 500);
  }, []);
  return (
    <section id={`${styles.aboutMe}`} ref={containerRef}>
      <div>
        <h2 className={styles.aboutMeTitle}>{translations[selectedLanguage].aboutMe.title}</h2>
        <div className={styles.parentdivpersonnality}>
          <div className={styles.divpersonnality}>
            <h3>{translations[selectedLanguage].aboutMe.point1.title}</h3>
            <CooperativeSvg />
            <p className={styles.descriptionpersonnality}>
              {translations[selectedLanguage].aboutMe.point1.description1}
              <br />
              <br />
              {translations[selectedLanguage].aboutMe.point1.description2}
            </p>
          </div>
          <div className={styles.divpersonnality}>
            <h3>{translations[selectedLanguage].aboutMe.point2.title}</h3>
            <BoldSvg />
            <p className={styles.descriptionpersonnality}>
              {translations[selectedLanguage].aboutMe.point2.description1}
              <br />
              <br />
              {translations[selectedLanguage].aboutMe.point2.description2}
            </p>
          </div>
          <div className={styles.divpersonnality}>
            <h3>{translations[selectedLanguage].aboutMe.point3.title}</h3>
            <RigorousSvg />
            <p className={styles.descriptionpersonnality}>
              {translations[selectedLanguage].aboutMe.point3.description1}
              <br />
              <br />
              {translations[selectedLanguage].aboutMe.point3.description2}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.divpersonnality}>
        <h3>{translations[selectedLanguage].aboutMe.point4.title}</h3>
        <div className={styles.div_sport_computer}>
          <ComputerSvg />
          <SportSvg />
        </div>
        <p className={styles.descriptionpersonnality2}>{translations[selectedLanguage].aboutMe.point4.description1}</p>
      </div>
    </section>
  );
}

AboutMe.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
