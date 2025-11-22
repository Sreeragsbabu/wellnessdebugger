const PatientProfile = require("../../models/PatientProfile");
const User = require("../../models/User");

const Controller = async (req, res) => {
  try {

    const doctor = await User.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    if (doctor.role !== "doctor") {
      return res.status(400).json({ success: false, message: "User is not a doctor" });
    }

    const patientProfiles = await PatientProfile.find({
      assignedDoctor: req.params.id,
    }).populate({
      path: "userId",
      select: "name email phone createdAt",
    });

    const patients = patientProfiles.map((profile) => ({
      patientId: profile.userId._id,
      name: profile.userId.name,
      email: profile.userId.email,
      phone: profile.userId.phone,
      bloodGroup: profile.bloodGroup,
      medicalHistory: profile.medicalHistory,
      profileId: profile._id,
      assignedSince: profile.createdAt,
    }));

    return res.status(200).json({
      success: true,
      count: patients.length,
      data: patients,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching patients",
      error: error.message,
    });
  }
};

module.exports = Controller;
