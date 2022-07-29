import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  description: String,
  category: String,
  ingredients: String,
  image: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' }
});

export default mongoose.model('Recipe', recipeSchema);
