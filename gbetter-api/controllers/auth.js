const User = require('../models/User')
const ErrorResponse = require('../utils/errResponse')
const asyncHandler = require('../middleware/async')

//@desc Register user
//@route GET /api/v1/auth/register 
//@access public

exports.registerUser = asyncHandler(async (req,res,next) => {
    const {name, email, password} = req.body

    const user = await User.create({
        name,
        email,
        password
    })

    const token = user.getSignedJwtToken()

    res.status(200).json({success:true, msg:'User registered',token: token})
})

//@desc Login user
//@route GET /api/v1/auth/login 
//@access public

exports.loginUser = asyncHandler(async (req,res,next) => {
    const { email, password} = req.body
    if(!email || !password){
     return next(new ErrorResponse('Please enter an email and password', 400))
    }

    const user = await User.findOne({email: email}).select('+password')

    if(!user){
        return next(new ErrorResponse('Email or password is wrong. Check and try login again.',401))
    }

    //Check if password ok
    const isMatched = await user.matchPassword(password)

    if(!isMatched){
        return next(new ErrorResponse('Email or password is wrong. Check and try login again.',401))
    }
    const token = user.getSignedJwtToken()

    res.status(200).json({success:true, msg:'Login is successfull ',token: token})

})


//@desc Logged in user
//@route GET /api/v1/auth/loggedInUser 
//@access public

exports.getLoggedInUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id)
    res.status(200).json({
        success: true,
        data: user
    })
})

