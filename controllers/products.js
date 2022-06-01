const express = require('express');
const Product = require('../models/product.js');
const router = express.Router();

// index
router.get('/', (req, res) => {
	Product.find({}, (error, allProducts) => {
		res.render('product/index.ejs', {
			products: allProducts,
		});
	});
});

// new
router.get('/new', (req, res) => {
	res.render('product/new.ejs');
});

// delete

// update

// create
router.post('/', (req, res) => {
	Product.create(req.body, (error, createdProduct) => {
		res.redirect('/products')
	});
	
});

// edit

// show


module.exports = router;