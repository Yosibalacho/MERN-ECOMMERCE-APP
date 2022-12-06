const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orders = new Schema({
  orderNum :{type:Number,required:true},
  orderAddress:{type:String,required:true},
  orderName:{type:String,required:true},
  orderTime: { type: String, required: true },
  orderQuantity: { type: Number, required: true },
  profit: { type: Number, required: true },
});

module.exports = mongoose.model("orders", Orders);
