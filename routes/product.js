const express = require('express')
const ProductController = require('../controllers/product')

const api = express.Router()

/*
api.get('/products', ProductController.getProducts)
api.get('/product/:id', ProductController.getProduct)
api.get('/productId/:id', ProductController.getProductId)
api.get('/producto/:id', ProductController.getProducto)
*/

api.get('/products/:id', ProductController.getProducts)

module.exports = api