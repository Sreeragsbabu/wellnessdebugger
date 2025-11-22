const mongoose = require("mongoose");

const VitalsSchema = new mongoose.Schema({
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

exports.Vitals = mongoose.model("Vitals", VitalsSchema);