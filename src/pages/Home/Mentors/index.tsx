import React from 'react';

import clsx from 'clsx';
import styles from './styles.module.scss';
import mentors from './mentors.json';

import LARGE_LAME_STAR_1 from 'assets/home/mentors/large/lame_star_1.svg';
import LARGE_SOFT_STAR_1 from 'assets/home/mentors/large/soft_star_1.svg';
import LARGE_PURPLE_ELLIPSES_1 from 'assets/home/mentors/large/purple_ellipses_1.svg';
import LARGE_ORANGE_X_1 from 'assets/home/mentors/large/orange_x_1.svg';
import LARGE_LAME_STAR_2 from 'assets/home/mentors/large/lame_star_2.svg';
import LARGE_LAME_STAR_3 from 'assets/home/mentors/large/lame_star_3.svg';
import LARGE_BLUE_ELLIPSES_1 from 'assets/home/mentors/large/blue_ellipses_1.svg';
import LARGE_LAME_STAR_4 from 'assets/home/mentors/large/lame_star_4.svg';
import LARGE_YELLOW_FLOWER_1 from 'assets/home/mentors/large/yellow_flower_1.svg';
import LARGE_LAME_STAR_5 from 'assets/home/mentors/large/lame_star_5.svg';
import LARGE_RED_ELLIPSES_1 from 'assets/home/mentors/large/red_ellipses_1.svg';

const Mentors: React.FC = () => (
  <section className={styles.mentors} id="mentors">
    <h2>Mentors</h2>
    {mentors.map(({ name, github, bio, headshot }) => (
      <div key={github} className={styles.mentorCard}>
        <img src={`/mentor_photos/${headshot}`} />
        <span className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.title}>{github}</div>
          <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis hendrerit orci, eleifend tristique libero dapibus vitae. Sed urna felis, vestibulum eget eros id, laoreet dictum massa. Morbi rhoncus libero sit amet porta sollicitudin.</p>
        </span>
      </div>
    ))}

    <img className={clsx(styles.largeLameStar1, "shape")} src={LARGE_LAME_STAR_1} alt="" />
    <img className={clsx(styles.largeSoftStar1, "shape")} src={LARGE_SOFT_STAR_1} alt="" />
    <img className={clsx(styles.largePurpleEllipses1, "shape")} src={LARGE_PURPLE_ELLIPSES_1} alt="" />
    <img className={clsx(styles.largeOrangeX1, "shape")} src={LARGE_ORANGE_X_1} alt="" />
    <img className={clsx(styles.largeLameStar2, "shape")} src={LARGE_LAME_STAR_2} alt="" />
    <img className={clsx(styles.largeLameStar3, "shape")} src={LARGE_LAME_STAR_3} alt="" />
    <img className={clsx(styles.largeBlueEllipses1, "shape")} src={LARGE_BLUE_ELLIPSES_1} alt="" />
    <img className={clsx(styles.largeLameStar4, "shape")} src={LARGE_LAME_STAR_4} alt="" />
    <img className={clsx(styles.largeYellowFlower1, "shape")} src={LARGE_YELLOW_FLOWER_1} alt="" />
    <img className={clsx(styles.largeLameStar5, "shape")} src={LARGE_LAME_STAR_5} alt="" />
    <img className={clsx(styles.largeRedEllipses1, "shape")} src={LARGE_RED_ELLIPSES_1} alt="" />
  </section>
);

export default Mentors;
