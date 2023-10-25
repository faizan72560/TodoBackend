const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({

  title: {
    type: String
  },
  description: {
    type: String
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

})





module.exports = mongoose.model("tasksss", TaskSchema);
