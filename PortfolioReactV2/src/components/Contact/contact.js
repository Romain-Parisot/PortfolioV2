import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import styles from './contact.module.css';
import translations from '../../translations/translations';
import Footer from '../PositionFixedComponents/Footer/Footer';

export default function Contact({ selectedLanguage }) {
  return (
    <Element name="contact">
      <section id="contact" className={`${styles.contact}`}>
        <p>{translations[selectedLanguage].contact.description}</p>
        <div className={`${styles.contact_div}`}>
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
