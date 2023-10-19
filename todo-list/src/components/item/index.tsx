import styles from './item.module.scss';

import MyCheckBox from '../UI/myCheckBox';
import MyButton from '../UI/myButton';
import MyInput from '../UI/myInput';

import { useState } from 'react';

interface Props {
  todo: {
    id: number,
    title: string,
    text: string,
  },
  //!TODO Убрать any
  removeItem: any,
  changeItem: any,
}

function Item({todo, removeItem, changeItem}: Props) {
  const [todoItem, setTodoItem] = useState(todo);
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={styles.body}>
      { !editMode 
      ? <div className={styles.main}>
            <div className={styles.mark}>
              <MyCheckBox checked={checked} onChange={() => setChecked(!checked) }/>
            </div>
            <div className={`${styles.info} ${checked ? styles.done : ""}`}>
              <h2 className={styles.title}>{todo.title}</h2>
              <p className={styles.text}>{todo.text}</p>
            </div>
        </div>
      : <div className={styles.change}>
          <MyInput 
            type="text" 
            placeholder="Your todo title" 
            value={todoItem.title} 
            onChange={(event) => setTodoItem({...todo, title: event.target.value})}
          />
          <MyInput 
            type="text" 
            placeholder="Your todo" 
            value={todoItem.text} 
            onChange={(event) => setTodoItem({...todo, text: event.target.value})}
          />
        </div>
      }
      <div className={styles.control}>
        <MyButton style={styles.button} text="Remove" onClick={ () => {setChecked(false); removeItem(todo)} }/>
        <MyButton 
          style={styles.button} 
          text={!editMode ? "Edit" : "Save"} 
          onClick={!editMode 
            ? () => setEditMode(!editMode) 
            : () => { changeItem(todo, todoItem);  setEditMode(!editMode); }
          }
        />
      </div>
      </div>
  );
}

export default Item;