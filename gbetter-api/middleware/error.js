const ErrorResponse = require("../utils/errResponse")

const errorHandler = (err, req,res,next) => {
    let error = {...err}
    error.message = err.message
    console.log(req.param)
    if(err.name === 'CastError'){
        const message = `Habit not found by id ${err.value}`
        error = new ErrorResponse(message,404)
    }
    console.log(err.stack.red)
    res.status(error.statusCode ?? 500).json({
        success:false,
        err: error.message ?? 'Server Error'
    })
}

module.exports = errorHandler