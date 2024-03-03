import React from 'react';
import styles from './Footer.module.css';
import MailSvg from './socialMediaSvg/MailSvg';
import GithubSvg from './socialMediaSvg/GithubSvg';
import LinkedinSvg from './socialMediaSvg/LinkedinSvg';

export default function Footer() {
  return (
    <footer>
      <span className={`${styles.barFooter}`} />
      <div className={`${styles.linkContainer}`}>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/romainparisot-/">
            <LinkedinSvg />
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://github.com/Romain-Parisot">
            <GithubSvg />
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="mailto:romainparisot.pro@gmail.com">
            <MailSvg />
          </a>
        </div>
      </div>
      <div className={`${styles.descSiteContainer}`}>
        <p className={`${styles.descSite}`}>Portfolio 2024 - Romain PARISOT</p>
      </div>
    </footer>
  );
}
