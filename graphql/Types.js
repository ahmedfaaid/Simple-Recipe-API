const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Recipe {
    _id: ID!
    name: String!
    cuisine: String
    description: String!
    category: String!
    ingredients: String!
    imageRef: ID!
  }

  type Image {
    _id: ID!
    filename: String!
    mimetype: String!
    path: String!
  }

  type Query {
    getRecipes: [Recipe]!
    getRecipe(id: ID!): Recipe!
  }

  type Mutation {
    createRecipe(recipe: RecipeInput!): Recipe!
    deleteRecipe(id: String!): Recipe
    updateRecipe(id: String!, recipe: UpdateRecipeInput!): Recipe
    uploadImage(image: Upload!): Image
  }

  input RecipeInput {
    name: String!
    cuisine: String!
    description: String!
    category: String!
    ingredients: String!
    imageRef: ID!
  }

  input UpdateRecipeInput {
    name: String
    cuisine: String
    description: String
    category: String
    ingredients: String
  }
`;

module.exports = typeDefs;
