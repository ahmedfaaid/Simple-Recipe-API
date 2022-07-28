const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');
const RecipeController = require('../controllers/recipe');
const ImageController = require('../controllers/image');

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getRecipes: () => RecipeController.getRecipes(),
    getRecipe: (_, { id }) => RecipeController.getRecipe(id)
  },
  Mutation: {
    createRecipe: (_, { recipe, image }) =>
      RecipeController.createRecipe(recipe, image),
    deleteRecipe: (_, { id }) => RecipeController.deleteRecipe(id),
    updateRecipe: (_, { id, recipe }) =>
      RecipeController.updateRecipe(id, recipe),
    uploadImage: (_, { image }) => ImageController.uploadImage(image)
  }
};

module.exports = resolvers;
