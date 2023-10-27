import styles from './item.module.scss';

import MyCheckBox from '../UI/myCheckBox';
import MyButton from '../UI/myButton';
import MyInput from '../UI/myInput';

import { useState, useContext } from 'react';
import { ToDo } from '../../types/types';
import { Context } from '../../context';

interface Props {
  todo: ToDo;
}

function Item({ todo }: Props) {
  const [toDoItem, setToDoItem] = useState(todo);
  const [checked, setChecked] = useState(todo.isDone);
  const [editMode, setEditMode] = useState(false);

  const { changeToDoItem, removeToDoItem } = useContext(Context);

  function changeChecked() {
    setChecked(!checked);
    setToDoItem({ ...toDoItem, isDone: !checked });
    changeToDoItem(todo, toDoItem, true);
  }

  return (
    <div className={styles.body}>
      {!editMode ? (
        <div className={styles.main}>
          <div className={styles.mark}>
            <MyCheckBox checked={checked} onChange={() => changeChecked()} />
          </div>
          <div className={`${styles.info} ${checked ? styles.done : ''}`}>
            <h2 className={styles.title}>{todo.title}</h2>
            <p className={styles.text}>{todo.text}</p>
            <p className={styles.time}>{todo.time ? todo.time : ''}</p>
          </div>
        </div>
      ) : (
        <div className={styles.change}>
          <MyInput
            type="text"
            placeholder="Your etodo title"
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
                  setToDoItem(todo);
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
