import styles from './form.module.scss';

import MyInput from '../UI/myInput';
import MyButton from '../UI/myButton';

import { useState, useContext } from 'react';
import { Context } from '../../context';
import { ToDo } from '../../types/types';

interface FormProps {
  editMode?: boolean;
  toDoItem?: ToDo;
}

function Form({ editMode, toDoItem }: FormProps) {
  const [todo, setTodo] = useState(
    editMode
      ? toDoItem!
      : {
          isDone: false,
          title: '',
          text: '',
          time: '',
        }
  );
  const [error, setError] = useState('');

  const { createToDoItem, changeToDoItem } = useContext(Context);

  function formSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (todo.title && todo.text) {
      if (editMode) {
        const changeToDo = {
          title: todo?.title,
          text: todo?.text,
          time: todo?.time,
        };
        changeToDoItem(changeToDo);
      } else {
        addNewToDo();
      }
    } else {
      validate(event);
    }
  }

  function addNewToDo() {
    const newToDo = {
      id: Date.now(),
      ...todo,
    };
    createToDoItem(newToDo);
    setTodo({ isDone: false, title: '', text: '', time: '' });
    setError('');
  }

  function validate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (error.length <= 0) {
      setError('fields with * must be filled in!');
    }
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
          text={editMode ? 'SAVE' : 'ADD'}
          style={styles.button}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            formSubmit(event)
          }
        />
      </form>
    </div>
  );
}

export default Form;
