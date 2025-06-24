const express = require('express')
const exphbs = require('express-handlebars')
 
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars') // Seta a modo de visualização da aplicação para o handlebars
app.set('views', './views')

const user = {
  name: "Rafael",
  surname: "Silva",
  age: 19
}

const frase = "Testando alguma coisa!"

app.get('/dashboard', (req, res) => {

  const items = ["Item a", "Item b", "Item c", "Item d", "Item e"]

  res.render('dashboard', { items })
})

app.get('/', (req, res) => {

  const auth = true

  const approved = true

  res.render('home', { user: user, frase, auth, approved }) // Por meio desse método, os dados são enviados do back para a view do front com auxílio do Handlebars.
})

app.listen(3000, () => {
  console.log('App funcionando na porta 3000!')
})
