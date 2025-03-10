import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from './Input.module.css'


export function Input({...rest}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input 
      className={styles.container}
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  )
}