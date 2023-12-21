const express = require('express');
const Doctor = require('../model/doctorModel');
const router = express.Router();

router.post('/dnew', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(200).send(savedDoctor);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
