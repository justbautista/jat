const mongoose = require("monogoose");
import mongoose from "mongoose";

const userJobsSchema = new mongoose.Schema(
  {
    _id: { type: String },
    applied_date: { type: Date },
    userApplied: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const UserJobs = mongoose.model("UserJobs", userJobsSchema);

module.exports = { UserJobs };
