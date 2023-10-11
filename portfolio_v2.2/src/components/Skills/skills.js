import React from 'react';
import styles from './skills.module.css';

// front imports
import ReactSvg from './frontsvg/ReactSvg';
import VuejsSvg from './frontsvg/VuejsSvg';
import TypescriptSvg from './frontsvg/TypescriptSvg';
import SassSvg from './frontsvg/SassSvg';
import TailwindSvg from './frontsvg/TailwindSvg';

// back imports
import PythonSvg from './backsvg/PythonSvg';
import PhpSvg from './backsvg/PhpSvg';
import SymphonySvg from './backsvg/SymphonySvg';
import SqlSvg from './backsvg/SqlSvg';

// microsoft imports
import PowerAppSvg from './microsoftsvg/PowerAppSvg';
import PowerAutomateSvg from './microsoftsvg/PowerAutomateSvg';
import PowerBiSvg from './microsoftsvg/PowerBiSvg';
import SharepointSvg from './microsoftsvg/SharepointSvg';

// cms imports
import ShopifySvg from './cmssvg/ShopifySvg';
import WebflowSvg from './cmssvg/WebflowSvg';
import WordpressSvg from './cmssvg/WordpressSvg';

export default function Skills() {
  return (
    <section id={styles.skills}>
      <h2 className={styles.titleSkillsContainer}>Front-end</h2>
      <div className={styles.skillsContainer}>
        <VuejsSvg />
        <TypescriptSvg />
        <ReactSvg />
        <TailwindSvg />
        <SassSvg />
      </div>
      <h2 className={styles.titleSkillsContainer}>Back-end</h2>
      <div className={styles.skillsContainer}>
        <PythonSvg />
        <SymphonySvg />
        <PhpSvg />
        <SqlSvg />
      </div>
      <h2 className={styles.titleSkillsContainer}>Microsoft</h2>
      <div className={styles.skillsContainer}>
        <PowerAppSvg />
        <PowerAutomateSvg />
        <PowerBiSvg />
        <SharepointSvg />
      </div>
      <h2 className={styles.titleSkillsContainer}>CMS</h2>
      <div className={styles.skillsContainer}>
        <WordpressSvg />
        <ShopifySvg />
        <WebflowSvg />
      </div>
    </section>
  );
}
