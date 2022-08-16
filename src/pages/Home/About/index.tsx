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
      <h2 className="mb-large">About</h2>
      <h3 className="mb-small">Our Vision</h3>
      <p className="mb-large">Open Source (OS) has been a central theme of HackIllinois for years. Historically, our annual flagship spring hackathon has provided students to work with OS mentors, but we believe that working on such a project is a long-term commitment. With that in mind, we at HackIllinois present to you the OS Fellowship, an 3-week long event that gives our attendees an exciting and engaging Hackathon experience while still maintaining our commitment to Open Source.</p>
      <h3 className="mb-small">The Program</h3>
      <p className="mb-small">During the program, students will work in project groups mentored by professionals in Open Source to get familiar with and contribute to a large-scale open source project. As a participant, you’ll gain a valuable insight into a long-term development cycle as sought after industry experience, an appreciation of the community driving open source, and tons of development experience across a variety of tech stacks! Some of the OS projects from our previous fellowship, in January 2021, included Visual Studio Code, Julia, and pandas, among many others - see the complete list here!</p>
      <p className="mb-small">While each team will function independently, all teams and participants in Open Source fellowship will be a part of a shared slack workspace, where teams will be able to share progress, consult others for feedback, and gather data on their project as needed. In addition, weekly check-in meetings will allow teams to showcase their development over the week and learn about other projects and the direction they’re headed in—all to provide attendees with the most comprehensive dive into Open Source through HackIllinois.</p>
    </div>
  </section>
);

export default About;
