import mongoose from 'mongoose';
import RecipeModel from '../models/recipe';
import ImageModel from '../models/image';
import { handleUpload } from '../utils';
import { RecipeInput } from '../types';

const recipeController = {
  getRecipes: async () => {
    try {
      return await RecipeModel.find()
        .populate('image')
        .sort({ _id: -1 })
        .exec();
    } catch (error) {
      console.log(error);
      return;
    }
  },
  getRecipe: async (id: mongoose.Types.ObjectId) => {
    try {
      return RecipeModel.findById(id).exec();
    } catch (error) {
      console.log(error);
      return;
    }
  },
  createRecipe: async (recipe: RecipeInput, image: any) => {
    try {
      const storedImage = await handleUpload(image);

      const recipeImage = new ImageModel(storedImage);
      const newRecipe = new RecipeModel({ ...recipe, image: storedImage._id });

      await recipeImage.save();
      await newRecipe.save();

      return newRecipe;
    } catch (error) {
      console.log(error);
      return;
    }
  },
  deleteRecipe: async (id: mongoose.Types.ObjectId) => {
    try {
      const recipe = await RecipeModel.findById(id).exec();

      await RecipeModel.deleteOne({ _id: id });

      return recipe;
    } catch (error) {
      console.log(error);
      return;
    }
  },
  updateRecipe: async (id: mongoose.Types.ObjectId, recipe: RecipeInput) => {
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
      return;
    }
  }
};

export default recipeController;
