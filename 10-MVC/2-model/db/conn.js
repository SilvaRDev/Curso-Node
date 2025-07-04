const { Sequelize } = require('sequelize')
const table = 'nodemvc'

const sequelize = new Sequelize(table, 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try {

  sequelize.authenticate()
  console.log(`MYSQL conectado no banco ${table}!`)

} catch(error) {
  console.log(`Não foi possível se conectar ao banco de dados: ${error}`)
}

module.exports = sequelize