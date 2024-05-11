const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {type: string, required: true},
    DOB: {type: Date, required: true},
    firstName: {type: String, required: true},
});

const User = mongoose.model('User', userSchema);

module.exports = User;