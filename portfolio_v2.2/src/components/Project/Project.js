import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.module.css';
import translations from '../../translations/translations';

import ViolonFrancePic1 from '../../assets/project/violonfrance/ViolonFrance_img1.JPG';

export default function Project({ selectedLanguage, IndexProject }) {
  const projectKey = `project${IndexProject}`;

  function getProjectCompetence(ProjectID) {
    switch (ProjectID) {
      case 1:
        return (
          <div className={styles.competenceDivproject}>
            <p className={`${styles.txtCompetenceDivproject}`}>Wordpress</p>
            <p className={`${styles.txtCompetenceDivproject}`}>Test</p>
          </div>
        );
      case 2:
        return (
          <div className={styles.competenceDivproject}>
            <p className={`${styles.txtCompetenceDivproject}`}>Another Skill</p>
            <p className={`${styles.txtCompetenceDivproject}`}>Test</p>
          </div>
        );
      case 3:
        return (
          <div className={styles.competenceDivproject}>
            <p className={`${styles.txtCompetenceDivproject}`}>Yet Another Skill</p>
            <p className={`${styles.txtCompetenceDivproject}`}>Test</p>
          </div>
        );
      case 4:
        return (
          <div className={styles.competenceDivproject}>
            <p className={`${styles.txtCompetenceDivproject}`}>One More Skill</p>
            <p className={`${styles.txtCompetenceDivproject}`}>Test</p>
          </div>
        );
      default:
        return null;
    }
  }

  function getProjectImages(ProjectID) {
    switch (ProjectID) {
      case 1:
        return (
          <div className={styles.slider}>
            <img src={ViolonFrancePic1} alt="illustration 1 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img2.JPG" alt="illustration 2 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img3.JPG" alt="illustration 3 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img4.JPG" alt="illustration 4 du site" />
          </div>
        );
      case 2:
        return (
          <div className={styles.slider}>
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img1.JPG" alt="illustration 1 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img2.JPG" alt="illustration 2 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img3.JPG" alt="illustration 3 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img4.JPG" alt="illustration 4 du site" />
          </div>
        );
      case 3:
        return (
          <div className={styles.slider}>
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img1.JPG" alt="illustration 1 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img2.JPG" alt="illustration 2 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img3.JPG" alt="illustration 3 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img4.JPG" alt="illustration 4 du site" />
          </div>
        );
      case 4:
        return (
          <div className={styles.slider}>
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img1.JPG" alt="illustration 1 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img2.JPG" alt="illustration 2 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img3.JPG" alt="illustration 3 du site" />
            <img src="img/projectContent/ViolonFrance/png/ViolonFrance_img4.JPG" alt="illustration 4 du site" />
          </div>
        );
      default:
        return null;
    }
  }

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

        <div className={styles.linkytbContainer}>{translations[selectedLanguage].project[projectKey].ProjectVideo}</div>

        <div className={styles.SliderEtDescContainer}>
          <div className={styles.sliderContainer}>{getProjectImages(IndexProject)}</div>
        </div>

        <div className={styles.divCompetenceDivproject}>{getProjectCompetence(IndexProject)}</div>

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
