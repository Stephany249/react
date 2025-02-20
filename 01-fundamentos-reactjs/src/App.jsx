import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Step"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nulla fuga voluptas atque quisquam accusamus facilis adipisci, quas quae ipsa. Ea vero atque iusto nostrum illo magni aliquam velit rerum!
"
          />
          <Post author="Mar" content="Novo Post " />
        </main>
      </div>
    </div>
  );
}
