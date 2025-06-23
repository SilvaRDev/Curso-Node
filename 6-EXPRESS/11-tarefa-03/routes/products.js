const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/produto1', (req, res) => {
  res.sendFile(`${basePath}/products/product1.html`)
})

router.get('/produto2', (req, res) => {
  res.sendFile(`${basePath}/products/product2.html`)
})

module.exports = router