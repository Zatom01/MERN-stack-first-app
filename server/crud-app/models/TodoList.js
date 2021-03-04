const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema ({
    todoListName: {
        type: String,
        required: true,
    },
    dueIn: {
        type: Number,
        required: true,

    },
})

const Todo = mongoose.model("Todo", TodoListSchema);

module.exports = Todo;
