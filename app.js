const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const product = require('./routes/product.route');






const mongoose = require('mongoose');
let dbUrl = 'mongodb://test-back:sanjeev1990@ds147033.mlab.com:47033/test-back';

let mongoDB = process.env.MONGODB_URI || dbUrl;
mongoose.connect(mongoDB);
mongoose.promise = global.Promise;
let db =  mongoose.connection;
db.on('error', console.error.bind(console,'mongo db connection error'));




let port = 8000;

app.listen(port ,()=>{
    console.log('server running in port no' + port);
})
