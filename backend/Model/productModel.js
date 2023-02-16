const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    tital:{
        type: String,
        required:[true,'please enter some tital']
    },


    discription:{
        type: String,
        required:[true,'please enter some discription']
    },

    prize:{
        type: Number,
        required:[true,'please enter some prize']
    },


    catagries:{
        type: Number,
        required:[true,'please enter some tccccc']
    },
},

 {
    timestamps: true
 }

);
module.exports = mongoose.model('product',productSchema)