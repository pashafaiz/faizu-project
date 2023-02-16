const  mongoose = require('mongoose')

const loginModel = mongoose.Schema({
    email:{
        typeof:String,
        required:[true,"Enter Your Email"]
    },


    password:{
        typeof:String,Number,
        required:[true,"Enter Your Password"]
    }
})