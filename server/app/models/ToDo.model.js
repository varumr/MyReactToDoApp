const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    text: String,
    dueDate: Date,
    userId: Number,
    completed: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('todo', TodoSchema);
