const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Gig = new Schema({
  venue: {
    type: String
  },
  date: {
    type: String
  },
  contact: {
    type: String
  },
  payAmount: {
    type: Number
  },
  gigLength: {
    type: Number
  },
  travelDistance: {
    type: Number
  },
  travelTime: {
    type: Number
  },
  costOfGas: {
    type: Number
  },
  milesPerGallon: {
    type: Number
  }
},
  {
    collection: 'gigs'
});

module.exports = mongoose.model('Gig', Gig);
