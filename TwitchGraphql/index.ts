import { ApolloServer, gql } from 'apollo-server-azure-functions'
import { helixUserById, helixUserByName } from './helixUserById';

// Construct a schema, using GraphQL schema language


const resolvers = {
  Query: {
    helix() {
      return {
        userById: (args: { id: string }) =>
          helixUserById(args),
        userByName: (args: { name: string }) =>
          helixUserByName(args),
      };
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers })

exports.graphqlHandler = server.createHandler()
