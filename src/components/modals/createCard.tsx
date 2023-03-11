import React, { FC } from 'react';
import Input from '../input';
import { Priority } from '../../types';
import Checkbox from '../checkbox';
import PriorityTag from '../priorityTag';
import Button from '../button';
import Modal from '../modal';

import styles from './CreateCard.module.scss';

type PriorityType = {
  priority: Priority;
}

interface CreateCardModalProps {
  isOpenCreateCardModal: boolean;
  handleAddTaskModalVisibility: (id: string) => void;
  setDescriptionCard: (value: string) => void;
  priorityData: PriorityType[];
  handleCreateCard: () => void;
  priority: Priority;
  handlePriorityChange: (priority: Priority) => void;
}

const CreateCardModal:FC<CreateCardModalProps> = ({
  isOpenCreateCardModal,
  handleAddTaskModalVisibility,
  setDescriptionCard,
  priorityData,
  handleCreateCard,
  priority,
  handlePriorityChange,
}) => {
  const colors = {
    [Priority.LOW]: styles.low,
    [Priority.MED]: styles.med,
    [Priority.HIGH]: styles.high,
  };

  return (
    <Modal
      title="Create card"
      isOpen={isOpenCreateCardModal}
      className={styles.content}
      handleClose={() => handleAddTaskModalVisibility('')}
    >
      <Input
        placeholder="Enter description card"
        id="card"
        type="text"
        className={styles.input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescriptionCard(e.target.value)}
      />
      <div>
        {priorityData.map((priorityItem) => (
          <Checkbox
            key={priorityItem.priority}
            priority={priorityItem.priority}
            handleChange={handlePriorityChange}
            checked={priorityItem.priority === priority}
            className={colors[priorityItem.priority]}
          >
            <div className={styles.priorityTag}>
              <PriorityTag
                priority={priorityItem.priority}
                className={colors[priorityItem.priority]}
              />
            </div>
          </Checkbox>
        ))}
      </div>
      <Button onClick={handleCreateCard} className={styles.button}>
        Create card
      </Button>
    </Modal>
  );
};

export default CreateCardModal;
