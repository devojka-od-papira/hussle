import React, { FC, ReactNode } from 'react';
import { X } from 'react-feather';
import Typography from '../typography';
import Button from '../button/index';
import { TextType } from '../../types';

import styles from './DropDown.module.scss';

interface DropDownProps {
  isOpen: boolean;
  handleDropDown: () => void;
  children?: ReactNode,
}

const DropDown:FC<DropDownProps> = ({ isOpen, handleDropDown, children }) => (
  <div className={styles.dropDown}>
    <div className={styles.wrapperTittle}>
      <Typography className={styles.title} variant="h5" type={TextType.Heading5}>List actions</Typography>
      <Button className={styles.button} onClick={handleDropDown}>
        <X size={16} color="gray" />
      </Button>
    </div>
    <div>{children}</div>
  </div>
);

export default DropDown;
