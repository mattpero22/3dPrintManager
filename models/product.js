const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
{
    name: {type: String, required:true},
    img: String,
    price: Number,
    description: String,
    color: String,
    material: String,
    weight: Number,
    height: Number,
    width: Number,
    depth: Number,
    completed: Boolean,
    shipped: Boolean,
    print_settings: {
        print_time: Number,
        nozzle_temp: Number,
        bed_temp: Number,
        infill_pct: Number,
        infill_patt: String,
        
    },    
},
    {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;