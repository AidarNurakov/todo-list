const express = require('express')
const { TodoSchema } = require('../models/todo')
const router = express.Router()

router.get('/create', (req, res) => {
    res.render('create', {
        title: "Create todo",
        isCreate: true
    })
})

router.post('/create', async(req, res) => {
    const todo = new TodoSchema({
        title: req.body.title
    })

    await todo.save()
    res.redirect('/')
})

router.get('/', async (req, res) => {
    const todos = await TodoSchema.find({}).lean()
    res.render('index', {
        title: "Todos list",
        isIndex: true,
        todos
    })
})
 
router.post('/complete', async(req,res) => {
    const todo = await TodoSchema.findById(req.body.id)
    
    todo.completed = !!req.body.completed
    await todo.save()

    res.redirect('/')
})

router.delete('/delete', async(req,res) => {
    const remove = await TodoSchema.findByIdAndDelete(req.body.id)
    await todo.save()
    res.redirect('/')
})

module.exports = router