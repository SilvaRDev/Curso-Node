const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const users = require('./users') // Importando o router

// Ler o body
app.use( // Converte os dados do form em um objeto. Sendo possível acessá-lo pelo req.body
  express.urlencoded({  
    extended: true,
  }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates') // Acessa o diretório onde nossos html estão.

app.use('/users', users) // Exporta as rotas presentes no módulo users

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`) // Acessa o arquivo que será vinculado a rota
})

app.listen(port, () => {
  console.log(`Aplicação iniciada na porta ${port}!`)
})
