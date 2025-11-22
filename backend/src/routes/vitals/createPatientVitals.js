const Vitals = require("../../models/Vitals");

const Controller = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params.patientId);
        // Extract patientId from URL params and merge with body
        const vitalsData = {
            ...req.body,
            patientId: req.params.patientId
        };
        
        const vitals = await Vitals.create(vitalsData);
        res.send({ vitals });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
};

module.exports = Controller;