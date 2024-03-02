import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Parcour.module.css';
import translations from '../../translations/translations';
// import BulletPointParcour from './BulletPointParcour/BulletPointParcour';

gsap.registerPlugin(ScrollTrigger);

export default function Parcour({ selectedLanguage }) {
  const containerRef = useRef(null);

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
    const fromTop = containerRef.current.querySelectorAll('.fromTopAnimation');
    fromTop.forEach(top => {
      gsap.fromTo(
        top,
        { x: 0, y: -100, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: top,
            start: 'center center', // start when the center of the element hits the center of the viewport
          },
        },
      );
    });
  }, []);

  return (
    <section id={styles.parcour} ref={containerRef}>
      <h2 className={`${styles.parcourTitle}`}>{translations[selectedLanguage].course.title}</h2>
      <div className={styles.divtimeline}>
        {Array.from({ length: 4 }).map((_, index) => {
          const key = nanoid();

          return (
            <div
              key={key}
              className={`${styles.middleTimelineContainer} ${styles[`middleTimelineContainer${index + 1}`]}`}
            >
              <div className={`${styles.middleBar} fromTopAnimation`} />
              <div className={`${styles.middleBulletPoint} fromTopAnimation`} />
              <div className={`${styles.middleBar} fromTopAnimation`} />
            </div>
          );
        })}
        <div className={`${styles.parcourElmt} ${styles.parcourElmt1} parcourElmt1Left`}>
          <div className={styles.parcourElmtChild}>
            <h3>
              {translations[selectedLanguage].course.course1.CourseName}
              <a href="https://www.iim.fr/" target="_blank" rel="noreferrer" className="MouseHoverEffect">
                IIM
              </a>
            </h3>
            <div className={styles.parcourElmtDetails}>
              <p>{translations[selectedLanguage].course.course1.CourseBulletPoint1}</p>
              <a
                href="https://www.iim.fr/cursus/bachelor-premiere-annee/"
                target="_blank"
                rel="noreferrer"
                className="MouseHoverEffect"
              >
                {translations[selectedLanguage].course.course1.SkillsList}
              </a>
              <p>{translations[selectedLanguage].course.course1.CourseBulletPoint2}</p>
              <a
                href="https://www.iim.fr/cursus/bachelor-coding-digital-innovation/"
                target="_blank"
                rel="noreferrer"
                className="MouseHoverEffect"
              >
                {translations[selectedLanguage].course.course1.SkillsList}
              </a>
              <p>{translations[selectedLanguage].course.course1.CourseBulletPoint3}</p>
              <a
                href="https://www.iim.fr/cursus/mastere-ingenierie-web-mobile/"
                target="_blank"
                rel="noreferrer"
                className="MouseHoverEffect"
              >
                {translations[selectedLanguage].course.course1.SkillsList}
              </a>
            </div>
            <p className={styles.parcourElmtDate}>{translations[selectedLanguage].course.course1.CourseDate}</p>
          </div>
        </div>
        <div className={`${styles.parcourElmt} ${styles.parcourElmt2} parcourElmt2Right`}>
          <div className={styles.parcourElmtChild}>
            <h3>
              {translations[selectedLanguage].course.course2.CourseNamept1}
              <a href="https://groupe-coriance.fr/" target="_blank" rel="noreferrer">
                Coriance
              </a>
              {translations[selectedLanguage].course.course2.CourseNamept2}
            </h3>
            <div className={styles.parcourElmtDetails}>
              <p>{translations[selectedLanguage].course.course2.CourseBulletPoint1}</p>
              <p>{translations[selectedLanguage].course.course2.CourseBulletPoint2}</p>
              <p>{translations[selectedLanguage].course.course2.CourseBulletPoint3}</p>
              <p>{translations[selectedLanguage].course.course2.CourseBulletPoint4}</p>
            </div>
            <p className={styles.parcourElmtDate}>{translations[selectedLanguage].course.course2.CourseDate}</p>
          </div>
        </div>
        <div className={`${styles.parcourElmt} ${styles.parcourElmt3} parcourElmt3Left`}>
          <div className={styles.parcourElmtChild}>
            <h3>
              {translations[selectedLanguage].course.course3.CourseNamept1}
              <a href="https://www.altusgroup.com/" target="_blank" rel="noreferrer">
                Altus group
              </a>{' '}
              {translations[selectedLanguage].course.course3.CourseNamept2}
            </h3>
            <div className={styles.parcourElmtDetails}>
              <p>{translations[selectedLanguage].course.course3.CourseBulletPoint1}</p>
              <p>{translations[selectedLanguage].course.course3.CourseBulletPoint2}</p>
              <p>{translations[selectedLanguage].course.course3.CourseBulletPoint3}</p>
              <p>{translations[selectedLanguage].course.course3.CourseBulletPoint4}</p>
            </div>
            <p className={styles.parcourElmtDate}>{translations[selectedLanguage].course.course3.CourseDate}</p>
          </div>
        </div>
        <div className={`${styles.parcourElmt} ${styles.parcourElmt4} parcourElmt4Right`}>
          <div className={styles.parcourElmtChild}>
            <h3>
              {translations[selectedLanguage].course.course4.CourseNamept1}
              <a href="https://www.altusgroup.com/" target="_blank" rel="noreferrer">
                Altus group
              </a>{' '}
              {translations[selectedLanguage].course.course4.CourseNamept2}
            </h3>
            <div className={styles.parcourElmtDetails}>
              <p>{translations[selectedLanguage].course.course4.CourseBulletPoint1}</p>
              <p>{translations[selectedLanguage].course.course4.CourseBulletPoint2}</p>
              <p>{translations[selectedLanguage].course.course4.CourseBulletPoint3}</p>
              <p>{translations[selectedLanguage].course.course4.CourseBulletPoint4}</p>
            </div>
            <p className={styles.parcourElmtDate}>{translations[selectedLanguage].course.course4.CourseDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Parcour.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
