import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';
import styles from './Project.module.css';
import translations from '../../translations/translations';

import ViolonFrancePic1 from '../../assets/project/violonfrance/ViolonFrance_img1.JPG';
import ExpandIcon from '../../assets/project/SwipperBar/expand.png';
import CrossIcon from '../../assets/project/SwipperBar/cross.png';

export default function ProjectsSwipper({ selectedLanguage }) {
  let projects = [
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

  const [characters, setCharacters] = useState(projects);
  const childRefs = useMemo(
    () =>
      Array(projects.length)
        .fill(0)
        .map(() => React.createRef()),
    [],
  );

  const swiped = nameToDelete => {
    alredyRemoved.push(nameToDelete);
  };

  const outOfFrame = name => {
    projects = projects.filter(project => project.name !== name);
    setCharacters(projects);
  };

  const swipe = dir => {
    const cardsLeft = characters.filter(person => !alredyRemoved.includes(person.name));
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = projects.map(person => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alredyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };
  return (
    <div className={`${styles.projects_swipper}`}>
      <div className={`${styles.swipper_card_container}`}>
        {projects.map((project, index) => {
          let zIndexClass = '';
          if (index === 0) {
            zIndexClass = styles.zIndex1;
          } else if (index === 1) {
            zIndexClass = styles.zIndex2;
          } else if (index === 2) {
            zIndexClass = styles.zIndex3;
          } else if (index === 3) {
            zIndexClass = styles.zIndex4;
          }
          return (
            <TinderCard
              ref={childRefs[index]}
              className={`${styles.swipper_card} ${zIndexClass}`}
              key={project.name}
              onSwipe={dir => swiped(dir, project.name)}
              onCardLeftScreen={() => outOfFrame(project.name)}
            >
              <img className={`${styles.swipper_card_img}`} src={ViolonFrancePic1} alt="" />
              <div className={`${styles.swipper_card_overlay}`}>
                <p className={`${styles.swipper_card_text}`}>
                  {translations[selectedLanguage].project[`project${index + 1}`].ProjectName}
                </p>
              </div>
            </TinderCard>
          );
        })}
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
