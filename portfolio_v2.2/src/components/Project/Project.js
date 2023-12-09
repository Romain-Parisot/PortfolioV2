import React from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';
import styles from './Project.module.css';
import translations from '../../translations/translations';

import ViolonFrancePic1 from '../../assets/project/violonfrance/ViolonFrance_img1.JPG';
import ExpandIcon from '../../assets/project/SwipperBar/expand.png';
import CrossIcon from '../../assets/project/SwipperBar/cross.png';

export default function Project({ selectedLanguage }) {
  function generateProjectElements() {
    const numberProject = 4;
    const projectElements = [];

    for (let index = 1; index < numberProject; index += 1) {
      projectElements.push(
        <div key={index} className={`${styles.swipper_element}`}>
          <div className={`${styles.swipper_image_container}`}>
            <img src={ViolonFrancePic1} alt="" />
            <p>{translations[selectedLanguage].project[`project${index}`].ProjectName}</p>
          </div>
          <div className={`${styles.swipper_buttons_container}`}>
            <div className={`${styles.container_button_close}`}>
              <button type="button" className={`${styles.button_swipper_bar}`}>
                <img src={CrossIcon} alt="Cross Icon" className={`${styles.img_swipper_bar}`} />
              </button>
            </div>
            <div className={`${styles.container_middle_button}`}>Mid</div>
            <div className={`${styles.container_button_expand}`}>
              <button type="button" className={`${styles.button_swipper_bar}`}>
                <img src={ExpandIcon} alt="Expand Icon" className={`${styles.img_swipper_bar}`} />
              </button>
            </div>
          </div>
        </div>,
      );
    }

    return projectElements;
  }

  return (
    <section id={`${styles.project}`}>
      <div className={`${styles.swipper_list_element}`}>{generateProjectElements()}</div>
    </section>
  );
}

Project.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
