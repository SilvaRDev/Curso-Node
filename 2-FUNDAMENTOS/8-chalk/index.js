const chalk = require('chalk')

const nota = 3

if(nota >= 5) {
  console.log(chalk.green.bold("Parabéns! Você foi aprovado!"))
} else {
  console.log(chalk.bgRed.bold("Infelizmente você foi reprovado."))
}
