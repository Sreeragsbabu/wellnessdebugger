const express = require('express');
const router = express.Router();

//get all patients
router.get('/patients/all', require("../routes/user/getAllPatients"));

//get patient by id
router.get('/patients/:id', require("../routes/user/getPatientById"));

//get all patients under doctor
router.get('/patients/doctor/:id', require("../routes/user/getAllPatients"));

//get doctor patients
router.get('/doctors/patients/:id', require("../routes/user/getDoctorPatients"));


module.exports = router;
