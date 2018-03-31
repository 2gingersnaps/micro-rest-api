
const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
  userID: String, // generate a uuid if no real userID is present
  // timestamp
  productName: String, // name of product being rated
  comment: String, // comment from User
  rating: String
  // geolocation
});
module.exports = mongoose.model('Review', ReviewSchema);
