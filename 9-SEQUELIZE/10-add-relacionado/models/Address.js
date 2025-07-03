const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', { // Define na conexão a criação da tabela Address, que será uma FOREIGN KEY de Users (por meio do ID)

  street: {
    type: DataTypes.STRING,
    required: true
  },
  number: {
    type: DataTypes.STRING,
    required: true
  },
  city: {
    type: DataTypes.STRING,
    required: true
  }

});

Address.belongsTo(User)

module.exports = Address;
