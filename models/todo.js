const mongoose = require('mongoose')

const schema = mongoose.Schema;

const TodoSchema = new schema({
 title: {
     type: String,
     required: true
 },
 completed: {
    type: Boolean,
    default: false
 }
})

exports.TodoSchema = mongoose.model('Todo', TodoSchema)