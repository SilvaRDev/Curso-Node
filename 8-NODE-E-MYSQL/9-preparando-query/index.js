const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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

app.get('/books', (req, res) => {
  const sql = "SELECT * FROM books"

  pool.query(sql, (err, data) => {

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

  const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
  const data = ['title', 'pageqty', title, pagesqty]

  pool.query(sql, data, (err) => {

    if(err) {
      console.log(err)
    }
    res.redirect('/books')

  })
  
})

app.get('/book/:id', (req, res) => {

  const id = req.params.id

  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, (err, data) => {

    if(err) {
      console.log(err)
      return
    }

    const book = data[0] // Para retornar apenas o primeiro dado da query, passamos desta forma, visto que a query pode nos retornar um array com diversos dados.

    if(data.length === 0) {
      res.status(404).render('404')
      return
    }

    res.render('book', { book })

  })

})

app.get('/books/edit/:id', (req, res) => {

  const id = req.params.id 

  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, (err, data) => {

    if(err) {
      console.log(err)
      return
    }

    const book = data[0]

    res.render('editbook', { book })

  })

})

app.post('/books/updatebook', (req, res) => {

  const id = req.body.id
  const title = req.body.title
  const pageqty = req.body.pagesqty

  const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
  const data = ['title', title, 'pageqty', pageqty, 'id', id]

  pool.query(sql, data, (err) => {

    if(err) {
      console.log(err)
      return
    }

    res.redirect(`/book/${id}`)

  })

})

app.post('/books/remove/:id', (req, res) => {

  const id = req.params.id

  const sql = `DELETE FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, (err) => {
    
    if(err) {
      console.log(err)
      return
    }

    res.redirect('/books')

  })

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
