import styles from './main.module.scss';

import MyTitle from '../UI/myTitle';
import MyButton from '../UI/myButton';
import Form from '../form';
import { useState } from 'react';
import List from '../list';
import { ToDo } from '../../types/types';

import { Context } from '../../context';

function Main() {
  const storedToDo: ToDo[] = JSON.parse(localStorage.getItem('todos')!) || [];

  const [toDoList, settoDoList] = useState(storedToDo);

  function removeToDoItem(todo: ToDo) {
    const id = toDoList.findIndex((item) => item.id === todo.id);
    settoDoList([...toDoList.slice(0, id), ...toDoList.slice(id + 1)]);
  }

  function createToDoItem(newToDoItem: ToDo) {
    settoDoList([...toDoList, newToDoItem]);
  }

  function changeToDoItem(
    oldToDo: ToDo,
    newToDo: ToDo,
    isCheckedChanged: boolean
  ) {
    const id = toDoList.findIndex((item) => item.id === oldToDo.id);
    if (isCheckedChanged) {
      const updatedToDo: ToDo = {
        ...newToDo,
        isDone: !newToDo.isDone,
      };
      settoDoList([
        ...toDoList.slice(0, id),
        updatedToDo,
        ...toDoList.slice(id + 1),
      ]);
    } else {
      settoDoList([
        ...toDoList.slice(0, id),
        newToDo,
        ...toDoList.slice(id + 1),
      ]);
    }
  }

  function saveInLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(toDoList));
  }

  return (
    <Context.Provider
      value={{
        toDoList,
        saveInLocalStorage,
        removeToDoItem,
        createToDoItem,
        changeToDoItem,
      }}
    >
      <main className={styles.main}>
        <MyTitle title={'todo app'} />
        <Form />
        {toDoList.length ? (
          <div>
            <List />
          </div>
        ) : (
          <div className={styles.nothing}>Nothing to do</div>
        )}
        <MyButton text="save" style={styles.button} />
      </main>
    </Context.Provider>
  );
}

export default Main;
