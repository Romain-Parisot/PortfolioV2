import React, { useState, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TinderCard from 'react-tinder-card';

// material-ui
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';

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

// eslint-disable-next-line react/jsx-props-no-spreading
const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled(props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function ProjectsSwipper({ selectedLanguage }) {
  const [currentIndex, setCurrentIndex] = useState(initialBaseProjectsList.length - 1);
  const [indexProjectPic1, setIndexProjectPic1] = useState(0);
  const [projectLiked, setProjectLiked] = useState(false);
  const [delayedProjectLiked, setDelayedProjectLiked] = useState(false);
  const [projectLikedIndex, setProjectLikedIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

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

  useEffect(() => {
    if (projectLiked) {
      const timeoutId = setTimeout(() => {
        setDelayedProjectLiked(true);
      }, 900);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [projectLiked]);

  // Control accordion

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const matches = useMediaQuery('(min-width:1100px)');
  const matches2 = useMediaQuery('(min-width:900px)');

  return (
    <div>
      <div className={`${styles.BeforeLikeContainer} ${projectLiked ? styles.AfterLikeContainer : null}`}>
        {projectLikedIndex !== null && (
          <div className={`${styles.LikedContainer} ${delayedProjectLiked ? styles.AfterLikedContainer : null}`}>
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
                    onMouseOver={matches2 ? () => handleMouseOver(index) : null}
                    onMouseLeave={matches2 ? handleMouseLeave : null}
                    onFocus={matches2 ? () => setSelectedImageIndex(index) : null}
                  />
                ))}
              </div>
              <div className={styles.contentDescriptionContainer}>
                {matches ? (
                  <h3>
                    {
                      translations[selectedLanguage].project[`project${ProjectNameOrder[projectLikedIndex]}`]
                        .ProjectDescription
                    }
                  </h3>
                ) : (
                  <Accordion
                    expanded={expanded === 'panel0'}
                    onChange={handleChange('panel0')}
                    className={styles.accordion}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel0-content" id="panel0-header">
                      <Typography>{translations[selectedLanguage].project.description}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      <Typography>
                        {
                          translations[selectedLanguage].project[`project${ProjectNameOrder[projectLikedIndex]}`]
                            .ProjectDescription
                        }
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )}
                <div>
                  <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    className={styles.accordion}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                      <Typography>{translations[selectedLanguage].project.projectOverview}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      <Typography>
                        {
                          translations[selectedLanguage].project[`project${ProjectNameOrder[projectLikedIndex]}`]
                            .ProjectOverview
                        }
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    className={styles.accordion}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                      <Typography>{translations[selectedLanguage].project.usedLanguages}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      <Typography>
                        {
                          translations[selectedLanguage].project[`project${ProjectNameOrder[projectLikedIndex]}`]
                            .ProjectUsedLanguages
                        }
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                    className={styles.accordion}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                      <Typography>{translations[selectedLanguage].project.teamAndCollaborators}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      <Typography>
                        {
                          translations[selectedLanguage].project[`project${ProjectNameOrder[projectLikedIndex]}`]
                            .ProjectTeamAndCollaborators
                        }
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                    className={styles.accordion}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
                      <Typography>{translations[selectedLanguage].project.myRoleAndRealization}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      <Typography>
                        {
                          translations[selectedLanguage].project[`project${ProjectNameOrder[projectLikedIndex]}`]
                            .ProjectMyRoleAndRealization
                        }
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === 'panel5'}
                    onChange={handleChange('panel5')}
                    className={styles.accordion}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
                      <Typography>{translations[selectedLanguage].project.whatILearned}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      <Typography>
                        {
                          translations[selectedLanguage].project[`project${ProjectNameOrder[projectLikedIndex]}`]
                            .ProjectWhatILearned
                        }
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`${styles.projects_swipper} ${!projectLiked ? styles.margin_bottom_0 : ''}`}>
        <div className={`${styles.swipper_card_container}`}>
          {initialBaseProjectsList.map((project, index) => (
            <TinderCard
              ref={childRefs[index]}
              className={`${styles.swipper_card}`}
              key={`${project.code}`}
              onSwipe={dir => {
                swiped(index);
                if (dir === 'right') {
                  setProjectLiked(true);
                  setProjectLikedIndex(currentIndex);
                }
              }}
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
