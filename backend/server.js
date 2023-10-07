import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("API running"));
app.listen(port, () => console.log(`Server Started on Port:${port}`));
