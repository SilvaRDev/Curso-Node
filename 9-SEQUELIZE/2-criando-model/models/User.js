const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
  name: {
    type: DataTypes.STRING, // Define o tipo da coluna (Nesse caso, será uma string)
    allowNull: false, // Define se o valor poderá ser passado ao banco como nulo (NULL). (Nesse caso, como passamos false, ele não deixará que isso ocorra).
  },
  occupation: {
    type: DataTypes.STRING,
    required: true, // Define que essa coluna deve conter algum valor obrigatóriamente. Diferente do allowNull, que apenas não aceita valores nulos.
  },
  newsletter: {
    type: DataTypes.BOOLEAN, // Define que o tipo da coluna seja apenas de valores boleanos. (1 = true; 0 = false).
  },
})

module.exports = User
