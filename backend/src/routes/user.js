const express = require('express');
const router = express.Router();

//get all patients
router.post('/patients/all', require("../routes/user/getAllPatients"));

module.exports = router;
