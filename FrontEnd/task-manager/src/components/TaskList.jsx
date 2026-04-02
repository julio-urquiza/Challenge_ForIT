import useFetch from "../hooks/useFetch.js"
import TaskItem from "./TaskItem.jsx"
import { useContext } from "react"
import { RefreshContext } from '../context/RefreshContext.jsx'


function TaskList() {
    const { refresh } = useContext(RefreshContext)
    const { data, loading, error } = useFetch("http://localhost:8080/api/tasks", refresh)

    if (loading) return <p>Cargando tareas...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h2>Tareas</h2>
            <ul>
                {data.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>)
}
export default TaskList;