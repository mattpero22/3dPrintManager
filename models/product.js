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
    print_settings: {
        print_time: Number,
        nozzle_temp: Number,
        bed_temp: Number,
        infill_pct: Number,
        infill_patt: String,
        support: Boolean,
        success: Boolean
    },    
},
    {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;