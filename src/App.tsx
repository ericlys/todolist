import { Header } from './components/Header';
import './global.css';

import styles from './App.module.css';
import { FormTodo } from './components/FormTodo';
import { ListTodo } from './components/ListTodo';

function App() {

  return (
    <div>
      <Header/>
      <main className={styles.content}>
        <FormTodo/>
        <ListTodo/>
      </main>
    </div>
  )
}

export default App
