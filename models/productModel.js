const mongoose =require("mongoose")


const ProductSchema =mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    title:{
         type:String,
         required:true,
    },
    icon:{
        type:String,
        required:true
    },
    data:[]
})

module.exports = mongoose.model("Product",ProductSchema)