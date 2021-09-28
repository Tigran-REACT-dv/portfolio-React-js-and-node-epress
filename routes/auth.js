const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const userModel =require("../models/userModel")
const {check , validationResult} =require("express-validator/check");
const auth = require('../middlewares/auth')

router.get("/", auth, async (req,res)=>{
   try{
     const user = await userModel.findById(req.user.id).select('-password');
     res.json(user)
   } catch (err){
   console.log(err.message);
   res.status(500).send("esim")
   }
})



router.post("/",[
    check("email","emaily sxal e").isEmail(),
    check("password","xndrum em greq pasword").exists()
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email,password}=req.body;
    try {
        let user = await userModel.findOne({email});
         if(!user){
             return res.status(400).json({msg:"ayd maylov grancvac mard chka"})
         }
         const checkpasswords =await bcrypt.compare(password, user.password);
         if(!checkpasswords){
            return res.status(400).json({msg:"paroly sxal e"})  
          }
         const payload ={
            user:{
                id:user.id,
               }
         }
        jwt.sign(payload, config.get("SecretKey"),{
            expiresIn:360000
        },(err, token)=>{
            if(err) throw err;
            res.json({token})
        })
    } catch(error){
     console.log(error.message);
     res.status(500).send("server error") 
       }
})

module.exports = router;