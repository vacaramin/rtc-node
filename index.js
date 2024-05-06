const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

app.use(cors());

// Require route files
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Use route files
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});