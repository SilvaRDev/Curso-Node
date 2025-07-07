const { Sequelize } = require('sequelize')
const dBase = 'projeto-toughts'

const sequelize = new Sequelize(dBase, 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log(`Mysql conectado no banco ${dBase}!`)
} catch(err) {
  console.log(`Não foi possível conectar-se ao banco de dados. Erro: ${err}`)
}

module.exports = sequelize
