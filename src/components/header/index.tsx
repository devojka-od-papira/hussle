import React from 'react';
import cx from 'classnames';
import { Search, User } from 'react-feather';
import Typography from '../typography';
import Input from '../input';
import Button from '../button';
import { TextType } from '../../types';

import styles from './Header.module.scss';

const Header = () => {
  const handleClick = () => {
    console.log('klick');
  };
  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.searchInput}
        placeholder="Search for tasks..."
        id="search"
        type="string"
        icon={<Search size={16} color="white" />}
      />
      <div className={styles.userWrapper}>
        <Typography variant="h5" type={TextType.Heading5} className={styles.user}>M.Thomson</Typography>
        <Button onClick={handleClick} className={cx(styles.buttonCircle, styles.button)}>
          <User color="white" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
