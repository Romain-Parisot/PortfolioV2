import React, { useRef, useEffect } from 'react';
import styles from './AboutMeSvg.module.css';

export default function SportSvg() {
  const pathBodySport = useRef(null);
  const pathHeadSport = useRef(null);
  const pathWeightBigSport = useRef(null);
  const pathWeightSmallSport = useRef(null);

  const animate = () => {
    pathBodySport.current.classList.toggle(styles.path_body_sport_anim);
    pathHeadSport.current.classList.toggle(styles.path_head_sport_anim);
    pathWeightBigSport.current.classList.toggle(styles.path_weight_big_sport_anim);
    pathWeightBigSport.current.classList.toggle(styles.path_weight_big_sport);
    pathWeightSmallSport.current.classList.toggle(styles.path_weight_small_sport);
    pathWeightSmallSport.current.classList.toggle(styles.path_weight_small_sport_anim);
  };

  useEffect(() => {
    animate();
    // play the animation every 2 seconds
    const id = setInterval(animate, 2000);
    // clear the interval when the component is unmounted
    return () => clearInterval(id);
  }, []);
  return (
    <svg version="1.1" className={`${styles.aboutMeSvg} ${styles.sport_svg}`} viewBox="0 0 1000 1000">
      <path
        ref={pathBodySport}
        className={styles.path_body_sport}
        d="M496.09,1000c-9.45-5.4-19.72-9.77-28.13-16.47c-9.98-7.96-14.14-19.97-16.15-32.5c-13.89-86.35-27.78-172.69-41.68-259.03c-1.65-10.27-3.31-20.54-5.04-30.8c-6.84-40.49,19.83-77.41,60.68-81.31c44.04-4.2,88.24-6.68,132.4-9.47c38.64-2.44,77.32-4.27,115.98-6.39c1.14-0.06,2.27-0.28,3.41-0.42c0.14-0.92,0.27-1.85,0.41-2.77c-13.07-2.68-26.06-6.83-39.24-7.62c-13.73-0.82-19.6-6.17-23.63-19.44c-7.9-26.07-18.31-51.39-28.13-76.84c-2.15-5.57-1.56-9.24,2.08-13.97c10.01-13,19.29-26.56,28.86-39.89c-0.81-0.66-1.61-1.32-2.42-1.98c-14.16,12.51-28.39,24.95-42.48,37.55c-36.15,32.32-72.22,64.73-108.37,97.06c-23.18,20.73-48.49,22.02-73.58,3.75c-27.62-20.1-55.19-40.27-82.77-60.42c-2.32-1.69-4.51-3.55-7.63-6.01c29.59-21.04,50.19-48.36,62.43-82.47c17.34,10.59,33.97,20.75,51.52,31.47c8.53-9.58,17.15-19.17,25.65-28.85c42.09-47.93,84.1-95.93,126.25-143.81c30.81-34.99,73.93-35.74,109.78-5.93c41.92,34.86,76.89,75,102.65,122.73c35.42,65.62,61.32,134.86,72.46,208.93c5.4,35.86,0.92,71.14-14.99,103.79c-14.91,30.59-41.75,48.49-74.78,51.13c-35.84,2.86-72.12,0.39-108.2-0.16c-43.28-0.66-86.55-1.74-129.83-2.62c-2.55-0.05-5.1-0.01-8.97-0.01c0,4-0.1,7.43,0.01,10.85c2.12,63.43,4.14,126.86,6.45,190.28c1.53,42.01-5.8,54.4-43.53,71.65C510.42,1000,503.26,1000,496.09,1000z"
      />
      <path
        ref={pathHeadSport}
        className={styles.path_head_sport}
        d="M531.85,21.37c8.86,2.67,17.61,5.52,25.46,9.96C597,51,628.94,95,628.43,150.5c-5.07,52.86-33.31,91.21-84.01,109.82c-63.37,23.25-133.66-10.87-159.99-76.27c-29.86-74.17,7.03-141.61,80.34-163.07c0.12-0.04,0.24-0.07,0.37-0.11C479,16.22,501.24,10,531.85,21.37z"
      />
      <path d="M776.61,990.58c-19.85,0-39.71,0.17-59.56-0.04c-32.66-0.35-55.98-23.21-56.36-55.96c-0.43-36.45-0.41-72.91-0.01-109.35c0.36-32.79,23.3-55.7,56.24-56.05c40.03-0.42,80.07-0.42,120.09-0.01c33.22,0.34,55.73,22.82,56.1,55.93c0.4,36.45,0.4,72.91,0,109.35c-0.37,33.53-23.29,55.84-56.95,56.1C816.32,990.71,796.46,990.59,776.61,990.58z" />
      <path
        ref={pathWeightBigSport}
        className={styles.path_weight_big_sport}
        d="M391.64,340.19C390.38,419.56,326,482.54,247.4,481.31c-79.19-1.24-141.78-65.65-140.55-144.65c1.23-78.99,66.03-141.55,145.06-140.04C330.06,198.12,392.88,262.66,391.64,340.19z M249.18,422.28c46.14-0.03,83.09-36.79,83.32-82.91c0.23-46.54-36.87-83.85-83.37-83.83c-46.49,0.02-83.53,37.3-83.34,83.88C165.98,385.42,203.11,422.31,249.18,422.28z"
      />
      <path
        ref={pathWeightSmallSport}
        className={styles.path_weight_small_sport}
        d="M290.78,339.17c-0.17,22.63-19.34,41.58-41.87,41.4c-22.62-0.18-41.59-19.39-41.39-41.91c0.2-22.68,19.33-41.58,41.9-41.38C272.09,297.47,290.95,316.57,290.78,339.17z"
      />
    </svg>
  );
}
