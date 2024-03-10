import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';
import styles from './contact.module.css';
import translations from '../../translations/translations';
import Footer from '../PositionFixedComponents/Footer/Footer';
import ConfirmationSvg from './ConfirmationSvg';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ selectedLanguage }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const containerRef = useRef(null);

  // gsap animations
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

  // reset form data
  const resetFormData = () => {
    setUserName('');
    setUserEmail('');
    setUserMessage('');
  };

  // mail service
  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      userName,
      userEmail,
      userMessage,
    };

    fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response.json());
    // .then(responseData => {
    //   if (responseData.error) {
    //     console.error('Error:', responseData.error);
    //   } else {
    //     console.log(responseData);
    //   }
    // })
    // .catch(error => {
    //   console.error('Error:', JSON.stringify(error, null, 2));
    // });

    setShowPopup(true);
    resetFormData();
    setTimeout(() => setShowPopup(false), 2000);
  };
  return (
    <Element name="contact">
      <div className={`${showPopup ? styles.popupAnim : ''} ${styles.popup}`}>
        <ConfirmationSvg />
        <p>{translations[selectedLanguage].contact.form.submitted}</p>
      </div>
      <section id="contact" className={`${styles.contact}`} ref={containerRef}>
        <p className="fromLeftAnimation">{translations[selectedLanguage].contact.description}</p>
        <div className={`${styles.contact_div} fromTopAnimation`}>
          <form method="POST" onSubmit={handleSubmit}>
            <div className={`${styles.contact_form_field}`}>
              <label htmlFor="name">{translations[selectedLanguage].contact.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userName}
                onChange={e => setUserName(e.target.value)}
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
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
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
                value={userMessage}
                onChange={e => setUserMessage(e.target.value)}
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
