const Products = require("../models/ProductModel")




//sow the list 


const index =(req,res,next)=>{
    Products.find()
    .then(respons=>{
        res.json({
            respons
        })
    })
    .catch(err=>{
        res.json({
            message:"an error"
        })
    })

}
const show =(req,res,next)=>{
   let serchID =req.body.id;
   Products.findById(serchID)
   .then(respons=>{
       res.json({
           respons
       })
   })
    .catch(err=>{
        res.json({
            message:"an error ocurdet"
        })
    })

}


const store =(req,res,next)=>{
    let newCategory =new  Products({
        id:req.body.id,
        title:req.body.id,
        data:req.body.data,
        menutype:req.body.menutype
    })
    newCategory.save()
    .then(responas=>{
        res.json({
            message:"urra"
        })
    })
    .catch(err=>{
        res.json({
            message:"ah"
        })
    })
}




