const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 20
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 20
  },
  uid: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 25
  },
  branch: {
    type: String,
    required: true,
    maxlength: 50
  },
  section: {
    type: String,
    required: true,
    maxlength: 8
  },
  group: {
    type: String,
    required: true,
    maxlength: 1
  },
  mentorName: {
    type: String,
    required: true,
    maxlength: 50
  },
  completedExperiments: [{
    type: String,  // Names of experiments the user has completed
    default: []
  }],
  quizScore: {
    type: Number,  // Store quiz score as a number (e.g., 85)
    default: 0
  },
  progress: {
    type: Number,
    default: 0
  },
  achievements: {
    type: [String],  // Array of achievement strings
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  },
  activeStatus: {
    type: Boolean,
    default: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
