import Task from "../../models/task.js"

class TaskMemory {
    constructor(tasks) {
        this.tasks = tasks
    }

    find = async () => {
        return this.tasks
    }

    findById = async (id) => {
        return this.tasks.find(task => task.id === id)
    }

    create = async (body) => {
        const task = new Task(Date.now().toString(), body.title, body.description)
        this.tasks.push(task)
        return task
    }

    findByIdAndUpdate = async (id, body) => {
        const index = this.tasks.findIndex(task => task.id === id)
        if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...body }
            return this.tasks[index]
        }
    }

    findByIdAndDelete = async (id) => {
        const index = this.tasks.findIndex(task => task.id === id)
        if (index !== -1) {
            return this.tasks.splice(index, 1)[0]
        }
    }

    exists = async (id) => {
        return this.tasks.some(task => task.id === id)
    }


}

const tasks = [
    new Task("1", "Comprar comida", "Ir al supermercado y comprar lo necesario para la semana"),
    new Task("2", "Estudiar React", "Repasar hooks, useEffect y manejo de estado global",true),
    new Task("3", "Entrenar", "Hacer rutina de pecho y tríceps en el gimnasio"),
    new Task("4", "Leer", "Leer 30 páginas de un libro de programación"),
    new Task("5", "Proyecto backend", "Avanzar con la API de gestión de tareas",true),
    new Task("6", "Limpiar casa", "Ordenar habitación y limpiar el escritorio"),
    new Task("7", "Practicar JavaScript", "Resolver ejercicios de arrays y objetos"),
    new Task("8", "Revisar emails", "Responder correos pendientes del trabajo",true),
    new Task("9", "Salir a correr", "Correr al menos 5km en el parque"),
    new Task("10", "Planificar semana", "Organizar objetivos y tareas de la próxima semana",true)
];
export default new TaskMemory(tasks)