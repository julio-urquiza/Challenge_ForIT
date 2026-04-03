export default class Task {
    constructor(id, title, description, completed, createdAt) {
        this.id = id
        this.title = title
        this.description = description
        this.completed = completed || false
        this.createdAt = createdAt || new Date(Date.now())
    }
}