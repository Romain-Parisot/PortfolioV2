import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';
import styles from './contact.module.css';
import translations from '../../translations/translations';
import Footer from '../PositionFixedComponents/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ selectedLanguage }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const fromTop = containerRef.current.querySelectorAll('.fromTopAnimation');
    const fromLeft = containerRef.current.querySelectorAll('.fromLeftAnimation');

    const animations = [
      { x: 0, y: -100 }, // from top
      { x: -100, y: 0 }, // from left
    ];

    fromTop.forEach(top => {
      gsap.fromTo(
        top,
        { x: animations[0].x, y: animations[0].y, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: top, start: 'top center' } },
      );
    });
    fromLeft.forEach(left => {
      gsap.fromTo(
        left,
        { x: animations[1].x, y: animations[1].y, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: left, start: 'top center' } },
      );
    });
  }, []);
  return (
    <Element name="contact">
      <section id="contact" className={`${styles.contact}`} ref={containerRef}>
        <p className="fromLeftAnimation">{translations[selectedLanguage].contact.description}</p>
        <div className={`${styles.contact_div} fromTopAnimation`}>
          <form action="#" method="post">
            <div className={`${styles.contact_form_field}`}>
              <label htmlFor="name">{translations[selectedLanguage].contact.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={translations[selectedLanguage].contact.form.placeholderName}
                required
                className={`${styles.contact_form_input}`}
              />
            </div>
            <div className={`${styles.contact_form_field}`}>
              <label htmlFor="email">{translations[selectedLanguage].contact.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={translations[selectedLanguage].contact.form.placeholderEmail}
                required
                className={`${styles.contact_form_input}`}
              />
            </div>
            <div className={`${styles.contact_form_field}`}>
              <label htmlFor="message">{translations[selectedLanguage].contact.form.message}</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder={translations[selectedLanguage].contact.form.placeholderMessage}
                required
                className={`${styles.contact_form_input}`}
              />
            </div>
            <div className={`${styles.contact_form_field_submit}`}>
              <button type="submit" className={`${styles.contact_form_submit}`}>
                {translations[selectedLanguage].contact.form.submit}
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </section>
    </Element>
  );
}

Contact.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
