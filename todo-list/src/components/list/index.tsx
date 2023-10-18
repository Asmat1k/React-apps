import styles from './list.module.scss';

import Item from '../item';

interface Props {
  todoList: {
    id: number,
    title: string,
    text: string,
  }[],
  //!TODO Убрать any
  removeItem: any,
}

function List({todoList, removeItem}: Props) {
  return (
    <div className={styles.body}>
      { todoList.map((todoItem, index: number) => {
        return (
          <Item todo={todoItem} removeItem={removeItem} key={index} />
        );
      }) }
    </div>
  );
}

export default List;
