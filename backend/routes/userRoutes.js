const express = require("express");
const router = express.Router();
const {
  registerUser,
  addJobs,
  changeJobStatus,
  generateStreakCalender
} = require("../controllers/userController");
router.post("/register", registerUser);
router.post("/addJob", addJobs);
// router.route("/jobs").get(getJobs).post(addJobs).put(changeJobStatus);
router.get("/jobs/stats", JobStats);
router.post("/timeline", generateStreakCalender)
module.exports = router;
