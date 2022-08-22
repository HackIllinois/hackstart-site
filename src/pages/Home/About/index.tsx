import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import BLUE_CLOUD from 'assets/home/shapes/blue_cloud.svg';
import YELLOW_FLOWER from 'assets/home/shapes/yellow_flower.svg';
import LAME_STAR from 'assets/home/shapes/lame_star.svg';
import ORANGE_FLOWER from 'assets/home/shapes/orange_flower.svg';
import ORANGE_ELLIPSES from 'assets/home/shapes/orange_ellipses.svg';
import WHITE_ELLIPSES from 'assets/home/shapes/white_ellipses.svg';

const About: React.FC = () => (
  <section className={styles.about} id="about">
    <div className={styles.abstract}>
        <img className={clsx(styles.blueCloud, "shape")} src={BLUE_CLOUD} alt="" />
        <img className={clsx(styles.yellowFlower, "shape")} src={YELLOW_FLOWER} alt="" />
        <img className={clsx(styles.lameStar1, "shape")} src={LAME_STAR} alt="" />
        <img className={clsx(styles.lameStar2, "shape")} src={LAME_STAR} alt="" />
        <img className={clsx(styles.orangeFlower, "shape")} src={ORANGE_FLOWER} alt="" />
        <img className={clsx(styles.orangeEllipses, "shape")} src={ORANGE_ELLIPSES} alt="" />
        <img className={clsx(styles.whiteEllipses, "shape")} src={WHITE_ELLIPSES} alt="" />
    </div>
    <div className={styles.text}>
      <h2>About</h2>
      <h3 className="mt-large">Our Vision</h3>
      <p className="mt-small">Introductory computer science curriculum is often geared towards a limited range of computer science topics. As a result, topics like machine learning, frontend development, cybersecurity, etc. are often pushed off until later electives, making it difficult for students like you to gain exposure to these subjects at the beginning of your Computer Science Journey. Thus, HackIllinois is excited to present HackStart, an opportunity for beginner programmers to knock through the barriers of what is labeled “beginner” and explore the depths of computer science in a friendly, guided project-based environment.</p>
      <h3 className="mt-large">The Program</h3>
      <p className="mt-small">HackStart is a one-day event in which students will work in project groups with mentors. As a participant, you’ll not only be able to learn about a new topic of your interest, but also gain valuable experience with a completed project. With our one-day timeline, you’ll be able to dive into your topic without being overwhelmed with a long term project, and gain insight into what a hackathon project may look like.</p>
    </div>
  </section>
);

export default About;
