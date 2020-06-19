import { ApolloServer } from 'apollo-server-azure-functions'
import schema from '../schema'
import depthLimit from 'graphql-depth-limit'
import context from "../context";

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context
});

exports.graphqlHandler = server.createHandler()
