const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()
const port = 3000

/* HANDLEBARS SETTINGS */
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

/* CSS SETTINGS */
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
})

conn.connect((err) => {

  if(err) {
    console.log(err)
  } 

  console.log(`Servidor iniciado na porta ${port}!`)

  app.listen(port)
})
