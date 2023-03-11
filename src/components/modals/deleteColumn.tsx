import React, { FC } from 'react';
import cx from 'classnames';
import Button from '../button';
import Modal from '../modal';

import styles from './DeleteColumn.module.scss';

interface DeleteColumnProps {
  id: string;
  handleDeleteColumn: (id: string) => void;
  isConfirm: boolean;
  handleDeleteColumnVisibility: () => void;
}

const DeleteColumnModal:FC<DeleteColumnProps> = ({
  id,
  handleDeleteColumn,
  isConfirm,
  handleDeleteColumnVisibility,
}) => (
  <Modal
    isOpen={isConfirm}
    handleClose={handleDeleteColumnVisibility}
    title="Are you absolutely sure?"
    className={styles.deleteColumnModal}
  >
    <Button
      onClick={() => handleDeleteColumn(id)}
      className={cx(styles.button, styles.colorButton)}
    >
      DELETE
    </Button>
  </Modal>
);

export default DeleteColumnModal;
