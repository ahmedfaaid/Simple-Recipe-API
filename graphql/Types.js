const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Recipe {
    _id: ID!
    name: String!
    cuisine: String
    description: String!
    category: String!
    ingredients: String!
  }

  type Query {
    getRecipes: [Recipe]!
    getRecipe(id: ID!): Recipe!
  }

  type Mutation {
    createRecipe(recipe: RecipeInput!): Recipe!
    deleteRecipe(id: String!): Recipe
    updateRecipe(id: String!, recipe: UpdateRecipeInput!): Recipe
  }

  input RecipeInput {
    name: String!
    cuisine: String!
    description: String!
    category: String!
    ingredients: String!
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
