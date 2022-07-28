const RecipeModel = require('../models/recipe');
const ImageModel = require('../models/image');
const { handleUpload } = require('../utils');

module.exports = {
  getRecipes: async () => {
    try {
      return await RecipeModel.find()
        .populate('image')
        .sort({ _id: -1 })
        .exec();
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
  createRecipe: async (recipe, image) => {
    try {
      const storedImage = await handleUpload(image);

      const recipeImage = await ImageModel(storedImage).save();

      return await RecipeModel({ ...recipe, image: storedImage._id }).save();
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
  }
};
