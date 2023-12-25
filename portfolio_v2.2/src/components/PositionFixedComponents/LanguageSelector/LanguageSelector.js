import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageSelector.module.css';

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
        {selectedLanguage === 'zh' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1e8-1f1f3.svg"
            alt="Chinese flag"
          />
        )}
        {selectedLanguage === 'hi' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ee-1f1f3.svg"
            alt="Indian flag"
          />
        )}
        {selectedLanguage === 'ru' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1f7-1f1fa.svg"
            alt="Russian flag"
          />
        )}
        {/* {selectedLanguage === 'ar' && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_the_Arab_League.svg/800px-Flag_of_the_Arab_League.svg.png"
            alt="Arab League flag"
          />
        )} */}
        {selectedLanguage === 'pt' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1f5-1f1f9.svg"
            alt="Portuguese flag"
          />
        )}
        {selectedLanguage === 'it' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ee-1f1f9.svg"
            alt="Italian flag"
          />
        )}
        {selectedLanguage === 'ja' && (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ef-1f1f5.svg"
            alt="Japanese flag"
          />
        )}
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('fr')}
        className={`${showFlags2 && selectedLanguage !== 'fr' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'fr' ? '' : styles.dpnone
        } MouseHoverEffect`}
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
        } MouseHoverEffect`}
      >
        <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1ec-1f1e7.svg" alt="UK flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('de')}
        className={`${showFlags2 && selectedLanguage !== 'de' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'de' ? '' : styles.dpnone
        } MouseHoverEffect`}
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
        } MouseHoverEffect`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1ea-1f1f8.svg"
          alt="Spanish flag"
        />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('zh')}
        className={`${showFlags2 && selectedLanguage !== 'zh' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'zh' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1e8-1f1f3.svg"
          alt="Chinese flag"
        />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('hi')}
        className={`${showFlags2 && selectedLanguage !== 'hi' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'hi' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ee-1f1f3.svg"
          alt="Indian flag"
        />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('ru')}
        className={`${showFlags2 && selectedLanguage !== 'ru' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'ru' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1f7-1f1fa.svg"
          alt="Russian flag"
        />
      </button>
      {/* <button
        type="button"
        onClick={() => changeLanguage('ar')}
        className={`${showFlags2 && selectedLanguage !== 'ar' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'ar' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_the_Arab_League.svg/800px-Flag_of_the_Arab_League.svg.png"
          alt="Arab League flag"
        />
      </button> */}
      <button
        type="button"
        onClick={() => changeLanguage('pt')}
        className={`${showFlags2 && selectedLanguage !== 'pt' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'pt' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1f5-1f1f9.svg"
          alt="Portuguese flag"
        />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('it')}
        className={`${showFlags2 && selectedLanguage !== 'it' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'it' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ee-1f1f9.svg"
          alt="Italian flag"
        />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('ja')}
        className={`${showFlags2 && selectedLanguage !== 'ja' ? styles.flagDisplay : styles.flagHidden} ${
          showFlags && selectedLanguage !== 'ja' ? '' : styles.dpnone
        } MouseHoverEffect`}
      >
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ef-1f1f5.svg"
          alt="Japanese flag"
        />
      </button>
    </div>
  );
}

LanguageSelector.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};
