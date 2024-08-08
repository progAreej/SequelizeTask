

const express = require('express');
const router = express.Router();
const db = require('../models');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error); // Log the full error
    res.status(400).json({ error: error.message || 'Error creating user' }); // Send detailed error message
  }
});

module.exports = router;
