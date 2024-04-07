const express = require('express')

const {getHabits,getHabit,getBadHabits,getGoodHabits,createHabit,updateHabit,deleteHabit} = require("../controllers/habits")

const router = express.Router()

router.route('/').get(getHabits).post(createHabit)
router.route('/goodHabits').get(getGoodHabits)
router.route('/badHabits').get(getBadHabits)
router.route('/:id').get(getHabit).put(updateHabit).delete(deleteHabit)

module.exports = router

