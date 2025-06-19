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
}


