import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Upload

  type Recipe {
    _id: ID!
    name: String!
    cuisine: String
    description: String!
    category: String!
    ingredients: String!
    image: Image
  }

  type Image {
    _id: ID!
    filename: String!
    mimetype: String!
    path: String!
    encoding: String!
  }

  type Query {
    getRecipes: [Recipe]!
    getRecipe(id: ID!): Recipe!
  }

  type Mutation {
    createRecipe(recipe: RecipeInput!, image: Upload): Recipe!
    deleteRecipe(id: String!): Recipe
    updateRecipe(id: String!, recipe: UpdateRecipeInput!): Recipe
    uploadImage(image: Upload!): Image!
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

export default typeDefs;
