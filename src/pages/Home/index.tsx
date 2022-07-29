import React from 'react';

import Hero from './Hero';
import About from './About';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <About />
  </div>
);

export default Home;
