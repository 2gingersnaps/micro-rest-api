
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  userID: { type: String, default: '00000000' }, // generate a uuid if no real userID is present
  timestamp: { type : Date, default: Date.now },
  productName: { type: String, default: 'Product 000' },
  comment: { type: String, default: 'NO COMMENT' },
  rating: { type: String, default: '0' }
  // geolocation
});

module.exports = mongoose.model('Review', ReviewSchema);
