const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Firebase auth verification (simplified for demo)
router.post('/login', async (req, res) => {
  try {
    const { firebaseId, email, displayName } = req.body;

    let user = await User.findOne({ firebaseId });
    if (!user) {
      user = new User({ firebaseId, email, displayName });
      await user.save();
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
