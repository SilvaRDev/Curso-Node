const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {

  name: {
    type: DataTypes.STRING,
    rqeuire: true,
  },
  email: {
    type: DataTypes.STRING,
    rqeuire: true,
  },
  senha: {
    type: DataTypes.STRING,
    rqeuire: true,
  },

})

module.exports = User
