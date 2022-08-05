import styles from './ListTodo.module.css';
import clipboard from '../assets/clipboard.svg';


export function ListTodo() {
  return(
    <div className={styles.content}>
      <header className={styles.header}>
        <div>
        <p>Tarefas criadas</p> <span>0</span>
        </div>
        <div>
          <p>Concluídas</p> <span>0</span>
        </div>
      </header>
      <main>
        <div className={styles.emptList}>
          <img src={clipboard} alt="clipboard" />
          <span>Você ainda não tem tarefas cadastradas</span>
          Crie tarefas e organize seus itens a fazer
        </div>
      </main>
    </div>
  )
}