import mongoose from 'mongoose';
import { GraphQLUpload } from 'graphql-upload';
import recipeController from '../controllers/recipe';
import imageController from '../controllers/image';
import { RecipeInput } from '../types';

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getRecipes: () => recipeController.getRecipes(),
    getRecipe: (_: any, { id }: { id: mongoose.Types.ObjectId }) =>
      recipeController.getRecipe(id)
  },
  Mutation: {
    createRecipe: (
      _: any,
      { recipe, image }: { recipe: RecipeInput; image: any }
    ) => recipeController.createRecipe(recipe, image),
    deleteRecipe: (_: any, { id }: { id: mongoose.Types.ObjectId }) =>
      recipeController.deleteRecipe(id),
    updateRecipe: (
      _: any,
      { id, recipe }: { id: mongoose.Types.ObjectId; recipe: RecipeInput }
    ) => recipeController.updateRecipe(id, recipe),
    uploadImage: (_: any, { image }: { image: any }) =>
      imageController.uploadImage(image)
  }
};

export default resolvers;
