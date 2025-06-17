const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novoarquivo.txt'

fs.rename(arqAntigo, arqNovo, function(err) {
  if(err) {
    console.log(err)
    return
  }

  console.log(`O arquivo '${arqAntigo}' teve seu nome alterado para '${arqNovo}' com sucesso!`)
})