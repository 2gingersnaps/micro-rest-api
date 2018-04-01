var sampleUserIDs = [
  '11112222',
  '22223333',
  '33334444',
  '44445555',
  '55556666',
  '66667777',
  '77778888',
  '88889999',
  '99990000',
  '11110000',
  '22221111'
];
var iUserIDs = 0;
var sampleProductNames = [
  'Cookie 100',
  'Quark 200',
  'Airfoil 300',
  'Twinsies 400',
  'Zest 500',
  'Spike 600',
  'Scorpio 700',
  'Zork 800',
  'Spar 900'
];
var iProductNames = 0;
var sampleComments = [
  'On point. Bravo.',
  'Strongly disliked this product.',
  'LOL this was fun.',
  'Love love love.',
  'Just....why.',
  'Product is surprisingly vintage.',
  'Meh',
  'Slammin performance',
  'This product is super fly.',
  'Way to be Xtra'
];
var iComments = 0;
sampleRatings = [
  '1',
  '2',
  '3',
  '4',
  '5'
];
var iRatings = 0;

var dataCollection = [];

var seedData = function(reps) {
  for (i = 0; i < reps; i++) {
    var dataObj = {
      'userID' : sampleUserIDs[iUserIDs],
      'productName' : sampleProductNames[iProductNames],
      'comment' : sampleComments[iComments],
      'rating' : sampleRatings[iRatings]
    };
    dataCollection.push(dataObj);
    if (iUserIDs === sampleUserIDs.length) { iUserIDs = 0; } else { iUserIDs += 1; };
    if (iProductNames === sampleProductNames.length) { iProductNames = 0; } else { iProductNames += 1; };
    if (iComments === sampleComments.length) { iComments = 0; } else { iComments += 1; };
    if (iRatings === sampleRatings.length) { iRatings = 0; } else { iRatings += 1; };
  };
  console.log(dataCollection);
};

seedData(5000);

JSON.stringify(dataCollection);
