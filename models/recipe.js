const mongoose = require('mongoose').set('debug', true);

mongoose.connect('mongodb://localhost:27017/recipe-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  cuisine: String,
  description: String,
  category: String,
  ingredients: String,
});

const RecipeModel = mongoose.model('Recipe', recipeSchema);

// Move to separate file later
module.exports = {
  getRecipes: async () => {
    try {
      return await RecipeModel.find().sort({ _id: -1 }).exec();
    } catch (error) {
      console.log(error);
    }
  },
  getRecipe: async id => {
    try {
      return RecipeModel.findById(id).exec();
    } catch (error) {
      console.log(error);
    }
  },
  createRecipe: async recipe => {
    try {
      return await RecipeModel(recipe).save();
    } catch (error) {
      console.log(error);
    }
  },
  deleteRecipe: async id => {
    try {
      const recipe = await RecipeModel.findById(id).exec();

      await RecipeModel.deleteOne({ _id: id });
      
      return recipe;
    } catch (error) {
      console.log(error);
    }
  },
  updateRecipe: async (id, recipe) => {
    try {
      const updatedRecipe = await RecipeModel.findByIdAndUpdate(
        id,
        { ...recipe },
        { new: true }
      );

      console.log(updatedRecipe);

      return updatedRecipe;
    } catch (error) {
      console.log(error);
    }
  },
};
