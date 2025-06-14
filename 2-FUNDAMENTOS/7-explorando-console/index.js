// Mais de um valor
const x = 10
const y = 'Algum texto'
const z = [1, 2]

console.log(x, y, z)

// Contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variável entre string
console.log('O nome é %S, e ele é programador', y) // Aparentemente não funciona mais...

// limpar o console
setTimeout(() => {
  console.clear()
}, 2000)
