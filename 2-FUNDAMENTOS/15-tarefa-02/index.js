const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
  {
    name: 'p1',
    message: 'Insira o seu nome:'
  },
  {
    name: 'p2',
    message: 'Insira a sua idade',
  },
]).then((answers) => {
  let name = answers.p1
  let age = answers.p2
  const stxError = "Insira seu nome e idade para obter o resultado."
  
  if(!name || !age) {
    console.log(chalk.red.bold(stxError))
  } else {
    let response = `Seu nome é ${name} e você tem ${age} anos!`
    console.log(chalk.bgYellow.black.bold(response))
  }

}).catch(err => console.log(err))
