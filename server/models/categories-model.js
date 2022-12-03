const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new Schema({
  categories_num :{type:Number,required:true},
});

module.exports = mongoose.model("categories", Categories);
