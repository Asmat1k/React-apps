import styles from './list.module.scss';

import Item from '../item';
import { ToDo } from '../../types/types';

interface Props {
  todoList: ToDo[],
  // Callback
  removeItem: any,
  changeItem: any,
}

function List({todoList, removeItem, changeItem}: Props) {
  return (
    <div className={styles.body}>
      { todoList.map((todoItem, index: number) => {
        return (
          <Item todo={todoItem} removeItem={removeItem} changeItem={changeItem} key={index} />
        );
      }) }
    </div>
  );
}

export default List;
