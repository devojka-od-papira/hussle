import React, { FC, useState } from 'react';
import { MoreHorizontal, PlusCircle } from 'react-feather';
import { TwitterPicker } from 'react-color';
import Typography, { TextType } from '../typography';
import Card, { CardProps } from '../card';
import Button from '../button';
import DropDown from '../dropDown';

import styles from './Column.module.scss';

interface ColorPickerEvent {
  hex: string;
}

interface ColumnData {
  id: string;
  title: string;
  tasks: [];
  color: string;
}
interface ColumnProps extends ColumnData{
  cardData: CardProps[];
  updateColor: (hex: string, id: string, title: string, tasks: []) => void;
  handleAddTaskModal: (id: string) => void;
}
const Column:FC<ColumnProps> = ({
  cardData, title, id, color, updateColor, tasks, handleAddTaskModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.column}>
      <div className={styles.divider} style={{ backgroundColor: color }} />
      <div className={styles.wrapperTittle}>
        <Typography className={styles.title} variant="h3" type={TextType.Heading3}>{title}</Typography>
        <div className={styles.dropDownWrapper}>
          <Button onClick={handleDropDown}>
            <MoreHorizontal color="gray" size={20} />
          </Button>
          {isOpen
            && (
              <DropDown handleDropDown={handleDropDown} isOpen={isOpen}>
                <div className={styles.wrapperColor}>
                  <Typography className={styles.colorDescription} variant="h5" type={TextType.Heading5}>Choose a color...</Typography>
                  <div className={styles.colorPicker}>
                    <TwitterPicker
                      onChange={(e: ColorPickerEvent) => updateColor(e.hex, id, title, tasks)}
                    />
                  </div>
                </div>
              </DropDown>
            )}
        </div>
      </div>
      {cardData.map((item, i) => (
        <div key={i} className={styles.wrapperCard}>
          <Card
            priority={item.priority}
            description={item.description}
            attachmentNumber={item.attachmentNumber}
            commentNumber={item.commentNumber}
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
