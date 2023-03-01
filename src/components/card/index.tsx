import React, { ChangeEvent, FC, useState } from 'react';
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
import Modal from '../modal';
import Input from '../input';

import styles from './Card.module.scss';

export interface CardProps {
  priority: Priority;
  description: string;
  attachmentNumber: number;
  commentNumber: number;
  editTask: () => void;
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleClick = () => {
    console.log('click');
  };
  const handleHover = () => {
    setIsHover(!isHover);
  };
  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
    handleChangeDescriptionTask(description);
    handleColumnId(columnId);
    handleCardIndex(cardIndex);
  };
  const handleDeletePopUp = () => {
    setIsOpenPopUp(!isOpenPopUp);
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
          <PriorityTag priority={priority} />
          { isHover && (
          <div className={styles.hoverButtonWrapper}>
            <Button className={styles.buttonHover} onClick={handleModal}>
              <Edit color="gray" size={18} />
            </Button>
            <Button className={styles.buttonHover} onClick={handleDeletePopUp}>
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
      <Modal
        isOpen={isOpenModal}
        handleClose={handleModal}
        title="Edit task"
      >
        <Input
          id="edit"
          type="text"
          placeholder="Edit task..."
          className={styles.modalInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleChangeDescriptionTask(e.target.value);
          }}
          value={descriptionCard}
        />
        <Button
          onClick={editTask}
          className={styles.modalButton}
        >
          EDIT
        </Button>
      </Modal>
      <Modal
        isOpen={isOpenPopUp}
        handleClose={handleDeletePopUp}
        title="Are you absolutely sure?"
        className={styles.modalDelete}
      >
        <Button
          onClick={() => handleDeleteTask(columnId, cardIndex)}
          className={cx(styles.modalButton, styles.red)}
        >
          DELETE
        </Button>
      </Modal>
    </>
  );
};
export default Card;
