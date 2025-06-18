const path = require('path')

const customPath = "/relatorios/Rafael/relatorio1.pdf"

console.log(path.dirname(customPath)) // Caminho do diretório.
console.log(path.basename(customPath)) // Arquivo + sua extensão.
console.log(path.extname(customPath)) // Consulta a extensão do arquivo.

