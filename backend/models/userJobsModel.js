import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String },
    applied_date: { type: Date },
    userApplied: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
