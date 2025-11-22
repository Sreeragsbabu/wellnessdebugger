const mongoose = require("mongoose");

const VitalsSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  height: {
    type: Number,
    min: 0,
  },
  weight: {
    type: Number,
    min: 0,
  },
  bmi: {
    type: Number,
    min: 0,
  },
  glucoseLevel: {
    type: Number,
    min: 0,
  },
  bloodPressure: {
    systolic: {
      type: Number,
      min: 0,
    },
    diastolic: {
      type: Number,
      min: 0,
    },
  },
  recordedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Vitals", VitalsSchema);