import React, { useEffect, useState } from 'react';

import LARGE_SOFT_STAR_1 from 'assets/home/hero/large/soft_star_1.svg';
import LARGE_ORANGE_ELLIPSES_1 from 'assets/home/hero/large/orange_ellipses_1.svg';
import LARGE_PURPLE_X_1 from 'assets/home/hero/large/purple_x_1.svg';
import LARGE_BLUE_DIAMOND_1 from 'assets/home/hero/large/blue_diamond_1.svg';
import LARGE_SOFT_STAR_2 from 'assets/home/hero/large/soft_star_2.svg';
import LARGE_SOFT_STAR_3 from 'assets/home/hero/large/soft_star_3.svg';
import LARGE_PARTY_1 from 'assets/home/hero/large/party_1.svg';
import LARGE_BLUE_DIAMOND_2 from 'assets/home/hero/large/blue_diamond_2.svg';
import LARGE_WHITE_ELLIPSES_1 from 'assets/home/hero/large/white_ellipses_1.svg';
import LARGE_SOFT_STAR_4 from 'assets/home/hero/large/soft_star_4.svg';

import MEDIUM_SOFT_STAR_1 from 'assets/home/hero/medium/soft_star_1.svg';
import MEDIUM_ORANGE_ELLIPSES_1 from 'assets/home/hero/medium/orange_ellipses_1.svg';
import MEDIUM_PURPLE_X_1 from 'assets/home/hero/medium/purple_x_1.svg';
import MEDIUM_BLUE_DIAMOND_1 from 'assets/home/hero/medium/blue_diamond_1.svg';
import MEDIUM_SOFT_STAR_2 from 'assets/home/hero/medium/soft_star_2.svg';
import MEDIUM_SOFT_STAR_3 from 'assets/home/hero/medium/soft_star_3.svg';
import MEDIUM_BLUE_DIAMOND_2 from 'assets/home/hero/medium/blue_diamond_2.svg';
import MEDIUM_PARTY_1 from 'assets/home/hero/medium/party_1.svg';
import MEDIUM_WHITE_ELLIPSES_1 from 'assets/home/hero/medium/white_ellipses_1.svg';

import SMALL_SOFT_STAR_1 from 'assets/home/hero/small/soft_star_1.svg';
import SMALL_PURPLE_X_1 from 'assets/home/hero/small/purple_x_1.svg';
import SMALL_BLUE_DIAMOND_1 from 'assets/home/hero/small/blue_diamond_1.svg';
import SMALL_WHITE_ELLIPSES_1 from 'assets/home/hero/small/white_ellipses_1.svg';
import SMALL_PARTY_1 from 'assets/home/hero/small/party_1.svg';
import SMALL_BLUE_DIAMOND_2 from 'assets/home/hero/small/blue_diamond_2.svg';
import SMALL_SOFT_STAR_2 from 'assets/home/hero/small/soft_star_2.svg';
import SMALL_SOFT_STAR_3 from 'assets/home/hero/small/soft_star_3.svg';

import clsx from 'clsx';
import styles from './styles.module.scss';

const AnimatedElement: React.FC = () => {
  const [tick, setTick] = useState(0);

  const wordAnimation = [
    { character: 'S', color: '#FF5E04' },
    { character: 't', color: '#1047AE' },
    { character: 'a', color: '#FFC444' },
    { character: 'r', color: '#929CF1' },
    { character: 't', color: '#FF9863' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % (wordAnimation.length + 2));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {wordAnimation.map(({ character, color }, i) => (
        <span key={i} style={{ color }} className={clsx(styles.animatingCharacter, tick <= i && styles.plain)}>{character}</span>
      ))}
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.leftColumn}>
        <img className={clsx(styles.largeSoftStar1, "shape")} src={LARGE_SOFT_STAR_1} alt="" />
        <img className={clsx(styles.largeOrangeEllipses1, "shape")} src={LARGE_ORANGE_ELLIPSES_1} alt="" />
        <img className={clsx(styles.largePurpleX1, "shape")} src={LARGE_PURPLE_X_1} alt="" />
        <img className={clsx(styles.largeBlueDiamond1, "shape")} src={LARGE_BLUE_DIAMOND_1} alt="" />
        <img className={clsx(styles.largeSoftStar2, "shape")} src={LARGE_SOFT_STAR_2} alt="" />

        <img className={clsx(styles.mediumSoftStar1, "shape")} src={MEDIUM_SOFT_STAR_1} alt="" />
        <img className={clsx(styles.mediumOrangeEllipses1, "shape")} src={MEDIUM_ORANGE_ELLIPSES_1} alt="" />
        <img className={clsx(styles.mediumPurpleX1, "shape")} src={MEDIUM_PURPLE_X_1} alt="" />
        <img className={clsx(styles.mediumBlueDiamond1, "shape")} src={MEDIUM_BLUE_DIAMOND_1} alt="" />

        <img className={clsx(styles.smallSoftStar1, "shape")} src={SMALL_SOFT_STAR_1} alt="" />
        <img className={clsx(styles.smallPurpleX1, "shape")} src={SMALL_PURPLE_X_1} alt="" />
        <img className={clsx(styles.smallBlueDiamond1, "shape")} src={SMALL_BLUE_DIAMOND_1} alt="" />
        <img className={clsx(styles.smallWhiteEllipses1, "shape")} src={SMALL_WHITE_ELLIPSES_1} alt="" />
      </div>

      <header className={styles.centerColumn}>
        <h4>HackIllinois presents</h4>
        <h1 className="mt-small">
          Hack
          <AnimatedElement />
        </h1>
        <h3 className="mt-small">September 17, 2022</h3>
        <a  className={clsx("mt-small", styles.applyButton)} href="/">Apply Now</a>
      </header>

      <div className={styles.rightColumn}>
        <img className={clsx(styles.largeSoftStar3, "shape")} src={LARGE_SOFT_STAR_3} alt="" />
        <img className={clsx(styles.largeParty1, "shape")} src={LARGE_PARTY_1} alt="" />
        <img className={clsx(styles.largeWhiteEllipses1, "shape")} src={LARGE_WHITE_ELLIPSES_1} alt="" />
        <img className={clsx(styles.largeBlueDiamond2, "shape")} src={LARGE_BLUE_DIAMOND_2} alt="" />
        <img className={clsx(styles.largeSoftStar4, "shape")} src={LARGE_SOFT_STAR_4} alt="" />

        <img className={clsx(styles.mediumParty1, "shape")} src={MEDIUM_PARTY_1} alt="" />
        <img className={clsx(styles.mediumWhiteEllipses1, "shape")} src={MEDIUM_WHITE_ELLIPSES_1} alt="" />
        <img className={clsx(styles.mediumBlueDiamond2, "shape")} src={MEDIUM_BLUE_DIAMOND_2} alt="" />
        <img className={clsx(styles.mediumSoftStar2, "shape")} src={MEDIUM_SOFT_STAR_2} alt="" />
        <img className={clsx(styles.mediumSoftStar3, "shape")} src={MEDIUM_SOFT_STAR_3} alt="" />
        
        <img className={clsx(styles.smallParty1, "shape")} src={SMALL_PARTY_1} alt="" />
        <img className={clsx(styles.smallBlueDiamond2, "shape")} src={SMALL_BLUE_DIAMOND_2} alt="" />
        <img className={clsx(styles.smallSoftStar2, "shape")} src={SMALL_SOFT_STAR_2} alt="" />
        <img className={clsx(styles.smallSoftStar3, "shape")} src={SMALL_SOFT_STAR_3} alt="" />
      </div>
    </section>
  );
};

export default Hero;
