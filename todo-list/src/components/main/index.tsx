import styles from './main.module.scss';

import MyTitle from '../UI/myTitle';
import MyButton from '../UI/myButton';
import Form from '../form';
import { useState } from 'react';
import List from '../list';
import { ToDo } from '../../types/types';

function Main() {
  const storedToDo: ToDo[] = JSON.parse(localStorage.getItem("todos")!) || [];

  // Можно добавить сверху в строку
  // || [
  //     { id: 1, isDone: false, title: "School", text: "Do math ex.13 on page 256", time: "6  hours" },
  //     { id: 2, isDone: true, title: "Birthday", text: "Buy a present and flowers for my mom's birthday", time: "3 days" },
  // ];
  
  const [todoList, setTodoList] = useState(storedToDo);

  function removeToDoItem(todo: ToDo) {
    const id = todoList.findIndex((item) => item.id === todo.id);
    setTodoList([...todoList.slice(0, id), ...todoList.slice(id + 1)]);
  }

  function createToDoItem(newToDoItem: ToDo) {
    setTodoList([...todoList, newToDoItem]);
  }

  function changeToDoItem(oldToDo: ToDo, newToDo: ToDo, isCheckedChanged: boolean) {
    const id = todoList.findIndex((item) => item.id === oldToDo.id);
    // Небольшой костыль
    if(isCheckedChanged) {
      const updatedToDo: ToDo = {
        ...newToDo, isDone: !newToDo.isDone,
      }
      setTodoList([...todoList.slice(0, id), updatedToDo, ...todoList.slice(id + 1)]);
    } else {
      setTodoList([...todoList.slice(0, id), newToDo, ...todoList.slice(id + 1)]);
    }
  }

  function saveInLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }
  
  return (
    <main className={styles.main}>
      <MyTitle title={"todo app"} />
      <Form createToDo={createToDoItem} />
      { todoList.length
        ? <div>
            <List todoList={todoList} removeItem={removeToDoItem} changeItem={changeToDoItem} />
          </div>
        : <div className={styles.nothing}>Nothing to do</div>
      }
      <MyButton text="save" onClick={saveInLocalStorage} style={styles.button} />
    </main>
  );
}

export default Main;
