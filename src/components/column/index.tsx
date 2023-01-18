import React, { FC } from 'react';
import { PlusCircle } from 'react-feather';
import Typography, { TextType } from '../typography';
import { DataTypes } from '../../types/global';
import Card from '../card';
import Button from '../button';
import { randomHexColor } from '../../utils';

import styles from './Column.module.scss';

interface ColumnProps {
  data : DataTypes[],
}
const Column:FC<ColumnProps> = ({ data }) => {
  const addedTask = () => {
    console.log('addTask');
  };
  const backgroundColor = randomHexColor();
  return (
    <div className={styles.column}>
      <div className={styles.divider} style={{ backgroundColor }} />
      <Typography className={styles.title} variant="h3" type={TextType.Heading3}>Backlog</Typography>
      {data.map((item, i) => (
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
        <Button onClick={addedTask} className={styles.button}>
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
