
// const Vitals = require("../../models/Vitals");
// const User = require("../../services/User");

const User = require("../../models/User");
const Vitals = require("../../models/Vitals");

// const Controller = async (req, res) => {
//     try {
//         const vitals = await Vitals.find({ user: req.params.patientId });
//         res.send({ vitals });
//     } catch (e) {
//         res.status(500).send({ error: e.message });
//     }
// };

// module.exports = Controller;

const Controller = async (req, res) => {
    try {
        // Optional: verify patient exists
        const patient = await User.findById(req.params.patientId);
        if (!patient) {
            return res.status(404).send({ error: "Patient not found" });
        }

        const vitals = await Vitals.find({ patientId: req.params.patientId })
            .sort({ recordedAt: -1 });
        
        res.send({ vitals });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
};

module.exports = Controller;