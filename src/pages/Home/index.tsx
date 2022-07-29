import React from 'react';

import Hero from './Hero';
import About from './About';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <main className={styles.home}>
    <Hero />
    <About />
  </main>
);

export default Home;
