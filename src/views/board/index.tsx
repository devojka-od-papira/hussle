import React, { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { Plus, User } from 'react-feather';
import { db } from '../../db';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Typography, { TextType } from '../../components/typography';
import Button from '../../components/button';
import Column from '../../components/column';
import Modal from '../../components/modal';
import { Priority } from '../../constants';
import { Context } from '../../context';
import Input from '../../components/input';

import styles from './Board.module.scss';

interface ColumnProps {
  title: string;
  tasks: [];
  color: string;
}

const Board = () => {
  const [open, setOpen] = useState(false);
  const [columnName, setColumnName] = useState('');
  const [columns, setColumns] = useState<any>([]);
  const context = useContext(Context);
  const handleClick = () => {
    console.log('user');
  };
  const handleModal = () => {
    setOpen(!open);
  };
  const addColumnName = async () => {
    try {
      const docRef = await addDoc(collection(db, 'columns'), {
        title: columnName,
        tasks: [],
        color: '#2596be',
      });
      setColumns([...columns, {
        title: columnName,
        tasks: [],
        color: '#2596be',
      },
      ]);
      setOpen(false);
      console.log('docRef', docRef);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getDocs(collection(db, 'columns')).then((response) => {
      console.log('response', response.docs);
      const columns = response.docs.map((column) => {
        console.log('column', column.data());
        return column.data();
      });
      console.log('colon', columns);
      setColumns(columns);
    }).catch((error) => {
      console.log('error', error);
    });
  }, []);

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
          {columns.map((column:ColumnProps, i: number) => (
            <div key={i} className={styles.columnWrapper}>
              <Column cardData={column.tasks} title={column.title} />
            </div>
          ))}
          <div className={styles.innerButton}>
            <Button className={cx(styles.buttonPlusCircle)} onClick={handleModal}>
              <Plus color="white" size={20} />
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={open} handleClose={handleModal} title="Create column">
        <Input
          placeholder="Enter column name..."
          id="text"
          type="text"
          className={styles.columnNameInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColumnName(e.target.value)}
        />
        <Button onClick={addColumnName} className={styles.addColumnNameButton}>
          ADD COLUMN
        </Button>
      </Modal>
    </div>
  );
};

export default Board;
