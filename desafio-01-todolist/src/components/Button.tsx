import { PlusCircle } from "@phosphor-icons/react";

import styles from './Button.module.css'
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({...rest}: Props) {
  return (
    <button className={styles.container} {...rest}>
      Criar
      <PlusCircle size={16} weight="bold" />
    </button>
  )
}