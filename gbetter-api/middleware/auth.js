const jwt = require('jsonwebtoken')
const asyncHandler = require('./async')
const ErrorResponse = require('../utils/errResponse')
const User = require('../models/User') 


exports.protect = asyncHandler(async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token  = req.headers.authorization.split(' ')[1]
    }

    if(!token){
        return next(new ErrorResponse('Not authorized to access', 401))
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('decoded', decoded )
        req.user = User.findById(decoded.id)
        next()
    } catch (error) {
        return next(new ErrorResponse('Not authorized to access', 401))
    }


})
