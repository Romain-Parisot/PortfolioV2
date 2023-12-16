import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';
import styles from './Project.module.css';
import translations from '../../translations/translations';

// SwipperBar Icons
import ExpandIcon from '../../assets/project/SwipperBar/expand.png';
import CrossIcon from '../../assets/project/SwipperBar/cross.png';

// ViolonFrance Pictures
import ViolonFrancePic1 from '../../assets/project/violonFrance/ViolonFrance_img1.JPG';
import ViolonFrancePic2 from '../../assets/project/violonFrance/ViolonFrance_img2.JPG';
import ViolonFrancePic3 from '../../assets/project/violonFrance/ViolonFrance_img3.JPG';
import ViolonFrancePic4 from '../../assets/project/violonFrance/ViolonFrance_img4.JPG';

// plessisRobinson Pictures
import PlessisRobinsonPic1 from '../../assets/project/plessisRobinson/Plessis-Robinson_img1.png';
import PlessisRobinsonPic2 from '../../assets/project/plessisRobinson/Plessis-Robinson_img2.png';
import PlessisRobinsonPic3 from '../../assets/project/plessisRobinson/Plessis-Robinson_img3.png';
import PlessisRobinsonPic4 from '../../assets/project/plessisRobinson/Plessis-Robinson_img4.png';

const initialBaseProjectsList = [
  {
    name: 'ViolonFrance',
    picture: [ViolonFrancePic1, ViolonFrancePic2, ViolonFrancePic3, ViolonFrancePic4],
  },
  {
    name: 'PlessisRobinson',
    picture: [PlessisRobinsonPic1, PlessisRobinsonPic2, PlessisRobinsonPic3, PlessisRobinsonPic4],
  },
  {
    name: 'Project 3',
    picture: [ViolonFrancePic1, ViolonFrancePic2, ViolonFrancePic3, ViolonFrancePic4],
  },
  {
    name: 'Project 4',
    picture: [ViolonFrancePic1, ViolonFrancePic2, ViolonFrancePic3, ViolonFrancePic4],
  },
];
const alredyRemoved = [];
let baseProjectsList = initialBaseProjectsList;
// This fixes issues with updating projectsList state forcing it to use the current state and not the state that was active when the card was created.

export default function ProjectsSwipper({ selectedLanguage }) {
  const [projectsList, setProjectsList] = useState(initialBaseProjectsList);
  const [indexProject1, setIndexProject1] = useState(0);

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

  const handleClickNextPicture = next => () => {
    console.log('next', next);
    if (next) {
      if (indexProject1 === projectsList[0].picture.length - 1) {
        setIndexProject1(0);
      } else {
        setIndexProject1(prevIndex => prevIndex + 1);
      }
    }
    if (!next) {
      if (indexProject1 === 0) {
        setIndexProject1(projectsList[0].picture.length - 1);
      } else {
        setIndexProject1(prevIndex => prevIndex - 1);
      }
    }
    console.log(indexProject1);
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
                backgroundImage: `url(${project.picture[indexProject1]})`,
              }}
            >
              <div className={`${styles.swipper_click} MouseHoverEffect`}>
                <div
                  role="button"
                  className={`${styles.swipper_previous_pic}`}
                  onClick={handleClickNextPicture(false)}
                  onKeyDown={k => k.key === 'Enter' && handleClickNextPicture(false)}
                  tabIndex={0}
                  aria-label="Previous Picture"
                />
                <div
                  role="button"
                  className={`${styles.swipper_next_pic}`}
                  onClick={handleClickNextPicture(true)}
                  onKeyDown={k => k.key === 'Enter' && handleClickNextPicture(true)}
                  tabIndex={0}
                  aria-label="Next Picture"
                />
              </div>
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
          <button
            type="button"
            className={`${styles.button_swipper_bar} MouseHoverEffect`}
            onClick={() => swipe('left')}
          >
            <img src={CrossIcon} alt="Cross Icon" className={`${styles.img_swipper_bar}`} />
          </button>
        </div>
        {/* <div className={`${styles.container_middle_button}`}>Mid</div> */}
        <div className={`${styles.container_button_expand}`}>
          <button
            type="button"
            className={`${styles.button_swipper_bar} MouseHoverEffect`}
            onClick={() => swipe('right')}
          >
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
