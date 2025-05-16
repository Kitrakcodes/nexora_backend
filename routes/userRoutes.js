const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path if needed

// Add user route
router.post('/add', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message });
  }
});

module.exports = router;
