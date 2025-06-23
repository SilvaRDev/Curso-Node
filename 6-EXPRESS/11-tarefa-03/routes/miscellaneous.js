const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/contato', (req, res) => {
  res.sendFile(`${basePath}/contact.html`)
})

router.get('/produtos', (req, res) => {
  res.sendFile(`${basePath}/products.html`)
})

module.exports = router