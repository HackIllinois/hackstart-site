import React from 'react';

// import SOFT_STAR from 'assets/home/shapes/soft_star.svg';
// import ORANGE_ELLIPSES from 'assets/home/shapes/orange_ellipses.svg';
// import BLUE_DIAMOND from 'assets/home/shapes/blue_diamond.svg';
// import PURPLE_X from 'assets/home/shapes/purple_x.svg';
// import PARTY from 'assets/home/shapes/party.svg';
// import WHITE_ELLIPSES from 'assets/home/shapes/white_ellipses.svg';

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
  </section>
);

export default Mentors;
