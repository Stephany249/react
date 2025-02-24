
import { useState } from "react";
import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from './components/Header';
import { Input } from "./components/Input";
import { Empty } from "./components/List/Empty";
import { ListHeader } from "./components/List/ListHeader";
import { Item } from "./components/List/Item";

export interface Task {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: Task = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <div>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input 
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
           />
          <Button onClick={handleAddTask} />
        </div>

        <div className={styles.taskListContainer}>
          <ListHeader 
             tasksCounter={tasks.length}
             checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length === 0 ? (
            <Empty />
            ) : (
            tasks.map((task) => (
              <Item 
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
              />
            ))
          )}

         
        </div>
      </section>
    </div>
  )
}

export default App
