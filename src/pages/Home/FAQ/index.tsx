import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import LARGE_BLUE_MINI_CLOUD_1 from 'assets/home/faq/large/blue_mini_cloud_1.svg';
import LARGE_WHITE_ELLIPSES_1 from 'assets/home/faq/large/white_ellipses_1.svg';
import LARGE_SOFT_STAR_1 from 'assets/home/faq/large/soft_star_1.svg';
import LARGE_SOFT_STAR_2 from 'assets/home/faq/large/soft_star_2.svg';
import LARGE_ORANGE_SEMI_CIRCLE_1 from 'assets/home/faq/large/orange_semi_circle_1.svg';
import LARGE_PURPLE_OVAL_1 from 'assets/home/faq/large/purple_oval_1.svg';

import MEDIUM_BLUE_MINI_CLOUD_1 from 'assets/home/faq/medium/blue_mini_cloud_1.svg';
import MEDIUM_WHITE_ELLIPSES_1 from 'assets/home/faq/medium/white_ellipses_1.svg';
import MEDIUM_SOFT_STAR_1 from 'assets/home/faq/medium/soft_star_1.svg';
import MEDIUM_SOFT_STAR_2 from 'assets/home/faq/medium/soft_star_2.svg';
import MEDIUM_ORANGE_SEMI_CIRCLE_1 from 'assets/home/faq/medium/orange_semi_circle_1.svg';
import MEDIUM_BLUE_ELLIPSES_1 from 'assets/home/faq/medium/blue_ellipses_1.svg';
import MEDIUM_PURPLE_OVAL_1 from 'assets/home/faq/medium/purple_oval_1.svg';

import SMALL_PURPLE_FLOWER_1 from 'assets/home/faq/small/purple_flower_1.svg';
import SMALL_ORANGE_SEMI_CIRCLE_1 from 'assets/home/faq/small/orange_semi_circle_1.svg';
import SMALL_SOFT_STAR_1 from 'assets/home/faq/small/soft_star_1.svg';
import SMALL_SOFT_STAR_2 from 'assets/home/faq/small/soft_star_2.svg';
import SMALL_BLUE_ELLIPSES_1 from 'assets/home/faq/small/blue_ellipses_1.svg';
import SMALL_PURPLE_OVAL_1 from 'assets/home/faq/small/purple_oval_1.svg';

const FAQ: React.FC = () => (
  <section className={styles.faq} id="faq">
    <div className={styles.text}>
      <h2>FAQ</h2>
      <h3 className="mt-large">What is HackStart?</h3>
      <p className="mt-small">HackStart is a one-day event in which students will work in project groups with mentors. As a participant, you’ll not only be able to learn about a new topic of your interest, but also gain valuable experience with a completed project. With our one-day timeline, you’ll be able to dive into your topic without being overwhelmed with a long term project, and gain insight into what a hackathon project may look like.</p>
      <h3 className="mt-large">How does it work?</h3>
      <p className="mt-small">Students will work in small groups with mentors to learn about and complete a project in a topic of their choice; the exact structure of each project will be determined by each mentor. Expect a beginner-friendly introduction into your topic and a guided project to apply both your newly-gained knowledge and experiment with how it may be used. Please note that attendees partake in one project for the duration of the event to maximize time with their project. See our application for the latest information on what projects will be taught.</p>
      <h3 className="mt-large">When is HackStart?</h3>
      <p className="mt-small">HackStart will be on Saturday, September 17th, 2022 from 10AM to 4PM in the Siebel Center for Computer Science. Attendees will be emailed specific details closer to the event.</p>
      <h3 className="mt-large">Who can participate in HackStart?</h3>
      <p className="mt-small">Any UIUC student, regardless of major, can participate!</p>
      <h3 className="mt-large">Who will students be paired with?</h3>
      <p className="mt-small">Mentors will be experienced individuals in their relevant topic. Our staff will work with mentors to ensure proper preparation and expertise.</p>
    </div>
    <div className={styles.abstract}>
      <img className={clsx(styles.largeBlueMiniCloud1, "shape")} src={LARGE_BLUE_MINI_CLOUD_1} alt="" />
      <img className={clsx(styles.largeWhiteEllipses1, "shape")} src={LARGE_WHITE_ELLIPSES_1} alt="" />
      <img className={clsx(styles.largeSoftStar1, "shape")} src={LARGE_SOFT_STAR_1} alt="" />
      <img className={clsx(styles.largeSoftStar2, "shape")} src={LARGE_SOFT_STAR_2} alt="" />
      <img className={clsx(styles.largeOrangeSemiCircle1, "shape")} src={LARGE_ORANGE_SEMI_CIRCLE_1} alt="" />
      <img className={clsx(styles.largePurpleOval1, "shape")} src={LARGE_PURPLE_OVAL_1} alt="" />

      <img className={clsx(styles.mediumBlueMiniCloud1, "shape")} src={MEDIUM_BLUE_MINI_CLOUD_1} alt="" />
      <img className={clsx(styles.mediumWhiteEllipses1, "shape")} src={MEDIUM_WHITE_ELLIPSES_1} alt="" />
      <img className={clsx(styles.mediumSoftStar1, "shape")} src={MEDIUM_SOFT_STAR_1} alt="" />
      <img className={clsx(styles.mediumSoftStar2, "shape")} src={MEDIUM_SOFT_STAR_2} alt="" />
      <img className={clsx(styles.mediumOrangeSemiCircle1, "shape")} src={MEDIUM_ORANGE_SEMI_CIRCLE_1} alt="" />
      <img className={clsx(styles.mediumBlueEllipses1, "shape")} src={MEDIUM_BLUE_ELLIPSES_1} alt="" />
      <img className={clsx(styles.mediumPurpleOval1, "shape")} src={MEDIUM_PURPLE_OVAL_1} alt="" />

      <img className={clsx(styles.smallPurpleFlower1, "shape")} src={SMALL_PURPLE_FLOWER_1} alt="" />
      <img className={clsx(styles.smallOrangeSemiCircle1, "shape")} src={SMALL_ORANGE_SEMI_CIRCLE_1} alt="" />
      <img className={clsx(styles.smallSoftStar1, "shape")} src={SMALL_SOFT_STAR_1} alt="" />
      <img className={clsx(styles.smallSoftStar2, "shape")} src={SMALL_SOFT_STAR_2} alt="" />
      <img className={clsx(styles.smallBlueEllipses1, "shape")} src={SMALL_BLUE_ELLIPSES_1} alt="" />
      <img className={clsx(styles.smallPurpleOval1, "shape")} src={SMALL_PURPLE_OVAL_1} alt="" />
    </div>
  </section>
);

export default FAQ;
