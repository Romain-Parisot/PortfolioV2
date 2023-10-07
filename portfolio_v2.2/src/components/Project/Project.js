import React from 'react';
import styles from './Project.module.css';

export default function Project() {
  return (
    <section className={styles.project}>
      <h2>Mes projets :</h2>
      <div className={styles.DefaultViewProject}>
        <div className={`${styles.DefaultViewProjectChild} ${styles.dpnone} ${styles.opacityNull}`}>
          <p>Retourner a la disposition par defaut</p>
        </div>
      </div>
      <div className={styles.Galleryproject}>
        <div className={`${styles.divproject} ${styles.divproject1}`}>
          {/* before & after here */}
          <div className={styles.divprojectChild}>
            <div className={styles.timeproject}>
              <p className={`${styles.txtTimeproject} ${styles.txtTimeprojectBig}`}>90 ~ 110 h</p>
            </div>
            <div className={styles.personsproject}>
              <p className={`${styles.txtPersonsproject} ${styles.txtPersonsprojectBig}`}>10 Pers.</p>
            </div>
            <h3 className={styles.titleDivproject}>Mousdik Pianos</h3>
            <p className={styles.descriptionDivproject}>
              &ldquo;Un client qui avait besoin de digitaliser une partie de son activité de revente et de rénovation de
              pianos.&ldquo;
            </p>
            <div className={styles.divCompetenceDivproject}>
              <div className={styles.competenceDivproject}>
                <p className={`${styles.txtCompetenceDivproject} ${styles.txtCompetenceDivprojectBig}`}>Wordpress</p>
              </div>
            </div>

            <div className={styles.linkytbContainer}>{/* link ytb */}</div>

            <div className={styles.SliderEtDescContainer}>
              <div className={styles.descriptionsliderdesactivate}>
                <p>a huge description here</p>
              </div>
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
              <p className={styles.txtDateProject}>03-2022 / 04-2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
