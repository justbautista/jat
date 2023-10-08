const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
dotenv.config();
const port = process.env.PORT || 5001;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/jobs", jobRoutes);
app.get("/", (req, res) => res.send("API running"));
app.listen(port, () => console.log(`Server Started on Port:${port}`));
