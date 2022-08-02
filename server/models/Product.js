const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  images: {
      type: String
  },
 
  description: {
    type: String
  },
  highlights: [
    {
      type: String
    },
  ],
  details: {
    type: String
  },
 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
