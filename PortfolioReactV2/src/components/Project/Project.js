import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.module.css';
import translations from '../../translations/translations';

import ProjectsSwipper from './ProjectsSwipper';

export default function Project({ selectedLanguage }) {
  return (
    <section id={`${styles.project}`}>
      <h2>{translations[selectedLanguage].project.title}</h2>
      <ProjectsSwipper selectedLanguage={selectedLanguage} />
    </section>
  );
}

Project.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
