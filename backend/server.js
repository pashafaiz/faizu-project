const express = require('express');
const dotenv = require('dotenv').config();
const port  = process.env.PORT || 5000;
const app = express();
const errorHandler = require('./middleware/errorMIddleware')
app.use(errorHandler);
app.use(express.json());
app.use('/api/user',require('./routes/userroute'));
app.use('/api/product',require('./routes/productRoute'))


// const errorHandler = require ('./middleware/errorMIddleware')
// console.log("===>",port);
const Connectdb = require('./config/db');
Connectdb()

// app.get('/',(req,res)=>{
//     res.send("file txt")
// });
// // 
// app.listen(port,()=>{
//     console.log("successfully")
// })
        

// app.use('/api/users', require('./routes/userroute'))
// app.use('api/product')
    app.listen(port,()=>{
        console.log(`====>${port}`);
    })

