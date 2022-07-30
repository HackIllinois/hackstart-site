import React from 'react';

import Hero from './Hero';
import About from './About';
import FAQ from './FAQ';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <main className={styles.home}>
    <Hero />
    <About />
    <FAQ />
  </main>
);

export default Home;
