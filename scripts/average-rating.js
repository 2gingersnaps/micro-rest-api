// "use strict";

var averageRating = function(reviews, productName) {
  var total = 0;
  reviews.forEach(function(review) {
    total += parseInt(review.rating);
  });
  return ({ 'averageRating' : String(total / reviews.length)})
};

module.exports = averageRating;
