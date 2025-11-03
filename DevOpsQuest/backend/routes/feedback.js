const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// Submit feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get feedback for a quest
router.get('/quest/:questId', async (req, res) => {
  try {
    const feedback = await Feedback.find({ questId: req.params.questId }).populate('userId', 'displayName');
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
