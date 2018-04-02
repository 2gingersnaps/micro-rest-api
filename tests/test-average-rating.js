// "use strict";

const averageRating = require('../scripts/average-rating');

var testAverageRating = function() {

  const reviews = [
    {
      'rating' : '2'
    },
    {
      'rating' : '4'
    },
    {
      'rating' : '6'
    }
  ]
  const productName = 'testProduct';

  var averageRating1 = '4';
  var averageRating2 = averageRating(reviews, productName).averageRating;

  console.log('Running testAverageRating...');
  console.log('averageRating1 should be equal to averageRating2');
  console.log('averageRating1 is ', averageRating1);
  console.log('averageRating2 is ', averageRating2);

  if ( averageRating1 === averageRating2 ) {
    return console.log('testAverageRating PASSED');
  }

  console.log('testAverageRating FAILED')

};

module.exports = testAverageRating;
