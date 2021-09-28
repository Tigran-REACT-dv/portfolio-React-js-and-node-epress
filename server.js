const express =require("express");
const connectDB =require("./config/db");
const fs = require("fs");
const path =require("path");
const app =express();

connectDB()

app.use(express.json({extended:false}))
app.get("/",(req,res)=> res.send("welcome to Backend"));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.get("/data",(req,res)=> {
    fs.promises.readFile(path.resolve("data.json"),"utf8").then((data)=>{
        res.send(data)
    })
});


const PORT =process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Server Run..."))
