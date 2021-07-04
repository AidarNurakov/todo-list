const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require('path')

const PORT = process.env.PORT || 3000
const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
const db = 'mongodb+srv://homelander:Drmirmid@cluster0.j7k8b.mongodb.net/todos?retryWrites=true&w=majority'

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


app.use(express.urlencoded({ extended: true }))
  
app.use(todoRoutes)

app.use(express.static(path.join(__dirname, 'public')))

async function start(){
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(3000, () => {
            console.log("Сервер запущен...")
        })
    } catch (e) {
        console.log(e);
    }
}

start() 
