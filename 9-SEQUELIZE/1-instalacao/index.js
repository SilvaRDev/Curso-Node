const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express()
const port = 3000

/* INCORPORANDO REQUISIÇÕES DO BODY (req.body.param) */
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

/* HANDLEBARS SETTINGS */
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

/* CSS SETTINGS */
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.use((req, res) => {
  res.status(404).render('404')
})

app.listen(port, (err) => {
  if(err) {
    console.log(err)
  }

  console.log(`Servidor iniciado na porta ${port}!`)
})
