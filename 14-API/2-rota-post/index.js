const express = require('express')
const app = express()

const port = 3000

app.use(
  express.urlencoded({
    extended: true 
  })
)

app.use(express.json())

// rotas - endpoints
app.post('/createproduct', (req, res) => {
  const name = req.body.name 
  const price = req.body.price

  console.log(name)
  console.log(price)

  res.json({
    message: `O produto: '${name}' foi criado com sucesso!`
  })
})

app.get('/users/:id', (req, res) => {

  const id = req.params.id 

  res.json({
    message: `O id do usuário é ${id}!`
  })

})

app.get('/', (req, res) => {
  res.json({message: "Olá, mundo!"}) // Enviamos um arquivo JSON...
})

app.listen(port)
