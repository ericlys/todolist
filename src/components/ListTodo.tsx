import styles from './ListTodo.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from './Task';

interface Todo{
  id: number;
  title: string;
  checked: boolean;
}

interface ListTodoProps {
  todos: Todo[];
}

export function ListTodo({todos}: ListTodoProps) {
  // console.log(todos)

  return(
    <div className={styles.content}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p> 
          <span>{todos.length}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span> 
            { todos.length > 0 && `0 de `}
            {todos.length}
          </span>
        </div>
      </header>
      <main>
        { todos.length > 0 ? 
          (
            <div className={styles.list}>
              { todos.map(todo => (             
                <Task key={todo.id} title={todo.title} checked={todo.checked}/>
              ))}
            </div>
          )
        :
        (
          <div className={styles.emptList}>
            <img src={clipboard} alt="clipboard" />
            <span>Você ainda não tem tarefas cadastradas</span>
            Crie tarefas e organize seus itens a fazer
          </div>
        )}
      </main>
    </div>
  )
}