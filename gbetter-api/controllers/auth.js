const User = require('../models/User')
const ErrorResponse = require('../utils/errResponse')
const asyncHandler = require('../middleware/async')

//@desc Register user
//@route GET /api/v1/auth/register 
//@access publice

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