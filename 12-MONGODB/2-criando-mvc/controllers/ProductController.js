const Product = require('../models/product')

module.exports = class productController {
  static showProducts(req, res) {
    res.render('products/all')
  }
}
