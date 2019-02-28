const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let ProductSchema = new Schema({
    name:{type: String, required: true, max:100},
    description:{ type: String, required:true, max: 1000},
    price: {type: Number, required:true},
});

module.exports= mongoose.model('product', ProductSchema);
