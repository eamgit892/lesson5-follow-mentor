import { useEffect, useState } from 'react'
import { List } from './components/List.jsx'
import {v4 as uuidv4} from 'uuid'

import { DateComponent } from './components/DateComponent.jsx'; 

function App() {
  // callback for useState 
  const syncLocalStorage = () => {
    const localStorageTasks = localStorage.getItem('tasks')
    if (!localStorageTasks) return []
    else return JSON.parse(localStorageTasks);
  }

  const [tasks, setTasks] = useState(syncLocalStorage);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  useEffect(() => { localStorage.setItem('tasks', JSON.stringify(tasks))}, [tasks])

  const addTask = (e) => {
    if (e.key == "Enter" && e.target.value !== '') {
      setTasks(
        [...tasks, {
          id: uuidv4(),
          title: newTaskTitle, 
          status: false
        }]
      )
      e.target.value = '' 
        setNewTaskTitle('') ; 

    }
  }
  
  return (
    <div className="container">
       <h1>Note your task</h1>
       <DateComponent/>
        <div className="input-field">
          <input type="text" className="task-name" id="taskInp"
          // value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown = {addTask}
          />
          <label className='task-label' htmlFor='taskInp'>Task name</label>
        </div>
       {/* <List tasks={tasks}/> */}
       <List tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
