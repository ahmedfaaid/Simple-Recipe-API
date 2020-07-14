const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  description: String,
  category: String,
  ingredients: String,
  imageRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
});

module.exports = mongoose.model('Recipe', recipeSchema);
