import styles from './main.module.scss';

import MyTitle from '../UI/myTitle';
import Form from '../form';
import { useState } from 'react';
import List from '../list';

interface Post {
  id: number,
  title: string,
  text: string,
}

function Main() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "School", text: "Do math ex.13 on page 256" },
    { id: 2, title: "Birthday", text: "Buy a present and flowers for my mom's birthday" },
  ]);

  function removeToDoItem(post: Post) {
    setTodoList(todoList.filter(item => item.id !== post.id));
  }

  function createToDoItem(newToDoItem: Post) {
    setTodoList([...todoList, newToDoItem]);
  }

  return (
    <main className={styles.main}>
      <MyTitle title={"todo app"} />
      <Form createToDo={createToDoItem} />
      { todoList.length
        ? <List todoList={todoList} removeItem={removeToDoItem} />
        : <div className={styles.nothing}>Nothing to do</div>
      }
    </main>
  );
}

export default Main;
