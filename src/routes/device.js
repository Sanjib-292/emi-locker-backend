const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// POST device details
router.post('/', async (req, res) => {
  const { deviceName, emi, imei, fcmToken, deviceModel, name } = req.body;

  try {
    const newDevice = new Device({
      deviceName,
      emi,
      imei,
      fcmToken,
      deviceModel,
      name
    });

    await newDevice.save();
    res.status(201).json(newDevice);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save device details' });
  }
});

router.get('/:imei', async (req, res) => {
  const { imei } = req.params;

  try {
    const device = await Device.findOne({ imei });

    if (!device) {
      return res.status(404).json({ error: 'Device not found' });
    }

    res.status(200).json(device);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve device details' });
  }
});

module.exports = router;
