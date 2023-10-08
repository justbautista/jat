const express = require("express");
const router = express.Router();
const {
  registerUser,
  getJobs,
  addJobs,
  changeJobStatus,
  JobStats,
} = require("../controllers/userController");
router.post("/register", registerUser);
router.route("/jobs").get(getJobs).post(addJobs).put(changeJobStatus);
router.get("/jobs/stats", JobStats);
module.exports = router;
