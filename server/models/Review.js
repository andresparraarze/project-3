const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  reviewDate: {
    type: Date,
    default: Date.now
  },
  stars: {
    type: Number,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;