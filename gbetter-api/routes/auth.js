const express = require('express')
const { registerUser,loginUser, getLoggedInUser } = require('../controllers/auth')
const {protect} = require('../middleware/auth')

const router = express.Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)
router.route('/loggedInUser').get(protect,getLoggedInUser)


module.exports = router 