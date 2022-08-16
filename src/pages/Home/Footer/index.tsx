import React from 'react';
import styles from './styles.module.scss';

import GROUND from 'assets/home/shapes/ground.svg';

import FACEBOOK from 'assets/home/footer/facebook.svg'
import INSTAGRAM from 'assets/home/footer/instagram.svg'
import TWITTER from 'assets/home/footer/twitter.svg'
import LINKEDIN from 'assets/home/footer/linkedin.svg'
import GITHUB from 'assets/home/footer/github.svg'
import EMAIL from 'assets/home/footer/email.svg'

const Footer: React.FC = () => (
  <>
    <img className={styles.ground} src={GROUND} />
    <footer>
      {[FACEBOOK, INSTAGRAM, TWITTER, LINKEDIN, GITHUB, EMAIL].map(svg => (
        <div className={styles.socialWrapper}>
          <img src={svg} className={styles.social} />
        </div>
      ))}
    </footer>
  </>
);

export default Footer;
