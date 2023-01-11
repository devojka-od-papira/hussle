import React from 'react';
import { Settings } from 'react-feather';
import Typography, { TextType } from '../typography';
import Button from '../button';

import styles from './SideBar.module.scss';

const Sidebar = () => {
  const handleClick = () => {
    console.log('klik');
  };
  return (
    <div className={styles.sideBar}>
      <Typography variant="h3" type={TextType.Heading3} className={styles.logo}>hussle</Typography>
      <Button onClick={handleClick} className={styles.button}>
        <Settings size={26} color="gray" />
        <Typography variant="h5" type={TextType.Heading5} className={styles.iconSetting}>Setting</Typography>
      </Button>
    </div>
  );
};
export default Sidebar;
