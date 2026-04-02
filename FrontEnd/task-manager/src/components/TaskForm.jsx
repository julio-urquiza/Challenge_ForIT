import { useState } from 'react'
import { useContext } from "react"
import { RefreshContext } from '../context/RefreshContext.jsx'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { toggleRefresh } = useContext(RefreshContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title.trim() === "" || description.trim() === "") return;

        try {
            const res = await fetch("http://localhost:8080/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: title, description: description })
            })

            if (res.ok) {
                toggleRefresh()   
            }
            const data = await res.json()
            console.log("Respuesta:", data)
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default TaskForm