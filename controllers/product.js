const Product = require('../models/product');

async function getAllProducts(req, res) {

	await Product.find({}).exec((err, products) => {
		if (err) {
			res.status(500).send({
				message: 'Error en el servidor'
			});
		} else {
			if (products) {
				res.status(200).send({
					products
				});
			} else {
				res.status(400).send({
					message: 'No existen products'
				});
			}
		}
	});
}

async function getProduct(req, res) {
	const id = req.params.id;

	await Product.findById(id).exec((err, product) => {
		if (err) {
			res.status(500).send({
				message: 'Error en el servidor'
			});
		} else {
			if (product) {
				res.status(200).send({
					product
				});
			} else {
				res.status(400).send({
					message: 'No existen el product'
				});
			}
		}
	});
}

async function getProductId(req, res) {
	const id = req.params.id;

	await Product.find({ id: id }).exec((err, product) => {
		if (err) {
			res.status(500).send({
				message: 'Error en el servidor'
			});
		} else {
			if (product) {
				res.status(200).send({
					product
				});
			} else {
				res.status(400).send({
					message: 'No existen el product'
				});
			}
		}
	});
}

async function getProducts(req, res) {
	const id = req.params.id;
    let esPalindrome = palindrome(id);

	await Product.find({ $or: [ { brand: id }, { description: id } ] }).exec((err, products) => {
		if (err) {
			res.status(500).send({
				message: 'Error en el servidor'
			});
		} else {
			if (products) {
				products = mappedProduct(products, esPalindrome);
				res.status(200).send({
					products
				});
			} else {
				res.status(400).send({
					message: 'No existen el product'
				});
			}
		}
	});
}

function mappedProduct(arrayProduct, palindrome) {
	let productMapperArray = arrayProduct;
	let product = [];

	/*
        "_id": "60572ac9433a4f7639c5445d",
        "id": 10,
        "brand": "adsfsda",
        "description": "dñqy ipvukesh",
        "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        "price": 691504
    */

	if (palindrome) {
		productMapperArray.forEach((productMapperArray) => {
			product.push({
				_id: productMapperArray._id,
				id: productMapperArray.id,
				brand: productMapperArray.brand,
				description: productMapperArray.description,
				image: productMapperArray.image.replace('www.lider.cl/catalogo/images/','img/'),
				price: Math.ceil(productMapperArray.price / 2),
				palindrome:1
			});
		});
	} else {
		//product = arrayProduct;

        productMapperArray.forEach((productMapperArray) => {
			product.push({
				_id: productMapperArray._id,
				id: productMapperArray.id,
				brand: productMapperArray.brand,
				description: productMapperArray.description,
				image: productMapperArray.image.replace('www.lider.cl/catalogo/images/','img/'),
				price: productMapperArray.price,
				palindrome:0
			});
		});
	}

	return product;
}

function palindrome(parameter) {

    let palindrome = false;

    const paladrone = parameter.split('').reverse().join('');
	if (parameter === paladrone) {
		console.log(paladrone + ' Es un palindrome ');
		palindrome = true;
	} else {
		console.log(parameter + ' No es un palindrome ');
		palindrome = false;
	}

    return palindrome;
}

module.exports = {
	getProducts
};
