import React, { FC, ReactNode } from 'react';
import { X } from 'react-feather';
import Typography, { TextType } from '../typography';

import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ isOpen, handleClose, children }) => (isOpen ? (
  <div className={styles.wrapper} onClick={handleClose} onKeyDown={handleClose}>
    <div>
      <div className={styles.header}>
        <Typography variant="h2" type={TextType.Heading2}>Title</Typography>
        <X onClick={handleClose} size={20} color="gray" />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
) : null);

export default Modal;
