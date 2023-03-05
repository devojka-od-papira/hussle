import React from 'react';
import Typography from '../typography';

import styles from './ProjectAvatar.module.scss';

const ProjectAvatar = () => {
  const myArr = [
    {
      uid: 1,
      title: 'Avatar',
    },
    {
      uid: 2,
      title: 'Avatar1',
    },
    {
      uid: 3,
      title: 'Avatar2',
    },
    {
      uid: 3,
      title: 'Avatar3',
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        {myArr.map((item, i) => (
          <div key={i} className={styles.content}>
            <Typography variant="h2">{item.title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAvatar;
