var express = require('express');
var router = express.Router();

const appRouter = function (app) {

  const toDos = require('../controllers/todo.controller.js');

    // Create a new Task
    app.post('/', toDos.create);

    // Retrieve all Task
    app.get('/', toDos.findAll);

    // Retrieve a single Task with taskId
    app.get('/todo/:todoid', toDos.findOne);

    // Update a Task with taskId
    app.put('/:todoId', toDos.update);

    // Delete a Task with taskId
    app.delete('/todo/:todo', toDos.delete);
}
module.exports = appRouter;
