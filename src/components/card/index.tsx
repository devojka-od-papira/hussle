import React, { FC, useState } from 'react';
import cx from 'classnames';
import {
  MessageSquare,
  Paperclip,
  Trash2,
  Edit,
  Plus,
  User,
} from 'react-feather';
import PriorityTag from '../priorityTag';
import { Priority } from '../../types';
import Typography from '../typography';
import Button from '../button';
import DeleteTaskModal from '../modals/deleteTask';
import EditTaskModal from '../modals/editTask';

import styles from './Card.module.scss';

export interface CardProps {
  priority: Priority;
  description: string;
  attachmentNumber: number;
  commentNumber: number;
  editTask: (setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>) => void;
  handleChangeDescriptionTask: (description: string) => void;
  descriptionCard: string;
  handleColumnId: (id: string) => void;
  columnId: string;
  cardIndex: number;
  handleCardIndex: (index: number) => void;
  handleDeleteTask: (columnId: string, cardIndex: number) => void;
  search: string;
}

const Card: FC<CardProps> = ({
  priority,
  description,
  attachmentNumber,
  commentNumber,
  editTask,
  handleChangeDescriptionTask,
  descriptionCard,
  handleColumnId,
  columnId,
  cardIndex,
  handleCardIndex,
  handleDeleteTask,
  search,
}) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const handleClick = () => {
    console.log('click');
  };
  const handleHover = () => {
    setIsHover(!isHover);
  };
  const handleVisibilityEditModal = () => {
    setIsOpenEditModal(!isOpenEditModal);
    handleChangeDescriptionTask(description);
    handleColumnId(columnId);
    handleCardIndex(cardIndex);
  };
  const handleConfirmVisibility = () => {
    setIsConfirm(!isConfirm);
  };

  return (
    <>
      <div
        aria-disabled={search.length
          ? !description.toLowerCase().includes(search.toLowerCase()) : false}
        className={cx(
          styles.card,
          {
            [styles.isDisableCard]: search.length
              ? !description.toLowerCase().includes(search.toLowerCase()) : false,
          },
        )}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className={styles.topSection}>
          <PriorityTag priority={priority} className={styles.priorityTag} />
          { isHover && (
          <div className={styles.hoverButtonWrapper}>
            <Button className={styles.buttonHover} onClick={handleVisibilityEditModal}>
              <Edit color="gray" size={18} />
            </Button>
            <Button className={styles.buttonHover} onClick={handleConfirmVisibility}>
              <Trash2 color="gray" size={18} />
            </Button>
          </div>
          )}
        </div>
        <div className={styles.description}>
          <Typography variant="span">{description}</Typography>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.leftWrapper}>
            <div>
              <Button onClick={handleClick} className={styles.button}>
                <MessageSquare color="gray" size={16} />
                <Typography variant="p" className={styles.numberIcon}>{commentNumber}</Typography>
              </Button>
            </div>
            <div>
              <Button onClick={handleClick} className={styles.button}>
                <Paperclip color="gray" size={16} />
                <Typography variant="p" className={styles.numberIcon}>{attachmentNumber}</Typography>
              </Button>
            </div>
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.addIcon}>
              <Button onClick={handleClick} className={cx(styles.buttonDotted, styles.button)}>
                <Plus color="gray" size={20} />
              </Button>
            </div>
            <Button onClick={handleClick} className={cx(styles.buttonCircle, styles.button)}>
              <User color="white" size={20} />
            </Button>
          </div>
        </div>
      </div>
      <EditTaskModal
        isOpenEditModal={isOpenEditModal}
        descriptionCard={descriptionCard}
        handleVisibilityEditModal={handleVisibilityEditModal}
        handleChangeDescriptionTask={handleChangeDescriptionTask}
        editTask={() => editTask(setIsOpenEditModal)}
      />
      <DeleteTaskModal
        columnId={columnId}
        cardIndex={cardIndex}
        isConfirm={isConfirm}
        handleConfirmVisibility={handleConfirmVisibility}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
};
export default Card;
