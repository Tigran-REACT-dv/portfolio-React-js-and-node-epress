const express = require("express");
const router = express.Router();



const ProductControle =require("../controlers/ProductControlers")

router.get("/",ProductControle,index)
router.post("/show",ProductControle,show)
router.post("/store",ProductControle,store)

module.exports =router;