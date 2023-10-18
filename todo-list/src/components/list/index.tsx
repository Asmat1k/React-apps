import styles from './list.module.scss';

import Item from '../item';

interface Props {
  todoList: {
    title: string,
    text: string,
  }[],
  removeItem: React.MouseEventHandler<HTMLButtonElement>,
}

function List({todoList, removeItem}: Props) {
  return (
    <div className={styles.body}>
      { todoList.map((todo, index: number) => {
        return (
          <Item title={todo.title} text={todo.text} removeItem={removeItem} key={index} />
        );
      }) }
    </div>
  );
}

export default List;
