const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  world: { type: String, required: true, enum: ['sourceControl', 'ciCd', 'cloudContainers', 'observability'] },
  type: { type: String, required: true, enum: ['dragDrop', 'incidentResponse', 'logDebugging', 'scalingContainers'] },
  difficulty: { type: String, default: 'easy', enum: ['easy', 'medium', 'hard'] },
  xpReward: { type: Number, required: true },
  content: {
    question: String,
    options: [String],
    correctAnswer: String,
    dragItems: [String],
    dropZones: [String],
    scenario: String,
    logs: String,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quest', questSchema);
