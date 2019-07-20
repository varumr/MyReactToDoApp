const ToDo = require('../app/models/ToDo.model.js');

// Create and Save a new task
exports.create = (req, res) => {
  // Validate request
      if(!req.body) {
          return res.status(400).send({
              message: "Task content can not be empty"
          });
      }
    //  console.log(req.body);
      // Create a Note
      const todo = new ToDo({
          text: req.body.data.text,
          dueDate: req.body.data.date,
          userId: req.body.data.userId,
          completed: req.body.data.completed
      });

      // Save Note in the database
      todo.save()
      .then(data => {
          res.send(data);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the Task."
          });
      });
};

// Retrieve and return all tasks from the database.
exports.findAll = (req, res) => {
  ToDo.find()
   .then(todos => {
       res.send(todos);
   }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while retrieving notes."
       });
   });
};


// Need to  implement
// Find a single task with a taskId
exports.findOne = (req, res) => {

};

// Update a task identified by the taskId in the request
// Updates only 'completed' as of now
exports.update = (req, res) => {
  //validate request
//  console.log("Comes in update");
  //console.log(req.body);
  if(!req.body) {
      return res.status(400).send({
          message: "Task content can not be empty"
      });
  }
  // Find note and update it with the request body
      ToDo.findByIdAndUpdate(req.params.todoId, {
          completed: req.body.completed
      }, {new: true})
      .then(todo => {
          if(!todo) {
              return res.status(404).send({
                  message: "Task not found with id " + req.params.todoId
              });
          }
          res.send(todo);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Note not found with id " + req.params.noteId
              });
          }
          return res.status(500).send({
              message: "Error updating note with id " + req.params.noteId
          });
      });
};

// Delete a task with the specified taskId in the request
exports.delete = (req, res) => {

};
