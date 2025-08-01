// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['attendee', 'organizer'],
    default: 'attendee'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
