const validateTasks = require("../validator");

const Task = require("../models/taskModel");

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: "success",
      results: tasks.length,
      data: { tasks },
    });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err });
  }
};

exports.createTask = async (req, res) => {
  // console.log(req.body);
  try {
    const { error, value } = validateTasks(req.body);
    if (error) {
      return res.status(400).json({ error: error.details });
    }

    const validData = value;

    const newTask = await Task.create(validData);

    res.status(201).json({
      status: "success",
      data: { task: newTask },
    });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    // const { error, value } = validateTasks(req.body);
    // if (error) {
    //   return res.status(400).json({ error: error.details });
    // }
    // const task = await Task.findByIdAndUpdate(req.params.id, value, {
    //   new: true,
    //   runValidators: true,
    // });

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err,
    });
  }
};
