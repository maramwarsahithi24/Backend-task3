const express = require('express');
const router = express.Router();
const verifyToken = require('./middleware/auth');
const requireAuth = require('./middleware/auth');

router.get('/login',(req, res) => {
    return res.render('login');
});

router.get('/signup',(req, res) => {
    return res.render('signup');
});

module.exports = router;