const mongoose = require("mongoose");

const userJobsSchema = new mongoose.Schema({
  date: { type: Date },
  companyName: { type: String },
  jobTitle: { type: String },
  jobDescription: { type: String },
  // stages are applied, interviewing, accepted, rejected
  stage: {
    type: String,
    enum: ["applied", "interviewing", "accepted", "rejected"],
    required: true,
  },
  userApplied: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const UserJobs = mongoose.model("UserJobs", userJobsSchema);

module.exports = { UserJobs };
