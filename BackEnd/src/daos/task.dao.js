import taskMemory from "./memory/task.memory.js"

class TaskDao {
    constructor(model) {
        this.model = model 
    }

    getAll = async () => {
        try {
            return await this.model.find({})
        } catch (error) {
            throw error
        }
    }

    getById = async (id) => {
        try {
            return await this.model.findById(id)
        } catch (error) {
            throw error
        }
    }

    create = async (body) => {
        try {
            return await this.model.create(body)
        } catch (error) {
            throw error
        }
    }

    update = async (id, body) => {
        try {
            return await this.model.findByIdAndUpdate(id, body)
        } catch (error) {
            throw error
        }
    }

    delete = async (id) => {
        try {
            return await this.model.findByIdAndDelete(id)
        } catch (error) {
            throw error
        }
    }

    exists = async (id) => {
        try {
            return await this.model.exists(id)
        } catch (error) {
            throw error
        }
    }
}  

export default new TaskDao(taskMemory)