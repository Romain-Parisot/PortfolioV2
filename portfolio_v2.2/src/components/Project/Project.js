import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.module.css';
import translations from '../../translations/translations';

export default function Project({ selectedLanguage, IndexProject }) {
  const projectKey = `project${IndexProject}`;
  return (
    <div className={`${styles.project}`}>
      {/* before & after are here */}
      <div className={styles.projectcontainer}>
        <div className={styles.timeproject}>
          <p>{translations[selectedLanguage].project[projectKey].ProjectTime}</p>
        </div>

        <div className={styles.personsproject}>
          <p className={`${styles.txtPersonsproject} ${styles.txtPersonsprojectBig}`}>
            {translations[selectedLanguage].project[projectKey].ProjectPersons}
          </p>
        </div>

        <h3 className={styles.titleDivproject}>{translations[selectedLanguage].project[projectKey].ProjectName}</h3>
        <p className={styles.descriptionDivproject}>
          {translations[selectedLanguage].project[projectKey].ProjectDescription}
        </p>
        <div className={styles.divCompetenceDivproject}>
          <div className={styles.competenceDivproject}>
            <p className={`${styles.txtCompetenceDivproject} ${styles.txtCompetenceDivprojectBig}`}>
              {translations[selectedLanguage].project[projectKey].ProjectCompetence}
            </p>
          </div>
        </div>

        <div className={styles.linkytbContainer}>{translations[selectedLanguage].project[projectKey].ProjectVideo}</div>

        <div className={styles.SliderEtDescContainer}>
          <div className={styles.sliderContainer}>
            <div className={styles.slider}>
              <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img1.JPG" alt="illustration 1 du site" />
              <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img2.JPG" alt="illustration 2 du site" />
              <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img3.JPG" alt="illustration 3 du site" />
              <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img4.JPG" alt="illustration 4 du site" />
            </div>
          </div>
        </div>

        <div className={styles.DateProject}>
          <p className={styles.txtDateProject}>{translations[selectedLanguage].project[projectKey].ProjectDate}</p>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  IndexProject: PropTypes.number.isRequired,
};
