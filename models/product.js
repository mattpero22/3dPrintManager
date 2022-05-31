const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
{
    name: {type: String, required:true},
    color: String,
    material: String,
    weight: Number,
    height: Number,
    width: Number,
    depth: Number,
    print_time: Number,
    completed: Boolean,
    shipped: Boolean,
    print_settings: {},    
},
    {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;