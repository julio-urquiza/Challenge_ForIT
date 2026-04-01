import { Router } from 'express'
import taskController from '../controllers/task.controller.js'

const router = Router()

router.get('/api/tasks', taskController.getAllTask)
router.post('/api/tasks', taskController.createTask)
router.put('/api/tasks/:id', taskController.updateTask)
router.delete('/api/tasks/:id', taskController.deleteTask)
router.use((req, res) => res.status(404).send({ status: 'error', message: 'Ruta no encontrada' }))

export default router