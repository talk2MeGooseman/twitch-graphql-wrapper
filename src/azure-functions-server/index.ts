import { ApolloServer } from 'apollo-server-azure-functions'
import schema from '../schema'
import depthLimit from 'graphql-depth-limit'
import context from "../context";
import { snakeCaseFieldResolver } from '../middleware/fieldResolver';

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context,
  fieldResolver: snakeCaseFieldResolver,
});

exports.graphqlHandler = server.createHandler()
