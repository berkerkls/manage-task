const express = require('express')
const dotenv = require('dotenv')

//routes
const habits = require('./routes/habits')

dotenv.config({path:'./config/config.env'})

const app = express()

app.use('api/v1/habits',habits)



const PORT = process.env.PORT ?? 5000


app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))