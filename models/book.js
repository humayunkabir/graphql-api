const mongoose = require('mongoose');
const { Schema } = mongoose;

/*======================================
| Schema for Book
=======================================*/
const bookSchema = new Schema({
  title: String,
  genre: String,
  published: String,
  authorId: String,
});

module.exports = mongoose.model('Book', bookSchema);