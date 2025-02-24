
import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from './components/Header';
import { Input } from "./components/Input";
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
        </div>
      </section>
    </div>
  )
}

export default App
