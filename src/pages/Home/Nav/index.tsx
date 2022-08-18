import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import LOGO from 'assets/home/shapes/hack_logo.svg';

const Nav: React.FC = () => (
  <nav>
    <img src={LOGO} alt="HackIllinois Logo" className={styles.logo} />
    <a href="#" className={styles.link}>
      <span>Home</span>
    </a>
    <a href="#about" className={styles.link}>
      <span>About</span>
    </a>
    <a href="#faq" className={styles.link}>
      <span>FAQ</span>
    </a>
    <a href="#mentors" className={styles.link}>
      <span>Mentors</span>
    </a>
  </nav>
);

export default Nav;
