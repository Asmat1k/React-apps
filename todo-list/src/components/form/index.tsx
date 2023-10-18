import styles from './form.module.scss';

import MyInput from "../UI/myInput";
import MyButton from '../UI/myButton';

import { useState } from 'react';

function Form() {
  const [todo, setTodo] = useState({title: '', text: ''});

  return (
    <form className={styles.form}>
        <MyInput 
          type="text" 
          placeholder="Your todo title" 
          value={todo.title} 
          onChange={(event) => setTodo({...todo, title: event.target.value})} />
        <MyInput 
          type="text" 
          placeholder="Your todo" 
          value={todo.text} 
          onChange={(event) => setTodo({...todo, text: event.target.value})} />
        {/* TODO! Сделать норм колбек */}
        <MyButton onClick={(event) => { event?.preventDefault(); console.log(todo); }} text={"ADD"}/>
      </form>
  );
}

export default Form;
