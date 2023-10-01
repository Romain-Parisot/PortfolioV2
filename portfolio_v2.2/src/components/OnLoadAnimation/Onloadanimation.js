import React, { useEffect, useState } from 'react';
import styles from './Onloadanimation.module.css';

export default function Onloadanimation() {
  // State to track when the animation should be hidden
  const [hideAnimation, setHideAnimation] = useState(false);

  useEffect(() => {
    // Function to handle animation opening page
    function animationOpeningPage() {
      setTimeout(() => {
        // Add classes to start the animations
        setHideAnimation(true);
      }, 1000);
      setTimeout(() => {
        // Set state to hide the parent container after the animations
        setHideAnimation(true);
      }, 4000);
    }

    // Run the animationOpeningPage function when the component is mounted
    animationOpeningPage();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className={`${styles.parent_Animation_loading_page} ${hideAnimation && styles.dpnone}`}>
      <div className={`${styles.Animation_loading_page} ${hideAnimation && styles.Animation_loading_page_add}`}>
        <h3 className={styles.txt_Animation_loading_page}>Port</h3>
        <h4 className={styles.txt_Animation_loading_page2}>Romain</h4>
      </div>
      <div className={`${styles.Animation_loading_page2} ${hideAnimation && styles.Animation_loading_page2_add}`}>
        <h3 className={styles.txt_Animation_loading_page}>folio</h3>
        <h4 className={styles.txt_Animation_loading_page2}>PARISOT</h4>
      </div>
    </div>
  );
}
