const RecipeModel = require('../models/recipe');

const resolvers = {
  Query: {
    getRecipes: () => RecipeModel.getRecipes(),
    getRecipe: (_, { id }) => RecipeModel.getRecipe(id),
  },
  Mutation: {
    createRecipe: (_, { recipe }) => RecipeModel.createRecipe(recipe),
    deleteRecipe: (_, { id }) => RecipeModel.deleteRecipe(id),
    updateRecipe: (_, { id, recipe}) => RecipeModel.updateRecipe(id, recipe),
  },
};

module.exports = resolvers;
