import React from 'react';
import styles from './BulletPointParcour.module.css';

export default function BulletPointParcour(index) {
  const className = `bulletPointParcour bulletPointParcour${index}`;
  return (
    <svg
      version="1.1"
      className={(className, `${styles.bulletPointParcour}`)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <path
        className={`${styles.pathBulletPointSideA}`}
        d="M207.38,515.6c1.07-164.76,134.96-294.94,300.75-291.41c6.83,0.15,13.73,0.12,20.46,1.07c16.97,2.4,29.15,17.47,27.58,33.45c-1.66,16.83-15.18,29.45-32.51,28.42c-37.19-2.19-73.26,1.66-108.23,15.31c-94.16,36.75-153.29,133.28-143.67,235.22c9.45,100.18,85.92,184.22,184.38,202.64c133.75,25.02,257.85-66.66,271.67-202.32c6.99-68.62-14.1-129.11-61.4-179.84c-7.8-8.37-14.51-16.96-13.36-29.08c1.25-13.15,8.03-22.79,20.65-27.04c12.8-4.31,24.28-1.34,33.9,8.51c35.26,36.1,60.22,78.26,73.39,126.99c44.78,165.71-57.72,330.6-226.26,364.4C396.6,833.64,238.19,723.98,212.8,564.98C210.19,548.65,209.15,532.06,207.38,515.6z"
      />
      <path
        className={`${styles.pathBulletPointSideB}`}
        d="M509.02,67.07c90.3,0.82,179.95,30.87,259.61,90.47c15.41,11.53,18.7,30.1,8.2,44.59c-10.44,14.41-29.5,17.25-44.96,5.72c-53.17-39.66-112.24-65.66-178-74.39c-104.34-13.85-199.39,10.44-284.49,72.84c-5.67,4.16-11.87,8.45-18.48,10.29c-14.79,4.12-29.46-3.5-35.61-16.96c-6.11-13.39-2.17-28.66,10.24-38.34c33.54-26.16,70.09-47.15,109.62-62.81C388.03,77.56,443.01,67.24,509.02,67.07z"
      />
      <path
        className={`${styles.pathBulletPointSideB}`}
        d="M116.84,465.2c0,29.86-2.39,59.95,0.43,89.54c9.81,102.88,55.74,187.64,133.65,255.11c29.96,25.95,63.87,45.66,100.29,61.33c6.85,2.94,13.71,7.87,18.26,13.69c8.46,10.79,7.12,25.46-1.36,36.2c-8.63,10.93-23.08,14.68-36.96,9.08c-64.12-25.85-119.43-64.41-165.33-116.13c-58.47-65.9-94.77-142.49-108.42-229.54c-6.53-41.68-7.06-83.6-1-125.43c2.41-16.63,17.04-27.81,33.22-26.32C106.45,434.27,118.79,448.31,116.84,465.2z"
      />
      <path
        className={`${styles.pathBulletPointSideB}`}
        d="M948.36,518.04C946.72,698.65,838,860.8,671.78,929.13c-15.52,6.38-29.93,3.78-39.23-7.1c-9.02-10.55-10.83-25.96-2.26-36.96c4.7-6.03,11.98-10.96,19.1-14.07c102.57-44.72,173.65-119.38,212.84-224.02c21.37-57.07,26.92-116.24,20.08-176.68c-2.27-20.08,8.5-35.05,26.72-37.39c18.01-2.31,32.54,9.51,34.9,29.73C946.08,481.03,946.94,499.57,948.36,518.04z"
      />
    </svg>
  );
}
