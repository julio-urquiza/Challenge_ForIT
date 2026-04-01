import taskDao from "../daos/task.dao.js"
import CustomError from "../utils/custom.error.js"

class TaskService {
    constructor(dao) {
        this.dao = dao
    }

    getAll = async () => {
        try {
            return await this.dao.getAll()
        } catch (error) {
            throw error
        }
    }

    getById = async (id) => {
        try {
            if (!await this.dao.exists(id)) {
                throw new CustomError(404, 'Task not found')
            }
            return await this.dao.getById(id)
        } catch (error) {
            throw error
        }
    }

    create = async (body) => {
        try {
            const {title, description} = body
            if (!title || !description) {
                throw new CustomError(400, 'Title and description are required')
            }
            return await this.dao.create(body)
        } catch (error) {
            throw error
        }
    }

    update = async (id, body) => {
        try {
            const {title, description} = body
            if (!title || !description) {
                throw new CustomError(400, 'Title and description are required')
            }
            if (!await this.dao.exists(id)) {
                throw new CustomError(404, 'Task not found')
            }
            return await this.dao.update(id, body)
        } catch (error) {
            throw error
        }
    }

    delete = async (id) => {
        try {
            if (!await this.dao.exists(id)) {
                throw new CustomError(404, 'Task not found')
            }
            return await this.dao.delete(id)
        } catch (error) {
            throw error
        }
    }

}  

export default new TaskService(taskDao)