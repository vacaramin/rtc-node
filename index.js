const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 4000;
const db = require('./initializers/connectdb');
app.use(cors());

// Require route files
const userRoutes = require('./routes/user.routes');
const messageRoutes = require('./routes/message.routes');

// Use route files
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});