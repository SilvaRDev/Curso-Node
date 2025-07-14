const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// rad body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.listen(port)
