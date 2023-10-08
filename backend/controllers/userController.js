const { User } = require("../models/userModel");
const { UserJobs } = require("../models/userJobsModel");
const mongoose = require("mongoose");
// @ desc Login user
// @ route POST /api/users/register
// @ access Public
const registerUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.create({
      name,
      email,
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

// @ desc Get all user's jobs
// @ route GET /api/users/jobs
// @ access Public
const getJobs = async (req, res) => {
  try {
    const { email } = req.query;
    const jobs = await User.findOne({ email: email }).populate("jobsApplied");
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
  }
};

// @ desc Add a job for the user
// @ route POST /api/users/jobs
// @ access Public
const addJobs = async (req, res) => {
  try {
    const { email, companyName, jobTitle, jobDescription, date } = req.body;
    const userApplied = await User.findOne({ email: email }).populate(
      "jobsApplied"
    );
    const newJob = await UserJobs.create({
      date,
      companyName,
      jobTitle,
      jobDescription,
      stage: "applied",
      userApplied: userApplied._id,
    });
    userApplied.jobsApplied.push(newJob._id);
    const mostRecentTime = new Date(userApplied.recentApplicationDate);
    const millisecondsInADay = 2 * 24 * 60 * 60 * 1000;
    userApplied.recentApplicationDate = date;
    await userApplied.save();
    const currentRecentTime = new Date(userApplied.recentApplicationDate);
    if (userApplied.streaks == 0) {
      userApplied.streaks = 1;
    } else if (currentRecentTime - mostRecentTime < millisecondsInADay) {
      userApplied.streaks += 1;
    } else {
      userApplied.streaks = 1;
    }
    userApplied.save();
    res.status(200).json(userApplied);
  } catch (error) {
    console.log(error);
  }
};
// @ desc Changes Job status
// @ route PUT /api/users/jobs
// @ access Public
const changeJobStatus = async (req, res) => {
  const { _id, stage } = req.body;
  try {
    const objectId = new mongoose.Types.ObjectId(_id);
    const job = await UserJobs.findOne({
      _id: objectId,
    });
    job.stage = stage;
    await job.save();
    res.status(200).send(job);
  } catch (error) {
    console.log(error);
  }
};

// @ desc Status of user's applications
// @ route  GET /api/users/jobs/stats
// @ access Public
const JobStats = async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email: email }).populate("jobsApplied");
    console.log(user);
    const jobStatusCounts = {
      applied: 0,
      interviewing: 0,
      accepted: 0,
      rejected: 0,
    };

    const jobs = user.jobsApplied;

    for (let i = 0; i < jobs.length; i++) {
      const status = jobs[i].stage;
      if (status in jobStatusCounts) {
        jobStatusCounts[status]++;
      }
    }
    res.status(200).send(jobStatusCounts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, getJobs, addJobs, changeJobStatus, JobStats };
