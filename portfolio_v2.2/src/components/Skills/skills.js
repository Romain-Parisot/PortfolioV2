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
        <div className={styles.cardSkills}>
          <VuejsSvg />
          <h3>Vue Js</h3>
        </div>
        <div className={styles.cardSkills}>
          <TypescriptSvg />
          <h3>TypeScript</h3>
        </div>
        <div className={styles.cardSkills}>
          <ReactSvg />
          <h3>React</h3>
        </div>
        <div className={styles.cardSkills}>
          <TailwindSvg />
          <h3>Tailwind</h3>
        </div>
        <div className={styles.cardSkills}>
          <SassSvg />
          <h3>Sass</h3>
        </div>
      </div>
      <h2 className={styles.titleSkillsContainer}>Back-end</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.cardSkills}>
          <PythonSvg />
          <h3>Python</h3>
        </div>
        <div className={styles.cardSkills}>
          <PhpSvg />
          <h3>Php</h3>
        </div>
        <div className={styles.cardSkills}>
          <SymphonySvg />
          <h3>Symphony</h3>
        </div>
        <div className={styles.cardSkills}>
          <SqlSvg />
          <h3>SQL</h3>
        </div>
      </div>
      <h2 className={styles.titleSkillsContainer}>Microsoft</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.cardSkills}>
          <PowerAppSvg />
          <h3>Power App</h3>
        </div>
        <div className={styles.cardSkills}>
          <PowerAutomateSvg />
          <h3>Power Automate</h3>
        </div>
        <div className={styles.cardSkills}>
          <PowerBiSvg />
          <h3>Power BI</h3>
        </div>
        <div className={styles.cardSkills}>
          <SharepointSvg />
          <h3>Sharepoint</h3>
        </div>
      </div>
      <h2 className={styles.titleSkillsContainer}>CMS</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.cardSkills}>
          <WordpressSvg />
          <h3>Wordpress</h3>
        </div>
        <div className={styles.cardSkills}>
          <ShopifySvg />
          <h3>Shopify</h3>
        </div>
        <div className={styles.cardSkills}>
          <WebflowSvg />
          <h3>Webflow</h3>
        </div>
      </div>
    </section>
  );
}
