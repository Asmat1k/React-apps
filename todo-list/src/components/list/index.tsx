import styles from './list.module.scss';

import Item from '../item';

interface Props {
  todoList: {
    id: number,
    isDone: boolean,
    title: string,
    text: string,
  }[],
  //!TODO Убрать any
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
