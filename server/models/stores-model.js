const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Stores = new Schema({
  stores_num: {type:Number,required:true}
});

module.exports = mongoose.model("stores", Stores);
