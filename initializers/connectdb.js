const mongoose = require('mongoose');

module.exports = async function connectDB() {
    const conn = await mongoose.connect('mongodb://localhost:27017/rtc-node')
    conn.Error = console.error.bind(console, 'connection error:');
    
    console.log(`MongoDB connected: ${conn.connection.host}`);
}