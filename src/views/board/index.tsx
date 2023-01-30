import React, { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import {
  addDoc, collection, doc, getDocs, setDoc,
} from 'firebase/firestore';
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
import Checkbox from '../../components/checkbox';
import PriorityTag from '../../components/priorityTag';
import { CardProps } from '../../components/card';

import styles from './Board.module.scss';

type ColumnType = {
  title: string;
  tasks: CardProps[];
  color: string;
  id: string;
}

const Board = () => {
  const context = useContext(Context);
  const [open, setOpen] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [columnName, setColumnName] = useState('');
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [descriptionCard, setDescriptionCard] = useState('');
  const [columnId, setColumnId] = useState('');
  const [priority, setPriority] = useState(Priority.MED);

  const priorityData = [
    { priority: Priority.LOW },
    { priority: Priority.MED },
    { priority: Priority.HIGH },
  ];
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
        id: docRef.id,
      },
      ]);
      setOpen(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getDocs(collection(db, 'columns')).then((response) => {
      const columns: ColumnType[] = response.docs.map((column) => {
        const data = column.data() as ColumnType;
        return {
          ...data,
          id: column.id,
        };
      });
      setColumns(columns);
    }).catch((error) => {
      console.log('error', error);
    });
  }, []);

  const updateColor = (hex:string, id: string, title: string, tasks: CardProps[]) => {
    const docRef = doc(db, 'columns', id);
    const data = {
      title,
      tasks,
      color: hex,
    };
    setDoc(docRef, data).then((response) => {
      const newColumns = columns.map((column: ColumnType) => {
        if (column.id === id) {
          return { ...column, color: hex };
        }
        return column;
      });
      setColumns(newColumns);
    });
  };
  const handleAddTaskModal = (id: string) => {
    setOpenTaskModal(!openTaskModal);
    setColumnId(id);
  };
  const createCard = () => {
    const docRef = doc(db, 'columns', columnId);
    const data = {
      priority,
      description: descriptionCard,
      attachmentNumber: 2,
      commentNumber: 2,
    };
    const columnToBeUpdate = columns.find((column: ColumnType) => columnId === column.id);
    const newCol = {
      ...columnToBeUpdate, tasks: columnToBeUpdate?.tasks.push(data),
    };
    setDoc(docRef, columnToBeUpdate).then((response) => {
      const newColumns = columns.map((column:ColumnType) => {
        if (column.id === columnToBeUpdate?.id) {
          return columnToBeUpdate;
        }
        return column;
      });
      setColumns(newColumns);
    });
  };
  const handlePriorityChange = (priority: Priority) => {
    setPriority(priority);
  };
  const colors = {
    [Priority.LOW]: styles.low,
    [Priority.MED]: styles.med,
    [Priority.HIGH]: styles.high,
  };
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
          {columns.map((column:ColumnType) => (
            <div key={column.id} className={styles.columnWrapper}>
              <Column
                id={column.id}
                title={column.title}
                tasks={column.tasks}
                color={column.color}
                handleAddTaskModal={handleAddTaskModal}
                updateColor={updateColor}
              />
            </div>
          ))}
          <div className={styles.innerButton}>
            <Button
              onClick={handleModal}
              className={cx(styles.buttonPlusCircle)}
            >
              <Plus color="white" size={20} />
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={open} handleClose={handleModal} title="Create column">
        <Input
          id="text"
          type="text"
          className={styles.modalInput}
          placeholder="Enter column name..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColumnName(e.target.value)}
        />
        <Button
          onClick={addColumnName}
          className={styles.modalButton}
        >
          ADD COLUMN
        </Button>
      </Modal>
      <Modal
        title="Create card"
        isOpen={openTaskModal}
        className={styles.modalContent}
        handleClose={() => handleAddTaskModal('')}
      >
        <Input
          placeholder="Enter description card"
          id="card"
          type="text"
          className={styles.modalInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescriptionCard(e.target.value)}
        />
        <div>
          {priorityData.map((priorityItem: {priority: Priority}) => (
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
        <Button onClick={createCard} className={styles.modalButton}>
          Create card
        </Button>
      </Modal>
    </div>
  );
};

export default Board;
