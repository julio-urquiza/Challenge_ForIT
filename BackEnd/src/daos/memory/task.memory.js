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
    new Task("1", 'Task 1', 'Description 1'),
    new Task("2", 'Task 2', 'Description 2'),
    new Task("3", 'Task 3', 'Description 3'),
    new Task("4", 'Task 4', 'Description 4')
]
export default new TaskMemory(tasks)