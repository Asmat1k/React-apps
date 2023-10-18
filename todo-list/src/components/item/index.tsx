import styles from './item.module.scss';

import MyCheckBox from '../UI/myCheckBox';
import MyButton from '../UI/myButton';

import { useState } from 'react';

interface Props {
  todo: {
    id: number,
    title: string,
    text: string,
  },
  //!TODO Убрать any
  removeItem: any,
}

function Item({todo, removeItem}: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div className={styles.mark}>
          <MyCheckBox checked={checked} onChange={() => setChecked(!checked) }/>
        </div>
        <div className={`${styles.info} ${checked ? styles.done : ""}`}>
          <h2 className={styles.title}>{todo.title}</h2>
          <p className={styles.text}>{todo.text}</p>
        </div>
      </div>
      <div className={styles.control}>
        <MyButton style={styles.button} text="Remove" onClick={ () => { setChecked(false); removeItem(todo)} }/>
        <MyButton style={styles.button} text="Edit" onClick={ () => console.log('Edit') }/>
      </div>
      </div>
  );
}

export default Item;
