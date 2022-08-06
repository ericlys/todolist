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
    setTodos([ newTodo, ...todos])
  }

  function handleDelete(id: number) {
    const newListRemovingTodo = todos.filter(todo => todo.id !== id);
    setTodos(newListRemovingTodo);
  }

  function handleSwitchChecked(id: number) {
    const newListWithTodoChecked = todos.map(todo => {
      if(todo.id === id){
        return {...todo, checked: !todo.checked};
      }
      return todo;
    })
    setTodos(newListWithTodoChecked);
  }

  return (
    <div>
      <Header/>
      <main className={styles.content}>
        <FormTodo handleNewTodo={handleNewTodo}/>
        <ListTodo todos={todos} onDelete={handleDelete} onSwitchChecked={handleSwitchChecked}/>
      </main>
    </div>
  )
}

export default App
