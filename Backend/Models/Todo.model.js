const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: { type: String },
});

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = { TodoModel };
