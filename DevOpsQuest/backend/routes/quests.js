const express = require('express');
const Quest = require('../models/Quest');
const User = require('../models/User');
const router = express.Router();

// Get quests by world
router.get('/world/:world', async (req, res) => {
  try {
    const quests = await Quest.find({ world: req.params.world });
    res.json(quests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Complete quest
router.post('/:id/complete', async (req, res) => {
  try {
    const { userId, correct } = req.body;
    const quest = await Quest.findById(req.params.id);
    if (!quest) return res.status(404).json({ error: 'Quest not found' });

    if (correct) {
      const user = await User.findById(userId);
      user.xp += quest.xpReward;
      user.level = Math.floor(user.xp / 1000) + 1;
      user.completedQuests.push(quest._id);
      await user.save();
    }

    res.json({ success: correct, xpGained: correct ? quest.xpReward : 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Seed quests (for demo)
router.post('/seed', async (req, res) => {
  try {
    const quests = [
      {
        title: 'Git Basics',
        description: 'Learn basic Git commands',
        world: 'sourceControl',
        type: 'dragDrop',
        xpReward: 100,
        content: {
          question: 'Arrange the Git workflow steps in order',
          dragItems: ['git add', 'git commit', 'git push'],
          dropZones: ['Stage changes', 'Commit changes', 'Push to remote'],
        },
      },
      // Add more quests...
    ];

    await Quest.insertMany(quests);
    res.json({ message: 'Quests seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
