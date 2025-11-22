const express = require('express');
const router = express.Router();

// get patients vitals
router.get('/patients/:patientId/vitals', require("../routes/vitals/getPatientVitals"));

//create vitals
router.post('/patients/:patientId/vitals', require("../routes/vitals/createPatientVitals"));


module.exports = router;
