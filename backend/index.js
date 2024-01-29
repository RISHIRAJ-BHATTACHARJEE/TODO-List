const express = require('express')
const {todo} = require("./db")
const { createTodo, updateTodo } = require("./types")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.post('/create-todo', (req, res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid Inputs"
        })
        return;
    }

    //DB Call
    todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    })

    res.json({
        msg: "Todo Created Successfully"
    })

})

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({})

    res.json({
        todos
    })
})

app.put('/completed', async (req, res)=>{
    const createPayload = req.body
    const parsedPayload = updateTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid ID"
        })
        return
    }

    await todo.findByIdAndUpdate(req.body.id,{
        $set: {
            completed: true
        }
    })

    res.json({
        msg: "Marked as Completed"
    })
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT}`);
})