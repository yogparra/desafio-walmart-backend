const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())

//cargar rutas
const product_routes = require('./routes/product')

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

// rutas base
app.use('/api', product_routes)

module.exports = app