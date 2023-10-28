import styles from './list.module.scss';

import Item from '../item';

import { useContext } from 'react';
import { Context } from '../../context';

function List() {
  const { toDoList } = useContext(Context);

  return (
    <div className={styles.body}>
      <ul className={styles.body}>
        {toDoList.map((todoItem, index: number) => {
          return <Item todo={todoItem} key={index} myKey={index} />;
        })}
      </ul>
    </div>
  );
}

export default List;
