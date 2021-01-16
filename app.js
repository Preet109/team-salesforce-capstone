const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// require('dotenv/config');
const dotenv = require('dotenv');
const postRoute = require('./routes/userposts');

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

const seatRoutes = require('./routes/seats');
app.use('/seats', seatRoutes);

const authRoute = require('./routes/auth');


//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});


dotenv.config();
//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);

//Middleware
app.use(express.json());

//Routes Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

// start listening
app.listen(3000, () => console.log('Server up and running port:3000'));