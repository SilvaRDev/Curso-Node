const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

// try{
//   sequelize.authenticate()
//   console.log('Sequelize conectado com sucesso!')
// } catch {
//   console.log('Não foi possível se conectar: ', error)
// }

module.exports = sequelize