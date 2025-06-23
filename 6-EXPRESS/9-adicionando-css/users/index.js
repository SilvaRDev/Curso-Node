const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates') // Acessa o diretório onde nossos html estão.

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => { // É ativado por meio da action, presente no formulário do arquivo userform.html.
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age 

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

  res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => { // Irá pegar um usuário por meio de seu id, seguindo a rota users/id.
  const id = req.params.id

  // leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário: ${id}`)

  res.sendFile(`${basePath}/users.html`) // Acessa o arquivo que será vinculado a rota
})

module.exports = router
