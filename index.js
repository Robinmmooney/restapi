const express = require('express');
//const bodyParser

//setup express
const app = express();

//initialize routes
app.use('/api', require('./routes/api'));

//listens for requests
app.listen(process.env.PORT || 4000, function(){
   console.log('now listening for requests') ;
});





// const express = require('express');
// const bodyParser = require('body-parser');

// // set up express app
// const app = express();

// // use body-parser middleware
// app.use(bodyParser.json());

// // initialize routes
// app.use('/api', require('./routes/api'));

// // listen for requests
// app.listen(process.env.port || 4000, function(){
//     console.log('now listening for requests');
// });
