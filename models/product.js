
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    id:Number,
    brand: String,
    description: String,
    image: String,
    price: Number
})

//console.log(ProductSchema)
module.exports = mongoose.model('products', ProductSchema)
