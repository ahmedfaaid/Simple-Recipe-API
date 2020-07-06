# Simple Recipe API

A simple recipe api that exposes a graphql endpoint with CRUD features. The project uses Apollo GraphQL server with Node, Express, Mongoose and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js and MongoDB are required for this project to run. To install Node.js, download the appropriate package for your OS [here](https://nodejs.org/en/download/). Follow instructions to install MongoDB [here](https://docs.mongodb.com/manual/installation/).

### Installing

First clone this repository by running:

```bash
git clone https://github.com/ahmedfaaid/Simple-Recipe-API.git
```

Then install all the necessary dependencies by running:

```bash
npm install
```

Run the server using:

```bash
npm start
```

Open the GraphQL playground at http://localhost:3020/graphql

Create your first recipe

```graphql
mutation {
  createRecipe(
    recipe: {
      name: "Recipe name..."
      cuisine: "Origin of food..."
      description: "Delicious meal"
      category: "Main dish"
      ingredients: "Many ingredients..."
    }
  ) {
    _id
    name
    cuisine
    description
    category
    ingredients
  }
}
```

Query all recipes

```graphql
query {
  getRecipes {
    _id
    name
    ingredients
  }
}
```

Query one recipe

```graphql
query {
  getRecipe(
    id: "..."
  ) {
    _id
    name
    ingredients
  }
}
```

Other graphql operations available in the schema document.

## Built With

* [Apollo Server Express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/) - GraphQL server
* [Mongoose](https://mongoosejs.com/) - ODM Library
* [MongoDB](https://www.mongodb.com/) - Used to generate RSS Feeds

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
