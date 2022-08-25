import React, { useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import LOGO from 'assets/home/nav/hack_logo.svg';
import HAMBURGER from 'assets/home/nav/hamburger.svg';

const links = (
  <>
    <a href="#" className={clsx(styles.link, styles.home)}>
      <span>Home</span>
    </a>
    <a href="#about" className={clsx(styles.link, styles.about)}>
      <span>About</span>
    </a>
    <a href="#faq" className={clsx(styles.link, styles.faq)}>
      <span>FAQ</span>
    </a>
    {/* <a href="#mentors" className={clsx(styles.link, styles.mentors)}>
      <span>Mentors</span>
    </a> */}
  </>
);

const Nav: React.FC = () => { 
  const [dropDownShow, setDropDownShown] = useState(false);

  return (
    <nav>
      <div className={styles.navBar}>
        <img src={LOGO} alt="HackIllinois Logo" className={styles.logo} />
        {links}
        <img
          src={HAMBURGER}
          alt="Hamburger Menu"
          className={styles.hamburger}
          onClick={() => setDropDownShown(x => !x)}
        />
      </div>
      <div
        className={clsx(styles.dropDown, dropDownShow || styles.shown)}
        onClick={() => setDropDownShown(x => !x)}
      >
        {links}
      </div>
    </nav>
  );
};

export default Nav;
