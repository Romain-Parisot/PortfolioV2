import React, { useEffect, useState } from 'react';
import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
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
    setSelectedLanguage(language);
  };

  return (
    <div className={styles.btLanguageContainer}>
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
      >
        {selectedLanguage === 'fr' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1eb-1f1f7.svg"
            alt="French flag"
          />
        )}
        {selectedLanguage === 'en' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1ec-1f1e7.svg"
            alt="UK flag"
          />
        )}
        {selectedLanguage === 'de' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1e9-1f1ea.svg"
            alt="German flag"
          />
        )}
        {selectedLanguage === 'es' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1ea-1f1f8.svg"
            alt="Spanish flag"
          />
        )}
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('fr')}
        className={`${showFlags2 && selectedLanguage !== 'fr' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'fr' ? '' : styles.dpnone
        }`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1eb-1f1f7.svg"
          alt="French flag"
        />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`${showFlags2 && selectedLanguage !== 'en' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'en' ? '' : styles.dpnone
        }`}
      >
        <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1ec-1f1e7.svg" alt="UK flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('de')}
        className={`${showFlags2 && selectedLanguage !== 'de' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'de' ? '' : styles.dpnone
        }`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1e9-1f1ea.svg"
          alt="German flag"
        />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('es')}
        className={`${showFlags2 && selectedLanguage !== 'es' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'es' ? '' : styles.dpnone
        }`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1ea-1f1f8.svg"
          alt="Spanish flag"
        />
      </button>
    </div>
  );
}
