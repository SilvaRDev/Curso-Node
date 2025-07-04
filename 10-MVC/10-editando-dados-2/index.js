const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

/* DB CONNECT */
const conn = require('./db/conn')

/* DATABASES */
const Task = require('./models/Task')

/* ROTAS */
const tasksRoutes = require('./routes/tasksRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use( // Gets the req Body from Page
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(express.static('public')) // CSS

app.use('/tasks', tasksRoutes) // Adiciona as rotas após /tasks. (Ex: /tasks/tasks-adicionadas-em-taskRoutes)

app.use('/', (req, res) => {
  res.redirect('/tasks')
})

conn.sync().then(() => {
  app.listen(port)
}).catch((err) => console.log(err))
