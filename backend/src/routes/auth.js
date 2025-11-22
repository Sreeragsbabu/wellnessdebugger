const express = require('express');
const router = express.Router();

//register
router.post('/register', require("../routes/auth/register"));

//login
router.post('/login', require("../routes/auth/login"));

module.exports = router;
