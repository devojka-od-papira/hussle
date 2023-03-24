import React, { FC, ChangeEvent } from 'react';
import Modal from '../modal';
import Input from '../input';
import Button from '../button';

import styles from './EditTask.module.scss';

interface EditTaskModalProps {
  isOpenEditModal: boolean;
  handleVisibilityEditModal: () => void;
  handleChangeDescriptionTask: (description: string) => void;
  descriptionCard: string;
  editTask: () => void;
}

const EditTaskModal:FC<EditTaskModalProps> = ({
  isOpenEditModal,
  handleVisibilityEditModal,
  handleChangeDescriptionTask,
  descriptionCard,
  editTask,
}) => (
  <Modal
    isOpen={isOpenEditModal}
    handleClose={handleVisibilityEditModal}
    title="Edit task"
    classNames={styles.title}
  >
    <Input
      id="edit"
      type="text"
      placeholder="Edit task..."
      className={styles.input}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        handleChangeDescriptionTask(e.target.value);
      }}
      value={descriptionCard}
    />
    <Button
      onClick={editTask}
      className={styles.button}
    >
      EDIT
    </Button>
  </Modal>
);

export default EditTaskModal;
