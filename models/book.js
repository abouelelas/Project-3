const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  phrase: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
