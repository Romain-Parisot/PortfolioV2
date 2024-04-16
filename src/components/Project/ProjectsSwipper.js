import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';

// material-ui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './Project.module.css';
import translations from '../../translations/translations';

// SwipperBar Icons
import ExpandIcon from '../../assets/project/SwipperBar/expand.webp';
import CrossIcon from '../../assets/project/SwipperBar/cross.webp';
// import ThumbsUpIcon from '../../assets/project/SwipperBar/thumbsUp.webp';
import UndoIcon from '../../assets/project/SwipperBar/undoArrow.webp';

// ViolonFrance Pictures
import ViolonFrancePic1 from '../../assets/project/violonFrance/ViolonFrance_img1.webp';
import ViolonFrancePic2 from '../../assets/project/violonFrance/ViolonFrance_img2.webp';
import ViolonFrancePic3 from '../../assets/project/violonFrance/ViolonFrance_img3.webp';
import ViolonFrancePic4 from '../../assets/project/violonFrance/ViolonFrance_img4.webp';

// MousdikPianos Pictures

import MousdikPianosPic1 from '../../assets/project/mousdikpianos/MousdikPianos_img1.webp';
import MousdikPianosPic2 from '../../assets/project/mousdikpianos/MousdikPianos_img2.webp';
import MousdikPianosPic3 from '../../assets/project/mousdikpianos/MousdikPianos_img3.webp';
import MousdikPianosPic4 from '../../assets/project/mousdikpianos/MousdikPianos_img4.webp';

// plessisRobinson Pictures
import PlessisRobinsonPic1 from '../../assets/project/plessisRobinson/Plessis-Robinson_img1.webp';
import PlessisRobinsonPic2 from '../../assets/project/plessisRobinson/Plessis-Robinson_img2.webp';
import PlessisRobinsonPic3 from '../../assets/project/plessisRobinson/Plessis-Robinson_img3.webp';
import PlessisRobinsonPic4 from '../../assets/project/plessisRobinson/Plessis-Robinson_img4.webp';

// wikifilms Pictures
import WikifilmsPic1 from '../../assets/project/wikiFilms/Wikifilm_img1.webp';
import WikifilmsPic2 from '../../assets/project/wikiFilms/Wikifilm_img2.webp';
import WikifilmsPic3 from '../../assets/project/wikiFilms/Wikifilm_img3.webp';
import WikifilmsPic4 from '../../assets/project/wikiFilms/Wikifilm_img4.webp';
import CrossSvg from './CrossSvg';

const initialBaseProjectsList = [
  {
    code: 'WK',
    picture: [WikifilmsPic1, WikifilmsPic2, WikifilmsPic3, WikifilmsPic4],
  },
  {
    code: 'PR',
    picture: [PlessisRobinsonPic1, PlessisRobinsonPic2, PlessisRobinsonPic3, PlessisRobinsonPic4],
  },
  {
    code: 'MP',
    picture: [MousdikPianosPic1, MousdikPianosPic2, MousdikPianosPic3, MousdikPianosPic4],
  },
  {
    code: 'VF',
    picture: [ViolonFrancePic1, ViolonFrancePic2, ViolonFrancePic3, ViolonFrancePic4],
  },
];

export default function ProjectsSwipper({ selectedLanguage }) {
  const [currentIndex, setCurrentIndex] = useState(initialBaseProjectsList.length - 1);
  const [indexProjectPic1, setIndexProjectPic1] = useState(0);
  const [projectLiked, setProjectLiked] = useState(false);
  const [projectLikedIndex, setProjectLikedIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

  // this is the order of the projects name, instead of editing all the translations file to modify the order of the projects, i can just change the order of the array here
  const ProjectNameOrder = [4, 3, 1, 2];

  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  const handleMouseOver = async index => {
    if (!isHovering) {
      setIsHovering(true);
      setSelectedImageIndex(index);
      await sleep(100);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div className={`${styles.BeforeLikeContainer} ${projectLiked ? styles.AfterLikeContainer : null}`}>
        {projectLikedIndex !== null && (
          <div className={styles.LikedContainer}>
            <div className={styles.headerContainer}>
              <h2>
                {translations[selectedLanguage].project[`project${ProjectNameOrder[projectLikedIndex]}`].ProjectName}
              </h2>
              <button
                type="button"
                className={`${styles.button_close_liked_project} MouseHoverEffect`}
                onClick={() => setProjectLiked(false)}
              >
                <CrossSvg />
              </button>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.imageGalleryContainer}>
                {initialBaseProjectsList[projectLikedIndex].picture.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt="project"
                    className={index === selectedImageIndex ? styles.selectedGalleryImage : null}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
              <div className={styles.contentDescriptionContainer}>
                <h3>
                  Et fugiat pariatur reprehenderit ut eu incididunt culpa eu ipsum ipsum id. Enim aliquip nulla nulla
                  est tempor proident culpa labore. Nulla non aliquip reprehenderit quis aliquip anim ad fugiat ea
                  proident et pariatur mollit.
                </h3>
                <div>
                  <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                      <Typography>Expanded by default</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                      <Typography>Header</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
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
                    className={`${styles.swipper_click_pic}`}
                    onClick={handleClickNextPicture(false)}
                    onKeyDown={k => k.key === 'Enter' && handleClickNextPicture(false)}
                    tabIndex={0}
                    aria-label="Previous Picture"
                  />
                  <div
                    role="button"
                    className={`${styles.swipper_click_pic}`}
                    onClick={handleClickNextPicture(true)}
                    onKeyDown={k => k.key === 'Enter' && handleClickNextPicture(true)}
                    tabIndex={0}
                    aria-label="Next Picture"
                  />
                </div>
                <div className={`${styles.swipper_card_overlay}`}>
                  <p className={`${styles.swipper_card_text}`}>
                    {translations[selectedLanguage].project[`project${ProjectNameOrder[index]}`].ProjectName}
                  </p>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className={`${styles.swipper_buttons_container}`}>
          <div>
            <button
              type="button"
              className={`${styles.button_swipper_bar} MouseHoverEffect`}
              onClick={() => swipe('left')}
            >
              <img src={CrossIcon} alt="Cross Icon" className={`${styles.img_swipper_bar}`} />
            </button>
          </div>
          <div className={`${styles.container_middle_button} ${canGoBack ? '' : styles.opacity50} `}>
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
              onClick={() => {
                swipe('right');
                setProjectLiked(true);
                setProjectLikedIndex(currentIndex);
              }}
            >
              <img src={ExpandIcon} alt="Expand Icon" className={`${styles.img_swipper_bar}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectsSwipper.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
