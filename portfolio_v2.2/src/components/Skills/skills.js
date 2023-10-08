import React from 'react';
import styles from './skills.module.css';

import ReactSvg from './frontsvg/ReactSvg';
import VuejsSvg from './frontsvg/VuejsSvg';
import TypescriptSvg from './frontsvg/TypescriptSvg';
import SassSvg from './frontsvg/SassSvg';
import TailwindSvg from './frontsvg/TailwindSvg';

export default function Skills() {
  return (
    <section id={styles.skills}>
      <h2 className={styles.titleSkillsContainer}>Front-end</h2>
      <div className={styles.skillsContainer}>
        <ReactSvg />
        <VuejsSvg />
        <TypescriptSvg />
        <SassSvg />
        <TailwindSvg />
      </div>
      <h2 className={styles.titleSkillsContainer}>Back-end</h2>
      <div className={styles.skillsContainer}>
        <p>just to not let empty</p>
      </div>
      <h2 className={styles.titleSkillsContainer}>Microsoft</h2>
      <div className={styles.skillsContainer}>
        <p>just to not let empty</p>
      </div>
      <h2 className={styles.titleSkillsContainer}>CMS</h2>
      <div className={styles.skillsContainer}>
        <p>just to not let empty</p>
      </div>
    </section>
  );
}
