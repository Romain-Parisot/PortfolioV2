import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './Project.module.css';
import translations from '../../translations/translations';
import ProjectsSwipper from './ProjectsSwipper';

gsap.registerPlugin(ScrollTrigger);

export default function Project({ selectedLanguage }) {
  useEffect(() => {
    gsap.fromTo(
      '.projectAnimation',
      { x: 0, y: -100, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: '.projectAnimation', start: 'top center' } },
    );
  }, []);
  return (
    <Element name="project">
      <section id="project" className={`${styles.project} projectAnimation`}>
        <h2>{translations[selectedLanguage].project.title}</h2>
        <ProjectsSwipper selectedLanguage={selectedLanguage} />
      </section>
    </Element>
  );
}

Project.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
