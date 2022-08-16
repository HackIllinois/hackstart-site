import React from 'react';

import LAME_STAR from 'assets/home/shapes/lame_star.svg';
import SOFT_STAR from 'assets/home/shapes/soft_star.svg';
import PARTY from 'assets/home/shapes/party.svg';
import PURPLE_ELLIPSES from 'assets/home/shapes/purple_ellipses.svg';
import RED_ELLIPSES from 'assets/home/shapes/red_ellipses.svg';
import BLUE_ELLIPSES from 'assets/home/shapes/blue_ellipses.svg';
import ORANGE_X from 'assets/home/shapes/orange_x.svg';

import clsx from 'clsx';
import styles from './styles.module.scss';
import mentors from './mentors.json';

const Mentors: React.FC = () => (
  <section className={styles.mentors}>
    <h2>Mentors</h2>
    {mentors.map(({ name, github, bio, headshot }) => (
      <div className={styles.mentorCard}>
        <img src={`/mentor_photos/${headshot}`} />
        <span className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.title}>{github}</div>
          <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis hendrerit orci, eleifend tristique libero dapibus vitae. Sed urna felis, vestibulum eget eros id, laoreet dictum massa. Morbi rhoncus libero sit amet porta sollicitudin.</p>
        </span>
      </div>
    ))}

    <img className={clsx(styles.lameStar1, styles.shape, "shape")} src={LAME_STAR} alt="" />
    <img className={clsx(styles.softStar, styles.shape, "shape")} src={SOFT_STAR} alt="" />
    <img className={clsx(styles.purpleEllipses, styles.shape, "shape")} src={PURPLE_ELLIPSES} alt="" />
    <img className={clsx(styles.orangeX, styles.shape, "shape")} src={ORANGE_X} alt="" />
    <img className={clsx(styles.lameStar2, styles.shape, "shape")} src={LAME_STAR} alt="" />

    <img className={clsx(styles.lameStar3, styles.shape, "shape")} src={LAME_STAR} alt="" />
    <img className={clsx(styles.blueEllipses, styles.shape, "shape")} src={BLUE_ELLIPSES} alt="" />
    <img className={clsx(styles.lameStar4, styles.shape, "shape")} src={LAME_STAR} alt="" />
    <img className={clsx(styles.party, styles.shape, "shape")} src={PARTY} alt="" />
    <img className={clsx(styles.lameStar5, styles.shape, "shape")} src={LAME_STAR} alt="" />
    <img className={clsx(styles.redEllipses, styles.shape, "shape")} src={RED_ELLIPSES} alt="" />
  </section>
);

export default Mentors;
