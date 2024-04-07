const mongoose = require('mongoose');
const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan)
    } catch (error) {
        console.log(err)
        process.exit(1)
    }
}


module.exports = connectToDB;