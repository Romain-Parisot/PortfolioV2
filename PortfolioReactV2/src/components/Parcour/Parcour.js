import React, { useState, useEffect } from 'react';
import styles from './Parcour.module.css';
import BulletPointParcour from './BulletPointParcour/BulletPointParcour';

export default function Parcour() {
  // animation timeline
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollPercentage2, setScrollPercentage2] = useState(0);
  const [displayFirstParcourElement, setDisplayFirstParcourElement] = useState(false);
  const [displaySecondParcourElement, setDisplaySecondParcourElement] = useState(false);
  const [displayThirdParcourElement, setDisplayThirdParcourElement] = useState(false);
  const [displayFourthParcourElement, setDisplayFourthParcourElement] = useState(false);

  const updateProgressBar = () => {
    const startingListeningPoint = 20;
    const endingListeningPoint = 100;
    const scalingFactor = endingListeningPoint / 100;
    if (scrollPercentage > startingListeningPoint) {
      // Calculate scrollPercentage2 based on the same scale as scrollPercentage
      const adjustedPercentage =
        ((scrollPercentage - startingListeningPoint) / (endingListeningPoint - startingListeningPoint)) * 100;

      // Ensure scrollPercentage2 reaches 100 at a slower rate than scrollPercentage
      const cappedPercentage2 = Math.min(adjustedPercentage * scalingFactor, 100);

      setScrollPercentage2(cappedPercentage2);
    } else {
      setScrollPercentage2(0);
    }

    if (scrollPercentage > 31) {
      setDisplayFirstParcourElement(true);
    } else if (scrollPercentage < 31) {
      setDisplayFirstParcourElement(false);
    }
    if (scrollPercentage > 51) {
      setDisplaySecondParcourElement(true);
    } else if (scrollPercentage < 51) {
      setDisplaySecondParcourElement(false);
    }
    if (scrollPercentage > 71) {
      setDisplayThirdParcourElement(true);
    } else if (scrollPercentage < 71) {
      setDisplayThirdParcourElement(false);
    }
    if (scrollPercentage > 91) {
      setDisplayFourthParcourElement(true);
    } else if (scrollPercentage < 91) {
      setDisplayFourthParcourElement(false);
    }
  };

  // get scroll percentage

  useEffect(() => {
    const updateScrollPercentage = () => {
      const newScrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollPercentage(newScrollPercentage);
      updateProgressBar();
      console.log('scrollPercentage');
      console.log(newScrollPercentage);
      console.log('scrollPercentage2');
      console.log(scrollPercentage2);
    };

    document.addEventListener('scroll', updateScrollPercentage);

    return () => {
      document.removeEventListener('scroll', updateScrollPercentage);
    };
  }, [scrollPercentage]);

  // call bullet point component 4 times
  const bulletPoints = [];

  for (let i = 0; i < 4; i += 1) {
    bulletPoints.push(
      <BulletPointParcour
        key={i}
        index={i}
        display={
          (i === 0 && displayFirstParcourElement) ||
          (i === 1 && displaySecondParcourElement) ||
          (i === 2 && displayThirdParcourElement) ||
          (i === 3 && displayFourthParcourElement)
        }
      />,
    );
  }

  return (
    <section id={styles.parcour}>
      <h2 className={`${styles.parcourTitle}`}>Mon parcours :</h2>
      <div className={styles.divtimeline}>
        <svg id={styles.parcourSvg}>
          <rect id={styles.parcourBarSvg} style={{ height: `${scrollPercentage2}%` }} />
          <rect id={styles.parcourBarSvg2} />
        </svg>
        {bulletPoints}

        <div
          className={`${styles.parcourElmt} ${displayFirstParcourElement ? '' : styles.parcourElmtLeft} ${
            styles.parcourElmt1
          }`}
        >
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
        <div
          className={`${styles.parcourElmt} ${displaySecondParcourElement ? '' : styles.parcourElmtRight} ${
            styles.parcourElmt2
          }`}
        >
          <div className={styles.parcourElmtChild} />
        </div>
        <div
          className={`${styles.parcourElmt} ${displayThirdParcourElement ? '' : styles.parcourElmtLeft} ${
            styles.parcourElmt3
          }`}
        >
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
        <div
          className={`${styles.parcourElmt} ${displayFourthParcourElement ? '' : styles.parcourElmtRight} ${
            styles.parcourElmt4
          }`}
        >
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
