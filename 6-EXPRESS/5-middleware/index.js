const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates') // Acessa o diretório onde nossos html estão.

const checkAuth = function(req, res, next) {

  req.authStatus = true

  if(req.authStatus) {
    console.log('Está logado, pode continuar!')
    next()
  } else {
    console.log('Não está logado. Faça o login para continuar!')
  }

}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`) // Acessa o arquivo que será vinculado a rota
})

app.get('/produtos', (req, res) => {
  res.sendFile(`${basePath}/produtos.html`)
})

app.listen(port, () => {
  console.log(`Aplicação iniciada na porta ${port}!`)
})