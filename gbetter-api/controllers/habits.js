const Habits = require('../models/Habits')

//@desc Get All Habits
//@route GET /api/v1/habits 
//@access private
exports.getHabits = async (req,res,next) => {
    try {
        const habits = await Habits.find()
        res.status(200).json({success:true, msg:'Show all habits',data:habits})
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false})
    }    
}

//@desc Get Habit
//@route GET /api/v1/habits/:id
//@access private
exports.getHabit = async (req,res,next) => {
    try {
        const habit = await Habits.findById(req.params.id)
        if(!habit){
            res.status(400).json({success:false})
        }
        res.status(200).json({success:true, msg:'Single habit by id',data:habit})
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false})
    }    
}
//@desc Get All Good Habits
//@route GET /api/v1/habits/goodHabits 
//@access private
exports.getGoodHabits = async (req,res,next) => {
    try {
        const habits = await Habits.find()
        const goodHabits = habits.filter(item => item.habitType[0] == 0)
        res.status(200).json({success:true, msg:'Show all habits',data:goodHabits})
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false})
    }    
}
//@desc Get All Habits
//@route GET /api/v1/habits/badHabits 
//@access private
exports.getBadHabits = async (req,res,next) => {
    try {
        const habits = await Habits.find()
        const goodHabits = habits.filter(item => item.habitType[0] == 1)
        res.status(200).json({success:true, msg:'Show all habits',data:goodHabits})
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false})
    }    
    res.status(200).json({success:true, msg:'Show bad habits'})
}

//@desc Create New Habit
//@route POST /api/v1/habits 
//@access private
exports.createHabit = async (req,res,next) => {
    const habit = await Habits.create(req.body)
    res.status(200).json({success:true, data:habit})
}

//@desc Update Habit
//@route PUT /api/v1/habits/:id
//@access private
exports.updateHabit = async (req,res,next) => {
    try {
        const habit = await Habits.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidator: true
        })
    
        if(!habit){
            res.status(400).json({success:false})
        }
        res.status(200).json({success:true, msg:`Update habits by id ${req.params.id}`, data: habit})
    } catch (error) {
        res.status(400).json({success:false})
    }
}

//@desc Delete Habit
//@route DELETE /api/v1/habits/:id
//@access private
exports.deleteHabit = async (req,res,next) => {
    try {
        const habit = await Habits.findByIdAndDelete(req.params.id)
    
        if(!habit){
            res.status(400).json({success:false})
        }
        res.status(200).json({success:true, msg:"Habit deleted"})
    } catch (error) {
        res.status(400).json({success:false})
    }
}

