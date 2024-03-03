import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';
import styles from './Home.module.css';
import PersonalPicture from '../../assets/PersonalPicture.png';
import translations from '../../translations/translations';

gsap.registerPlugin(ScrollTrigger);

// random number generator

export function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

export default function Home({ selectedLanguage }) {
  const containerRef = useRef(null);
  // gsap animation
  useEffect(() => {
    const fromTop = containerRef.current.querySelectorAll('.fromTopAnimation');
    const fromLeft = containerRef.current.querySelectorAll('.fromLeftAnimation');
    const fromRight = containerRef.current.querySelectorAll('.fromRightAnimation');
    const fromBottom = containerRef.current.querySelectorAll('.fromBottomAnimation');

    const animations = [
      { x: 0, y: -100 }, // from top
      { x: -100, y: 0 }, // from left
      { x: 100, y: 0 }, // from right
      { x: 0, y: 100 }, // from bottom
    ];

    setTimeout(() => {
      fromTop.forEach(top => {
        gsap.fromTo(
          top,
          { x: animations[0].x, y: animations[0].y, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: top },
        );
      });
      fromLeft.forEach(left => {
        gsap.fromTo(
          left,
          { x: animations[1].x, y: animations[1].y, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: left },
        );
      });
      fromRight.forEach(right => {
        gsap.fromTo(
          right,
          { x: animations[2].x, y: animations[2].y, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: right },
        );
      });
      fromBottom.forEach(bottom => {
        gsap.fromTo(
          bottom,
          { x: animations[3].x, y: animations[3].y, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: bottom },
        );
      });
    }, 500);
  }, []);
  // star animation
  let oldrandomstar = 0;
  function StarAnim() {
    let randomStar = getRandomIntInclusive(1, 5);
    while (randomStar === oldrandomstar) {
      randomStar = getRandomIntInclusive(1, 5);
    }
    if (randomStar === 1) {
      document.documentElement.style.setProperty('--rotateSvgStar', `72deg`);
    } else if (randomStar === 2) {
      document.documentElement.style.setProperty('--rotateSvgStar', `144deg`);
    } else if (randomStar === 3) {
      document.documentElement.style.setProperty('--rotateSvgStar', `216deg`);
    } else if (randomStar === 4) {
      document.documentElement.style.setProperty('--rotateSvgStar', `288deg`);
    } else if (randomStar === 5) {
      document.documentElement.style.setProperty('--rotateSvgStar', `360deg`);
    }
    oldrandomstar = randomStar;
  }
  document.addEventListener('DOMContentLoaded', StarAnim);
  document.addEventListener('DOMContentLoaded', () => {
    setInterval(StarAnim, 3000);
  });

  // arrow animation
  const [pauseArrowAnimation, setPauseArrowAnimation] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setPauseArrowAnimation(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setPauseArrowAnimation(false);
  }, []);

  function scrollToParcour() {
    const parcourSection = document.getElementById('parcour');
    parcourSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToProjets() {
    const projetSection = document.getElementsByClassName('project')[0];
    projetSection.scrollIntoView({ behavior: 'smooth' });
  }

  let side = true;
  function ClasicArrowAnimation() {
    if (pauseArrowAnimation === true) {
      document.documentElement.style.setProperty('--arrowSvgPositionXElmt1', '300px');
      document.documentElement.style.setProperty('--arrowSvgPositionXElmt2', '300px');
      document.documentElement.style.setProperty('--arrowSvgPositionXElmt3', '300px');
      document.documentElement.style.setProperty('--arrowSvgPositionXElmt4', '300px');
      side = true;
    } else if (pauseArrowAnimation === false) {
      if (side) {
        setTimeout(() => {
          document.documentElement.style.setProperty('--arrowSvgPositionXElmt1', '300px');
        }, 1);
        setTimeout(() => {
          document.documentElement.style.setProperty('--arrowSvgPositionXElmt2', '300px');
        }, 1000);
        setTimeout(() => {
          document.documentElement.style.setProperty('--arrowSvgPositionXElmt3', '300px');
        }, 2000);
        setTimeout(() => {
          document.documentElement.style.setProperty('--arrowSvgPositionXElmt4', '300px');
          side = false;
        }, 3000);
      } else {
        document.documentElement.style.setProperty('--arrowSvgPositionXElmt1', '10px');
        document.documentElement.style.setProperty('--arrowSvgPositionXElmt2', '10px');
        document.documentElement.style.setProperty('--arrowSvgPositionXElmt3', '10px');
        document.documentElement.style.setProperty('--arrowSvgPositionXElmt4', '10px');
        side = true;
      }
    }
  }

  useEffect(() => {
    ClasicArrowAnimation();
    StarAnim();
    const interval = setInterval(() => {
      if (!pauseArrowAnimation) {
        ClasicArrowAnimation();
      }
      StarAnim();
    }, 4000);
    return () => clearInterval(interval);
  }, [pauseArrowAnimation]);

  return (
    <Element name="home">
      <section id="home" className={`${styles.home}`} ref={containerRef}>
        <div className={`${styles.topHome}`}>
          <div className={`${styles.leftHome}`}>
            <h1 className="fromTopAnimation">Romain PARISOT</h1>
            {/* mettre un effet pour que le texte se tape au clavier puis s'afface, s'écrit a nouveau etc ... */}
            <div>
              <h2 id={`${styles.poste}`} className="fromTopAnimation">
                {translations[selectedLanguage].home.JobTitle1}
                <br />&<br />
                {translations[selectedLanguage].home.JobTitle2}
              </h2>
              <div className={`${styles.starContainer}`}>
                <div className={`${styles.starElmt} fromLeftAnimation`}>
                  <svg className={`${styles.svgStar}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                    <path d="m780.7,994.2c-6.35-2.48-13.04-4.28-18.99-7.55-85.22-46.79-170.39-93.69-255.41-140.87-6.8-3.77-11.91-4.16-18.93-.26-84.65,47.03-169.53,93.61-254.24,140.53-10.05,5.57-20.19,8.8-31.31,5.64-17.45-4.95-28.18-23.63-25.09-42.54,16.59-101.67,32.99-203.37,50-304.96,1.27-7.6-1.36-11.12-5.62-15.48-69.02-70.58-137.92-141.29-207.03-211.78C5.25,407.92-.64,397.94.06,384.82c.9-16.88,11.45-30.53,27.81-33.55,28.21-5.21,56.63-9.18,84.98-13.54,63.18-9.71,126.22-20.79,189.64-28.21,22.93-2.68,32.89-13.42,42.11-33.73,38.07-83.84,78.06-166.72,116.9-250.18C468.94,9.65,479.32-.05,496.65,0c17.37.05,27.56,9.98,34.97,25.9,41.59,89.28,83.77,178.26,125.47,267.49,3.67,7.86,7.59,11.58,16.63,12.9,94.84,13.89,189.56,28.63,284.32,43.05,15.52,2.36,27.9,9.41,33,25.73,5.04,16.13-.01,29.56-11.52,41.3-69.1,70.5-137.97,141.25-207.05,211.77-5,5.1-7.33,9.34-5.95,17.54,16.34,97.08,32.16,194.25,47.8,291.46,1.48,9.2,2.54,19.12.85,28.09-3.29,17.51-17.1,27.7-34.5,28.97Z" />
                  </svg>
                  <p>{translations[selectedLanguage].home.StarMessage1}</p>
                </div>
                <div className={`${styles.starElmt} fromRightAnimation`}>
                  <svg className={`${styles.svgStar}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                    <path d="m780.7,994.2c-6.35-2.48-13.04-4.28-18.99-7.55-85.22-46.79-170.39-93.69-255.41-140.87-6.8-3.77-11.91-4.16-18.93-.26-84.65,47.03-169.53,93.61-254.24,140.53-10.05,5.57-20.19,8.8-31.31,5.64-17.45-4.95-28.18-23.63-25.09-42.54,16.59-101.67,32.99-203.37,50-304.96,1.27-7.6-1.36-11.12-5.62-15.48-69.02-70.58-137.92-141.29-207.03-211.78C5.25,407.92-.64,397.94.06,384.82c.9-16.88,11.45-30.53,27.81-33.55,28.21-5.21,56.63-9.18,84.98-13.54,63.18-9.71,126.22-20.79,189.64-28.21,22.93-2.68,32.89-13.42,42.11-33.73,38.07-83.84,78.06-166.72,116.9-250.18C468.94,9.65,479.32-.05,496.65,0c17.37.05,27.56,9.98,34.97,25.9,41.59,89.28,83.77,178.26,125.47,267.49,3.67,7.86,7.59,11.58,16.63,12.9,94.84,13.89,189.56,28.63,284.32,43.05,15.52,2.36,27.9,9.41,33,25.73,5.04,16.13-.01,29.56-11.52,41.3-69.1,70.5-137.97,141.25-207.05,211.77-5,5.1-7.33,9.34-5.95,17.54,16.34,97.08,32.16,194.25,47.8,291.46,1.48,9.2,2.54,19.12.85,28.09-3.29,17.51-17.1,27.7-34.5,28.97Z" />
                  </svg>
                  <p>{translations[selectedLanguage].home.StarMessage2}</p>
                </div>
              </div>
            </div>
            <div className={`${styles.containerBtToProject} fromBottomAnimation`}>
              <button
                type="button"
                className={`${styles.btToProject} MouseHoverEffect`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => scrollToProjets()}
              >
                <svg
                  version="1.1"
                  className={`${styles.arrowBtProject} ${
                    pauseArrowAnimation ? styles.translateX130 : styles.translateX0
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 1000 1000"
                  xmlSpace="preserve"
                >
                  <path
                    id={`${styles.arrowElmt1}`}
                    d="M800.41,458.99c-21.41,0.38-42.83,1.19-64.24,0.98c-15.66-0.16-27.65-9.78-32.1-23.99c-4.6-14.71-0.52-30.76,12.23-39.04c6.66-4.32,15.56-6.71,23.59-7.11c20.06-0.99,40.2-0.33,61.49-2.51c-2.38-2.36-4.76-4.72-7.14-7.09c-27.23-27.05-54.65-53.91-81.63-81.21c-16.67-16.86-16.09-36.32,0.67-52.17c14.14-13.36,32.96-13.57,47.3-0.21c7.85,7.31,15.32,15.04,22.93,22.6c42.94,42.62,85.91,85.21,128.8,127.88c18.18,18.09,18.18,35.98,0.04,54.27c-49.46,49.9-98.9,99.81-148.52,149.56c-19.28,19.33-46.95,14.25-58.82-10.41c-6.54-13.58-3.8-27.18,8.68-39.85c-26.69-27.12,53.58-54.06,80.39-81.07c2.45-2.47,4.9-4.93,7.34-7.4C801.11,461.16,800.76,460.08,800.41,458.99z"
                  />
                  <path
                    id={`${styles.arrowElmt4}`}
                    d="M69.61,398.28c4.35-1.3,12.71-5.59,21.25-5.98c23.67-1.08,47.42-0.83,71.14-0.55c20.88,0.25,35.06,14.76,35.16,35.06c0.1,20.29-13.91,34.94-34.84,35.38c-24.03,0.5-48.09,0.52-72.12,0.23c-15.1-0.19-26.24-7.72-31.7-21.73C52.98,426.53,55.5,413.24,69.61,398.28z"
                  />
                  <path
                    id={`${styles.arrowElmt3}`}
                    d="M288.28,457.28c-12.99-14.06-15.92-26.79-11.07-40.9c4.82-14.02,15.28-22.22,29.83-22.72c25.64-0.88,51.35-1.04,77-0.31c18.92,0.54,32.22,15.83,32.32,34.82c0.11,18.95-13.08,34.43-31.98,35.13c-25.64,0.95-51.35,0.98-76.99,0.14C299.83,463.2,292.4,458.69,288.28,457.28z"
                  />
                  <path
                    id={`${styles.arrowElmt2}`}
                    d="M613.16,396.75c13.43,14.34,16.02,27.23,11.07,41.2c-4.76,13.46-14.95,21.81-29.14,22.31c-25.96,0.92-52,1.14-77.96,0.34c-18.97-0.59-32.02-16.03-31.91-35.14c0.1-19.14,13.25-34.18,32.29-34.82c-25.32-0.86-50.7-1.01-76.01-0.13C601.38,390.78,609.09,395.38,613.16,396.75z"
                  />
                </svg>
                {translations[selectedLanguage].header.projects}
              </button>
            </div>
          </div>
          <div className={`${styles.rightHome}`}>
            <div className={`${styles.containerRectHome}`}>
              <div className={`${styles.rect2Home} fromTopAnimation`}>
                <h3>{translations[selectedLanguage].home.MeInSomePoints}</h3>
                <div className={`${styles.descriptionRect2Home}`}>
                  <p>{translations[selectedLanguage].home.MePoint1}</p>
                  <p>{translations[selectedLanguage].home.MePoint2}</p>
                  <p>
                    {translations[selectedLanguage].home.MePoint3}
                    <a href="https://www.altusgroup.com/" target="_blank" rel="noopener noreferrer">
                      {' '}
                      Altus Group
                    </a>
                  </p>
                  <p>
                    {translations[selectedLanguage].home.MePoint4}
                    <a href="https://www.iim.fr/" target="_blank" rel="noopener noreferrer">
                      IIM
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.iim.fr/cursus/bachelor-coding-digital-innovation/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {translations[selectedLanguage].home.MePoint5}{' '}
                    </a>
                    {translations[selectedLanguage].home.MePoint6}
                    {' 2024'}
                  </p>
                  <p>{translations[selectedLanguage].home.MePoint7}</p>
                </div>
              </div>
              <svg className={`${styles.svgCircle}`} viewBox="0 0 1000 1000">
                <circle r="500" cx="500" cy="500" />
              </svg>
              <svg
                className={`${styles.svgArrowCircle} MouseHoverEffect`}
                viewBox="0 0 1000 1000"
                onClick={() => scrollToParcour()}
              >
                <path
                  className={`${styles.arrowCircle}`}
                  d="M0,136.99c1.85,16.14,3.48,32.31,5.59,48.42C22.17,312.34,72.14,424.5,155.83,521.08c95.54,110.26,214.99,180.45,357.85,210c41.85,8.66,84.26,12.86,127.02,12.49c43.72-0.37,77.76-34.59,77.98-78.59c0.28-55.44,0.07-110.89,0.07-166.33c0-3.57,0-7.15,0-12.06c2.5,1.87,4.31,2.91,5.73,4.33c61.32,61.24,122.66,122.47,183.87,183.83c18.11,18.15,18.43,41,0.59,58.9c-61.63,61.86-123.46,123.52-185.23,185.24c-1.07,1.07-2.31,1.98-4.97,4.25c0-14.57,0.07-27.44-0.02-40.31c-0.16-23.87-16.61-41.26-38.95-41.31c-22.34-0.04-38.93,17.33-39.13,41.16c-0.12,14.02-0.5,28.07,0.1,42.07c1.44,33.43,17.76,57.08,48.03,71.13c2.85,1.32,5.66,2.74,8.48,4.12c14.32,0,28.65,0,42.97,0c21.77-7.83,37.15-24.02,52.95-39.91c55.92-56.24,112.11-112.21,168.13-168.35c5.27-5.28,10.27-10.87,14.96-16.67c13.43-16.6,19.37-36.42,23.72-56.87c0-9.13,0-18.26,0-27.4c-1.61-6.59-2.98-13.26-4.89-19.76c-5.92-20.14-16.96-37.13-31.77-51.9c-62.72-62.58-125.28-125.32-188-187.88c-24.2-24.14-57.17-31.17-87.05-17.72c-31.61,14.24-47.46,39.56-47.6,74.24c-0.23,58.68-0.06,117.35-0.06,177.41c-6.01,0-11.71,0.22-17.39-0.03c-163.46-7.34-299.91-72.13-407.81-195.23C140.91,384.89,96.42,285.24,83.07,172.91c-5.02-42.22-3.45-85.22-4.99-127.87c-0.2-5.49-0.3-11.16-1.69-16.41C72.13,12.41,58.2,1.21,41.88,0.09C25.41-1.03,10.37,8.04,3.46,23.3c-1.2,2.65-2.31,5.35-3.46,8.02C0,66.54,0,101.77,0,136.99z"
                />
              </svg>
              <div className={`${styles.rect1Home}`}>
                <img src={PersonalPicture} alt="Romain parisot" />
              </div>
              <div className={`${styles.rect3Home} fromRightAnimation`} />
            </div>
          </div>
        </div>
        <div className={`${styles.bottomHome} fromBottomAnimation`}>
          <svg className={`${styles.svgWaveHome}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fillOpacity="1"
              d="M0,32L21.8,48C43.6,64,87,96,131,106.7C174.5,117,218,107,262,133.3C305.5,160,349,224,393,218.7C436.4,213,480,139,524,101.3C567.3,64,611,64,655,96C698.2,128,742,192,785,229.3C829.1,267,873,277,916,256C960,235,1004,181,1047,154.7C1090.9,128,1135,128,1178,133.3C1221.8,139,1265,149,1309,176C1352.7,203,1396,245,1418,266.7L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,174,320,131,320C87,320,43,320,21,320L0,320Z"
            />
          </svg>
        </div>
      </section>
    </Element>
  );
}

Home.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
