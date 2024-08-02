const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    required: true
  },
  emi: {
    type: Number,
    required: true
  },
  imei: {
    type: String,
    required: true
  },
  fcmToken: {
    type: String,
    required: true
  },
  deviceModel: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Device', DeviceSchema);

