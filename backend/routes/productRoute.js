const express  = require('express');
const { getusers } = require('../controllers/usercontroler');
// const app = express();
// app.use(express.json())

const router = express.Router()
const { getproduct, postproduct, putproduct, deleteproduct } = require('../controllers/productController');
router.use(express.json())

// Router.get('/',(req,res)=>{

//     res.status(400).json({
//         message:"hellow"
//     })
// })

// Router.post('/',(req,res)=>{
//     res.status(200).json({
//         message:"add products"
//     })
// })



// Router.put('/',(req,res)=>{
//     res.status(200).json({
//         message:"update products"
//     })
// })


// Router.delete('/',(req,res)=>{
//     res.status(200).json({
//         message:"delete products"
//     })
// })

router.get('/',getproduct)
router.post('/',postproduct)
router.put('/:id',putproduct)
router.delete('/:id',deleteproduct)

module.exports = router