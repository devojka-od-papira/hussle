import React, { FC, ReactNode } from 'react';
import { X } from 'react-feather';
import Typography, { TextType } from '../typography';

import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
  title: string;
}

function disabledEventPropagation(event: React.SyntheticEvent) {
  if (event.stopPropagation) {
    event.stopPropagation();
  }
}
const Modal: FC<ModalProps> = ({
  isOpen, handleClose, children, title,
}) => (isOpen ? (
  <div role="button" tabIndex={0} className={styles.wrapper} onClick={handleClose} onKeyDown={handleClose}>
    <div
      onKeyDown={disabledEventPropagation}
      onClick={disabledEventPropagation}
      className={styles.modal}
    >
      <div className={styles.header}>
        <Typography variant="h2" type={TextType.Heading2}>{title}</Typography>
        <X onClick={handleClose} size={20} color="gray" />
      </div>
      <div
        className={styles.content}
      >
        {children}
      </div>
    </div>
  </div>
) : null);

export default Modal;
