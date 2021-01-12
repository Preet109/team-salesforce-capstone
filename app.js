const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Parsing JSON
app.use(bodyParser.json());


//import Routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

const itemRoutes = require('./routes/items');
app.use('/items', itemRoutes);

const statusRoutes = require('./routes/statuses');
app.use('/statuses', statusRoutes);

const orderRoutes = require('./routes/orders');
app.use('/orders', orderRoutes);

// const tableRoutes = require('./routes/tables');
// app.use('/tables', tableRoutes);
//Routes
app.get('/',(req,res)=>{
    res.send('We are on home');
});


//Connect to DB

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true}, 
    ()=>console.log('connected to db')
);

// start listening
app.listen(3000);


