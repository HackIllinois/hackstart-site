import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import BLUE_MINI_CLOUD from 'assets/home/shapes/blue_half_cloud.svg';
import WHITE_ELLIPSES from 'assets/home/shapes/white_ellipses.svg';
import SOFT_STAR from 'assets/home/shapes/soft_star.svg';
import ORANGE_HALF_CIRCLE from 'assets/home/shapes/orange_half_circle.svg';
import PURPLE_OVAL from 'assets/home/shapes/purple_oval.svg';

const FAQ: React.FC = () => (
  <section className={styles.faq} id="faq">
    <div className={styles.text}>
      <h2 className="mb-large">FAQ</h2>
      <h3 className="mb-small">What is HackStart?</h3>
      <p className="mb-large">HackStart is a one-day event in which students will work in project groups with mentors. As a participant, you’ll not only be able to learn about a new topic of your interest, but also gain valuable experience with a completed project. With our one-day timeline, you’ll be able to dive into your topic without being overwhelmed with a long term project, and gain insight into what a hackathon project may look like.</p>
      <h3 className="mb-small">How does it work?</h3>
      <p className="mb-large">Students will work in small groups with mentors to learn about and complete a project in a topic of their choice; the exact structure of each project will be determined by each mentor. Expect a beginner-friendly introduction into your topic and a guided project to apply both your newly-gained knowledge and experiment with how it may be used. Please note that attendees partake in one project for the duration of the event to maximize time with their project. See our application for the latest information on what projects will be taught.</p>
      <h3 className="mb-small">When is HackStart?</h3>
      <p className="mb-large">HackStart will be on Saturday, September 17th, 2022 from 10AM to 4PM in the Siebel Center for Computer Science. Attendees will be emailed specific details closer to the event.</p>
      <h3 className="mb-small">Who can participate in HackStart?</h3>
      <p className="mb-large">Any UIUC student, regardless of major, can participate!</p>
      <h3 className="mb-small">Who will students be paired with?</h3>
      <p className="mb-large">Mentors will be experienced individuals in their relevant topic. Our staff will work with mentors to ensure proper preparation and expertise.</p>
    </div>
    <div className={styles.abstract}>
      <img className={clsx(styles.blueMiniCloud, "shape")} src={BLUE_MINI_CLOUD} alt="" />
      <img className={clsx(styles.whiteEllipses, "shape")} src={WHITE_ELLIPSES} alt="" />
      <img className={clsx(styles.orangeHalfCircle, "shape")} src={ORANGE_HALF_CIRCLE} alt="" />
      <img className={clsx(styles.softStar1, "shape")} src={SOFT_STAR} alt="" />
      <img className={clsx(styles.softStar2, "shape")} src={SOFT_STAR} alt="" />
      <img className={clsx(styles.purpleOval, "shape")} src={PURPLE_OVAL} alt="" />
    </div>
  </section>
);

export default FAQ;
