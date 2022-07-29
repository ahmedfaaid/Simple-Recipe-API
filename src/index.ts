require('dotenv').config();
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { graphqlUploadExpress } from 'graphql-upload';
import mongoose from 'mongoose';
import cors from 'cors';

import typeDefs from './graphql/Types';
import resolvers from './graphql/Resolvers';
mongoose.set('debug', true);

const startServer = async () => {
  const app = express();
  const port = process.env.PORT || 3020;

  app.use(cors());
  app.use(express.static('public'));

  await mongoose.connect('mongodb://localhost:27017/recipe-api');

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    csrfPrevention: true
  });

  await server.start();

  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(`Server ready http://localhost:${port}${server.graphqlPath}`)
  );
};

startServer().catch(err => console.error(err));
