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

app.get('/books', (req, res) => {
  const sql = "SELECT * FROM books"

  conn.query(sql, (err, data) => {

    if(err) {
      console.log(err)
      return
    }

    const books = data 

    res.render('books', { books })

  })
})

app.post('/books/insertbook', (req, res) => {

  const title = req.body.title
  const pagesqty = req.body.pagesqty

  if(title === '' || pagesqty === '') {
    res.redirect('/')
    return
  }

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pagesqty}')`

  conn.query(sql, (err) => {

    if(err) {
      console.log(err)
    }
    res.redirect('/books')

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
