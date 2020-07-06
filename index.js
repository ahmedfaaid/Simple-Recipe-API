const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/Types');
const resolvers = require('./graphql/Resolvers');

const app = express();
const port = process.env.PORT || 3020;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(port, () =>
  console.log(`Server ready http://localhost:${port}${server.graphqlPath}`)
);
