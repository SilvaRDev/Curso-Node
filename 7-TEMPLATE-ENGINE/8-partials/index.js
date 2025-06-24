const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({ // Definindo o partials do projeto
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine) // Como temos o partials configurado, é necessário adicionar desta forma (remover parênteses)
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

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprendendo NodeJS',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js...',
    comments: 10
  }

  res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'javascript',
      body: 'Aprenda a utilizar o Node.js de uma vez por todas!',
      comments: 4
    },
    {
      title: 'Aprender PHP',
      category: 'PHP',
      body: 'Aprenda a utilizar o PHP de uma vez por todas!',
      comments: 4
    },
    {
      title: 'Aprender Pyhton',
      category: 'python',
      body: 'Aprenda a utilizar o Pyhton de uma vez por todas!',
      comments: 4
    }
  ]

  res.render('blog', { posts })
})

app.get('/', (req, res) => {

  const auth = true

  const approved = true

  res.render('home', { user: user, frase, auth, approved }) // Por meio desse método, os dados são enviados do back para a view do front com auxílio do Handlebars.
})

app.listen(3000, () => {
  console.log('App funcionando na porta 3000!')
})
