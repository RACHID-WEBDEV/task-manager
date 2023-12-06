const mongoose = require("mongoose");
const taskStatus = require("../utils/constants");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A task must have a title"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A task must have a description"],
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: [true, "A task must have a status"],
    enum: {
      values: taskStatus,
      message:
        "Status is either: not started, in progress, in review, completed ,reopened, or cancelled",
    },
    default: "not started",
  },

  createAt: {
    type: Date,
    default: Date.now(),
    // hide createAt from show when query is processed
    select: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
