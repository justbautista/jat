// id username email age school job
// preferences - array of strings
// jobs applied - array of ids and when apply
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  school: {
    type: String,
  },
  dailyLimit: {
    type: Number,
  },
  preferences: [{ type: String }],
  jobsApplied: [{ type: String }],
  recentApplicationDate: { type: Date },
  streaks: {
    type: Number,
    default: 0,
  },
  longestStreaks: {
    type: Number,
    default: 0,
  },
  today:{type:Date},
  todayStreak:{type:Number}

});

const User = mongoose.model("User", userSchema);

module.exports = { User };
