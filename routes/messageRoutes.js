const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Message Home Page');
});

router.get('/profile', (req, res) => {
    res.send('User Profile Message Page');
});

module.exports = router;