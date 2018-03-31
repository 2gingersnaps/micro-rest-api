
const mongoose = require('mongoose');
var defaultUserID = function() {
  return "10101010";
};
var defaultTimestamp = function() {
  return Date.now
};
var defaultProductName = function() {
  return "Product 000"
};
var defaultComment = function() {
  return "NO COMMENT"
};
var defaultRating = function() {
  return "0"
};
const ReviewSchema = new mongoose.Schema({
  userID: { type: String, default: defaultUserID() }, // generate a uuid if no real userID is present
  timestamp: { type : Date, default: defaultTimestamp() },
  productName: { type: String, default: defaultProductName() },
  comment: { type: String, default: defaultComment() },
  rating: { type: String, default: defaultRating() }
  // geolocation
});
module.exports = mongoose.model('Review', ReviewSchema);
