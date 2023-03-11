import React, { FC } from 'react';
import Input from '../input';
import Button from '../button';
import Modal from '../modal';

import styles from './CreateColumn.module.scss';

interface CreateColumnModalProps {
  isOpenCreateColumnModal: boolean;
  handleCreateColumnModalVisibility: () => void;
  setColumnName: (value: string) => void;
  handleAddColumn: () => void;
}

const CreateColumnModal:FC<CreateColumnModalProps> = ({
  isOpenCreateColumnModal,
  handleCreateColumnModalVisibility,
  setColumnName,
  handleAddColumn,
}) => (
  <Modal
    title="Create column"
    isOpen={isOpenCreateColumnModal}
    handleClose={handleCreateColumnModalVisibility}
    classNames={styles.title}
  >
    <Input
      id="text"
      type="text"
      className={styles.input}
      placeholder="Enter column name..."
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColumnName(e.target.value)}
    />
    <Button
      onClick={handleAddColumn}
      className={styles.button}
    >
      ADD COLUMN
    </Button>
  </Modal>
);

export default CreateColumnModal;
