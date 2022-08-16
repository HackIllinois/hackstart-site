import React from 'react';

import Hero from './Hero';
import About from './About';
import FAQ from './FAQ';
import Mentors from './Mentors';
import Footer from './Footer';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <main className={styles.home}>
    <Hero />
    <About />
    <FAQ />
    <Mentors />
    <Footer />
  </main>
);

export default Home;
