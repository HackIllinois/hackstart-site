import React, { useEffect, useState } from 'react';

import SOFT_STAR from 'assets/home/shapes/soft_star.svg';
import ORANGE_ELLIPSES from 'assets/home/shapes/orange_ellipses.svg';
import BLUE_DIAMOND from 'assets/home/shapes/blue_diamond.svg';
import PURPLE_X from 'assets/home/shapes/purple_x.svg';
import PARTY from 'assets/home/shapes/party.svg';
import WHITE_ELLIPSES from 'assets/home/shapes/white_ellipses.svg';

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
        <span style={{ color }} className={clsx(styles.animatingCharacter, tick <= i && styles.plain)}>{character}</span>
      ))}
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.leftColumn}>
        <img className={clsx(styles.softStar1, "shape")} src={SOFT_STAR} alt="" />
        <img className={clsx(styles.orangeEllipses, "shape")} src={ORANGE_ELLIPSES} alt="" />
        <img className={clsx(styles.blueDiamond1, "shape")} src={BLUE_DIAMOND} alt="" />
        <img className={clsx(styles.purpleX, "shape")} src={PURPLE_X} alt="" />
        <img className={clsx(styles.softStar2, "shape")} src={SOFT_STAR} alt="" />
      </div>

      <header className={styles.centerColumn}>
        <h4 className="mb-small">HackIllinois presents</h4>
        <h1 className="mb-small">
          Hack
          <AnimatedElement />
        </h1>
        <h3 className="mb-small">September 17, 2022</h3>
        <a className={styles.applyButton} href="/">Apply Now</a>
      </header>

      <div className={styles.rightColumn}>
        <img className={clsx(styles.softStar3, "shape")} src={SOFT_STAR} alt="" />
        <img className={clsx(styles.party, "shape")} src={PARTY} alt="" />
        <img className={clsx(styles.whiteEllipses, "shape")} src={WHITE_ELLIPSES} alt="" />
        <img className={clsx(styles.blueDiamond2, "shape")} src={BLUE_DIAMOND} alt="" />
        <img className={clsx(styles.softStar4, "shape")} src={SOFT_STAR} alt="" />
      </div>
    </section>
  );
};

export default Hero;
