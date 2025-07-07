const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash') 

const port = 3000

const app = express()

const conn = require('./db/conn')



conn 
  .sync()
  .then(() => {
    app.listen(port, () => {
      try {
        console.log('Server iniciado!')
      } catch(err) {
        console.log(`Ocorreu um erro na inicialização do express: ${err}`)
      }
    })
  })
  .catch((err) => console.log(err))