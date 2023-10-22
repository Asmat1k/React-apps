import styles from './form.module.scss';

import MyInput from "../UI/myInput";
import MyButton from '../UI/myButton';

import { useState } from 'react';

//!TODO Убрать any
interface Props {
  createToDo: any,
}

function Form({createToDo}: Props) {
  const [todo, setTodo] = useState({isDone: false, title: '', text: '', time: ''});

  function addNewToDo(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const newToDo = {
      id: Date.now(), ...todo
    }
    // Props
    createToDo(newToDo);
    setTodo({isDone: false, title: '', text: '', time: ''});
  }

  return (
    <form className={styles.form}>
      <MyInput 
        type="text" 
        placeholder="Your todo title" 
        value={todo.title} 
        onChange={(event) => setTodo({...todo, title: event.target.value})}
      />
      <MyInput 
        type="text" 
        placeholder="Your todo" 
        value={todo.text} 
        onChange={(event) => setTodo({...todo, text: event.target.value})}
      />
      <MyInput 
        type="text" 
        placeholder="Time for todo (type mins, hours, days)" 
        value={todo.time} 
        onChange={(event) => setTodo({...todo, time: event.target.value})}
      />
      <MyButton 
        text={"ADD"}
        style={styles.button} 
        onClick={todo.title && todo.text ? addNewToDo : (e) => e.preventDefault() } 
      />
    </form>
  );
}

export default Form;
