const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

  res.write("<meta charset='utf-8'>")
  res.write("<h1>Olá, mundo</h1>")
  res.end()

}) 

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}!`)
})

