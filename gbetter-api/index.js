const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
require('colors');
const errorHandler = require('./middleware/error.js')


dotenv.config({path:'./config/config.env'})

//connect db
connectDB();

const app = express()

//body parser
app.use(express.json())

//routes
const tasks = require('./routes/tasks.js')
const auth = require('./routes/auth.js')



if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// mount routers
app.use('/api/v1/tasks',tasks)
app.use('/api/v1/auth',auth)

app.use(errorHandler)

const PORT = process.env.PORT ?? 5000


const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

process.on('unhandledRejection',(err, promise) => {
    console.log(`Err: ${err.message}`)
    server.close(() => process.exit(1))
})