const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://rishirajbhattacharjee974:uISkrXZZElaWCVyo@cluster0.yiqsvbk.mongodb.net/todo-app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: { type: Boolean, default: false }
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}