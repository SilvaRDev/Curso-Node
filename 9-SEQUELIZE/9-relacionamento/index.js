const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

/* IMPORTING MODELS */
const User = require('./models/User')
const Address = require('./models/Address')

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

app.get('/users/create', (req, res) => {
  res.render('adduser')
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

app.post('/users/delete/:id', async (req, res) => {

  const id = req.params.id 

  await User.destroy({where: {id: id}}) // Remove itens do db (comando DELETE)

  res.redirect('/')

})

app

app.get('/users/edit/:id', async (req, res) => {

  const id = req.params.id 

  const user = await User.findOne({ raw: true, where: { id: id } })

  res.render('useredit', { user })

})

app.post('/users/update', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const occupation = req.body.occupation 
  let newsletter = req.body.newsletter

  if(newsletter === 'on') {
    newsletter = true 
  } else {
    newsletter = false
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter
  }

  await User.update(userData, { where: { id: id } })

  res.redirect('/')
})

app.get('/', async (req, res) => {

  const users = await User.findAll({ raw: true })

  res.render('home', { users: users })
})

app.use((req, res) => {
  res.status(404).render('404')
})

conn
  //.sync()
  .sync({ force: true }) // - Força uma 'formatação' da tabela, recriando-a e removendo os dados. (APENAS UTILIZAR PARA O DESENVOLVIMENTO DA APLICAÇÃO.)
  .then(() => {
    app.listen(port, (err) => {
      if(err) {
        console.log(err)
      }

      console.log(`Servidor iniciado na porta ${port}!`)
    })
  }).catch((err) => console.log(err))
