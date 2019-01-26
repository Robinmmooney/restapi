const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var myHost = process.env.IP;
// set up express app
const app = express();
// connect to mongodb
mongoose.connect('mongodb://' + myHost + '/ninjago');
//mongodb://rob:Justin88@ds041516.mlab.com:41516/ninjago
mongoose.Promise = global.Promise;

app.use(express.static('public'));
// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for requests');
});

//testing git commits