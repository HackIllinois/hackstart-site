import React from 'react';
import styles from './styles.module.scss';

import GROUND from 'assets/home/shapes/ground.svg';

import FACEBOOK from 'assets/home/footer/facebook.svg'
import INSTAGRAM from 'assets/home/footer/instagram.svg'
import TWITTER from 'assets/home/footer/twitter.svg'
import LINKEDIN from 'assets/home/footer/linkedin.svg'
import GITHUB from 'assets/home/footer/github.svg'
import EMAIL from 'assets/home/footer/email.svg'

const socials = [
  {
    svg: FACEBOOK,
    link: "https://www.facebook.com/hackillinois/",
  },
  {
    svg: INSTAGRAM,
    link: "https://www.instagram.com/hackillinois/",
  },
  {
    svg: TWITTER,
    link: "https://twitter.com/HackIllinois",
  },
  {
    svg: LINKEDIN,
    link: "https://www.linkedin.com/company/hackillinois/",
  },
  {
    svg: GITHUB,
    link: "https://github.com/HackIllinois",
  },
  {
    svg: EMAIL,
    link: "mailto:contact@hackillinois.org",
  },
];

const Footer: React.FC = () => (
  <>
    <img className={styles.ground} src={GROUND} />
    <footer>
      {socials.map(({ svg, link }) => (
        <a key={link} className={styles.socialWrapper} href={link}>
          <img src={svg} className={styles.social} />
        </a>
      ))}
    </footer>
  </>
);

export default Footer;
