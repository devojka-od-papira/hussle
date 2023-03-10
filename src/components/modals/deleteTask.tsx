import React, { FC } from 'react';
import cx from 'classnames';
import Button from '../button';
import Modal from '../modal';

import styles from './DeleteTask.module.scss';

interface DeleteTaskProps {
    columnId: string;
    cardIndex: number;
    handleDeleteTask: (columnId: string, cardIndex: number) => void;
    isConfirm: boolean;
    handleConfirmVisibility: () => void;
}

const DeleteTaskModal:FC<DeleteTaskProps> = ({
  columnId,
  isConfirm,
  handleConfirmVisibility,
  handleDeleteTask,
  cardIndex,
}) => (
  <Modal
    isOpen={isConfirm}
    handleClose={handleConfirmVisibility}
    title="Are you absolutely sure?"
    className={styles.deleteTaskModal}
  >
    <Button
      onClick={() => handleDeleteTask(columnId, cardIndex)}
      className={cx(styles.button, styles.colorButton)}
    >
      DELETE
    </Button>
  </Modal>
);

export default DeleteTaskModal;
