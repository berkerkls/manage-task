const express = require('express')

const {getTasks,getTask,createTask,getSingleTasks,getRoadmaps,updateTask,deleteTask, completeTasks} = require('../controllers/tasks')

const router = express.Router()

const { protect } = require('../middleware/auth')
router.route('/').get(protect,getTasks).post(protect, createTask)
router.route('/singleTasks').get(protect,getSingleTasks)
router.route('/completeTasks').put(protect,completeTasks)
router.route('/roadmaps').get(protect,getRoadmaps)
router.route('/:id').get(protect ,getTask).put(protect ,updateTask).delete(protect,deleteTask)

module.exports = router

