const path = require('path')

// Path absoluto
console.log(path.resolve('teste.txt'))

// Formando path
const midFolder = 'relatorios'
const fileName = 'rafael.txt'

const finalPath = path.join("/", 'arquivos', midFolder, fileName)

console.log(finalPath)
