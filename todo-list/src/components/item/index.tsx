import styles from './item.module.scss';

import MyCheckBox from '../UI/myCheckBox';
import MyButton from '../UI/myButton';
import MyInput from '../UI/myInput';

import { useState } from 'react';

interface Props {
  todo: {
    id: number,
    isDone: boolean,
    title: string,
    text: string,
  },
  //!TODO Убрать any
  removeItem: any,
  changeItem: any,
}

function Item({todo, removeItem, changeItem}: Props) {
  const [toDoItem, setToDoItem] = useState(todo);
  const [checked, setChecked] = useState(todo.isDone);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={styles.body}>
      { !editMode 
      ? <div className={styles.main}>
            <div className={styles.mark}>
              <MyCheckBox 
                // Пофиесить баг
                checked={checked} 
                onChange={() => { setChecked(!checked); setToDoItem({...toDoItem, isDone: checked}); changeItem(todo, toDoItem); } 
              }/>
            </div>
            <div className={`${styles.info} ${checked ? styles.done : ""}`}>
              <h2 className={styles.title}>{todo.title}</h2>
              <p className={styles.text}>{todo.text}</p>
            </div>
        </div>
      : <div className={styles.change}>
          <MyInput 
            type="text" 
            placeholder="Your etodo title" 
            value={toDoItem.title} 
            onChange={(event) => setToDoItem({...toDoItem, title: event.target.value})}
          />
          <MyInput 
            type="text" 
            placeholder="Your todo" 
            value={toDoItem.text} 
            onChange={(event) => setToDoItem({...toDoItem, text: event.target.value})}
          />
        </div>
      }
      <div className={styles.control}>
        <MyButton style={styles.button} text="Remove" onClick={ () => {setChecked(false); removeItem(todo)} }/>
        <MyButton 
          style={styles.button} 
          text={!editMode ? "Edit" : "Save"} 
          onClick={!editMode 
            ? () => { setToDoItem(todo); setEditMode(!editMode); }
            : () => { changeItem(todo, toDoItem); setEditMode(!editMode); }
          }
        />
      </div>
      </div>
  );
}

export default Item;