
//@desc Get All Habits
//@route GET /api/v1/habits 
//@access private
exports.getHabits = (req,res,next) => {
    res.status(200).json({success:true, msg:'Show all habits'})
}

//@desc Get Habit
//@route GET /api/v1/habits/:id
//@access private
exports.getHabit = (req,res,next) => {
    res.status(200).json({success:true, msg:`Show habits by id ${req.params.id}`})
}
//@desc Get All Good Habits
//@route GET /api/v1/habits/goodHabits 
//@access private
exports.getGoodHabits = (req,res,next) => {
    res.status(200).json({success:true, msg:'Show goals'})
}
//@desc Get All Habits
//@route GET /api/v1/habits/badHabits 
//@access private
exports.getBadHabits = (req,res,next) => {
    res.status(200).json({success:true, msg:'Show bad habits'})
}

//@desc Create New Habit
//@route POST /api/v1/habits 
//@access private
exports.createHabit = (req,res,next) => {
    res.status(200).json({success:true, msg:'Create habit'})
}

//@desc Update Habit
//@route PUT /api/v1/habits/:id
//@access private
exports.updateHabit = (req,res,next) => {
    res.status(200).json({success:true, msg:`Update habits by id ${req.params.id}`})
}

//@desc Delete Habit
//@route DELETE /api/v1/habits/:id
//@access private
exports.deleteHabit = (req,res,next) => {
    res.status(200).json({success:true, msg:`Delete habits by id ${req.params.id}`})
}

