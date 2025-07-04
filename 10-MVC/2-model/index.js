const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

const conn = require('./db/conn')

const Task = require('./models/Task')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use( // Gets the req Body from Page
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(express.static('public')) // CSS

conn.sync().then(() => {
  app.listen(port)
}).catch((err) => console.log(err))
