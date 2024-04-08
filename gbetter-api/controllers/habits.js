const Habits = require('../models/Habits')
const ErrorResponse = require('../utils/errResponse')
const asyncHandler = require('../middleware/async')

//@desc Get All Habits
//@route GET /api/v1/habits 
//@access private
exports.getHabits = asyncHandler(async (req,res,next) => {
        const habits = await Habits.find()
        res.status(200).json({success:true, msg:'Show all habits',data:habits})
    
}) 

//@desc Get Habit
//@route GET /api/v1/habits/:id
//@access private
exports.getHabit = asyncHandler(async (req,res,next) => {
        const habit = await Habits.findById(req.params.id)
        if(!habit){
            next(new ErrorResponse(`Habit not found by id ${req.params.id}`, 404))
        }
        res.status(200).json({success:true, msg:'Single habit by id',data:habit})
}) 
//@desc Get All Good Habits
//@route GET /api/v1/habits/goodHabits 
//@access private
exports.getGoodHabits = asyncHandler(async (req,res,next) => {
        const habits = await Habits.find()
        const goodHabits = habits.filter(item => item.habitType == 0)
        res.status(200).json({success:true, msg:'Show all habits',data:goodHabits})
}) 
//@desc Get All Habits
//@route GET /api/v1/habits/badHabits 
//@access private
exports.getBadHabits = asyncHandler(async (req,res,next) => {
        const habits = await Habits.find()
        const goodHabits = habits.filter(item => item.habitType == 1)
        res.status(200).json({success:true, msg:'Show all bad habits',data:goodHabits})
}) 

//@desc Create New Habit
//@route POST /api/v1/habits 
//@access private
exports.createHabit = asyncHandler(async (req,res,next) => {
        const habit = await Habits.create(req.body)
        res.status(200).json({success:true, data:habit})
   
}) 

//@desc Update Habit
//@route PUT /api/v1/habits/:id
//@access private
exports.updateHabit = asyncHandler(async (req,res,next) => {
        const habit = await Habits.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidator: true
        })
        if(!habit){
            next(new ErrorResponse(`Habit by id ${req.params.id} couldn't be found and updated`,404))
        }
        res.status(200).json({success:true, msg:`Update habits by id ${req.params.id}`, data: habit})
}) 

//@desc Delete Habit
//@route DELETE /api/v1/habits/:id
//@access private
exports.deleteHabit = asyncHandler(async (req,res,next) => {
        const habit = await Habits.findByIdAndDelete(req.params.id)
        if(!habit){
            next(new ErrorResponse(`Habit by id ${req.params.id} couldn't be found and deleted`,404))
        }
        res.status(200).json({success:true, msg:"Habit deleted"})
}) 

