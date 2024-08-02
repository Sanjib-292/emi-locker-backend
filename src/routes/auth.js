const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authcontroller');

// @route  POST api/auth/register
// @desc   Register user
// @access Public
router.post('/register', registerUser);

// @route  POST api/auth/login
// @desc   Login user
// @access Public
router.post('/login', loginUser);

module.exports = router;
