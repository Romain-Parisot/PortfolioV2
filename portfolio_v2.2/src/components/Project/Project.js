import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';
import styles from './Project.module.css';
import translations from '../../translations/translations';

// import ViolonFrancePic1 from '../../assets/project/violonfrance/ViolonFrance_img1.JPG';
import ExpandIcon from '../../assets/project/SwipperBar/expand.png';
import CrossIcon from '../../assets/project/SwipperBar/cross.png';

export default function Project({ selectedLanguage }) {
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
    <section id={`${styles.project}`}>
      <div>
        <div className="cardContainer">
          {projects.map((project, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={project.name}
              onSwipe={dir => swiped(dir, project.name)}
              onCardLeftScreen={() => outOfFrame(project.name)}
            >
              <div className={`${styles.swipper_image_container}`}>
                {/* <img src={ViolonFrancePic1} alt="" /> */}
                <p>{translations[selectedLanguage].project[`project${index + 1}`].ProjectName}</p>
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
    </section>
  );
}

Project.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
