const { default: mongoose } = require("mongoose")
const ErrorResponse = require("../utils/errResponse")

const errorHandler = (err, req,res,next) => {
    let error = {...err}
    error.message = err.message
    if(err.name === 'CastError'){
        const message = `Habit not found by id ${err.value}`
        error = new ErrorResponse(message,404)
    }
    if(err instanceof mongoose.Error.ValidationError){
        const message = Object.values(err.errors).map(item => item.properties.message)
        error = new ErrorResponse(message, 400)
    }
    if(err.code === 11000){
        const message = 'Duplicate value entered'
        error = new ErrorResponse(message,400)
    }
    res.status(error.statusCode ?? 500).json({
        success:false,
        err: error.message ?? 'Server Error'
    })
}

module.exports = errorHandler