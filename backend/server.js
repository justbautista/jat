const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");
var cors = require('cors')
dotenv.config();
const port = process.env.PORT || 5001;
connectDB();
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("API running"));
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.listen(port, () => console.log(`Server Started on Port:${port}`));
