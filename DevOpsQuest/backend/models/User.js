const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  avatar: { type: String, default: 'jenkins-knight' },
  costumes: [{ type: String }],
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: [{ type: String }],
  worldProgress: {
    sourceControl: { type: Number, default: 0 },
    ciCd: { type: Number, default: 0 },
    cloudContainers: { type: Number, default: 0 },
    observability: { type: Number, default: 0 },
  },
  completedQuests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
