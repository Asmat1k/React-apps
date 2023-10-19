import styles from './main.module.scss';

import MyTitle from '../UI/myTitle';
import MyButton from '../UI/myButton';
import Form from '../form';
import { useState } from 'react';
import List from '../list';

interface ToDo {
  id: number,
  title: string,
  text: string,
}

function Main() {
  const storedToDo: ToDo[] = JSON.parse(localStorage.getItem("todos")!) || [
      { id: 1, title: "School", text: "Do math ex.13 on page 256" },
      { id: 2, title: "Birthday", text: "Buy a present and flowers for my mom's birthday" },
    ];
  
  const [todoList, setTodoList] = useState(storedToDo);

  function removeToDoItem(todo: ToDo) {
    const id = todoList.findIndex((item) => item.id === todo.id);
    setTodoList([...todoList.slice(0, id), ...todoList.slice(id + 1)]);
  }

  // Временное решение, надо пофиксить стили
  function createToDoItem(newToDoItem: ToDo) {
    if(todoList.length < 6) setTodoList([...todoList, newToDoItem]);
  }

  function changeToDoItem(oldToDo: ToDo, newToDo: ToDo) {
    const id = todoList.findIndex((item) => item.id === oldToDo.id);
    setTodoList([...todoList.slice(0, id), newToDo, ...todoList.slice(id + 1)]);
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
            <MyButton text="save todos" onClick={saveInLocalStorage} style={styles.button} />
          </div>
        : <div className={styles.nothing}>Nothing to do</div>
      }
     
    </main>
  );
}

export default Main;
