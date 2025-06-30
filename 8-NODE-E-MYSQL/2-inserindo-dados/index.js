const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()
const port = 3000

/* INCORPORANDO REQUISIÇÕES DO BODY */
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

app.post('/books/insertbook', (req, res) => {

  const title = req.body.title
  const pagesqty = req.body.pagesqty

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pagesqty}')`

  conn.query(sql, (err) => {

    if(err) {
      console.log(err)
    }

    res.redirect('/')

  })

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
