const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Products = new Schema({
    products_num :{type:Number,required:true},
    name: { type: String, required: true },
    color: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, require: true },
    manufacturer: { type: String, require: true },
});

module.exports = mongoose.model("products", Products);
