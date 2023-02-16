
const mongodb = require('mongodb')
//  const user = require('../Model/userSchema')
const product = require('../Model/productModel')
const asyncHander = require('express-async-handler');
// const { error } = require('console');
const { insertMany } = require('../Model/productModel');



const getproduct= asyncHander(async (req,res)=>{
    let data = await product.find({});
    console.log("dda=datta======>",data);
    res.status(200).json({ message:data});
})

const postproduct= asyncHander(async (req,res)=>
{
    const{tital,discription, prize,catagries} = req.body;
if(!tital && !discription && !prize && !catagries){
    res.status(400);
    throw new Error("please enterssssss all fildes")
}
    let data = await product.create({
        tital:req.body.tital,
        discription:req.body.discription,
        prize:req.body.prize,
        catagries:req.body.catagries
    })
    console.log("faiz====>",data);
    res.status(200).json(data);
}
)
const putproduct= async (req,res)=>{
    const findId = await product.findById(req.params.id);
    if(!findId){
        req.status(400)
        res.send("User Not Found");
    }
    const updateuser = await product.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    }) 
    console.log("updatedata",updateuser);
    res.status(200).json({ message:`putdata"${req.params.id}`});
}


const deleteproduct= asyncHander(async (req,res)=>{
    let findId = await product.findById(req.params.id);
    if(!findId){
        res.status(400);
        res.send('user not found');
    }
    await findId.remove();
    res.status(200).json({ message:`deletedata ${req.params.id}`});
})


module.exports={
    getproduct,
     postproduct,
    putproduct,
    deleteproduct

}