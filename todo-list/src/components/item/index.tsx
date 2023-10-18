import styles from './item.module.scss';

import MyButton from '../UI/myButton';

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
  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <h2 className={styles.title}>{todo.title}</h2>
        <p className={styles.text}>{todo.text}</p>
      </div>
      <div className={styles.control}>
        <MyButton style={styles.button} text="Remove" onClick={ () => removeItem(todo) }/>
        <MyButton style={styles.button} text="Edit" onClick={ () => console.log('Edit') }/>
      </div>
      </div>
  );
}

export default Item;
