const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

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


app.get('/', async (req, res) => {

  const users = await User.findAll({ raw: true })

  res.render('home', { users: users })
})
 
app.post('/users/create', async (req, res) => {

  const name = req.body.name 
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if(name === '' || occupation === '') {
    res.redirect('/users/create')
    return
  }

  console.log(req.body)

  if(newsletter === 'on') {
    newsletter = true
  } else {
    newsletter = false
  }

  await User.create({name, occupation, newsletter}) // Cria o usuário, passando os argumentos vindos do post do form (comando INSERT).

  res.redirect('/')

})

app.get('/users/:id', async (req, res) => {

  const id = req.params.id

  const user = await User.findOne({ raw: true, where: { id: id } }) // Procura ítens do db (comando SELECT)

  if(!user) {
    res.status(404).render('404') 
    return
  }

  res.render('userview', { user })

})

app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.post('/users/delete/:id', async (req, res) => {

  const id = req.params.id 

  await User.destroy({where: {id: id}}) // Remove itens do db (comando DELETE)

  res.redirect('/')

})

app.use((req, res) => {
  res.status(404).render('404')
})

conn.sync().then(() => { //sincroniza as tabelas do banco
  app.listen(port, (err) => {
    if(err) {
      console.log(err)
    }

    console.log(`Servidor iniciado na porta ${port}!`)
  })
}).catch((err) => console.log(err))
