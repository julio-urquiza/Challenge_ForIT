import taskService from "../services/task.service.js"

class TaskController {
    constructor(service) {
        this.service = service
    }

    getAllTask = async (req, res) => {
        try{
            const tasks = await this.service.getAll()
            res.send(tasks)
        }
        catch(error){
            res.status(error.status).json({message: error.message})
        }
    }

    createTask = async (req ,res) => {
        try{
            const task = req.body
            const result = await this.service.create(task)
            res.send({status: 'success', mensaje: 'Task created successfully', result})
        }
        catch(error){
            res.status(error.status).json({message: error.message})
        }
    }

    updateTask = async (req, res) => {
        try{
            const { id } = req.params
            const task = req.body
            const result = await this.service.update(id,task)
            res.send({status: 'Success', mensaje: 'The task has been modified successfully', result})
        }
        catch(error){
            res.status(error.status).json({message: error.message})
        }
    }

    deleteTask = async (req, res) => {
        try{
            const { id } = req.params
            const result = await this.service.delete(id)
            res.send({status: 'Success', mensaje: 'The task has been deleted successfully', result})
        }
        catch(error){
            res.status(error.status).json({message: error.message})
        }
    }
}

export default new TaskController(taskService)