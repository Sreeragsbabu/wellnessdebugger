const bcrypt = require("bcryptjs");
const User = require("../models/User");

class UserService {
    async createUser(userData) {
        const { name, email, password, role } = userData;

        //check if user exists
        const isExist = await User.findOne({ email });
        if(isExist) {
            throw new Error("User already exists");
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            passwordHash,
            role
        });

        const savedUser = await newUser.save();
        return savedUser;
    }

    getAllPatients() {
        return User.find({ role: "patient" });
    }

    getPatientById(id) {
        return User.findById(id);
    }

    updatePatientById(id, data) {
        return User.findByIdAndUpdate(id, data, { new: true });
    }
}

module.exports = new UserService();