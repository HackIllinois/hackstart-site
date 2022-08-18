import React from 'react';

import styles from './styles.module.scss';

const Hero: React.FC = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.text}>Welcome to HackStart!</div>
    </div>
  );
};

export default Hero;
