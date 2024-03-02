import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';
import styles from './Project.module.css';
import translations from '../../translations/translations';

// SwipperBar Icons
import ExpandIcon from '../../assets/project/SwipperBar/expand.png';
import CrossIcon from '../../assets/project/SwipperBar/cross.png';
// import ThumbsUpIcon from '../../assets/project/SwipperBar/thumbsUp.png';
import UndoIcon from '../../assets/project/SwipperBar/undoArrow.png';

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

export default function ProjectsSwipper({ selectedLanguage }) {
  const [currentIndex, setCurrentIndex] = useState(initialBaseProjectsList.length - 1);
  const [indexProjectPic1, setIndexProjectPic1] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () =>
      Array(initialBaseProjectsList.length)
        .fill(0)
        .map(() => React.createRef()),
    [],
  );
  const updateCurrentIndex = val => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const canGoBack = currentIndex < initialBaseProjectsList.length - 1;
  const canSwipe = currentIndex >= 0;
  const swiped = index => {
    updateCurrentIndex(index - 1);
  };
  const outOfFrame = (name, index) => {
    console.log(`${name} (${index}) left the screen!`, currentIndexRef.current);
    if (currentIndexRef.current >= index) {
      childRefs[index].current.restoreCard();
    }
  };
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  const debouncedOutOfFrame = debounce(outOfFrame, 300);
  const swipe = async dir => {
    if (canSwipe && currentIndex < initialBaseProjectsList.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const handleClickNextPicture = next => () => {
    if (next) {
      if (indexProjectPic1 === initialBaseProjectsList[0].picture.length - 1) {
        setIndexProjectPic1(0);
      } else {
        setIndexProjectPic1(prevIndex => prevIndex + 1);
      }
    }
    if (!next) {
      if (indexProjectPic1 === 0) {
        setIndexProjectPic1(initialBaseProjectsList[0].picture.length - 1);
      } else {
        setIndexProjectPic1(prevIndex => prevIndex - 1);
      }
    }
  };

  // Like Counter

  // const [isDisabled, setIsDisabled] = useState(false);

  // const apiPostLike = async index => {
  //   const response = await fetch('/api/incrementLike', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       code: initialBaseProjectsList[index].code,
  //     }),
  //   });
  //   const data = await response.json();
  //   console.log('Post', data);
  //   return data;
  // };
  // const apiGetLike = async () => {
  //   const response = await fetch('/api/incrementLike', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const data = await response.json();
  //   console.log('Get', data);
  //   return data;
  // };

  // const [likeCounterList, setLikeCounterList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchLikes = async () => {
  //     const data = await apiGetLike();
  //     const list = [];
  //     for (let i = 0; i < data.length; i += 1) {
  //       list.push(data[i].like);
  //     }
  //     setLikeCounterList(list);
  //     setLoading(false);
  //   };
  //   fetchLikes();
  // }, []);

  // const handleClickIncrement = index => async () => {
  //   setIsDisabled(true);
  //   const data = await apiPostLike(index);
  //   console.log('data increment', await data);

  //   const list = [];
  //   for (let i = 0; i < data.length; i += 1) {
  //     list.push(data[i].like);
  //   }
  //   console.log('Before increment', list);
  //   setLikeCounterList(list);
  //   setTimeout(() => {
  //     setIsDisabled(false);
  //   }, 2000);
  // };

  return (
    <div className={`${styles.projects_swipper}`}>
      <div className={`${styles.swipper_card_container}`}>
        {initialBaseProjectsList.map((project, index) => (
          <TinderCard
            ref={childRefs[index]}
            className={`${styles.swipper_card}`}
            key={`${project.code}`}
            onSwipe={() => swiped(index)}
            onCardLeftScreen={() => debouncedOutOfFrame(project.code, index)}
          >
            <div
              className={`${styles.card}`}
              style={{
                backgroundImage: `url(${project.picture[indexProjectPic1]})`,
              }}
            >
              {/* <div className={`${styles.swipper_like_counter}`}>
                {loading ? <p>...</p> : <p>{likeCounterList[index]}</p>}
              </div> */}
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
        <div className={`${styles.container_middle_button} ${canGoBack ? '' : styles.opacity50}`}>
          <button
            type="button"
            className={`${styles.button_swipper_bar} ${canGoBack ? '' : 'MouseHoverEffect'}`}
            onClick={() => goBack()}
          >
            <img src={UndoIcon} alt="Undo Icon" className={`${styles.img_swipper_bar}`} />
          </button>
        </div>
        {/* <div className={`${styles.container_middle_button}`}>
          <button
            type="button"
            className={`${styles.button_swipper_bar} MouseHoverEffect`}
            onClick={handleClickIncrement(indexProject)}
            disabled={isDisabled}
          >
            <img src={ThumbsUpIcon} alt="Thumbs Up Icon" className={`${styles.img_swipper_bar}`} />
          </button>
        </div> */}
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
