const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("API running"));
app.get("/api/users", userRoutes);
app.get("/api/jobs", jobRoutes);
app.listen(port, () => console.log(`Server Started on Port:${port}`));
