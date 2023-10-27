import styles from './item.module.scss';

import MyCheckBox from '../UI/myCheckBox';
import MyButton from '../UI/myButton';
import MyInput from '../UI/myInput';

import { useState, useContext } from 'react';
import { ToDo } from '../../types/types';
import { Context } from '../../context';

interface Props {
  todo: ToDo;
  key: number;
  myKey: number;
}

function Item({ todo, myKey }: Props) {
  const [toDoItem, setToDoItem] = useState(todo);
  const [checked, setChecked] = useState(todo.isDone);
  const [editMode, setEditMode] = useState(false);

  console.log(toDoItem);

  const { changeToDoItem, removeToDoItem } = useContext(Context);

  function changeChecked() {
    setChecked(!checked);
    setToDoItem({ ...toDoItem, isDone: !checked });
    changeToDoItem(todo, toDoItem, true);
  }

  return (
    <div key={myKey} className={styles.body}>
      {!editMode ? (
        <div className={styles.main}>
          <div className={`${styles.info}`}>
            <h2 className={styles.title}>{todo.title}</h2>
            <p className={styles.text}>{todo.text}</p>
            <p className={styles.time}>{todo.time ? toDoItem.time : ''}</p>
          </div>
        </div>
      ) : (
        <div className={styles.change}>
          <MyInput
            type="text"
            placeholder="Your todo title"
            value={toDoItem.title}
            onChange={(event) =>
              setToDoItem({ ...toDoItem, title: event.target.value })
            }
          />
          <MyInput
            type="text"
            placeholder="Your todo"
            value={toDoItem.text}
            onChange={(event) =>
              setToDoItem({ ...toDoItem, text: event.target.value })
            }
          />
          <MyInput
            type="text"
            placeholder="Your todo time (type mins, hours, days)"
            value={toDoItem.time}
            onChange={(event) =>
              setToDoItem({ ...toDoItem, time: event.target.value })
            }
          />
        </div>
      )}
      <div className={styles.control}>
        <MyButton
          style={styles.button}
          text="Remove"
          onClick={() => {
            setChecked(false);
            removeToDoItem(todo);
          }}
        />
        <MyButton
          style={styles.button}
          text={!editMode ? 'Edit' : 'Save'}
          onClick={
            !editMode
              ? () => {
                  setToDoItem(toDoItem);
                  setEditMode(!editMode);
                }
              : () => {
                  changeToDoItem(todo, toDoItem, false);
                  setEditMode(!editMode);
                }
          }
        />
      </div>
    </div>
  );
}

export default Item;
