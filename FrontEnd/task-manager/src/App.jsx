import { useState } from 'react'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'

function App() {
  
  return (
    <div >
      <h1>Gestor de tareas</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default App
