import React, { useEffect, useState } from 'react';

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
      <header className={styles.header}>
        <h4>HackIllinois presents</h4>
        <h1>
          Hack
          <AnimatedElement />
        </h1>
        <h3>September 17, 2022</h3>
        <a className={styles.applyButton} href="/">Apply Now</a>
      </header>
    </section>
  );
};

export default Hero;
