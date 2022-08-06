import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './FormTodo.module.css';

interface FormTodoProps {
  handleNewTodo: (todo: string) => void;
}

export function FormTodo({handleNewTodo}: FormTodoProps) {
  const [todo, setTodo] = useState('');
  
  function handleAddTodo(event: FormEvent){
    event.preventDefault();

    if(todo) {
      handleNewTodo(todo);
      setTodo('');
    }
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTodo(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
   }
 
  return(
    <form onSubmit={handleAddTodo} className={styles.todoForm}>

      <input 
        type="text" 
        value={todo} 
        onChange={handleNewTodoChange}
        onInvalid={handleNewTodoInvalid} 
        placeholder='Adicione uma nova tarefa'/>

      <button type='submit'>Criar 
        <PlusCircle />
      </button>
    </form>
  )
}