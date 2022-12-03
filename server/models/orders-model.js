const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orders = new Schema({
  orderNum :{type:string,required:true},
  orderAddress:{type:string,required:true},
  orderDate: { type: new Date(), required: true },
  orderQuantity: { type: Number, required: true },
  profit: { type: String, required: true },
});

module.exports = mongoose.model("orders", Orders);
