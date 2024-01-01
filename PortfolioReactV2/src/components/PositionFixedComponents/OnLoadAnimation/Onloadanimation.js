import React, { useState, useEffect } from 'react';
import styles from './Onloadanimation.module.css';

export default function Onloadanimation() {
  const [isAnimationRunning, setisAnimationRunning] = useState(false);
  const [isAnimationVisible, setIsAnimationVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisAnimationRunning(true);
    }, 500);

    setTimeout(() => {
      setIsAnimationVisible(false);
    }, 2000);
  }, []);

  return (
    <div className={`${styles.parentAnimationLoadingPage} ${isAnimationVisible ? '' : styles.dpnone}`}>
      <div className={`${styles.AnimationLoadingPage} ${isAnimationRunning ? styles.AnimationLoadingPageAdd : ''}`}>
        <h3 className={styles.txtAnimationLoadingPage}>Port</h3>
        <h4 className={styles.txtAnimationLoadingPage2}>Romain</h4>
      </div>
      <div className={`${styles.AnimationLoadingPage2} ${isAnimationRunning ? styles.AnimationLoadingPage2Add : ''}`}>
        <h3 className={styles.txtAnimationLoadingPage}>folio</h3>
        <h4 className={styles.txtAnimationLoadingPage2}>PARISOT</h4>
      </div>
    </div>
  );
}
