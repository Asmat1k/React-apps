import styles from './list.module.scss';

import Item from '../item';

import { useContext } from 'react';
import { Context } from '../../context';

function List() {
  const { toDoList } = useContext(Context);

  return (
    <div className={styles.body}>
      {toDoList.map((todoItem, index: number) => {
        return <Item todo={todoItem} key={index} />;
      })}
    </div>
  );
}

export default List;
