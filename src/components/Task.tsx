import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  title: string;
  checked: boolean;
}

export function Task({title, checked}: TaskProps) {
  return(
    <div className={styles.container}>
      <div className={styles.checkBox}>
        <input type="checkbox" checked={checked} id="checkbox"/>
        <label htmlFor="checkbox"></label>
      </div>
      <p>{title}</p>
      <Trash/>
    </div>
  )
}