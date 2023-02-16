const mongoose = require ('mongoose');

const studentSchena = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:String
})

module.exports = mongoose.model('student',studentSchena)