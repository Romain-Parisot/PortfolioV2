import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';
import styles from './Project.module.css';
import translations from '../../translations/translations';

// SwipperBar Icons
import ExpandIcon from '../../assets/project/SwipperBar/expand.png';
import CrossIcon from '../../assets/project/SwipperBar/cross.png';
import ThumbsUpIcon from '../../assets/project/SwipperBar/thumbsUp.png';

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
    code: 'VF',
    picture: [ViolonFrancePic1, ViolonFrancePic2, ViolonFrancePic3, ViolonFrancePic4],
  },
  {
    code: 'PR',
    picture: [PlessisRobinsonPic1, PlessisRobinsonPic2, PlessisRobinsonPic3, PlessisRobinsonPic4],
  },
  {
    code: 'P3',
    picture: [ViolonFrancePic1, ViolonFrancePic2, ViolonFrancePic3, ViolonFrancePic4],
  },
  {
    code: 'P4',
    picture: [ViolonFrancePic1, ViolonFrancePic2, ViolonFrancePic3, ViolonFrancePic4],
  },
];
const alredyRemoved = [];
let baseProjectsList = initialBaseProjectsList;
// This fixes issues with updating projectsList state forcing it to use the current state and not the state that was active when the card was created.

export default function ProjectsSwipper({ selectedLanguage }) {
  const apiPostLike = async index => {
    const response = await fetch('/api/incrementLike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: initialBaseProjectsList[index].code,
      }),
    });
    const data = await response.json();
    console.log('Post', data);
    return data;
  };
  const apiGetLike = async () => {
    const response = await fetch('/api/incrementLike', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Get', data);
    return data;
  };
  const [projectsList, setProjectsList] = useState(initialBaseProjectsList);
  const [indexProject, setIndexProject] = useState(0);
  const [likeCounterList, setLikeCounterList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLikes = async () => {
      const data = await apiGetLike();
      const list = [];
      for (let i = 0; i < data.length; i += 1) {
        list.push(data[i].like);
      }
      setLikeCounterList(list);
      setLoading(false);
    };
    fetchLikes();
  }, []);

  const [isDisabled, setIsDisabled] = useState(false);
  const [indexProjectPic1, setIndexProjectPic1] = useState(0);

  const childRefs = useMemo(
    () =>
      Array(initialBaseProjectsList.length)
        .fill(0)
        .map(() => React.createRef()),
    [],
  );

  const swiped = nameToDelete => {
    alredyRemoved.push(nameToDelete);
    if (initialBaseProjectsList.length - 1 >= indexProject) {
      setIndexProject(prevIndex => prevIndex + 1);
    }
    setIndexProject(prevIndex => prevIndex + 1);
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
    if (next) {
      if (indexProjectPic1 === projectsList[0].picture.length - 1) {
        setIndexProjectPic1(0);
      } else {
        setIndexProjectPic1(prevIndex => prevIndex + 1);
      }
    }
    if (!next) {
      if (indexProjectPic1 === 0) {
        setIndexProjectPic1(projectsList[0].picture.length - 1);
      } else {
        setIndexProjectPic1(prevIndex => prevIndex - 1);
      }
    }
  };

  const handleClickIncrement = index => async () => {
    setIsDisabled(true);
    const data = await apiPostLike(index);
    console.log('data increment', await data);

    const list = [];
    for (let i = 0; i < data.length; i += 1) {
      list.push(data[i].like);
    }
    console.log('Before increment', list);
    setLikeCounterList(list);
    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
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
                backgroundImage: `url(${project.picture[indexProjectPic1]})`,
              }}
            >
              <div className={`${styles.swipper_like_counter}`}>
                {loading ? <p>...</p> : <p>{likeCounterList[index]}</p>}
              </div>
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
        <div className={`${styles.container_middle_button}`}>
          <button
            type="button"
            className={`${styles.button_swipper_bar} MouseHoverEffect`}
            onClick={handleClickIncrement(indexProject)}
            disabled={isDisabled}
          >
            <img src={ThumbsUpIcon} alt="Thumbs Up Icon" className={`${styles.img_swipper_bar}`} />
          </button>
        </div>
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
