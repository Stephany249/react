
import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from './components/Header';
import { Input } from "./components/Input";



function App() {

  return (
    <div>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input  />
          <Button />
        </div>
      </section>
    </div>
  )
}

export default App
