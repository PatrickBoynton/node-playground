const Todo = require("../models/todo");

exports.getTodos = async (req, res) => {
  const todos = await Todo.findAll();

  res.send(todos);
}

exports.getTodo = async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);

    res.send(todo);
}

exports.postTodos = async (req, res) => {
    const task = req.body.task;
    const isComplete = req.body.isComplete;
   await Todo.create({task, isComplete})

    res.status(201).json({message: "Created!"});
}

exports.updateTodos = async (req, res) => {
    const id = req.params.id;
    const task = req.body.task;
    const isComplete = req.body.isComplete;

    const updatedTodo = {
        task,
        isComplete
    }

    await Todo.update(updatedTodo, {where: {id}});

    res.status(204).json({message: "Updated!"});
}

exports.deleteTodos = async (req, res) => {
    const id = req.params.id;

    await Todo.destroy({where: {id: id}});

    res.status(204).json({message: "Deleted!"});
}

