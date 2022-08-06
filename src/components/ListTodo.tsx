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
  onDelete: (id: number) => void;
  onSwitchChecked: (id: number) => void;
}

export function ListTodo({todos, onSwitchChecked, onDelete}: ListTodoProps) {

  const tasksCompleted = todos.reduce((acc, todo) => {
    if(todo.checked === true) {
      return acc + 1;
    }
    return acc;
  }, 0)

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
            { todos.length > 0 && `${tasksCompleted} de `}    
            { todos.length}
          </span>
        </div>
      </header>
      <main>
        { todos.length > 0 ? 
          (
            <div className={styles.list}>
              { todos.map(todo => (             
                <Task 
                  key={todo.id} 
                  id={todo.id}
                  title={todo.title}
                  checked={todo.checked} 
                  onDelete={onDelete}
                  onSwitchChecked={onSwitchChecked}
                />
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