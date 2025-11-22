const User = require("../../services/User");

const Controller = async (req, res) => {
    try {
        const patients = await User.find({ role: "patient" });
        res.send({ patients });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
};

module.exports = Controller;