const express = require('express')

const {getHabits,getHabit,getBadHabits,getGoodHabits,createHabit,updateHabit,deleteHabit} = require("../controllers/habits")

const router = express.Router()

const { protect } = require('../middleware/auth')

router.route('/').get(protect,getHabits).post(protect, createHabit)
router.route('/goodHabits').get(protect,getGoodHabits)
router.route('/badHabits').get(protect,getBadHabits)
router.route('/:id').get(protect ,getHabit).put(protect ,updateHabit).delete(protect,deleteHabit)

module.exports = router

