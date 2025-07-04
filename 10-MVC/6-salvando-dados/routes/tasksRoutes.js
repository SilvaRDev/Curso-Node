const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask) // Rotas que vão após o /tasks. Importado no Index via app.use
router.post('/add', TaskController.createTaskSave)
router.get('/', TaskController.showTasks)

module.exports = router
