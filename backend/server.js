const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");

const app = express();

/** Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Home Route");
});

const PORT = process.env.PORT || 5000;

/** Start the server */
const startServer = async () => {
  try {
    connectDB();
    app.listen(PORT, () => console.log(`The Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
