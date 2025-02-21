import { PencilSimpleLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1739785891796-7fd9028e1930?q=50&w=500"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/stephany249.png" />
        <strong>Stephany</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
