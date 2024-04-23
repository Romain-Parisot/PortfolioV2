import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopBar.module.css';
import translations from '../../../translations/translations';

export default function TopBar({ selectedLanguage }) {
  return <div className={styles.TopBar}>{translations[selectedLanguage].topBar.title}</div>;
}

TopBar.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
