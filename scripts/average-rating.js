// "use strict";

const averageRating = function(reviews, productName) {
  let total = 0;
  reviews.forEach(function(review) {
    total += parseInt(review.rating);
  });
  return ({ 'averageRating' : String(total / reviews.length)})
};

module.exports = averageRating;
