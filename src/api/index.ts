import {
  addDoc, collection, doc, getDocs, setDoc,
} from 'firebase/firestore';
import { db } from '../db';
import { ColumnType, Priority, TaskType } from '../types';

export const fetchBoard = () => getDocs(collection(db, 'columns'))
  .then((response) => response.docs.map((column) => {
    const data = column.data() as ColumnType;
    return {
      ...data,
      id: column.id,
    };
  }))
  .catch((error) => {
    console.log('error', error);
  });
export const addColumn = (columnName: string) => addDoc(collection(db, 'columns'), {
  title: columnName,
  tasks: [],
  color: '#2596be',
}).then((response) => ({
  title: columnName,
  tasks: [],
  color: '#2596be',
  id: response.id,
})).catch((error) => console.log('error', error));
export const updateColor = (
  hex:string,
  id: string,
  title: string,
  tasks: TaskType[],
  columns: ColumnType[],
) => {
  const docRef = doc(db, 'columns', id);
  const data = {
    title,
    tasks,
    color: hex,
  };
  return setDoc(docRef, data)
    .then((response) => columns.map((column: ColumnType) => {
      if (column.id === id) {
        return { ...column, color: hex };
      }
      return column;
    }))
    .catch((error) => {
      console.log('error', error);
    });
};
export const createCard = (
  columnId: string,
  priority: Priority,
  descriptionCard: string,
  columns:ColumnType[],
) => {
  const docRef = doc(db, 'columns', columnId);
  const data = {
    priority,
    description: descriptionCard,
    attachmentNumber: 2,
    commentNumber: 2,
  };
  const columnToBeUpdate = columns.find((column: ColumnType) => columnId === column.id);
  columnToBeUpdate?.tasks.push(data);
  return setDoc(docRef, columnToBeUpdate)
    .then((response) => columns.map((column: ColumnType) => {
      if (column.id === columnToBeUpdate?.id) {
        return columnToBeUpdate;
      }
      return column;
    }))
    .catch((error) => {
      console.log('error', error);
    });
};
export const editTask = (
  columnId: string,
  columns: ColumnType[],
  cardIndex: number,
  descriptionCard: string,
) => {
  const docRef = doc(db, 'columns', columnId);
  return columns.map((column) => {
    if (column.id === columnId) {
      const newTasks = column.tasks.map((task, index) => {
        if (index === cardIndex) {
          return {
            ...task, description: descriptionCard,
          };
        }
        return task;
      });
      const data = { ...column, tasks: newTasks };
      setDoc(docRef, data).then((response) => columns.map((column) => {
        if (column.id === columnId) {
          return data;
        }
        return column;
      }))
        .catch((error) => {
          console.log('error', error);
        });
      return data;
    }
    return column;
  });
};
