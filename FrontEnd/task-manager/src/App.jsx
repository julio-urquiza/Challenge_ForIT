import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'

function App() {
  return (
    < >
      <h1 className="text-center text-4xl font-bold text-gray-800">Gestor de tareas</h1>
      <TaskForm/>
      <TaskList/>
    </>
  )
}

export default App
