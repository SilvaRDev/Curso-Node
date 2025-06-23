const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates') // Acessa o diretório onde nossos html estão.

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