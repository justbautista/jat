// id username email age school job
// preferences - array of strings
// jobs applied - array of ids and when apply
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  _id: { type: String, unique: true },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  preferences: [{ type: String }],
  jobsApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserJobs" }],
});

const User = mongoose.model("User", userSchema);

module.exports = { User };