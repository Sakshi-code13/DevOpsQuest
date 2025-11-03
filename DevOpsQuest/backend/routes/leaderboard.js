const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get global leaderboard
router.get('/', async (req, res) => {
  try {
    const leaderboard = await User.find({})
      .sort({ xp: -1 })
      .limit(50)
      .select('displayName xp level avatar');
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
