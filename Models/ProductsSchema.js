const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const RatingSchema = new mongoose.Schema({
  rate: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: RatingSchema,
    required: true,
  },
  reviews: [ReviewSchema],
  distance: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);