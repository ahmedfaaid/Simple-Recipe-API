const RecipeController = require('../controllers/recipe');
const ImageController = require('../controllers/image');

const resolvers = {
  Query: {
    getRecipes: () => RecipeController.getRecipes(),
    getRecipe: (_, { id }) => RecipeController.getRecipe(id),
  },
  Mutation: {
    createRecipe: (_, { recipe }) => RecipeController.createRecipe(recipe),
    deleteRecipe: (_, { id }) => RecipeController.deleteRecipe(id),
    updateRecipe: (_, { id, recipe }) =>
      RecipeController.updateRecipe(id, recipe),
    uploadImage: (_, { image }) => ImageController.uploadImage(image),
  },
};

module.exports = resolvers;
