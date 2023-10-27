import styles from './form.module.scss';

import MyInput from '../UI/myInput';
import MyButton from '../UI/myButton';

import { useState, useContext } from 'react';
import { Context } from '../../context';

function Form() {
  const [todo, setTodo] = useState({
    isDone: false,
    title: '',
    text: '',
    time: '',
  });
  const [error, setError] = useState('');

  const { createToDoItem } = useContext(Context);

  function validate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (error.length <= 0) {
      setError('fields with * must be filled in!');
    }
  }

  function addNewToDo(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const newToDo = {
      id: Date.now(),
      ...todo,
    };
    createToDoItem(newToDo);
    setTodo({ isDone: false, title: '', text: '', time: '' });
    setError('');
  }

  return (
    <div className="">
      {error.length < 0 ? '' : <div className={styles.error}>{error}</div>}
      <form className={styles.form}>
        <MyInput
          type="text"
          placeholder="Your todo title *"
          value={todo.title}
          onChange={(event) => setTodo({ ...todo, title: event.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Your todo *"
          value={todo.text}
          onChange={(event) => setTodo({ ...todo, text: event.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Time for todo (type mins, hours, days)"
          value={todo.time}
          onChange={(event) => setTodo({ ...todo, time: event.target.value })}
        />
        <MyButton
          text={'ADD'}
          style={styles.button}
          onClick={
            todo.title && todo.text
              ? addNewToDo
              : (e: React.MouseEvent<HTMLButtonElement>) => {
                  validate(e);
                }
          }
        />
      </form>
    </div>
  );
}

export default Form;
