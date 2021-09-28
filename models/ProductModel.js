const mongoose = require('mongoose');




const ProductSchema = mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    data:{
        type:Array
    },
    menutype:{
        type:String,
        required:true,
    },
    



},{timestamps:true})

const Product = mongoose.model("product", ProductSchema)
module.exports = Product;