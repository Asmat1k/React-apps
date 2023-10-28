import styles from './item.module.scss';

import MyCheckBox from '../UI/myCheckBox';
import MyButton from '../UI/myButton';

import { useContext } from 'react';
import { ToDo } from '../../types/types';
import { Context } from '../../context';
import Form from '../form';

interface Props {
  todo: ToDo;
  myKey: number;
}

function Item({ todo, myKey }: Props) {
  const { markToDoItem, toDoEditId, chooseToDoForEdit, removeToDoItem } =
    useContext(Context);
  const editMode = todo.id === toDoEditId;

  return !editMode ? (
    <li key={myKey} className={styles.body}>
      <div className={styles.main}>
        <div className={styles.mark}>
          <MyCheckBox
            checked={todo.isDone}
            onChange={() => markToDoItem(todo.id)}
          />
        </div>
        <div className={`${styles.info} ${todo.isDone ? styles.done : ''}`}>
          <h2 className={styles.title}>{todo.title}</h2>
          <p className={styles.text}>{todo.text}</p>
          <p className={styles.time}>{todo.time ? todo.time : ''}</p>
        </div>
      </div>
      <div className={styles.control}>
        <MyButton
          style={styles.button}
          text="Remove"
          onClick={() => removeToDoItem(todo.id)}
        />
        <MyButton
          style={styles.button}
          text="Edit"
          onClick={() => chooseToDoForEdit(todo.id)}
        />
      </div>
    </li>
  ) : (
    <Form editMode={true} toDoItem={todo} />
  );
}

export default Item;
