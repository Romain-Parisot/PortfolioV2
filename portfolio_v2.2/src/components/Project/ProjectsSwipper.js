import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';
import styles from './Project.module.css';
import translations from '../../translations/translations';

import ViolonFrancePic1 from '../../assets/project/violonfrance/ViolonFrance_img1.JPG';
import ExpandIcon from '../../assets/project/SwipperBar/expand.png';
import CrossIcon from '../../assets/project/SwipperBar/cross.png';

const initialBaseProjectsList = [
  {
    name: 'Project 1',
  },
  {
    name: 'Project 2',
  },
  {
    name: 'Project 3',
  },
  {
    name: 'Project 4',
  },
];
const alredyRemoved = [];
let baseProjectsList = initialBaseProjectsList;
// This fixes issues with updating projectsList state forcing it to use the current state and not the state that was active when the card was created.

export default function ProjectsSwipper({ selectedLanguage }) {
  const [projectsList, setProjectsList] = useState(initialBaseProjectsList);

  const childRefs = useMemo(
    () =>
      Array(initialBaseProjectsList.length)
        .fill(0)
        .map(() => React.createRef()),
    [],
  );

  const swiped = nameToDelete => {
    alredyRemoved.push(nameToDelete);
  };

  const outOfFrame = name => {
    baseProjectsList = baseProjectsList.filter(project => project.name !== name);
    setProjectsList(baseProjectsList);
  };

  const swipe = dir => {
    const projectsLeft = projectsList.filter(project => !alredyRemoved.includes(project.name));
    if (projectsLeft.length) {
      const toBeRemoved = projectsLeft[projectsLeft.length - 1].name;
      const index = initialBaseProjectsList.map(project => project.name).indexOf(toBeRemoved);
      alredyRemoved.push(toBeRemoved);
      childRefs[index].current.swipe(dir);
    }
  };
  return (
    <div className={`${styles.projects_swipper}`}>
      <div className={`${styles.swipper_card_container}`}>
        {projectsList.map((project, index) => (
          <TinderCard
            ref={childRefs[index]}
            className={`${styles.swipper_card}`}
            key={project.name}
            onSwipe={dir => swiped(dir, project.name)}
            onCardLeftScreen={() => outOfFrame(project.name)}
          >
            <div
              className={`${styles.card}`}
              style={{
                backgroundImage: `url(${ViolonFrancePic1})`,
              }}
            >
              <div className={`${styles.swipper_card_overlay}`}>
                <p className={`${styles.swipper_card_text}`}>
                  {translations[selectedLanguage].project[`project${index + 1}`].ProjectName}
                </p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className={`${styles.swipper_buttons_container}`}>
        <div className={`${styles.container_button_close}`}>
          <button type="button" className={`${styles.button_swipper_bar}`} onClick={() => swipe('left')}>
            <img src={CrossIcon} alt="Cross Icon" className={`${styles.img_swipper_bar}`} />
          </button>
        </div>
        {/* <div className={`${styles.container_middle_button}`}>Mid</div> */}
        <div className={`${styles.container_button_expand}`}>
          <button type="button" className={`${styles.button_swipper_bar}`} onClick={() => swipe('right')}>
            <img src={ExpandIcon} alt="Expand Icon" className={`${styles.img_swipper_bar}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

ProjectsSwipper.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
