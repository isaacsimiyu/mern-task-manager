const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: "pending", enum: ["pending", "in progress", "completed"] },
  dueDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
