import React from 'react';

import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import FAQ from './FAQ';
import Mentors from './Mentors';
import Footer from './Footer';

import Banner from './Banner';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <main className={styles.home}>
    <Nav />
    <Hero />
    <Banner />
    <About />
    <Banner />
    <FAQ />
    <Banner />
    <Mentors />
    <Footer />
  </main>
);

export default Home;
