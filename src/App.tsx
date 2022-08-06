import { Header } from './components/Header';
import './global.css';

import styles from './App.module.css';
import { FormTodo } from './components/FormTodo';
import { ListTodo } from './components/ListTodo';
import { useState } from 'react';

interface Todo{
  id: number;
  title: string;
  checked: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);

  function handleNewTodo(todo: string) {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: todo,
      checked: false      
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <Header/>
      <main className={styles.content}>
        <FormTodo handleNewTodo={handleNewTodo}/>
        <ListTodo todos={todos}/>
      </main>
    </div>
  )
}

export default App
