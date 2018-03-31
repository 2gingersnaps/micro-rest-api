
const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
  title: String, // name of product being rated
  description: String // comment
  // timestamp
  // rating
  // zipcode
  // user uuid
});
module.exports = mongoose.model('Note', NoteSchema);
