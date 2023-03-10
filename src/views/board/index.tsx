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
import Modal from '../../components/modal';
import { Context } from '../../context';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import PriorityTag from '../../components/priorityTag';
import DeleteColumnModal from '../../components/modals/deleteColumn';
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
  const [open, setOpen] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);
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
  const handleModal = () => {
    setOpen(!open);
  };
  const handleConfirmVisibility = () => {
    setIsConfirm(!isConfirm);
  };

  const handleAddColumn = () => {
    if (context?.userUID) {
      addColumn(columnName, context.userUID).then((response) => {
        if (response) {
          setColumns([...columns, response]);
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

  const handleAddTaskModal = (id: string) => {
    setOpenTaskModal(!openTaskModal);
    setColumnId(id);
  };

  const handleCreateCard = () => {
    createCard(columnId, priority, descriptionCard, columns)
      .then((response) => {
        if (response) {
          setColumns(response);
        }
      })
      .catch((error) => {
        console.log('error', error);
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

  const handleEditTask = () => {
    const response = editTask(columnId, columns, cardIndex, descriptionCard);
    if (response) {
      setColumns(response);
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
    console.log('id', id);
    deleteColumn(id, columns)
      .then((response) => {
        if (response) {
          setColumns(response);
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
                handleAddTaskModal={handleAddTaskModal}
                updateColor={handleUpdateColor}
                editTask={handleEditTask}
                handleChangeDescriptionTask={handleChangeDescriptionTask}
                descriptionCard={descriptionCard}
                handleColumnId={handleColumnId}
                handleCardIndex={handleCardIndex}
                handleDeleteTask={handleDeleteTask}
                search={search}
                handleConfirmVisibility={handleConfirmVisibility}
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
          onClick={handleAddColumn}
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
        <Button onClick={handleCreateCard} className={styles.modalButton}>
          Create card
        </Button>
      </Modal>
      <DeleteColumnModal
        id={columnId}
        isConfirm={isConfirm}
        handleConfirmVisibility={handleConfirmVisibility}
        handleDeleteColumn={handleDeleteColumn}
      />
    </div>
  );
};
export default Board;
