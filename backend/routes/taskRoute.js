const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");
const { createTask, getAllTasks, getTask, deleteTask, updateTask} = require("../controllers/taskController");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

module.exports = router;
