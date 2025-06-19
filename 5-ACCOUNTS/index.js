// Módulos externos

const inquirer = require('inquirer')
const chalk = require('chalk')

// Módulos internos
const fs = require('fs')

// Cores do chalk

operation()

function operation() {
  
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'O que vocÊ deseja fazer?',
      choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
    },
  ])
  .then((answer) => {
    
    const action = answer['action']
    
    if(action === 'Criar conta') {
      createAccount()
    } 
    
  })
  .catch((err => console.log(err)))
  
}

// Create an account

function createAccount() {
  console.log(chalk.bgGreen.hex('#000').bold('Agradecemos por escolher o nosso banco!'))
  console.log(chalk.bgGreen.hex('#000').bold('Defina as opções da sua conta a seguir:'))

  buildAccount()
}

function buildAccount() {

  inquirer 
  .prompt([
    {
      name: 'accountName',
      message: 'Digite um nome para a sua conta:'
    },
  ])
  .then((answer) => {
    const accountName = answer['accountName']

    console.info(accountName)

    if(!fs.existsSync('accounts')) {
      fs.mkdirSync('accounts') // Cria um diretório com o nome Accounts.
    }
  })
  .catch((err => console.log(err)))

}
