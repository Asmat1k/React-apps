import styles from './list.module.scss';

import Item from '../item';

import { useContext } from 'react';
import { Context } from '../../context';

function List() {
  const { toDoList } = useContext(Context);

  console.log(toDoList);
  
  return (
    <div className={styles.body}>
      {toDoList.map((todoItem, index: number) => {
        return <Item todo={todoItem} key={index} myKey={index} />;
      })}
    </div>
  );
}

export default List;
