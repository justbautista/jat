const { User } = require("../models/userModel");
const { UserJobs } = require("../models/userJobsModel");
const mongoose = require("mongoose");
// @ desc Login user
// @ route POST /api/users/register
// @ access Public
const registerUser = async (req, res) => {
  const { name, email, preferences, school, dailyLimit } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      preferences,
      school,
      dailyLimit,
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

// @ desc Login user
// @ route POST /api/users/register
// @ access Public
const updateUser = async (req, res) => {
  const { email, preferences, school, dailyLimit } = req.body;
  const filter = { email };
  const update = { preferences, school, dailyLimit };
  try {
    const user = await User.findOneAndUpdate(filter, update, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res
      .status(404)
      .json({ Error: "Error with the database, Please try logging in again." });
  }
};

const getUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if(user){
    res.status(200).json(user);
    }else{
      res
      .status(404)
      .json({ Error: "Error with the database, Please try logging in again." });
    }
  } catch (error) {
    res
      .status(404)
      .json({ Error: "Error with the database, Please try logging in again." });
  }
};

const getJobsByUserId = async (req, res) => {
  const { id } = req.body;
  try {
    const job = await UserJobs.find({ userApplied: id });
    res.status(200).json(job);
  } catch (error) {
    res
      .status(404)
      .json({ Error: "Error with the database, Cannot find jobs." });
  }
};

const getJobsById = async (req, res) => {
  const { id } = req.body;
  try {
    const job = await UserJobs.find({ _id: id });
    res.status(200).json(job);
  } catch (error) {
    res
      .status(404)
      .json({ Error: "Error with the database, Cannot find jobs." });
  }
};

// @ desc Get all user's jobs
// @ route GET /api/users/jobs
// @ access Public
// const getJobThrough = async (req, res) => {
//   try {
//     const { email } = req.query;
//     const jobs = await User.findOne({ email: email }).populate("jobsApplied");
//     res.status(200).json(jobs);
//   } catch (error) {
//     console.log(error);
//   }
// };

// @ desc Add a job for the user
// @ route POST /api/users/jobs
// @ access Public


const generateStreakCalender = async (req, res)=>{
  const { id } = req.body;
  try {
    const job = await UserJobs.find({ userApplied: id });
    console.log(job);
    jobApplication = [];
    for (let j of job) {
      let d = new Date(j.dateApplied);
      if (jobApplication[d]) {
        jobApplication[d].push(j);
      } else {
        jobApplication[d] = [j];
      }
    }
    var final = [[{
      type: "date",
      id: "Date",
    },
    {
      type: "number",
      id: "Applied",
    }]]
    for(let date of Object.keys(jobApplication)) {
      final.push([date, jobApplication[date].length])
    }

    res.status(200).send({dates:jobApplication,cal:final});
  } catch (error) {
    res
      .status(404)
      .json({ Error: "Error with the database, Cannot find jobs." });
  }
}

const addJobs = async (req, res) => {
  try {
    const {
      id,
      companyName,
      jobTitle,
      jobDescription,
      postingDate,
      stage,
      referenceId,
    } = req.body;
    const userApplied = await User.findOne({ _id: id });
    const newJob = await UserJobs.create({
      postingDate,
      companyName,
      jobTitle,
      jobDescription,
      stage,
      referenceId,
      userApplied: userApplied._id,
    });
    userApplied.jobsApplied.push(referenceId);
    // const mostRecentTime = new Date(userApplied.recentApplicationDate);
    // const millisecondsInADay = 2 * 24 * 60 * 60 * 1000;
    // userApplied.recentApplicationDate = date;
    // await userApplied.save();
    // const currentRecentTime = new Date(userApplied.recentApplicationDate);
    // if (userApplied.streaks == 0) {
    //   userApplied.streaks = 1;
    // } else if (currentRecentTime - mostRecentTime < millisecondsInADay) {
    //   userApplied.streaks += 1;
    // } else {
    //   userApplied.streaks = 1;
    // }
    let userDate = new Date(userApplied.today)
    let curDate = new Date();
    var diff = Math.abs(curDate.getTime() - userDate.getTime()) / 3600000;
    if(diff<24){
      userApplied.todayStreak = userApplied.todayStreak + 1
    }
    else{
      if(userApplied.todayStreak >= userApplied.dailyLimit){
        var newStreak = userApplied.streaks + 1
        if(newStreak > userApplied.longestStreaks){
          userApplied.longestStreaks = newStreak
        }
        if(diff < 48){
          userApplied.streaks = newStreak
        }else{
          userApplied.streaks = 0
        }
      }else{
        userApplied.streaks = 0
      }
      userApplied.today = new Date()
      userApplied.todayStreak = 1

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
    // const objectId = new mongoose.Types.ObjectId(_id);
    const job = await UserJobs.findOne({
      _id,
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
// const JobStats = async (req, res) => {
//   const { email } = req.query;
//   try {
//     const user = await User.findOne({ email: email }).populate("jobsApplied");
//     console.log(user);
//     const jobStatusCounts = {
//       applied: 0,
//       interviewing: 0,
//       accepted: 0,
//       rejected: 0,
//     };

//     const jobs = user.jobsApplied;

//     for (let i = 0; i < jobs.length; i++) {
//       const status = jobs[i].stage;
//       if (status in jobStatusCounts) {
//         jobStatusCounts[status]++;
//       }
//     }
//     res.status(200).send(jobStatusCounts);
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  registerUser,
  updateUser,
  getUser,
  getJobsByUserId,
  getJobsById,
  addJobs,
  changeJobStatus,
  generateStreakCalender,
};
