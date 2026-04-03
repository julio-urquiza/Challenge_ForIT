import { useContext, useEffect, useState } from "react"
import { RefreshContext } from '../context/RefreshContext.jsx'

function useTasks() {
    const { refresh, toggleRefresh } = useContext(RefreshContext)
    const [tasks, setTasks] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const url = "http://localhost:8080/api/tasks"

    const getTasks = async () => {
        const res = await fetch(url)
        return res.json()
    }

    useEffect(() => {
        setLoading(true)
        getTasks()
        .then(data => setTasks(data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [refresh])


    const createTask = async (task) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })

        if (res.ok) toggleRefresh()
    }

    const updateTask = async (task) => {
        const res = await fetch(`${url}/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })

        if (res.ok) toggleRefresh()
    }

    const deleteTask = async (id) => {
        const res = await fetch(`${url}/${id}`, {
            method: "DELETE"
        })

        if (res.ok) toggleRefresh()
    }

    return { tasks, loading, error, createTask, updateTask, deleteTask }
}
export default useTasks;