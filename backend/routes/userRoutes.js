const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateUser,
  getUser,
  getJobsByUserId,
  getJobsById,
  addJobs,
  changeJobStatus,
  generateStreakCalender,
} = require("../controllers/userController");
router.put("/", updateUser);
router.post("/", getUser);
router.post("/register", registerUser);
router.post("/addJob", addJobs);
router.post("/getJobsByUserId", getJobsByUserId);
router.post("getJobsById", getJobsById);
router.put("/jobs", changeJobStatus);
router.post("/timeline", generateStreakCalender)
module.exports = router;
