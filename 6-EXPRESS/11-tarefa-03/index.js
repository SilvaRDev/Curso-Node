const express = require('express')
const app = express()
const path = require('path')

const port = 5000

app.use(express.static('public'))

// Diretório base
const basePath = path.join(__dirname, 'templates')

// Importando rotas
const miscRoutes = require('./routes/miscellaneous.js')
const productRoutes = require('./routes/products.js')

app.use('', miscRoutes)

app.use('/produtos', productRoutes)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`Aplicação iniciada na porta ${port}!`)
})
