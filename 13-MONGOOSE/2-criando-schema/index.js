const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const productsRoutes = require('./routes/productsRoutes')

const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// read body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/products', productsRoutes)
app.use('/', (req, res) => {
  res.redirect('/products/')
})

app.listen(port)
