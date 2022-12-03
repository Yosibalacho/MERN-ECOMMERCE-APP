const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Departments = new Schema({
    departments_num :{type:string,required:true},
});

module.exports = mongoose.model("departments", Departments);
