import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Parcour.module.css';
// import BulletPointParcour from './BulletPointParcour/BulletPointParcour';

gsap.registerPlugin(ScrollTrigger);

export default function Parcour() {
  useEffect(() => {
    gsap.fromTo(
      '.parcourElmt1Left',
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: '.parcourElmt1Left' },
    );
    gsap.fromTo(
      '.parcourElmt2Right',
      { x: 400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: '.parcourElmt2Right' },
    );
    gsap.fromTo(
      '.parcourElmt3Left',
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: '.parcourElmt3Left' },
    );
    gsap.fromTo(
      '.parcourElmt4Right',
      { x: 400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: '.parcourElmt4Right' },
    );
  }, []);
  // call bullet point component 4 times
  // const bulletPoints = [];

  // for (let i = 0; i < 4; i += 1) {
  //   bulletPoints.push(
  //     <BulletPointParcour
  //       key={i}
  //       index={i}
  //       display={
  //         (i === 0 && displayFirstParcourElement) ||
  //         (i === 1 && displaySecondParcourElement) ||
  //         (i === 2 && displayThirdParcourElement) ||
  //         (i === 3 && displayFourthParcourElement)
  //       }
  //     />,
  //   );
  // }

  return (
    <section id={styles.parcour}>
      <h2 className={`${styles.parcourTitle}`}>Mon parcours :</h2>
      <div className={styles.divtimeline}>
        <svg id={styles.parcourSvg}>
          <rect id={styles.parcourBarSvg} />
          <rect id={styles.parcourBarSvg2} />
        </svg>
        <div className={`${styles.parcourElmt} ${styles.parcourElmt1} parcourElmt1Left`}>
          <div className={styles.parcourElmtChild}>
            <h3>
              Étudiant en Coding & Digital Innovation a l&apos;
              <a href="https://www.iim.fr/" target="_blank" rel="noreferrer">
                IIM
              </a>
            </h3>
            <div className={styles.parcourElmtDetails}>
              <p>- Socle en Coding, Creation & Design, Communication Digital & e-Business. (1ans)</p>
              <a href="https://www.iim.fr/cursus/bachelor-premiere-annee/" target="_blank" rel="noreferrer">
                Listes des compétences ici.
              </a>
              <p>- Préparation au Bachelor &ldquo;Chef de projet digital&ldquo;. (2ans)</p>
              <a href="https://www.iim.fr/cursus/bachelor-coding-digital-innovation/" target="_blank" rel="noreferrer">
                Listes des compétences ici.
              </a>
              <p>- Préparation au Master &ldquo;Management de la Transformation Digitale&ldquo;. (2ans)</p>
              <a
                href="https://www.iim.fr/cursus/mastere-management-transformation-digitale/"
                target="_blank"
                rel="noreferrer"
              >
                Listes des compétences ici.
              </a>
            </div>
            <p className={styles.parcourElmtDate}>Septembre/2021 - Août/2026</p>
          </div>
        </div>
        <div className={`${styles.parcourElmt} ${styles.parcourElmt2} parcourElmt2Right`}>
          <div className={styles.parcourElmtChild} />
        </div>
        <div className={`${styles.parcourElmt} ${styles.parcourElmt3} parcourElmt3Left`}>
          <div className={styles.parcourElmtChild}>
            <h3>
              Dévellopeur chez{' '}
              <a href="https://groupe-coriance.fr/" target="_blank" rel="noreferrer">
                Coriance
              </a>{' '}
              - Stage
            </h3>
            <div className={styles.parcourElmtDetails}>
              <p>- Développement d&apos;application de gestion avec Power Apps.</p>
              <p>- Automatisation de process avec Power Automate.</p>
              <p>- Création de sites et bases de données sur SharePoint.</p>
              <p>- Réalisation de dashboards sur Power Bi</p>
            </div>
            <p className={styles.parcourElmtDate}>Mai/2023 - Juillet/2023</p>
          </div>
        </div>
        <div className={`${styles.parcourElmt} ${styles.parcourElmt4} parcourElmt4Right`}>
          <div className={styles.parcourElmtChild}>
            <h3>
              Dévellopeur web & logiciel chez{' '}
              <a href="https://www.altusgroup.com/" target="_blank" rel="noreferrer">
                Altus group
              </a>{' '}
              - Alternance
            </h3>
            <div className={styles.parcourElmtDetails}>
              <p>- Développement d&apos;applications micro-frontend en React.</p>
              <p>- Développement de micro-services en Python.</p>
              <p>- Déploiement et configuration des applications sur AWS.</p>
              <p>
                - Développement, maintenance et déploiement de composants React pour le Design System du groupe Altus.
              </p>
            </div>
            <p className={styles.parcourElmtDate}>Septembre/2023 - Toujours en activité</p>
          </div>
        </div>
      </div>
    </section>
  );
}
