import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageSelector.module.css';

// Flags
import FlagArabLeague from './FlagSvg/FlagArab';
import FlagChina from './FlagSvg/FlagChina';
import FlagEngland from './FlagSvg/FlagEngland';
import FlagFrance from './FlagSvg/FlagFrance';
import FlagGermany from './FlagSvg/FlagGermany';
import FlagIndia from './FlagSvg/FlagIndia';
import FlagItaly from './FlagSvg/FlagItaly';
import FlagJapan from './FlagSvg/FlagJapan';
import FlagPortugal from './FlagSvg/FlagPortugal';
import FlagRussia from './FlagSvg/FlagRussia';
import FlagSpain from './FlagSvg/FlagSpain';

export default function LanguageSelector({ selectedLanguage, updateLanguage }) {
  const [showFlags, setShowFlags] = useState(true);
  const [showFlags2, setShowFlags2] = useState(true);
  const [flagSide, setFlagSide] = useState(false);

  useEffect(() => {
    if (flagSide) {
      setFlagSide(false);
      setShowFlags(!showFlags);
      setTimeout(() => {
        setShowFlags2(!showFlags2);
      }, 100);
    } else {
      setFlagSide(true);
      setShowFlags2(!showFlags2);
      setTimeout(() => {
        setShowFlags(!showFlags);
      }, 100);
    }
  }, [selectedLanguage]);

  const changeLanguage = language => {
    updateLanguage(language);
  };

  return (
    <div className={`${styles.btLanguageContainer}`}>
      <button
        type="button"
        onClick={() => {
          if (flagSide) {
            setFlagSide(false);
            setShowFlags(!showFlags);
            setTimeout(() => {
              setShowFlags2(!showFlags2);
            }, 100);
          } else {
            setFlagSide(true);
            setShowFlags2(!showFlags2);
            setTimeout(() => {
              setShowFlags(!showFlags);
            }, 100);
          }
        }}
        className="MouseHoverEffect"
      >
        {selectedLanguage === 'fr' && (
          <div>
            <FlagFrance alt="French flag" />
          </div>
        )}
        {selectedLanguage === 'en' && (
          <div>
            <FlagEngland alt="England flag" />
          </div>
        )}
        {selectedLanguage === 'de' && (
          <div>
            <FlagGermany alt="German flag" />
          </div>
        )}
        {selectedLanguage === 'es' && (
          <div>
            <FlagSpain alt="Spanish flag" />
          </div>
        )}
        {selectedLanguage === 'zh' && (
          <div>
            <FlagChina alt="Chinese flag" />
          </div>
        )}
        {selectedLanguage === 'hi' && (
          <div>
            <FlagIndia alt="Indian flag" />
          </div>
        )}
        {selectedLanguage === 'ru' && (
          <div>
            <FlagRussia alt="Russian flag" />
          </div>
        )}
        {selectedLanguage === 'ar' && (
          <div>
            <FlagArabLeague alt="Arab League flag" className={`${styles.flag}`} src={FlagArabLeague} />
          </div>
        )}
        {selectedLanguage === 'pt' && (
          <div>
            <FlagPortugal alt="Portuguese flag" />
          </div>
        )}
        {selectedLanguage === 'it' && (
          <div>
            <FlagItaly alt="Italian flag" />
          </div>
        )}
        {selectedLanguage === 'ja' && (
          <div>
            <FlagJapan alt="Japanese flag" />
          </div>
        )}
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('fr')}
        className={`${showFlags2 && selectedLanguage !== 'fr' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'fr' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagFrance alt="French flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`${showFlags2 && selectedLanguage !== 'en' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'en' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagEngland alt="England flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('de')}
        className={`${showFlags2 && selectedLanguage !== 'de' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'de' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagGermany alt="German flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('es')}
        className={`${showFlags2 && selectedLanguage !== 'es' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'es' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagSpain alt="Spanish flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('zh')}
        className={`${showFlags2 && selectedLanguage !== 'zh' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'zh' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagChina alt="Chinese flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('hi')}
        className={`${showFlags2 && selectedLanguage !== 'hi' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'hi' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagIndia alt="Indian flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('ru')}
        className={`${showFlags2 && selectedLanguage !== 'ru' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'ru' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagRussia alt="Russian flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('ar')}
        className={`${showFlags2 && selectedLanguage !== 'ar' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'ar' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagArabLeague alt="Arab League flag" className={`${styles.flag}`} />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('pt')}
        className={`${showFlags2 && selectedLanguage !== 'pt' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'pt' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagPortugal alt="Portuguese flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('it')}
        className={`${showFlags2 && selectedLanguage !== 'it' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'it' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagItaly alt="Italian flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('ja')}
        className={`${showFlags2 && selectedLanguage !== 'ja' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'ja' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagJapan alt="Japanese flag" />
      </button>
    </div>
  );
}

LanguageSelector.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};
