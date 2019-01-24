const express = require ('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
   /* Ninja.find({}).then(function(ninjas){
       res.send(ninjas);
    });*/
 
    Ninja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000000, spherical: true}
        ).then(function(ninjas){
            console.log(ninjas);
            res.send(ninjas);
        });
});

// add a new ninja to the db
router.post('/ninjas', function(req, res){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    console.log('hello')
    res.json({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
