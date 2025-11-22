require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/wellnessdebugger';

(async () => {
    await mongoose.connect(MONGO);
    console.log('connected to mongo for seeding...');

    await User.deleteMany({});

    const users = [
        {
            name: 'Sreerag',
            email: 'doctor@gmail.com',
            passwordHash: await bcrypt.hash('doctor123', 10),
            role: 'doctor'
        },
        {
            name: 'Ravi',
            email: 'ravi@gmail.com',
            passwordHash: await bcrypt.hash('patient123', 10),
            role: 'patient'
        },
        {
            name: 'Arun',
            email: 'arun@gmail.com',
            passwordHash: await bcrypt.hash('patient123', 10),
            role: 'patient'
        },
        {
            name: 'Somi',
            email: 'somi@gmail.com',
            passwordHash: await bcrypt.hash('patient123', 10),
            role: 'patient'
        }
    ];

    await User.insertMany(users);

    console.log('doctor and patient created');
    process.exit();
})();
