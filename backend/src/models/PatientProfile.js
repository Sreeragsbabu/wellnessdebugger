const mongoose = require("mongoose");

const PatientProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "other"],
  },
  assignedDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
//   medicalHistory: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "MedicalRecord",
//   }],
  goals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "WellnessMetric",
  }],
   goals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vitals",
  }],
  assignedDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

PatientProfileSchema.pre("save", function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("PatientProfile", PatientProfileSchema);