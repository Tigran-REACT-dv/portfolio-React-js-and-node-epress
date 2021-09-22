const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");



const connectDB =async ()=>{
    try {
        await mongoose.connect("mongodb+srv://loginreg:123321@cluster0.x7lbc.mongodb.net/myFirstDatabase", 
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("db conenct")
    }
    catch(err){
        console.log(err.message);
        process.exit(1)
    }
}
module.exports = connectDB