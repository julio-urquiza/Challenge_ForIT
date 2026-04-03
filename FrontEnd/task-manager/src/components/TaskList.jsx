import TaskItem from "./TaskItem.jsx"
import useTasks from "../hooks/useTask.jsx"

function TaskList() {
    const { tasks, loading, error } = useTasks()
    if (loading) return <p>Cargando tareas...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <section>
            <h2 className="text-center text-3xl font-bold text-gray-800">Tareas</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                {tasks?.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </section>
    )
}
export default TaskList;