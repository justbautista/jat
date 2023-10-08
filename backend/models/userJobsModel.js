const mongoose = require("mongoose");

const userJobsSchema = new mongoose.Schema({
  postingDate: { type: Date },
  companyName: { type: String },
  jobTitle: { type: String },
  referenceId: { type: String },
  jobDescription: { type: String },
  dateApplied:{type:Date, default: new Date()},
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
