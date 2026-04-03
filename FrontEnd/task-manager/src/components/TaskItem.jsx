import useTasks from "../hooks/useTask.jsx"

function TaskItem({ task }) {
    const { updateTask, deleteTask } = useTasks()  
    const handleChangeStatus = async () => updateTask({ ...task, completed: !task.completed })
    const handleDelete = async () => deleteTask(task.id)

    return (
        <article
            key={task.id}
            className={` shadow-md rounded-2xl p-4 flex flex-col justify-between gap-3 h-50 w-1/5 ${task.completed
                            ? "bg-green-100"
                            : "bg-yellow-100"
                        }`}
        >
            <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">
                    {task.title}
                </h3>

                <span
                    className={`text-xs px-2 py-1 rounded-full ${task.completed
                            ? "bg-green-200 text-green-700"
                            : "bg-yellow-200 text-yellow-700"
                        }`}
                >
                    {task.completed ? "Completada" : "Pendiente"}
                </span>
            </div>

            <p className="text-gray-600 text-sm">
                {task.description}
            </p>

            <div className="flex flex-row justify-between gap-2 mt-2 w-full">
                <button
                    onClick={handleChangeStatus}
                    className={`opacity-50  p-3 rounded-2xl active:scale-95 transition text-sm ${task.completed
                            ? "bg-gray-600 hover:bg-red-600"
                            : "bg-gray-600 hover:bg-green-600"
                        }`}
                >
                    {task.completed 
                    ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>}
                </button>

                <button
                    onClick={handleDelete}
                    className="bg-red-500 p-3 rounded-2xl hover:bg-red-600 active:scale-95 transition text-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
            </div>
        </article>
    )
}
export default TaskItem