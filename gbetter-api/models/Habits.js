const mongoose = require('mongoose')
const slugify = require('slugify')


const HabitsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique:true,
        maxlength:[60, 'Title cannot be more than 50 characters']
    },
    slug: String,
    description:{
        type: String,
        maxlength:[500, 'Description cannot be more than 500 characters']
    },
    habitType: {
        type: Number,
        required:[true, 'Please add a habit type'],
        enum:[
            0, // good habit
            1 , // bad habit
            2 //undecided
        ]
    },
    timePeriod: {
        type:Number,
        required: [true, 'Please add a time period'],
        enum:[
            0,  //daily
            1,  // weekly
            2,  // monthly
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

HabitsSchema.pre('save', function(next){
    this.slug = slugify(this.title, {lower: true})
    next();
})


module.exports = mongoose.model('Habits', HabitsSchema)