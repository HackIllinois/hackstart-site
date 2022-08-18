import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import LOGO from 'assets/home/shapes/hack_logo.svg';

const Nav: React.FC = () => (
  <nav>
    <img src={LOGO} alt="HackIllinois Logo" className={styles.logo} />
    <a href="#" className={clsx(styles.link, styles.home)}>
      <span>Home</span>
    </a>
    <a href="#about" className={clsx(styles.link, styles.about)}>
      <span>About</span>
    </a>
    <a href="#faq" className={clsx(styles.link, styles.faq)}>
      <span>FAQ</span>
    </a>
    <a href="#mentors" className={clsx(styles.link, styles.mentors)}>
      <span>Mentors</span>
    </a>
  </nav>
);

export default Nav;
