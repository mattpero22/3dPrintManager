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
router.delete('/:id', (req, res) => {
	Product.findByIdAndDelete(req.params.id, (error, deletedProduct) => {
		res.redirect("/products")
	});
});

// update
router.put('/:id', (req, res) => {
	Product.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(error, updatedProduct) => {
			res.redirect(`/products/${req.params.id}`)
		}
	);
});

// create
router.post('/', (req, res) => {
	Product.create(req.body, (error, createdProduct) => {
		res.redirect('/products')
	});
	
});

// edit
router.get("/:id/edit", (req, res) => {
	Product.findById(req.params.id, (error, foundProduct) => {
	  res.render("product/edit.ejs", { product: foundProduct })
	})
})

// show
router.get('/:id', (req, res) => {
	Product.findById(req.params.id, (err, foundProduct) => {
		res.render('product/show.ejs', {
			product: foundProduct,
		});
	});
});

module.exports = router;