import styles from './main.module.scss';

import MyTitle from '../UI/myTitle';
import Form from '../form';
import { useState } from 'react';
import List from '../list';

function Main() {
  //! TODO Сделать добавление
  const [todoList, setTodoList] = useState([
    { title: "School", text: "Do smth..." },
    { title: "Work", text: "Go there..." },
  ]);

  return (
    <main className={styles.main}>
      <MyTitle title={"todo app"} />
      <Form />
      { todoList.length
        ? <List todoList={todoList} removeItem={() => console.log("Remove")} />
        : <div className={styles.nothing}>Nothing to do</div>
      }
    </main>
  );
}

export default Main;
