const express = require('express');
const gigRoutes = express.Router();

let Gig = require('./gig.model');

//create
gigRoutes.route('/add').post(function (req, res) {
  let gig = new Gig(req.body);
  gig.save()
    .then(() => {
      res.status(200).json({'gig': 'gig in added successfully'})
    })
    .catch(() => {
      res.status(400).send("unable to save to database")
    });
});


//index
gigRoutes.route('/').get(function (req, res) {
  Gig.find(function(err, gigs){
    if(err){
      res.json(err);
    } else {
      res.json(gigs);
    }
  });
});

//edit
gigRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Gig.findById(id, function (err, gig) {
    if(err) {
      res.json(err);
    } else {
      res.json(gig);
    }
  });
});

//update
gigRoutes.route('/update/:id').post(function (req, res) {
  Gig.findById(req.params.id, function(err, gig) {
    if (!gig) {
      res.status(404).send("data is not found");
    } else {
      gig.venue = req.body.venue;
      gig.date = req.body.date;
      gig.contact = req.body.contact;
      gig.payAmount = req.body.payAmount;
      gig.gigLength = req.body.gigLength;
      gig.travelDistance = req.body.travelDistance;
      gig.travelTime = req.body.travelTime;
      gig.costOfGas = req.body.costOfGas;
      gig.milesPerGallon = req.body.milesPerGallon;
      gig.save().then(() => {
        res.json('update complete')
      })
      .catch(() => {
        res.status(400).send('unable to update')
      });
    }
  });
});

gigRoutes.route('/delete/:id').delete(function (req, res) {
  Gig.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err) {
      res.json(err);
    } else {
      res.json('deleted')
    }
  })
})

module.exports = gigRoutes;
