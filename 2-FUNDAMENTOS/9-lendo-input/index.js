const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

const chalk = require('chalk')

readline.question("Qual a sua linguagem preferida?", (language) => {

  console.log(`A minha linguagem favorita é: ${chalk.yellow.bold(language)}!`)
  readline.close()

})
