require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
// declaration
const product = require('./routes/product.route');
// use
app.use('/product', product);

// API Start
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

// MongoDB
const mongoose = require('mongoose');
// configuration
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
// connection
const uri = "mongodb+srv://"
    + process.env.MONGODB_USER + ":" + process.env.MONGODB_PWD
    + "@" + process.env.MONGODB_URL + "/test?retryWrites=true&w=majority";

mongoose.connect(uri);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
