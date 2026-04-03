import { useState } from 'react'
import useTasks from "../hooks/useTask.jsx"

function TaskForm() {
    const { createTask } = useTasks()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit2 = async (e) => {
        e.preventDefault()
        if (title.trim() === "" || description.trim() === "") return
        await createTask({ title, description })
    }

    return (
        <form
            onSubmit={handleSubmit2}
            className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col gap-4"
        >
            <h2 className="text-xl font-semibold text-gray-800">Nueva tarea</h2>

            <input
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition"
            >
                Enviar
            </button>
        </form>
    );
}

export default TaskForm