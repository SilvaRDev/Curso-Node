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
      message: 'O que você deseja fazer?',
      choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
    },
  ])
  .then((answer) => {
    
    const action = answer['action']
    
    if(action === 'Criar conta') {
      createAccount()
    } else if(action === 'Consultar saldo') {

    } else if(action === 'Depositar') {
      deposit()
    } else if(action === 'Sacar') {

    } else if(action === 'Sair') {
      console.log(chalk.bgBlue.hex('#000')('Obrigado por usar o accounts!'))
      process.exit()
    }
    
  })
  .catch(err => console.log(err))
  
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

    if(accountName === '') {
      console.log(chalk.bgRed.black('Insira um nome a sua conta!'))
      buildAccount()
      return
    }

    if(!fs.existsSync('accounts')) {
      fs.mkdirSync('accounts') // Cria um diretório com o nome Accounts.
    }

    if(fs.existsSync(`accounts/${accountName}.json`)) { // Caso exista uma conta com o nome digitado pelo user
      console.log(chalk.bgRed.black('Essa conta já existe. Escolha outro nome!'))

      buildAccount()
      return
    }

    fs.writeFileSync(
      `accounts/${accountName}.json`,
      '{"balance": 0}', 
      function(err) {
        console.log(err)
      },
    )

    console.log(chalk.green('Parabéns, a sua conta foi criada e já pode ser movimentada!'))

    operation()
  })
  .catch((err => console.log(err)))

}

// Add an amount to user account
function deposit() {

  inquirer 
  .prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta?'
    }
  ])
  .then((answer) => {

    const accountName = answer['accountName']

    // Verify if account exists
    if(!checkAccount(accountName)) {
      return deposit()
    }

  })
  .catch((err => console.log(err)))

}

function checkAccount(accountName) {

  if(!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.hex('#000')('Esta conta não existe. Tente novamente...'))
    return false
  } 

  return true

}
