import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burgermenu.module.css';

export default function Burgermenu({ isBurgerOpen, onToggleburger }) {
  return (
    <button type="button" className={`${styles.burger}`} onClick={onToggleburger}>
      <span className={`${styles.bar} ${styles.barUp} ${isBurgerOpen ? styles.barAnimationTop : ''}`} />
      <span className={`${styles.bar} ${styles.barMid} ${isBurgerOpen ? styles.hidden : ''}`} />
      <span className={`${styles.bar} ${styles.barDown} ${isBurgerOpen ? styles.barAnimationBot : ''}`} />
    </button>
  );
}

Burgermenu.propTypes = {
  isBurgerOpen: PropTypes.bool.isRequired,
  onToggleburger: PropTypes.func.isRequired,
};
