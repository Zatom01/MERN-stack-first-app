const express = require('express');
const mongoose = require('mongoose')
const app = express() ;
const TodoListModel = require('./models/TodoList');

app.use(express.json());

mongoose.connect('mongodb+srv://nealcrud:nealcrud@cluster0.2z8yg.mongodb.net/todo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});


app.get('/', async(req,res) => {
    const list = new TodoListModel({
        todoListName: "Do Laundry",
        dueIn: 3

    });

    try {
        await list.save();

    }
    catch(err){
        console.log(err);
    }


});
app.listen(3001, () => {
    console.log('Server running on port 3001..');
});
