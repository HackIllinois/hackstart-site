import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import LARGE_BLUE_CLOUD_1 from 'assets/home/about/large/blue_cloud_1.svg';
import LARGE_YELLOW_FLOWER_1 from 'assets/home/about/large/yellow_flower_1.svg';
import LARGE_LAME_STAR_1 from 'assets/home/about/large/lame_star_1.svg';
import LARGE_LAME_STAR_2 from 'assets/home/about/large/lame_star_2.svg';
import LARGE_ORANGE_FLOWER_1 from 'assets/home/about/large/orange_flower_1.svg';

import MEDIUM_BLUE_CLOUD_1 from 'assets/home/about/medium/blue_cloud_1.svg';
import MEDIUM_YELLOW_FLOWER_1 from 'assets/home/about/medium/yellow_flower_1.svg';
import MEDIUM_LAME_STAR_1 from 'assets/home/about/medium/lame_star_1.svg';
import MEDIUM_LAME_STAR_2 from 'assets/home/about/medium/lame_star_2.svg';
import MEDIUM_ORANGE_FLOWER_1 from 'assets/home/about/medium/orange_flower_1.svg';

import SMALL_ORANGE_ELLIPSES_1 from 'assets/home/about/small/orange_ellipses_1.svg';
import SMALL_LAME_STAR_1 from 'assets/home/about/small/lame_star_1.svg';
import SMALL_YELLOW_FLOWER_1 from 'assets/home/about/small/yellow_flower_1.svg';
import SMALL_WHITE_ELLIPSES_1 from 'assets/home/about/small/white_ellipses_1.svg';
import SMALL_LAME_STAR_2 from 'assets/home/about/small/lame_star_2.svg';
import SMALL_BLUE_CLOUD_1 from 'assets/home/about/small/blue_cloud_1.svg';

const About: React.FC = () => (
  <section className={styles.about} id="about">
    <div className={styles.abstract}>
        <img className={clsx(styles.largeBlueCloud1, "shape")} src={LARGE_BLUE_CLOUD_1} alt="" />
        <img className={clsx(styles.largeYellowFlower1, "shape")} src={LARGE_YELLOW_FLOWER_1} alt="" />
        <img className={clsx(styles.largeLameStar1, "shape")} src={LARGE_LAME_STAR_1} alt="" />
        <img className={clsx(styles.largeLameStar2, "shape")} src={LARGE_LAME_STAR_2} alt="" />
        <img className={clsx(styles.largeOrangeFlower, "shape")} src={LARGE_ORANGE_FLOWER_1} alt="" />

        <img className={clsx(styles.mediumBlueCloud1, "shape")} src={MEDIUM_BLUE_CLOUD_1} alt="" />
        <img className={clsx(styles.mediumYellowFlower1, "shape")} src={MEDIUM_YELLOW_FLOWER_1} alt="" />
        <img className={clsx(styles.mediumLameStar1, "shape")} src={MEDIUM_LAME_STAR_1} alt="" />
        <img className={clsx(styles.mediumLameStar2, "shape")} src={MEDIUM_LAME_STAR_2} alt="" />
        <img className={clsx(styles.mediumOrangeFlower, "shape")} src={MEDIUM_ORANGE_FLOWER_1} alt="" />

        <img className={clsx(styles.smallOrangeEllipses1, "shape")} src={SMALL_ORANGE_ELLIPSES_1} alt="" />
        <img className={clsx(styles.smallLameStar1, "shape")} src={SMALL_LAME_STAR_1} alt="" />
        <img className={clsx(styles.smallYellowFlower1, "shape")} src={SMALL_YELLOW_FLOWER_1} alt="" />
        <img className={clsx(styles.smallWhiteEllipses1, "shape")} src={SMALL_WHITE_ELLIPSES_1} alt="" />
        <img className={clsx(styles.smallLameStar2, "shape")} src={SMALL_LAME_STAR_2} alt="" />
        <img className={clsx(styles.smallBlueCloud1, "shape")} src={SMALL_BLUE_CLOUD_1} alt="" />
    </div>
    <div className={styles.text}>
      <h2>About</h2>
      <h3 className="mt-large">Our Vision</h3>
      <p className="mt-small">Introductory computer science curriculum is often geared towards a limited range of computer science topics. As a result, topics like machine learning, frontend development, cybersecurity, etc. are often pushed off until later electives, making it difficult for students like you to gain exposure to these subjects at the beginning of your Computer Science Journey. Thus, HackIllinois is excited to present HackStart, an opportunity for beginner programmers to knock through the barriers of what is labeled “beginner” and explore the depths of computer science in a friendly, guided project-based environment.</p>
      <div className={clsx("mt-large", styles.videoWrapper)}>
        <video controls>
          <source src="/hackstart-promo.mp4" type="video/mp4" />
        </video>
      </div>
      <h3 className="mt-large">The Program</h3>
      <p className="mt-small">HackStart is a one-day event in which students will work in project groups with mentors. As a participant, you’ll not only be able to learn about a new topic of your interest, but also gain valuable experience with a completed project. With our one-day timeline, you’ll be able to dive into your topic without being overwhelmed with a long term project, and gain insight into what a hackathon project may look like.</p>
    </div>
  </section>
);

export default About;
