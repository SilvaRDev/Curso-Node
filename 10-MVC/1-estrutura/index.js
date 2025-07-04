const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

const conn = require('./db/conn')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use( // Gets the req Body from Page
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(express.static('public')) // CSS

app.listen(port, (err) => {
  if(err) {
    console.log(`Ocorreu um erro na conexão: ${err}`)
  }

  console.log(`A conexão foi efetuada na porta ${port}!`)
})
