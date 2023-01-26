import React from 'react';
import cx from 'classnames';
import { Plus, User } from 'react-feather';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Typography, { TextType } from '../../components/typography';
import Button from '../../components/button';
import Column from '../../components/column';
import { Priority } from '../../constants';

import styles from './Board.module.scss';

const Board = () => {
  const handleClick = () => {
    console.log('user');
  };

  const cardData = [
    {
      priority: Priority.LOW,
      description: 'Company website redesign.',
      attachmentNumber: 3,
      commentNumber: 1,
    },
    {
      priority: Priority.MED,
      description: 'Company website redesign.',
      attachmentNumber: 2,
      commentNumber: 3,
    },
    {
      priority: Priority.HIGH,
      description: 'Company website redesign.',
      attachmentNumber: 1,
      commentNumber: 2,
    },
  ];

  const board = [
    {
      title: 'Backlog',
      id: 0,
      tasks: [
        {
          priority: Priority.LOW,
          description: 'Company website redesign.',
          attachmentNumber: 3,
          commentNumber: 1,
        },
        {
          priority: Priority.MED,
          description: 'Company website redesign.',
          attachmentNumber: 2,
          commentNumber: 3,
        },
        {
          priority: Priority.HIGH,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
      ],
    },
    {
      title: 'In Progess',
      id: 1,
      tasks: [
        {
          priority: Priority.LOW,
          description: 'Company website redesign.',
          attachmentNumber: 3,
          commentNumber: 1,
        },
        {
          priority: Priority.MED,
          description: 'Company website redesign.',
          attachmentNumber: 2,
          commentNumber: 3,
        },
        {
          priority: Priority.HIGH,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
      ],
    },
    {
      title: 'Review',
      id: 2,
      tasks: [
        {
          priority: Priority.LOW,
          description: 'Company website redesign.',
          attachmentNumber: 3,
          commentNumber: 1,
        },
        {
          priority: Priority.MED,
          description: 'Company website redesign.',
          attachmentNumber: 2,
          commentNumber: 3,
        },
        {
          priority: Priority.HIGH,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
        {
          priority: Priority.MED,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
      ],
    },
    {
      title: 'Complete',
      id: 3,
      tasks: [
        {
          priority: Priority.LOW,
          description: 'Company website redesign.',
          attachmentNumber: 3,
          commentNumber: 1,
        },
        {
          priority: Priority.MED,
          description: 'Company website redesign.',
          attachmentNumber: 2,
          commentNumber: 3,
        },
        {
          priority: Priority.HIGH,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
        {
          priority: Priority.HIGH,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
        {
          priority: Priority.MED,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
        {
          priority: Priority.HIGH,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
        {
          priority: Priority.MED,
          description: 'Company website redesign.',
          attachmentNumber: 1,
          commentNumber: 2,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Typography variant="h1" type={TextType.Heading1}>Studio Board</Typography>
          <div className={styles.buttonWrapper}>
            <Button onClick={handleClick} className={cx(styles.buttonCircle)}>
              <User color="white" size={20} />
            </Button>
            <Button onClick={handleClick} className={cx(styles.buttonDotted)}>
              <Plus color="gray" size={20} />
            </Button>
          </div>
        </div>
        <div className={styles.columnsWrapper}>
          {board.map((column) => (
            <div key={column.id} className={styles.columnWrapper}>
              <Column cardData={column.tasks} title={column.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
