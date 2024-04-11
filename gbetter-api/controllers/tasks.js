const Task = require('../models/Task')
const ErrorResponse = require('../utils/errResponse')
const asyncHandler = require('../middleware/async')

//@desc Get All Tasks
//@route GET /api/v1/tasks 
//@access private
exports.getTasks = asyncHandler(async (req,res,next) => {
        const tasks = await Task.find()
        res.status(200).json({success:true, msg:'Show all tasks',items:tasks})
    
}) 

//@desc Get Tasks
//@route GET /api/v1/tasks/:id
//@access private
exports.getTask = asyncHandler(async (req,res,next) => {
        const task = await Task.findById(req.params.id)
        if(!task){
            next(new ErrorResponse(`Task not found by id ${req.params.id}`, 404))
        }
        res.status(200).json({success:true, msg:'Single task by id',item:task})
}) 
//@desc Get All Single Tasks
//@route GET /api/v1/tasks/singleTasks
//@access private
exports.getSingleTasks = asyncHandler(async (req,res,next) => {
        const tasks = await Task.find()
        const singleTasks = tasks.filter(item => item.taskType == 0)
        res.status(200).json({success:true, msg:'Show all single tasks',items:singleTasks})
}) 
//@desc Get All Roadmaps
//@route GET /api/v1/habits/roadmaps 
//@access private
exports.getRoadmaps = asyncHandler(async (req,res,next) => {
        const tasks = await Task.find()
        const roadmaps = tasks.filter(item => item.taskType == 1)
        res.status(200).json({success:true, msg:'Show all roadmaps',items:roadmaps})
}) 

//@desc Create New Task
//@route POST /api/v1/tasks 
//@access private
exports.createTask = asyncHandler(async (req,res,next) => {
        const task = await Task.create(req.body)
        res.status(200).json({success:true, item:task})
   
}) 

//@desc Update Task
//@route PUT /api/v1/tasks/:id
//@access private
exports.updateTask = asyncHandler(async (req,res,next) => {
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidator: true
        })
        if(!task){
            next(new ErrorResponse(`Task by id ${req.params.id} couldn't be found and updated`,404))
        }
        res.status(200).json({success:true, msg:`Update task by id ${req.params.id}`, item: task})
}) 

//@desc Delete Task
//@route DELETE /api/v1/tasks/:id
//@access private
exports.deleteTask = asyncHandler(async (req,res,next) => {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            next(new ErrorResponse(`Task by id ${req.params.id} couldn't be found and deleted`,404))
        }
        res.status(200).json({success:true, msg:"Task deleted"})
}) 

