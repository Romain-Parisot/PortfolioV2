import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';
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

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const skills = containerRef.current.querySelectorAll('.skill');

    const animations = [
      { x: 0, y: -100 }, // from top
      { x: -100, y: 0 }, // from left
      { x: 100, y: 0 }, // from right
      { x: 0, y: 100 }, // from bottom
    ];

    skills.forEach(skill => {
      const animation = animations[Math.floor(Math.random() * animations.length)];

      gsap.fromTo(
        skill,
        { x: animation.x, y: animation.y, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: skill },
      );
    });
  }, []);
  return (
    <Element name="skills">
      <section id="skills" className={styles.skills} ref={containerRef}>
        <h2 className={styles.titleSkillsContainer}>Front-end</h2>
        <div className={styles.skillsContainer}>
          <a
            href="https://vuejs.org/guide/introduction.html#what-is-vue"
            target="_blank"
            rel="noopener noreferrer"
            className="MouseHoverEffect"
          >
            <div className={`${styles.cardSkills} skill`}>
              <VuejsSvg />
              <h3>Vue Js</h3>
            </div>
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="MouseHoverEffect"
          >
            <div className={`${styles.cardSkills} skill`}>
              <TypescriptSvg />
              <h3>TypeScript</h3>
            </div>
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <ReactSvg />
              <h3>React</h3>
            </div>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <TailwindSvg />
              <h3>Tailwind</h3>
            </div>
          </a>
          <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <SassSvg />
              <h3>Sass</h3>
            </div>
          </a>
        </div>
        <h2 className={styles.titleSkillsContainer}>Back-end</h2>
        <div className={styles.skillsContainer}>
          <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <PythonSvg />
              <h3>Python</h3>
            </div>
          </a>
          <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <PhpSvg />
              <h3>Php</h3>
            </div>
          </a>
          <a href="https://symfony.com/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <SymphonySvg />
              <h3>Symphony</h3>
            </div>
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <SqlSvg />
              <h3>SQL</h3>
            </div>
          </a>
        </div>
        <h2 className={styles.titleSkillsContainer}>Microsoft</h2>
        <div className={styles.skillsContainer}>
          <a
            href="https://powerapps.microsoft.com/fr-fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="MouseHoverEffect"
          >
            <div className={`${styles.cardSkills} skill`}>
              <PowerAppSvg />
              <h3>Power App</h3>
            </div>
          </a>
          <a
            href="https://powerautomate.microsoft.com/fr-fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="MouseHoverEffect"
          >
            <div className={`${styles.cardSkills} skill`}>
              <PowerAutomateSvg />
              <h3>Power Automate</h3>
            </div>
          </a>
          <a
            href="https://powerbi.microsoft.com/fr-fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="MouseHoverEffect"
          >
            <div className={`${styles.cardSkills} skill`}>
              <PowerBiSvg />
              <h3>Power BI</h3>
            </div>
          </a>
          <a
            href="https://www.microsoft.com/fr-fr/microsoft-365/sharepoint/collaboration"
            target="_blank"
            rel="noopener noreferrer"
            className="MouseHoverEffect"
          >
            <div className={`${styles.cardSkills} skill`}>
              <SharepointSvg />
              <h3>Sharepoint</h3>
            </div>
          </a>
        </div>
        <h2 className={styles.titleSkillsContainer}>CMS</h2>
        <div className={styles.skillsContainer}>
          <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <WordpressSvg />
              <h3>Wordpress</h3>
            </div>
          </a>
          <a href="https://www.shopify.fr/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <ShopifySvg />
              <h3>Shopify</h3>
            </div>
          </a>
          <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="MouseHoverEffect">
            <div className={`${styles.cardSkills} skill`}>
              <WebflowSvg />
              <h3>Webflow</h3>
            </div>
          </a>
        </div>
      </section>
    </Element>
  );
}
