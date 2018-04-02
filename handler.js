
'use strict';

require('dotenv').config({ path: './variables.env' });

const connectToDatabase = require('./db');
const Review = require('./models/Review');
const averageRating = require('./scripts/average-rating');

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Review.create(JSON.parse(event.body))
        .then(review => callback(null, {
          statusCode: 200,
          body: JSON.stringify(review)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the review.'
        }));
    });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Review.findById(event.pathParameters.id)
        .then(review => callback(null, {
          statusCode: 200,
          body: JSON.stringify(review)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the review.'
        }));
    });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Review.find()
        .then(reviews => callback(null, {
          statusCode: 200,
          body: JSON.stringify(reviews)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the reviews.'
        }))
    });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Review.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(review => callback(null, {
          statusCode: 200,
          body: JSON.stringify(review)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the reviews.'
        }));
    });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Review.findByIdAndRemove(event.pathParameters.id)
        .then(review => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed review with id: ' + review._id, review: review })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the reviews.'
        }));
    });
};

// sample custom query to get all reviews by userID and rating
module.exports.report = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Review.find({ 'userID': event.pathParameters.userID, 'rating': event.pathParameters.rating  })
        .then(reviews => callback(null, {
          statusCode: 200,
          body: JSON.stringify(reviews)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the report.'
        }))
    });
};

// return the average rating for all products
module.exports.productReport = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Review.find()
        .then(reviews => callback(null, {
          statusCode: 200,
          body: JSON.stringify(averageRating(reviews))
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the product report.'
        }))
    });
};
