/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [toDoEditId, setToDoEditId] = useState(-1);

  function chooseToDoForEdit(id: number) {
    setToDoEditId(id);
  }

  function removeToDoItem(id: number) {
    settoDoList(toDoList.filter((todo) => todo.id !== id));
  }

  function markToDoItem(id: number) {
    settoDoList(
      toDoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  }

  function createToDoItem(newToDoItem: ToDo) {
    settoDoList([...toDoList, newToDoItem]);
  }

  function changeToDoItem({ title, text, time }: any) {
    settoDoList(
      toDoList.map((todo) => {
        if (todo.id === toDoEditId) {
          return { ...todo, title: title, text: text, time: time };
        }
        return todo;
      })
    );
    setToDoEditId(-1);
  }

  function saveInLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(toDoList));
  }

  return (
    <Context.Provider
      value={{
        toDoList,
        toDoEditId,
        saveInLocalStorage,
        chooseToDoForEdit,
        markToDoItem,
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
