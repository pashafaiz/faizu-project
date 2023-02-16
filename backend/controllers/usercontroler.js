
const mongodb = require('mongodb')
const user = require('../Model/userSchema')
const asyncHander = require('express-async-handler');
const bcrypt  = require('bcryptjs')
//const { insertMany } = require('../Model/userSchema');
// const { error } = require('console');

        
// const getusers= asyncHander(async (req,res)=>{
//     let data = await user.find({});
//     console.log("dda=datta======>",data);
//     res.status(200).json({ message:data});
// })
const setusers = asyncHander(async(req,res)=>{
    const{ name , email , password , number }= req.body
    if(!name && !email && !password && !number){
        res.status(400);
        throw new Error ('please add all the filds')
    }
    let data  = await user.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        number:req.body.number,
//  console.log("====>",data)
//  res.status(200).json(data)

    })
})




const loginserver=asyncHandler(async (req,res)=>{

    const {email,password} = req.body;
    const userExists = await user.findOne({ email })
        if (userExists) {
            res.status(400);
            throw new Error('Email already exists')
        }
        const passexits = await user.findOne({password})
        if(passexits){
            res.status(400);
            throw new Error('Password already exists')
        }
        else{
    let result = await user.create({email:req.body.email,password:req.body.password});
    res.status(200).json(result)
        }
    })

// const getusers = asyncHander(async (req, res) => {
//     // if (!req.body.name || !req.body.email || !req.body.password || !req.body.MoNumber) {
//     // res.status(400)
//     // throw new Error('Please add a All body filds')
//     // }
//     const { name, email, password, number } = req.body;
//     if (!name && !email && !password && !number) {
//         res.status(400);
//         throw new Error('Please add a All body filds')
//     }
//     //check if user exists
//     const userExists = await users.findOne({ email })
//     if (userExists) {
//         res.status(400);
//         throw new Error('User already exists')
//     }

//     //hash password 
//     const salt = await bcrypt.getSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     //create user
//     const data = await users.create({
//         name,
//         email,
//         password: hashedPassword,
//         number: number
//     })
//     console.log("====>", data);
//     if (data) {
//         res.status(201).json({
//             _id: data.id,
//             name: data.name,
//             email: data.email,
//             number: data.number
//         })
//     } else {
//         res.status(400)
//         throw new Error('Invalid User Data')
//     }
//     //  res.status(200).json({ message: data });

// })





const postusers= asyncHander(async (req,res)=>{
    const{name,email, password,number} = req.body;
    if(!name && !email && !password && !number){
        res.status(400);
        throw new Error('please add some body fields');
    }

    let data = await user.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        number:req.body.password})
    console.log("faiz====>",data);
    res.status(200).json({ message:data});
}
)
const putusers= async (req,res)=>{
    const findId = await user.findById(req.params.id);
    if(!findId){
        req.status(400)
        res.send("User Not Found");
    }
    const updateuser = await user.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    }) 
    console.log("updatedata",updateuser);
    res.status(200).json({ message:`putdata${req.params.id}`});
}


const deleteusers= asyncHander(async (req,res)=>{
    let findId = await user.findById(req.params.id);
    if(!findId){
        res.status(400);
        res.send('user not found');
    }
    await findId.remove();
    res.status(200).json({ message:`deletedata ${req.params.id}`});
})


module.exports={
    getusers,
     postusers,
    putusers,
    deleteusers

}