require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core');
const mongoose = require('mongoose').set('debug', true);
const cors = require('cors');

const typeDefs = require('./graphql/Types');
const resolvers = require('./graphql/Resolvers');

const startServer = async () => {
  const app = express();
  const port = process.env.PORT || 3020;

  app.use(cors());
  app.use(express.static('public'));

  await mongoose.connect('mongodb://localhost:27017/recipe-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(`Server ready http://localhost:${port}${server.graphqlPath}`)
  );
};

startServer().catch(err => console.error(err));
