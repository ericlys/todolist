import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return(
    <div className={styles.container}>
      <div className={styles.checkBox}>
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox"></label>
      </div>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash/>
    </div>
  )
}