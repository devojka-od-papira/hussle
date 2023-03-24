import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import cx from 'classnames';
import { Plus, User } from 'react-feather';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Typography from '../../components/typography';
import Button from '../../components/button';
import Column from '../../components/column';
import { Context } from '../../context';
import DeleteColumnModal from '../../components/modals/deleteColumn';
import CreateColumnModal from '../../components/modals/createColumn';
import CreateCardModal from '../../components/modals/createCard';
import {
  Priority,
  TextType,
  TaskType,
  ColumnType,
} from '../../types';
import {
  addColumn,
  createCard,
  deleteColumn,
  deleteTask,
  editTask,
  fetchBoard,
  updateColor,
} from '../../api';

import styles from './Board.module.scss';

const Board = () => {
  const context = useContext(Context);
  const [isOpenCreateColumnModal, setIsOpenCreateColumnModal] = useState(false);
  const [isOpenCreateCardModal, setIsOpenCreateCardModal] = useState(false);
  const [columnName, setColumnName] = useState('');
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [descriptionCard, setDescriptionCard] = useState('');
  const [columnId, setColumnId] = useState('');
  const [priority, setPriority] = useState(Priority.MED);
  const [cardIndex, setCardIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [isConfirm, setIsConfirm] = useState(false);

  const priorityData = [
    { priority: Priority.LOW },
    { priority: Priority.MED },
    { priority: Priority.HIGH },
  ];

  const handleClick = () => {
    console.log('user');
  };
  const handleCreateColumnModalVisibility = () => {
    setIsOpenCreateColumnModal(!isOpenCreateColumnModal);
  };
  const handleDeleteColumnVisibility = () => {
    setIsConfirm(!isConfirm);
  };

  const handleAddColumn = () => {
    if (context?.userUID) {
      addColumn(columnName, context.userUID).then((response) => {
        if (response) {
          setColumns([...columns, response]);
          handleCreateColumnModalVisibility();
        }
      }).catch((error) => console.log('error', error));
    }
  };

  useEffect(
    () => {
      fetchBoard().then((response) => {
        if (response) {
          const filteredResponse = response.filter((item) => item.userUID === context?.userUID);
          setColumns(filteredResponse);
        }
      })
        .catch((error) => {
          console.log('error', error);
        });
    },
    [],
  );

  const handleUpdateColor = (hex:string, id: string, title: string, tasks: TaskType[]) => {
    updateColor(hex, id, title, tasks, columns).then((response) => {
      if (response) {
        setColumns(response);
      }
    }).catch((error) => {
      console.log('error', error);
    });
  };

  const handleAddTaskModalVisibility = (id: string) => {
    setIsOpenCreateCardModal(!isOpenCreateCardModal);
    setColumnId(id);
  };

  const handleCreateCard = () => {
    createCard(columnId, priority, descriptionCard, columns)
      .then((response) => {
        if (response) {
          setColumns(response);
          handleAddTaskModalVisibility('');
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const handlePriorityChange = (priority: Priority) => {
    setPriority(priority);
  };

  const handleEditTask = (setIsOpenEditModal: any) => {
    const response = editTask(columnId, columns, cardIndex, descriptionCard);
    if (response) {
      setColumns(response);
      setIsOpenEditModal(false);
    }
  };

  const handleCardIndex = (index: number) => {
    setCardIndex(index);
  };

  const handleColumnId = (id: string) => {
    setColumnId(id);
  };

  const handleChangeDescriptionTask = (description: string) => {
    setDescriptionCard(description);
  };

  const handleDeleteColumn = (id:string) => {
    deleteColumn(id, columns)
      .then((response) => {
        if (response) {
          setColumns(response);
          handleDeleteColumnVisibility();
        }
      }).catch((error) => {
        console.log('error', error);
      });
  };

  const handleDeleteTask = (columnId: string, cardIndex: number) => {
    const response = deleteTask(columnId, cardIndex, columns);
    setColumns(response);
  };

  const handleSearch = (e : ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Header handleSearch={handleSearch} />
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
                handleAddTaskModalVisibility={handleAddTaskModalVisibility}
                updateColor={handleUpdateColor}
                editTask={handleEditTask}
                handleChangeDescriptionTask={handleChangeDescriptionTask}
                descriptionCard={descriptionCard}
                handleColumnId={handleColumnId}
                handleCardIndex={handleCardIndex}
                handleDeleteTask={handleDeleteTask}
                search={search}
                handleDeleteColumnVisibility={handleDeleteColumnVisibility}
              />
            </div>
          ))}
          <div className={styles.innerButton}>
            <Button
              onClick={handleCreateColumnModalVisibility}
              className={cx(styles.buttonPlusCircle)}
            >
              <Plus color="white" size={20} />
            </Button>
          </div>
        </div>
      </div>
      <CreateColumnModal
        isOpenCreateColumnModal={isOpenCreateColumnModal}
        handleCreateColumnModalVisibility={handleCreateColumnModalVisibility}
        setColumnName={setColumnName}
        handleAddColumn={handleAddColumn}
      />
      <CreateCardModal
        isOpenCreateCardModal={isOpenCreateCardModal}
        handleAddTaskModalVisibility={handleAddTaskModalVisibility}
        setDescriptionCard={setDescriptionCard}
        priorityData={priorityData}
        handleCreateCard={handleCreateCard}
        priority={priority}
        handlePriorityChange={handlePriorityChange}
      />
      <DeleteColumnModal
        id={columnId}
        isConfirm={isConfirm}
        handleDeleteColumnVisibility={handleDeleteColumnVisibility}
        handleDeleteColumn={handleDeleteColumn}
      />
    </div>
  );
};
export default Board;
