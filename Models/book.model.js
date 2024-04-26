
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  // ISBN (International Standard Book Number)
  description: { type: String },
  publishedDate: { type: Date },
  /////////////////////////////////
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  borrowedBy: [{ type: String, ref: "users" }],
  priceHistory: { type: Array, required: true, default: [] },
  quantityHistory: { type: Array, required: true, default: [] },

},
{
  versionKey:false,
  timestamps:true
});

const BookM = mongoose.model('Book', bookSchema);

module.exports = {BookM};
