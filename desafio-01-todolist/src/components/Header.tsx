import styles from "./Header.module.css";

import logo from "../../public/logo.svg";


export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo" />
    </header>
  )
}