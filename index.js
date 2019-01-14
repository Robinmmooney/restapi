const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var myHost = process.env.IP;
// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://' + myHost + '/ninjago');
mongoose.Promise = global.Promise;

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for requests');
});
