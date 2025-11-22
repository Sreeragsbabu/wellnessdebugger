require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const PatientProfile = require('../models/PatientProfile');

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/wellnessdebugger';

(async () => {
    try {
        await mongoose.connect(MONGO);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing data
        await User.deleteMany({});
        await PatientProfile.deleteMany({});
        console.log('Cleared existing users and patient profiles');

        // Create doctor
        const doctor = await User.create({
            name: 'Dr. Sreerag',
            email: 'doctor@gmail.com',
            passwordHash: await bcrypt.hash('doctor123', 10),
            phone: '+91-9876543210',
            role: 'doctor'
        });
        console.log(`✅ Created doctor: ${doctor.name}`);

        // Create patients
        const patient1 = await User.create({
            name: 'KL Rahul',
            email: 'rahul@gmail.com',
            passwordHash: await bcrypt.hash('patient123', 10),
            phone: '+91-9876543211',
            role: 'patient'
        });

        const patient2 = await User.create({
            name: 'Rohit Sharma',
            email: 'rohit@gmail.com',
            passwordHash: await bcrypt.hash('patient123', 10),
            phone: '+91-9876543212',
            role: 'patient'
        });

        const patient3 = await User.create({
            name: 'Virat Kohli',
            email: 'virat@gmail.com',
            passwordHash: await bcrypt.hash('patient123', 10),
            phone: '+91-9876543213',
            role: 'patient'
        });

        console.log(`✅ Created ${3} patients`);

        // Create patient profiles (only for patients, linking to the doctor)
        await PatientProfile.create({
            userId: patient1._id,
            assignedDoctor: doctor._id,
            bloodGroup: 'O+',
            dateOfBirth: new Date('1990-05-15'),
            gender: 'Male',
            address: {
                street: '123 MG Road',
                city: 'Bangalore',
                state: 'Karnataka',
                pincode: '560001'
            },
            emergencyContact: {
                name: 'Priya Kumar',
                relationship: 'Spouse',
                phone: '+91-9876543220'
            },
            medicalHistory: 'Hypertension, controlled with medication',
            allergies: ['Penicillin'],
            currentMedications: ['Amlodipine 5mg'],
            height: 175,
            weight: 75,
        });

        await PatientProfile.create({
            userId: patient2._id,
            assignedDoctor: doctor._id,
            bloodGroup: 'A+',
            dateOfBirth: new Date('1985-08-22'),
            gender: 'Male',
            address: {
                street: '456 Brigade Road',
                city: 'Bangalore',
                state: 'Karnataka',
                pincode: '560025'
            },
            emergencyContact: {
                name: 'Meena Sharma',
                relationship: 'Mother',
                phone: '+91-9876543221'
            },
            medicalHistory: 'Type 2 Diabetes, diagnosed 2 years ago',
            allergies: ['Shellfish'],
            currentMedications: ['Metformin 500mg', 'Glimepiride 1mg'],
            height: 168,
            weight: 82,
        });

        await PatientProfile.create({
            userId: patient3._id,
            assignedDoctor: doctor._id,
            bloodGroup: 'B-',
            dateOfBirth: new Date('1995-12-10'),
            gender: 'Female',
            address: {
                street: '789 Indiranagar',
                city: 'Bangalore',
                state: 'Karnataka',
                pincode: '560038'
            },
            emergencyContact: {
                name: 'Rajesh Reddy',
                relationship: 'Father',
                phone: '+91-9876543222'
            },
            medicalHistory: 'Asthma since childhood',
            allergies: ['Dust', 'Pollen'],
            currentMedications: ['Salbutamol inhaler', 'Fluticasone inhaler'],
            height: 162,
            weight: 58,
        });

        console.log(`✅ Created ${3} patient profiles`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error during seeding:', error);
        process.exit(1);
    }
})();