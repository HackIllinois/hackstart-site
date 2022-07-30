import React from 'react';
import styles from './styles.module.scss';

const FAQ: React.FC = () => (
  <section className={styles.faq}>
    <div className={styles.text}>
      <h2 className="mb-large">FAQ</h2>
      <h3 className="mb-small">What is the Open Source Fellowship?</h3>
      <p className="mb-large">Open Source Fellowship is a HackIllinois initiative whereby students work in small project groups led by Open Source professionals to contribute to a large-scale open source project.</p>
      <h3 className="mb-small">How does it work?</h3>
      <p className="mb-small">Each team will work independently on its project throughout the course of the Open Source Fellowship. Mentors will assign tasks, meet with group members, and hold development meetings where team members will be able to share and make progress on what they’re working on. In addition to this, all participants in Open Source Fellowship will be a part of a shared slack workspace, where groups will be able to share progress and gather feedback on specific features from a larger group.</p>
      <h3 className="mb-small">When is the Open Source Fellowship?</h3>
      <p className="mb-large">Open Source Fellowship will kick off on [sometime in Oct], and conclude on [sometime in ____].</p>
      <h3 className="mb-small">Who can participate in the Open Source Fellowship?</h3>
      <p className="mb-large">Open Source Month is open to any college student regardless of experience level! We are searching for candidates who are passionate about open source, working in teams, and contributing to and maintaining projects that’ll go on to be used by many.</p>
      <h3 className="mb-small">Who will students be paired with?</h3>
      <p className="mb-large">At previous HackIllinois events, we have had an incredible set of open source mentors from industry mentoring students. These mentors have been invited to help students continue to grow their open source skills through our mentorship program. You can check out our mentors on our website soon!</p>
    </div>
    <div className={styles.abstract}></div>
  </section>
);

export default FAQ;
