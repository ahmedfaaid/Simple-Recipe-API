const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose').set('debug', true);
const cors = require('cors');

const typeDefs = require('./graphql/Types');
const resolvers = require('./graphql/Resolvers');

const app = express();
const port = process.env.PORT || 3020;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

app.use(cors());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/recipe-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.applyMiddleware({ app });

app.listen(port, () =>
  console.log(`Server ready http://localhost:${port}${server.graphqlPath}`)
);
