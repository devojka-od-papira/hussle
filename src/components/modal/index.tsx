import React, { FC, ReactNode } from 'react';
import { X } from 'react-feather';
import cx from 'classnames';
import Typography from '../typography';
import { TextType } from '../../types';

import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
  title: string;
  className?: string;
}
const Modal: FC<ModalProps> = ({
  isOpen,
  handleClose,
  children,
  title,
  className,
}) => {
  function disabledEventPropagation(event: React.SyntheticEvent) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
  }
  return (isOpen ? (
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
          className={cx(styles.content, className)}
        >
          {children}
        </div>
      </div>
    </div>
  ) : null);
};

export default Modal;
