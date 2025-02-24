
import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from './components/Header';
import { Input } from "./components/Input";
import { Empty } from "./components/List/Empty";
import { ListHeader } from "./components/List/ListHeader";



function App() {

  return (
    <div>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input  />
          <Button />
        </div>

        <div className={styles.taskListContainer}>
          <ListHeader />

          <Empty />
        </div>
      </section>
    </div>
  )
}

export default App
