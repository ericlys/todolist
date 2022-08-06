import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  id: number;
  title: string;
  checked: boolean;
  onDelete: (id: number) => void;
  onSwitchChecked: (id: number) => void;
}

export function Task({id, title, checked, onDelete, onSwitchChecked}: TaskProps) {

  function handleSwitchChecked(){
    onSwitchChecked(id);
  }

  function handleDelete(){
    onDelete(id);
  }

  return(
    <div className={styles.container}>
      <div className={styles.checkBox}>
        <input type="checkbox" checked={checked} onChange={handleSwitchChecked} id={id.toString()}/>
        <label htmlFor={id.toString()}></label>
      </div>
      <p className={ checked ? styles.scratch : ''}>{title}</p>
      <Trash onClick={handleDelete}/>
    </div>
  )
}