const Task = require("../models/taskModel");

/** Create task */
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

/** Get all tasks */
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

/** Get task */
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json(`No task found with id: ${id}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

/** Delete task */
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task found with id: ${id}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

/** Update task using PUT */
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json(`No task found with id: ${id}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

/** Update task using PATCH */
const updateTaskPatch = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json(`No task found with id: ${id}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


module.exports = { createTask, getAllTasks, getTask, deleteTask, updateTask };
