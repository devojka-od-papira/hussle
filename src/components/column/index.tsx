import React, { FC, useState } from 'react';
import { MoreHorizontal, PlusCircle, Trash2 } from 'react-feather';
import { TwitterPicker } from 'react-color';
import Typography from '../typography';
import Card from '../card';
import Button from '../button';
import DropDown from '../dropDown';
import { TextType, TaskType } from '../../types';

import styles from './Column.module.scss';

interface ColorPickerEvent {
  hex: string;
}

interface ColumnData {
  id: string;
  title: string;
  color: string;
  tasks: TaskType[];
}
interface ColumnProps extends ColumnData {
  updateColor: (hex: string, id: string, title: string, tasks: TaskType[]) => void;
  handleAddTaskModal: (id: string) => void;
  editTask: () => void;
  handleChangeDescriptionTask: (description: string) => void;
  descriptionCard: string;
  handleColumnId: (id: string) => void;
  handleCardIndex: (index: number) => void;
}
const Column:FC<ColumnProps> = ({
  tasks,
  title,
  id,
  color,
  updateColor,
  handleAddTaskModal,
  editTask,
  handleChangeDescriptionTask,
  descriptionCard,
  handleColumnId,
  handleCardIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleColor = () => {
    console.log('klik');
    setIsOpenColorPicker(!isOpenColorPicker);
  };

  const handleDelete = () => {
    console.log('klik');
  };

  return (
    <div className={styles.column}>
      <div className={styles.divider} style={{ backgroundColor: color }} />
      <div className={styles.wrapperTittle}>
        <Typography className={styles.title} variant="h3" type={TextType.Heading3}>{title}</Typography>
        <div className={styles.dropDownWrapper}>
          <Button onClick={handleDropDown} className={styles.buttonHover}>
            <MoreHorizontal color="gray" size={20} />
          </Button>
          {isOpen
            && (
              <DropDown handleDropDown={handleDropDown} isOpen={isOpen}>
                <div>
                  <Button
                    onClick={handleDelete}
                    className={styles.labelButton}
                  >
                    <Trash2 color="gray" size={20} />
                    <Typography variant="h5" type={TextType.Heading5}>
                      Delete
                    </Typography>
                  </Button>
                  <Button
                    onClick={handleColor}
                    className={styles.labelButton}
                  >
                    <Typography variant="h5" type={TextType.Heading5}>
                      Choose a color...
                    </Typography>
                  </Button>
                  {isOpenColorPicker
                    && (
                    <div className={styles.colorPicker}>
                      <TwitterPicker
                        onChange={(e: ColorPickerEvent) => updateColor(e.hex, id, title, tasks)}
                      />
                    </div>
                    )}
                </div>
              </DropDown>
            )}
        </div>
      </div>
      {tasks.map((item, i) => (
        <div key={i} className={styles.wrapperCard}>
          <Card
            priority={item.priority}
            description={item.description}
            attachmentNumber={item.attachmentNumber}
            commentNumber={item.commentNumber}
            editTask={editTask}
            handleChangeDescriptionTask={handleChangeDescriptionTask}
            descriptionCard={descriptionCard}
            handleColumnId={handleColumnId}
            columnId={id}
            cardIndex={i}
            handleCardIndex={handleCardIndex}
          />
        </div>
      ))}
      <div className={styles.wrapperButton}>
        <Button onClick={() => handleAddTaskModal(id)} className={styles.button}>
          <Typography variant="h4">
            Add task
          </Typography>
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Column;
