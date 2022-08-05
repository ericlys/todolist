import { PlusCircle } from 'phosphor-react';
import styles from './FormTodo.module.css';

export function FormTodo() {
  return(
    <form onSubmit={() => {}} className={styles.todoForm}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button type='submit'>Criar 
        <PlusCircle />
      </button>
    </form>
  )
}