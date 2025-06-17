const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

  const q = url.parse(req.url, true)
  const fileName = q.pathname.substring(1)

  if(fileName.includes('html')) { // Caso o arquivo tenha HTML
    if(fs.existsSync(fileName)) {
      fs.readFile(fileName, function(err, data) {
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(data)
        return res.end()
      })
    } else {
      // 404
      fs.readFile('erro.html', function(err, data) {
        res.writeHead(404, {'Content-type': 'text/html'})
        res.write(data)
        return res.end()
      })
    }
  }
  
})

server.listen(port, () => {
  console.log(`Server iniciado na porta ${port}!`)
})