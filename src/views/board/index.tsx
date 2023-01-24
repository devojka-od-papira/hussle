import React from 'react';
import cx from 'classnames';
import { User } from 'react-feather';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Typography, { TextType } from '../../components/typography';
import Button from '../../components/button';

import styles from './Board.module.scss';

const Board = () => {
  const handleClick = () => {
    console.log('user');
  };

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Typography variant="h1" type={TextType.Heading1}>Studio Board</Typography>
          <Button onClick={handleClick} className={cx(styles.buttonCircle, styles.button)}>
            <User color="white" size={20} />
          </Button>
        </div>
        <div className={styles.columnWrapper} />
      </div>
    </div>
  );
};

export default Board;
