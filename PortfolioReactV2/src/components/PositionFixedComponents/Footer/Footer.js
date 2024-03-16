import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';
import MailSvg from './socialMediaSvg/MailSvg';
import GithubSvg from './socialMediaSvg/GithubSvg';
import LinkedinSvg from './socialMediaSvg/LinkedinSvg';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef(null);
  useEffect(() => {
    const fromTop = containerRef.current.querySelectorAll('.fromTopAnimation');
    const fromLeft = containerRef.current.querySelectorAll('.fromLeftAnimation');
    const fromRight = containerRef.current.querySelectorAll('.fromRightAnimation');

    const animations = [
      { x: 0, y: -100 }, // from top
      { x: -100, y: 0 }, // from left
      { x: 100, y: 0 }, // from right
    ];

    fromTop.forEach(top => {
      gsap.fromTo(
        top,
        { x: animations[0].x, y: animations[0].y, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: top.parentElement.parentElement, start: 'top bottom' },
        },
      );
    });
    fromLeft.forEach(left => {
      gsap.fromTo(
        left,
        { x: animations[1].x, y: animations[1].y, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: left.parentElement.parentElement, start: 'top bottom' },
        },
      );
    });
    fromRight.forEach(right => {
      gsap.fromTo(
        right,
        { x: animations[2].x, y: animations[2].y, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: right.parentElement.parentElement, start: 'top bottom' },
        },
      );
    });
  }, []);
  return (
    <footer ref={containerRef}>
      <span className={`${styles.barFooter}`} />
      <div className={`${styles.linkContainer}`}>
        <div className="fromLeftAnimation">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/romainparisot-/">
            <LinkedinSvg />
          </a>
        </div>
        <div className="fromTopAnimation">
          <a target="_blank" rel="noreferrer" href="https://github.com/Romain-Parisot">
            <GithubSvg />
          </a>
        </div>
        <div className="fromRightAnimation">
          <a target="_blank" rel="noreferrer" href="mailto:romainparisot.pro@gmail.com">
            <MailSvg />
          </a>
        </div>
      </div>
      <div className={`${styles.descSiteContainer}`}>
        <p className={`${styles.descSite} fromTopAnimation`}>Portfolio 2024 - Romain PARISOT</p>
        <Link className="MouseHoverEffect" to="/attribution">
          Attributions
        </Link>
      </div>
    </footer>
  );
}
