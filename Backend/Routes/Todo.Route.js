const Router = require("express");
const { TodoModel } = require("../Models/Todo.model");

const TodoRoute = Router();

TodoRoute.get("/todo", async (req, res) => {
  const todos = await TodoModel.find({});
  res.send(todos);
});

TodoRoute.post("/todoadd", async (req, res) => {
  const { todo } = req.body;
  console.log(req.body);
  const newTodo = await TodoModel({ todo });
  newTodo.save();

  if (newTodo) {
    res.send(newTodo);
  } else {
    res.send("Error in Adding");
  }
});

TodoRoute.delete("/tododelete/:_id", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const deleteTodo = await TodoModel.findByIdAndDelete({ _id });

  res.send(deleteTodo);
});

module.exports = { TodoRoute };
