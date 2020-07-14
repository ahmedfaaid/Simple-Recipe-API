const RecipeModel = require('../models/recipe');

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
