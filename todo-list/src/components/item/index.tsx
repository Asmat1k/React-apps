import styles from './item.module.scss';

import MyButton from '../UI/myButton';

interface Props {
  title: string,
  text: string,
  removeItem: React.MouseEventHandler<HTMLButtonElement>,
}

function Item({title, text, removeItem}: Props) {
  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.control}>
        <MyButton style={styles.button} text="Remove" onClick={removeItem}/>
        <MyButton style={styles.button} text="Edit" onClick={removeItem}/>
      </div>
      </div>
  );
}

export default Item;
