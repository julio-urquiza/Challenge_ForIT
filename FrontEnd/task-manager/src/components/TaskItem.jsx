import { useContext } from "react";
import { RefreshContext } from '../context/RefreshContext.jsx'

function TaskItem({task}) {
    const { toggleRefresh } = useContext(RefreshContext)
    
    const handleChangeStatus = async () => {
         try {
            const res = await fetch(`http://localhost:8080/api/tasks/${task.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: task.title, description: task.description, completed: !task.completed })
            })
            if (res.ok) {
                toggleRefresh()   
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/tasks/${task.id}`, {
                method: "DELETE"
            })
            if (res.ok) {
                toggleRefresh()
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={handleChangeStatus}>
                {task.completed ? "Completada" : "Pendiente"}
            </button>
            <p>{task.createdAt}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}
export default TaskItem;