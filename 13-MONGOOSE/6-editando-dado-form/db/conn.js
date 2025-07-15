const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb://localhost:27017/testemongoose')
  console.log('Conectou ao mongodb (MONGOOSE)')
}

main().catch((err) => console.log(err))

module.exports = mongoose