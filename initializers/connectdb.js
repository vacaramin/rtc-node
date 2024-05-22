const mongoose = require('mongoose');



const connect = () =>{
    return mongoose.connect("mongodb://localhost:27017/rtc-node")
}


module.exports = function connectDB() {
    const conn = mongoose.connect('mongodb://localhost:27017/rtc-node')
    conn.Error = console.error.bind(console, 'connection error:');
    return conn;    
}

