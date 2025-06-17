const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
  fs.readFile('mensagem.html', function(err, data) {
    res.writeHead(200, {'Content-type': 'text-html'}) // Retorna o código HTTP e seta o arquivo como um HTML
    res.write(data) // Renderiza o arquivo
    return res.end() // Finaliza a requisição
  })
})

server.listen(port, () => {
  console.log(`Server iniciado na porta ${port}!`)
})