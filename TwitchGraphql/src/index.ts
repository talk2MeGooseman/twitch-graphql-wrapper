import { ApolloServer } from 'apollo-server-azure-functions'
import schema from './schema'
import depthLimit from 'graphql-depth-limit'

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

exports.graphqlHandler = server.createHandler()
