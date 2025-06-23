const express = require('express')
const app = express()
const port = 3000

const path = require('path')

// Ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates') // Acessa o diretório onde nossos html estão.

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age 

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

  res.sendFile(`${basePath}/userform.html`)
})

app.get('/users/:id', (req, res) => { // Irá pegar um usuário por meio de seu id, seguindo a rota users/id.
  const id = req.params.id

  // leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário: ${id}`)

  res.sendFile(`${basePath}/users.html`) // Acessa o arquivo que será vinculado a rota
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`) // Acessa o arquivo que será vinculado a rota
})

app.listen(port, () => {
  console.log(`Aplicação iniciada na porta ${port}!`)
})
