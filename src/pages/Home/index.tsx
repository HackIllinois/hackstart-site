import React from 'react';

import Hero from './Hero';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
  </div>
);

export default Home;
