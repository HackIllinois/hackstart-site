import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import LOGO from 'assets/home/shapes/hack_logo.svg';

const Nav: React.FC = () => (
  <nav>
    <img src={LOGO} alt="HackIllinois Logo" className={styles.logo} />
    <span className={styles.link}>
      <a href="#">Home</a>
    </span>
    <span className={styles.link}>
      <a href="#about">About</a>
    </span>
    <span className={styles.link}>
      <a href="#faq">FAQ</a>
    </span>
    <span className={styles.link}>
      <a href="#mentors">Mentors</a>
    </span>
  </nav>
);

export default Nav;
