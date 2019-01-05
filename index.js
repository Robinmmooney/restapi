const express = require('express');

//setup express app

const app = express();

app.get('/api',function(req, res){
  console.log('GET request');
  res.send({name:'Yoshi'});
});

//listens for requests

app.listen(process.env.PORT || 4000, function(){
  console.log('now listening for requests');
});






// const express = require('express');

// // set up express app
// const app = express();

// app.get('/api', function(req, res){
//   res.send({ name: 'Yoshi' });
// });

// // listen for requests
// app.listen(process.env.port || 4000, function(){
//     console.log('now listening for requests');
// });
